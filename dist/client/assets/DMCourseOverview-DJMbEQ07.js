import { j as jsxRuntimeExports } from "./main-D-AGBQ1V.js";
import { u as useInView } from "./index-BjYJm8j_.js";
import { y as FaChartLine, B as FaAd, s as FaRobot } from "./index-BB14_Dbc.js";
import { m as motion } from "./proxy-BKgBDLzu.js";
const DMCourseOverview = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const modules = [
    {
      month: "Month 1",
      title: "Foundations & Strategy",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaChartLine, { className: "w-8 h-8" }),
      topics: [
        "Digital Marketing Fundamentals",
        "AI in Marketing",
        "Strategy Development"
      ]
    },
    {
      month: "Month 2",
      title: "Implementation & Tools",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAd, { className: "w-8 h-8" }),
      topics: ["Paid Advertising", "SEO Mastery", "Marketing Automation"]
    },
    {
      month: "Month 3",
      title: "Advanced Techniques",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaRobot, { className: "w-8 h-8" }),
      topics: [
        "AI-Powered Analytics",
        "Performance Optimization",
        "Campaign Management"
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-neutral-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-center mb-16 highlight-text", children: "Course Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: modules.map((module, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { duration: 0.5, delay: index * 0.2 },
            className: "card group hover:bg-neutral-900/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-neon-yellow rounded-lg flex items-center justify-center text-neutral-900 mr-4 group-hover:bg-neon-pink transition-colors duration-300", children: module.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-mono text-neon-yellow group-hover:text-neon-pink transition-colors duration-300", children: module.month }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-neutral-100", children: module.title })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: module.topics.map((topic, topicIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center text-neutral-100/70 font-mono",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-neon-pink rounded-full mr-3" }),
                    topic
                  ]
                },
                topicIndex
              )) })
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMCourseOverview as default
};
