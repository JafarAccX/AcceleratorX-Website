import React, { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WSAboutGEN = () => {
  const scrollToForm = () => {
    const form = document.getElementById('workshop-registration-form');
    if (form) {
      form.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
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
    { name: "Claude", img: "/assets/genAITools/claude.webp" },
    { name: "Gemini", img: "/assets/genAITools/gemini.webp" },
    { name: "GPT-4", img: "/assets/genAITools/gpt4.webp" },
    { name: "LangChain", img: "/assets/genAITools/langchain.png" },
    { name: "Midjourney", img: "/assets/genAITools/midjourney.webp" },
    { name: "Pika", img: "/assets/genAITools/pika.webp" },
    { name: "OpenAI API", img: "/assets/genAITools/openai-logomark.svg" },
    { name: "Hugging Face", img: "/assets/genAITools/huggingface.webp" },
    { name: "RAG (Retrieval-Augmented Generation)", img: "/assets/genAITools/rag.webp" },
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
                <h2 className="text-2xl font-bold text-white mb-4">
                  About this Masterclass
                </h2>
                <div className="space-y-6">
  <p className="text-gray-300 leading-relaxed">
    Join us for an exclusive online workshop,{" "}
    <span className="font-semibold text-blue-400">
      "Micro-Certification in Prompt Engineering"
    </span>
    on <span className="font-semibold text-blue-400">February 16, 2025</span> at <span>01:00 PM</span>. This immersive session will equip you with 
    the skills to craft effective AI prompts for various applications, enhancing AI-driven 
    automation, content creation, and decision-making.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-[#1A1A1A] p-4 rounded-xl border border-blue-900/30">
      <h3 className="font-semibold text-blue-400 mb-2">What You'll Learn</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>• Fundamentals of Prompt Engineering</li>
        <li>• Techniques to Optimize AI Responses</li>
        <li>• Crafting Prompts for Various AI Models</li>
        <li>• Enhancing Automation with AI-Generated Content</li>
        <li>• Practical Applications in Business, Marketing, and Productivity</li>
      </ul>
    </div>
    <div className="bg-[#1A1A1A] p-4 rounded-xl border border-green-900/30">
      <h3 className="font-semibold text-green-400 mb-2">Who Should Attend</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>• AI Enthusiasts & Developers</li>
        <li>• Content Creators & Marketers</li>
        <li>• Business Professionals & Entrepreneurs</li>
        <li>• Anyone Looking to Leverage AI for Productivity</li>
      </ul>
    </div>
    <button
                onClick={scrollToForm}
                className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Register Now
              </button>
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
                src="/assets/workshopCover/ai-chatbot.webp"
                alt="AI Workshop"
                className="w-full rounded-2xl shadow-2xl"
              />

              {/* Stats Cards */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%]">
                <div className="bg-[#111111] backdrop-blur-md rounded-xl p-6 shadow-lg grid grid-cols-3 gap-4 border border-gray-800/30">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">2hr</p>
                    <p className="text-sm text-gray-300">Duration</p>
                  </div>
                  <div className="text-center border-x border-gray-800/30">
                    <p className="text-3xl font-bold text-green-400">Live</p>
                    <p className="text-sm text-gray-300">Session</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">Q&A</p>
                    <p className="text-sm text-gray-300">Included</p>
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

export default WSAboutGEN;
