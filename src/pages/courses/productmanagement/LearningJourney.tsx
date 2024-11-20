import { Tab } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { useState, useEffect, useRef } from "react";
import { weeklyData } from "../../../utils/constants";
import ProgressBar from "./ProgressBar";
import WeeklyContent from "./WeeklyContent";
import { Trophy } from "lucide-react";

export default function LearningJourney() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const scrollToWeek = (weekIndex: number) => {
    const tabElement = tabsContainerRef.current?.children[
      weekIndex
    ] as HTMLElement;
    if (tabElement) {
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if ((currentWeek - 1) % 3 === 2) {
        setCurrentWeek((prev) => Math.min(prev + 1, weeklyData.length));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentWeek]);

  useEffect(() => {
    const newStart = Math.floor((currentWeek - 1) / 3) * 3;
    setVisibleRange({
      start: newStart,
      end: Math.min(newStart + 3, weeklyData.length),
    });
    scrollToWeek(newStart);
  }, [currentWeek]);

  const handleTabChange = (index: number) => {
    setCurrentWeek(index + 1);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-white">What Will You </span>
          <span className="text-blue-400 relative">
            Learn
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <ProgressBar currentWeek={currentWeek} totalWeeks={weeklyData.length} />

        <Tab.Group onChange={handleTabChange} selectedIndex={currentWeek - 1}>
          <div className="glass-effect rounded-2xl p-1 shadow-xl mb-8">
            <Tab.List
              ref={tabsContainerRef}
              className="flex space-x-1 rounded-xl p-1 overflow-x-auto scroll-smooth hide-scrollbar"
            >
              {weeklyData.map((week, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    clsx(
                      "tab-button",
                      "focus:outline-none",
                      "px-4 py-2 text-sm font-medium",
                      "transition-all duration-200",
                      selected
                        ? "bg-white shadow text-black"
                        : "text-white hover:bg-white/[0.12]"
                    )
                  }
                >
                  Week {week.week}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <AnimatePresence mode="wait">
            <Tab.Panels>
              {weeklyData.map((week, idx) => (
                <Tab.Panel
                  key={idx}
                  className={clsx("rounded-xl focus:outline-none")}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    <WeeklyContent
                      title="Topics"
                      items={week.topics}
                      delay={0.1}
                      variant="topics"
                    />
                    <WeeklyContent
                      title="Skills"
                      items={week.skills}
                      delay={0.2}
                      variant="skills"
                    />
                    <WeeklyContent
                      title="Case Studies"
                      items={week.caseStudies}
                      delay={0.3}
                      variant="cases"
                    />
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </AnimatePresence>
        </Tab.Group>
        <div className="flex flex-row justify-center items-center gap-4 mt-4">
          <Trophy className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">
            Interview Session & Industry session every weekend
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
