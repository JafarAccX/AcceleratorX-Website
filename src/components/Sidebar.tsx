import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface SidebarProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export default function Sidebar({
  sections,
  activeSection,
  onSectionChange,
}: SidebarProps) {
  return (
    <nav className="w-64 space-y-1">
      {sections.map((section) => (
        <motion.button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={cn(
            "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
            "hover:bg-gray-800/50 relative",
            activeSection === section.id
              ? "text-indigo-400"
              : "text-gray-400 hover:text-white"
          )}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeSection === section.id && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-gray-800/50 rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {section.title}
        </motion.button>
      ))}
    </nav>
  );
}
