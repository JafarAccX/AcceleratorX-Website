import { motion, AnimatePresence } from "framer-motion";
import { TimelineDetails } from "../TimelineDetails";

interface TimelineItemProps {
  item: {
    weeks: string;
    title: string;
    details: string[];
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const TimelineItem = ({
  item,
  index,
  isActive,
  onClick,
}: TimelineItemProps) => {
  const emoji = ["🚀", "💫", "⚡️", "🎯"][index];

  return (
    <motion.div
      className="relative pl-16 mb-12"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2, delay: index * 0.1 + 0.2 }}
        style={{
          top: "24px",
          transform: "translateX(-6px)",
        }}
      />

      <motion.div
        className={`
          p-6 rounded-lg cursor-pointer
          border border-blue-500/20
          shadow-lg shadow-blue-500/5
          backdrop-blur-sm
          transition-all duration-200
          ${
            isActive
              ? "bg-blue-500/10 border-blue-400/30 shadow-blue-500/10"
              : "bg-slate-900/50 hover:bg-blue-500/5 hover:border-blue-500/30"
          }
        `}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <motion.h3
          className="text-blue-400 font-medium text-sm mb-1 flex items-center gap-2"
          layout
        >
          <span>{emoji}</span> {item.weeks}
        </motion.h3>
        <motion.h2 className="text-white text-xl font-semibold mb-2" layout>
          {item.title}
        </motion.h2>

        <AnimatePresence mode="wait">
          {isActive && <TimelineDetails details={item.details} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
