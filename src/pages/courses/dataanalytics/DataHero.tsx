import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { useCourseContext } from "../../../context/courseContext";
import DataAnalyticsSVG from "./DataAnalyticsSVG";

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

export default function DataHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      window.location.href = "https://google.com";
    }
    handleModalClose();
  };

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Become a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Data Analytics{" "}
              </span>
              Hero
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Stop dreaming about a data career and start building one. At
              AcceleratorX, you jump into real projects from Day 1, using
              industry-standard tools that employers want. Join us, and start
              your journey to a high-paying analytics role, fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-600/10 transition"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsDownload(true);
                }}
              >
                Download Curriculum
              </motion.button>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <motion.div
                className="p-6 rounded-lg shadow-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Counter end={16} suffix="LPA" />
                <p className="text-sm text-gray-400 mt-2">Starting Salary</p>
              </motion.div>
              <motion.div
                className="p-6 rounded-lg shadow-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Counter end={22} suffix=" weeks" />
                <p className="text-sm text-gray-400 mt-2">Duration</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm"
          >
            <DataAnalyticsSVG />
          </motion.div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}
