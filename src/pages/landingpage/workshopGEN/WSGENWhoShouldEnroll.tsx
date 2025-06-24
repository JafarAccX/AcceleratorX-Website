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
    <section className="relative py-12 bg-black px-4  ">
      <div className="container mx-auto px-3 relative z-10 space-y-52">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {/* Target Audience Grid */}
          {/* <div className="  grid sm:grid-cols-2 gap-4">
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
          </div> */}
          <div className="flex flex-col justify-start   rounded-xl p-6 text-white shadow-lg">
            <div className="max-w-screen-md items-center">
              <div className="inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-medium">Who Should Attend</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="text-blue-500">
                  Real-Time Integrations <br /> Let us Show You
                </span>
              </h2>
              <p className="text-lg text-blue-100 mb-4">
                Join us and learn how to build real-world workflow automations using make.com —no technical background
                required.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-1 mb-2 text-base">
              <li>Auto-capture leads from social media</li>
              <li>Seamless email drip flow</li>
            </ul>
            <span className="inline-block mt-2 text-blue-400 font-medium">– all using Make.com</span>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden">
            <img
              src="/make-trigger-action-l.jpeg"
              alt="Students learning together"
              className="object-contain w-full rounded-md  transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img
              src="/make-renderform-setup-l.jpeg"
              alt="Students learning together"
              className="object-contain w-full rounded-md  transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-start   rounded-xl p-6 text-white shadow-lg">
            <div className="max-w-screen-md items-center">
              <div className="inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-medium">POST-WEBINAR VALUE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-500">
                This Isn’t Just a Workshop <br />
                <span className="text-white">– It’s a System.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-4">After the session, you’ll get:</p>
            </div>
            <ul className="list-disc list-inside space-y-1 mb-2 text-base">
              <li>Workflow Templates</li>
              <li>Recording Access</li>
              <li>Community Support</li>
              <li>Fast-Track Execution Plan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENWhoShouldEnrollC;
