import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right blue glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        {/* Bottom-left blue glow */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2,
              }}
            ></div>
          ))}
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-6xl md:text-7xl font-bold text-white mb-4"
      >
        About <span className="text-blue-500">Us</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative text-gray-300 text-xl mb-12"
      >
        Meet our teams
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="relative w-full max-w-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative z-10 w-full h-full p-8 backdrop-blur-sm bg-black/30 rounded-2xl border border-blue-500/20">
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to AcceleratorX, where innovation meets education. We're dedicated to transforming ambitious individuals into industry leaders through cutting-edge technology and personalized mentorship.
          </p>
        </div>
      </motion.div>

      {/* Animated line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide"></div>
    </section>
  );
};

export default Hero;
