import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FileText, Image, TrendingUp, BarChart, Zap } from "lucide-react";
const toolCategories = [
  {
    category: "Content & Copy",
    items: [
      { name: "ChatGPT", logo: "/assets/genAITools/gpt4.webp" },
      { name: "Claude.ai", logo: "/assets/genAITools/claude.webp" },
      { name: "Copy.ai", logo: "/assets/aidmtools/copy.ai.svg" },
      { name: "Jasper", logo: "/assets/dmAITools/jasper.webp" },
      { name: "Grammarly", logo: "/assets/aidmtools/png-transparent-grammarly-hd-logo-thumbnail.webp" },
      { name: "Notion AI", logo: "/assets/n8n/notion.webp" }
    ],
    icon: FileText,
    color: "text-blue-400"
  },
  {
    category: "Visuals & Media",
    items: [
      { name: "Canva", logo: "/assets/aidmtools/canva.webp" },
      { name: "SDXL", logo: "/assets/genAITools/stability-ai.webp" },
      { name: "Ideogram", logo: "/assets/aidmtools/ido.webp" },
      { name: "Leonardo.ai", logo: "/assets/aidmtools/leo.webp" },
      { name: "Runway", logo: "/assets/genAITools/runway.webp" },
      { name: "Pika Labs", logo: "/assets/genAITools/pika.webp" },
      { name: "Veo3", logo: "/assets/aidmtools/Veo3.webp" },
      { name: "Nano Banana", logo: "/assets/aidmtools/nano-banana-icon.webp" }
    ],
    icon: Image,
    color: "text-purple-400"
  },
  {
    category: "Ads & Growth",
    items: [
      { name: "Google Ads Sandbox", logo: "/assets/dmAITools/googleads.webp" },
      { name: "Meta Ads Manager", logo: "/assets/dmAITools/meta.webp" },
      { name: "AdCreative.ai", logo: "/assets/aidmtools/AdCreative.ai.svg" },
      { name: "Modash", logo: "/assets/aidmtools/Modash.webp" },
      { name: "Mesa.ai", logo: "" }
    ],
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    category: "Analytics & CRO",
    items: [
      { name: "GA4", logo: "/assets/dmAITools/googleanalytics.webp" },
      { name: "Microsoft Clarity", logo: "/assets/aidmtools/Clarity.webp" },
      { name: "HotJar", logo: "/assets/aidmtools/HotJar.webp" },
      { name: "GrowthBook", logo: "/assets/aidmtools/GrowthBook.webp" }
    ],
    icon: BarChart,
    color: "text-orange-400"
  },
  {
    category: "Automation & CRM",
    items: [
      { name: "n8n", logo: "/assets/genAITools/n8n-seeklogo.webp" },
      { name: "Make.com", logo: "/make.webp" },
      { name: "HubSpot", logo: "/assets/dmAITools/HubSpot.webp" },
      { name: "Mailchimp", logo: "/assets/aidmtools/Mailchimp.webp" },
      { name: "Clay", logo: "/assets/aidmtools/Clay_Logo_Tertiary_Wht.svg" },
      { name: "Apollo.io", logo: "/assets/aidmtools/Apollo.io.webp" }
    ],
    icon: Zap,
    color: "text-cyan-400"
  }
];
const AIDMTools = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0a0a0a]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "AI Tools & Technologies" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        "The ",
        /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "AI Marketing Tools" }),
        "  You Will Master"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "You will get hands-on 20+ top AI Marketing tools that today's marketers rely on." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: toolCategories.map((category, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group",
        children: /* @__PURE__ */ jsx("div", { className: "p-6 bg-[#0F0F0F] hover:border border-transparent rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#5CB338]/50 hover:shadow-lg hover:shadow-[#5CB338]/5", children: /* @__PURE__ */ jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center ", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(category.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-[#5CB338] transition-colors duration-300", children: category.category })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 mt-4", children: category.items.map((tool, toolIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 bg-gray-800/10 rounded-lg hover:bg-gray-700/50 transition-colors", children: [
            /* @__PURE__ */ jsx("img", { src: tool.logo, alt: tool.name, className: "w-6 h-6 object-contain" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-300", children: tool.name })
          ] }, toolIndex)) })
        ] }) }) })
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-[#5CB338]/10 rounded-full border border-[#5CB338]/20", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
      /* @__PURE__ */ jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: "20+ Industry-Leading AI Tools" })
    ] }) })
  ] }) });
};
export {
  AIDMTools as default
};
