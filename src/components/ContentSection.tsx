import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContentSectionProps {
  title: string;
  content: string;
  Icon: LucideIcon;
}

export default function ContentSection({
  title,
  content,
  Icon,
}: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-gray-800"
    >
      <div className="flex items-center mb-6">
        <Icon className="h-8 w-8 text-indigo-500 mr-3" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-gray-300 leading-relaxed text-lg"
      >
        {content}
      </motion.p>
    </motion.div>
  );
}
