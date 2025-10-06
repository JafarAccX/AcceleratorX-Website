import { r as reactExports, l as useCourseContext, j as jsxRuntimeExports, k as motion } from "./main-CQZRSQfQ.js";
import EnrollmentModal from "./EnrollmentModal-kIl_IML_.js";
import { S as Star } from "./star-BSrzaDRl.js";
import { C as Check } from "./check-BF5gEgUV.js";
import "./enrollmentApi-JK_WiLhq.js";
import "./metaPixel-BPrv2gAs.js";
const pricingOptions = [
  {
    title: "Early-bird",
    price: "₹29,999",
    originalPrice: "₹49,999",
    description: "full program",
    highlight: true,
    discount: "40% Off"
  },
  {
    title: "Standard",
    price: "₹39,999",
    originalPrice: "₹49,999",
    description: "full program",
    highlight: false,
    discount: "20% Off"
  },
  {
    title: "Instalments",
    price: "3 × ₹13,999/month",
    originalPrice: "",
    description: "full program",
    highlight: false,
    discount: "(no-cost EMI)"
  }
];
const pricingFeatures = [
  "16-Week AI Marketing Program",
  "20+ AI Tool Mastery",
  "Live Capstone Projects",
  "1:1 Mentor Support",
  "Job Placement Assistance",
  "Industry Certification",
  "Alumni Network Access",
  "n8n Automation Workshop",
  "Portfolio Development",
  "Career Review Calls"
];
const AIDMPricing = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-[#0a0a0a]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Investment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "Choose Your Learning Path" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-400 max-w-2xl mx-auto", children: "High-ROS (Return on Skills) that pays back in multiples" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12", children: pricingOptions.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: `relative rounded-3xl p-8 border transition-all duration-300 ${option.highlight ? "bg-[#0F0F0F] border-[#5CB338] shadow-lg shadow-[#5CB338]/20" : "bg-[#0F0F0F] border-white/10 hover:border-[#5CB338]/50"}`,
          children: [
            option.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#5CB338] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
              "Most Popular"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-white mb-2", children: option.title }),
              option.discount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-[#5CB338]/10 text-[#5CB338] px-3 py-1 rounded-full text-sm font-medium mb-4", children: option.discount })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-[#5CB338]", children: option.price }),
                option.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg text-gray-400 line-through", children: option.originalPrice })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: option.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                onClick: handleEnrollClick,
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: `w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${option.highlight ? "bg-[#5CB338] hover:bg-[#5CB338]/90 text-white shadow-lg shadow-[#5CB338]/25" : "border-2 border-[#5CB338] text-[#5CB338] hover:bg-[#5CB338]/10"}`,
                children: option.highlight ? "Lock Early-Bird Spot" : "Enroll Now"
              }
            )
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-4xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-xl p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-bold text-white text-center mb-8", children: "What's Included in All Plans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: pricingFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: index * 0.05 },
                viewport: { once: true },
                className: "flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-[#5CB338]" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-sm", children: feature })
                ]
              },
              index
            )) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        onSubmit: handleModalSubmit
      }
    )
  ] });
};
export {
  AIDMPricing as default
};
