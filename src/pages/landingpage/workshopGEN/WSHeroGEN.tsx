import WSForm from "../workshop/WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaLevelUpAlt, FaUserGraduate } from "react-icons/fa";
import { useEffect, useRef } from "react";

const WSHeroGENC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.7; // Adjust speed here (e.g., 2 for 2x)
    }
  }, []);

  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black ">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/make_com_out_6.mp4"
        />

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Foreground Text */}
        <div className="relative z-20 flex items-center justify-start h-full px-10 md:px-24">
          <div className="max-w-2xl text-white space-y-6 flex flex-col items-start justify-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Social media lead gen magnet.</h1>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Make your mark with <span className="text-black underline">make.com</span>
            </h1>
            {/* <p className="text-lg md:text-xl">Dream big, build fast, and grow far on Shopify.</p> */}
            <button
              onClick={handleEnrollClick}
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
            >
              Register now
            </button>
          </div>
        </div>
      </div>

      {/* Header Logo */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/90 to-transparent "
      >
        <div className="container mx-auto   py-4 flex justify-between items-center">
          <div className="w-44 md:w-52 hover:scale-105 transition-transform duration-300">
            <img src="/assets/companylogo.png" alt="AcceleratorX Logo" className="w-full h-auto" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4  ">
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
                <div className="space-y-4">
                  <span className="text-white">Turn Your Social Media Into a Lead Machine</span>
                  <span className=" text-gray-400">
                    <br />– Without Big Team
                  </span>
                </div>
              </motion.h1>

              {/* Funky "Missed Part One" Message */}
              <p className=" text-gray-400">
                Join our hands-on webinar where we’ll walk you through how to use Make.com to build lead-generation
                workflows that work while you sleep.
              </p>
              {/* Price Tag - Enhanced */}
              <div className="flex flex-col items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl backdrop-blur-sm border w-full border-blue-500/20">
                <div className="flex justify-between  items-center w-full  ">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Price</h3>
                    <p className="text-sm text-gray-400">Avail now to get the offer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white">
                      <span className=" text-gray-400 font-light line-through mx-4">₹199</span>
                      ₹99
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary CTA Button */}
            </div>
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-400  text-sm font-medium"
              >
                * The first 50 people pay ₹99, and then it becomes ₹199!
              </motion.div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                {
                  icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                  label: "Date",
                  value: "22 Jun",
                },
                {
                  icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                  label: "time",
                  value: "11:00 am",
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
              {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div> */}

              {/* Form Container */}
              <div className="relative bg-gradient-to-b my-2 from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl">
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

export default WSHeroGENC;
