import { ArrowRight, ChevronDown } from "lucide-react";
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
    <span className="text-xl md:text-3xl font-bold text-white dark:text-white">
      {count}
      {suffix}
    </span>
  );
};

export default function ProgramHeroEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      // Replace with actual PM brochure link
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
      className="relative min-h-[800px] bg-cover bg-center pt-32 pb-20 overflow-hidden"
      style={{ backgroundImage: "url('/redesign/background/course-gb.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white dark:text-white leading-tight font-medium">
            Stay Ahead in Your Career with <br />
            <span className="italic">AI Product Management</span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            <div className="inline-flex items-center gap-2 bg-black dark:bg-white/10 border border-white/20 dark:border-white/30 rounded-full px-5 py-2 text-white dark:text-white text-sm font-medium tracking-wide shadow-lg backdrop-blur-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-white dark:bg-white"></span>
              16 WEEKS PROGRAM
            </div>
          </motion.div>

          {/* Right Col - Description and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8 items-end flex flex-col gap-4"
          >
            <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-2xl text-right lg:text-left">
              Master AI product management with India’s top AI Product Management Program. Dive into AI Product Management, leverage product management tools, gain real-world experience, Build Your Own Product and take your product management career to the next level.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end lg:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-[#3B82F6]  hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
              >
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => { setIsModalOpen(true); setIsDownload(true); }}
                className="px-8 py-3.5 bg-[#FFC107] hover:bg-yellow-500 text-black rounded-full font-semibold transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2 group"
              >
                Get Full Curriculum
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 flex flex-row gap-4 md:gap-6"
        >
          {/* Stat 1 */}
          <div className="flex-1 border border-white/20 dark:border-white/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-white/10 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-white/15 transition-colors duration-300">
            <div className="mb-1 md:mb-2"><Counter end={18} suffix=" LPA" /></div>
            <div className="text-gray-300 dark:text-gray-300 text-xs md:text-base font-medium transition-colors duration-300">Average Salary Package</div>
          </div>
          {/* Stat 2 */}
          <div className="flex-1 border border-white/20 dark:border-white/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-white/10 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-white/15 transition-colors duration-300">
            <div className="mb-1 md:mb-2"><Counter end={25000} suffix=" +" /></div>
            <div className="text-gray-300 dark:text-gray-300 text-xs md:text-base font-medium transition-colors duration-300">Job Openings</div>
          </div>
        </motion.div>

      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
    </section>
  );
}
