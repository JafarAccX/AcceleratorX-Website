import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, k as motion } from "./main-CLFAzKr7.js";
import { F as FiArrowUpRight, a as FiArrowRight } from "./index-unSJiTVk.js";
const faqs = [
  {
    question: "Is this beginner-friendly?",
    answer: "Yes. You don't need prior experience — just curiosity about data and a willingness to learn."
  },
  {
    question: "Do I need coding knowledge?",
    answer: "Not at all. This is focused on no-code and low-code AI tools for analysis."
  },
  {
    question: "Will there be a recording?",
    answer: "No. This is a live-only experience designed for real-time learning and interaction."
  }
];
function WSTestimonialDASecond() {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 px-6 py-20 text-white max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-10 text-center", children: "FAQs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-md transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setOpenIndex(isOpen ? null : index),
                  className: "flex items-center justify-between w-full text-left group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: faq.question }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white bg-white/10 p-2 rounded-full transition-transform group-hover:scale-105", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowUpRight, { className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, { className: "text-white" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.3 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm text-gray-300 leading-relaxed", children: faq.answer })
                }
              ) })
            ]
          },
          index
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 bg-gradient-to-b from-[#0A0F1C] to-[#121a2e] px-6 py-24 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:36px_36px]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-purple-500/10 blur-3xl rounded-full pointer-events-none z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            className: "text-4xl md:text-5xl font-bold leading-tight",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            children: "Let’s take your data skills from static to intelligent — together."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "mt-4 text-lg text-gray-300",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            children: "Start learning how to automate data analysis with AI — not someday, but today."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "mt-10",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4, duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  const form = document.getElementById("workshop-registration-form");
                  if (form) {
                    form.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    });
                  }
                },
                className: "rounded-full px-6 py-3 text-sm font-semibold text-black bg-gray-200 shadow-md hover:bg-white transition",
                children: "Claim Your Free Spot ↗"
              }
            )
          }
        )
      ] })
    ] })
  ] });
}
export {
  WSTestimonialDASecond as default
};
