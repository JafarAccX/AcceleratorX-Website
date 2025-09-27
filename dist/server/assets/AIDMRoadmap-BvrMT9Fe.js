import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Zap, Rocket } from "lucide-react";
import { b as useCourseContext } from "../entry-server.js";
import EnrollmentModal from "./EnrollmentModal-D8ozUqkn.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-D4Z7npuX.js";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadOnOpen, setDownloadOnOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setDownloadOnOpen(true);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-24 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Learning Journey" }),
        /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-6", children: [
          "From Scratch to",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "AI-First Marketer" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "A structured 16-week program designed to transform you into an AI-powered marketing professional" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: modules.map((module, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group p-6 bg-[#0F0F0F] rounded-xl border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(module.icon, { className: "w-6 h-6 text-[#5CB338]" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors", children: module.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: module.description })
              ] })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
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
