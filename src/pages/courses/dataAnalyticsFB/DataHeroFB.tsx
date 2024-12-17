import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { useCourseContext } from "../../../context/courseContext";

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

const LogoItem = ({ src, alt }) => (
  <div className="bg-white p-2 rounded shadow-md flex items-center justify-center">
    <img
      src={src}
      alt={alt}
      className="h-6 w-auto opacity-100 hover:opacity-100 transition-opacity"
    />
  </div>
);

export default function DataHeroFB() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      window.location.href =
        "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/DA%20Brochure%20Final%20Draft.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0RBIEJyb2NodXJlIEZpbmFsIERyYWZ0LnBkZiIsImlhdCI6MTczMzQ5ODM1NSwiZXhwIjo4MDA5MTYyMzU1fQ.tbDI6sPkotmr5bQ3rOZy1-3XN7wnX4WaBF2pO3CGUUg&t=2024-12-06T15%3A19%3A16.109Z";
    }
    handleModalClose();
  };

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-[#0B1120]">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <nav className="bg-[#0B1120] flex flex-row items-center py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-[40]">
            <div className="max-w-7xl mx-auto ">
              <img
                src="/companylogo.png"
                alt="AcceleratorX Logo"
                className="w-auto h-20 text-center"
              />
            </div>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/30 backdrop-blur-sm px-2 py-1 rounded-full inline-block mb-6 border border-[#211951]"
              style={{
                boxShadow:
                  "0 0 10px rgba(144, 205, 244, 0.5), 0 0 20px rgba(144, 205, 244, 0.3)",
              }}
            >
              <span className="text-gray-300 font-semibold text-sm sm:text-base">
                Next Cohort Starts on 30 Dec
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Become a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Data Analytics{" "}
              </span>
              Hero
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              With our comprehensive Up-to-Date Curriculum including Python,
              Generative AI and, hands-on projects - trusted by top MNCs &
              Startups
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-600/10 transition"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsDownload(true);
                }}
              >
                Download Curriculum
              </motion.button>
            </div>

            <div className="mt-8 flex flex-row justify-between items-center gap-4 px-2">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Counter end={16} suffix="LPA" />
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Average Salary
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Counter end={40000} suffix="+" />
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Job Openings
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Counter end={22} suffix=" weeks" />
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Duration
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 flex flex-col gap-6"
          >
            <img
              src="/assets/daProgramBanner.webp"
              alt="Product Management Workshop"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto px-4">
                <LogoItem
                  src="/assets/caseStudiesLogo/paytm.webp"
                  alt="Company Logo 1"
                />
                <LogoItem src="/assets/delloite.webp" alt="Company Logo 2" />
                <LogoItem src="/assets/nagarro.webp" alt="Company Logo 3" />
              </div>
            </div>
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
