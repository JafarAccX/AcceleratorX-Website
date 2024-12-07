import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Brain,
  Trophy,
  Users,
  Briefcase,
  BarChart2,
  Sparkles,
  Star,
} from "lucide-react";

const bentoItems = [
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: "What is AX-SAT?",
    description:
      "A pioneering nationwide scholarship aptitude test to identify and support aspiring product management professionals.",
    className:
      "md:col-span-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20",
  },
  {
    icon: <Target className="w-8 h-8 text-purple-400" />,
    title: "Test Format",
    description:
      "60-minute online assessment featuring real-world product scenarios and problem-solving challenges.",
    className:
      "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20",
  },
  {
    icon: <Brain className="w-8 h-8 text-pink-400" />,
    title: "Skills Tested",
    description:
      "Product Sense, User-Centric Thinking, Market Analysis, Guesstimates and more.",
    className:
      "bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20",
  },
  {
    icon: <Trophy className="w-8 h-8 text-orange-400" />,
    title: "Scholarships",
    description: "Win exciting cash prizes and scholarship more than 1 Cr",
    className:
      "md:row-span-2 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20",
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Mentorship",
    description:
      "Learn from industry veterans and mentors from leading companies like Tata, Walmart, and PayPal.",
    className:
      "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    title: "Career Impact",
    description:
      "Build a career in product management with industry recognition and placement opportunities.",
    className:
      "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-indigo-400" />,
    title: "Industry Backing",
    description:
      "Supported by leaders in product management and top tech organizations.",
    className:
      "bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-violet-400" />,
    title: "Why X-SAT?",
    description:
      "The only nationwide test to evaluate real-world product management potential and aptitude.",
    className:
      "md:col-span-2 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20",
  },
  {
    icon: <Star className="w-8 h-8 text-emerald-400" />,
    title: "Success Stories",
    description:
      "85% of certified candidates secure product management roles within 1 month of completing the course.",
    className:
      "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20",
  },
];

export const XSATInfo = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full md:w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full md:w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            What is{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              X{""} - SAT{""}
            </span>{" "}
            ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a hand to start your professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform ${item.className}`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
