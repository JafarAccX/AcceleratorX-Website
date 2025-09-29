import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";
import EnrollmentModal from "./EnrollmentModal-6kiK3aSg.js";
import "lucide-react";
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
const DMPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const plans = [
    // {
    //   name: "Early Bird",
    //   price: 34999,
    //   description: "Limited time offer",
    //   features: [
    //     "Full Course Access",
    //     "AI Tools Access",
    //     "Live Sessions",
    //     "Project Reviews",
    //     "Certification",
    //     "Community Access",
    //     "Priority Placement Support",
    //     "Internship Opportunities",
    //     "Hackathons & Competitions",
    //   ],
    //   highlighted: true,
    // },
    {
      name: "Regular",
      price: 44999,
      description: "Standard pricing",
      features: [
        "Full Course Access",
        "AI Tools Access",
        "Live Sessions",
        "Project Reviews",
        "Certification",
        "Community Access"
      ],
      highlighted: false
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-10 bg-neutral-800", children: [
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        className: "max-w-6xl mx-auto",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-16 highlight-text", children: "Pricing & Enrollment" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: plans.map((plan, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: inView ? { opacity: 1, scale: 1 } : {},
              transition: { duration: 0.5, delay: index * 0.2 },
              className: `
                  card group
                  ${plan.highlighted ? "border-neon-yellow border-2" : ""}
                `,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-2xl font-mono font-bold text-neon-yellow mb-2 group-hover:text-neon-pink transition-colors duration-300", children: plan.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-neutral-100/70 font-mono mb-4", children: plan.description }),
                  /* @__PURE__ */ jsxs("div", { className: "text-4xl flex gap-2 items-center  font-mono font-bold text-neon-pink mb-2", children: [
                    "₹",
                    plan.price,
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "block text-base text-gray-400 mt-1", children: "+ GST" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs(
                  "li",
                  {
                    className: "flex items-center text-neutral-100/70 font-mono",
                    children: [
                      /* @__PURE__ */ jsx(FaCheck, { className: "text-neon-yellow mr-3" }),
                      feature
                    ]
                  },
                  featureIndex
                )) }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: plan.highlighted ? () => setIsModalOpen(true) : void 0,
                    className: `
                  w-full py-4 rounded-lg font-mono font-bold text-lg transition-all duration-300 transform
                  ${plan.highlighted ? "neon-button hover:-translate-y-1" : "bg-neutral-700 text-neutral-400 cursor-not-allowed opacity-70"}
                `,
                    disabled: !plan.highlighted,
                    children: "Enroll Now"
                  }
                )
              ]
            },
            index
          )) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false)
      }
    )
  ] });
};
export {
  DMPricing as default
};
