import { motion } from "framer-motion";
import { Download, Lock } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-center bg-black min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/grain1.png')",
        backgroundSize: "240%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Second Layer Background */}
      <div
        className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/grain2.png')",
          backgroundSize: "98%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Meteor Shower Effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`meteor meteor-${i + 1}`} />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center Beam */}
        <div className="center-beam"></div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/30 backdrop-blur-sm px-2 py-1 rounded-full inline-block mb-6"
            style={{
              boxShadow:
                "0 0 10px rgba(144, 205, 244, 0.5), 0 0 20px rgba(144, 205, 244, 0.3)",
            }}
          >
            <span className="text-gray-300 font-thin text-sm sm:text-base">
              Next Cohort Starts on 30 Nov
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text"
          >
            Build, Lead & Succeed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-sm sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed"
          >
            Transform your ideas into action. <br /> Become the Product Manager
            you were meant to be.
          </motion.p>

          <div className="button-sparkle">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="enroll-button bg-blue-600 flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg text-sm sm:text-base font-medium"
              >
                Enroll Now
                <Lock size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="download-button bg-gray-800 flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg text-sm sm:text-base font-medium"
              >
                Download Curriculum
                <Download size={16} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
