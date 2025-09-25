import { j as jsxRuntimeExports } from "./main-Bu4yalNQ.js";
import { B as Brain } from "./brain-BpLzX04c.js";
import { T as Target } from "./target-gFUpM69y.js";
import { T as TrendingUp } from "./trending-up-B-qLdDGZ.js";
const WSGENIntroductionC = () => {
  const stats = [
    {
      value: "89%",
      label: "of past attendees said they could start building agents the same day."
    },
    {
      value: "93%",
      label: "felt more confident using AI after the workshop."
    },
    {
      value: "Zero coding stress",
      label: "We keep it simple and hands-on."
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
      title: "RAG Workflows Made Easy",
      description: "No confusing setups. Just connect, run, and see results."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
      title: "Live & Interactive",
      description: "Build alongside your mentor, ask questions, and get instant feedback."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }),
      title: "Smart Creativity",
      description: "Use AI to make your work faster, sharper, and more impactful."
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-8 bg-black min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.3 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.2 }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "AI-Powered Agents = Practical, Useful, Yours" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl text-white md:text-5xl font-bold mb-4", children: [
        "AI-Powered Agents ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: " =" }),
        " Practical, Useful, Yours"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-12 max-w-3xl mx-auto", children: "This isn’t about slides or theory. You’ll walk away with two working AI Agents you built yourself." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: stat.label })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 border  border-white/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-blue-500/10 p-2.5 backdrop-blur-sm", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: feature.description })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: scrollToForm,
          className: "block w-full mt-4 px-6 py-3 max-w-screen-sm bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25",
          children: "Register Now"
        }
      ) })
    ] }) })
  ] });
};
export {
  WSGENIntroductionC as default
};
