import { k as useCourseContext, j as jsxRuntimeExports, B as Briefcase } from "./main-CQMtEg9v.js";
import { T as Trophy } from "./trophy-CPu-EXXU.js";
import { B as Brain } from "./brain-HiZvbq09.js";
import { T as Target } from "./target-DOlbiY0l.js";
import { U as Users } from "./users-CM_hleka.js";
import { S as Star } from "./star-V3YZE60B.js";
import { m as motion } from "./proxy-DMpmILPN.js";
const benefits = [
  {
    title: "Get Hired",
    description: "AI Marketing Specialist, Campaign Manager, Marketing Automation Specialist, Growth Consultant",
    icon: Trophy,
    highlight: "High-Demand Roles"
  },
  {
    title: "Unlock AI Skills",
    description: "AI-first campaign design, automation, CRO, B2B outreach, analytics",
    icon: Brain,
    highlight: "Future-Ready Skills"
  },
  {
    title: "Portfolio ROI",
    description: "Portfolio-ready capstone projects that demonstrate measurable impact to recruiters and clients",
    icon: Target,
    highlight: "Measurable Results"
  },
  {
    title: "Industry Network",
    description: "Connect with 500+ marketing professionals and industry leaders",
    icon: Users,
    highlight: "Professional Network"
  },
  {
    title: "Career Support",
    description: "100% job assistance with personalized career guidance and interview preparation",
    icon: Briefcase,
    highlight: "Career Guarantee"
  },
  {
    title: "Certification",
    description: "Industry-recognized AI Digital Marketing certification from AcceleratorX",
    icon: Star,
    highlight: "Certified Professional"
  }
];
const AIDMCareerOutcomes = () => {
  const { setSelectedCourse } = useCourseContext();
  const handleRegister = () => {
    setSelectedCourse("AI Digital Marketing");
    window.dispatchEvent(new Event("open-enrollment-modal"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Career Outcomes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338]", children: "Where This Nano-Degree Takes You" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mt-6", children: "Discover the roles, skills, and ROI that await you after completing our program" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        onClick: handleRegister,
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: "bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#5CB338]/25",
        children: "Register Now!"
      }
    ) })
  ] }) });
};
export {
  AIDMCareerOutcomes as default
};
