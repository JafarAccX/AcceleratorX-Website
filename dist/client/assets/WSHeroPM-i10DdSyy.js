import { j as jsxRuntimeExports, S as SEO, k as motion } from "./main-DD2uCxhE.js";
import { W as WorkshopProvider } from "./registration-s30lYcf6.js";
import { W as WSFormFree } from "./WSFormFree-BhRQjhQh.js";
import { d as FaClock, e as FaCalendarAlt, f as FaUserGraduate, v as FaLevelUpAlt } from "./index-COA9mCi2.js";
import { G as Globe } from "./globe-B79UY0_A.js";
import { S as Star } from "./star-DInGSxH8.js";
import "./metaPixel-BHCHwNnL.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEO,
      {
        title: "Free AI Product Management Workshop - AI Product Management Mastery Class | AcceleratorX",
        description: "Join our free AI Product Management workshop on October 15th, 2025. Learn frameworks to build AI-powered products. Perfect for founders, PMs, designers, and tech leads.",
        ogTitle: "Free AI Product Management Workshop - AI Product Management Mastery Class",
        ogDescription: "Master AI Product Management in our free workshop. Learn practical frameworks for building successful AI products.",
        ogImage: "/pmbg.webp"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#0A0F1D] min-h-screen overflow-x-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44 md:w-48 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/companylogo-new.webp", alt: "AcceleratorX Logo", className: "w-full h-auto" }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/pmbg.webp", alt: "Background", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-gray-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Live Bootcamp | 3-Hour Intensive" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",
              children: "AI Product Management Mastery Class"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
              className: "text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed",
              children: "Master AI product management from ideation to deployment. Learn how to build, launch, and scale AI-powered products that deliver real value."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
              className: "bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 mb-10 max-w-lg mx-auto",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-200 text-sm font-medium", children: "⚠️ Note: This is a live-only workshop. No recordings will be provided." })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 min-w-[200px]",
              onClick: scrollToForm,
              children: "Book Your Free Slot"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto  px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 my-24 md:my-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-2  space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-indigo-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent", children: "Limited Seats are available" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80", children: "About the Bootcamp" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl lg:text-3xl font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400", children: "High-impact training to take your idea from thought to launch." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400   leading-relaxed", children: "AI products require a different approach. This mastery class equips you with the frameworks to build, manage, and scale AI-powered products successfully." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6", children: [
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaClock, { className: "text-emerald-400 mb-1" }), label: "Duration", value: "3 Hours" },
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCalendarAlt, { className: "text-indigo-400 mb-1" }),
              label: "Date",
              value: "25th Oct 2025"
            },
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }),
              label: "Time",
              value: "7:00 PM IST"
            },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLevelUpAlt, { className: "text-cyan-400 mb-1" }), label: "Level", value: "Beginner–Advanced" }
          ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400",
              children: [
                item.icon,
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400", children: item.value })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-b from-indigo-500/10 to-violet-500/10 p-1 rounded-2xl max-w-[500px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/20",
            id: "workshop-registration-form",
            "data-form-container": "workshop",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent", children: "Reserve Your Spot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-indigo-400 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Limited seats available" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(WorkshopProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WSFormFree, {}) })
            ]
          }
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl" })
    ] })
  ] });
};
export {
  WSHeroPM as default
};
