import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const GENCTAB = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0A1020] rounded-lg p-8 border border-blue-900/20 shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            className: "text-3xl md:text-4xl font-bold text-white mb-4",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: "Smarter Marketing — No Code Needed"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-4 py-2 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-base text-blue-400 font-medium", children: "Register Now for Hands-On Learning with Generative AI" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-blue-500/10 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-blue-400 mb-1", children: "AI-Powered" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Marketing Tools" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-green-400 mb-1", children: "Effortless" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Content & Campaign Creation" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-green-400 mb-1", children: "Smart" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Automation for Marketers" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-blue-400 mb-1", children: "Build & Launch" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Ideas That Save Time & Drive Results" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
        motion.button,
        {
          onClick: handleEnrollClick,
          className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 w-full sm:w-auto",
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          children: "Turn Your Marketing Ideas into AI-Powered Reality"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center space-y-2 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
        /* @__PURE__ */ jsx("img", { src: "/favicon.svg", alt: "AcceleratorX", className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-medium", children: "AcceleratorX" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-xs", children: [
        currentYear,
        " AcceleratorX. All rights reserved."
      ] })
    ] })
  ] }) }) });
};
export {
  GENCTAB as default
};
