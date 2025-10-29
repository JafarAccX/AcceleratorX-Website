import { j as jsxRuntimeExports } from "./main-ma4iRsbt.js";
import { R as Rocket } from "./rocket-DkLrTEY7.js";
const GENProjectsAndOutcomes = () => {
  const projects = [
    {
      title: "Smart Content Automation Tool",
      description: "Develop a system that automates content creation using LLMs and prompt engineering, saving time and boosting creativity.",
      delay: 100
    },
    {
      title: "Intelligent Chatbots & Virtual Assistants",
      description: "Build AI-powered conversational agents using advanced language models and conversation design to deliver seamless interactions.",
      delay: 200
    },
    {
      title: "Collaborative Multi-Agent AI Workflows",
      description: "Create automated workflows where multiple AI agents work together to handle complex tasks efficiently.",
      delay: 300
    },
    {
      title: "Capstone: AI-powered SaaS Solution",
      description: "Bring your skills together to design, build, and launch a full-fledged AI SaaS product, from prototyping to deployment.",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold  mb-2 animate-fade-in", children: "Focus on real-world AI Automation rather than theory." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-base max-w-2xl animate-fade-in", children: "Learn by Creating Real-World AI Solutions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-base max-w-2xl animate-fade-in", children: "Turn theory into practice with projects that solve real problems and showcase your AI expertise." })
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
