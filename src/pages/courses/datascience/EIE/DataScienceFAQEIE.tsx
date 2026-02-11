import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
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

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-xl mb-4 overflow-hidden bg-white/50 dark:bg-[#171717]/50 backdrop-blur-sm transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white dark:hover:bg-[#1f1f1f] transition-colors"
            >
                <span className="font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="font-sans p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function DataScienceFAQEIE() {
    return (
        <section
            id="faq"
            className="py-24 bg-cover bg-center transition-colors duration-300 relative"
            style={{ backgroundImage: "url('/redesign/data-science/ds-faqs.webp')" }}
        >
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0A0F1E] dark:text-white mb-4 transition-colors duration-300">
                        Frequently Asked <br />
                        <span className="italic font-light">Questions</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Everything you need to know about the Data Science Career Accelerator</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}
