import { j as jsxRuntimeExports } from "./main-DVDzlx-0.js";
import { u as useInView } from "./index-BAAtjUok.js";
import { m as motion } from "./proxy-D2c8tzA2.js";
const DMMarketingTools = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const tools = [
    {
      category: "Paid Advertising",
      items: [
        {
          name: "Google Ads",
          logo: "/assets/dmAITools/googleads.webp"
        },
        {
          name: "Meta Ads",
          logo: "/assets/dmAITools/meta.webp"
        },
        {
          name: "Adzooma",
          logo: "/assets/dmAITools/adzooma.webp"
        }
      ]
    },
    {
      category: "SEO & Content Marketing",
      items: [
        {
          name: "SEMRush",
          logo: "/assets/dmAITools/semrush.webp"
        },
        {
          name: "Surfer SEO",
          logo: "/assets/dmAITools/surfer.webp"
        },
        {
          name: "Jasper AI",
          logo: "/assets/dmAITools/jasper.webp"
        }
      ]
    },
    {
      category: "Marketing Automation",
      items: [
        {
          name: "HubSpot AI",
          logo: "/assets/dmAITools/HubSpot.webp"
        },
        {
          name: "Active Campaign",
          logo: "/assets/dmAITools/activecampaign.webp"
        },
        {
          name: "Drift AI",
          logo: "/assets/dmAITools/drift.webp"
        }
      ]
    },
    {
      category: "Analytics & Performance Tracking",
      items: [
        {
          name: "Google Analytics 4",
          logo: "/assets/dmAITools/googleanalytics.webp"
        },
        {
          name: "Tableau",
          logo: "/assets/dataTools/tableu.webp"
        },
        {
          name: "IBM Watson",
          logo: "/assets/dmAITools/imwatson.webp"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-neutral-800/95", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-7xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl pb-3 md:text-6xl font-bold text-center mb-20 highlight-text", children: [
          "Master These ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-pink", children: "Tools" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8", children: tools.map((category, categoryIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: inView ? { opacity: 1, scale: 1 } : {},
            transition: { duration: 0.5, delay: categoryIndex * 0.2 },
            className: "bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-xl hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-mono font-bold text-neon-yellow mb-8 text-center pb-2 border-b border-neutral-700", children: category.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6", children: category.items.map((tool, toolIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-neutral-900/80 p-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 group flex items-center gap-4 hover:transform hover:scale-105 hover:shadow-lg",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-white to-neutral-100 rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: tool.logo,
                        alt: tool.name,
                        className: "w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-mono font-semibold text-neutral-100 group-hover:text-neon-pink transition-colors duration-300", children: tool.name })
                  ]
                },
                toolIndex
              )) })
            ]
          },
          categoryIndex
        )) })
      ]
    }
  ) }) });
};
export {
  DMMarketingTools as default
};
