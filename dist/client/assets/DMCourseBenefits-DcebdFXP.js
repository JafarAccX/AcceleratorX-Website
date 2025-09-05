import { j as jsxRuntimeExports } from "./main-DUtAh55Z.js";
import { u as useInView } from "./index-wov4qFH4.js";
import { x as FaTools, y as FaChartLine, c as FaCertificate, z as FaUsers, s as FaRobot, A as FaBrain } from "./index-DNF7mxN0.js";
import { m as motion } from "./proxy-D90nfG6D.js";
const DMCourseBenefits = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const benefits = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTools, {}),
      title: "Hands-on Tools",
      description: "Get practical experience with industry-leading marketing tools"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaChartLine, {}),
      title: "Better ROI",
      description: "Learn to maximize returns through data-driven decisions"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCertificate, {}),
      title: "Certification",
      description: "Earn an industry-recognized certification"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUsers, {}),
      title: "Network Growth",
      description: "Connect with industry experts and peers"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaRobot, {}),
      title: "AI Mastery",
      description: "Master cutting-edge AI marketing tools"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaBrain, {}),
      title: "Future-Ready",
      description: "Stay ahead with emerging marketing trends"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-16 highlight-text", children: "Course Benefits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: inView ? { opacity: 1, scale: 1 } : {},
            transition: { duration: 0.5, delay: index * 0.1 },
            className: "card group hover:bg-neutral-800/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-neon-yellow rounded-lg flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-neon-pink transition-colors duration-300", children: benefit.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-mono font-bold text-neon-yellow mb-4 group-hover:text-neon-pink transition-colors duration-300", children: benefit.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-100/70 font-mono", children: benefit.description })
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMCourseBenefits as default
};
