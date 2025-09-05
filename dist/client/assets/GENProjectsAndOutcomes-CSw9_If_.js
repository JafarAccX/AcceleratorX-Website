import { j as jsxRuntimeExports } from "./main-CkWvzmHo.js";
import { R as Rocket } from "./rocket-COtOjPyq.js";
const GENProjectsAndOutcomes = () => {
  const projects = [
    {
      title: "AI-powered content automation tool",
      description: "Build a tool that automates content creation using LLMs and prompt engineering",
      delay: 100
    },
    {
      title: "AI-driven chatbots and virtual assistants",
      description: "Develop intelligent chatbots using advanced language models and conversation design",
      delay: 200
    },
    {
      title: "Multi-agent AI automation workflows",
      description: "Create automated workflows using multiple AI agents working together",
      delay: 300
    },
    {
      title: "Capstone Project: AI-powered SaaS tool",
      description: "Develop and launch your own AI-powered SaaS solution",
      delay: 400
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-6 my-20  overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:flex items-center gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-5/12 mb-8 lg:mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/genibg.webp", alt: "AI Projects", className: "relative rounded-3xl shadow-lg animate-fade-in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-7/12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-3.5 h-3.5 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-xs font-medium", children: "Projects & Outcomes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold  mb-2 animate-fade-in", children: "Hands-on Learning Through Real AI Applications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-base max-w-2xl animate-fade-in", children: "Apply your skills through practical projects that solve real-world problems" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-3 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 animate-slide-in",
            style: { animationDelay: `${project.delay}ms` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold  mb-0.5 group-hover:text-blue-600 transition-colors duration-300", children: project.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: project.description })
              ] })
            ] })
          },
          index
        )) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, global: true, children: `
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-in {
          opacity: 0;
          animation: slide-in 0.6s ease-out forwards;
        }
      ` })
  ] });
};
export {
  GENProjectsAndOutcomes as default
};
