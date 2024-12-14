import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TimeUnit } from "./TimeUnit";

export const CountdownTimer = () => {
  // Move target date to an environment variable or configuration in a real application
  const targetDate = new Date("2024-12-16T13:59:59");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isHovered, setIsHovered] = useState(false);

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{
        y: [0, -3, 0],
        rotate: isHovered ? [-0.5, 0.5, -0.5] : 0,
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Placard with enhanced realistic effects */}
      <div className="relative group">
        {/* Outer glow and shadow effects */}
        <div className="absolute inset-0 bg-black rounded-xl blur-xl transform scale-105 group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl transform -rotate-1" />

        {/* Main placard body */}
        <div className="relative bg-black backdrop-blur-lg rounded-xl p-3 md:p- border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3),inset_0_0_15px_rgba(255,255,255,0.05)] transform transition-all max-w-sm md:max-w-md mx-auto">
          {/* Content */}
          <div className="relative">
            <motion.h2
              className="text-white text-sm md:text-lg font-bold mb-3 md:mb-4 text-center"
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Registration Opens In
            </motion.h2>

            <div className="flex gap-2 md:gap-4 justify-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <TimeUnit key={unit} value={value} unit={unit} />
              ))}
            </div>
          </div>

          {/* Enhanced inner shadow overlay */}
          <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] pointer-events-none" />

          {/* Subtle highlight on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
};
