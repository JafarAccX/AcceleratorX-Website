import React, { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Brain, Target } from "lucide-react";

const WSAboutGENB = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error(
        'Form element not found with ID "workshop-registration-form"'
      );
    }
  };
  const toolsRef = useRef(null);
  const isInView = useInView(toolsRef, { once: false, margin: "-100px" });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const allTools = [
    { name: "GPT-4", img: "/assets/genAITools/gpt4.webp" },
    { name: "DeepSeek", img: "/assets/genAITools/deepseek.webp" },
    { name: "LLaMA", img: "/assets/genAITools/ollama.png" },
    { name: "Falcon", img: "/assets/genAITools/falcon.png" },
    { name: "LangChain", img: "/assets/genAITools/langchain.png" },
    { name: "CrewAI", img: "/assets/genAITools/crewai.webp" },
    { name: "AutoGen", img: "/assets/genAITools/autogen.jpeg" },
    { name: "RAG", img: "/assets/genAITools/rag.webp" },
    { name: "Hugging Face", img: "/assets/genAITools/huggingface.svg" },
    { name: "Zapier", img: "/assets/genAITools/zapier.webp" },
  ];


  return (
    <div className="relative bg-[#000] py-2 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Section */}
          <motion.div
            className="w-full lg:w-3/5 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* About Section */}
            <motion.div
              className="bg-[#111111] rounded-2xl shadow-lg border border-gray-800"
              {...fadeInUp}
            >
              <div className="p-6">
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
                  Build Intelligent Chatbots with AI Technologies
                </motion.h2>

                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-white/[0.05] to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      Join our hands-on workshop on{" "}
                      <motion.span
                        className="font-semibold text-blue-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        6th March, 2025
                      </motion.span>{" "}
                      at{" "}
                      <motion.span
                        className="text-blue-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        10:30 AM
                      </motion.span>
                      . Learn how to create intelligent chatbots that can transform communication and automate complex interactions.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900/20"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="flex items-center gap-3 mb-4"
                        whileHover={{ gap: "0.875rem" }}
                      >
                        <motion.div
                          className="p-2 bg-blue-500/10 rounded-lg"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <Brain className="w-5 h-5 text-blue-400" />
                        </motion.div>
                        <h3 className="font-semibold text-white">
                          Workshop Highlights
                        </h3>
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
                            <motion.span
                              className="text-xs bg-blue-500/20 p-1 rounded"
                              whileHover={{ scale: 1.1 }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </motion.span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-r from-green-500/5 to-transparent p-6 rounded-xl border border-green-900/20"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(34, 197, 94, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="flex items-center gap-3 mb-4"
                        whileHover={{ gap: "0.875rem" }}
                      >
                        <motion.div
                          className="p-2 bg-green-500/10 rounded-lg"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <Target className="w-5 h-5 text-green-400" />
                        </motion.div>
                        <h3 className="font-semibold text-white">
                          What You'll Learn
                        </h3>
                      </motion.div>
                      <ul className="space-y-3">
                        {[
                          "Conversational AI Design",
                          "Prompt Engineering Techniques",
                          "Integrating Large Language Models",
                          "Building Contextual Chatbots",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-2 text-gray-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span
                              className="text-xs bg-green-500/20 p-1 rounded"
                              whileHover={{ scale: 1.1 }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </motion.span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Price Card */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 p-6 rounded-xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-white mb-1"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Limited Time Offer{" "}
                        </motion.h3>
                      </div>
                    </div>
                    <motion.button
                      onClick={scrollToForm}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              ref={toolsRef}
              className="bg-[#111111] rounded-2xl shadow-lg p-6 border border-gray-800"
              {...fadeInUp}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Tools You'll Learn
              </h2>
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
                          <img
                            src={tool.img}
                            alt={tool.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <p className="text-[10px] font-medium text-gray-300 text-center line-clamp-1">
                          {tool.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Certificate Section */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              {...fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-900 opacity-90"></div>
              <div className="relative p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <FaCertificate className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Certification Included</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Earn an industry-recognized certificate upon completion of the
                  masterclass!
                </p>
                <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <p className="text-sm text-gray-300">
                    ⚠️ Please ensure accurate registration details as they will
                    appear on your certificate
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="w-full lg:w-2/5 sticky top-8 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src="/assets/ai.jpg"
                alt="AI Workshop"
                className="w-full rounded-2xl shadow-2xl"
              />

              {/* Price Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="text-blue-900 font-medium">
                  "Revolutionize Communication with AI-Powered Chatbots!"
                  </p>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">
                      Avail Now
                    </p>
                    <p className="text-sm text-gray-600">Limited Seats</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info Card */}
            <motion.div
              className="mt-16 bg-[#111111] rounded-2xl shadow-lg p-6 border border-gray-800/30"
              {...fadeInUp}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                About AcceleratorX
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                AcceleratorX, where innovation meets education. We're dedicated
                to transforming ambitious individuals into industry leaders
                through cutting-edge technology and personalized mentorship. At
                AcceleratorX, we are on a mission to shape visionary leaders who
                dare to redefine the future. We believe in harnessing ambition
                and transforming it into unstoppable momentum, turning ideas
                into action and dreams into impactful careers. Our commitment is
                to empower individuals with immersive, hands-on learning
                experiences that challenge limits, unlock potential, and open
                doors to a world of opportunity.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/assets/companylogo.png"
                  alt="AcceleratorX"
                  className="h-8"
                />
                <div className="h-8 w-px bg-gray-800/30"></div>
                <p className="text-sm text-gray-300">
                  A2M Technologies PVT. LTD.
                </p>
              </div>
              <div>
                <button
                  onClick={scrollToForm}
                  className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutGENB;
