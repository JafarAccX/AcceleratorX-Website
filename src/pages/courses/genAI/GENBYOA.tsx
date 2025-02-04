import React from "react";
import { Bot, Code, Cpu, Workflow, Sparkles, Zap } from "lucide-react";

const GENBYOA = () => {
  const features = [
    {
      icon: <Bot className="w-5 h-5 text-blue-500" />,
      title: "Custom AI Agents",
      description: "Learn to create and deploy your own AI agents for task automation",
    },
    {
      icon: <Code className="w-5 h-5 text-blue-500" />,
      title: "No-Code Development",
      description: "Build sophisticated AI agents without writing complex code",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      title: "Agent Architecture",
      description: "Master the fundamentals of AI agent design and architecture",
    },
    {
      icon: <Workflow className="w-5 h-5 text-blue-500" />,
      title: "Workflow Integration",
      description: "Seamlessly integrate AI agents into your business processes",
    },
  ];

  return (
    <section className="relative py-6 bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Build Your Own AI Agent
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl text-white font-bold mb-6 text-center">
            Create Your Own <span className="text-blue-500">AI Agents</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto">
            Learn to build, customize, and deploy AI agents that can automate tasks, 
            enhance productivity, and transform your business operations - all without 
            writing complex code.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-blue-500/10 p-3 group-hover:bg-blue-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENBYOA;