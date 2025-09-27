import { r as reactExports, j as jsxRuntimeExports } from "./main-BxH0ZrLt.js";
import { R as Rocket } from "./rocket-Crtz7pC_.js";
import { W as Wrench } from "./wrench-zxCi4_l1.js";
import { C as Cloud } from "./cloud-Djw2Xj5N.js";
import { C as Code } from "./code-CTMs_HFe.js";
import { V as Video } from "./video-s9GLfinE.js";
import { B as Brain } from "./brain-BAMFLeq5.js";
const GENToolsYouWillLearn = () => {
  const [activeCategory, setActiveCategory] = reactExports.useState("Text & Language Models");
  const projects = [
    {
      title: "AI-powered content automation tool",
      description: "Build a tool that automates content creation using LLMs and prompt engineering"
    },
    {
      title: "AI-driven chatbots and virtual assistants",
      description: "Develop intelligent chatbots using advanced language models and conversation design"
    },
    {
      title: "Multi-agent AI automation workflows",
      description: "Create automated workflows using multiple AI agents working together"
    },
    {
      title: "Capstone Project: AI-powered SaaS tool",
      description: "Develop and launch your own AI-powered SaaS solution"
    }
  ];
  const categoryInfo = {
    "Text & Language Models": {
      name: "Text & Language Models",
      icon: Brain,
      description: "Advanced text generation and understanding"
    },
    "Image & Video AI": {
      name: "Image & Video AI",
      icon: Video,
      description: "Visual content creation and editing"
    },
    "Speech & Audio AI": {
      name: "Speech & Audio AI",
      icon: Code,
      description: "Voice and music generation"
    },
    "AI Agent Building": {
      name: "AI Agent Building",
      icon: Wrench,
      description: "Build intelligent AI agents"
    },
    "AI Deployment & Integration": {
      name: "AI Deployment & Integration",
      icon: Cloud,
      description: "Deploy and integrate AI solutions"
    }
  };
  const tools = [
    {
      name: "Chat-GPT",
      description: "Advanced language model from OpenAI for sophisticated text generation",
      image: "/assets/genAITools/gpt4.webp",
      category: "Text & Language Models"
    },
    {
      name: "DeepSeek",
      description: "Powerful language model for code and technical tasks",
      image: "/assets/genAITools/deepseek.webp",
      category: "Text & Language Models"
    },
    {
      name: "LLaMA",
      description: "Open-source language model for diverse AI applications",
      image: "/assets/genAITools/ollama.webp",
      category: "Text & Language Models"
    },
    {
      name: "Falcon",
      description: "High-performance language model for various text tasks",
      image: "/assets/genAITools/falcon.webp",
      category: "Text & Language Models"
    },
    {
      name: "Claude",
      description: "Anthropic's AI assistant for complex reasoning and analysis",
      image: "/assets/genAITools/claude.webp",
      category: "Text & Language Models"
    },
    {
      name: "Gemini",
      description: "Google's multimodal AI model for text and visual tasks",
      image: "/assets/genAITools/gemini.webp",
      category: "Text & Language Models"
    },
    {
      name: "Midjourney",
      description: "AI art generation platform for high-quality visuals",
      image: "/assets/genAITools/midjourney.webp",
      category: "Image & Video AI"
    },
    {
      name: "Stable Diffusion",
      description: "Open-source image generation model for diverse visual content",
      image: "/assets/genAITools/stability-ai.webp",
      category: "Image & Video AI"
    },
    {
      name: "DALL·E",
      description: "OpenAI's image creation model for artistic and commercial use",
      image: "/assets/genAITools/dalle.webp",
      category: "Image & Video AI"
    },
    {
      name: "Runway ML",
      description: "AI-powered creative suite for video editing and generation",
      image: "/assets/genAITools/runway.webp",
      category: "Image & Video AI"
    },
    {
      name: "Pika Labs",
      description: "Advanced AI platform for video generation and editing",
      image: "/assets/genAITools/pika.webp",
      category: "Image & Video AI"
    },
    {
      name: "ElevenLabs",
      description: "AI voice generation and cloning platform",
      image: "/assets/genAITools/elevenlabs.webp",
      category: "Speech & Audio AI"
    },
    {
      name: "OpenAI Whisper",
      description: "Advanced speech recognition and transcription model",
      image: "/assets/genAITools/openaiwhisper.webp",
      category: "Speech & Audio AI"
    },
    {
      name: "MusicGen",
      description: "AI-powered music generation and composition tool",
      image: "/assets/genAITools/musicgen.webp",
      category: "Speech & Audio AI"
    },
    {
      name: "Magenta",
      description: "Google's creative tool for music and art generation",
      image: "/assets/genAITools/magenta.webp",
      category: "Speech & Audio AI"
    },
    {
      name: "LangChain",
      description: "Framework for building LLM-powered applications",
      image: "/assets/genAITools/langchain.webp",
      category: "AI Agent Building"
    },
    {
      name: "CrewAI",
      description: "Framework for creating multi-agent AI systems",
      image: "/assets/genAITools/crewai.webp",
      category: "AI Agent Building"
    },
    {
      name: "AutoGen",
      description: "Tool for building autonomous AI agents",
      image: "/assets/genAITools/autogen.webp",
      category: "AI Agent Building"
    },
    {
      name: "RAG",
      description: "Retrieval-Augmented Generation for enhanced AI responses",
      image: "/assets/genAITools/rag.webp",
      category: "AI Agent Building"
    },
    {
      name: "n8n",
      description: "Automation platform  for building AI workflows",
      image: "/assets/genAITools/n8n-seeklogo.webp",
      category: "AI Deployment & Integration"
    },
    {
      name: "langchain",
      description: "Powerful framework for building AI applications",
      image: "/assets/genAITools/langchain-seeklogo.webp",
      category: "AI Deployment & Integration"
    },
    {
      name: "Hugging Face",
      description: "Platform for sharing and deploying AI models",
      image: "/assets/genAITools/huggingface.webp",
      category: "AI Deployment & Integration"
    },
    {
      name: "AWS",
      description: "Cloud platform for AI deployment and scaling",
      image: "/assets/genAITools/aws.webp",
      category: "AI Deployment & Integration"
    },
    {
      name: "Google Cloud",
      description: "Comprehensive platform for AI service deployment",
      image: "/assets/genAITools/google cloud.webp",
      category: "AI Deployment & Integration"
    },
    {
      name: "OpenAI API",
      description: "API access to OpenAI's powerful AI models",
      image: "/assets/genAITools/openai-logomark.webp",
      category: "AI Deployment & Integration"
    },
    {
      name: "Zapier",
      description: "Automation platform for integrating AI services",
      image: "/assets/genAITools/zapier.webp",
      category: "AI Deployment & Integration"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-3.5 h-3.5 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-xs font-medium", children: "Hands-on Projects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold  mb-2", children: "Learn by Building Real AI Applications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base max-w-2xl mx-auto", children: "Apply your skills through practical projects that solve real-world problems" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10  transition-all duration-300 hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold  ", children: project.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 pl-3.5", children: project.description })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 max-w-[200px] mx-auto bg-blue-50 rounded-full px-3 py-1.5 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-3.5 h-3.5 text-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-xs font-medium", children: "Tools & Technologies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold   mb-2", children: "Master Industry-Leading AI Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-base max-w-2xl mx-auto", children: "Get hands-on experience with the most powerful AI tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6 justify-center", children: Object.entries(categoryInfo).map(([category, info]) => {
        const Icon = info.icon;
        const isActive = activeCategory === category;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveCategory(category),
            className: `px-3 py-2 rounded-lg border transition-all duration-300 ${isActive ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-white border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium whitespace-nowrap", children: info.name })
            ] })
          },
          category
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3", children: tools.filter((tool) => tool.category === activeCategory).map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group p-2.5 rounded-lg  border border-gray-800 hover:border-blue-200 hover:shadow-sm transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `aspect-[3/2] mb-2 rounded-md overflow-hidden ${tool.name === "DALL·E" || tool.name === "Stable Diffusion" ? "bg-black" : "bg-gray-50"} p-2 flex items-center justify-center`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: tool.image,
                    alt: tool.name,
                    className: "w-[75%] h-[75%] object-contain filter group-hover:brightness-110 transition-all duration-300"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold  mb-1", children: tool.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 line-clamp-2", children: tool.description })
            ] })
          ]
        },
        index
      )) })
    ] })
  ] }) }) });
};
export {
  GENToolsYouWillLearn as default
};
