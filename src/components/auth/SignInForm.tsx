import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { useGetUserByMobile } from "../../hooks/customer";

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
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [errorMessage, setErrorMessage] = React.useState("");

  // Using the custom hook to get user by mobile number
  const { data: userData, isLoading, isError, error } = useGetUserByMobile(phoneNumber);

  console.log(error);

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

    const OTPLess = (window as WindowOverride)?.OTPless;
    if (!OTPLess) {
      toast.error("OTP service not available. Please try again later.");
      return;
    }

    try {
      console.log(userData);

      if (userData) {
        // User exists, proceed with sending OTP
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
      } else {
        toast.error("This phone number is not registered. Please sign up first.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send OTP. Please try again.";
      toast.error(errorMessage);
      setShowOTP(false);
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
      // setIsLoading(true);
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
          // Store user data and authentication state in localStorage
          localStorage.setItem(
            "userData",
            JSON.stringify({
              ...userData,
              isAuthenticated: true,
            }),
          );

          setUser(userData);

          toast.success("Welcome back!");

          // Execute onSuccess callback if provided
          if (onSuccess) {
            onSuccess();
          }
          // Navigate to dashboard
          navigate("/profile");
        } else {
          toast.error("Account not found. Please sign up first.");
          navigate("/sign-up");
        }
      } else {
        throw new Error(error || "Failed to verify OTP");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Invalid OTP. Please try again.";
      toast.error(errorMessage);
      setOtp("");
    }
  };

  const handleResendOTP = async () => {
    setTimer(30);
    await handleSendOTP();
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900">
      {/* Left side illustration */}
      <div className="hidden lg:flex w-1/2 flex-col items-end justify-center p-8 relative">
        <div className="relative w-full flex items-center justify-center max-w-[600px]">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-violet-500/30 blur-3xl rounded-full transform -rotate-6"></div> */}
          <img src="/assets/signup.png" alt="People Illustration" className="relative z-10 w-full" />
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
              <br />
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
                  <div className="flex items-center  rounded-lg overflow-hidden">
                    <span className="rounded-lg text-[#6B7B93] bg-white/10 px-4 py-3 text-sm mr-1">+91</span>
                    <input
                      id="phoneNumber"
                      type="tel"
                      maxLength={10}
                      placeholder="Enter mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={showOTP || isLoading}
                      className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2 "
                    />
                  </div>
                </div>
              </div>

              {isError && <div className="text-red-600"> Invalid Credentials</div>}

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
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    disabled={isLoading}
                    className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2 "
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
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      <span>Sending OTP...</span>
                    </div>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3.5 font-medium relative transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                  disabled={isLoading}
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
