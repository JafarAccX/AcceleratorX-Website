import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import EnrollmentModal from "./EnrollmentModal-YXOsKyre.js";
import "../entry-server.js";
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
import "./metaPixel-Cw2h-5_I.js";
const dataAnalyticsPricingData = {
  title: "AcceleratorX Program",
  currentPrice: "34,999",
  features: [
    { name: "AI Automation techniques for Data analytics", included: true },
    { name: "Data Engineering Basics", included: true },
    { name: "Full Data Analytics Curriculum", included: true },
    { name: "Personalized CAPE Project", included: true },
    {
      name: "Product Analytics Specialization (optional)",
      included: true,
      highlight: true
    },
    { name: "Real-world, hands-on project experiences", included: true },
    { name: "Access to industry-leading tools and datasets", included: true },
    { name: "Mock Interviews with Industry Leaders", included: true },
    { name: "Comprehensive Interview Guide", included: true },
    { name: "Exclusive Access To Our Job Portal", included: true },
    { name: "Priority Screening In Job Applications", included: true },
    { name: "Verifiable Certificate", included: true }
  ]
};
function DataPricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pricingData = dataAnalyticsPricingData;
  return /* @__PURE__ */ jsxs("section", { id: "pricing", className: "py-24 bg-black", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Choose Your Learning Path" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg max-w-2xl mx-auto", children: "Select the plan that best fits your learning goals and career aspirations" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl grid grid-cols-1   mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: `relative rounded-3xl p-8 ${"bg-[#1a365d]"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx("div", { className: `${"bg-blue-600"} text-white text-xs font-medium px-3 py-1 rounded-lg`, children: "Most Popular" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-2xl mt-2 font-bold text-white mb-4", children: pricingData.title }) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-2 mb-2", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("span", { className: "text-4xl flex gap-2 items-center font-bold text-white", children: [
              "₹",
              pricingData.currentPrice,
              " ",
              /* @__PURE__ */ jsx("span", { className: "block text-base text-gray-400 mt-1", children: "+ GST" }),
              " "
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: () => {
                setIsModalOpen(true);
              },
              className: `w-full py-3 px-6 rounded-xl font-semibold mb-2 transition-all duration-300 ${"bg-white text-black hover:bg-gray-100"}`,
              children: "Enroll Now"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: pricingData.features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            feature.included ? /* @__PURE__ */ jsx(Check, { className: `w-5 h-5 ${"text-[#5CB338]"} mt-1 flex-shrink-0` }) : /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-1 flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gray-600 mx-auto mt-1.5" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "p",
              {
                className: `${feature.included ? feature.highlight ? "text-amber-400" : "text-white" : "text-gray-500"}`,
                children: feature.name
              }
            ) })
          ] }, index)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  DataPricingEIE as default
};
