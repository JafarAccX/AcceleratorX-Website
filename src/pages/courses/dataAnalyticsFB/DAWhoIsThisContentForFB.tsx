import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const DAWhoIsThisContentForFB = () => {
  const bulletPoints = [
    {
      emoji: "📊",
      text: "Business professionals looking to make data-driven decisions",
    },
    {
      emoji: "🎓",
      text: "Students and fresh graduates exploring career opportunities in analysis and insights",
    },
    {
      emoji: "💻",
      text: "IT professionals aiming to transition into roles involving data interpretation",
    },
    {
      emoji: "🔍",
      text: "Marketing specialists interested in understanding trends and optimizing campaigns",
    },
    {
      emoji: "🔢",
      text: "Finance professionals seeking to enhance their ability to work with numbers and reports",
    },
    {
      emoji: "🌟",
      text: "Anyone eager to build a career in understanding and interpreting data effectively",
    },
  ];

  return (
    <section className="relative bg-[#0B1120] min-h-[600px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
          variants={itemVariants}
        >
          Who Is This For?
        </motion.h2>

        <motion.p
          className="text-blue-400 text-xl md:text-2xl text-center mb-12"
          variants={itemVariants}
        >
          Designed for those who dare to dream bigger
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bulletPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl">{point.emoji}</span>
                <p className="text-white text-lg">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DAWhoIsThisContentForFB;
