import React, { useState } from "react";
import { Users, Briefcase, Megaphone, Brain } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

const GENWhoShouldEnrollAd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const targetAudience = [
    {
      icon: Users,
      title: "Beginners & Business Professionals",
      description: "No prior technical background required",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurs & Freelancers",
      description: "Learn to build and monetize AI-powered solutions",
    },
    {
      icon: Megaphone,
      title: "Marketing & Content Creators",
      description: "Automate content workflows with AI",
    },
    {
      icon: Brain,
      title: "AI Enthusiasts & Job Seekers",
      description: "Gain skills to stand out in the AI job market",
    },
  ];

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
                  <span className="text-blue-600 text-sm font-medium">Perfect For You</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="text-white">Who Should Take </span>
                  <span className="text-blue-500">This Course</span>
                  <span className="text-white">?</span>
                </h2>
                <p className="text-lg text-blue-100">
                  Designed for professionals and beginners looking to master AI without coding
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
                        <p className="text-sm text-blue-700 mb-2">{audience.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Whether you're a complete beginner or an experienced professional, our course is designed to help you
                master AI tools and concepts.
              </p>
              <button
                onClick={handleModalOpen}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/bggpt.jpg"
                  alt="Students learning together"
                  className="object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl">
                  <p className="text-blue-900 font-medium">
                    "Join a community of learners and build your AI career together!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
};

export default GENWhoShouldEnrollAd;
