import { motion } from "framer-motion";

interface TimelineDetailsProps {
  details: string[];
}

export const TimelineDetailsFB = ({ details }: TimelineDetailsProps) => {
  const containerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98],
        },
        opacity: { duration: 0.2 },
        staggerChildren: 0.05,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.1 },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const emojis = ["💡", "🎨", "🔧", "📱", "✨"];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="overflow-hidden"
    >
      <ul className="space-y-2 text-slate-300 mt-4">
        {details.map((detail, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <span className="text-lg">{emojis[i % emojis.length]}</span>
            {detail}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
