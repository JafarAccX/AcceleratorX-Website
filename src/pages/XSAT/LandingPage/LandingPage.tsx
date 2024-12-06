import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const timerItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-12-07T18:59:59");
    const difference = targetDate.getTime() - new Date().getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          variants={timerItemVariants}
          whileHover="hover"
          className="flex flex-col items-center bg-gray-900/50 p-4 md:p-6 rounded-lg border border-blue-500/20 backdrop-blur-sm"
        >
          <span className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-wider text-blue-300">
            {unit}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 md:gap-12 p-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-white tracking-wider filter drop-shadow-lg text-center"
          variants={itemVariants}
        >
          REVEALING SOON
        </motion.h1>

        <motion.div
          className="w-full max-w-sm md:max-w-md h-48 md:h-64 rounded-lg overflow-hidden shadow-2xl "
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <img
            src="/x-sat33333.png"
            alt="XSAT LOGO"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <CountdownTimer />
      </motion.div>
    </div>
  );
}

export default LandingPage;
