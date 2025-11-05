import { f as createLucideIcon, j as jsxRuntimeExports, k as motion } from "./main-Ck2PwlUp.js";
import { T as TrendingUp } from "./trending-up-yZ1zlIbe.js";
import { B as BarChart } from "./bar-chart-4fjJ_j2X.js";
import { Z as Zap } from "./zap-DdPw8T2N.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Image = createLucideIcon("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
const toolCategories = [
  {
    category: "Content & Copy",
    items: [
      { name: "ChatGPT", logo: "/assets/genAITools/gpt4.webp", description: "AI language model for content creation and copywriting" },
      { name: "Claude.ai", logo: "/assets/genAITools/claude.webp", description: "Advanced AI assistant for writing and analysis" },
      { name: "Copy.ai", logo: "/assets/aidmtools/copy.ai.svg", description: "AI-powered copywriting and content generation tool" },
      { name: "Jasper", logo: "/assets/dmAITools/jasper.webp", description: "AI content writing platform for marketers" },
      { name: "Grammarly", logo: "/assets/aidmtools/png-transparent-grammarly-hd-logo-thumbnail.webp", description: "AI writing assistant for grammar and style" },
      { name: "Notion AI", logo: "/assets/n8n/notion.webp", description: "AI-enhanced workspace for notes and documentation" }
    ],
    icon: FileText,
    color: "text-blue-400"
  },
  {
    category: "Visuals & Media",
    items: [
      { name: "Canva", logo: "/assets/aidmtools/canva.webp", description: "Design platform with AI-powered templates and tools" },
      { name: "SDXL", logo: "/assets/genAITools/stability-ai.webp", description: "AI image generation model for creative visuals" },
      { name: "Ideogram", logo: "/assets/aidmtools/ido.webp", description: "AI-powered logo and brand design platform" },
      { name: "Leonardo.ai", logo: "/assets/aidmtools/leo.webp", description: "AI art generation and creative design tool" },
      { name: "Runway", logo: "/assets/genAITools/runway.webp", description: "AI video editing and creative suite" },
      { name: "Pika Labs", logo: "/assets/genAITools/pika.webp", description: "AI video generation and editing platform" },
      { name: "Veo3", logo: "/assets/aidmtools/Veo3.webp", description: "Advanced AI video creation and editing tool" },
      { name: "Nano Banana", logo: "/assets/aidmtools/nano-banana-icon.webp", description: "AI-powered creative content generation platform" }
    ],
    icon: Image,
    color: "text-purple-400"
  },
  {
    category: "Ads & Growth",
    items: [
      { name: "Google Ads Sandbox", logo: "/assets/dmAITools/googleads.webp", description: "Google's advertising platform for campaign management" },
      { name: "Meta Ads Manager", logo: "/assets/dmAITools/meta.webp", description: "Facebook and Instagram advertising management tool" },
      { name: "AdCreative.ai", logo: "/assets/aidmtools/AdCreative.ai.svg", description: "AI-powered ad creative generation platform" },
      { name: "Modash", logo: "/assets/aidmtools/Modash.webp", description: "AI marketing dashboard and analytics platform" },
      { name: "Mesa.ai", logo: "", description: "AI-powered advertising optimization tool" }
    ],
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    category: "Analytics & CRO",
    items: [
      { name: "GA4", logo: "/assets/dmAITools/googleanalytics.webp", description: "Google Analytics 4 for website and user behavior tracking" },
      { name: "Microsoft Clarity", logo: "/assets/aidmtools/Clarity.webp", description: "User experience analytics and session recordings" },
      { name: "HotJar", logo: "/assets/aidmtools/HotJar.webp", description: "Website heatmaps and user feedback platform" },
      { name: "GrowthBook", logo: "/assets/aidmtools/GrowthBook.webp", description: "A/B testing and feature experimentation platform" }
    ],
    icon: BarChart,
    color: "text-orange-400"
  },
  {
    category: "Automation & CRM",
    items: [
      { name: "n8n", logo: "/assets/genAITools/n8n-seeklogo.webp", description: "Workflow automation platform with AI integrations" },
      { name: "Make.com", logo: "/make.webp", description: "Visual workflow automation and integration platform" },
      { name: "HubSpot", logo: "/assets/dmAITools/HubSpot.webp", description: "CRM and marketing automation platform" },
      { name: "Mailchimp", logo: "/assets/aidmtools/Mailchimp.webp", description: "Email marketing and automation platform" },
      { name: "Clay", logo: "/assets/aidmtools/Clay_Logo_Tertiary_Wht.svg", description: "AI-powered lead enrichment and data platform" },
      { name: "Apollo.io", logo: "/assets/aidmtools/Apollo.io.webp", description: "Sales intelligence and lead generation platform" }
    ],
    icon: Zap,
    color: "text-cyan-400"
  }
];
const AIDMTools = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-[#0a0a0a]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "AI Tools & Technologies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "AI Marketing Tools" }),
        "  You Will Master"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "You will get hands-on 20+ top AI Marketing tools that today's marketers rely on." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: toolCategories.map((category, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-[#0F0F0F] hover:border border-transparent rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#5CB338]/50 hover:shadow-lg hover:shadow-[#5CB338]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(category.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-[#5CB338] transition-colors duration-300", children: category.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 mt-4", children: category.items.map((tool, toolIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 bg-gray-800/10 rounded-lg hover:bg-gray-700/50 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tool.logo, alt: `${tool.name} - ${tool.description}`, className: "w-6 h-6 object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-300", children: tool.name })
          ] }, toolIndex)) })
        ] }) }) })
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-[#5CB338]/10 rounded-full border border-[#5CB338]/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: "20+ Industry-Leading AI Tools" })
    ] }) })
  ] }) });
};
export {
  AIDMTools as default
};
