import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface ContentCardProps {
  title: string;
  items: string[];
  delay: number;
}

export default function WeeklyContent({
  title,
  items,
  delay,
}: ContentCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-6 mb-4 transform hover:scale-102 transition-all"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRightIcon className="h-5 w-5 text-indigo-600 mr-2" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="mt-4 space-y-2 ml-7">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-gray-600 flex items-center"
            >
              <span className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
