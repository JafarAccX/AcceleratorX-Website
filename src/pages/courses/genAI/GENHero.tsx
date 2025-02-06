import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import DMTimer from "../dmAI/DMTimer";

const GENHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = async () => {
    if (isDownload) {
      try {
        const response = await fetch(
          "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzM4NzM1MTI1LCJleHAiOjE3NzAyNzExMjV9.t6cs2LulI_9QaZmYub0mjJL8Yqelj8hDnR6ESIh_8Jc"
        );

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "AcceleratorX-GenAI-Brochure.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error("Error downloading brochure:", error);
      }
    }
    handleModalClose();
  };

  return (
    <>


      {/* Main Hero Section */}
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
            {/* Badge with Timer */}
            <div className="inline-flex mt-16 items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-6">
              <span className="text-white text-sm font-medium">
                Early Bird Offer ends in:
              </span>
              <DMTimer
                targetDate="2025-02-10T23:59:59"
                className="text-white font-semibold"
              />
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsDownload(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Download Brochure
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Enrollment Modal */}
            <EnrollmentModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onSubmit={handleModalSubmit}
              isDownload={isDownload}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }

        .animate-rotBGimg {
          animation: rotBGimg 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `}</style>
    </>
  );
};

export default GENHero;
