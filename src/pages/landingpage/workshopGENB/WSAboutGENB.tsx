import { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
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
    <div className="bg-[#050A14] py-12 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 space-y-6">
            {/* About Card */}
            <div className="bg-[#0A1020] rounded-lg shadow-md border border-blue-900/20 overflow-hidden">
              <div className="p-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1 mb-4">
                  <span className="text-blue-400 text-sm font-medium">
                    Live Workshop
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Vibe Coding with GenAI: Build Wild Ideas Without Writing Code
                </h2>

                {/* Workshop Info */}
                <div className="bg-[#111827] rounded-md p-4 mb-5 border border-blue-500/10">
                  <p className="text-gray-300">
                    Join our creative hands-on workshop on{" "}
                    <span className="font-semibold text-blue-400">
                      11th April, 2025
                    </span>{" "}
                    at <span className="text-blue-400">07:30 PM</span>. Learn
                    how to bring your wildest app ideas to life using GenAI tools
                    that write code for you - no programming experience required!
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Workshop Highlights */}
                  <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-blue-500/10 rounded-md">
                        <Brain className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">
                        Creative Workshop Highlights
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Create Apps & Websites Without Coding",
                        "Hands-on Experience with Creative GenAI Tools",
                        "Turn Your Unique Ideas into Working Prototypes",
                        "Learn the 'Vibe Coding' Approach to Building",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-xs bg-blue-500/20 p-1 rounded-sm">
                            {index + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You'll Learn */}
                  <div className="bg-[#111827] p-4 rounded-md border border-green-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-green-500/10 rounded-md">
                        <Target className="w-4 h-4 text-green-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">
                        What You'll Learn
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "How to describe your app ideas to GenAI tools in ways they can turn into working code",
                        "Techniques for designing UI/UX without touching HTML or CSS",
                        "Building functional apps and websites through creative prompting",
                        "Bringing your wildest app ideas to life without programming knowledge",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-xs bg-green-500/20 p-1 rounded-sm">
                            {index + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Tools Section - Simplified */}
            <div
              ref={toolsRef}
              className="bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20"
            >
              <h2 className="text-xl font-bold text-white mb-4">
                Creative Tools You'll Master
              </h2>
              <div className="relative overflow-hidden">
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-3 px-2"
                    animate={{
                      x: [0, -80 * allTools.length],
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
                      <div
                        key={index}
                        className="flex-shrink-0 w-16 h-16 bg-[#111827] rounded-md p-2 flex flex-col items-center justify-center gap-1 border border-gray-800/30"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-md">
                          <img
                            src={tool.img}
                            alt={tool.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <p className="text-[9px] font-medium text-gray-300 text-center line-clamp-1">
                          {tool.name}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certificate Only */}
          <div className="w-full lg:w-2/5 space-y-6">
            {/* Certification Card */}
            <div className="bg-gradient-to-r from-blue-900/60 to-green-900/60 rounded-lg overflow-hidden shadow-md">
              <div className="p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <FaCertificate className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Certification Included</h3>
                </div>
                <p className="text-gray-200 mb-3 text-sm">
                  Upon completion of the workshop, you'll receive a professional certificate confirming your ability to create functional applications and websites without writing code using GenAI tools.
                </p>
                <p className="text-gray-200 mb-3 text-sm">
                  Earn an industry-recognized certificate showcasing your AI
                  workflow automation skills!
                </p>
                <div className="bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10">
                  ⚠️ Only those who attend the complete automation workshop will
                  receive the official certification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutGENB;
