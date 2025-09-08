import { j as jsxRuntimeExports } from "./main-Ctt__ttU.js";
import { u as useInView } from "./index-DLQ9o_sE.js";
import { H as FaUserTie, n as FaLaptopCode, I as FaGraduationCap, J as FaBuilding } from "./index-CqccpG3x.js";
import { m as motion } from "./proxy-B8iZIzY2.js";
const DMWhoShouldEnroll = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const audiences = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserTie, { className: "w-12 h-12" }),
      title: "Marketing Professionals",
      description: "Level up your career with AI-powered marketing strategies"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLaptopCode, { className: "w-12 h-12" }),
      title: "Freelancers",
      description: "Enhance your service offerings with cutting-edge marketing tools"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaGraduationCap, { className: "w-12 h-12" }),
      title: "Students",
      description: "Start your career with the most in-demand marketing skills"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaBuilding, { className: "w-12 h-12" }),
      title: "Business Owners",
      description: "Scale your business with data-driven marketing strategies"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-neutral-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-8 highlight-text", children: "Who Should Enroll?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: audiences.map((audience, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: inView ? { opacity: 1, scale: 1 } : {},
            transition: { duration: 0.5, delay: index * 0.2 },
            className: "card hover:border-neon-yellow/50 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-neon-yellow group-hover:text-neon-yellow transition-colors duration-300", children: audience.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-neutral-100 mb-4", children: audience.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-100/70 font-mono", children: audience.description })
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMWhoShouldEnroll as default
};
