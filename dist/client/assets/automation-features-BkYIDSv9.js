import { f as createLucideIcon, j as jsxRuntimeExports } from "./main-YlaQtpvX.js";
import { S as Shield } from "./shield-BEysdJgj.js";
const File = createLucideIcon("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
const MousePointer = createLucideIcon("MousePointer", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
]);
const Play = createLucideIcon("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
function AutomationFeatures() {
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
  const features = [
    {
      icon: MousePointer,
      title: "Visual Workflow Builder",
      description: "Drag, drop, and connect tools"
    },
    {
      icon: Play,
      title: "Live & Interactive",
      description: "Build your automation in real time"
    },
    {
      icon: File,
      title: "Battle-Tested Templates",
      description: "Plug and play with proven workflows"
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Your data, your control"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/5  to-blue-900/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl lg:text-4xl font-bold text-white mb-6 leading-tight", children: "No-Code Automation That Works for You" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-300 max-w-3xl mx-auto leading-relaxed", children: "Build powerful automations without writing a single line of code. Our platform makes it simple to connect your favorite tools and streamline your workflow." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => {
      const IconComponent = feature.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: " hover:transform hover:-translate-y-1 group  bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-600/80 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-blue-600 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-8 h-8 text-white" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-4 text-center", children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300 text-center leading-relaxed", children: feature.description })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 mb-8 max-w-2xl mx-auto", children: "Everything you need to automate your business processes and scale your operations efficiently." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: scrollToForm, className: "inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900", children: [
        "Get Started Today",
        /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointer, { className: "w-5 h-5 ml-2" })
      ] })
    ] })
  ] }) });
}
export {
  AutomationFeatures as default
};
