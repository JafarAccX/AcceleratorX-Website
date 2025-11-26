import { f as createLucideIcon, j as jsxRuntimeExports } from "./main-BOGL_qrK.js";
import { C as Code } from "./code-YhEg-RT6.js";
import { R as Rocket } from "./rocket-Ca09rEev.js";
const TestTube = createLucideIcon("TestTube", [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2", key: "187lwq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }]
]);
const WSGENIntroductionPMB = () => {
  const stats = [
    {
      value: "Zero",
      label: "unnecessary complexity"
    },
    {
      value: "100%",
      label: "practical learning"
    },
    {
      value: "Free",
      label: "live workshop"
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-5 h-5 text-blue-500" }),
      title: "Complete App Workflow",
      description: "From code to deployment — done in one tool."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TestTube, { className: "w-5 h-5 text-blue-500" }),
      title: "Automated Testing",
      description: "Catch issues before launch."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-5 h-5 text-blue-500" }),
      title: "Deployment Blueprint",
      description: "Publish stable builds with confidence."
    }
  ];
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: [
        "Build, Test & Deploy — ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "All in One Place" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base mb-8 max-w-2xl mx-auto", children: "Learn complete development — the simple way." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A1020] p-4 rounded-lg border border-blue-900/20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white mb-1", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: stat.label })
    ] }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-[#0A1020] rounded-lg p-4 flex flex-col items-start gap-3 border border-blue-900/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-blue-500/10 p-2", children: feature.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: feature.description })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: scrollToForm,
        className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto",
        children: "Register Now"
      }
    ) })
  ] }) }) });
};
export {
  WSGENIntroductionPMB as default
};
