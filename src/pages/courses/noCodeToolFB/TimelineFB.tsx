import { motion } from "framer-motion";
import { useState } from "react";
import { TimelineItem } from "../nocodeTool/components/TimelineItem";

const timelineData = [
  {
    weeks: "Week 1-2",
    title: "No-code foundations",
    details: [
      "Introduction to no-code philosophy",
      "Understanding visual development",
      "Basic website structure",
      "Design principles for web",
      "Component-based thinking",
    ],
  },
  {
    weeks: "Week 3-4",
    title: "Build with Webflow",
    details: [
      "Webflow interface mastery",
      "Creating responsive layouts",
      "Dynamic content management",
      "Custom interactions",
      "Advanced animations",
    ],
  },
  {
    weeks: "Week 5-6",
    title: "Mobile app creation",
    details: [
      "Mobile-first design approach",
      "App navigation patterns",
      "Database integration",
      "API connections",
      "Testing and optimization",
    ],
  },
  {
    weeks: "Week 7-8",
    title: "Advanced features",
    details: [
      "Complex feature implementation",
      "Project planning",
      "Deployment strategies",
      "Performance optimization",
      "Final project showcase",
    ],
  },
];

const TimelineFB = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.h1
          className="text-4xl font-bold text-white text-center mb-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>✨</span> What Will You Learn
        </motion.h1>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-0 w-0.5 h-full bg-blue-500/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
          />

          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineFB;
