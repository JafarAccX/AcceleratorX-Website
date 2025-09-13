import { r as reactExports, j as jsxRuntimeExports } from "./main-Ct9V9NA-.js";
import { u as useInView } from "./index-BhATK_QL.js";
import { G as FaChevronDown } from "./index-BX7BqQHy.js";
import { m as motion } from "./proxy-ClgBuM4B.js";
const DMFAQs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const faqs = [
    {
      question: "What prerequisites are needed for this course?",
      answer: "No specific prerequisites are required. Basic marketing knowledge and familiarity with digital platforms is helpful but not mandatory. We'll cover everything from the ground up."
    },
    {
      question: "How long do I have access to the course materials?",
      answer: "You get lifetime access to all course materials, including future updates. This ensures you can learn at your own pace and revisit topics as needed."
    },
    {
      question: "Is the certification recognized by employers?",
      answer: "Yes, our certification is industry-recognized and valued by employers. It demonstrates your proficiency in AI-powered digital marketing strategies."
    },
    {
      question: "What kind of support is available during the course?",
      answer: "You  have access to live sessions, community support, project reviews, and dedicated mentoring to ensure your success throughout the course."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, We offer a 15 days refund policy if you're not satisfied and made full payment with the course content or experience depending on the terms and conditions."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-3xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-16 highlight-text", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: inView ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.5, delay: index * 0.1 },
            className: "card group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "w-full text-left flex items-center justify-between focus:outline-none",
                  onClick: () => setOpenIndex(openIndex === index ? null : index),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono text-neon-yellow", children: faq.question }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FaChevronDown,
                      {
                        className: `text-neon-pink transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-96 mt-4" : "max-h-0"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-neutral-100/70", children: faq.answer })
                }
              )
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMFAQs as default
};
