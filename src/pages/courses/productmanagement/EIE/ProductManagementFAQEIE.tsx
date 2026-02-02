import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
    {
        question: "Is this beginner friendly?",
        answer: "No. Basic understanding of product lifecycle and agile methodologies is required. We focus on role transitions and production-ready skills for Product Managers."
    },
    {
        question: "Will GenAI be covered?",
        answer: "Absolutely. We include dedicated modules on Generative AI, LLMs for PMs, and building agentic workflows for autonomous product tasks."
    },
    {
        question: "Is this theory-heavy?",
        answer: "No. The program is build-first and decision-focused. While we cover the necessary frameworks, the emphasis is on solving real business problems and product strategy."
    },
    {
        question: "Will this help in PM interviews?",
        answer: "Yes. You will work on real case studies and build 'product narratives' that show interviewers you don't just know frameworks, but how to drive product vision and execution."
    },
    {
        question: "Can working professionals join?",
        answer: "Yes. The program is designed for working professionals (Engineers, Analysts, Marketers, etc.) looking to transition into Product Management roles or upskill to modern industry standards."
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
                <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{question}</span>
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
                        <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ProductManagementFAQEIE() {
    return (
        <section
            id="faq"
            className="py-24 bg-cover bg-center z-20 transition-colors duration-300 relative"
            style={{ backgroundImage: "url('/redesign/ai-pm/astorFAQ.webp')" }}
        >
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#0A0F1E] dark:text-white mb-4 transition-colors duration-300">
                        Frequently Asked <br />
                        <span className="italic font-light">Questions</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Everything you need to know about the Product Management Career Accelerator</p>
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
