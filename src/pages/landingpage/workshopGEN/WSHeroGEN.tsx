import React from "react";
import WSForm from "../workshop/WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiUsers, FiAward } from "react-icons/fi";

const WSHeroGEN = () => {

  const scrollToForm = () => {
    const form = document.getElementById('workshop-registration-form');
    if (form) {
      form.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-blue-600/30 via-transparent to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-green-600/30 via-transparent to-transparent blur-3xl"
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
        <div className="relative flex flex-col lg:flex-row items-start gap-12 pt-32 lg:pt-36">
          {/* Content Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[57%] space-y-8 px-4 sm:px-0"
          >
            {/* Speaker Image - Mobile Only */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block lg:hidden w-full max-w-[370px] mx-auto mb-8 px-0"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-blue-500/10 to-green-500/10 border border-white/10">
                <img
                  src="/assets/workshopCover/daMobile.webp"
                  alt="Workshop Cover"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <button
                onClick={scrollToForm}
                className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Register Now
              </button>
            </motion.div>

            {/* Pre-title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20"
            >
              <span className="text-blue-400 font-semibold">
                🔥 Live Online Workshop
              </span>
            </motion.div>

            {/* Main Title & Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-6xl lg:text-5xl font-bold"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                  Masterclass in Gen AI
                </span>
                <br />
                <span className="text-xl md:text-4xl lg:text-2xl text-gray-400">
                  Topic: Micro-certification in Prompt Engineering{" "}
                </span>
              </motion.h1>

              {/* Key Benefits */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {[
                  { icon: FiClock, text: "2 Hour Intensive Workshop" },
                  { icon: FiCalendar, text: "17 Feb 07:30 PM" },
                  { icon: FiUsers, text: "Live Interactive Sessions" },
                  { icon: FiAward, text: "Certificate of Completion" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                  >
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                Join our exclusive masterclass and learn how to leverage GenAI
                to:
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Earn a recognized
                    Micro-Certification in Prompt Engineering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Master the art of
                    crafting effective AI prompts for optimal results
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Learn advanced
                    techniques to enhance AI response accuracy and efficiency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Apply prompt
                    engineering skills to automation, business, and content
                    generation
                  </li>
                </ul>
              </motion.p>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-white/[0.05] to-transparent backdrop-blur-lg rounded-2xl border border-white/10">
                <img
                  src="/assets/companylogo.png"
                  alt="AcceleratorX"
                  className="h-12"
                />
                <div className="h-12 w-px bg-gray-700/50"></div>
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Trusted by
                  </p>
                  <p className="font-semibold text-sm text-white">
                    567+ Professionals
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[45%] lg:sticky lg:top-32"
          >
            <div
              id="workshop-form"
              className="relative w-full max-w-md mx-auto"
            >
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>

              {/* Form Container */}
              <div className="relative bg-gradient-to-b from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-2xl"></div>

                {/* Form Content */}
                <div className="relative">
                  <div className="mb-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Reserve Your Spot Now!
                    </h3>
                    <p className="text-sm text-gray-400">
                      Limited seats available for the next session
                    </p>
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
