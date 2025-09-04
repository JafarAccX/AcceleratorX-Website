import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLightbulb, FaRocket, FaCrown } from "react-icons/fa";
const DMCourseSyllabus = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [activeTooltip, setActiveTooltip] = useState(null);
  const phases = [
    {
      title: "Phase 1: Foundation",
      duration: "4 weeks",
      icon: /* @__PURE__ */ jsx(FaLightbulb, { className: "w-6 h-6" }),
      description: "Master the fundamentals of digital marketing and AI integration",
      topics: [
        {
          name: "Digital Marketing Fundamentals",
          tooltip: "Learn core concepts, channels, and strategies of digital marketing"
        },
        {
          name: "Understanding AI in Marketing",
          tooltip: "Explore how AI is transforming the marketing landscape"
        },
        {
          name: "Data Analytics Basics",
          tooltip: "Master essential data analysis techniques and tools"
        },
        {
          name: "Marketing Strategy Development",
          tooltip: "Create comprehensive marketing strategies using AI insights"
        }
      ]
    },
    {
      title: "Phase 2: Implementation",
      duration: "4 weeks",
      icon: /* @__PURE__ */ jsx(FaRocket, { className: "w-6 h-6" }),
      description: "Put theory into practice with hands-on campaign management",
      topics: [
        {
          name: "AI-Powered Campaign Creation",
          tooltip: "Build and launch campaigns using AI tools and automation"
        },
        {
          name: "Advanced Analytics & Tracking",
          tooltip: "Implement sophisticated tracking and analysis systems"
        },
        {
          name: "Automation Tools & Techniques",
          tooltip: "Master marketing automation platforms and workflows"
        },
        {
          name: "Performance Marketing Strategies",
          tooltip: "Optimize campaigns for maximum ROI and performance"
        }
      ]
    },
    {
      title: "Phase 3: Mastery",
      duration: "4 weeks",
      icon: /* @__PURE__ */ jsx(FaCrown, { className: "w-6 h-6" }),
      description: "Achieve expertise in advanced AI marketing techniques",
      topics: [
        {
          name: "Advanced AI Applications",
          tooltip: "Implement cutting-edge AI solutions in marketing"
        },
        {
          name: "Campaign Optimization",
          tooltip: "Master advanced optimization techniques using AI"
        },
        {
          name: "ROI Maximization",
          tooltip: "Develop strategies for maximizing marketing ROI"
        },
        {
          name: "Future Trends & Innovation",
          tooltip: "Stay ahead with emerging marketing technologies"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-10 bg-neutral-800 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-16 highlight-text", children: "Course Syllabus" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-yellow via-neon-blue to-neon-yellow hidden md:block" }),
          phases.map((phase, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              animate: inView ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.5, delay: index * 0.2 },
              className: "relative mb-16 last:mb-0",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 \n                           bg-neutral-900 rounded-full border-4 border-neon-yellow flex items-center \n                           justify-center z-10 hidden md:flex",
                    children: /* @__PURE__ */ jsx("div", { className: "text-neon-yellow", children: phase.icon })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`,
                    children: /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "card hover:border-neon-yellow/50 relative group",
                        whileHover: { scale: 1.02 },
                        transition: { duration: 0.2 },
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "md:hidden text-neon-yellow", children: phase.icon }),
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                className: "inline-block px-4 py-2 bg-neon-yellow/10 text-neon-yellow \n                                     rounded-full text-sm font-mono font-bold",
                                children: phase.duration
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-neutral-100 mb-2", children: phase.title }),
                          /* @__PURE__ */ jsx("p", { className: "text-neutral-100/70 font-mono mb-6", children: phase.description }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: phase.topics.map((topic, topicIndex) => /* @__PURE__ */ jsxs(
                            "li",
                            {
                              className: "relative",
                              onMouseEnter: () => setActiveTooltip(`${index}-${topicIndex}`),
                              onMouseLeave: () => setActiveTooltip(null),
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center text-neutral-100/70 font-mono group/item", children: [
                                  /* @__PURE__ */ jsx(
                                    motion.span,
                                    {
                                      className: "w-2 h-2 bg-neon-yellow rounded-full mr-3",
                                      animate: { scale: [1, 1.2, 1] },
                                      transition: { duration: 1, repeat: Infinity }
                                    }
                                  ),
                                  topic.name,
                                  /* @__PURE__ */ jsx("div", { className: "ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity", children: "ℹ️" })
                                ] }),
                                /* @__PURE__ */ jsx(AnimatePresence, { children: activeTooltip === `${index}-${topicIndex}` && /* @__PURE__ */ jsx(
                                  motion.div,
                                  {
                                    initial: { opacity: 0, y: 10 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: 10 },
                                    className: "absolute left-0 top-full mt-2 p-3 bg-neutral-900 rounded-lg \n                                         border border-neon-yellow/30 text-sm text-neutral-100/90 \n                                         font-mono z-50 w-64 shadow-lg",
                                    children: topic.tooltip
                                  }
                                ) })
                              ]
                            },
                            topicIndex
                          )) })
                        ]
                      }
                    )
                  }
                )
              ]
            },
            index
          ))
        ] })
      ]
    }
  ) }) });
};
export {
  DMCourseSyllabus as default
};
