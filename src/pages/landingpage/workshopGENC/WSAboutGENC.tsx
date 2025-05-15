import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

const WSAboutGENC = () => {
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
  // const toolsRef = useRef(null);
  // const isInView = useInView(toolsRef, { once: false, margin: "-100px" });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // const allTools = [
  //   { name: "LangChain", img: "/assets/genAITools/langchain.png" },
  //   { name: "Mistral AI", img: "/assets/genAITools/mistral.png" },
  //   { name: "Ollama", img: "/assets/genAITools/ollama.png" },
  //   { name: "LlamaIndex", img: "/assets/genAITools/llamaindex.png" },
  //   { name: "OpenAI", img: "/assets/genAITools/openai.png" },
  //   { name: "FAISS", img: "/assets/genAITools/faiss.png" },
  //   { name: "Chroma DB", img: "/assets/genAITools/chroma.png" },
  //   { name: "Hugging Face", img: "/assets/genAITools/huggingface.svg" },
  //   { name: "Streamlit", img: "/assets/genAITools/streamlit.png" },
  //   { name: "Docker", img: "/assets/genAITools/docker.png" },
  // ];

  return (
    <div className="relative bg-[#000] py-2 overflow-hidden mt-10 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 items-center justify-center ">
          {/* Left Content Section */}
          <motion.div
            className="w-full  sticky top-8 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img src="/ai.jpg" alt="AI Workshop" className="w-full rounded-2xl shadow-2xl" />

              {/* Price Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="text-blue-900 font-medium">"Build your personal AI that understands your data"</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right Image Section */}

          <motion.div
            className="w-full  space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* About Section */}
            <motion.div className="bg-[#111111] rounded-2xl shadow-lg " {...fadeInUp}>
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
                  Build and Deploy Your Personal AI Content Creator
                </motion.h2>

                <div className="space-y-6">
                  {/* <motion.div
                    className="bg-gradient-to-r from-white/[0.05] to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      Join our hands-on workshop on{" "}
                      <motion.span className="font-semibold text-blue-400" whileHover={{ scale: 1.05 }}>
                        16th April, 2025
                      </motion.span>{" "}
                      at{" "}
                      <motion.span className="text-blue-400" whileHover={{ scale: 1.05 }}>
                        07:30 PM
                      </motion.span>{" "}
                      Learn to build your own AI application using LangChain and open-source models. This workshop will
                      guide you through creating a personal knowledge assistant that can process your documents, learn
                      from your data, and respond to your questions with relevant information.
                    </p>
                  </motion.div> */}

                  <div className="grid grid-cols-1  gap-6">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900 "
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
                          "Hands-on project building a personal AI content creator",
                          "Use open-source tools and models for high-quality content generation",
                          "Customize the AI to match your tone, topics, and writing goals",
                          "Deploy your tool for use on desktop or cloud platforms",
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
                      className="bg-gradient-to-r from-green-500/5 to-transparent p-6 rounded-xl border border-green-900/20"
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
                          "LangChain fundamentals for building AI applications",
                          "Vector databases for storing and retrieving knowledge",
                          "Prompt engineering techniques for better AI responses",
                          "How to run open source models locally on your computer",
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

                  {/* Price Card */}
                  {/* <motion.div
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
                  </motion.div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-10 justify-center items-center gap-4">
        <button
          onClick={scrollToForm}
          className="block w-full   mx-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 max-w-60   transition-all duration-300 shadow-lg shadow-blue-500/25"
        >
          Register Now
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        {/* Company Info Card */}
        <motion.div className="mt-16 bg-[#111111] rounded-2xl shadow-lg p-6 border border-gray-800/30" {...fadeInUp}>
          <h3 className="text-xl font-bold text-white mb-4">About AcceleratorX</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            AcceleratorX, where innovation meets education. We're dedicated to transforming ambitious individuals into
            industry leaders through cutting-edge technology and personalized mentorship. At AcceleratorX, we are on a
            mission to shape visionary leaders who dare to redefine the future. We believe in harnessing ambition and
            transforming it into unstoppable momentum, turning ideas into action and dreams into impactful careers. Our
            commitment is to empower individuals with immersive, hands-on learning experiences that challenge limits,
            unlock potential, and open doors to a world of opportunity.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <img src="/assets/companylogo.png" alt="AcceleratorX" className="h-8" />
            <div className="h-8 w-px bg-gray-800/30"></div>
            <p className="text-sm text-gray-300">A2M Technologies PVT. LTD.</p>
          </div>
        </motion.div>
        {/* Certificate Section */}
        <motion.div className="relative overflow-hidden rounded-2xl" {...fadeInUp}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-900 opacity-90"></div>
          <div className="relative p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <FaCertificate className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Project & Certification Included</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Complete a real-world AI application project and earn an industry-recognized certificate upon completion
              of the workshop!
            </p>
            <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-sm text-gray-300">
                ⚠️ Only those who attend the workshop and complete the project will be eligible for the completion
                certificate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WSAboutGENC;
