import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Brain, Target, TrendingUp } from "lucide-react";
const WSAboutAIDM = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  const toolsRef = useRef(null);
  const allTools = [
    { name: "Google Analytics", img: "/assets/dataAnalyticsLogo/google-analytics.webp" },
    { name: "Hotjar", img: "/assets/dataAnalyticsLogo/hotjar.webp" },
    { name: "Optimizely", img: "/assets/dataAnalyticsLogo/optimizely.webp" },
    { name: "VWO", img: "/assets/dataAnalyticsLogo/vwo.webp" },
    { name: "Google Optimize", img: "/assets/dataAnalyticsLogo/google-optimize.webp" },
    { name: "Crazy Egg", img: "/assets/dataAnalyticsLogo/crazy-egg.webp" },
    { name: "Mouseflow", img: "/assets/dataAnalyticsLogo/mouseflow.webp" },
    { name: "Smartlook", img: "/assets/dataAnalyticsLogo/smartlook.webp" },
    { name: "ChatGPT", img: "/assets/genAITools/gpt4.webp" },
    { name: "Claude", img: "/assets/genAITools/claude.webp" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-[#050A14] py-12 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-3/5 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[#0A1020] rounded-lg shadow-md border border-green-900/20 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-green-500/10 rounded-md px-3 py-1 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-green-400 text-sm font-medium", children: "AI-Powered CRO Workshop" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-blue-500/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-blue-500/10 rounded-md", children: /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white text-lg", children: "Workshop Highlights" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
              "Learn AI-driven conversion rate optimization techniques.",
              "Analyze user behavior with advanced analytics and heatmaps.",
              "Implement A/B testing frameworks powered by AI insights.",
              "Optimize landing pages and funnels for maximum conversions.",
              "Use predictive analytics to forecast conversion trends."
            ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-500/20 p-1 rounded-sm", children: index + 1 }),
              item
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-green-500/10 rounded-md", children: /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 text-green-400" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white text-lg", children: "What You'll Learn" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
              "How to use AI tools to identify conversion bottlenecks.",
              "Advanced user behavior analysis and segmentation.",
              "Creating data-driven optimization hypotheses.",
              "Implementing AI-powered A/B testing strategies.",
              "Building conversion-focused landing pages with AI assistance."
            ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-green-500/20 p-1 rounded-sm", children: index + 1 }),
              item
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: scrollToForm,
            className: "w-full mt-5 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300",
            children: "Register Now"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { ref: toolsRef, className: "bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-white mb-4", children: "CRO Tools You'll Master" }),
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex overflow-hidden", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "flex gap-3 px-2",
            animate: {
              x: [0, -80 * allTools.length]
            },
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: allTools.length * 2,
                ease: "linear"
              }
            },
            children: [...allTools, ...allTools].map((tool, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex-shrink-0 w-16 h-16 bg-[#111827] rounded-md p-2 flex flex-col items-center justify-center gap-1 border border-gray-800/30",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-white rounded-md", children: /* @__PURE__ */ jsx("img", { src: tool.img, alt: tool.name, className: "w-6 h-6 object-contain" }) }),
                  /* @__PURE__ */ jsx("p", { className: "text-[9px] font-medium text-gray-300 text-center line-clamp-1", children: tool.name })
                ]
              },
              index
            ))
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/5 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-900/60 to-green-900/60 rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "p-5 text-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx(FaCertificate, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Certification Included" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-200 mb-3 text-sm", children: "Upon completion of the workshop, you'll receive a professional certificate confirming your expertise in AI-powered conversion rate optimization techniques and tools." }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-200 mb-3 text-sm", children: "Earn an industry-recognized certificate showcasing your CRO and AI marketing skills!" }),
        /* @__PURE__ */ jsx("div", { className: "bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10", children: "⚠️ Only those who attend the complete CRO workshop will receive the official certification." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#0A1020] rounded-lg shadow-md p-5 border border-green-900/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-green-400" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Workshop Benefits" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "✓" }),
            "Hands-on experience with real CRO tools"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "✓" }),
            "AI-powered optimization strategies"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "✓" }),
            "Industry best practices and case studies"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "✓" }),
            "Direct mentorship from CRO experts"
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
};
export {
  WSAboutAIDM as default
};
