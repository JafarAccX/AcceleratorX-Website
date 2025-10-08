import { f as createLucideIcon, j as jsxRuntimeExports, k as motion } from "./main-DHphvIsW.js";
import { T as Target } from "./target-C_O9CwqU.js";
import { R as Rocket } from "./rocket-C7ORhXwy.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Settings = createLucideIcon("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const solutions = [
  {
    title: "Executive-Level Training",
    description: "Executive-level training + hands-on AI labs",
    icon: Target,
    highlight: "Industry Expert Training"
  },
  {
    title: "Real-World Projects",
    description: "Recruiter-ready live capstone projects aligned with real hiring needs",
    icon: Rocket,
    highlight: "Portfolio-Ready Projects"
  },
  {
    title: "AI Tool Mastery",
    description: "Tool-first learning: n8n, GA4, Meta Ads, Google Ads, Stable Diffusion, Runway, Apollo.io, Mailchimp and many more.",
    icon: Settings,
    highlight: "10+ AI Marketing Tools"
  }
];
const AIDMSolution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-[#0a0a0a]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "The Solution" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        "A High-End ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "AI Marketing Solution" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "That enables Freelance Success, Career Growth and Business Scale" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(solution.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors", children: solution.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-4", children: solution.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#5CB338]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: solution.highlight })
            ] })
          ] })
        ]
      },
      index
    )) })
  ] }) });
};
export {
  AIDMSolution as default
};
