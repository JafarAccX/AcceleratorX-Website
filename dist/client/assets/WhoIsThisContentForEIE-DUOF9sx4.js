import { j as jsxRuntimeExports, k as motion } from "./main-apVAGIEz.js";
import { C as Check } from "./check-CQi4ZV_P.js";
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
      title: "Business professionals",
      description: "Aiming to leverage data for smarter, strategic decisions."
    },
    {
      title: "Career transitioners",
      description: "Ready to step into high-growth AI data analytics and Business analytics jobs."
    },
    {
      title: "Recent graduates",
      description: "Ready to launch their careers in product-based companies with a solid foundation in AI-powered data analytics."
    },
    {
      title: "Entrepreneurs",
      description: "To make smarter, data-driven business decisions and AI-driven strategies."
    },
    {
      title: "Marketing Professionals",
      description: "Looking forward to making data-driven decisions, optimizing campaigns, and forecasting trends."
    },
    {
      title: "Students",
      description: "Aspiring to start a rewarding career in AI data analytics."
    },
    {
      title: "AI Enthusiasts",
      description: "Passionate about exploring AI applications in data analytics and building future-ready skills."
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-[#1A5D1A] mb-4", children: "Who can take the AI Data Analytics Program?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-[#1F441E] max-w-3xl mx-auto", children: "This AI Data Analytics Program is curated for professionals and students who want to accelerate their career and business, get hired, and stay relevant in the current AI job market." })
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
            className: `bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#C7DCA7]`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-8 h-8 rounded-full flex items-center justify-center bg-[#E4EFE7]`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `w-5 h-5 text-[#1A5D1A]` })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-semibold mb-2 text-[#1A5D1A]`, children: item.title }),
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
