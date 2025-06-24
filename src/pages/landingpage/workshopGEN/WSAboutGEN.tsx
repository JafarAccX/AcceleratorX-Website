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
    // { name: "Slack", img: "/assets/n8n/slack.webp" },
    // { name: "Gmail", img: "/assets/n8n/gmail.webp" },
    // { name: "Google Sheets", img: "/assets/n8n/sheets.webp" },
    // { name: "Airtable", img: "/assets/n8n/airtable.webp" },
    // { name: "Notion", img: "/assets/n8n/notion.webp" },
    // { name: "Trello", img: "/assets/n8n/trello.webp" },
    // { name: "ClickUp", img: "/assets/n8n/clickup.webp" },
    // { name: "HubSpot", img: "/assets/n8n/hubspot.webp" },
    // { name: "Stripe", img: "/assets/n8n/stripe.webp" },
    // { name: "OpenAI", img: "/assets/n8n/openai.webp" },
    { name: "Make", img: "/make.webp" },
  ];

  return (
    <div className="relative bg-[#000] py-2 overflow-hidden mt-10  ">
      <div className=" p-4 flex items-center justify-center mb-20 text-blue-400 ">
        <div className="font-semibold tracking-wider text-xl md:text-3xl">
          Bonus: Get our ready-to-use templates & shortcuts.
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image Section */}
          {/* <motion.div
            className="w-full flex-col gap-4 lg:w-2/5 top-8 h-fit relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 max-w-[400px] mx-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#0A1B33]/40 z-10 pointer-events-none rounded-2xl" />
            <video
              autoPlay
              muted
              controls
              playsInline
              className="w-full h-full max-h-[700px]  mx-auto object-fill z-0 rounded-2xl"
            >
              <source src="/assets/videos/n8n.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div> */}

          <motion.div
          // ref={toolsRef}
          // className="bg-[#111111] rounded-2xl shadow-lg p-6 border border-gray-800"
          // {...fadeInUp}
          >
            {/* <h2 className="text-2xl font-bold text-white mb-6">Tools You'll Learn</h2> */}
            <div className="relative overflow-hidden">
              {/* <motion.div
                className="flex  "
                // initial={{ opacity: 0 }}
                // animate={{ opacity: isInView ? 1 : 0 }}
                // transition={{ duration: 0.5 }}
              > */}
              {/* <motion.div
                className="flex flex-wrap gap-4 px-4"
                // animate={{
                //   x: [0, -100 * allTools.length],
                // }}
                // transition={{
                //   x: {
                //     repeat: Infinity,
                //     repeatType: "loop",
                //     duration: allTools.length * 2,
                //     ease: "linear",
                //   },
                // }}
              >
                  {[...allTools, ...allTools].map((tool, index) => ( 
                
                  <motion.div
                    key={index}
                    // className="flex-shrink-0 w-20 h-20 bg-[#1A1A1A] rounded-xl shadow-sm hover:shadow-md transition-all p-3 flex flex-col items-center justify-center gap-1 border border-gray-800/30"
                    // whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg">
                      <img src={tool.img} alt={tool.name} className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-[10px] font-medium text-gray-300 text-center line-clamp-1">{tool.name}</p>
                  </motion.div>
                ))}
              </motion.div> */}
              {/* </motion.div> */}
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="w-full space-y-8"
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
                  Make.com vs n8n
                </motion.h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="bg-gradient-to-r bg-[#111111] from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div className="flex flex-col items-start gap-3 mb-4" whileHover={{ gap: "0.875rem" }}>
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg">
                          <img src={"/make.webp"} alt={"make.com"} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="font-semibold text-white">Make.com</h3>
                      </motion.div>
                      <ul className="space-y-3">
                        {[
                          "No code. Drag & drop UI",
                          "Super fast – Start automating in minutes",
                          "Marketers, Founders, SMBs",
                          "1000+ apps pre-built",
                          "Free + Affordable paid plans",
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
                      <motion.div className="flex flex-col items-start gap-3 mb-4" whileHover={{ gap: "0.875rem" }}>
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg">
                          <img
                            src={"/assets/genAITools/n8n-seeklogo.png"}
                            alt={"n8n"}
                            className="w-12 h-12 object-scale-down"
                          />
                        </div>
                        <h3 className="font-semibold text-white">n8n</h3>
                      </motion.div>
                      <ul className="space-y-3">
                        {[
                          "Low-code. Needs some technical setup",
                          "Requires hosting or tech configuration",
                          "Developers, Tech-Savvy Automators",
                          "Fewer native apps, but highly customizable",
                          "Free (self-hosted), Paid cloud version",
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

            {/* Certificate Section */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutGEN;
