import { r as reactExports, j as jsxRuntimeExports } from "./main-CfA5h11a.js";
import EnrollmentModal from "./EnrollmentModal-Cws58IB3.js";
import { m as motion } from "./proxy-CHEv0qax.js";
import { C as Check } from "./check-DT9GdvSS.js";
import "./enrollmentApi-DH74qvpY.js";
import "./metaPixel-DjMPEQ2F.js";
import "./index-Dk7MajVP.js";
const GENPricing = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const features = [
    "3-month intensive program",
    "Live instructor-led sessions",
    "Real-world AI projects",
    "Industry-recognized certification",
    "Lifetime access to course content",
    "AI community membership",
    "Career guidance and support",
    "Project portfolio development",
    "Interview preparation"
  ];
  const plans = [
    {
      name: "Regular",
      currentPrice: "42,499",
      description: "Comprehensive AI training program",
      features,
      highlighted: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Invest in Your AI Future" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Join our comprehensive AI program and master the future of technology" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container grid grid-cols-1 gap-4 items-start js px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-8 w-full mx-auto", children: plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1 },
        className: `bg-gradient-to-b min-w-[300px] w-full max-w-[400px] from-gray-900 to-black border rounded-xl p-8 shadow-xl ${plan.highlighted ? "border-blue-500 shadow-blue-500/20" : "border-gray-800"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: plan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: plan.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-center gap-1 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-white", children: "₹" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl flex gap-2 items-center  font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text", children: [
                plan.currentPrice,
                "  ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-base text-gray-400 mt-1", children: "+ GST" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: featureIndex * 0.05 },
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: feature })
              ]
            },
            featureIndex
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: plan.highlighted ? () => setIsModalOpen(true) : void 0,
              disabled: !plan.highlighted,
              className: `w-full rounded-lg py-3 px-6 font-semibold transition-all duration-300 ${plan.highlighted ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25" : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"}`,
              children: "🚀 Enroll Now"
            }
          )
        ]
      },
      index
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
};
export {
  GENPricing as default
};
