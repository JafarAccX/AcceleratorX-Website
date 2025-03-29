import React from "react";
import WSForm from "../workshop/WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiUsers, FiAward } from "react-icons/fi";

const WSHeroGEN = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error(
        'Form element not found with ID "workshop-registration-form"'
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black">
      {/* AI-themed Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.3 }}
        />

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header Logo */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/90 to-transparent"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="w-44 md:w-52 hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/companylogo.png"
              alt="AcceleratorX Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-0 sm:px-4">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 lg:pt-36">
          {/* Content Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8 px-4 sm:px-0"
          >
            {/* Pre-title with AI animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center"
              >
                <span className="text-blue-400">⚡</span>
              </motion.div>
              <span className="text-blue-400 font-medium">
                AI Productivity Workshop
              </span>
            </motion.div>

            {/* Main Title & Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-7xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                  How to Automate Your Daily Workflow Using
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Generative AI Tools
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-400 max-w-xl"
              >
                In today's fast-paced world, staying productive often means
                finding smarter ways to manage tasks. Generative AI tools are
                revolutionizing how professionals handle their daily workflows,
                automating repetitive tasks, enhancing decision-making, and
                fostering creativity. From streamlining content creation to
                automating data analysis, AI-powered solutions can help you save
                time and focus on high-impact work.
              </motion.p>

              {/* Price Tag - Enhanced */}
              <motion.div
                className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl backdrop-blur-sm border border-blue-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-sm text-gray-400">Special Price</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">₹99</span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹499
                      </span>
                    </div>
                  </div>
                  <div className="h-10 w-px bg-gray-700"></div>
                  <motion.div
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-yellow-500 text-sm font-medium"
                  >
                    Limited Time Offer
                  </motion.div>
                </div>
              </motion.div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: FiClock,
                    text: "2 Hour Live Workshop",
                    highlight: "23rd Feb, 10:30 AM",
                  },
                  {
                    icon: FiAward,
                    text: "Certificate Included",
                    highlight: "Lifetime Access",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-white/[0.05] to-transparent rounded-lg p-4 border border-white/5"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 bg-blue-500/10 rounded-lg"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <span className="block text-white/80 text-sm">
                        {item.text}
                      </span>
                      <span className="text-xs text-blue-400">
                        {item.highlight}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Primary CTA Button */}
              <motion.button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Register Now
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[45%] lg:sticky lg:top-32"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>

              {/* Form Container */}
              <div className="relative bg-gradient-to-b from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-2xl"></div>

                {/* Form Content */}
                <div className="relative">
                  <div className="mb-6 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        Reserve Your Spot Now!
                      </h3>
                      <p className="text-sm text-gray-400">
                        Limited seats available only for the first 50
                        registrations
                      </p>
                    </motion.div>
                  </div>
                  <div id="workshop-registration-form">
                    <WorkshopProvider>
                      <WSForm />
                    </WorkshopProvider>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WSHeroGEN;
