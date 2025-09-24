import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  dataAnalyticsSkills,
  dataAnalyticsTools,
} from "../../../utils/constants";

interface SkillCardProps {
  skill: string;
  index: number;
}

interface ToolCardProps {
  tool: {
    name: string;
    image: string;
  };
  index: number;
}

export const ToolCard = ({ tool, index }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
      <div className="relative p-4 bg-navy-900/50 border border-blue-500/10 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/30">
        <img
          src={tool.image}
          alt={tool.name}
          className="h-14 w-14 mx-auto object-contain filter brightness-90 group-hover:brightness-100"
        />
        <p className="mt-2 text-center text-sm text-white">{tool.name}</p>
      </div>
    </motion.div>
  );
};

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="p-4 bg-navy-900/50 border border-blue-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/50">
        <div className="flex items-center space-x-3">
          <div className="h-2 w-2 rounded-full bg-blue-400 group-hover:bg-blue-300" />
          <span className="text-white group-hover:text-white transition-colors font-semibold">
            {skill}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function DataSkillsTools() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>(
    dataAnalyticsSkills.slice(0, 9)
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 9) % dataAnalyticsSkills.length;
        setVisibleSkills(dataAnalyticsSkills.slice(newIndex, newIndex + 9));
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 bg-[#0B1120] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Master the essential skills and tools used by top Product Managers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tools Section */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-white mb-8">
              Tools You'll Master
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {dataAnalyticsTools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-white mb-8">
              Skills You'll Develop
            </p>
            <div className="space-y-4">
              {visibleSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill}-${index}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
