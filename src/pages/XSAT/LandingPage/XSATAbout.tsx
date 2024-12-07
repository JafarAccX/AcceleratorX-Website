import React from "react";
import { Trophy, GraduationCap, TrendingUp, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { IconCertificate } from "@tabler/icons-react";

const features = [
  {
    icon: <Trophy className="w-8 h-8 text-cyan-400" />,
    title: "Test Your PM Skills",
    description:
      "Evaluate your aptitude in critical Product Management skills through our comprehensive assessment.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
    title: "Win Full Scholarships",
    description:
      "Win scholarships worth up to 100% for our flagship Product Management certification program.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
    title: "Accelerate Your Career",
    description:
      "Gain recognition, industry certificates, and exclusive access to top mentors.",
  },
  {
    icon: <IconCertificate className="w-8 h-8 text-blue-400" />,
    title: "Earn Recognition",
    description:
      "Stand out in the competitive product management industry with X-SAT recognition.",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Access Top Mentors",
    description:
      "Connect with mentors from companies like Tata, Walmart, and PayPal to guide your PM journey.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-400" />,
    title: "Shape Your Future",
    description:
      "Seize the opportunity to launch your product management career with X-SAT.",
  },
];

export const XSATAbout = () => {
  return (
    <section id="whyappear" className="relative bg-black overflow-hidden py-20">
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
            Why appear for{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              X{""} - SAT{""}
            </span>{" "}
            ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Shape Your Future. Seize the Opportunity.{" "}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black outline outline-blue-600 p-8 rounded-xl hover:bg-gray-750 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-cyan-400 mt-12 font-semibold"
        >
          Join 200+ aspiring product managers already registered for X-SAT.{" "}
        </motion.p> */}
      </div>
    </section>
  );
};
