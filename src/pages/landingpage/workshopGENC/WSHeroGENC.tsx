import React from "react";
import WSFormFree from "../workshopGENB/WSFormFree";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { motion } from "framer-motion";
import { RiRobot2Line } from "react-icons/ri";
import { FiAward, FiClock } from "react-icons/fi";
import { FaCalendarAlt, FaClock, FaLevelUpAlt, FaUserGraduate } from "react-icons/fa";

const WSHeroGENC = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black px-4">
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
            <img src="/assets/companylogo.png" alt="AcceleratorX Logo" className="w-full h-auto" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-0 sm:px-4">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 pt-32 lg:pt-36">
          {/* Content Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // className="w-full lg:w-1/2 space-y-8 px-4 sm:px-0"
            className="flex flex-col gap-4"
          >
            {/* Pre-title with AI animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="inline-flex max-w-[250px] items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20"
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
              <span className="text-blue-400 font-medium">Hands-on AI Workshop</span>
            </motion.div>

            {/* Main Title & Content */}
            <div className="space-y-6 flex items-start justify-center flex-col ">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight"
              >
                <div className="flex items-center gap-4">
                  {/* <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-blue-400"
                  >
                    <RiRobot2Line className="w-12 h-12 animate animate-bounce" />
                  </motion.div> */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r pb-4 from-white via-blue-100 to-green-200">
                    Build Your
                    <span className="text-yellow-400 underline ml-4">Personal Content Creator</span> with AI
                  </span>

                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex gap-2"
                  >
                    {" "}
                  </motion.div>
                </div>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-400 max-w-xl"
              >
                Learn to create your own AI-powered assistant that helps you generate high-quality content quickly and
                efficiently. This hands-on workshop will guide you through building a personal content creation tool
                that boosts your creativity and productivity.
              </motion.p>

              {/* Price Tag - Enhanced */}
              <motion.div
                className="flex flex-col items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl backdrop-blur-sm border border-blue-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-yellow-500 text-sm font-medium"
                  >
                    2 Hour Live Workshop with Project & Certificate included
                  </motion.div>
                </div>
              </motion.div>

              {/* Primary CTA Button */}
              <motion.button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Register Now for Free
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                {
                  icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                  label: "Date",
                  value: "May 21th ",
                },
                {
                  icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                  label: "time",
                  value: "08:00 pm",
                },
                { icon: <FaLevelUpAlt className="text-cyan-400 mb-1" />, label: "Level", value: "All Levels" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#0A1A2A]/80 to-[#061625]/60 backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg"
                >
                  {item.icon}
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{item.value}</p>
                </div>
              ))}
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
                    <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                      <h3 className="text-xl font-bold text-white mb-2">Reserve Your Spot Now!</h3>
                      <p className="text-sm text-gray-400">Limited seats available for the next session</p>
                    </motion.div>
                  </div>
                  <div id="workshop-registration-form">
                    <WorkshopProvider>
                      <WSFormFree />
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

export default WSHeroGENC;
