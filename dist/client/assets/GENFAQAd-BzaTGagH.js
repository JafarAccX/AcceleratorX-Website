import { r as reactExports, j as jsxRuntimeExports, U as ChevronDown } from "./main-CvuwUR0U.js";
import EnrollmentModal from "./EnrollmentModal-keSFpLvd.js";
import { H as HelpCircle } from "./help-circle-BsNfqDPM.js";
import { R as Rocket } from "./rocket-Dy2OgCyo.js";
import "./enrollmentApi-DLc4dGkd.js";
import "./metaPixel-btpR9i3d.js";
const GENFAQAd = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const faqs = [
    {
      question: "I'm new to AI and have no technical background. Will I be able to understand this course?",
      answer: "Yes! This course is designed for beginners with no coding or AI experience. We start with the basics and gradually move to advanced applications, using a hands-on approach to make AI learning simple and practical. By the end of the course, you'll be able to build AI-powered tools and automation solutions with ease."
    },
    {
      question: "What kind of real-world projects will I be working on?",
      answer: "Unlike most AI courses that focus on theory or require coding, this program is entirely hands-on and beginner-friendly. It covers Generative AI, AI agents, automation, and cloud deployment using 25+ AI tools. You’ll also learn monetization strategies, making it ideal for both professionals and entrepreneurs"
    },
    {
      question: "Will I get a certification after completing the course?",
      answer: "Yes, you will receive an industry-recognized certification in Generative AI & AI Agent Building upon completing the course and final project. This certification adds value to your resume and portfolio, helping you stand out in job applications and freelancing opportunities."
    },
    {
      question: "I’m interested in AI for career growth. How will this course help me professionally?",
      answer: "This course provides job-ready AI skills that are in high demand. You’ll gain hands-on experience with AI tools, learn automation strategies, and build a portfolio of real-world projects, making you a strong candidate for AI-related roles or freelancing opportunities."
    },
    {
      question: "Will I get support during the course if I have questions or get stuck?",
      answer: "Yes, you’ll have access to live sessions, Q&A support, and a learning community to assist you. Even after completing the course, you’ll retain lifetime access to materials and updates, keeping you up to date with AI advancements."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, We offer a 15 days refund policy if you're not satisfied and made full payment with the course content or experience depending on the terms and conditions."
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Get answers to common questions about our AI program" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg mb-6", children: "Ready to start your AI journey? Join us today!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleModalOpen,
            className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-5 h-5 mr-2" }),
              "Enroll Now"
            ]
          }
        )
      ] }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose })
  ] });
};
export {
  GENFAQAd as default
};
