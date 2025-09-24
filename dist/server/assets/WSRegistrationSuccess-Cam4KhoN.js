import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Video, Copy } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import toast from "react-hot-toast";
import { L as Link } from "../entry-server.js";
import { useLocation } from "react-router";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
const WSRegistrationSuccess = () => {
  const location = useLocation();
  const state = location.state;
  if (!state?.registrationDetails || !state?.zoomDetails) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Registration Details Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Please complete the registration process to view this page." }),
      /* @__PURE__ */ jsx(Link, { to: "/workshop/gen-ai-masterclass-bxwcy", className: "mt-4 inline-block text-blue-600 hover:text-blue-700", children: "Return to Workshop Page" })
    ] }) });
  }
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };
  const getWhatsAppLink = () => {
    const workshopType = state.registrationDetails.workshop_type.toLowerCase();
    if (workshopType.includes("da") || workshopType.includes("data")) {
      return "https://chat.whatsapp.com/F37nunVbnd3BWRjcA4Bt9Q";
    } else if (workshopType.includes("gen") || workshopType.includes("ai")) {
      return "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L";
    } else if (workshopType.includes("pm") || workshopType.includes("product")) {
      return "https://chat.whatsapp.com/IaFM3xfYfmRBO0jwiaDIHN";
    }
    return "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L";
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: /* @__PURE__ */ jsx(FaLinkedin, { className: "w-5 h-5" }),
      url: "https://www.linkedin.com/company/acceleratorxorg",
      color: "bg-[#0077B5]"
    },
    {
      name: "Instagram",
      icon: /* @__PURE__ */ jsx(FaInstagram, { className: "w-5 h-5" }),
      url: "https://www.instagram.com/acceleratorxorg/",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
    },
    {
      name: "YouTube",
      icon: /* @__PURE__ */ jsx(FaYoutube, { className: "w-5 h-5" }),
      url: "https://youtube.com/@acceleratorxorg",
      color: "bg-[#FF0000]"
    },
    {
      name: "Discord",
      icon: /* @__PURE__ */ jsx(FaDiscord, { className: "w-5 h-5" }),
      url: "https://discord.gg/WKAdQuuv",
      color: "bg-[#5865F2]"
    }
  ];
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-xl rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.2, type: "spring", stiffness: 150 },
              className: "mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6",
              children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10 text-green-500" })
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Registration Successful!" }),
          /* @__PURE__ */ jsxs("p", { className: "text-blue-100", children: [
            "Welcome to the Workshop, ",
            state.registrationDetails.name,
            "!"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 py-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Workshop Details" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-xl p-6 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-blue-600 mt-1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Date & Time" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: state.zoomDetails.time })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Video, { className: "w-6 h-6 text-blue-600 mt-1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Zoom Meeting" }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-2", children: [
                  "Meeting ID: ",
                  state.zoomDetails.meetingId
                ] }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: state.zoomDetails.link,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    className: "inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                    children: [
                      "Join Meeting",
                      /* @__PURE__ */ jsx(Video, { className: "w-4 h-4" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-6 h-6 text-green-600 mt-1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Join WhatsApp Group" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2", children: "Connect with fellow participants and instructors" }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: getWhatsAppLink(),
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    className: "inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors",
                    children: [
                      "Join Group",
                      /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-4 h-4" })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 py-6 bg-gray-50 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Email" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: state.registrationDetails.email }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleCopyClick(state.registrationDetails.email),
                  className: "text-blue-600 hover:text-blue-700",
                  children: /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Meeting ID" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: state.zoomDetails.meetingId }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleCopyClick(state.zoomDetails.meetingId),
                  className: "text-blue-600 hover:text-blue-700",
                  children: /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 py-8 border-t border-gray-200", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-gray-900 mb-4", children: "Connect With Us" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Follow us on social media to stay updated with our latest workshops and AI content" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4", children: socialLinks.map((social, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: social.url,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: `${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center group`,
              "aria-label": `Follow us on ${social.name}`,
              children: /* @__PURE__ */ jsx("span", { className: "transform group-hover:scale-110 transition-transform", children: social.icon })
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " AcceleratorX. All rights reserved."
          ] }) })
        ] })
      ] }) })
    }
  );
};
export {
  WSRegistrationSuccess as default
};
