import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { useGetUserByMobile } from "../../hooks/customer";
import { Customer } from "../../types/customer";

interface WindowOverride extends Window {
  OTPless?: any;
}

const LoadingSpinner = () => (
  <motion.div
    className="inline-block h-4 w-4 border-2 border-white rounded-full border-t-transparent"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

export interface SignInFormProps {
  onSuccess?: () => void;
}

export function SignInForm({ onSuccess }: SignInFormProps) {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [showOTP, setShowOTP] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [cachedUserData, setCachedUserData] = React.useState<Customer | null>(null);

  // Only fetch user data when we have a valid phone number and haven't cached it yet
  const shouldFetchUser = phoneNumber.length === 10 && !cachedUserData;
  const {
    data: fetchedUserData,
    isLoading: isUserLoading,
    isError,
  } = useGetUserByMobile(shouldFetchUser ? phoneNumber : "");

  // Cache the user data when it's fetched
  React.useEffect(() => {
    if (fetchedUserData && phoneNumber.length === 10) {
      setCachedUserData(fetchedUserData);
    }
  }, [fetchedUserData, phoneNumber]);

  // Clear cached data when phone number changes
  React.useEffect(() => {
    if (phoneNumber.length !== 10) {
      setCachedUserData(null);
    }
  }, [phoneNumber]);

  // Use cached data if available, otherwise use fetched data
  const userData = cachedUserData || fetchedUserData;

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (showOTP && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [showOTP, timer]);

  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    if (isUserLoading) {
      toast.error("Please wait while we verify your phone number");
      return;
    }

    if (!userData) {
      toast.error("This phone number is not registered. Please sign up first.");
      return;
    }

    const OTPLess = (window as WindowOverride)?.OTPless;
    if (!OTPLess) {
      toast.error("OTP service not available. Please try again later.");
      return;
    }

    try {
      setIsProcessing(true);
      const OTPlessSignin = new OTPLess();

      const { success, error } = await OTPlessSignin.initiate({
        channel: "PHONE",
        phone: phoneNumber,
        countryCode: "+91",
        otpLength: 6,
        expiry: 60,
      });

      if (success) {
        setShowOTP(true);
        setTimer(30);
        toast.success("OTP sent successfully");
      } else {
        throw new Error(error || "Failed to send OTP");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send OTP. Please try again.";
      toast.error(errorMessage);
      setShowOTP(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    const OTPLess = (window as WindowOverride)?.OTPless;
    if (!OTPLess) {
      toast.error("OTP service not available. Please try again later.");
      return;
    }

    try {
      setIsProcessing(true);
      const OTPlessSignin = new OTPLess();

      const { response, success, error } = await OTPlessSignin.verify({
        otp: otp,
        channel: "PHONE",
        phone: phoneNumber,
        countryCode: "+91",
      });

      if (success && response?.verification === "COMPLETED") {
        if (userData) {
          console.log("User data:", userData);

          // Validate userData before storing
          if (userData && typeof userData === "object") {
            try {
              // Store user data in localStorage
              const userDataToStore = {
                ...userData,
                isAuthenticated: true,
              };

              localStorage.setItem("userData", JSON.stringify(userDataToStore));
              setUser(userData);
              toast.success("Welcome back!");

              // Execute onSuccess callback if provided
              if (onSuccess) {
                onSuccess();
              } else {
                // Navigate to dashboard
                navigate("/profile");
              }
            } catch (storageError) {
              console.error("Error storing user data:", storageError);
              toast.error("Login successful but failed to save session. Please try again.");
            }
          } else {
            throw new Error("Invalid user data received");
          }
        } else {
          toast.error("Account not found. Please sign up first.");
          navigate("/sign-up");
        }
      } else {
        throw new Error(error || "Failed to verify OTP");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      const errorMessage = error instanceof Error ? error.message : "Invalid OTP. Please try again.";
      toast.error(errorMessage);
      setOtp("");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleResendOTP = async () => {
    setTimer(30);
    await handleSendOTP();
  };

  const isLoading = isUserLoading || isProcessing;

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900">
      {/* Left side illustration */}
      <div className="hidden lg:flex w-1/2 flex-col items-end justify-center p-8 relative">
        <div className="relative w-full flex items-center justify-center max-w-[600px]">
          <img
            src="/assets/signup.png"
            alt="People Illustration"
            className="relative z-10 w-full"
            onError={(e) => {
              console.error("Image failed to load");
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[450px] space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-3">
              Sign In
            </h1>
            <p className="text-blue-100/80 text-lg">
              Welcome to AcceleratoX, the premier scholarship examination for students.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (showOTP) {
                handleVerifyOTP();
              } else {
                handleSendOTP();
              }
            }}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="phoneNumber" className="text-blue-50 font-medium">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="flex items-center rounded-lg overflow-hidden">
                    <span className="rounded-lg text-[#6B7B93] bg-white/10 px-4 py-3 text-sm mr-1">+91</span>
                    <input
                      id="phoneNumber"
                      type="tel"
                      maxLength={10}
                      placeholder="Enter mobile number"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // Only allow digits
                        setPhoneNumber(value);
                        // Reset OTP state and clear cached data when phone number changes
                        if (showOTP) {
                          setShowOTP(false);
                          setOtp("");
                          setTimer(0);
                        }
                        // Clear cached data when user starts typing a new number
                        if (value.length < 10) {
                          setCachedUserData(null);
                        }
                      }}
                      disabled={showOTP || isLoading}
                      className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
                    />
                  </div>
                </div>
              </div>

              {isError && (
                <div className="text-red-400 text-sm">This phone number is not registered. Please sign up first.</div>
              )}

              {showOTP && (
                <div>
                  <label htmlFor="otp" className="text-blue-50 font-medium">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // Only allow digits
                      setOtp(value);
                    }}
                    maxLength={6}
                    disabled={isLoading}
                    className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
                  />
                  {timer > 0 ? (
                    <p className="text-sm text-blue-200/80 text-center mt-2">Resend OTP in {timer}s</p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="w-full text-blue-300 hover:text-blue-200 text-sm mt-2 transition-colors duration-200"
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              )}

              {!showOTP ? (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3.5 font-medium relative transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                  disabled={isLoading || phoneNumber.length !== 10}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      <span>{isUserLoading ? "Checking..." : "Sending OTP..."}</span>
                    </div>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3.5 font-medium relative transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    "Verify OTP"
                  )}
                </button>
              )}
            </div>
          </form>

          <div className="text-center">
            <p className="text-blue-200/60">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/sign-up")}
                className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                disabled={isLoading}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
