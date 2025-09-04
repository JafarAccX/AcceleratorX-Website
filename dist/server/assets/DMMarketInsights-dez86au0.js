import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const DMMarketInsights = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const stats = [
    {
      value: 40,
      label: "Efficiency Boost",
      suffix: "%",
      description: "Average increase in marketing efficiency with AI"
    },
    {
      value: 700,
      label: "Global Ad Spend",
      prefix: "$",
      suffix: "B",
      description: "Annual digital advertising spend worldwide"
    },
    {
      value: 83,
      label: "AI Adoption",
      suffix: "%",
      description: "Marketers using AI in their strategy"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-16 highlight-text font-display", children: "The Future is Now" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: inView ? { opacity: 1, scale: 1 } : {},
            transition: { duration: 0.5, delay: index * 0.2 },
            className: "card group hover:bg-neutral-800/80",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl font-mono font-bold text-neon-yellow mb-4 text-glow", children: [
                stat.prefix,
                inView && /* @__PURE__ */ jsx(CountUp, { end: stat.value, duration: 2.5, separator: "," }),
                stat.suffix
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-mono font-bold text-neon-pink mb-2", children: stat.label }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-100/70 font-mono text-sm", children: stat.description })
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMMarketInsights as default
};
