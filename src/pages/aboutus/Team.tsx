import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          Meet Our Te<span className="text-indigo-500">am</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Our diverse team at Inno is united by a passion for innovation in Web3
          finance, dedicated to building a better financial future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="Team member"
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-white text-xl font-semibold">Ana Brooks</h3>
              <p className="text-gray-400">Co-Founder & CEO</p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="Team member"
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-white text-xl font-semibold">Ana Brooks</h3>
              <p className="text-gray-400">Co-Founder & CEO</p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="Team member"
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-white text-xl font-semibold">Ana Brooks</h3>
              <p className="text-gray-400">Co-Founder & CEO</p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
