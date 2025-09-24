import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
}

const SkillCard = ({ skill, index }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeInOut",
    }}
    className="group cursor-pointer"
  >
    <div className="p-2 bg-navy-900/90 border border-blue-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50">
      <div className="flex items-start space-x-4">
        <div className="text-2xl">{skill.icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{skill.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TabButton = ({ active, children, onClick }: TabButtonProps) => (
  <motion.button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      active
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
        : "bg-navy-800/50 text-gray-400 hover:text-white hover:bg-navy-800"
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
);

const ToolCard = ({ tool }: ToolCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-32 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full p-4 bg-gradient-to-br from-navy-900/90 to-navy-800/90 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-3">
              <img
                src={tool.image}
                alt={tool.name}
                className="h-12 w-12 object-contain filter brightness-100"
              />
              <h3 className="text-sm font-medium text-white text-center">
                {tool.name}
              </h3>
            </div>
          </div>
        </div>

        <div
          className="absolute w-full h-full backface-hidden rotate-y-180"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full p-4 bg-gradient-to-br from-blue-900/90 to-purple-900/90 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <div className="flex flex-col justify-center h-full">
              <p className="text-white text-sm text-center">
                {tool.description}
              </p>
              <span className="mt-2 text-xs text-blue-300 text-center">
                {tool.category}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const batchSize = 8;
  const totalBatches = Math.ceil(skills.length / batchSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch((prev) => (prev + 1) % totalBatches);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalBatches]);

  const currentSkills = skills.slice(
    currentBatch * batchSize,
    (currentBatch + 1) * batchSize
  );

  return (
    <div className="space-y-4 min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBatch}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="space-y-4"
        >
          {currentSkills.map((skill, index) => (
            <SkillCard
              key={`${currentBatch}-${skill.name}`}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function SkillsAndTools() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(tools.map((tool) => tool.category))];

  const filteredTools = tools.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <section className="relative py-24 min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Tools
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Master the essential skills and tools used by top Product Managers
          </motion.p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <TabButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </TabButton>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tools Section */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="mr-2">🛠️</span> Tools You'll Master
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="mr-2">💪</span> Skills You'll Develop
            </p>
            <SkillsSection />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
