import { r as reactExports, j as jsxRuntimeExports, Q as ChevronDown } from "./main-DeWmku3x.js";
import WSFIOSection from "./WSIOSection-BTGd92KN.js";
import { m as motion } from "./proxy-CanaJn_u.js";
import { A as AnimatePresence } from "./index-B9lm7uYh.js";
import { A as ArrowRight } from "./arrow-right-FvSk5-_7.js";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer: "No. This session is designed for both coders and non‑coders."
    },
    {
      question: "Will it be hands-on?",
      answer: "Yes, you’ll learn frameworks you can apply immediately."
    },
    {
      question: "Is it really free?",
      answer: "Yes! Seats are limited, so make sure to grab yours."
    }
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
          children: [
            "Frequently",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Asked",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Questions"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
          className: "space-y-4",
          children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: {
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut"
              },
              className: "border-b border-gray-800 last:border-b-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => toggleFAQ(index),
                    className: "w-full py-6 flex items-center justify-between text-left group hover:bg-gray-800/20 transition-colors duration-200 rounded-lg px-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-lg md:text-xl font-medium pr-8 group-hover:text-gray-200 transition-colors duration-200", children: faq.question }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          animate: {
                            rotate: openIndex === index ? 180 : 0
                          },
                          transition: { duration: 0.3, ease: "easeOut" },
                          className: "flex-shrink-0",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: {
                      height: 0,
                      opacity: 0
                    },
                    animate: {
                      height: "auto",
                      opacity: 1
                    },
                    exit: {
                      height: 0,
                      opacity: 0
                    },
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { y: -10 },
                        animate: { y: 0 },
                        exit: { y: -10 },
                        transition: { duration: 0.2, delay: 0.1 },
                        className: "px-4 pb-6",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-base md:text-lg leading-relaxed", children: faq.answer })
                      }
                    )
                  }
                ) })
              ]
            },
            index
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          y: [0, -10, 0],
          opacity: [0.1, 0.3, 0.1]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        },
        className: "absolute top-1/4 right-1/4 w-2 h-2 bg-gray-600/30 rounded-full blur-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          y: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2]
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        },
        className: "absolute bottom-1/3 left-1/5 w-1 h-1 bg-gray-500/20 rounded-full blur-sm"
      }
    )
  ] });
};
const WSTestimonialPM = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A0F1D]  relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/10 via-violet-500/5 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/10 via-indigo-500/5 to-transparent rounded-tr-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WSFIOSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " lg:hidden flex items-center justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: scrollToForm,
          className: "group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300",
          children: [
            "Reserve Your Spot",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 py-20 max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          className: "mt-4 text-lg text-gray-300",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.6 },
          children: "Seats are limited. Don’t let your idea stay just an idea."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          className: "text-4xl md:text-5xl font-bold leading-tight",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: "Register Now — It’s Free"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          className: "mt-4 text-lg text-gray-500",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.6 },
          children: "Live, focused, and built for action. Join us and start moving your idea forward."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "py-10",
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
              children: "Register Now — It’s Free ↗"
            }
          )
        }
      )
    ] })
  ] });
};
export {
  WSTestimonialPM as default
};
