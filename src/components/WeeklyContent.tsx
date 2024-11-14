import { motion } from "framer-motion";

interface ContentCardProps {
  title: string;
  items: string[];
  delay: number;
  variant: "topics" | "skills" | "cases";
}

const cardVariants = {
  topics:
    'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDBMMzAgMTBMMjAgMjBMMTAgMTBaIiBmaWxsPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIvPjwvc3ZnPg==")]',
  skills:
    'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iOCIgZmlsbD0icmdiYSg1OSwxMzAsMjQ2LDAuMSkiLz48L3N2Zz4=")]',
  cases:
    'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYmEoNTksMTMwLDI0NiwwLjEpIi8+PC9zdmc+")]',
};

export default function WeeklyContent({
  title,
  items,
  delay,
  variant,
}: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`content-card rounded-xl p-6 mb-4 ${cardVariants[variant]} bg-repeat`}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">
          {title}
        </h3>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-gray-200 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
              <span className="text-sm">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
