import {  AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Skill, Tool } from "../../../../utils/types";
import { tools, skills } from "../../../../utils/constants";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => (
  <div
    
    className="group"
  >
    <div className="p-6 bg-[#0F0F0F] border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#5CB338]/50 hover:shadow-lg hover:shadow-[#5CB338]/5">
      <div className="flex items-start gap-4">
        <div className="text-3xl text-[#5CB338] group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-[#5CB338] transition-colors duration-300">
            {skill.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TabButton = ({ active, children, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-2.5 rounded-xl text-sm border border-[#5CB338] font-medium transition-all duration-300 ${
      active
        ? "bg-[#5CB338] text-black shadow-lg  shadow-[#5CB338]/20"
        : "bg-white/5 text-black"
    }`}
     
  >
    {children}
  </button>
);

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full p-6 bg-[#0F0F0F] rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-[#5CB338]/50 group-hover:shadow-lg group-hover:shadow-[#5CB338]/5">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#5CB338]/10 rounded-xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-3" />
            <div className="absolute inset-0 bg-[#5CB338]/5 rounded-xl transform rotate-3 transition-transform duration-300 group-hover:-rotate-6" />
            <img
              src={tool.image}
              alt={tool.name}
              className="relative w-12 h-12 object-contain transform transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-white font-medium text-center group-hover:text-[#5CB338] transition-colors duration-300">
            {tool.name}
          </p>
          <AnimatePresence>
            {isHovered && (
              <p
                
                className="text-gray-400 text-sm text-center"
              >
                {tool.description}
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function SkillsAndToolsEIE() {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Skills & Tools
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            Master Essential <span className="text-[#5CB338]">PM Skills</span>
          </h3>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <TabButton
            active={activeTab === "skills"}
            onClick={() => setActiveTab("skills")}
          >
            Skills You'll Learn
          </TabButton>
          <TabButton
            active={activeTab === "tools"}
            onClick={() => setActiveTab("tools")}
          >
            Tools You'll Master
          </TabButton>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "skills" ? (
            <div
              key="skills"
             
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          ) : (
            <div
              key="tools" 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {tools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
