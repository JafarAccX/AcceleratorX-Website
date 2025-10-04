import { f as createLucideIcon, j as jsxRuntimeExports } from "./main-Dr7DU7CZ.js";
import { T as TrendingUp } from "./trending-up-CoVtqXRn.js";
import { B as BarChart } from "./bar-chart-Blp1NXJr.js";
import { Z as Zap } from "./zap-B-2vi9qI.js";
import { m as motion } from "./proxy-82v-ftuM.js";
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
    tools: "ChatGPT, Claude.ai, Copy.ai, Jasper, Grammarly, Notion AI",
    icon: FileText,
    color: "text-blue-400"
  },
  {
    category: "Visuals & Media",
    tools: "Canva, SDXL, Ideogram, Leonardo.ai, Runway, Pika Labs, Veo3, Nano Banana",
    icon: Image,
    color: "text-purple-400"
  },
  {
    category: "Ads & Growth",
    tools: "Google Ads Sandbox, Meta Ads Manager, AdCreative.ai, Modash, Mesa.ai",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    category: "Analytics & CRO",
    tools: "GA4, Microsoft Clarity, HotJar, GrowthBook",
    icon: BarChart,
    color: "text-orange-400"
  },
  {
    category: "Automation & CRM",
    tools: "n8n, Make.com, HubSpot, Mailchimp, Clay, Apollo.io",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "AI Stack" }),
        " Top Recruiters Want"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Master the essential AI tools and technologies that industry leaders are looking for" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: toolCategories.map((category, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-[#0F0F0F] border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#5CB338]/50 hover:shadow-lg hover:shadow-[#5CB338]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(category.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-[#5CB338] transition-colors duration-300", children: category.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: category.tools })
          ] })
        ] }) })
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
