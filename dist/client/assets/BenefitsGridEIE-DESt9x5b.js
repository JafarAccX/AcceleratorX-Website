import { e as createLucideIcon, j as jsxRuntimeExports, B as Briefcase } from "./main-BOeEXsPM.js";
import { T as Trophy } from "./trophy-BBbxUwJG.js";
import { U as Users } from "./users-C2gyDQ75.js";
import { T as Target } from "./target-BlkvoEkn.js";
import { B as BookOpen } from "./book-open-BBXe42fc.js";
import { S as Star } from "./star-BOf4Nz2M.js";
import { B as Brain } from "./brain-Dr9AHv2Y.js";
import { T as TrendingUp } from "./trending-up-iKI26Ots.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Network = createLucideIcon("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);
const benefits = [
  {
    title: "University Recognition",
    description: "Earn a globally recognized certification that sets you apart in the product management field.",
    icon: Trophy,
    highlight: "Certified Product Manager"
  },
  {
    title: "Expert Network",
    description: "Connect with industry leaders and build a powerful network of product professionals.",
    icon: Users,
    highlight: "500+ Industry Experts"
  },
  {
    title: "Career Growth",
    description: "Access exclusive job opportunities and accelerate your career progression.",
    icon: Target,
    highlight: "100% Career Support"
  },
  {
    title: "Product Showcase on Wall of Product",
    description: "Get your product featured on the Wall of Product and showcase your skills to potential employers.",
    icon: Briefcase,
    highlight: "Product Showcase"
  },
  {
    title: "1:1 Mentorship",
    description: "Get one-on-one guidance and support from industry experts.",
    icon: BookOpen,
    highlight: "Expert Guidance"
  },
  {
    title: "Chance to win Industry Internship",
    description: "Get industry internship opportunities and gain real-world experience.",
    icon: Users,
    highlight: "Industry Internship"
  },
  {
    title: "By-Weekly Career Review Calls",
    description: "Receive personalized feedback and guidance from industry experts.",
    icon: Network,
    highlight: "Expert Feedback"
  },
  {
    title: "Personalised Skill Report",
    description: "Get a detailed analysis of your skills and areas of improvement.",
    icon: Star,
    highlight: "Skill Report"
  },
  {
    title: "AI Product Management",
    description: "Master the skills to build, manage, and scale AI-driven products while understanding the nuances of AI ethics, deployment, and innovation.",
    icon: Brain,
    highlight: "AI Product Management"
  },
  {
    title: "Growth Product Management",
    description: "Learn to identify growth opportunities, execute data-driven experiments, and scale products to achieve exponential growth.",
    icon: TrendingUp,
    highlight: "Growth Product Management"
  }
];
function BenefitsGridEIE() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "benefits", className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Program Benefits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338]", children: [
        "Why Choose Our",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "Program?" })
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
