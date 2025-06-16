import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Target } from "lucide-react";

const WSAboutGEN = () => {
  const toolsRef = useRef(null);
  const isInView = useInView(toolsRef, { once: false, margin: "-100px" });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const allTools = [
    { name: "Slack", img: "/assets/n8n/slack.webp" },
    { name: "Gmail", img: "/assets/n8n/gmail.webp" },
    { name: "Google Sheets", img: "/assets/n8n/sheets.webp" },
    { name: "Airtable", img: "/assets/n8n/airtable.webp" },
    { name: "Notion", img: "/assets/n8n/notion.webp" },
    { name: "Trello", img: "/assets/n8n/trello.webp" },
    { name: "ClickUp", img: "/assets/n8n/clickup.webp" },
    { name: "HubSpot", img: "/assets/n8n/hubspot.webp" },
    { name: "Stripe", img: "/assets/n8n/stripe.webp" },
    { name: "OpenAI", img: "/assets/n8n/openai.webp" },
  ];

  return (
    <div className="relative bg-[#000] py-2 overflow-hidden mt-10  ">
      <div className=" p-4 flex items-center justify-center mb-20 bg-gradient-to-r from-blue-500/20 to-green-500/20">
        <div className="font-semibold tracking-wider text-xl md:text-3xl text-yellow-500  ">
          Learn to Build Advance to Advance Flows
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Image Section */}
          <motion.div
            className="w-full flex-col gap-4 lg:w-2/5  top-8 h-fit relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="/ai.jpg" alt="AI Workshop" className="  rounded-2xl shadow-2xl" />
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="w-full lg:w-3/5 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* About Section */}
            <motion.div className=" " {...fadeInUp}>
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg px-4 py-2 mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-blue-400 font-medium flex items-center gap-2"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      ⚡
                    </motion.span>
                    Live Workshop
                  </motion.span>
                </motion.div>

                <motion.h2
                  className="text-3xl font-bold text-white mb-6"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  Streamline Your Workflow: Automate Daily Tasks with Generative AI Tools!{" "}
                </motion.h2>

                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-white/[0.05] to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      Join our hands-on workshop on{" "}
                      <motion.span className="font-semibold text-blue-400" whileHover={{ scale: 1.05 }}>
                        June 15, 2025
                      </motion.span>{" "}
                      at{" "}
                      <motion.span className="text-blue-400" whileHover={{ scale: 1.05 }}>
                        11:30 AM
                      </motion.span>
                      . Learn How to Automate Your Daily Workflow Using AI in Minutes!
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="bg-gradient-to-r bg-[#111111] from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div className="flex items-center gap-3 mb-4" whileHover={{ gap: "0.875rem" }}>
                        <motion.div
                          className="p-2 bg-blue-500/10 rounded-lg"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <Brain className="w-5 h-5 text-blue-400" />
                        </motion.div>
                        <h3 className="font-semibold text-white">Workshop Highlights</h3>
                      </motion.div>
                      <ul className="space-y-3">
                        {[
                          "Live AI Tool Demonstrations",
                          "Step-by-Step Guidance",
                          "Interactive Q&A Session",
                          "Practice Exercises",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-2 text-gray-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span className="text-xs bg-blue-500/20 p-1 rounded" whileHover={{ scale: 1.1 }}>
                              {String(index + 1).padStart(2, "0")}
                            </motion.span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-r bg-[#111111] rounded-2xl shadow-lg from-green-500/5 to-transparent p-6   border border-green-900/20"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(34, 197, 94, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div className="flex items-center gap-3 mb-4" whileHover={{ gap: "0.875rem" }}>
                        <motion.div
                          className="p-2 bg-green-500/10 rounded-lg"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <Target className="w-5 h-5 text-green-400" />
                        </motion.div>
                        <h3 className="font-semibold text-white">What You'll Learn</h3>
                      </motion.div>
                      <ul className="space-y-3">
                        {[
                          "AI-Powered Workflow Automation",

                          "Smart Task Management with AI",

                          "Effortless Email & Document Automation",

                          "AI-Driven Research & Analysis",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-2 text-gray-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span className="text-xs bg-green-500/20 p-1 rounded" whileHover={{ scale: 1.1 }}>
                              {String(index + 1).padStart(2, "0")}
                            </motion.span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              ref={toolsRef}
              className="bg-[#111111] rounded-2xl shadow-lg p-6 border border-gray-800"
              {...fadeInUp}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Tools You'll Learn</h2>
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="flex gap-4 px-4"
                    animate={{
                      x: [0, -100 * allTools.length],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: allTools.length * 2,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...allTools, ...allTools].map((tool, index) => (
                      <motion.div
                        key={index}
                        className="flex-shrink-0 w-20 h-20 bg-[#1A1A1A] rounded-xl shadow-sm hover:shadow-md transition-all p-3 flex flex-col items-center justify-center gap-1 border border-gray-800/30"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                          <img src={tool.img} alt={tool.name} className="w-8 h-8 object-contain" />
                        </div>
                        <p className="text-[10px] font-medium text-gray-300 text-center line-clamp-1">{tool.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Certificate Section */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutGEN;
