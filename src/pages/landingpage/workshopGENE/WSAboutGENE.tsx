import { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

const WSAboutGENE = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  const toolsRef = useRef(null);

  const allTools = [
    { name: "Chat-GPT", img: "/assets/genAITools/gpt4.webp" },
    { name: "DeepSeek", img: "/assets/genAITools/deepseek.webp" },
    { name: "LLaMA", img: "/assets/genAITools/ollama.webp" },
    { name: "Falcon", img: "/assets/genAITools/falcon.webp" },
    { name: "LangChain", img: "/assets/genAITools/langchain.webp" },
    { name: "CrewAI", img: "/assets/genAITools/crewai.webp" },
    { name: "AutoGen", img: "/assets/genAITools/autogen.webp" },
    { name: "RAG", img: "/assets/genAITools/rag.webp" },
    { name: "Hugging Face", img: "/assets/genAITools/huggingface.webp" },
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
            <div className="bg-[#0A1020] rounded-lg shadow-md border border-green-900/20 overflow-hidden">
              <div className="p-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-md px-3 py-1 mb-4">
                  <span className="text-green-400 text-sm font-medium">Hybrid RAG Agent Development Workshop</span>
                </div>

                {/* Title */}
                {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-4"> AI Automation Workshop: Learn n8n by Doing
                </h2> */}

                {/* Workshop Info */}

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Workshop Highlights */}
                  <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-blue-500/10 rounded-md">
                        <Brain className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">Workshop Highlights</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Learn how hybrid retrieval combines sparse (BM25) and dense (embeddings) methods for superior results.",
                        "Watch real examples of end-to-end hybrid RAG workflows with multiple data sources.",
                        "Explore tools to build advanced RAG systems that handle complex, multi-faceted queries.",
                        "Set up your first hybrid RAG agent during the workshop with hands-on coding.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-xs bg-blue-500/20 p-1 rounded-sm">{index + 1}</span>
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
                      <h3 className="font-semibold text-white text-lg">What You'll Learn</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "How to implement sparse retrieval (BM25) and dense retrieval (embeddings) techniques.",
                        "How to combine multiple retrieval methods for optimal hybrid performance.",
                        "How to connect vector databases and traditional search engines for hybrid RAG.",
                        "How to build a scalable RAG system that handles complex, multi-domain queries.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-xs bg-green-500/20 p-1 rounded-sm">{index + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full mt-5 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Tools Section - Simplified */}
            <div ref={toolsRef} className="bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20">
              <p className="text-xl font-bold text-white mb-4">Creative Tools You'll Master</p>
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
                          <img src={tool.img} alt={tool.name} className="w-6 h-6 object-contain" />
                        </div>
                        <p className="text-[9px] font-medium text-gray-300 text-center line-clamp-1">{tool.name}</p>
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
                  Upon completion of the workshop, you'll receive a professional certificate confirming your ability to
                  build hybrid RAG agents using advanced retrieval techniques and vector databases.
                </p>
                <p className="text-gray-200 mb-3 text-sm">
                  Earn an industry-recognized certificate showcasing your hybrid RAG development skills!
                </p>
                <div className="bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10">
                  ⚠️ Only those who attend the complete automation workshop will receive the official certification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutGENE;
