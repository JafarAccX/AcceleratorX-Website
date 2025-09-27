import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AIDMFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need coding skills?",
      answer: "No, this is a low-code / no-code AI Marketing program, designed for beginners, marketers, career switchers and founders."
    },
    {
      question: "Will the AI Marketing sessions be recorded?",
      answer: "Yes, you will get sessions recordings, AI Marketing labs and ready to use templates to practice anytime."
    },
    {
      question: "Will I get placement support or career support in the AI Marketing certification?",
      answer: "Yes, you'll build a capstone portfolio in AI-powered digital marketing, receive mentor reviews, and get selective industry introductions"
    },
    {
      question: "What if I miss a live AI Marketing class?",
      answer: "No worries, you can always watch the recording, complete the lab submission, and also join weekly mentor office hours."
    },
    {
      question: "What's the refund policy for the AI Marketing program?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the program quality. Contact our support team for assistance."
    },
    {
      question: "What AI tools will I learn in this program?",
      answer: "You'll master 20+ AI tools including ChatGPT, Claude.ai, n8n, Google Ads, Meta Ads, Canva, SDXL, Runway, Apollo.io, HubSpot, and many more industry-leading platforms."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            FAQ
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338] mb-6">
            Still Have Questions?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've got answers to help you make the right decision
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-[#0F0F0F]  border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-300 text-lg pr-4">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="w-4 h-4 text-[#5CB338]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#5CB338]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-[#0F0F0F] rounded-xl border border-white/10"
        >
          <h4 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h4>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Please chat with our team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5CB338] hover:bg-[#5CB338]/90 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDMFAQ;
