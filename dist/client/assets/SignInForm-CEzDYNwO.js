import { u as useNavigate, b as useUser, r as reactExports, j as jsxRuntimeExports, n, c as api } from "./main-BOeEXsPM.js";
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block h-5 w-5 border-2 border-white/30 rounded-full border-t-white animate-spin" });
const FloatingShape = ({ size = "w-20 h-20", position = "top-10 left-10" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute ${position} ${size} bg-white/5 rounded-full blur-xl` });
function SignInForm({ onSuccess }) {
  const navigate = useNavigate();
  const { login } = useUser();
  const [phoneNumber, setPhoneNumber] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [showOTP, setShowOTP] = reactExports.useState(false);
  const [timer, setTimer] = reactExports.useState(0);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const [phoneNumberFocused, setPhoneNumberFocused] = reactExports.useState(false);
  const [otpFocused, setOtpFocused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let interval;
    if (showOTP && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1e3);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [showOTP, timer]);
  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      n.error("Please enter a valid 10-digit phone number");
      return;
    }
    setIsProcessing(true);
    try {
      const response = await api.post("/auth/request-otp", {
        phoneNumber: `${phoneNumber}`
      });
      if (response.data.success) {
        n.success("OTP sent successfully!");
        setShowOTP(true);
        setTimer(60);
      } else {
        n.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      const axiosError = error;
      n.error(
        axiosError.response?.data?.message || "An error occurred while sending OTP."
      );
    } finally {
      setIsProcessing(false);
    }
  };
  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      n.error("Please enter a valid 6-digit OTP");
      return;
    }
    setIsProcessing(true);
    try {
      const response = await api.post("/auth/verify-otp", {
        phoneNumber: `${phoneNumber}`,
        otpCode: otp
      });
      if (response.data.success) {
        n.success("Login successful!");
        const { user, accessToken } = response.data;
        login({ user, accessToken });
        if (onSuccess) {
          onSuccess();
        } else {
          navigate("/");
        }
      } else {
        n.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      const axiosError = error;
      n.error(
        axiosError.response?.data?.message || "An error occurred during verification."
      );
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-xl bg-white/95 border border-white/20 rounded-2xl shadow-2xl p-8 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent", children: "Welcome Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 font-medium", children: !showOTP ? "Enter your phone number to receive an OTP" : "Enter the verification code sent to your phone" })
        ] }),
        !showOTP ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "text-sm font-semibold text-gray-700 block", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-opacity duration-300 ${phoneNumberFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 text-gray-500 font-medium z-10", children: "+91" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "phone",
                    name: "phone",
                    type: "tel",
                    autoComplete: "tel",
                    required: true,
                    className: "w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400",
                    placeholder: "Your 10-digit phone number",
                    value: phoneNumber,
                    onChange: (e) => setPhoneNumber(e.target.value),
                    onFocus: () => setPhoneNumberFocused(true),
                    onBlur: () => setPhoneNumberFocused(false)
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "otp", className: "text-sm font-semibold text-gray-700 block", children: "Verification Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl transition-opacity duration-300 ${otpFocused ? "opacity-100" : "opacity-0"}`, style: { padding: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-white rounded-lg" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "otp",
                  name: "otp",
                  type: "text",
                  maxLength: 6,
                  required: true,
                  className: "relative w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-transparent bg-gray-50/80 backdrop-blur-sm transition-all duration-300 text-gray-900 font-medium placeholder:text-gray-400 text-center text-lg tracking-widest",
                  placeholder: "000000",
                  value: otp,
                  onChange: (e) => setOtp(e.target.value),
                  onFocus: () => setOtpFocused(true),
                  onBlur: () => setOtpFocused(false)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleVerifyOTP,
              disabled: isProcessing,
              className: "w-full relative overflow-hidden py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex items-center justify-center gap-2", children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : "Verify OTP" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: timer > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
              "Resend OTP in ",
              timer,
              "s"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleSendOTP,
              className: "font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-blue-600",
              children: "Resend OTP"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center text-white/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Secure authentication powered by OTP verification" }) })
    ] }) })
  ] });
}
export {
  SignInForm
};
