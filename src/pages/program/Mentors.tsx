import React from "react";
import { motion } from "framer-motion";
import { Users, Linkedin } from "lucide-react";
import { mentors } from "../../utils/constants";

export default function Mentors() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with seasoned professionals who have transformed careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-500 transition-all duration-500">
                {/* Image Container */}
                <div className="h-3/4 overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* LinkedIn Link - Always Visible */}
                <div className="absolute top-4 right-4 z-20">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Overlay Content - Visible on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">
                      {mentor.role}
                    </p>

                    <div className="space-y-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Experience</span>
                        <span className="text-white font-medium">
                          {mentor.experience}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Transitions</span>
                        <span className="text-white font-medium">
                          {mentor.transitions}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Base Content - Visible by Default */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent group-hover:opacity-0 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-blue-400 font-medium">{mentor.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
