import { j as jsxRuntimeExports, k as motion } from "./main-apVAGIEz.js";
const GENCTAAIDM = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A1020] rounded-lg p-8 border border-blue-900/20 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            className: "text-3xl md:text-4xl font-bold text-white mb-4",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: "Boost Conversions — Powered by AI"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-4 py-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-blue-400 font-medium", children: "Register now for AI-driven conversion optimization" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-blue-500/10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-blue-400 mb-1", children: "Data-Driven" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Optimize based on real user insights." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-green-400 mb-1", children: "AI-Powered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Leverage AI for smarter optimization." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-green-400 mb-1", children: "Measurable" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Track and improve conversion metrics." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-blue-400 mb-1", children: "Actionable" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Get clear steps to boost conversions." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          onClick: handleEnrollClick,
          className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 w-full sm:w-auto",
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          children: "Start Optimizing Conversions Today"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center space-y-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/favicon.svg", alt: "product management certification courses icon", className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-medium", children: "AcceleratorX" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-xs", children: [
        currentYear,
        " AcceleratorX. All rights reserved."
      ] })
    ] })
  ] }) }) });
};
export {
  GENCTAAIDM as default
};
