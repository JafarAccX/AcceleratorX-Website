import React, { useState } from "react";
import { TrendingUp, Target, Brain } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

const GENIntroductionAd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const stats = [
    {
      value: "$1.3T",
      label: "AI Industry by 2032",
    },
    {
      value: "400%",
      label: "Demand Increase",
    },
    {
      value: "90%",
      label: "Business Adoption",
    },
  ];

  const features = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "100% Hands-on Learning",
      description: "Work on real-world AI projects with 25+ industry-standard AI tools and frameworks",
    },
    {
      icon: <Brain className="w-5 h-5 text-blue-500" />,
      title: "No Coding Required",
      description: "Designed for absolute beginners - focus on practical AI skills without programming",
    },
  ];

  return (
    <section className="relative py-8 bg-black min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.2 }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Master GenAI & AI Agents</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
            Launch Your <span className="text-blue-500">AI Career</span> Without Coding
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Accelerate your career in the AI-driven future. Master Generative AI, AI Agents, and Automation through
            hands-on, project-based learning. Gain real-world skills and lead the AI revolution.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 border border-white/10"
              >
                <div className="rounded-full bg-blue-500/10 p-2.5 backdrop-blur-sm">{feature.icon}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleModalOpen}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
};

export default GENIntroductionAd;
