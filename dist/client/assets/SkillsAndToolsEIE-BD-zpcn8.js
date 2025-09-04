import { r as reactExports, j as jsxRuntimeExports } from "./main-DS-AYwzb.js";
import { s as skills, t as tools } from "./constants-C0Rc_o-P.js";
import { A as AnimatePresence } from "./index-CvAAj5Ob.js";
import { m as motion } from "./proxy-BvognpjE.js";
const SkillCard = ({ skill, index }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut"
    },
    viewport: { once: true },
    className: "group",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-[#0F0F0F] border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#5CB338]/50 hover:shadow-lg hover:shadow-[#5CB338]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl text-[#5CB338] group-hover:scale-110 transition-transform duration-300", children: skill.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-[#5CB338] transition-colors duration-300", children: skill.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: skill.description })
      ] })
    ] }) })
  }
);
const TabButton = ({ active, children, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  motion.button,
  {
    onClick,
    className: `px-6 py-2.5 rounded-xl text-sm border border-[#5CB338] font-medium transition-all duration-300 ${active ? "bg-[#5CB338] text-black shadow-lg  shadow-[#5CB338]/20" : "bg-white/5 text-black"}`,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    children
  }
);
const ToolCard = ({ tool, index }) => {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      },
      viewport: { once: true },
      className: "relative group",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full p-6 bg-[#0F0F0F] rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-[#5CB338]/50 group-hover:shadow-lg group-hover:shadow-[#5CB338]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-16 h-16 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#5CB338]/10 rounded-xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#5CB338]/5 rounded-xl transform rotate-3 transition-transform duration-300 group-hover:-rotate-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: tool.image,
              alt: tool.name,
              className: "relative w-12 h-12 object-contain transform transition-all duration-300 group-hover:scale-110"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-medium text-center group-hover:text-[#5CB338] transition-colors duration-300", children: tool.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2 },
            className: "text-gray-400 text-sm text-center",
            children: tool.description
          }
        ) })
      ] }) })
    }
  );
};
function SkillsAndToolsEIE() {
  const [activeTab, setActiveTab] = reactExports.useState("skills");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Skills & Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-black", children: [
        "Master Essential ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "PM Skills" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center space-x-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabButton,
        {
          active: activeTab === "skills",
          onClick: () => setActiveTab("skills"),
          children: "Skills You'll Learn"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabButton,
        {
          active: activeTab === "tools",
          onClick: () => setActiveTab("tools"),
          children: "Tools You'll Master"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: activeTab === "skills" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 },
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, index }, skill.name))
      },
      "skills"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 },
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6",
        children: tools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToolCard, { tool, index }, tool.name))
      },
      "tools"
    ) })
  ] }) });
}
export {
  SkillsAndToolsEIE as default
};
