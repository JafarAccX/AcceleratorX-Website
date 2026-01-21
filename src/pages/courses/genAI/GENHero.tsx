import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import DMTimer from "../dmAI/DMTimer";

const GENHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async () => {
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
            {/* <div className="inline-flex mt-16 items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-6">
              <span className="text-white text-sm font-medium">
                Early Bird Offer ends in:
              </span>
              <DMTimer
                targetDate="2025-02-10T23:59:59"
                className="text-white font-semibold"
              />
            </div> */}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4 bg-white text-transparent bg-clip-text">
              Master Generative AI & AI Agent No-Code Automation Program in 14 weeks.
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              India’s first Non-code AI Automation Program for freshers, freelancers, and working professionals.

            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Start your future with our Gen AI and Agentic AI program and become an AI professional in 3 months. This Gen AI and Agentic AI specialisation is designed for beginners, providing a no-code pathway to mastering generative AI, AI Agents, and the powerful tools of automation. Secure your expertise with India’s first solution-based AI automation program.

            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ background: 'linear-gradient(to bottom right, #FF8F00 0%, #FFFFFF 40%, #FFFFFF 50%, #FFFFFF 55%, #008D00 100%)' }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#000080] font-bold hover:opacity-90 transition-opacity shadow-lg"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
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
