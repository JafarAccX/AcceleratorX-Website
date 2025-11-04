import { j as jsxRuntimeExports, k as motion } from "./main-CSwsI03w.js";
const GENCTA = () => {
  (/* @__PURE__ */ new Date()).getFullYear();
  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black flex items-center justify-center pb-20 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl w-full text-center space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-3xl font-bold text-white", children: "Don’t Just Scroll. Automate." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base", children: "This is not another “watch and forget” session." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 text-base", children: [
              "This is your shortcut to turning social media into a lead-gen machine using",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 font-semibold", children: "Make.com" }),
              " — in just 90 minutes."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-5 rounded-xl text-center shadow-lg border border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-400", children: "2 Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "Live Workshop" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-5 rounded-xl text-center shadow-lg border border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-400", children: "Interactive" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "Q&A Session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-600/20 p-5 rounded-xl text-center shadow-lg border border-blue-600/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-400", children: "Seats are limited" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-600/20 p-5 rounded-xl text-center shadow-lg border border-green-600/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-400", children: "₹99 only" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 bg-white/10 p-5 rounded-xl text-center shadow-lg border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-white", children: "Real tools. Real Results." }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleEnrollClick,
              className: "inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold uppercase hover:from-blue-700 hover:to-blue-800 transition mt-6",
              children: "REGISTER NOW & START AUTOMATING"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full h-[1px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-flow" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        @keyframes border-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }
      ` })
  ] });
};
export {
  GENCTA as default
};
