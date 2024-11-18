import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

// Array of tailwind background colors for skills
const skillColors = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
];

const getRandomColor = () => {
  return skillColors[Math.floor(Math.random() * skillColors.length)];
};

interface WeeklyContentProps {
  title: string;
  items: string[] | string[]; // Handle both skills and caseStudies
  delay: number;
  variant: "topics" | "skills" | "cases";
}

export default function WeeklyContent({
  title,
  items,
  delay,
  variant,
}: WeeklyContentProps) {
  const icons = {
    topics: BookOpen,
    skills: GraduationCap,
  };

  const Icon = icons[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect rounded-xl p-6 h-full"
    >
      <div className="flex items-center gap-2 mb-4">
        {variant !== "cases" && Icon && (
          <Icon className="w-6 h-6 text-blue-400" />
        )}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {variant === "skills" ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + idx * 0.1 }}
              className={`${getRandomColor()} text-white px-3 py-1 rounded-full text-sm font-medium`}
            >
              {item}
            </motion.span>
          ))}
        </div>
      ) : variant === "cases" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((companyLogo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + idx * 0.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <img
                src={companyLogo}
                alt="Company Logo"
                className="w-12 h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + idx * 0.1 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
