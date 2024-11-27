import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { NoCodeSVG } from "./components/NoCodeSVG";
import { StatsCounter } from "./components/StatsCounter";
import EnrollmentModal from "../../../components/EnrollmentModal";

export function NoCodeHero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen pt-20 pb-32 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8"
            >
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">No coding required</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-5xl lg:text-3xl font-bold text-white mb-6"
            >
              Master{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                No-Code Development
              </span>{" "}
              <br />
              Build Websites & Apps Without Coding
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Turn your ideas into reality with our beginner-friendly program.
              Learn to create stunning websites and mobile apps using the most
              popular no-code tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Enroll Now</span>
                <motion.div
                  animate={{ x: isHovered ? 8 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-blue-500 text-white font-semibold hover:bg-blue-500/10 transition-colors duration-300"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsDownload(true);
                }}
              >
                Download Curriculum
              </motion.button> */}
            </motion.div>
          </div>

          {/* Right SVG Animation Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-lg mx-auto lg:mx-0"
          >
            <NoCodeSVG />
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="py-12"
        >
          <StatsCounter />
        </motion.div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
