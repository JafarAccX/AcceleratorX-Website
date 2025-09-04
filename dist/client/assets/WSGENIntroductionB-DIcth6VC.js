import { j as jsxRuntimeExports } from "./main-D-AGBQ1V.js";
import { B as Brain } from "./brain-C7K9LGjI.js";
import { T as Target } from "./target-CcP6l83z.js";
import { T as TrendingUp } from "./trending-up-CLmClpSE.js";
const WSGENIntroductionB = () => {
  const stats = [
    {
      value: "Zero",
      label: "Coding Knowledge Required"
    },
    {
      value: "100%",
      label: "Hands-on Learning Experience"
    },
    {
      value: "Free",
      label: "Creative Workshop"
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
      title: "Workflow Design Mastery",
      description: "Learn how to map out and structure powerful automations that streamline tasks across tools and platforms"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
      title: "Automation Without Code",
      description: "Discover techniques to create end-to-end workflows using visual tools—no technical background needed"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }),
      title: "Idea-to-Automation Blueprint",
      description: "Develop a repeatable system to turn manual processes into efficient, scalable automations in minutes"
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-sm font-medium", children: "Automate Repetitive Tasks Without Writing Code" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Automate" }),
        " anything with n8n"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base mb-8 max-w-2xl mx-auto", children: "Discover how to turn time-consuming tasks into powerful automated flows. This hands-on workshop teaches you how to use n8n to automate everything from data collection to communication—without writing a single line of code." })
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
        className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto",
        children: "Register Now"
      }
    ) })
  ] }) }) });
};
export {
  WSGENIntroductionB as default
};
