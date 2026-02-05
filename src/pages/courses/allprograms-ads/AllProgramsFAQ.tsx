import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
    {
        question: "Do I need a technical or coding background to enroll?",
        answer: "Know these programs are beginner-friendly. You can start with a coding background and gradually gain technical confidence through guided, hands-on projects."
    },
    {
        question: "Are the sessions live or pre-recorded?",
        answer: "Every program is 100% live and mentor-led. You will get recordings of all the live lectures in your LMS, but each classes interactive and live"
    },
    {
        question: "How is this different from other AI courses online?",
        answer: "Most AI courses focus on tools and theory only. These programs focus on execution, rear work flow and role-aligned outcomes, helping builders actually apply AI at work and understand real AI business use cases."
    },
    {
        question: "Will I receive certification after completion?",
        answer: "Yes, each builder receives industry-aligned, AI certifications that are backed by real project work, not written or MCQ assignments."
    },
    {
        question: "You provide placement or job assistance?",
        answer: "Yes, each learner gets access to 3 streams of hiring along with career guidance, portfolio reviews, interview preparations, and job assistance, aligning with AI-led roles."
    },
    {
        question: "Are these programs suitable if I want to switch careers into AI?",
        answer: "Yes, these programs are designed specifically for career transition into AI roles with a structured learning path, hands on projects, and role specific preparations."
    }
];

export default function AllProgramsFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group transition-colors hover:bg-white/5"
                            >
                                <span className="text-white text-lg md:text-xl font-medium pr-8">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0">
                                    {activeIndex === idx ? (
                                        <X size={24} className="text-gray-400" />
                                    ) : (
                                        <Plus size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 text-gray-400 text-lg leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
