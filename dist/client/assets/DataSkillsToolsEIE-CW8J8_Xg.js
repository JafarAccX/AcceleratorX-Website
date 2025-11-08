import { r as reactExports, j as jsxRuntimeExports, k as motion } from "./main-Bmt1QOda.js";
import { a as dataAnalyticsSkills, b as dataAnalyticsTools } from "./constants-CyrPx8P0.js";
const ToolCard = ({ tool, index }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1 },
      className: "group relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#96E072]/5 transform rotate-45 rounded-3xl blur-2xl group-hover:bg-[#96E072]/10 transition-all duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#0A0F1E]/80 backdrop-blur-xl rounded-2xl border border-[#96E072]/10 p-4 transform-gpu transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_-5px_rgba(150,224,114,0.3)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#96E072]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2 transform-gpu transition-transform duration-500 group-hover:scale-110", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#96E072]/20 rounded-full blur-xl transition-all duration-500 group-hover:blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-12 w-12 mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#96E072]/20 to-transparent rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: tool.image,
                  alt: `${tool.name} - ${tool.description}`,
                  className: "relative w-full h-full object-contain p-2 drop-shadow-[0_0_10px_rgba(150,224,114,0.3)]"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-center text-sm font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#96E072] group-hover:to-white transition-all duration-500", children: tool.name }) })
        ] })
      ]
    }
  );
};
const SkillCard = ({ skill, index }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 via-[#96E072]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center bg-[#0A0F1E]/60 backdrop-blur-lg rounded-lg border border-[#96E072]/10 p-3 overflow-hidden group-hover:border-[#96E072]/30 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-transparent via-[#96E072]/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mr-3 transform transition-transform duration-500 group-hover:scale-110", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#96E072]/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-2 w-2 bg-[#96E072] rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative text-white/90 group-hover:text-white transition-colors duration-500", children: skill })
        ] })
      ] })
    }
  );
};
function DataSkillsToolsEIE() {
  const [visibleSkills, setVisibleSkills] = reactExports.useState(
    dataAnalyticsSkills.slice(0, 9)
  );
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 9) % dataAnalyticsSkills.length;
        setVisibleSkills(dataAnalyticsSkills.slice(newIndex, newIndex + 9));
        return newIndex;
      });
    }, 4e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-8 bg-gradient-to-b from-[#0A0F1E] via-[#0D1326] to-[#0A0F1E] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#0A0F1E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#96E072]/5 via-transparent to-[#96E072]/5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#96E072]/10 rounded-full filter blur-[100px] animate-float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#96E072]/5 rounded-full filter blur-[120px] animate-float-slower" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#96E072]/20 to-transparent border border-[#96E072]/20 text-[#96E072] text-sm font-medium mb-4", children: "Accelerate Your Career" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-gradient-to-r from-[#96E072] to-[#96E072]/80 text-transparent bg-clip-text", children: "Skills & Tools" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-400 max-w-2xl mx-auto", children: "Master the skills and learn tools that top data analysts rely on to drive business success." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-2xl font-bold text-white", children: "Tools You'll Master" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: dataAnalyticsTools.map((tool, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToolCard, { tool, index: index2 }, tool.name)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-2xl font-bold text-white", children: "Skills You'll Develop" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: visibleSkills.map((skill, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, index: index2 }, `${skill}-${index2}`)) })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  SkillCard,
  ToolCard,
  DataSkillsToolsEIE as default
};
