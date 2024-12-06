import { motion } from "framer-motion";
import { Brain, DollarSign, Briefcase, TrendingUp } from "lucide-react";
import { useState } from "react";

interface FactCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const facts: FactCard[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Most In-Demand Skill 🚀",
    description:
      "No-Code Development is the most in-demand skill for freelancing globally",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Financial Independence 💰",
    description:
      "One of the only skills that can make you financially independent during college itself",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Abundant Opportunities 🎯",
    description: "50k+ gigs open right now across Fiverr and Upwork",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "High Salary Potential 📈",
    description: "12 LPA avg salary in Indian Startup",
  },
];

const NoCodeDidYouKnow = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Facts About No Code 🤔
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="relative bg-blue-900 rounded-xl p-6 cursor-pointer transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1E40AF",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute -top-4 left-6 bg-blue-500 p-3 rounded-lg"
                animate={{
                  rotate: hoveredIndex === index ? 360 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                {fact.icon}
              </motion.div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">{fact.title}</h3>
                <p className="text-gray-300">{fact.description}</p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoCodeDidYouKnow;
