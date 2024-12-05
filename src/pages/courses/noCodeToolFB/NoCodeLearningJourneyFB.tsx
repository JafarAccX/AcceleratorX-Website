import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Workflow, Database, Palette } from "lucide-react";

interface LearningStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const learningSteps: LearningStep[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    description:
      "Master the art of creating responsive websites using Webflow that adapt seamlessly to any device.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Build functional mobile applications with Adalo, bringing your ideas to life on iOS and Android.",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Workflow Automation",
    description:
      "Streamline processes and boost productivity by creating powerful automations with Zapier.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Data Management",
    description:
      "Learn to effectively organize and manage data using Airtable's powerful database features.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Create stunning prototypes and design systems with Figma that users will love.",
    icon: <Palette className="w-8 h-8" />,
  },
];

const NoCodeLearningJourneyFB: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Learn the Skills to Bring Your Ideas to Life
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
            Follow our carefully crafted learning path to master the tools of
            modern digital creation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Journey Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400/30 to-blue-600/30 transform -translate-x-1/2" />

          {/* Learning Steps */}
          <div className="space-y-12 lg:space-y-24">
            {learningSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.03, translateY: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full max-w-md p-8 rounded-3xl shadow-2xl cursor-pointer transition-all duration-300 backdrop-blur-lg
                      ${
                        activeStep === step.id
                          ? "bg-gradient-to-br from-blue-600/90 to-blue-700/90 border border-blue-400/30"
                          : "bg-gradient-to-br from-blue-500/10 to-blue-700/20 border border-white/10"
                      }`}
                    style={{
                      boxShadow:
                        activeStep === step.id
                          ? "0 0 30px rgba(59, 130, 246, 0.3)"
                          : "0 0 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="flex items-center gap-5 mb-5">
                      <div
                        className={`p-4 rounded-2xl transition-colors duration-300 ${
                          activeStep === step.id
                            ? "bg-white/20 text-white"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-lg leading-relaxed transition-colors duration-300 ${
                        activeStep === step.id
                          ? "text-blue-50"
                          : "text-blue-100/70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoCodeLearningJourneyFB;
