import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { avatars } from "../../../utils/constants";
import EnrollmentModal from "../../../components/EnrollmentModal";
// import EnrollmentModal from "./EnrollmentModal"; // Import the EnrollmentModal

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
    <span className="text-lg font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

export default function ProgramHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      window.location.href =
        "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Brochure%20(3).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBCcm9jaHVyZSAoMykucGRmIiwiaWF0IjoxNzMxOTQxODg0LCJleHAiOjE3NjM0Nzc4ODR9.5CmoBe0dKWL49WdTTjTp0MPJ101YW2uP4ZuJVyiGguA&t=2024-11-18T14%3A58%3A05.029Z";
    }
    handleModalClose();
  };

  // Array of testimonials
  const testimonials = [
    { name: "Udit Bhatia", position: "PM at M3 Inc | Walmart" },
    { name: "Ruchir Rana", position: "PM at AcceleratorX" },
    { name: "Ravi Ahlawat", position: "PM at Paytm" },
  ];

  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left" // Ensures all text aligns to the left
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
                Next Cohort Starts on 30 Nov
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Launch Your Career in
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Product Management
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Master the skills needed to become a successful Product Manager.
              Join our comprehensive program designed by industry experts from
              top tech companies.
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
            <div className="mt-8 flex items-center text-center gap-8">
              <div>
                <Counter end={17} />
                <p className="text-sm text-gray-400">Week Program</p>
              </div>
              <div>
                <Counter end={2} />
                <p className="text-sm text-gray-400">Specialisations</p>
              </div>
              <div>
                <Counter end={32000} suffix="+" />
                <p className="text-sm text-gray-400">Jobs</p>
              </div>
              <div>
                <Counter end={48} suffix="LPA+" />
                <p className="text-sm text-gray-400">Salary</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex  mt-5 items-center gap-4 mb-4"
            >
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <motion.img
                    key={avatar}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    src={avatar}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">
                80+ already joined the{" "}
                <span className="text-blue-600">Accex Squad</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/assets/bg.jpg"
              alt="Product Management Workshop"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 flex flex-row gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="flex flex-col items-center bg-slate-950 p-2 rounded-lg shadow-lg w-32 md:w-48"
                >
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.position}
                  </p>{" "}
                </motion.div>
              ))}
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
