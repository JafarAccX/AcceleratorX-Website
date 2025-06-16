import React from "react";
import { Users, Briefcase, Brain, Code, Laptop } from "lucide-react";

const WSGENWhoShouldEnrollC = () => {
  const targetAudience = [
    {
      icon: Briefcase,
      title: "Markters",
      description: "Automate repetitive tasks, sync tools, and free up time for strategic work.",
    },
    {
      icon: Laptop,
      title: "Founders & Entrepreneurs",
      description:
        "Use automation to streamline operations, reduce manual work, and scale smarter with limited resources.",
    },
    {
      icon: Code,
      title: "Tech Professionals & Business Analysts",
      description: "Create no-code workflows that connect your tech stack and optimize internal processes with ease.",
    },
    {
      icon: Brain,
      title: "Students & Career Switchers",
      description:
        "Gain practical automation experience and build portfolio-ready projects to boost your resume and confidence.",
    },
  ];

  return (
    <section className="relative py-12 bg-black px-4">
      <div className=" p-4 flex items-center justify-center mb-20 bg-gradient-to-r from-blue-500/20 to-green-500/20">
        <div className="font-semibold tracking-wider text-xl md:text-3xl text-yellow-500  ">
          One Free Slot & n8n starter kit give away in the webinar*
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-screen-md items-center">
          {/* Content Section */}
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Who Should Attend</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-white">Ready to </span>
            <span className="text-blue-500">Automate Your Workflow Without Writing Code</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-lg text-blue-100 mb-4">
            Join us and learn how to build real-world workflow automations using n8n—no technical background required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {/* Target Audience Grid */}
          <div className="  grid sm:grid-cols-2 gap-4">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl   backdrop-blur-sm border border-white/20  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="flex-shrink-0 p-2.5 rounded-lg   transform group-hover:rotate-6 transition-all duration-300">
                    <audience.icon className="w-5 h-5 text-blue-700 " />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold  transition-colors">{audience.title}</h3>
                    <p className="text-sm  mb-2">{audience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/workflow1.png"
                alt="Students learning together"
                className="object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENWhoShouldEnrollC;
