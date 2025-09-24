import { r as reactExports, j as jsxRuntimeExports } from "./main-CfA5h11a.js";
import EnrollmentModal from "./EnrollmentModal-Cws58IB3.js";
import { C as Calendar } from "./calendar-DhCi8TKF.js";
import { C as ChevronLeft } from "./chevron-left-Be3Jbroe.js";
import { C as ChevronRight } from "./chevron-right-B_fI26jY.js";
import { R as Rocket } from "./rocket-DM5K6tEy.js";
import { C as Cloud } from "./cloud-BWqk7WrA.js";
import { B as BookOpen } from "./book-open-VrKJ0uSR.js";
import "./enrollmentApi-DH74qvpY.js";
import "./metaPixel-DjMPEQ2F.js";
import "./index-Dk7MajVP.js";
import "./proxy-CHEv0qax.js";
const GENLearningJourneyAd = () => {
  const [activeMonth, setActiveMonth] = reactExports.useState(0);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const months = [
    {
      title: "Month 1: Generative AI Fundamentals & Applications",
      goal: "Provide a strong foundation in Generative AI, covering LLMs, text, image, audio, and video generation.",
      weeks: [
        {
          title: "Week 1: Introduction to Generative AI & Machine Learning Basics",
          content: [
            "Understanding AI, ML, and Generative AI fundamentals",
            "Hands-on with ChatGPT, DeepSeek, Midjourney, DALL·E",
            "Setting up development environment and tools"
          ]
        },
        {
          title: "Week 2: Large Language Models (LLMs) & Text Generation",
          content: [
            "Working with Chat-GPT, DeepSeek, Claude, Gemini",
            "Mastering prompt engineering techniques",
            "API integration and fine-tuning"
          ]
        },
        {
          title: "Week 3: Image & Video Generation",
          content: [
            "Understanding GANs and Diffusion Models",
            "Creating with Midjourney, DALL·E, Stable Diffusion",
            "Video generation with Runway ML"
          ]
        },
        {
          title: "Week 4: Speech & Audio Generation",
          content: [
            "Text-to-speech and voice cloning",
            "AI music generation and audio synthesis",
            "Building audio applications"
          ]
        }
      ]
    },
    {
      title: "Month 2: AI Deployment & AI Agent Building",
      goal: "Learn how to deploy AI models, integrate AI agents into workflows, and automate AI solutions.",
      weeks: [
        {
          title: "Week 5: Responsible AI & Ethical Considerations",
          content: [
            "Understanding AI ethics and bias",
            "Regulatory compliance and safety",
            "Best practices in AI deployment"
          ]
        },
        {
          title: "Week 6: Deploying & Scaling AI Models",
          content: [
            "Cloud deployment on AWS, GCP, Azure",
            "Model optimization and monitoring",
            "Building scalable AI solutions"
          ]
        },
        {
          title: "Week 7: Introduction to AI Agent Building",
          content: [
            "Understanding AI agents and architectures",
            "LangChain, AutoGen, and CrewAI development",
            "Building autonomous AI systems"
          ]
        },
        {
          title: "Week 8: Advanced AI Agent Development",
          content: [
            "Multi-agent system development",
            "Real-world AI agent applications",
            "Integration with external systems"
          ]
        }
      ]
    },
    {
      title: "Month 3: Building AI-Powered Applications & Capstone Project",
      goal: "Apply AI skills to build full-fledged applications using Generative AI and AI agents.",
      weeks: [
        {
          title: "Weeks 9-10: Capstone Project Development",
          content: ["Project planning and architecture", "Development and testing", "Performance optimization"]
        },
        {
          title: "Weeks 11-12: Final Presentation & Career Guidance",
          content: [
            "Project showcase and presentation",
            "Career path planning",
            "Freelancing and business opportunities"
          ]
        }
      ]
    }
  ];
  const icons = {
    month1: BookOpen,
    month2: Cloud,
    month3: Rocket
  };
  const nextMonth = () => {
    setActiveMonth((prev) => (prev + 1) % months.length);
  };
  const prevMonth = () => {
    setActiveMonth((prev) => (prev - 1 + months.length) % months.length);
  };
  const MonthIcon = icons[`month${activeMonth + 1}`];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Learning Journey" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: "Your Path to AI Mastery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg max-w-2xl", children: "A comprehensive 3-month journey to master Generative AI and build real-world applications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevMonth,
            className: "p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors",
            "aria-label": "Previous month",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: months.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveMonth(index),
            className: `w-2.5 h-2.5 rounded-full transition-all ${activeMonth === index ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"}`,
            "aria-label": `Go to month ${index + 1}`
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextMonth,
            className: "p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors",
            "aria-label": "Next month",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] rounded-xl p-6 border border-gray-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MonthIcon, { className: "w-6 h-6 text-blue-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: months[activeMonth].title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: months[activeMonth].goal })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: months[activeMonth].weeks.map((week, weekIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1F2937] rounded-lg p-4 border border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: week.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: week.content.map((point, pointIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-gray-300 text-sm flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
          ] }, pointIndex)) })
        ] }, weekIndex)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg mb-6", children: "Ready to start your AI learning journey?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleModalOpen,
          className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-5 h-5 mr-2" }),
            "Begin Your Journey"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose })
  ] });
};
export {
  GENLearningJourneyAd as default
};
