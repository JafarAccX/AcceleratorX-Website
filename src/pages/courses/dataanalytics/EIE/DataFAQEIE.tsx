import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What kind of background do I need to join the Data Analytics program at AcceleratorX?",
        answer: "You don't need any prior Data Analytics or programming experience to join. The program is designed for beginners, freelancers, working professionals or entrepreneurs looking to enter the Data Analytics domain. AcceleratorX offers a no-code, hands-on learning path, so you can learn practical Data Analytics skills without needing to write code."
    },
    {
        question: "What kinds of Data Analytics programs does AcceleratorX offer?",
        answer: "AcceleratorX offers comprehensive Data Analytics programs tailored for different skill levels, focusing on AI-powered analytics, business intelligence, and industry-specific data applications."
    },
    {
        question: "Will I receive a certificate after completing the program?",
        answer: "Yes, upon successful completion of the program, you will receive a professional certificate from AcceleratorX that validates your skills and can be shared on your LinkedIn profile."
    },
    {
        question: "Are there real-world projects included in the course?",
        answer: "Absolutely. The course is built around real-world projects and datasets. You will work on industry-relevant case studies to build a robust portfolio that showcases your analytical capabilities."
    },
    {
        question: "What kind of support is available if I get stuck during the program?",
        answer: "You will have access to a dedicated support ecosystem, including community discussions, weekly live doubt-clearing sessions, and 1-on-1 mentorship to ensure you have all the help you need throughout your learning journey."
    }
];

export default function DataFAQEIE() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open as in the image

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-serif text-[#001B3D] text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden transition-all duration-300"
                                style={{ backgroundColor: "#F3F3F3" }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-semibold text-[#1A1A1A] pr-8">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0">
                                        {isOpen ? (
                                            <X className="w-6 h-6 text-[#1A1A1A]" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-[#1A1A1A]" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed">
                                                <div className="h-px w-full bg-gray-200 mb-6 opacity-50" />
                                                {faq.answer.split('\n\n').map((paragraph, i) => (
                                                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
