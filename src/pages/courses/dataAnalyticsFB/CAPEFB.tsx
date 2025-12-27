import { Lightbulb, Calculator, ClipboardCheck, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const capeSteps = [
  {
    icon: <Lightbulb className="h-6 w-6 text-blue-400" />,
    title: "Data Fundamentals",
    description: "Organize raw data into actionable insights.",
    duration: "Weeks 1–3",
  },
  {
    icon: <BarChart className="h-6 w-6 text-blue-400" />,
    title: "Visual Storytelling",
    description: "Make data speak through compelling visuals.",
    duration: "Weeks 4–6",
  },
  {
    icon: <Calculator className="h-6 w-6 text-blue-400" />,
    title: "Analytical Skills",
    description: "Apply statistics to uncover hidden insights.",
    duration: "Weeks 7–9",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-blue-400" />,
    title: "CAP Project",
    description: "Complete a custom project to showcase your data skills.",
    duration: "Weeks 10–13",
  },
];

export default function CAPEFB() {
  return (
    <div className="relative py-32 overflow-hidden bg-[#0B1120]" id="bydp">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-blue-400 text-lg font-semibold mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Learning Journey
          </motion.span>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text mb-6">
            Build Your CAP Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A Portfolio That Speaks for You – Build Skills That Stand Out
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capeSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-[#0F172A] border border-blue-500/10 hover:border-blue-400/50 transition-all duration-500 group backdrop-blur-sm hover:transform hover:-translate-y-2"
            >
              <div className="inline-block p-4 bg-blue-500/10 rounded-2xl mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-xl filter blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative z-10">{step.icon}</div>
                </div>
              </div>
              <p className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
                {step.title}
              </p>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <p className="text-sm text-blue-400 font-medium">{step.duration}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl bg-[#0F172A] border border-blue-500/10"
        >
          <p className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
            What You'll Achieve
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">
                Portfolio
              </div>
              <p className="text-gray-400">A real product in your portfolio</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">
                Experience
              </div>
              <p className="text-gray-400">
                Hands-on product development experience
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">
                Network
              </div>
              <p className="text-gray-400">Connect with industry experts</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
