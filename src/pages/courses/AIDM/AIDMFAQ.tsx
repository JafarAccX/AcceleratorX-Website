import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import EnrollmentModal from '../../../components/EnrollmentModal';

const AIDMFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  // Enrollment modal state and handlers
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalSubmit = () => {
    // called after successful submit in the modal
    setIsModalOpen(false);
  };

  const faqs = [
    { question: 'Do I need coding skills?', answer: 'No, this is a low-code / no-code AI Marketing program, designed for beginners, marketers, career switchers and founders.' },
    { question: 'Will the AI Marketing sessions be recorded?', answer: 'Yes, you will get sessions recordings, AI Marketing labs and ready to use templates to practice anytime.' },
    { question: 'Will I get placement support or career support in the AI Marketing certification?', answer: "Yes, you'll build a capstone portfolio in AI-powered digital marketing, receive mentor reviews, and get selective industry introductions" },
    { question: 'What if I miss a live AI Marketing class?', answer: 'No worries, you can always watch the recording, complete the lab submission, and also join weekly mentor office hours.' },
    { question: "What's the refund policy for the AI Marketing program?", answer: "We offer a 7-day money-back guarantee if you're not satisfied with the program quality. Contact our support team for assistance." },
    { question: 'What AI tools will I learn in this program?', answer: "You'll master 20+ AI tools including ChatGPT, Claude.ai, n8n, Google Ads, Meta Ads, Canva, SDXL, Runway, Apollo.io, HubSpot, and many more industry-leading platforms." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338] mb-6">Still Have Questions?</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We've got answers to help you make the right decision</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 shadow-sm ${
                  open
                    ? 'bg-[#1A1A1A] border-[#5CB338] shadow-[#5CB338]/20 shadow-md'
                    : 'bg-[#0F0F0F] border-white/10 hover:border-[#5CB338]/40'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full text-left relative px-6 py-5 flex justify-between items-center gap-4 focus:outline-none rounded-xl cursor-pointer"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="font-semibold text-gray-200 text-lg flex-1">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0 transition-all">
                    {open ? <Minus className="w-4 h-4 text-[#5CB338]" /> : <Plus className="w-4 h-4 text-[#5CB338]" />}
                  </div>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      key={index}
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1">
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12 p-8 bg-[#0F0F0F] rounded-xl border border-white/10">
          <h4 className="text-2xl font-bold text-white mb-4">Still have questions?</h4>
          <p className="text-gray-400 mb-6">Can't find the answer you're looking for? Please chat with our team.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleModalOpen}
            className="bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>

  <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />

      </div>
    </section>
  );
};

export default AIDMFAQ;
