import React from "react";
import { Lightbulb, BarChart3, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
    title: "Problem Solving",
    description:
      "Turn challenges into opportunities and drive impactful results.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
    title: "Strategic Thinking",
    description: "Balance priorities while keeping long-term goals in focus.",
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    title: "Empathy",
    description:
      "Understand user needs to deliver meaningful, impactful solutions.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Teamwork",
    description: "Collaborate effectively to drive success as a team leader.",
  },
];

export const PMSkills = () => {
  return (
    <section id="skills" className="relative bg-black overflow-hidden py-20">
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
            How{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              X{""} - SAT{""}
            </span>{" "}
            Benefits Aspiring Entrepreneurs & Aspiring Product Managers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Product Managers excel with a unique mix of skills. How do you
            measure up?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black outline outline-blue-900 p-8 rounded-xl hover:bg-gray-850 transition-colors"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Register Now and Showcase Your Potential
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};
