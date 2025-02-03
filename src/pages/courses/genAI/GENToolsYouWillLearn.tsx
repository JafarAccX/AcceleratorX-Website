import React, { useState } from 'react';
import { Wrench, Code, Image, Video, Cloud, Brain, Rocket } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  image: string;
  category: string;
}

interface CategoryInfo {
  name: string;
  icon: React.ElementType;
  description: string;
}

const GENToolsYouWillLearn = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Language Models");

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

  const categoryInfo: Record<string, CategoryInfo> = {
    "Language Models": {
      name: "Language Models",
      icon: Brain,
      description: "Text generation and understanding"
    },
    "Image Generation": {
      name: "Image Generation",
      icon: Image,
      description: "Create visuals with AI"
    },
    "Video Creation": {
      name: "Video Creation",
      icon: Video,
      description: "Video editing and generation"
    },
    "Development": {
      name: "Development",
      icon: Code,
      description: "Build AI applications"
    },
    "Cloud Platform": {
      name: "Cloud Platform",
      icon: Cloud,
      description: "Deploy and scale AI"
    }
  };

  const tools: Tool[] = [
    {
      name: "GPT-4",
      description: "Latest large language model from OpenAI for advanced text generation and understanding",
      image: "/assets/genAITools/gpt4.webp",
      category: "Language Models"
    },
    {
      name: "DeepSeek",
      description: "Advanced AI model for code generation and technical problem-solving",
      image: "/assets/genAITools/deepseek.webp",
      category: "Language Models"
    },
    {
      name: "Midjourney",
      description: "AI art and image generation platform for creating stunning visuals",
      image: "/assets/genAITools/midjourney.webp",
      category: "Image Generation"
    },
    {
      name: "DALL·E",
      description: "OpenAI's image generation model for creating diverse artistic content",
      image: "/assets/genAITools/dalle.webp",
      category: "Image Generation"
    },
    {
      name: "Runway",
      description: "AI-powered creative suite for video editing and generation",
      image: "/assets/genAITools/runway.webp",
      category: "Video Creation"
    },
    {
      name: "LangChain",
      description: "Framework for developing applications powered by language models",
      image: "/assets/genAITools/langchain.png",
      category: "Development"
    },
    {
      name: "AutoGen",
      description: "Framework for building AI agents and automated workflows",
      image: "/assets/genAITools/autogen.png",
      category: "Development"
    },
    {
      name: "CrewAI",
      description: "Multi-agent framework for complex AI task automation",
      image: "/assets/genAITools/crewai.webp",
      category: "Development"
    },
    {
      name: "Hugging Face",
      description: "Platform for sharing and deploying machine learning models",
      image: "/assets/genAITools/huggingface.webp",
      category: "Development"
    },
    {
      name: "Google Cloud",
      description: "Cloud platform for deploying and scaling AI applications",
      image: "/assets/genAITools/google cloud.webp",
      category: "Cloud Platform"
    }
  ];

  return (
    <section className="relative py-6 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Projects Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2">
                <Rocket className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-blue-600 text-xs font-medium">Hands-on Projects</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Learn by Building Real AI Applications
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Apply your skills through practical projects that solve real-world problems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="text-xs text-gray-600 pl-3.5">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2">
              <Wrench className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-blue-600 text-xs font-medium">Tools & Technologies</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Master Industry-Leading AI Tools
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Get hands-on experience with the most powerful AI tools
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {Object.entries(categoryInfo).map(([category, info]) => {
              const Icon = info.icon;
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-2 rounded-lg border transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-50 border-blue-200 text-blue-600'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium whitespace-nowrap">{info.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {tools
              .filter(tool => tool.category === activeCategory)
              .map((tool, index) => (
                <div
                  key={index}
                  className="group p-2.5 rounded-lg bg-white border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className={`aspect-[3/2] mb-2 rounded-md overflow-hidden ${tool.name === "DALL·E" ? 'bg-black' : 'bg-gray-50'} p-2 flex items-center justify-center`}>
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-[75%] h-[75%] object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{tool.name}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{tool.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENToolsYouWillLearn;
