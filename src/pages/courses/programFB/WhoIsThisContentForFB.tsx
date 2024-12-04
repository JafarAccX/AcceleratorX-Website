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

const WhoIsThisContentForFB = () => {
  const bulletPoints = [
    {
      emoji: "🎯",
      text: "Ambitious entrepreneurs looking to upskill and scale their business",
    },
    {
      emoji: "🎨",
      text: "UX professionals looking to transition into Product Management roles",
    },
    {
      emoji: "💻",
      text: "Engineers aspiring to crack a PM Role",
    },
    {
      emoji: "🔄",
      text: "Working professionals looking to transition into Product Management",
    },
    {
      emoji: "🎓",
      text: "Freshers looking for a Product Internship",
    },
    {
      emoji: "🌟",
      text: "Anyone who aspires to become a Product Manager",
    },
  ];

  return (
    <section className="bg-black min-h-[600px] py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
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

export default WhoIsThisContentForFB;
