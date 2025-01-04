import { Tab } from "@headlessui/react";

import { motion, AnimatePresence } from "framer-motion";

import clsx from "clsx";

import { useState, useEffect, useRef } from "react";

import { Trophy } from "lucide-react";

import { GraduationCap, BookOpen } from "lucide-react";

interface ProgressBarProps {
  currentWeek: number;

  totalWeeks: number;
}

const weeklyData = [
  {
    week: 1,

    module: "Foundations of Data Analysis",

    skills: [
      "Basic data analysis process",

      "Understanding data types",

      "Cleaning/sorting data in Excel",

      "Using basic Excel formulas",
    ],
  },

  {
    week: 2,

    module: "Foundations of Data Analysis",

    skills: [
      "Advanced Excel techniques (VLOOKUP, INDEX-MATCH)",

      "Creating pivot tables",

      "Building simple dashboards",
    ],
  },

  {
    week: 3,

    module: "Foundations of Data Analysis",

    skills: [
      "Principles of data visualization",

      "Introduction to Tableau and Power BI",

      "Creating basic visualizations",
    ],
  },

  {
    week: 4,

    module: "SQL for Data Analysis",

    skills: [
      "Writing basic SQL queries (SELECT, WHERE, ORDER BY)",

      "Filtering data",

      "Using conditional statements",
    ],
  },

  {
    week: 5,

    module: "SQL for Data Analysis",

    skills: [
      "Performing data aggregation (SUM, AVG, COUNT)",

      "Grouping data",

      "Joining tables (INNER JOIN, LEFT JOIN)",
    ],
  },

  {
    week: 6,

    module: "SQL for Data Analysis",

    skills: [
      "Using advanced SQL techniques (subqueries, CASE statements, window functions)",

      "Data manipulation",
    ],
  },

  {
    week: 7,

    module: "Statistics and Probability",

    skills: [
      "Descriptive statistics (mean, median, mode, variance, standard deviation)",

      "Summarizing data characteristics",
    ],
  },

  {
    week: 8,

    module: "Statistics and Probability",

    skills: [
      "Probability basics",

      "Hypothesis testing (t-tests, p-values)",

      "Interpreting statistical significance",
    ],
  },

  {
    week: 9,

    module: "Statistics and Feature Engineering",

    skills: [
      "Understanding correlation vs. causation",

      "Feature engineering basics (scaling, encoding)",

      "Creating usable features",
    ],
  },

  {
    week: 10,

    module: "Python for Data Analysis",

    skills: [
      "Python fundamentals (variables, data types, loops, functions)",

      "Basic scripting for data exploration",
    ],
  },

  {
    week: 11,

    module: "Python for Data Analysis",

    skills: [
      "Data manipulation using Pandas (DataFrames, Series)",

      "Data cleaning, filtering, and aggregation",
    ],
  },

  {
    week: 12,

    module: "Python for Data Analysis",

    skills: [
      "Creating basic and advanced visualizations using Matplotlib and Seaborn (heatmaps, box plots)",
    ],
  },

  {
    week: 13,

    module: "Python for Data Analysis",

    skills: [
      "Conducting exploratory data analysis (EDA)",

      "Identifying patterns",

      "Spotting outliers",
    ],
  },

  {
    week: 14,

    module: "Introduction to Machine Learning",

    skills: [
      "Basics of machine learning",

      "Supervised learning (linear regression, classification)",

      "Evaluating models",
    ],
  },

  {
    week: 15,

    module: "Advanced Business Intelligence",

    skills: [
      "Creating interactive dashboards in Tableau and Power BI",

      "Using filters, slicers, and drill-downs",
    ],
  },

  {
    week: 16,

    module: "AI-Powered Dashboards",

    skills: [
      "Integrating machine learning outputs into dashboards",

      "Designing predictive dashboards",
    ],
  },

  {
    week: 17,

    module: "Natural Language Processing (NLP)",

    skills: [
      "Basics of NLP",

      "Sentiment analysis",

      "Processing user feedback for actionable insights",
    ],
  },

  {
    week: 18,

    module: "Product Analytics Specialization",

    skills: [
      "Funnel analysis",

      "User journey mapping",

      "Calculating conversion metrics",

      "Identifying drop-offs",
    ],
  },

  {
    week: 19,

    module: "Product Analytics Specialization",

    skills: [
      "Time series forecasting (ARIMA, Prophet)",

      "Predicting DAU/MAU trends",

      "Interpreting forecast outputs",
    ],
  },

  {
    week: 20,

    module: "Product Analytics Specialization",

    skills: [
      "Customer segmentation (clustering, RFM analysis)",

      "Proposing personalized product strategies",
    ],
  },

  {
    week: 21,

    module: "Capstone Project",

    skills: [
      "Integrating all skills",

      "Conducting analysis",

      "Building ML models",

      "Creating dashboards",

      "Presenting actionable insights",
    ],
  },
];

const ProgressBar = ({ currentWeek, totalWeeks }: ProgressBarProps) => {
  const progress = (currentWeek / totalWeeks) * 100;

  return (
    <div className="w-full bg-white/10 rounded-full h-4 mb-8 overflow-hidden glass-effect">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-full bg-gradient-to-r from-[#1A5D1A] to-[#1F441E] relative"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9zdmc+')] opacity-20"></div>
      </motion.div>
    </div>
  );
};

// Array of tailwind background colors for skills

const skillColors = [
  "bg-[#1A5D1A]",
  "bg-[#1F441E]",
  "bg-[#C7DCA7]",
  "bg-[#E4EFE7]",
  "bg-[#1A5D1A]",
  "bg-[#1F441E]",
  "bg-[#C7DCA7]",
  "bg-[#E4EFE7]",
];

const getRandomColor = () => {
  return skillColors[Math.floor(Math.random() * skillColors.length)];
};

interface WeeklyContentProps {
  title: string;

  items: string[];

  delay: number;

  variant: "topics" | "skills";
}

const WeeklyContent = ({
  title,

  items,

  delay,

  variant,
}: WeeklyContentProps) => {
  const icons = {
    topics: BookOpen,

    skills: GraduationCap,
  };

  const Icon = icons[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect rounded-xl p-6 h-full bg-black/40"
    >
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-6 h-6 text-[#1A5D1A]" />}
        <h3 className="text-xl font-semibold text-[#E4EFE7]">{title}</h3>
      </div>

      {variant === "skills" ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + idx * 0.1 }}
              className="bg-[#1A5D1A]/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {item}
            </motion.span>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + idx * 0.1 }}
              className="flex items-center gap-2 text-[#E4EFE7]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5D1A]" />
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default function DataJourneyEIE() {
  const [currentWeek, setCurrentWeek] = useState(1);

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });

  const [isInitialMount, setIsInitialMount] = useState(true);

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
    if (isInitialMount) {
      setIsInitialMount(false);

      return;
    }

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
    <div className="relative py-16 px-0 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden bg-[#0B1120]">
      {/* Background decoration */}

      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A5D1A]/5 rounded-full filter blur-3xl"></div>

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1F441E]/5 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-12 relative z-10"
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-[#E4EFE7]">What Will You </span>

          <span className="text-[#1A5D1A] relative inline-block">
            Learn
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#1A5D1A]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <ProgressBar currentWeek={currentWeek} totalWeeks={weeklyData.length} />

        <Tab.Group onChange={handleTabChange} selectedIndex={currentWeek - 1}>
          <div className="glass-effect rounded-2xl p-0.5 sm:p-2 shadow-xl backdrop-blur-sm bg-[#1A5D1A]/5">
            <Tab.List
              ref={tabsContainerRef}
              className="flex space-x-1 sm:space-x-2 rounded-xl p-0.5 sm:p-1 overflow-x-auto scroll-smooth hide-scrollbar"
            >
              {weeklyData.map((week, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    clsx(
                      "tab-button rounded-lg",

                      "focus:outline-none ring-offset-2 ring-offset-[#1A5D1A] focus:ring-2",

                      "px-4 py-2.5 text-sm font-medium",

                      "transition-all duration-200 ease-in-out",

                      selected
                        ? "bg-[#E4EFE7] shadow-md text-[#1A5D1A]"
                        : "text-[#E4EFE7] hover:bg-[#1A5D1A]/[0.12] hover:text-[#E4EFE7]/90"
                    )
                  }
                >
                  Week {week.week}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <AnimatePresence mode="wait">
            <Tab.Panels className="mt-8">
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
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <WeeklyContent
                      title="Module"
                      items={[week.module]}
                      delay={0.1}
                      variant="topics"
                    />

                    <WeeklyContent
                      title="Topics"
                      items={week.skills}
                      delay={0.2}
                      variant="skills"
                    />
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </AnimatePresence>
        </Tab.Group>

        <div className="flex flex-row justify-center items-center gap-4 mt-8 glass-effect p-4 rounded-xl backdrop-blur-sm bg-[#1A5D1A]/5">
          <Trophy className="h-8 w-8 text-[#1A5D1A]" />
          <h1 className="text-xl sm:text-2xl font-bold text-[#E4EFE7]">
            Interview Session & Industry session every weekend
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
