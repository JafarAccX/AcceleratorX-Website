import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Check } from "lucide-react";
import EnrollmentModal from "./EnrollmentModal-CRvyn2Ta.js";
import "framer-motion";
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
import "./metaPixel-46TVWgCT.js";
const acceleratorPricingData = {
  title: "AcceleratorX Program",
  mrp: "49,999",
  features: [
    { name: "BYDP", included: true },
    { name: "PM Toolbox & Templates", included: true },
    { name: "Assignment Feedback", included: true },
    { name: "Growth Product Management Specialization", included: true },
    { name: "Mock Interviews", included: true, detail: "Group" },
    { name: "Personalized Skill Report", included: true },
    { name: "AcceleratorX Job Priority Access", included: true },
    { name: "Alumni Access & Exclusive Content", included: true },
    { name: "Project-Based Mini Challenges", included: true },
    { name: "Exclusive PM Workshops & Events", included: true },
    { name: "Bi-Weekly Career Review Calls", included: true },
    { name: "Chance to win an Industry Internship", included: true },
    { name: "Business Pitch & Investor Workshop", included: true },
    { name: "Product Showcase on the Wall of Products", included: true },
    { name: "Ask Doubt (1:1 with Mentor on demand)", included: true }
  ]
};
function PricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pricingData = acceleratorPricingData;
  return /* @__PURE__ */ jsxs("section", { id: "pricing", className: "py-24 bg-black", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Choose Your Learning Path" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg max-w-2xl mx-auto", children: "Select the plan that best fits your learning goals and career aspirations" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative rounded-3xl p-8 ${"bg-[#1a365d]"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-2xl mt-2 font-bold text-white mb-4", children: pricingData.title }) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-2 mb-2", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("span", { className: "text-4xl font-bold flex gap-2 items-center justify-center text-white", children: [
                "₹",
                pricingData.mrp,
                /* @__PURE__ */ jsx("span", { className: "block text-base text-gray-400 mt-1", children: "+ GST" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setIsModalOpen(true);
                },
                className: "w-full py-3 px-6 rounded-xl bg-white text-black font-semibold mb-2 hover:bg-gray-100 transition-colors",
                children: "Enroll Now"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: pricingData.features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              feature.included ? /* @__PURE__ */ jsx(Check, { className: `w-5 h-5   "text-blue-500"} mt-1 flex-shrink-0` }) : /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-1 flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gray-600 mx-auto mt-1.5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: `${feature.included ? "text-white" : "text-gray-500"}`, children: feature.name }),
                feature.detail && feature.included && /* @__PURE__ */ jsx("p", { className: `text-sm   "text-blue-500"}`, children: feature.detail })
              ] })
            ] }, index)) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  PricingEIE as default
};
