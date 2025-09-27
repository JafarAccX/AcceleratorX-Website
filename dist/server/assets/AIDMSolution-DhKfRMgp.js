import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Target, Rocket, Settings } from "lucide-react";
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
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0a0a0a]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "The Solution" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        "A High-End ",
        /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "AI Marketing Solution" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "That enables Freelance Success, Career Growth and Business Scale" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group relative bg-[#0F0F0F] rounded-xl p-6 border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(solution.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors", children: solution.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-4", children: solution.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#5CB338]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: solution.highlight })
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
