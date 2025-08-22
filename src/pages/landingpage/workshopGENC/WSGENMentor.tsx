import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Award, Sparkles, GraduationCap, Server, Github } from "lucide-react";

const WSGENCMentor = () => {
  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Meet Your Instructor
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          {/* Mentor Card */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Mentor Image */}
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-indigo-500/30">
                  <img
                    src="/assets/mentor/prashant.webp"
                    alt="Prashant Sahatiya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <a
                    href="https://www.linkedin.com/in/prashant-sahatiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Mentor Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Prashant Sahatiya
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Server className="w-4 h-4" />
                    LangChain Specialist
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Github className="w-4 h-4" />
                    Open Source Contributor
                  </span>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <p>Ph.D. in Computer Science with expertise in LLMs and Vector Databases</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p>Built custom AI solutions using LangChain for multiple enterprises</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p>Assistant Professor and AI Researcher at Parul University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WSGENCMentor;
