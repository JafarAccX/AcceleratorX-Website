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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative bg-[#000] py-2 overflow-hidden mt-10  ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 items-center justify-center ">
          <img src="/langchain.jpg" alt="AI Workshop" className="  rounded-2xl shadow-2xl" />

          <motion.div
            className="w-full  space-y-8 col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* About Section */}
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
                Workshop Highlights
              </motion.h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1  gap-6">
                  <motion.div
                    className="bg-gradient-to-r bg-[#111111] from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900 "
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
                      <h3 className="font-semibold text-white">What You’ll Do:</h3>
                    </motion.div>
                    <ul className="space-y-3">
                      {[
                        "Explore Langchain through hands-on, beginner-friendly guidance",
                        "Build your own live AI-powered app – step by step",
                        "Understand how to structure smart workflows using AI tools",
                        "Access free AI tools, templates, and a roadmap to build more apps",
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
                      <h3 className="font-semibold text-white">What You’ll Learn:</h3>
                    </motion.div>
                    <ul className="space-y-3">
                      {[
                        "What AI-powered apps are and how Langchain fits in",
                        "How to connect large language models to real-world data",
                        "How to build and deploy your first Langchain-based app",
                        "Ways AI is changing tech careers and future opportunities",
                        "Top resources, tools, and communities to grow in AI development",
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
        </div>
      </div>
    </div>
  );
};

export default WSAboutGENC;
