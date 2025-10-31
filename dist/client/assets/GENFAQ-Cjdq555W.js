import { r as reactExports, j as jsxRuntimeExports, U as ChevronDown } from "./main-DdVeCtn-.js";
import { H as HelpCircle } from "./help-circle-C0SesMdk.js";
const GENFAQ = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const faqs = [
    {
      question: "Can I take this Generative AI and Agentic AI program if I'm new to AI?",
      answer: "Yes! You don't need any prior experience. We guide you from the basics to advanced AI concepts step by step."
    },
    {
      question: "What kind of AI projects will I work on?",
      answer: "You will be solving real-world problem with AI while building projects like AI content automation, smart chatbots, multi-agent workflows, capstone AI SaaS product and many more."
    },
    {
      question: "Do I get a certification for this Gen AI & AI Agent No-Code Automation Program?",
      answer: "Yes! Once you complete the program, you will receive an industry-recognised AI certification to showcase your skills."
    },
    {
      question: "How will this program boost my career?",
      answer: "You will gain hands-on experience on building AI solutions and, solving complex problem using AI. You will build a strong project portfolio, get interview prep, and receive career guidance for India's top mentors in AI domain to land AI roles."
    },
    {
      question: "What if I get stuck?",
      answer: "All the learners will have access to our exclusive AI community for doubt clearing anytime you need help and there's is a mandatory QNA session in the end of each session for better understanding of each topic."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1.5 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HelpCircle, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-xs font-medium", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Your Questions About Our AI Program, Answered" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "w-full px-4 py-3 flex items-center justify-between text-left",
                onClick: () => setOpenIndex(openIndex === index ? null : index),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: faq.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `w-4 h-4 text-gray-400 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            openIndex === index && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3 text-sm text-gray-400 animate-fade-in", children: faq.answer })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
        "Still have questions? Contact our support team at",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:support@acceleratorx.com",
            className: "text-blue-400 hover:text-blue-300",
            children: "support@acceleratorx.co"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, global: true, children: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      ` })
  ] });
};
export {
  GENFAQ as default
};
