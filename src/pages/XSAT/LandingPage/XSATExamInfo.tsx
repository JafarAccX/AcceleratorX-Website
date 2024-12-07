import React from "react";
import { Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const examDetails = [
  {
    icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
    title: "Next Steps",
    details: [
      "Access AcceleratorX’s renowned Product Management Certification Program.",
      "Earn a digital certificate to boost your resume.",
      "Get featured on the leaderboard and join a network of aspiring professionals.",
    ],
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: "Rewards",
    details: [
      "1st Place: 100% Scholarship + Cash Prizes",
      "2nd Place: 75% Scholarship",
      "3rd Place: 50% Scholarship",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-pink-400" />,
    title: "Networking Opportunities",
    details: [
      "Join a community of aspiring product leaders.",
      "Connect with mentors and professionals in the product management industry.",
      "Access exclusive events and learning resources.",
    ],
  },
];

export const XSATExamInfo = () => {
  return (
    <section id="exam" className="relative bg-black overflow-hidden py-20">
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
            What’s Next After the Test{" "}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your Journey Begins Here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {examDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black backdrop-blur-sm hover:scale-105 transition-transform  outline-dotted outline-blue-600 p-8 rounded-xl"
            >
              <div className="mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {detail.title}
              </h3>
              <ul className="space-y-3">
                {detail.details.map((item, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
