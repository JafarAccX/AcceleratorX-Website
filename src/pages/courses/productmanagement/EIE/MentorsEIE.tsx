import React from "react";
import { motion } from "framer-motion";
import { Users, Linkedin } from "lucide-react";
import { mentors } from "../../../../utils/constants";

export default function MentorsEIE() {
  return (
    <section id="mentors" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5CB338]/10">
              <Users className="w-8 h-8 text-[#5CB338]" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Learn from <span className="text-[#5CB338]">Industry Experts</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with seasoned professionals who have transformed careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-[#0F0F0F] rounded-2xl border border-white/10 group-hover:border-[#5CB338]/50 transition-all duration-500 overflow-hidden group-hover:shadow-lg group-hover:shadow-[#5CB338]/10 group-hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-contain object-center transform transition-transform duration-700 scale-110 group-hover:scale-125"
                  />
                </div>

                {/* Company Badge - Slides in from left */}
                <div className="absolute top-4 left-0 z-20 transform -translate-x-full group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#5CB338]/10 backdrop-blur-md border border-[#5CB338]/20 rounded-lg px-3 py-1.5">
                    <span className="text-[#5CB338] text-sm font-medium">
                      {mentor.company}
                    </span>
                  </div>
                </div>

                {/* LinkedIn Button - Slides in from right */}
                <div className="absolute top-4 right-0 z-20 transform translate-x-full group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5CB338] hover:bg-[#5CB338]/80 text-white px-4 py-1.5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm group/btn"
                  >
                    <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Connect</span>
                  </a>
                </div>

                {/* Content Section */}
                <div className="relative p-6 z-20">
                  {/* Name and Role */}
                  <div className="mb-6 transform transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#5CB338] transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-[#5CB338] font-medium">{mentor.role}</p>
                  </div>

                  {/* Details - Fade in on hover */}
                  <div className="space-y-3 transform transition-all duration-500">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-gray-400 text-sm">Experience</span>
                      <span className="text-white text-sm font-medium">
                        {mentor.experience}
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-gray-400 text-sm">Transitions</span>
                      <span className="text-white text-sm font-medium">
                        {mentor.transitions}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
