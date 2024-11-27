import React from "react";
import { motion } from "framer-motion";

interface ToolCardProps {
  name: string;
  description: string;
  logo: string;
  emoji: string;
  bgColor: string;
  borderColor: string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function ToolCard({
  name,
  description,
  logo,
  emoji,
  bgColor,
  borderColor,
}: ToolCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      className={`relative group bg-gradient-to-br ${bgColor} rounded-xl border border-gray-700 ${borderColor} transition-all duration-300 p-4 flex items-center gap-4`}
    >
      <div className="shrink-0 w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center p-3 transition-colors duration-300">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-full h-full object-contain filter invert"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold flex items-center gap-2 truncate">
          {name}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
            {emoji}
          </span>
        </h3>
        <p className="text-gray-400 text-sm truncate">{description}</p>
      </div>
      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
