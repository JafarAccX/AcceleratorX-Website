import { motion } from "framer-motion";

interface ProgressBarProps {
  currentWeek: number;
  totalWeeks: number;
}

export default function ProgressBarFB({
  currentWeek,
  totalWeeks,
}: ProgressBarProps) {
  const progress = (currentWeek / totalWeeks) * 100;

  return (
    <div className="w-full bg-white/10 rounded-full h-4 mb-8 overflow-hidden glass-effect">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 relative"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9zdmc+')] opacity-20"></div>
      </motion.div>
    </div>
  );
}
