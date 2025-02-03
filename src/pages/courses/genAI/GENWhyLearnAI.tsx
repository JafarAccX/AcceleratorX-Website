import React from "react";
import { Brain, Target, Zap, Users, BarChart } from "lucide-react";
import NeuralNetworkAnimation from "../../../components/NeuralNetworkAnimation";

const GENWhyLearnAI = () => {
  const marketChallenges = [
    {
      icon: Users,
      title: "Skill Gap",
      description: "High demand, but few skilled professionals in AI expertise",
      stat: "Critical",
    },
    {
      icon: Target,
      title: "Job Evolution",
      description:
        "Automation replacing jobs - AI skills necessary to stay relevant",
      stat: "Urgent",
    },
    {
      icon: BarChart,
      title: "Scalability",
      description: "Businesses struggling with manual processes and efficiency",
      stat: "High Impact",
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: "Task Automation",
      description:
        "Automates repetitive tasks, allowing focus on strategy & creativity",
    },
    {
      icon: Zap,
      title: "Enhanced Productivity",
      description:
        "Streamlines content creation, customer support, and marketing",
    },
    {
      icon: Target,
      title: "New Opportunities",
      description:
        "Creates AI-driven roles like automation consultants and strategists",
    },
  ];

  return (
    <section className="relative py-12 bg-black overflow-hidden">
      {/* Neural Network Animation Background */}
      <NeuralNetworkAnimation />

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">
                Market Problems & Solutions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-white">The Current </span>
              <span className="text-blue-500">Market Challenge</span>
            </h2>
            <p className="text-lg text-blue-100">
              Discover how Generative AI solves critical business challenges and
              creates new opportunities
            </p>
          </div>

          <div className="space-y-6">
            {/* Market Challenges Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {marketChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white backdrop-blur-sm border border-white/20 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300">
                      <challenge.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-600 mb-1">
                        {challenge.stat}
                      </div>
                      <h3 className="text-base font-semibold text-blue-900 mb-1">
                        {challenge.title}
                      </h3>
                      <p className="text-sm text-blue-700">
                        {challenge.description}
                      </p>
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
                  className="group p-6 rounded-xl bg-white backdrop-blur-sm border border-white/20 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300">
                      <solution.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-blue-900 mb-1">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-blue-700">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Impact */}
            <div className="p-6 rounded-xl bg-white backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Industries Adopting AI
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Marketing & Content Creation",
                  "Customer Support",
                  "E-Commerce & Retail",
                  "Healthcare",
                  "Finance & Banking",
                  "Education & Training",
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-blue-700">{industry}</span>
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
