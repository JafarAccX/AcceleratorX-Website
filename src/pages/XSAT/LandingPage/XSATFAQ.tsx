import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who can take X-SAT?",
    answer:
      "Anyone passionate about Product Management—no prior experience needed. The test is designed to evaluate your potential and aptitude for product management roles.",
  },
  {
    question: "Is the test free?",
    answer:
      "Yes, X-SAT is completely free for all participants. We believe in making quality education and opportunities accessible to everyone.",
  },
  {
    question: "How do I prepare?",
    answer:
      "Review basic problem-solving, strategic thinking, user empathy and many more concepts. We'll provide preparation materials upon registration to help you succeed.",
  },
  {
    question: "What happens after registration?",
    answer:
      "You'll receive detailed test instructions, preparation resources, and secure login credentials via email. Our team will guide you through the entire process.",
  },
  {
    question: "What's included in the scholarship?",
    answer:
      "Winners receive full or partial scholarships to AcceleratorX's Product Management Certification Program, along with mentorship opportunities and industry connections.",
  },
];

export const XSATFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Questions Answered
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find answers to common questions about AcceleratorX and our
            services.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-800 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-500" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 py-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
