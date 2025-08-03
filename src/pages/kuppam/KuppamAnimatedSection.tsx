import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KuppamEnrollmentModal from "./KuppamEnrollmentModal";

const KuppamAnimatedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sentences = [
    "Build your own GPT",
    "Learn to Automate Anything with n8n",
    "Earn more than 18 LPA as fresher as AI Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000); // Change sentence every 3 seconds

    return () => clearInterval(interval);
  }, [sentences.length]);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative bg-[#0A0F1D] min-h-screen overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Animated Text Container */}
          <div className="h-32 md:h-40 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                {sentences[currentIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[250px] text-lg"
              onClick={handleEnrollClick}
            >
              Claim 50% Scholarship
            </button>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full blur-sm animate-pulse" />
      </section>

      {/* Background Elements - All Four Corners */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/30 via-violet-500/20 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/30 via-indigo-500/20 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-br-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/30 via-blue-500/20 to-transparent rounded-tl-full pointer-events-none blur-3xl"></div>

      {/* Enrollment Modal */}
      <KuppamEnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {
          console.log("Enrollment submitted successfully");
        }}
      />
    </div>
  );
};

export default KuppamAnimatedSection;
