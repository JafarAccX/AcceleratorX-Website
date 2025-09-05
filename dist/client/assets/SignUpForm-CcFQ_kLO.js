import { r as reactExports, j as jsxRuntimeExports, u as useNavigate, b as useUser, L as Link, z as zt, c as api } from "./main-at0j2bC6.js";
const OtpTimer = ({ initialTime, onResend }) => {
  const [timeLeft, setTimeLeft] = reactExports.useState(initialTime);
  const [isTimerRunning, setIsTimerRunning] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!isTimerRunning) return;
    if (timeLeft === 0) {
      setIsTimerRunning(false);
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1e3);
    return () => clearInterval(timerId);
  }, [timeLeft, isTimerRunning]);
  const handleResendClick = () => {
    setTimeLeft(initialTime);
    setIsTimerRunning(true);
    onResend();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4", children: isTimerRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400", children: [
    "Resend OTP in ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-white", children: [
      timeLeft,
      "s"
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: handleResendClick,
      className: "text-blue-400 hover:underline text-sm",
      children: "Resend OTP"
    }
  ) });
};
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block h-5 w-5 border-2 border-white/30 rounded-full border-t-white animate-spin" });
const FloatingShape = ({ size = "w-20 h-20", position = "top-10 left-10" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute ${position} ${size} bg-white/5 rounded-full blur-xl` });
const SignUpForm = () => {
  const navigate = useNavigate();
  const { user, login } = useUser();
  const [formState, setFormState] = reactExports.useState({
    callingCode: "+91",
    mobileVerified: false,
    emailVerified: false,
    active: true,
    certificateGenerated: false,
    role: "Customer",
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  });
  const [otp, setOtp] = reactExports.useState("");
  const [showOTP, setShowOTP] = reactExports.useState(false);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const [firstNameFocused, setFirstNameFocused] = reactExports.useState(false);
  const [lastNameFocused, setLastNameFocused] = reactExports.useState(false);
  const [emailFocused, setEmailFocused] = reactExports.useState(false);
  const [mobileFocused, setMobileFocused] = reactExports.useState(false);
  const [otpFocused, setOtpFocused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);
  const handleInputChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const handleSendOTP = async () => {
    if (!formState.firstName || !formState.lastName || !formState.email) {
      zt.error("Please fill in your name and email first.");
      return;
    }
    if (!formState.mobile || formState.mobile.length !== 10) {
      zt.error("Please enter a valid 10-digit phone number");
      return;
    }
    setIsProcessing(true);
    try {
      const response = await api.post("/auth/request-otp", {
        phoneNumber: `${formState.mobile}`
      });
      if (response.status === 200 && response.data.success) {
        setShowOTP(true);
        zt.success(response.data.message);
      } else {
        throw new Error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error;
        errorMessage = axiosError.response?.data?.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      zt.error(errorMessage);
      setShowOTP(false);
    } finally {
      setIsProcessing(false);
    }
  };
  const handleRegister = async () => {
    if (!otp || otp.length !== 6) {
      zt.error("Please enter a valid 6-digit OTP.");
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
        otpCode: otp
      };
      const response = await api.post("/auth/register", payload);
      if (response.status === 201 && response.data.success) {
        const { user: user2, accessToken } = response.data;
        login({ user: user2, accessToken });
        zt.success("Registration successful! Welcome.");
        navigate("/profile");
      } else {
        throw new Error(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error;
        errorMessage = axiosError.response?.data?.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      zt.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,119,198,0.2),_transparent_50%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingShape, { size: "w-32 h-32", position: "top-20 left-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingShape, { size: "w-24 h-24", position: "top-40 right-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingShape, { size: "w-16 h-16", position: "bottom-20 left-1/4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingShape, { size: "w-28 h-28", position: "bottom-32 right-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex w-1/2 flex-col items-end justify-center p-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex items-center justify-center max-w-[600px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/10 rounded-3xl blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/signup.webp",
          alt: "People Illustration",
          className: "relative z-10 w-full drop-shadow-2xl",
          onError: (e) => {
            console.error("Image failed to load");
            e.currentTarget.style.display = "none";
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[600px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent", children: "Create Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " font-medium", children: !showOTP ? "Join us today and get started" : "Enter the verification code sent to your phone" })
        ] }),
        !showOTP ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold  block", children: "First Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${firstNameFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "First Name",
                    value: formState.firstName || "",
                    onChange: (e) => handleInputChange("firstName", e.target.value),
                    className: "relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400",
                    disabled: showOTP || isProcessing,
                    onFocus: () => setFirstNameFocused(true),
                    onBlur: () => setFirstNameFocused(false)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold  block", children: "Last Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${lastNameFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Last Name",
                    value: formState.lastName || "",
                    onChange: (e) => handleInputChange("lastName", e.target.value),
                    className: "relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400",
                    disabled: showOTP || isProcessing,
                    onFocus: () => setLastNameFocused(true),
                    onBlur: () => setLastNameFocused(false)
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold  block", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${emailFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Email Address",
                  value: formState.email || "",
                  onChange: (e) => handleInputChange("email", e.target.value),
                  className: "relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400",
                  disabled: showOTP || isProcessing,
                  onFocus: () => setEmailFocused(true),
                  onBlur: () => setEmailFocused(false)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold  block", children: "Mobile Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${mobileFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 text-gray-500 font-medium z-10", children: "+91" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Mobile Number",
                    value: formState.mobile || "",
                    onChange: (e) => handleInputChange("mobile", e.target.value),
                    className: "w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400",
                    disabled: showOTP || isProcessing,
                    onFocus: () => setMobileFocused(true),
                    onBlur: () => setMobileFocused(false)
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSendOTP,
              disabled: isProcessing,
              className: "w-full relative overflow-hidden py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex items-center justify-center gap-2", children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : "Send OTP" })
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " font-medium mb-4", children: "An OTP has been sent to your mobile number." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold  block", children: "Verification Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl transition-opacity duration-300 ${otpFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Enter 6-digit OTP",
                    value: otp,
                    onChange: (e) => setOtp(e.target.value),
                    className: "relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400 text-center text-lg tracking-widest",
                    maxLength: 6,
                    disabled: isProcessing,
                    onFocus: () => setOtpFocused(true),
                    onBlur: () => setOtpFocused(false)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OtpTimer, { initialTime: 60, onResend: handleSendOTP }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleRegister,
              disabled: isProcessing,
              className: "w-full relative overflow-hidden py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex items-center justify-center gap-2", children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : "Verify & Register" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-4 border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/sign-in",
              className: "font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-blue-600",
              children: "Sign In"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center text-white/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Secure registration with mobile verification" }) })
    ] }) })
  ] });
};
export {
  SignUpForm,
  SignUpForm as default
};
