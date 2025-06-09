import React from "react";
import { motion } from "framer-motion";
// import DMTimer from "../../../pages/courses/dmAI/DMTimer";

const GENCTA = () => {
  const currentYear = new Date().getFullYear();

  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 bg-black"></div>

      {/* Main Content */}
      <div className="relative ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-10">
            <motion.h2
              className="text-3xl   font-bold text-center text-white max-w-3xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The difference between those who grow and those who wait? Action. Take yours now.
            </motion.h2>

            {/* Price Badge */}
            <motion.div
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-blue-500/10 rounded-full px-6 py-2">
                <span className="text-3xl font-bold text-white">₹199/-</span>
                <span className="text-gray-400 text-sm ml-2">Only</span>
              </div>
              <p className="text-gray-400 text-sm">The first 50 people pay ₹199, and then it becomes ₹299!</p>
            </motion.div>

            {/* Value Props */}
            <motion.div
              className="flex flex-col items-center space-y-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-400">2 Hours</p>
                  <p className="text-sm text-gray-400">Live Workshop</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-400">Interactive</p>
                  <p className="text-sm text-gray-400">Q&A Session</p>
                </div>
              </div>
            </motion.div>

            {/* Button Section */}
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Button */}
              <button
                onClick={handleEnrollClick}
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 text-lg font-semibold">Register now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
              </button>
            </motion.div>

            {/* Footer Section */}
            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <img src="/favicon.svg" alt="AcceleratorX" className="h-6 w-6" />
                <span className="text-white font-medium">AcceleratorX</span>
              </div>
              <p className="text-gray-400 text-sm">{currentYear} AcceleratorX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-flow"></div>
      </div>

      <style jsx>{`
        @keyframes border-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GENCTA;
