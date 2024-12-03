import React from "react";
import { motion } from "framer-motion";
import { features } from "../../../components/FeatureCards";

function BYDPFB() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
              BYDP
            </h1>
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 to-blue-200 mt-2"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 relative"
          >
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Transform your innovative ideas into reality with our
              comprehensive
              <motion.span
                className="text-blue-400 mx-2 inline-block cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Build Your Dream Product
              </motion.span>
              program.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-950/20 to-gray-900/20 backdrop-blur-3xl shadow-2xl"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent shimmer"></div>
          </div>

          {/* Features grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`group relative p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 ${feature.className}`}
              >
                <div className="mb-6">{feature.image}</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BYDPFB;
