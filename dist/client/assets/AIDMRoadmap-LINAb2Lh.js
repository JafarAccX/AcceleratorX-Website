import { f as createLucideIcon, r as reactExports, l as useCourseContext, j as jsxRuntimeExports, k as motion } from "./main-CQZRSQfQ.js";
import EnrollmentModal from "./EnrollmentModal-kIl_IML_.js";
import { B as Brain } from "./brain-BCL-JS2Q.js";
import { Z as Zap } from "./zap-DlQUUmLb.js";
import { R as Rocket } from "./rocket-o1zTBCUr.js";
import "./enrollmentApi-JK_WiLhq.js";
import "./metaPixel-BPrv2gAs.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BarChart3 = createLucideIcon("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const modules = [
  {
    title: "Month 1 — Foundations & AI Content",
    description: "Funnels, personas, copy frameworks, AI visuals, GA4 basics",
    icon: Brain
  },
  {
    title: "Month 2 — Performance Marketing & Analytics",
    description: "Google & Meta Ads, social strategy, A/B testing, CRO",
    icon: BarChart3
  },
  {
    title: "Month 3 — Automation & B2B Growth",
    description: "n8n workflows, email drips, lead enrichment, CRM integration",
    icon: Zap
  },
  {
    title: "Month 4 — Full-Funnel Integration & Capstone",
    description: "B2B outreach, heatmaps, full-funnel automation, capstone demo day",
    icon: Rocket
  }
];
const AIDMRoadmap = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [downloadOnOpen, setDownloadOnOpen] = reactExports.useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setDownloadOnOpen(true);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Learning Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-6", children: [
          "From Scratch to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "AI-First Marketer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "A structured 16-week program designed to transform you into an AI-powered marketing professional" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: modules.map((module, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group p-6 bg-[#0F0F0F] rounded-xl border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(module.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors", children: module.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: module.description })
              ] })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          onClick: handleEnrollClick,
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          className: "bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#5CB338]/25",
          children: "Download Full Curriculum"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => {
          setIsModalOpen(false);
          setDownloadOnOpen(false);
        },
        onSubmit: handleModalSubmit,
        downloadOnOpen
      }
    )
  ] });
};
export {
  AIDMRoadmap as default
};
