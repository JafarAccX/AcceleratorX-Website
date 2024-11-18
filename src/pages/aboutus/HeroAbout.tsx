import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-white mb-4"
      >
        About <span className="text-indigo-500">Us</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-xl mb-12"
      >
        Meet our teams
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="relative w-full max-w-2xl h-[400px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 800 400"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Grid */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1 }}
              className="grid"
            >
              {[...Array(20)].map((_, i) => (
                <line
                  key={`vertical-${i}`}
                  x1={i * 40}
                  y1="0"
                  x2={i * 40}
                  y2="400"
                  stroke="white"
                  strokeWidth="1"
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`horizontal-${i}`}
                  x1="0"
                  y1={i * 40}
                  x2="800"
                  y2={i * 40}
                  stroke="white"
                  strokeWidth="1"
                />
              ))}
            </motion.g>

            {/* Main Graph Line */}
            <motion.path
              d="M0,300 C100,280 150,100 300,150 S450,250 600,150 S750,200 800,100"
              stroke="#818cf8"
              strokeWidth="4"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              className="drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]"
            />

            {/* Secondary Graph Line */}
            <motion.path
              d="M0,250 C150,230 250,180 400,200 S600,300 800,200"
              stroke="#c084fc"
              strokeWidth="4"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              className="drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]"
            />

            {/* Data Points */}
            {[
              { cx: 150, cy: 200 },
              { cx: 300, cy: 150 },
              { cx: 450, cy: 250 },
              { cx: 600, cy: 150 },
              { cx: 750, cy: 200 },
            ].map((point, index) => (
              <motion.circle
                key={index}
                cx={point.cx}
                cy={point.cy}
                r="6"
                fill="#fff"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            ))}
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
