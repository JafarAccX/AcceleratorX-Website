import { j as jsxRuntimeExports, B as Briefcase } from "./main-CGjpSgqs.js";
import { U as Users } from "./users-BvpwDrmv.js";
import { M as Megaphone } from "./megaphone-CCq5vuhC.js";
import { B as Brain } from "./brain-D4FvYSwo.js";
const WSGENWhoShouldEnrollE = () => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-sm font-medium", children: "For Doers & Builders" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Who Can " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Benefit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 max-w-xl mx-auto", children: "Anyone interested in building intelligent AI applications can benefit from this workshop. Whether you're a developer, data scientist, or tech enthusiast, learn how RAG agents can revolutionize how AI systems understand and respond to complex queries." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-3/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          {
            icon: Users,
            title: "AI Developers",
            description: "Build better AI applications with RAG technology"
          },
          {
            icon: Briefcase,
            title: "Data Scientists",
            description: "Enhance your models with contextual retrieval"
          },
          {
            icon: Megaphone,
            title: "Product Managers",
            description: "Understand RAG for better AI product decisions"
          },
          {
            icon: Brain,
            title: "Tech Enthusiasts",
            description: "Learn cutting-edge AI architecture patterns"
          }
        ].map((audience, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2 rounded-md bg-blue-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(audience.icon, { className: "w-5 h-5 text-blue-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: audience.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: audience.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: scrollToForm,
            className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto",
            children: "Register Now"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-2/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/genai.webp", alt: "AI Workflow Automation", className: "w-full h-auto object-cover" }) }) })
    ] })
  ] }) }) });
};
export {
  WSGENWhoShouldEnrollE as default
};
