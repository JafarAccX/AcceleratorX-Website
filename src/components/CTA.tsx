import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/become-a-mentor");
  };

  return (
    <section className="relative bg-black py-8">
      {/* Background Effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4338ca25,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_50%,transparent_75%)] animate-gradient"></div>
      </div> */}

      {/* Card Container */}
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-lg rounded-xl p-8 text-center backdrop-blur-md"
        >
          {/* Header */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Become a Mentor with <br />{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
              AcceleratorX
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-400 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Share your expertise and inspire learners globally. <br />
            We provide the platform and tools for you to shine.
          </motion.p>

          {/* Button */}
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnrollClick}
          >
            Apply Now
          </motion.button>

          {/* Decorative Divider */}
          <div className="mt-12">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
