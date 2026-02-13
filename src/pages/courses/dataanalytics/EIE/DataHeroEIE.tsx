import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCourseContext } from "../../../../context/courseContext";
import EnrollmentModal from "../../../../components/EnrollmentModal";

interface CounterProps {
  end: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span className="text-2xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

export default function DataHeroEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    handleModalClose();
  };

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0A0F1E] via-[#0D1326] to-[#0A0F1E] overflow-hidden pt-32">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] animate-pulse">
          <div className="absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] animate-pulse delay-1000">
          <div className="absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform -rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse"></div>
        </div>
        {/* Center premium glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[1000px] h-[1000px] bg-gradient-radial from-[#96E072]/10 via-[#96E072]/5 to-transparent rounded-full filter blur-[150px] animate-pulse-slow"></div>
        </div>
        {/* Premium grid pattern */}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Title and Description */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg opacity-50"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Stay Ahead in Your Career with
                <span className="relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg"></span>
                  <span className="relative bg-gradient-to-r from-[#96E072] to-[#96E072]/90 bg-clip-text text-transparent ml-2">
                    AI Data Analytics
                  </span>
                </span>
                {/* with an AI-Powered Program Built for the Future */}
              </h1>
            </div>
            <p className="mt-8 text-lg text-gray-300 leading-relaxed backdrop-blur-sm">
              Accelerate your career with AI-driven data analytics. Obtain experiential learning in AI analytics, data storytelling, visualization, and an analytical tool designed for professionals. Build an AI-powered dashboard, a data analyst portfolio that helps you get hired in data analyst, business analyst, financial analyst, market analyst, and HR analyst roles.
            </p>
            <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <p className="text-sm font-medium text-amber-400">
                Backed by an AI-centered approach to help you build faster, analyze quicker, and get hired with AI.
              </p>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 items-start">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#96E072] to-[#96E072]/70 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div
                  className="relative px-8 py-3 bg-[#1a71f6] hover:bg-[#1a71f6]/90 rounded-full flex items-center justify-center group cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="text-white font-bold">Apply Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/50 to-[#96E072]/30 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-8 py-3 bg-[#0A0F1E] border border-[#96E072]/50 rounded-full">
                  <span className="text-white font-semibold">Download Curriculum</span>
                </div>
              </motion.button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { value: 16, suffix: "LPA", label: "Average Salary" },
                { value: 40000, suffix: "+", label: "Job Openings" },
                { value: 22, suffix: " weeks", label: "Duration" },
              ].map((stat, index) => (
                <motion.div key={index} className="relative group" whileHover={{ scale: 1.02, y: -5 }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] p-6 rounded-2xl border border-[#96E072]/20 group-hover:border-[#96E072]/40 transition-all duration-300">
                    <Counter end={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column with Image and Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mt-4 lg:mt-0"
          >
            {/* Main Image with Premium Border */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/60 to-[#96E072]/30 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/assets/daBanner.webp"
                alt="Data Analytics Program"
                className="relative w-full rounded-lg shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="flex justify-center mt-4">
              {/* <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> */}
              <p className="text-sm font-medium text-amber-400">*15 Days Money Back Guarantee Program</p>
              {/* <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
    </section>
  );
}
