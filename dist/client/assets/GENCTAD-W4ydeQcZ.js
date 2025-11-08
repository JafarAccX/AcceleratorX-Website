import { j as jsxRuntimeExports, k as motion } from "./main-CVqzsEIE.js";
import { S as Server } from "./server-BFP85ykn.js";
import { D as Database } from "./database-CaWRjd1q.js";
import { C as Code } from "./code-B6Ygii82.js";
const GENCTAD = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          className: "text-4xl font-bold text-center text-white max-w-3xl leading-tight",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: "Build & Fine-Tune Your Own AI Model – Live Workshop"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex flex-col items-center space-y-2",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-500/10 rounded-full px-6 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white", children: "Hands-On. No Pressure. Real Skills." }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex flex-col items-center space-y-4 mx-auto",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-6 h-6 text-green-400 mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-green-400", children: "Train Custom Models" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "From dataset to fine-tuned AI." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-6 h-6 text-purple-400 mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-purple-400", children: "Step-by-Step Guidance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Learn the process with mentor-led support." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-6 h-6 text-blue-400 mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-blue-400", children: "Real Applications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Build something that actually works." })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex flex-col items-center space-y-6",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-blue-500/10 rounded-full px-6 py-2 text-lg font-bold text-white", children: "Hands-On. No Pressure. Real Skills." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join 100+ learners who have already trained and deployed their own LLMs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Click Register Now and start your fine-tuning journey today!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleEnrollClick,
                className: "group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-lg font-semibold", children: "Register Now" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/favicon.svg", alt: "product management certification courses icon", className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: "AcceleratorX" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm", children: [
          currentYear,
          " AcceleratorX. All rights reserved."
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full h-[1px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[slide_3s_linear_infinite]" }) })
  ] });
};
export {
  GENCTAD as default
};
