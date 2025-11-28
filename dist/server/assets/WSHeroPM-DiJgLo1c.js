import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { W as WorkshopProvider } from "./registration-DLvYIfic.js";
import { Globe, Star } from "lucide-react";
import { W as WSFormFree } from "./WSFormFree-BaxDLwAo.js";
import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaUserGraduate, FaLevelUpAlt } from "react-icons/fa";
import { S as SEO } from "../entry-server.js";
import "react";
import "react-router";
import "react-hot-toast";
import "./metaPixel-Cw2h-5_I.js";
import "./workshopApi-DPNs6tEc.js";
import "axios";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
const WSHeroPM = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      setTimeout(() => {
        form.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }, 10);
    } else {
      const formContainer = document.querySelector('[data-form-container="workshop"]');
      if (formContainer) {
        setTimeout(() => {
          formContainer.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }, 100);
      } else {
        console.error('Form element not found with ID "workshop-registration-form"');
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Masterclass on Google Antigravity, Claude Coding & Cursor.ai | AcceleratorX",
        description: "Build real AI workflows using Google Antigravity, Claude coding, and Cursor.ai. Learn to design, prototype, test, and ship AI features in this live 3-hour intensive bootcamp.",
        ogTitle: "Masterclass on Google Antigravity, Claude Coding & Cursor.ai",
        ogDescription: "Master AI workflows with Google Antigravity, Claude, and Cursor.ai. Build functional AI prototypes in 60 minutes.",
        ogImage: "/pmbg.webp"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-[#0A0F1D] min-h-screen overflow-x-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full z-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxs("div", { className: "w-44 md:w-48 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20", children: /* @__PURE__ */ jsx("img", { src: "/companylogo-new.webp", alt: "AcceleratorX Logo", className: "w-full h-auto" }) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("img", { src: "/pmbg.webp", alt: "Background", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/70" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8",
              children: [
                /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-gray-300" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Live Bootcamp | 3-Hour Intensive" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              className: "text-4xl  font-bold text-white mb-6 leading-tight",
              children: "AI Workflow Mastery"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              className: "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight",
              children: "Masterclass on Google Antigravity, Claude Coding & Cursor.ai"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
              className: "text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed",
              children: "Build real AI workflows using the most powerful modern tools. Learn how to design, prototype, test, and ship AI features using Google Gemini, Claude's coding capabilities, and Cursor for rapid development."
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
              className: "bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 mb-10 max-w-lg mx-auto",
              children: /* @__PURE__ */ jsx("p", { className: "text-yellow-200 text-sm font-medium", children: "⚠️ Note: Live-only session. No recordings provided." })
            }
          ),
          /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 min-w-[200px]",
              onClick: scrollToForm,
              children: "Book Your Free Slot"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: {
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3]
            },
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            },
            className: "absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: {
              y: [0, 15, 0],
              opacity: [0.2, 0.4, 0.2]
            },
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            },
            className: "absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto  px-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 my-24 md:my-28", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-2  space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-indigo-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent", children: "Only 10 seats are left" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-bold", children: /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80", children: "About the Bootcamp" }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-3xl font-semibold", children: /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400", children: "High-impact training to take your idea from thought to launch." }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400   leading-relaxed", children: `A practical, execution-focused session where you learn to turn ideas into working AI systems faster and smarter. Most people "learn AI tools"; here you'll learn how to use them together to build end-to-end workflows that actually solve problems in real world.` }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6", children: [
            { icon: /* @__PURE__ */ jsx(FaClock, { className: "text-emerald-400 mb-1" }), label: "Duration", value: "3 Hours" },
            {
              icon: /* @__PURE__ */ jsx(FaCalendarAlt, { className: "text-indigo-400 mb-1" }),
              label: "Date",
              value: "06th Dec 2025"
            },
            {
              icon: /* @__PURE__ */ jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }),
              label: "Time",
              value: "8:00 PM IST"
            },
            { icon: /* @__PURE__ */ jsx(FaLevelUpAlt, { className: "text-cyan-400 mb-1" }), label: "Level", value: "Beginner–Advanced" }
          ].map((item, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400",
              children: [
                item.icon,
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs", children: item.label }),
                /* @__PURE__ */ jsx("p", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400", children: item.value })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-indigo-500/10 to-violet-500/10 p-1 rounded-2xl max-w-[500px] mx-auto", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/20",
            id: "workshop-registration-form",
            "data-form-container": "workshop",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6 space-y-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent", children: "Reserve Your Spot" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-indigo-400 animate-pulse" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Limited seats available" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(WorkshopProvider, { children: /* @__PURE__ */ jsx(WSFormFree, {}) })
            ]
          }
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl" })
    ] })
  ] });
};
export {
  WSHeroPM as default
};
