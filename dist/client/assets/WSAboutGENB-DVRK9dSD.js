import { r as reactExports, j as jsxRuntimeExports, k as motion } from "./main-CGjpSgqs.js";
import { c as FaCertificate } from "./index-CAXjZ5FZ.js";
import { B as Brain } from "./brain-D4FvYSwo.js";
import { T as Target } from "./target-DmaZiOMi.js";
const WSAboutGENB = () => {
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
  const toolsRef = reactExports.useRef(null);
  const allTools = [
    { name: "Chat-GPT", img: "/assets/genAITools/gpt4.webp" },
    { name: "DeepSeek", img: "/assets/genAITools/deepseek.webp" },
    { name: "LLaMA", img: "/assets/genAITools/ollama.webp" },
    { name: "Falcon", img: "/assets/genAITools/falcon.webp" },
    { name: "LangChain", img: "/assets/genAITools/langchain.webp" },
    { name: "CrewAI", img: "/assets/genAITools/crewai.webp" },
    { name: "AutoGen", img: "/assets/genAITools/autogen.webp" },
    { name: "RAG", img: "/assets/genAITools/rag.webp" },
    { name: "Hugging Face", img: "/assets/genAITools/huggingface.webp" },
    { name: "Zapier", img: "/assets/genAITools/zapier.webp" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#050A14] py-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-3/5 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0A1020] rounded-lg shadow-md border border-green-900/20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 bg-green-500/10 rounded-md px-3 py-1 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-sm font-medium", children: "AI Automation Workshop" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-blue-500/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-blue-500/10 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-lg", children: "Workshop Highlights" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
              "Learn how AI-driven automation transforms your marketing performance.",
              "Watch real examples of end-to-end automated marketing workflows.",
              "Explore tools to auto-create content, emails, and reports in seconds.",
              "Set up your first automated marketing system during the workshop."
            ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-blue-500/20 p-1 rounded-sm", children: index + 1 }),
              item
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-green-500/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-green-500/10 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-green-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-lg", children: "What You'll Learn" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
              "How to automate repetitive marketing tasks that drain your time.",
              "How to create lead-generation and nurturing workflows with zero code.",
              "How to connect tools like ChatGPT, Zapier, and Sheets for full automation.",
              "How to build a scalable marketing engine that runs 24/7."
            ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-green-500/20 p-1 rounded-sm", children: index + 1 }),
              item
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: scrollToForm,
            className: "w-full mt-5 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300",
            children: "Register Now"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: toolsRef, className: "bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white mb-4", children: "Creative Tools You'll Master" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "flex gap-3 px-2",
            animate: {
              x: [0, -80 * allTools.length]
            },
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: allTools.length * 2,
                ease: "linear"
              }
            },
            children: [...allTools, ...allTools].map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-shrink-0 w-16 h-16 bg-[#111827] rounded-md p-2 flex flex-col items-center justify-center gap-1 border border-gray-800/30",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-white rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tool.img, alt: tool.name, className: "w-6 h-6 object-contain" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-medium text-gray-300 text-center line-clamp-1", children: tool.name })
                ]
              },
              index
            ))
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-2/5 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-900/60 to-green-900/60 rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaCertificate, { className: "w-6 h-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Certification Included" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 mb-3 text-sm", children: "Upon completion of the workshop, you'll receive a professional certificate confirming your ability to create functional applications and websites without writing code using GenAI tools." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 mb-3 text-sm", children: "Earn an industry-recognized certificate showcasing your AI workflow automation skills!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10", children: "⚠️ Only those who attend the complete automation workshop will receive the official certification." })
    ] }) }) })
  ] }) }) });
};
export {
  WSAboutGENB as default
};
