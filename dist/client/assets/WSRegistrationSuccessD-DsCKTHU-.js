import { q as useLocation, j as jsxRuntimeExports, L as Link, k as motion, n } from "./main-CRd4IIg_.js";
import { m as FaCopy, h as FaLinkedin, i as FaInstagram, j as FaYoutube, k as FaDiscord } from "./index-DSmcHret.js";
import { C as CheckCircle } from "./check-circle-CNekhBmX.js";
const WSRegistrationSuccessD = () => {
  const location = useLocation();
  const state = location.state;
  if (!state?.registrationDetails || !state?.zoomDetails) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Registration Details Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600", children: "Please complete the registration process to view this page." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/workshop/gen-ai-masterclass-four", className: "mt-4 inline-block text-blue-600 hover:text-blue-700", children: "Return to Workshop Page" })
    ] }) });
  }
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    n.success("Copied to clipboard!");
  };
  const getWhatsAppLink = () => {
    const workshopType = state.registrationDetails.workshop_type.toLowerCase();
    if (workshopType.includes("da") || workshopType.includes("data")) {
      return "https://chat.whatsapp.com/F37nunVbnd3BWRjcA4Bt9Q";
    } else if (workshopType.includes("gen") || workshopType.includes("ai") || workshopType.includes("flowwise")) {
      return "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L";
    } else if (workshopType.includes("pm") || workshopType.includes("product")) {
      return "https://chat.whatsapp.com/IaFM3xfYfmRBO0jwiaDIHN";
    }
    return "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L";
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { className: "w-5 h-5" }),
      url: "https://www.linkedin.com/company/acceleratorxorg",
      color: "bg-[#0077B5]"
    },
    {
      name: "Instagram",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { className: "w-5 h-5" }),
      url: "https://www.instagram.com/acceleratorxorg/",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
    },
    {
      name: "YouTube",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaYoutube, { className: "w-5 h-5" }),
      url: "https://youtube.com/@acceleratorxorg",
      color: "bg-[#FF0000]"
    },
    {
      name: "Discord",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaDiscord, { className: "w-5 h-5" }),
      url: "https://discord.gg/WKAdQuuv",
      color: "bg-[#5865F2]"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-xl rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.2, type: "spring", stiffness: 150 },
              className: "mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-10 h-10 text-green-500" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Registration Successful!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-100 text-lg", children: [
            "Welcome, ",
            state.registrationDetails.name,
            "!"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Your Workshop Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-1", children: "Workshop Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gray-900", children: state.registrationDetails.workshop_type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-1", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gray-900", children: state.registrationDetails.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-1", children: "Workshop Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gray-900", children: state.zoomDetails.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-600 font-medium mb-2", children: "Zoom Meeting Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Meeting ID:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-gray-900", children: state.zoomDetails.meetingId }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleCopyClick(state.zoomDetails.meetingId),
                      className: "p-1 hover:bg-blue-100 rounded transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCopy, { className: "w-4 h-4 text-blue-600" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: state.zoomDetails.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors",
                  children: "Join Zoom Meeting"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-6 bg-gray-50 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Next Steps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Check your email for the workshop confirmation and additional details." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Join our community to connect with fellow learners and get updates." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Mark your calendar and join the workshop on time!" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-8 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4 text-center", children: "Connect With Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: social.url,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: `${social.color} text-white p-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`,
              children: [
                social.icon,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: social.name })
              ]
            },
            social.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: getWhatsAppLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold",
              children: "Join Workshop WhatsApp Community"
            }
          ) })
        ] })
      ] }) })
    }
  );
};
export {
  WSRegistrationSuccessD as default
};
