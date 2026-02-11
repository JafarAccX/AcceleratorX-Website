import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import { useGetUserByMobile } from "../../hooks/customer";
import { useUser } from "../../context/UserContext";
import { CreateCustomerPayload } from "../../types/customer";
import { OtpTimer } from "../OtpTimer";
import { api } from "../../api";

const LoadingSpinner = () => (
  <div className="inline-block h-5 w-5 border-2 border-white/30 rounded-full border-t-white animate-spin" />
);

const FloatingShape = ({ size = "w-20 h-20", position = "top-10 left-10" }) => (
  <div className={`absolute ${position} ${size} bg-white/5 rounded-full blur-xl`} />
);
export const SignUpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  const [verifyMethod, setVerifyMethod] = useState<"phone" | "email">("phone");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Focus states for enhanced styling
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [otpFocused, setOtpFocused] = useState(false);

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
    if (!formState.firstName || !formState.lastName) {
      toast.error("Please fill in your name first.");
      return;
    }

    if (verifyMethod === "phone") {
      if (!formState.mobile || formState.mobile.length < 10) {
        toast.error("Please enter a valid 10-digit phone number");
        return;
      }
    } else {
      if (!formState.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
        toast.error("Please enter a valid email address");
        return;
      }
    }
    // if (existingUser) {
    //   toast.error(
    //     "This phone number is already registered. Please sign in instead."
    //   );
    //   return;
    // }

    setIsProcessing(true);
    try {
      let response;
      if (verifyMethod === "phone") {
        response = await api.post("/auth/request-otp", { phoneNumber: formState.mobile });
      } else {
        response = await api.post("/auth/email/send-otp", { email: formState.email?.toLowerCase() });
      }

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
      let response;
      if (verifyMethod === "phone") {
        const payload = {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email?.toLowerCase(),
          mobile: formState.mobile,
          callingCode: "+91",
          otpCode: otp,
        };
        response = await api.post("/auth/register", payload);
      } else {
        const payload = {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email?.toLowerCase(),
          mobile: formState.mobile,
          callingCode: formState.mobile ? "+91" : null,
          otpCode: otp,
        };
        response = await api.post("/auth/email/register", payload);
      }

      console.log(response);

      if (response.status === 201 && response.data.success) {
        const { user, accessToken } = response.data;
        login({ user, accessToken });
        toast.success("Registration successful! Welcome.");
        // Check for redirect path in location state
        const from = location.state?.from?.pathname || "/profile";
        navigate(from, { replace: true });
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
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,119,198,0.2),_transparent_50%)]"></div>
      </div>

      {/* Floating Shapes */}
      <FloatingShape size="w-32 h-32" position="top-20 left-10" />
      <FloatingShape size="w-24 h-24" position="top-40 right-20" />
      <FloatingShape size="w-16 h-16" position="bottom-20 left-1/4" />
      <FloatingShape size="w-28 h-28" position="bottom-32 right-10" />

      {/* Left side illustration */}
      <div className="hidden lg:flex w-1/2 flex-col items-end justify-center p-8 relative z-10">
        <div className="relative w-full flex items-center justify-center max-w-[600px]">
          <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
          <img
            src="/assets/signup.webp"
            alt="People Illustration"
            className="relative z-10 w-full drop-shadow-2xl"
            onError={(e) => {
              console.error("Image failed to load");
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-[600px]">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Create Account
              </h2>
              <p className=" font-medium">
                {!showOTP
                  ? "Join us today and get started"
                  : `Enter the verification code sent to your ${verifyMethod === 'phone' ? 'phone' : 'email'}`}
              </p>
            </div>

            {!showOTP && (
              <div className="flex p-1 bg-gray-100/10 rounded-xl">
                <button
                  onClick={() => setVerifyMethod("phone")}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${verifyMethod === "phone"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  Verify via Phone
                </button>
                <button
                  onClick={() => setVerifyMethod("email")}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${verifyMethod === "email"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  Verify via Email
                </button>
              </div>
            )}

            {!showOTP ? (
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold  block">
                      First Name
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${firstNameFocused ? 'opacity-100' : 'opacity-0'
                        }`} style={{ padding: '2px' }}>
                        <div className="w-full h-full bg-white rounded-lg"></div>
                      </div>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={formState.firstName || ""}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400"
                        disabled={showOTP || isProcessing}
                        onFocus={() => setFirstNameFocused(true)}
                        onBlur={() => setFirstNameFocused(false)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold  block">
                      Last Name
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${lastNameFocused ? 'opacity-100' : 'opacity-0'
                        }`} style={{ padding: '2px' }}>
                        <div className="w-full h-full bg-white rounded-lg"></div>
                      </div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formState.lastName || ""}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400"
                        disabled={showOTP || isProcessing}
                        onFocus={() => setLastNameFocused(true)}
                        onBlur={() => setLastNameFocused(false)}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold  block">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${emailFocused ? 'opacity-100' : 'opacity-0'
                      }`} style={{ padding: '2px' }}>
                      <div className="w-full h-full bg-white rounded-lg"></div>
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formState.email || ""}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400"
                      disabled={showOTP || isProcessing}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                    />
                  </div>
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold  block">
                    Mobile Number
                  </label>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${formState.mobile ? 'opacity-100' : 'opacity-0'
                      }`} style={{ padding: '2px' }}>
                      <div className="w-full h-full bg-white rounded-lg"></div>
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter 10 digit mobile number"
                        value={formState.mobile || ""}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                        className="relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400"
                        disabled={showOTP || isProcessing}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSendOTP}
                  disabled={isProcessing}
                  className="w-full relative overflow-hidden py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {isProcessing ? <LoadingSpinner /> : "Send OTP"}
                  </span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className=" font-medium mb-4">
                      An OTP has been sent to your {verifyMethod === 'phone' ? 'mobile number' : 'email address'}.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold  block">
                      Verification Code
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl transition-opacity duration-300 ${otpFocused ? 'opacity-100' : 'opacity-0'
                        }`} style={{ padding: '2px' }}>
                        <div className="w-full h-full bg-white rounded-lg"></div>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400 text-center text-lg tracking-widest"
                        maxLength={6}
                        disabled={isProcessing}
                        onFocus={() => setOtpFocused(true)}
                        onBlur={() => setOtpFocused(false)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <OtpTimer initialTime={60} onResend={handleSendOTP} />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRegister}
                  disabled={isProcessing}
                  className="w-full relative overflow-hidden py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {isProcessing ? <LoadingSpinner /> : "Verify & Register"}
                  </span>
                </button>
              </div>
            )}

            {/* Sign in link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  state={{ from: location.state?.from }}
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-blue-600"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="mt-8 text-center text-white/60">
            <p className="text-sm">
              Secure registration with {verifyMethod === 'phone' ? 'mobile' : 'email'} verification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;