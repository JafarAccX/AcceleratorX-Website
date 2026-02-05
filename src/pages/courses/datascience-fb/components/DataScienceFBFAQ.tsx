import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
    {
        question: "Is this program suitable for beginners in Data Science?",
        answer: "Yes. This program is beginner-friendly for Data Science aspirants and structured to move from fundamentals to real-world applications"
    },
    {
        question: "What prior knowledge is required before joining?",
        answer: "Basic logical thinking and curiosity are enough. No advanced math or prior ML experience is required to get started."
    },
    {
        question: "How is this different from typical ML or Python courses?",
        answer: "Unlike isolated ML or Python courses, this program teaches end-to-end Data Science, combining data preparation, modeling, evaluation, and deployment."
    },
    {
        question: "Will I work on end-to-end data science projects?",
        answer: "Yes. You’ll work on complete data science projects from problem definition to deployment-ready solutions."
    },
    {
        question: "How much math and statistics are involved?",
        answer: "Only practical, applied math and statistics needed to understand and improve models — no heavy theory or proofs."
    },
    {
        question: "Does the program cover real-world machine learning problems?",
        answer: "Yes. You’ll solve real-world ML problems like prediction, classification, recommendation, and forecasting."
    },
    {
        question: "Will I learn model deployment and MLOps concepts?",
        answer: "Yes. The program covers model deployment basics, MLOps concepts, versioning, and monitoring"
    },
    {
        question: "Is Generative AI included in this program?",
        answer: "Yes. You’ll get exposure to Generative AI concepts and applications, connecting traditional ML with modern AI systems"
    },
    {
        question: "Will I build production-grade ML models?",
        answer: "Yes. You’ll build production-grade machine learning models, focusing on performance, scalability, and reliability."
    },
    {
        question: "Is this suitable for Data Analysts transitioning to Data Science?",
        answer: "Absolutely. This program is ideal for Data Analysts transitioning into Data Scientist roles."
    },
    {
        question: "Will I create a portfolio with real projects?",
        answer: "Yes. You’ll build a strong Data Science portfolio with real, end-to-end projects."
    },
    {
        question: "How does this program align with current industry hiring?",
        answer: "The curriculum is aligned with current industry expectations, focusing on practical skills companies actually hire for."
    },
    {
        question: "Is this program more practical or theory-heavy?",
        answer: "The program is highly practical and project-driven, with theory taught only when needed for real-world application."
    },
    {
        question: "Can working professionals manage this program?",
        answer: "Yes. Designed for working professionals, with flexible schedules and applied learning"
    },
    {
        question: "Will this help with Data Scientist interviews?",
        answer: "Yes. You’ll receive Data Scientist interview preparation, including ML case discussions, project walkthroughs, and resume guidance."
    },
    {
        question: "What Data Science roles can I target after completion?",
        answer: "You can target roles such as Data Scientist, Applied ML Engineer (junior), Decision Scientist, and Analytics Scientist."
    }
];

const DataScienceFBFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="w-full space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => toggleFAQ(index)}
                                className={`rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden relative group
                                    ${isOpen
                                        ? "bg-black border-[#0077FF] shadow-[0_0_20px_rgba(0,119,255,0.2)]"
                                        : "bg-[#0A0A0A] border-white/10 hover:border-white/20"
                                    }`}
                            >
                                <div className="p-6 md:p-8 flex justify-between items-start gap-4">
                                    <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                        {item.question}
                                    </h3>
                                    <div className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-0"}`}>
                                        {isOpen ? <X className="text-white" size={24} /> : <Plus className="text-gray-400" size={24} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 text-gray-400 text-base md:text-lg leading-relaxed border-t border-transparent">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default DataScienceFBFAQ;
