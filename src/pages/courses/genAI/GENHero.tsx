import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

const GENHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A1B33]/80 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/videos/loopvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 rounded-full px-3 py-1.5 mb-6">
            <span className="text-blue-400 text-sm">
              3-Month Professional Course
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4 bg-white text-transparent bg-clip-text">
            Ultimate 3-Month Generative AI & AI Agent Building Course
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Launch Your AI Career – Master GenAI, AI Agents & Automation Without
            Coding
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            The world is rapidly transitioning towards AI-driven automation, and
            the demand for AI professionals is growing exponentially. This
            course is designed for beginners, professionals, and entrepreneurs
            looking to master Generative AI, AI Agents, and Automation—without
            requiring coding skills.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Enrollment Modal */}
          <EnrollmentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default GENHero;
