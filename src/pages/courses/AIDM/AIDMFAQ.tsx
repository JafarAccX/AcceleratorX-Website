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
    { question: 'Do I need prior coding knowledge?', answer: 'No, this Nano Degrees in AI Digital Marketing is a beginner-friendly and no-code AI marketing program.' },
    { question: 'Are the sessions recorded or live?', answer: 'This AI Marketing Nano Degree program is 100% live, and you will get recordings access of all the lectures' },
    { question: 'Is placement support included in this AI Marketing Nano Degree?', answer: 'Yes, we provide 100% AI Marketing job assistance and career support until you land your next marketing opportunity.' },
    { question: 'What happens if I miss a class?', answer: 'You can rewatch anytime from your student portal.' },
    { question: 'Which AI Marketing tool will I learn?', answer: 'Over 20+ industry-standard AI Marketing tools, including ChatGPT, Jasper, n8n, HubSpot, GA4, and more.' }
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
          <h4 className="text-2xl font-bold text-white mb-4">Want to know more about AI digital marketing?</h4>
          <p className="text-gray-400 mb-6">Please chat with our team. Get in touch with us.
</p>
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
