import React from "react";
import { motion } from "framer-motion";
import { AnimatedCircuit } from "./components/AnimatedCircuit";
import { noCodetools } from "../../../utils/constants";
import { ToolCard } from "./components/ToolCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function NoCodeTool() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative max-w-5xl">
        <AnimatedCircuit />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12 relative z-10"
        >
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Tools You'll Use
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Get hands-on experience with the most powerful no-code platforms
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {noCodetools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative mt-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl" />
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Seamless Workflow</h3>
              <p className="text-gray-400">
                Our carefully selected noCodetools work together perfectly,
                allowing you to create professional projects efficiently and
                effectively.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NoCodeTool;
