
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Who are these programs for?",
        answer: "Students, working professionals, career switchers, and founders — anyone serious about building practical, job-relevant skills."
    },
    {
        question: "Are these beginner-friendly?",
        answer: "Yes. We start from fundamentals and move toward real-world application step by step."
    },
    {
        question: "Is this live or recorded?",
        answer: "A mix of live mentor-led sessions, structured recordings, and community discussions."
    },
    {
        question: "Will I get access to a community?",
        answer: "Yes. You’ll be part of active WhatsApp & slack communities for learning, updates, and peer support."
    },
    {
        question: "How do I choose the right program?",
        answer: "Click Claim the Offer — our team will guide you based on your goals."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 relative z-10 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            >
                Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="text-lg md:text-xl font-medium text-white pr-8">
                                {faq.question}
                            </span>
                            <span className="text-blue-500 shrink-0">
                                {activeIndex === index ? (
                                    <Minus className="w-6 h-6" />
                                ) : (
                                    <Plus className="w-6 h-6" />
                                )}
                            </span>
                        </button>

                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-gray-400 text-lg leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
