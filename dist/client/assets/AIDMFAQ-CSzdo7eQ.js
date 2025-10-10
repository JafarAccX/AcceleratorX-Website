import { r as reactExports, j as jsxRuntimeExports, k as motion, A as AnimatePresence } from "./main-CtSa0pDV.js";
import EnrollmentModal from "./EnrollmentModal-BetrdJkE.js";
import { M as Minus } from "./minus-CLnq_ZIB.js";
import { P as Plus } from "./plus-B86eMdP3.js";
import "./enrollmentApi-Bp8HLVVn.js";
import "./metaPixel-B-L5LvPr.js";
const AIDMFAQ = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(-1);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalSubmit = () => {
    setIsModalOpen(false);
  };
  const faqs = [
    { question: "Do I need coding skills?", answer: "No, this is a low-code / no-code AI Marketing program, designed for beginners, marketers, career switchers and founders." },
    { question: "Will the AI Marketing sessions be recorded?", answer: "Yes, you will get sessions recordings, AI Marketing labs and ready to use templates to practice anytime." },
    { question: "Will I get placement support or career support in the AI Marketing certification?", answer: "Yes, you'll build a capstone portfolio in AI-powered digital marketing, receive mentor reviews, and get selective industry introductions" },
    { question: "What if I miss a live AI Marketing class?", answer: "No worries, you can always watch the recording, complete the lab submission, and also join weekly mentor office hours." },
    { question: "What's the refund policy for the AI Marketing program?", answer: "We offer a 7-day money-back guarantee if you're not satisfied with the program quality. Contact our support team for assistance." },
    { question: "What AI tools will I learn in this program?", answer: "You'll master 20+ AI tools including ChatGPT, Claude.ai, n8n, Google Ads, Meta Ads, Canva, SDXL, Runway, Apollo.io, HubSpot, and many more industry-leading platforms." }
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-bold text-white mb-4", children: "Still have questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-6", children: "Can't find the answer you're looking for? Please chat with our team." }),
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
