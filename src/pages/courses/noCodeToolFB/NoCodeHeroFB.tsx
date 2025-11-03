import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";

import EnrollmentModal from "../../../components/EnrollmentModal";
import { StatsCounter } from "../nocodeTool/components/StatsCounter";

const LogoItem = ({ src, alt }) => (
  <div className="bg-white p-2 rounded shadow-md flex items-center justify-center">
    <img
      src={src}
      alt={alt}
      className="h-6 w-auto opacity-100 hover:opacity-100 transition-opacity"
    />
  </div>
);

function NoCodeHeroFB() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative pt-20 pb-0 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <nav className="bg-[#0B1120] flex flex-row items-center py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-[40]">
            <div className="max-w-7xl mx-auto ">
              <img
                src="/companylogo-new.webp"
                alt="company logo - professional certificate in product management online"
                className="w-auto h-20 text-center"
              />
            </div>
          </nav>
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
              Become a 6-figure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                No-Code Freelancer{" "}
              </span>{" "}
              <br />
              in Just 8 Weeks{" "}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Learn how to build websites & apps from scratch without coding and
              crack high paying jobs & freelancing gigs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4 justify-center lg:justify-start items-center sm:items-start"
            >
              {/* Apply Now Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 rounded-md bg-blue-600 text-white font-semibold flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="relative z-10">Apply Now</span>
                <motion.div
                  animate={{ x: isHovered ? 8 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </motion.button>

              {/* Seats Left Text */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="group text-center font-semibold text-lg relative overflow-hidden cursor-pointer"
              >
                <span className="ml-2 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                  Only 13 Seats Left
                </span>
                <div
                  className="absolute inset-0 bg-red-500/10 blur-md group-hover:opacity-20 transition-opacity duration-300"
                  aria-hidden="true"
                ></div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 lg:mt-8 flex flex-col gap-6"
          >
            <img
              src="/assets/nocode.webp"
              alt="Product Management Workshop"
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
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

export default NoCodeHeroFB;
