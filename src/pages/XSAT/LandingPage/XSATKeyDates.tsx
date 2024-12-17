import React from "react";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const dates = [
  {
    event: "Registration Opens",
    date: "16th December 2024",
    time: "10:00 AM IST",
  },
  {
    event: "Registration Closes",
    date: "2nd January 2025",
    time: "11:59 PM IST",
  },
  {
    event: "Exam Date",
    date: "5 - 7 January 2025",
    time: "9:00 AM - 12:00 PM IST",
  },
];

export const XSATKeyDates = () => {
  return (
    <section id="dates" className="relative bg-black overflow-hidden py-20">
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
          <h2 className="text-4xl font-bold text-white mb-6">Key Dates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mark your calendar with these important dates for XSAT 2024
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black p-8 rounded-xl border border-blue-700"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {item.event}
              </h3>
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-white">{item.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-white">{item.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
