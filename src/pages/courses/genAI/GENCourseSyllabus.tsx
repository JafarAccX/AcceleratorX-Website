import React from "react";
import { Calendar, Rocket, Brain, Cloud, Rotate3D } from "lucide-react";

const GENCourseSyllabus = () => {
  const monthlyContent = [
    {
      month: "Month 1: Generative AI Fundamentals",
      topics: [
        "Large Language Models (Chat-GPT, DeepSeek, Claude, Gemini, LLaMA, Falcon)",
        "AI content automation, AI text generation, and chatbot development",
        "Image & video generation (Midjourney, Stable Diffusion, Runway ML)",
        "Speech & audio generation (ElevenLabs, OpenAI Whisper, DeepSeek Audio)",
      ],
      icon: Brain,
    },
    {
      month: "Month 2: AI Agent Development & Automation",
      topics: [
        "AI agent workflows with LangChain, AutoGen, and RAG",
        "AI-powered chatbots and AI business automation tools",
        "Cloud deployment and AI workflow integration",
      ],
      icon: Rotate3D,
    },
    {
      month: "Month 3: Advanced AI Applications & Capstone Project",
      topics: [
        "AI model fine-tuning and real-world AI automation",
        "AI-powered multi-agent systems",
        "Final project: Build and deploy an AI-powered SaaS application",
      ],
      icon: Rocket,
    },
  ];

  const tools = [
    {
      category: "Text & Language Models",
      items: ["Chat-GPT", "DeepSeek", "LLaMA", "Falcon", "Claude", "Gemini"],
    },
    {
      category: "Image & Video AI",
      items: ["Midjourney", "Stable Diffusion", "DALL·E", "Runway ML", "Pika Labs"],
    },
    {
      category: "Speech & Audio AI",
      items: ["ElevenLabs", "OpenAI Whisper", "MusicGen", "Magenta"],
    },
    {
      category: "AI Agent Building",
      items: ["LangChain", "CrewAI", "AutoGen", "RAG"],
    },
    {
      category: "AI Deployment & Integration",
      items: ["AWS", "Google Cloud", "OpenAI API", "Hugging Face", "Zapier"],
    },
  ];

  return (
    <section className="relative py-12 bg-[#0A1B33]">
      <div className="container mx-auto px-3">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 rounded-full px-3 py-1.5 mb-3">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 text-sm">Course Content</span>
            </div>
            <h2 className="text-3xl pb-3 md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              Course Syllabus
            </h2>
            <p className="text-lg text-gray-300">
              A comprehensive curriculum covering all aspects of modern AI development
            </p>
          </div>

          {/* Monthly Content */}
          <div className="space-y-6 mb-12">
            {monthlyContent.map((month, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-blue-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <month.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{month.month}</h3>
                    <div className="space-y-3">
                      {month.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                          <span className="text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-blue-400/10 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Cloud className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Tools & Technologies Covered</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tool, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-full bg-blue-500/10 text-blue-200 text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENCourseSyllabus;
