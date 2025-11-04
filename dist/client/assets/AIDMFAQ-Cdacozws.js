import { r as reactExports, j as jsxRuntimeExports, k as motion, A as AnimatePresence } from "./main-CSwsI03w.js";
import EnrollmentModal from "./EnrollmentModal-68jSegjg.js";
import { M as Minus } from "./minus-Pi03c0h1.js";
import { P as Plus } from "./plus-BeT8s6Dr.js";
import "./enrollmentApi-DWbIXGMt.js";
import "./metaPixel-DG5N3ym5.js";
const AIDMFAQ = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(-1);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalSubmit = () => {
    setIsModalOpen(false);
  };
  const faqs = [
    { question: "Do I need prior coding knowledge?", answer: "No, this Nano Degrees in AI Digital Marketing is a beginner-friendly and no-code AI marketing program." },
    { question: "Are the sessions recorded or live?", answer: "This AI Marketing Nano Degree program is 100% live, and you will get recordings access of all the lectures" },
    { question: "Is placement support included in this AI Marketing Nano Degree?", answer: "Yes, we provide 100% AI Marketing job assistance and career support until you land your next marketing opportunity." },
    { question: "What happens if I miss a class?", answer: "You can rewatch anytime from your student portal." },
    { question: "Which AI Marketing tool will I learn?", answer: "Over 20+ industry-standard AI Marketing tools, including ChatGPT, Jasper, n8n, HubSpot, GA4, and more." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-6", children: "Still Have Questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "We've got answers to help you make the right decision" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => {
      const open = openIndex === index;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-xl border transition-all duration-300 shadow-sm ${open ? "bg-[#1A1A1A] border-[#5CB338] shadow-[#5CB338]/20 shadow-md" : "bg-[#0F0F0F] border-white/10 hover:border-[#5CB338]/40"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "aria-expanded": open,
                "aria-controls": `faq-panel-${index}`,
                className: "w-full text-left relative px-6 py-5 flex justify-between items-center gap-4 focus:outline-none rounded-xl cursor-pointer",
                onClick: () => setOpenIndex(open ? -1 : index),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-200 text-lg flex-1", children: faq.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0 transition-all", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4 text-[#5CB338]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-[#5CB338]" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                id: `faq-panel-${index}`,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 leading-relaxed text-sm md:text-base", children: faq.answer }) })
              },
              index
            ) })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-center mt-12 p-8 bg-[#0F0F0F] rounded-xl border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-bold text-white mb-4", children: "Want to know more about AI digital marketing?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-6", children: "Please chat with our team. Get in touch with us." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: handleModalOpen,
          className: "bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300",
          children: "Get in Touch"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose, onSubmit: handleModalSubmit })
  ] }) });
};
export {
  AIDMFAQ as default
};
