import React from "react";
import { motion } from "framer-motion";
import DMTimer from "./DMTimer";

export const DMHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-neutral-900">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(226,255,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(226,255,50,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold highlight-text mb-6 leading-tight">
            Master Digital Marketing & Performance Marketing with AI-Powered
            Strategies
          </h1>

          <p className="text-xl md:text-2xl text-neutral-100/80 mb-12 max-w-3xl mx-auto font-mono">
            Learn advanced strategies, automation, and data-driven
            decision-making to optimize campaigns and drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="neon-button">Enroll Now</button>
            <button className="bg-transparent border-2 border-neon-yellow text-neon-yellow font-mono font-bold px-6 py-3 rounded-lg hover:bg-neon-yellow hover:text-neutral-900 transition-all duration-300 transform hover:-translate-y-1">
              Download Brochure
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="card flex flex-col items-center justify-center p-8"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-neon-yellow/10 rounded-2xl">
                <img
                  src="https://img.icons8.com/fluency/96/000000/certificate.png"
                  alt="Certification"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-mono font-bold text-neon-yellow mb-2">
                Industry Recognized
              </h3>
              <p className="text-2xl font-bold text-neutral-100">
                Certification
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="card flex flex-col items-center justify-center p-8"
            >
              <DMTimer className="text-4xl font-mono font-bold text-neon-yellow mb-4" />
              <p className="text-xl font-mono font-bold text-neutral-100">
                Early Bird Offer Ends In
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
