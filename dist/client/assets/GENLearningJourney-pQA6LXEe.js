import { r as reactExports, j as jsxRuntimeExports } from "./main-CLFAzKr7.js";
import { C as Calendar } from "./calendar-DqYX6s9H.js";
import { C as ChevronLeft } from "./chevron-left-D27Fn6bE.js";
import { C as ChevronRight } from "./chevron-right-B1dJKyWU.js";
import { R as Rocket } from "./rocket-rH0yhjZD.js";
import { C as Cloud } from "./cloud-Diu7avir.js";
import { B as BookOpen } from "./book-open-CFe1hlXQ.js";
const GENLearningJourney = () => {
  const [activeMonth, setActiveMonth] = reactExports.useState(0);
  const months = [
    {
      title: "Month 1: Foundations of Generative AI",
      goal: "Build a strong foundation in Generative AI concepts, tools, and practical applications.",
      weeks: [
        {
          title: "WEEK 1 – Foundations of Generative AI",
          goal: "Understand what GenAI is, how it works, and explore hands-on creative tools.",
          content: [
            "Session 1: Introduction to Generative AI",
            "Session 2: Exploring AI Ecosystem Tools (2025 Stack)",
            "Session 3: AI for Everyday Work",
            "Mini Project: AI Productivity Toolkit — Create 5 real-world prompts that automate your work."
          ]
        },
        {
          title: "WEEK 2 – Deep Dive into LLMs & Prompt Mastery",
          goal: "Understand how large language models actually 'think' and how to guide them precisely.",
          content: [
            "Session 4: Inside the Mind of an LLM",
            "Session 5: Prompt Engineering to Context Engineering",
            "Session 6: Practical Prompt Lab (Agent Communication)"
          ]
        },
        {
          title: "WEEK 3 – Image, Video, and Visual Generation",
          goal: "Use AI for creative production — image and video generation.",
          content: [
            "Session 7: Image Generation: Diffusion Models",
            "Session 8: AI Video Generation",
            "Session 9: Hands-on Visual AI Lab"
          ]
        },
        {
          title: "WEEK 4 – Audio, Voice & Music Generation",
          goal: "Understand and apply AI to voice and sound.",
          content: [
            "Session 10: AI Voice Synthesis & TTS",
            "Session 11: AI Music Creation",
            "Session 12: Lab + Project"
          ]
        }
      ]
    },
    {
      title: "Month 2: Machine Learning & AI Ethics",
      goal: "Learn machine learning fundamentals, model fine-tuning, and responsible AI practices.",
      weeks: [
        {
          title: "WEEK 5 – Machine Learning & Model Fine-Tuning",
          goal: "Learn how LLMs are trained and fine-tune small models for your domain.",
          content: [
            "Session 13: Basics of ML & DL Simplified",
            "Session 14: Fine-Tuning Open Models (LoRA, QLoRA)",
            "Session 15: Lab: Training a Mini-Model"
          ]
        },
        {
          title: "WEEK 6 – AI Ethics, Bias & Responsible Design",
          goal: "Learn safe and ethical AI building for compliance and trustworthiness.",
          content: [
            "Session 16: AI Ethics & Global Regulations (EU AI Act, India DPDP, US AI Safety Rules)",
            "Session 17: Detecting & Reducing Bias",
            "Session 18: Practical Exercise: Audit an existing AI system for fairness"
          ]
        },
        {
          title: "WEEK 7 – Vibe Coding: Assisted AI Development (I)",
          goal: "Build applications visually with the help of AI pair coders.",
          content: [
            "Session 19: Intro to Vibe Coding & Tools",
            "Session 20: Hands-On: Building with Cursor AI & Windsurf",
            "Session 21: Project Build Live"
          ]
        },
        {
          title: "WEEK 8 – Vibe Coding (II) & Model Deployment",
          goal: "Learn to deploy your projects and host them publicly.",
          content: [
            "Session 22: Replit, Bolt.new, and Lovable for Quick Deployment",
            "Session 23: Deploying to Cloud",
            "Session 24: Monitoring & Optimization"
          ]
        }
      ]
    },
    {
      title: "Month 3: AI Agents & Automation",
      goal: "Master AI agent building, multi-agent systems, and workflow automation.",
      weeks: [
        {
          title: "WEEK 9 – Introduction to AI Agents",
          goal: "Move from models → autonomous reasoning systems.",
          content: [
            "Session 25: What Are AI Agents? Real world examples",
            "Session 26: Tools for Building Agents",
            "Session 27: Lab: Build Your First AI Agent (LangChain)"
          ]
        },
        {
          title: "WEEK 10 – Building AI Agents (CrewAI & LangGraph Live)",
          goal: "Build a multi-step reasoning agent.",
          content: [
            "Session 28 (Live Build): CrewAI Team of Agent",
            "Session 29: LangGraph Visual Agent Building",
            "Session 30: Building MCP Server, Intro To ACP"
          ]
        },
        {
          title: "WEEK 11 – Multi-Agent Systems & Real-World Use Cases",
          goal: "Create complex automations involving multiple agents.",
          content: [
            "Session 31: Multi-Agent Collaboration Patterns",
            "Session 32: APIs and Databases with Agents",
            "Session 33: Mini Project: 'Customer Support Crew' – 3-agent system (intake → research → response)"
          ]
        },
        {
          title: "WEEK 12 – AI Automation Using n8n",
          goal: "Automate workflows visually and connect your AI models to tasks.",
          content: [
            "Session 34: Intro to n8n & Node Logic",
            "Session 35: n8n workflow - 1",
            "Session 36: n8n Lab"
          ]
        }
      ]
    },
    {
      title: "Month 4: Advanced Automation & Capstone",
      goal: "Combine all skills for full automation solutions and complete your capstone project.",
      weeks: [
        {
          title: "WEEK 13 – Full Automation + Integrations",
          goal: "Combine AI + Agents + Automation into deployable solutions.",
          content: [
            "Session 37: n8n workflow - 2",
            "Session 38: Flowise - 1",
            "Session 39: Mini Project Discussion: 'AI Copilot'"
          ]
        },
        {
          title: "WEEK 14 – Capstone & Future Skills",
          goal: "Build a deployable project, present, and get feedback.",
          content: [
            "Session 40: Demo Day & Career Mapping"
          ]
        }
      ]
    }
  ];
  const icons = {
    month1: BookOpen,
    month2: Cloud,
    month3: Rocket,
    month4: Rocket
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " mx-auto flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Learning Journey" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: "Your Path to AI Mastery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg max-w-2xl", children: "A comprehensive 14-week program covering Generative AI, AI Agents, and Automation" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2.5 rounded-lg bg-st-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MonthIcon, { className: "w-6 h-6 text-blue-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: months[activeMonth].title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: months[activeMonth].goal })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: months[activeMonth].weeks.map((week, weekIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1F2937]/70 rounded-lg p-4 border border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: week.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-300 text-sm mb-3 italic", children: week.goal }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: week.content.map((point, pointIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-gray-300 text-sm flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
          ] }, pointIndex)) })
        ] }, weekIndex)) })
      ] })
    ] }) })
  ] });
};
export {
  GENLearningJourney as default
};
