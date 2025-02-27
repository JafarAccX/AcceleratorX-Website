import React from "react";
import { TrendingUp, Target, Brain } from "lucide-react";

const WSGENIntroductionB = () => {
  const stats = [
    {
      value: "90%",
      label: "Customer Engagement Boost",
    },
    {
      value: "24/7",
      label: "Automated Support",
    },
    {
      value: "Free",
      label: "Workshop",
    },
  ];

  const features = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "Practical AI Skills",
      description:
        "Learn how to use AI tools for real-world tasks and boost your productivity",
    },
    {
      icon: <Brain className="w-5 h-5 text-blue-500" />,
      title: "Zero Technical Skills Needed",
      description:
        "Simple, step-by-step guidance to master AI tools - no coding required",
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error(
        'Form element not found with ID "workshop-registration-form"'
      );
    }
  };

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
      <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              Build Intelligent Chatbots
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
            Create <span className="text-blue-500">AI-Powered</span> Chatbots
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Learn to design and develop intelligent chatbots using cutting-edge AI technologies. Transform communication strategies, enhance customer engagement, and unlock the power of conversational AI - completely free!
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
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
                <div className="rounded-full bg-blue-500/10 p-2.5 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={scrollToForm}
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENIntroductionB;
