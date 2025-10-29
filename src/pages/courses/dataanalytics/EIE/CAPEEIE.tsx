import { Lightbulb, Calculator, ClipboardCheck, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const capeSteps = [
  {
    icon: <Lightbulb className="h-6 w-6 text-[#96E072]" />,
    title: "Data Fundamentals",
    description: "Transform raw data into actionable insights using AI-assisted data processing and modern analytics tools.",
    duration: "",
  },
  {
    icon: <BarChart className="h-6 w-6 text-[#96E072]" />,
    title: "Visual Storytelling",
    description: "Turn complex datasets into engaging, interactive visuals through AI-powered storytelling techniques.",
    duration: "",
  },
  {
    icon: <Calculator className="h-6 w-6 text-[#96E072]" />,
    title: "Analytical Skills",
    description: "Use AI-driven statistical methods to identify patterns, forecast trends, and make smarter decisions as data analyst.",
    duration: "",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-[#96E072]" />,
    title: "CAP Project",
    description: "Bring it all together in a custom AI-integrated project that demonstrates your data expertise and creativity.",
    duration: "",
  },
];

export default function CAPEEIE() {
  return (
    <div className="relative py-16 overflow-hidden bg-white" id="bydp">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] animate-pulse">
          <div className="absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] animate-pulse delay-1000">
          <div className="absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform -rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="relative inline-block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/60 to-[#1A5D1A]/30 rounded-full blur opacity-75"></div>
            <span className="relative text-[#1A5D1A] text-lg font-semibold px-6 py-2 rounded-full border border-[#1A5D1A]/20">
              Your Learning Journey
            </span>
          </motion.div>

          <div className="relative mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/20 to-transparent blur-lg opacity-50"></div>
            <h2 className="relative text-5xl font-bold text-[#1A5D1A] text-transparent bg-clip-text pb-3">
              Build Your Data Analyst Portfolio
            </h2>
          </div>

          <p className="mt-6 text-xl text-black max-w-2xl mx-auto backdrop-blur-sm">
            Create a portfolio that speaks for you, showcasing the real-world data analytics skills that gets you hired.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {capeSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              {/* Card content */}
              <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] border border-[#96E072]/20 group-hover:border-[#96E072]/40 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-2">
                {/* Icon container with glow */}
                <div className="relative mb-4 transform-gpu transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute -inset-4 bg-[#96E072]/10 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-[#96E072]/20 to-[#96E072]/5 p-4 rounded-full">
                    <div className="relative z-10">{step.icon}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-2">{step.description}</p>
                <p className="text-sm text-[#96E072] font-medium">{step.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Section glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-3xl blur opacity-50"></div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] border border-[#96E072]/20 backdrop-blur-sm">
            <div className="mb-8">
              <p className="text-3xl font-bold text-center bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text pb-2">
                What You'll Achieve
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Portfolio",
                  description: "Build a real, job-ready AI Data Analytics project that showcases your skills.",
                },
                {
                  title: "Experience",
                  description: "Gain hands-on experience solving real business challenges using AI-powered data analytics with Data Analysts working in top product companies.",
                },
                {
                  title: "Network",
                  description: "Grow your professional network by connecting with mentors and industry experts.",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#96E072]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text mb-4 pb-1">
                        {achievement.title}
                      </div>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
