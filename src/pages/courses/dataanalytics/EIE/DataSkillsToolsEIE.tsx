import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { dataAnalyticsSkills, dataAnalyticsTools } from "../../../../utils/constants";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Hexagon shape with glow */}
      <div className="absolute inset-0 bg-[#96E072]/5 transform rotate-45 rounded-3xl blur-2xl group-hover:bg-[#96E072]/10 transition-all duration-500"></div>
      
      <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl rounded-2xl border border-[#96E072]/10 p-4 transform-gpu transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_-5px_rgba(150,224,114,0.3)]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#96E072]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Icon Container */}
        <div className="relative mb-2 transform-gpu transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-0 bg-[#96E072]/20 rounded-full blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
          <div className="relative h-12 w-12 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#96E072]/20 to-transparent rounded-full animate-pulse"></div>
            <img
              src={tool.image}
              alt={tool.name}
              className="relative w-full h-full object-contain p-2 drop-shadow-[0_0_10px_rgba(150,224,114,0.3)]"
            />
          </div>
        </div>
        
        {/* Tool Name */}
        <div className="relative">
          <h4 className="text-center text-sm font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#96E072] group-hover:to-white transition-all duration-500">
            {tool.name}
          </h4>
        </div>
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
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 via-[#96E072]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
        <div className="relative flex items-center bg-[#0A0F1E]/60 backdrop-blur-lg rounded-lg border border-[#96E072]/10 p-3 overflow-hidden group-hover:border-[#96E072]/30 transition-all duration-500">
          {/* Animated background line */}
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#96E072]/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000"></div>
          
          {/* Skill dot */}
          <div className="relative mr-3 transform transition-transform duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-[#96E072]/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative h-2 w-2 bg-[#96E072] rounded-full"></div>
          </div>
          
          {/* Skill text */}
          <span className="relative text-white/90 group-hover:text-white transition-colors duration-500">
            {skill}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function DataSkillsToolsEIE() {
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
    <section className="relative py-8 bg-gradient-to-b from-[#0A0F1E] via-[#0D1326] to-[#0A0F1E] overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0F1E]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#96E072]/5 via-transparent to-[#96E072]/5"></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#96E072]/10 rounded-full filter blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#96E072]/5 rounded-full filter blur-[120px] animate-float-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#96E072]/20 to-transparent border border-[#96E072]/20 text-[#96E072] text-sm font-medium mb-4">
            Accelerate Your Career
          </span>
          
          <h2 className="text-4xl font-bold mb-4">
            <span className="inline-block bg-gradient-to-r from-[#96E072] to-[#96E072]/80 text-transparent bg-clip-text">
              Skills & Tools
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Master the essential skills and tools used by top Data Analysts
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative inline-flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg"></div>
              <p className="relative text-2xl font-bold text-white">
                Tools You'll Master
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {dataAnalyticsTools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative inline-flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg"></div>
              <p className="relative text-2xl font-bold text-white">
                Skills You'll Develop
              </p>
            </div>
            
            <div className="space-y-4">
              {visibleSkills.map((skill, index) => (
                <SkillCard key={`${skill}-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
