import { j as jsxRuntimeExports } from "./main-DD2uCxhE.js";
import { T as TrendingUp } from "./trending-up-jtC0o5UD.js";
import { R as Rocket } from "./rocket-CQ24vrVl.js";
import { T as Target } from "./target-CgtNxCik.js";
import { L as Lightbulb } from "./lightbulb-BxOeGPlc.js";
function BuiltForYou() {
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
  const personas = [
    {
      icon: TrendingUp,
      title: "A Marketer",
      description: "tired of manually nurturing and tracking leads",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "A Founder",
      description: "looking to automate outreach with limited resources",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Target,
      title: "A Sales Pro",
      description: "wanting cleaner pipelines and faster responses",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Lightbulb,
      title: "A Tech Curious Creative",
      description: "ready to simplify your growth process",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center opacity-40",
        style: {
          backgroundImage: `url('/backgrounds/bg1-.webp')`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl lg:text-4xl font-bold text-white mb-4 leading-tight", children: "Built for You If You're:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8", children: personas.map((persona, index) => {
        const IconComponent = persona.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `bg-gradient-to-r ${persona.gradient} p-4 rounded-2xl group-hover:shadow-lg transition-all duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-8 h-8 text-white" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-4 text-center", children: persona.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-xs text-center leading-relaxed", children: persona.description })
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto", children: "No matter your role, our workshop will help you build the automation skills you need to grow faster." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: scrollToForm, className: "inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900", children: [
          "Start Your Journey",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-5 h-5 ml-2" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" })
  ] });
}
export {
  BuiltForYou as default
};
