import { j as jsxRuntimeExports } from "./main-D1W_Gn8a.js";
import { S as Sparkles } from "./sparkles-qs4iklQJ.js";
import { A as ArrowRight } from "./arrow-right-C1y_k2Nr.js";
function HeroSection() {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/5 to-slate-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full z-20 transform will-change-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[180px] relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-[#0A0F1C]/90 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/assets/logo/logo.webp",
        alt: "AcceleratorX Logo",
        className: "w-full h-auto transform will-change-transform",
        loading: "lazy"
      }
    ) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center opacity-40",
        style: {
          backgroundImage: `url('/backgrounds/bg1-.webp')`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
        "Hands-on Live Workshop"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-4xl xl:text-7xl font-bold text-white mb-6 leading-tight", children: "Still Wasting Hours on Manual Lead Work?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed", children: "Join This Live Session & Automate It All Using n8n" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-8", children: " * Claim your free kit now *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: scrollToForm, className: "inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900", children: [
        "Claim Now",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" })
  ] });
}
export {
  HeroSection as default
};
