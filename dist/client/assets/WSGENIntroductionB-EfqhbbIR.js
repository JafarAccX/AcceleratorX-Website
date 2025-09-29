import { j as jsxRuntimeExports } from "./main-CQMtEg9v.js";
import { T as Target } from "./target-DOlbiY0l.js";
import { B as Brain } from "./brain-HiZvbq09.js";
import { T as TrendingUp } from "./trending-up-BoZY_tra.js";
const WSGENIntroductionB = () => {
  const stats = [
    {
      value: "Zero",
      label: "coding or tech knowledge required"
    },
    {
      value: "100%",
      label: "practical learning"
    },
    {
      value: "Free",
      label: "value-packed workshop"
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
      title: "AI Content Mastery",
      description: "Generate ads, blogs, and posts in minutes"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
      title: "Marketing Automation",
      description: "Streamline campaigns without manual effort"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }),
      title: "AI Growth Blueprint",
      description: "A clear path to apply AI in your daily work"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Automate & Create Smarter" }),
        " with Generative AI"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base mb-8 max-w-2xl mx-auto", children: "Learn how to automate, create, and grow smarter with Generative AI in this free, hands-on marketing workshop—no coding required." })
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
