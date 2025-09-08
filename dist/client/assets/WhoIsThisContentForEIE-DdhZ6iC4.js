import { j as jsxRuntimeExports } from "./main-Ctt__ttU.js";
import { m as motion } from "./proxy-B8iZIzY2.js";
import { C as Check } from "./check-BG_LglXa.js";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const WhoIsThisContentForEIE = () => {
  const targetAudience = [
    {
      title: "Business Professionals",
      description: "Looking to leverage data for strategic decision-making"
    },
    {
      title: "Career Transitioners",
      description: "Aiming to move into data analytics roles"
    },
    {
      title: "Recent Graduates",
      description: "Seeking to build a strong foundation in data analytics"
    },
    {
      title: "Entrepreneurs",
      description: "Wanting to make data-driven business decisions"
    },
    {
      title: "Marketing Professionals",
      description: "Looking to enhance their data analysis capabilities"
    },
    {
      title: "Students",
      description: "Looking forward to start a career in data analytics"
    },
    {
      title: "Product Analysts",
      description: "Looking to specialize in advanced product metrics and user behavior analysis",
      highlight: true
    },
    {
      title: "AI Enthusiasts",
      description: "Passionate about Artificial Intelligence and eager to explore its applications in data analytics",
      highlight: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gradient-to-b from-[#F4F9F4] to-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: containerVariants,
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-[#1A5D1A] mb-4", children: "Who Is This Program For?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-[#1F441E] max-w-3xl mx-auto", children: "Our EIE Data Analytics program is designed for ambitious professionals ready to master data-driven decision making, now featuring specialized tracks in Product Analytics" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: targetAudience.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: itemVariants,
            className: `bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border ${item.highlight ? "border-amber-400 shadow-amber-100" : "border-[#C7DCA7]"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-8 h-8 rounded-full flex items-center justify-center ${item.highlight ? "bg-amber-100" : "bg-[#E4EFE7]"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `w-5 h-5 ${item.highlight ? "text-amber-600" : "text-[#1A5D1A]"}` })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-semibold mb-2 ${item.highlight ? "text-amber-600" : "text-[#1A5D1A]"}`, children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#1F441E]", children: item.description })
              ] })
            ] })
          },
          index
        ))
      }
    )
  ] }) });
};
export {
  WhoIsThisContentForEIE as default
};
