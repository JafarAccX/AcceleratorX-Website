import { j as jsxRuntimeExports } from "./main-WA_0Fhhs.js";
import { A as ArrowRight } from "./arrow-right-CeWL_7zL.js";
import { U as Users } from "./users-tUZnxyVJ.js";
function LeadEngineCTA() {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-slate-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-lg font-medium", children: "Limited Seats" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight", children: "Are You Ready to Build Your First Lead Engine?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: "Join 100+ marketers, founders, and growth professionals who've automated hours of manual work with just one session." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: scrollToForm, className: "inline-flex items-center bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900", children: [
      "Register Now – Limited Seats",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center justify-center text-gray-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 mr-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Join 100+ professionals already registered" })
    ] })
  ] }) });
}
export {
  LeadEngineCTA as default
};
