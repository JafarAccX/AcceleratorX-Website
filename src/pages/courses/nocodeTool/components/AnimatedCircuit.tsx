import React from "react";
import { motion } from "framer-motion";

export function AnimatedCircuit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none"
    >
      <svg
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.path
          d="M20 0V100H180V200H20V300H180V400H20V500H180V600H20V700H180V800"
          stroke="url(#circuit-gradient)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <defs>
          <linearGradient
            id="circuit-gradient"
            x1="0"
            y1="0"
            x2="0"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
