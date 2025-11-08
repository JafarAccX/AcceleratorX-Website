import { j as jsxRuntimeExports, B as Briefcase } from "./main-CLFAzKr7.js";
import { T as Trophy } from "./trophy-BUBW8QDP.js";
import { U as Users } from "./users-DpJEgBNu.js";
import { B as BookOpen } from "./book-open-CFe1hlXQ.js";
import { T as Target } from "./target-BrBJsAlY.js";
import { S as Star } from "./star-DiZ9rQfU.js";
const benefits = [
  {
    title: "Recognition & Certification",
    description: "Get certified as an AI Product Manager with a credential that's recognised by universities and industry leaders worldwide, designed to help you stand out in your AI product management career.",
    icon: Trophy,
    highlight: "Certified Product Manager"
  },
  {
    title: "Expert Network & Mentorship",
    description: "Build a powerful professional network through exclusive access to the community of product leaders, mentors, and hiring managers.",
    icon: Users,
    highlight: "500+ Industry Experts"
  },
  {
    title: "1:1 Mentorship & Expert Guidance",
    description: "Receive personalised mentoring from India's top product managers. Guiding you at every stage of your AI product management learning journey.",
    icon: BookOpen,
    highlight: "Expert Guidance"
  },
  {
    title: "Career Growth & Job Support",
    description: "Unlock top product management job opportunities through AcceleratorX Priority Access and 3 streams of placement support",
    icon: Target,
    highlight: "100% career Growth"
  },
  {
    title: "Skill Development & Learning Reports",
    description: "Gain specialisation in AI Product Management and Growth Product Management, learning to scale AI-driven and data-backed products that lead markets.",
    icon: Star,
    highlight: "Skill report"
  },
  {
    title: "Real-World Exposure & Recognition",
    description: "Feature your AI Product on our Wall of Products, get hired faster by showcasing your work to hiring partners and potential employers.",
    icon: Briefcase,
    highlight: "Product Showcase"
  }
];
function BenefitsGridEIE() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "benefits", className: "py-24 bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Program Benefits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold ", children: [
        "What Sets AcceleratorX ",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "AI Product Management Program Apart" }),
        "?"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative bg-[#0F0F0F] rounded-xl p-6 border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(benefit.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors", children: benefit.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-4", children: benefit.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#5CB338]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: benefit.highlight })
            ] })
          ] })
        ]
      },
      index
    )) })
  ] }) });
}
export {
  BenefitsGridEIE as default
};
