import React from "react";
import { Brain, Target, Zap, Users, BarChart } from "lucide-react";
import NeuralNetworkAnimation from "../../../components/NeuralNetworkAnimation";

const GENWhyLearnAI = () => {
  const marketChallenges = [
    {
      icon: Users,
      title: "PM Skill Gap",
      description: "Many PMs lack hands-on experience with GenAI tools and workflows.",
      stat: "Critical",
    },
    {
      icon: Target,
      title: "Evolving Product Roles",
      description: "AI is reshaping product management—new skills are needed to stay ahead.",
      stat: "Urgent",
    },
    {
      icon: BarChart,
      title: "Scaling Product Impact",
      description: "Manual processes limit PMs' ability to scale and innovate quickly.",
      stat: "High Impact",
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: "AI-Driven Product Discovery",
      description: "Use GenAI to automate research, competitor analysis, and user feedback synthesis.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline backlog management, sprint planning, and reporting with AI agents.",
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Unlock new PM roles and leadership opportunities by mastering GenAI.",
    },
  ];

  return (
    <section className="relative py-12 bg-black overflow-hidden">
      {/* Neural Network Animation Background */}
      <NeuralNetworkAnimation />

      <div className="container mx-auto px-3 relative z-10">
        <div className="  mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2  border border-blue-600 rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-base font-medium">GenAI Challenges & Solutions for PMs</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-white">Why PMs Need </span>
              <span className="text-blue-500">GenAI Skills</span>
            </h3>
            <p className="text-lg text-blue-100">
              See how GenAI addresses the biggest challenges in product management and opens new career paths
            </p>
          </div>

          <div className="space-y-6">
            {/* Market Challenges Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {marketChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg  bg-black group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300">
                      <challenge.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-blue-600 tracking-wider  mb-1">{challenge.stat}</div>
                      <h4 className="text-base font-semibold  mb-1">{challenge.title}</h4>
                      <p className="text-base  ">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Solutions Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg  bg-black group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300">
                      <solution.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold  mb-1">{solution.title}</h4>
                      <p className="text-base ">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Impact */}
            <div className="group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Industries Where PMs Use GenAI</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "SaaS & Tech Products",
                  "E-Commerce & Retail",
                  "Healthcare & MedTech",
                  "FinTech & Banking",
                  "EdTech & Learning",
                  "Consumer Apps",
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-base  ">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENWhyLearnAI;
