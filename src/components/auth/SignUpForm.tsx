import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { supabase } from "../../lib/supabaseClient";

const LoadingSpinner = () => (
  <motion.div
    className="inline-block h-4 w-4 border-2 border-white rounded-full border-t-transparent"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

interface WindowOverride extends Window {
  OTPless?: any;
}

export interface SignUpFormProps {
  onSuccess?: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(true); // change it to false
  const [fullName, setFullName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [designation, setDesignation] = useState("");

  useEffect(() => {
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
      setIsLoading(true);

      // Check if phone number already exists
      const { data: existingUser } = await supabase.from("users").select("id").eq("phone_number", phoneNumber).single();

      if (existingUser) {
        toast.error("This phone number is already registered. Please sign in instead.");
        return;
      }

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
        setTimer(60);
        toast.success("OTP sent successfully");
      } else {
        throw new Error(error || "Failed to send OTP");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send OTP. Please try again.";
      toast.error(errorMessage);
      setShowOTP(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
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
      const OTPlessSignin = new OTPLess();

      const { response, success, error } = await OTPlessSignin.verify({
        otp: otp,
        channel: "PHONE",
        phone: phoneNumber,
        countryCode: "+91",
      });

      if (success && response?.verification === "COMPLETED") {
        setPhoneVerified(true);
        setShowOTP(false);
        setOtp("");
        toast.success("Phone number verified successfully");
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
    setTimer(60);
    await handleSendOTP();
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!phoneVerified) {
        toast.error("Please verify your phone number first");
        return;
      }

      if (!fullName.trim()) {
        toast.error("Please enter your full name");
        setIsLoading(false);
        return;
      }

      if (!email.trim()) {
        toast.error("Please enter your email address");
        setIsLoading(false);
        return;
      }

      if (!educationLevel.trim()) {
        toast.error("Please enter your education level");
        setIsLoading(false);
        return;
      }

      if (!workExperience.trim()) {
        toast.error("Please enter your work experience");
        setIsLoading(false);
        return;
      }

      if (!designation.trim()) {
        toast.error("Please enter your designation");
        setIsLoading(false);
        return;
      }

      // check for existing user
      const { data: userData, error: userDataError } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("phone_number", phoneNumber)
        .single();

      if (userData) {
        console.log("no need to insert the data again", userData);

        throw new Error(userDataError?.message || "Failed to fetch user data");
      } else {
        console.log("sending the data to supabase");

        const { data, error } = await supabase
          .from("profiles")
          .insert({
            phone_number: phoneNumber,
            full_name: fullName,
            email: email,
            education_level: educationLevel,
            work_experience: workExperience,
            designation: designation,
          })
          .select("*");

        if (error) {
          console.error("209 : ");
          throw new Error(error.message);
        }
        console.log("User data inserted:", data);
        toast.success("User data inserted successfully");

        // Update UserContext with the new user data
        setUser(data[0]);

        localStorage.setItem(
          "userData",
          JSON.stringify({
            ...data[0],
            isAuthenticated: true,
          }),
        );
      }

      toast.success("Welcome to the platform!");

      // Call onSuccess first if it exists
      if (onSuccess) {
        onSuccess();
      }

      console.log("navigating to profile page");

      // Navigate after onSuccess
      navigate("/profile");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-40">
      {/* Form */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full space-y-8">
          <form
            className="space-y-6 relative max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (showOTP) {
                handleVerifyOtp(otp);
              } else if (phoneVerified) {
                handleSignUp(e);
              } else {
                handleSendOTP();
              }
            }}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-blue-50 font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isLoading}
                  className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-blue-50 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="text-blue-50 font-medium">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="flex items-center bg-white/10 rounded-lg border border-white/10 focus-within:border-blue-400 transition-all duration-200">
                    <span className="text-white/80 px-3 py-2 border-r border-white/10">+91</span>
                    <input
                      id="phoneNumber"
                      type="tel"
                      maxLength={10}
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      // disabled={showOTP || isLoading || phoneVerified}
                      className="bg-transparent border-0 focus:ring-0 text-white placeholder:text-blue-200/50"
                    />
                  </div>

                  {!phoneVerified && !showOTP && (
                    <button
                      type="button"
                      onClick={handleSendOTP}
                      className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3 font-medium disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
                      disabled={isLoading || !phoneNumber || phoneNumber.length !== 10}
                    >
                      {isLoading ? <LoadingSpinner /> : "Verify Phone Number"}
                    </button>
                  )}
                </div>
              </div>

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
                      setOtp(e.target.value);
                      if (e.target.value.length === 6) {
                        handleVerifyOtp(e.target.value);
                      }
                    }}
                    maxLength={6}
                    disabled={isLoading}
                    className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
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

              {phoneVerified && (
                <>
                  <div>
                    <label htmlFor="educationLevel" className="text-blue-50 font-medium">
                      Education Level
                    </label>
                    <input
                      id="educationLevel"
                      required
                      placeholder="Enter your education level"
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                      disabled={isLoading}
                      className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="workExperience" className="text-blue-50 font-medium">
                      Work Experience
                    </label>
                    <input
                      id="workExperience"
                      required
                      placeholder="Enter your work experience"
                      value={workExperience}
                      onChange={(e) => setWorkExperience(e.target.value)}
                      disabled={isLoading}
                      className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="designation" className="text-blue-50 font-medium">
                      Designation
                    </label>
                    <input
                      id="designation"
                      required
                      placeholder="Enter your designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      disabled={isLoading}
                      className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3.5 font-medium relative transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <LoadingSpinner />
                        <span>Registering...</span>
                      </div>
                    ) : (
                      "Register"
                    )}
                  </button>
                </>
              )}
            </div>
          </form>

          <div className="text-center">
            <p className="text-blue-200/60">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/sign-in")}
                className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
              >
                Sign In
              </button>
            </p>
          </div>

          <Toaster position="top-center" />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
