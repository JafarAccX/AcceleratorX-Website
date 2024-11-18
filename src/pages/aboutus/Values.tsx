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
            At AcceleratorX, we are on a mission to shape visionary leaders who
            dare to redefine the future. We believe in harnessing ambition and
            transforming it into unstoppable momentum, turning ideas into action
            and dreams into impactful careers. Our commitment is to empower
            individuals with immersive, hands-on learning experiences that
            challenge limits, unlock potential, and open doors to a world of
            opportunity.
          </p>

          <p>
            Our programs are meticulously crafted for those who strive not just
            to learn but to lead, with a focus on real-world application,
            mentorship from top industry experts, and a powerful support
            network. Through a curriculum that bridges theory and practice, we
            guide our students in mastering high-impact skills, building their
            personal brand, and navigating competitive markets with confidence
            and purpose. With access to elite mentors from companies like Tata,
            Walmart, and PayPal, and an unmatched placement support system, we
            create a seamless path from ambition to achievement. At
            AcceleratorX, we don't just prepare you for a career; we equip you
            to make waves. Join us to build, lead, and succeed in the arena of
            tomorrow’s leaders. The future starts with you.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Values;
