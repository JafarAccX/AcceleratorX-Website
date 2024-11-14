import React from "react";
import { motion } from "framer-motion";

const Values = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Value<span className="text-indigo-500">s</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-300 space-y-8"
        >
          <p>
            Inno was founded with a clear vision: to revolutionize the financial
            industry by harnessing the power of Web3 technology. We believe that
            the future of finance should be accessible, transparent, and secure
            for everyone. Our mission is to break down barriers and create
            financial solutions that empower individuals and businesses alike.
          </p>

          <p>
            At the core of our values are innovation, integrity, and
            inclusivity. We are committed to building a financial ecosystem that
            is fair, equitable, and sustainable, ensuring that everyone has the
            opportunity to thrive in the digital economy.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Values;
