import { j as jsxRuntimeExports } from "./main-Bmt1QOda.js";
import { T as Target } from "./target-gz-LBzuC.js";
import { B as Brain } from "./brain-DI5owN3Y.js";
import { T as TrendingUp } from "./trending-up-B6uKflDy.js";
const WSGENIntroductionB = () => {
  const stats = [
    {
      value: "Zero",
      label: "coding knowledge needed"
    },
    {
      value: "100%",
      label: "practical learning"
    },
    {
      value: "Free",
      label: "live automation workshop"
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
      title: "Marketing Workflow Automation",
      description: "From leads to analytics — auto-run everything."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
      title: "AI Content Automation",
      description: "Generate and schedule posts or emails instantly."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }),
      title: "Growth Blueprint",
      description: "Apply automation to scale your work every day."
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Automate & Grow Smarter" }),
        " with AI"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base mb-8 max-w-2xl mx-auto", children: "Learn to automate, create, and scale smarter — without touching a line of code. This live, hands-on session gives you everything you need to build real workflows that save time and drive results." })
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
