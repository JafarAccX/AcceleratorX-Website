import { j as jsxRuntimeExports } from "./main-DS-AYwzb.js";
import { u as useInView } from "./index-DwcLbEV9.js";
import { m as motion } from "./proxy-BvognpjE.js";
const DMHandsOnProjects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const projects = [
    {
      title: "Campaign Performance Optimization",
      before: {
        metric: "CTR",
        value: "1.2%",
        description: "Traditional approach"
      },
      after: {
        metric: "CTR",
        value: "3.8%",
        description: "AI-optimized campaign"
      }
    },
    {
      title: "Marketing ROI Enhancement",
      before: {
        metric: "ROI",
        value: "150%",
        description: "Manual optimization"
      },
      after: {
        metric: "ROI",
        value: "320%",
        description: "AI-driven strategy"
      }
    },
    {
      title: "Customer Acquisition Cost",
      before: {
        metric: "CAC",
        value: "$45",
        description: "Standard targeting"
      },
      after: {
        metric: "CAC",
        value: "$28",
        description: "AI-powered targeting"
      }
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl pb-2 font-bold text-center mb-8 highlight-text", children: "Hands-On Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: inView ? { opacity: 1, scale: 1 } : {},
            transition: { duration: 0.5, delay: index * 0.2 },
            className: "card hover:border-neon-yellow/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-neutral-100 mb-8 text-center", children: project.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-stretch gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4 bg-neutral-800/50 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neutral-100/70 mb-2", children: "Before" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-neutral-100 mb-2", children: project.before.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neutral-100/70", children: project.before.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4 bg-neon-yellow/10 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neon-yellow mb-2", children: "After" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-neon-yellow mb-2", children: project.after.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neon-yellow/80", children: project.after.description })
                ] })
              ] })
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMHandsOnProjects as default
};
