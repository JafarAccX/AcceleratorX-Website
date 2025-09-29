import { j as jsxRuntimeExports } from "./main-CQMtEg9v.js";
import { A as AlertTriangle } from "./alert-triangle-DhArPdDx.js";
import { C as Clock } from "./clock-BZrlnw9q.js";
import { T as TrendingUp } from "./trending-up-BoZY_tra.js";
import { m as motion } from "./proxy-DMpmILPN.js";
const challenges = [
  {
    title: "Repetitive & Error-Prone Tasks",
    description: "Most marketing tasks are often repetitive, slow, and prone to errors.",
    icon: AlertTriangle,
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Time-Wasting Low-Impact Work",
    description: "Teams lose hours on low-impact work (copy, A/B setups, manual reports, scripts, etc.).",
    icon: Clock,
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "AI-First Demand",
    description: "Companies now prefer AI-first marketers who can automate, optimise, and deliver measurable ROI faster.",
    icon: TrendingUp,
    color: "from-yellow-500/20 to-green-500/20"
  }
];
const AIDMChallenges = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "The Challenge" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-6", children: [
        "In 2025, Marketing Is",
        " ",
        "Broken Without AI"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Here's why traditional marketing approaches are failing:" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: challenges.map((challenge, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group relative bg-[#0F0F0F] rounded-xl p-6 border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(challenge.icon, { className: "w-6 h-6 text-red-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors", children: challenge.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: challenge.description })
          ] })
        ]
      },
      index
    )) })
  ] }) });
};
export {
  AIDMChallenges as default
};
