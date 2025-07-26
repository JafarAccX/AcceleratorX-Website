import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useGetUserByMobile } from "../../hooks/customer";
import { useUser } from "../../context/UserContext";
import { CreateCustomerPayload } from "../../types/customer";
import Loader from "../Loader";
import { OtpTimer } from "../OtpTimer";
import { api } from "../../api";

const Illustration = () => (
  <img
    src="/images/auth/signup-illustration.svg"
    alt="Sign Up Illustration"
    className="w-full h-auto"
  />
);

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { user, login } = useUser();
  const [formState, setFormState] = useState<Partial<CreateCustomerPayload>>({
    callingCode: "+91",
    mobileVerified: false,
    emailVerified: false,
    active: true,
    certificateGenerated: false,
    role: "Customer",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // const { data: existingUser } = useGetUserByMobile(formState?.mobile || "");

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleInputChange = (
    field: keyof CreateCustomerPayload,
    value: string
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendOTP = async () => {
    if (!formState.firstName || !formState.lastName || !formState.email) {
      toast.error("Please fill in your name and email first.");
      return;
    }
    if (!formState.mobile || formState.mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    // if (existingUser) {
    //   toast.error(
    //     "This phone number is already registered. Please sign in instead."
    //   );
    //   return;
    // }

    setIsProcessing(true);
    try {
      const response = await api.post("/auth/request-otp", {
        phoneNumber: `${formState.mobile}`,
      });

      if (response.status === 200 && response.data.success) {
        setShowOTP(true);
        toast.success(response.data.message);
      } else {
        throw new Error(response.data.message || "Failed to send OTP");
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";
      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as { response: { data: { message: string } } };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
      setShowOTP(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRegister = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsProcessing(true);
    try {
      const payload = {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        mobile: formState.mobile,
        callingCode: "91",
        otpCode: otp,
      };

      const response = await api.post("/auth/register", payload);

      if (response.status === 201 && response.data.success) {
        const { user, accessToken, refreshToken } = response.data;
        login({ user, accessToken, refreshToken });
        toast.success("Registration successful! Welcome.");
        navigate("/profile");
      } else {
        throw new Error(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";
      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as { response: { data: { message: string } } };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <Illustration />
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Create an Account
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formState.firstName || ""}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={showOTP || isProcessing}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formState.lastName || ""}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={showOTP || isProcessing}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={formState.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={showOTP || isProcessing}
            />
            <div className="flex items-center bg-gray-700 rounded-md">
              <span className="p-3 text-gray-400">+91</span>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formState.mobile || ""}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className="w-full p-3 bg-transparent focus:outline-none"
                disabled={showOTP || isProcessing}
              />
            </div>

            {!showOTP ? (
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isProcessing ? <Loader /> : "Send OTP"}
              </button>
            ) : (
              <div className="w-full mt-4 space-y-4">
                <div>
                  <p className="text-white text-base font-semibold mb-2">
                    An OTP has been sent to your mobile number.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
                    maxLength={6}
                    disabled={isProcessing}
                  />
                </div>
                <OtpTimer initialTime={60} onResend={handleSendOTP} />
                <button
                  type="button"
                  onClick={handleRegister}
                  disabled={isProcessing}
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isProcessing ? <Loader /> : "Verify & Register"}
                </button>
              </div>
            )}
          </form>
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-400 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
