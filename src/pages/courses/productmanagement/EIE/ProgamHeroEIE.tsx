import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCourseContext } from "../../../../context/courseContext";
import EnrollmentModal from "../../../../components/EnrollmentModal";
import { Typewriter } from "../../../../components/common/Typewriter";
import { PremiumButton } from "../../../../components/common/PremiumButton";
import { ProgramBadge } from "../../../../components/common/ProgramBadge";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", prefix = "" }) => {
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
    <span className="font-heading text-xl md:text-3xl font-bold text-white dark:text-white">
      {prefix}{count}
      {suffix}
    </span>
  );
};

export default function ProgramHeroEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const [isDownload, setIsDownload] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      window.open(
        "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/PM%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL1BNIEJyb2NodXJlLnBkZiIsImlhdCI6MTczNzM3NDkyNywiZXhwIjozMzI3MzM3NDkyN30.jPzAbYFDvcoA-nDaPMo6DAazFa7yrp4jhGkmHKcbd4o"
      );
    }
    handleModalClose();
  };

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <section
      className="relative min-h-[800px] pt-24 h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: "url('/redesign/ai-pm/ai-pm-bg-1.webp')" }}
      />

      <img src="/redesign/ai-pm/slack.png" alt="slack" className="h-16 w-16 absolute top-40 left-10 opacity-20 md:opacity-50 animate-pulse" />
      <img src="/redesign/ai-pm/Google-Analytics.png" alt="analytics" className="h-14 w-14 absolute bottom-40 right-10 opacity-20 md:opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:pt-20 relative z-10">
        <Typewriter
          text="HUMAN CENTRED PRODUCT DETECTED..."
          onComplete={() => setIsTypingDone(true)}
          className="mb-6"
        />

        {isTypingDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Title Section */}
            <div className="flex justify-between items-start mb-10">
              <h1 className="font-heading text-[2.75rem] sm:text-6xl   leading-[1.1] font-light tracking-tight text-white dark:text-white ">
                AI Product Management
              </h1>
              {/* Logo/Icon space if needed */}

            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full h-px bg-white/20 dark:bg-white/20 mb-10 origin-left"
            ></motion.div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Col - Program Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-4"
              >
                <ProgramBadge text="18-Week Live Program" />
              </motion.div>

              {/* Right Col - Description and Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-8 lg:items-end flex flex-col gap-4"
              >
                <p className="font-sans text-gray-200 text-lg leading-relaxed mb-6 max-w-2xl text-left lg:text-right">
                  Master end-to-end Product Management — from user discovery and strategy to execution, analytics, and AI-powered product development.
                </p>

                <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="font-sans px-8 py-3.5 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
                  >
                    Apply Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <PremiumButton
                    onClick={() => { setIsModalOpen(true); setIsDownload(true); }}
                    icon={<ChevronDown size={18} className="transition-transform group-hover:translate-y-1 text-blue-400 group-hover:text-white" />}
                  >
                    Get Full Curriculum
                  </PremiumButton>
                </div>
              </motion.div>
            </div>

            {/* Stats Section - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-24 flex flex-row gap-4 md:gap-6 max-w-[350px]"
            >
              <div className="flex-1 border border-white/20 dark:border-[#848484]/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-[#171717]/50 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-[#171717]/80 transition-colors duration-300">
                <div className="mb-1 md:mb-2"><Counter end={16} suffix=" LPA" /></div>
                <div className="font-sans text-gray-300 dark:text-gray-300 text-xs md:text-sm font-medium transition-colors duration-300">Average Salary Package</div>
              </div>
              <div className="flex-1 border border-white/20 dark:border-[#848484]/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-[#171717]/50 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-[#171717]/80 transition-colors duration-300">
                <div className="mb-1 md:mb-2"><Counter end={40000} suffix=" +" /></div>
                <div className="font-sans text-gray-300 dark:text-gray-300 text-xs md:text-sm font-medium transition-colors duration-300">Job Openings</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
    </section>
  );
}

