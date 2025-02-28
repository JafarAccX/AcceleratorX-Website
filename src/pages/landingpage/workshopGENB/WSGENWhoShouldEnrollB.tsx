import React from "react";
import { Users, Briefcase, Megaphone, Brain } from "lucide-react";

const WSGENWhoShouldEnrollB = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Software Developers",
      description: "Learn to build intelligent conversational AI solutions",
    },
    {
      icon: Briefcase,
      title: "Product Managers",
      description: "Design cutting-edge AI-powered communication strategies",
    },
    {
      icon: Megaphone,
      title: "Customer Service Professionals",
      description: "Transform customer interactions with advanced chatbots",
    },
    {
      icon: Brain,
      title: "AI Enthusiasts & Entrepreneurs",
      description: "Explore the future of automated communication technologies",
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
    <section className="relative py-12 bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Content Section */}
            <div className="flex-1">
              {/* Section Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 text-sm font-medium">
                    For Everyone
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="text-white">Who Can </span>
                  <span className="text-blue-500">Benefit</span>
                  <span className="text-white">?</span>
                </h2>
                <p className="text-lg text-blue-100">
                  If you want to build custom chat bot with custom data then this workshop is for you
                </p>
              </div>

              {/* Target Audience Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {targetAudience.map((audience, index) => (
                  <div
                    key={index}
                    className="group p-5 rounded-xl bg-white backdrop-blur-sm border border-white/20 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300">
                        <audience.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                          {audience.title}
                        </h3>
                        <p className="text-sm text-blue-700 mb-2">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/workshopChat.webp"
                  alt="Students learning together"
                  className="object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl">
                  <div className="flex justify-between items-center">
                    <p className="text-blue-900 font-medium">
                      Revolutionize Communication with AI-Powered Chatbots!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center items-center">
          <button
                onClick={scrollToForm}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Register Now
              </button>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENWhoShouldEnrollB;
