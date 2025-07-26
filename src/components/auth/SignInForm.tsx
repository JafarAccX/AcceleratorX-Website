import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { api } from "../../api";
import { AxiosError } from "axios";

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

interface ApiError {
  message: string;
  success: boolean;
}

export function SignInForm({ onSuccess }: SignInFormProps) {
  const navigate = useNavigate();
  const { login } = useUser();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
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

    setIsProcessing(true);
    try {
      const response = await api.post("/auth/request-otp", {
        phoneNumber: `${phoneNumber}`,
      });

      if (response.data.success) {
        toast.success("OTP sent successfully!");
        setShowOTP(true);
        setTimer(60);
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      toast.error(
        axiosError.response?.data?.message || "An error occurred while sending OTP."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await api.post("/auth/verify-otp", {
        phoneNumber: `${phoneNumber}`,
        otpCode: otp,
      });

      if (response.data.success) {
        toast.success("Login successful!");
        const { user, accessToken, refreshToken } = response.data;
        login({ user, accessToken, refreshToken });

        if (onSuccess) {
          onSuccess();
        } else {
          navigate("/"); // Redirect to home or dashboard
        }
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      toast.error(
        axiosError.response?.data?.message || "An error occurred during verification."
      );
    } finally {
      setIsProcessing(false);
    }
  };

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

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
            <p className="text-gray-600">
              {!showOTP
                ? "Enter your phone number to receive an OTP"
                : "An OTP has been sent to your number"}
            </p>
          </div>

          {!showOTP ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    +91
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your 10-digit phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={handleSendOTP}
                disabled={isProcessing}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
              >
                {isProcessing ? <LoadingSpinner /> : "Send OTP"}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="otp" className="sr-only">
                  OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  maxLength={6}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button
                onClick={handleVerifyOTP}
                disabled={isProcessing}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400"
              >
                {isProcessing ? <LoadingSpinner /> : "Verify OTP"}
              </button>
              <div className="text-center text-sm text-gray-500">
                {timer > 0 ? (
                  <p>Resend OTP in {timer}s</p>
                ) : (
                  <button
                    onClick={handleSendOTP}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
