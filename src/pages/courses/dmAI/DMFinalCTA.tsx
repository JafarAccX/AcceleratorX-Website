import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Timer from "./Timer";

const DMFinalCTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 highlight-text">
            Future-proof your career with AI-powered Digital Marketing
          </h2>
          <p className="text-xl mb-12 text-neutral-100/80 font-mono">
            Join thousands of successful marketers who have transformed their
            careers with our comprehensive course
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button"
            >
              Enroll Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-neon-yellow text-neon-yellow font-mono font-bold px-6 py-3 rounded-lg hover:bg-neon-yellow hover:text-neutral-900 transition-all duration-300"
            >
              Schedule Free Consultation
            </motion.button>
          </div>

          <div className="text-neutral-100/80 font-mono">
            <p className="mb-2">
              Limited time offer - Early bird pricing ends in:
            </p>
            <Timer className="text-3xl font-bold text-neon-yellow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMFinalCTA;
