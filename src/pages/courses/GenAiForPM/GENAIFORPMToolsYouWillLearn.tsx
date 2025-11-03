import React, { useState } from "react";
import { Wrench, Code, Cloud, Brain, Rocket } from "lucide-react";

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
  const [activeCategory, setActiveCategory] = useState<string>("GenAI for PMs");

  const projects = [
    {
      title: "AI-powered product research assistant",
      description: "Automate competitor analysis and user research using GenAI workflows",
    },
    {
      title: "AI-driven roadmap generator",
      description: "Build a tool that creates product roadmaps from user feedback and market data",
    },
    {
      title: "GenAI stakeholder update bot",
      description: "Develop an agent that automates stakeholder communications and reporting",
    },
    {
      title: "Capstone Project: GenAI-powered PM dashboard",
      description: "Create a dashboard that integrates GenAI insights for product management",
    },
  ];

  const categoryInfo: Record<string, CategoryInfo> = {
    "GenAI for PMs": {
      name: "GenAI for PMs",
      icon: Brain,
      description: "GenAI tools tailored for product management workflows",
    },
    "AI Agent Building": {
      name: "AI Agent Building",
      icon: Wrench,
      description: "Build and deploy GenAI agents for PM tasks",
    },
    "No-Code & Automation": {
      name: "No-Code & Automation",
      icon: Cloud,
      description: "Automate product ops with no-code GenAI tools",
    },
    "Collaboration & Reporting": {
      name: "Collaboration & Reporting",
      icon: Code,
      description: "AI-powered tools for team collaboration and reporting",
    },
    "AI Deployment": {
      name: "AI Deployment",
      icon: Rocket,
      description: "Deploy and scale GenAI solutions in product teams",
    },
  };

  const tools: Tool[] = [
    {
      name: "Chat-GPT",
      description: "Conversational AI for product research and user feedback analysis",
      image: "/assets/genAITools/gpt4.webp",
      category: "GenAI for PMs",
    },
    {
      name: "Claude",
      description: "AI assistant for product documentation and brainstorming",
      image: "/assets/genAITools/claude.webp",
      category: "GenAI for PMs",
    },
    {
      name: "Gemini",
      description: "Google's GenAI for product ideation and market analysis",
      image: "/assets/genAITools/gemini.webp",
      category: "GenAI for PMs",
    },
    {
      name: "LangChain",
      description: "Framework for building GenAI-powered PM applications",
      image: "/assets/genAITools/langchain.webp",
      category: "AI Agent Building",
    },
    {
      name: "CrewAI",
      description: "Multi-agent system for automating PM workflows",
      image: "/assets/genAITools/crewai.webp",
      category: "AI Agent Building",
    },
    {
      name: "AutoGen",
      description: "Tool for building autonomous GenAI agents for PM tasks",
      image: "/assets/genAITools/autogen.webp",
      category: "AI Agent Building",
    },
    {
      name: "n8n",
      description: "No-code automation platform for product ops and GenAI integration",
      image: "/assets/genAITools/n8n-seeklogo.webp",
      category: "No-Code & Automation",
    },
    {
      name: "Zapier",
      description: "Automate product management workflows with GenAI integrations",
      image: "/assets/genAITools/zapier.webp",
      category: "No-Code & Automation",
    },
    {
      name: "OpenAI API",
      description: "API access to advanced GenAI models for PM tools",
      image: "/assets/genAITools/openai-logomark.webp",
      category: "AI Deployment",
    },
    {
      name: "Google Cloud",
      description: "Deploy and scale GenAI solutions for product teams",
      image: "/assets/genAITools/google cloud.webp",
      category: "AI Deployment",
    },
    {
      name: "Slack AI",
      description: "AI-powered team collaboration and reporting for PMs",
      image: "/assets/caseStudiesLogo/slack.webp",
      category: "Collaboration & Reporting",
    },

  ];

  return (
    <section className="relative py-6 ">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {/* Projects Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2">
                <Rocket className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-blue-600 text-xs font-medium">Hands-on Projects</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold  mb-2">Build Real GenAI Solutions for PMs</h3>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Apply your skills through practical projects that solve real product management problems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10  transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <h3 className="text-base font-semibold  ">{project.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 pl-3.5">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-6 text-center flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 max-w-[200px] mx-auto bg-blue-50 rounded-full px-3 py-1.5 mb-2">
              <Wrench className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-blue-600 text-xs font-medium">Tools & Technologies</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold   mb-2">Master GenAI Tools for Product Management</h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Get hands-on experience with the most powerful GenAI tools for PMs
            </p>
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
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "bg-white border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600"
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
                .filter((tool) => tool.category === activeCategory)
                .map((tool, index) => (
                  <div
                    key={index}
                    className="group p-2.5 rounded-lg  border border-gray-800 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                  >
                    <div
                      className={`aspect-[3/2] mb-2 rounded-md overflow-hidden ${
                        tool.name === "DALL·E" || tool.name === "Stable Diffusion" ? "bg-black" : "bg-gray-50"
                      } p-2 flex items-center justify-center`}
                    >
                      <img
                        src={tool.image}
                        alt={`GenAI tool for product managers - ${tool.name}`}
                        className="w-[75%] h-[75%] object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold  mb-1">{tool.name}</h4>
                      <p className="text-xs text-gray-400 line-clamp-2">{tool.description}</p>
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

export default GENToolsYouWillLearn;
