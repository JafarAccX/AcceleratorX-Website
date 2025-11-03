import WSFormFree from "../workshopGENB/WSFormFree";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaLevelUpAlt, FaUserGraduate } from "react-icons/fa";

const WSHeroGENC = () => {
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
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
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
        <div className="container mx-auto   py-4 flex justify-between items-center">
          <div className="w-44 md:w-52 hover:scale-105 transition-transform duration-300">
            <img src="/companylogo-new.webp" alt="company logo - professional certificate in product management online" className="w-full h-auto" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-0  ">
        <div className="relative space-y-8 grid grid-cols-1 md:grid-cols-5  items-center justify-center md:gap-12 pt-32 lg:pt-36">
          {/* Content Section */}
          <motion.div
            // initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            // className="w-full lg:w-1/2 space-y-8 px-4 sm:px-0"
            className="flex flex-col gap-4 col-span-3"
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
                transition={{ duration: 0.8 }}
                className=" text-3xl lg:text-4xl font-bold leading-tight"
              >
                <div className="flex items-center gap-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r pb-4 from-white via-blue-100 to-green-200">
                    <span className=" text-yellow-400 underline  ">
                      Build & Deploy 
                    </span>{" "}
                    <br />your own AI Applications
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
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <p className="  text-gray-400 max-w-xl">
                  Learn to build and deploy your own AI applications from scratch.
                </p>
                <p className="  text-gray-400 max-w-xl">
                  In this hands-on workshop, you'll create real AI applications step by step. No fluff. No heavy theory. Just practical skills you can apply instantly.
                </p>
              </motion.div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                {
                  icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                  label: "Date",
                  value: "16th Oct 2025",
                },
                {
                  icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                  label: "Time",
                  value: "6:00 PM",
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
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0.7, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full col-span-2  lg:sticky lg:top-32"
          >
            <div className="relative w-full mx-auto ">
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>

              {/* Form Container */}
              <div className="relative bg-gradient-to-b from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl">
                {/* Form Content */}
                <div className="relative">
                  <div className="mb-6 text-center">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Reserve Your Spot Now!</h3>
                      <p className="text-sm text-gray-400">Limited seats available for the next session</p>
                    </div>
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
