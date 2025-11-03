import { r as reactExports, j as jsxRuntimeExports } from "./main-DD2uCxhE.js";
import EnrollmentModal from "./EnrollmentModal-zGH4Iqw0.js";
import { B as Brain } from "./brain-CpXfvn4B.js";
import { T as Target } from "./target-CgtNxCik.js";
import "./enrollmentApi-C5hvGDp9.js";
import "./metaPixel-BHCHwNnL.js";
const GENIntroductionAd = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const stats = [
    {
      value: "$1.3T",
      label: "AI Industry by 2032"
    },
    {
      value: "400%",
      label: "Demand Increase"
    },
    {
      value: "90%",
      label: "Business Adoption"
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
      title: "100% Hands-on Learning",
      description: "Work on real-world AI projects with 25+ industry-standard AI tools and frameworks"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
      title: "No Coding Required",
      description: "Designed for absolute beginners - focus on practical AI skills without programming"
    }
  ];
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "Master GenAI & AI Agents" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl text-white md:text-5xl font-bold mb-4", children: [
        "Launch Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "AI Career" }),
        " Without Coding"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-12 max-w-3xl mx-auto", children: "Accelerate your career in the AI-driven future. Master Generative AI, AI Agents, and Automation through hands-on, project-based learning. Gain real-world skills and lead the AI revolution." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: stat.label })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 border border-white/10",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleModalOpen,
          className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105",
          children: "Enroll Now"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose })
  ] });
};
export {
  GENIntroductionAd as default
};
