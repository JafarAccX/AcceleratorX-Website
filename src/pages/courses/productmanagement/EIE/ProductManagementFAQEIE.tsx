import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
    {
        question: "Is this program suitable if I’m a non-technical Product Manager?",
        answer: "Yes. This program is designed for non-technical Product Managers who want to lead AI-powered products without writing code."
    },
    {
        question: "Do I need prior knowledge of AI or Machine Learning?",
        answer: "No prior AI or ML knowledge is required. The program covers AI fundamentals for Product Managers in a business-first, simplified way."
    },
    {
        question: "How is AI Product Management different from traditional PM?",
        answer: "AI Product Management focuses on data-driven products, model behavior, experimentation, uncertainty, and continuous learning, unlike rule-based traditional products."
    },
    {
        question: "Will I learn how to work with data science and ML teams?",
        answer: "Yes. You’ll learn how to collaborate effectively with data scientists, ML engineers, and AI teams, including requirement setting and trade-off discussions."
    },
    {
        question: "Does this program cover real AI product case studies?",
        answer: "Yes. The program includes real-world AI product case studies from SaaS, consumer apps, and enterprise platforms."
    },
    {
        question: "Will I learn how to write AI-specific PRDs?",
        answer: "Yes. You’ll learn how to write AI-specific PRDs, including data requirements, success metrics, edge cases, and model constraints."
    },
    {
        question: "How much technical depth is required in this program?",
        answer: "Only conceptual and decision-level technical depth is required — enough to make informed product decisions, not to build models."
    },
    {
        question: "Is this useful for Senior PM or Growth PM roles?",
        answer: "Yes. The program is valuable for Senior PMs, Growth PMs, and Product Leads working on personalization, automation, and AI-driven growth."
    },
    {
        question: "Will I understand AI trade-offs like accuracy, cost, and latency?",
        answer: "Yes. You’ll learn how to evaluate AI trade-offs such as accuracy vs cost, latency vs quality, and scalability vs reliability."
    },
    {
        question: "Does the program cover AI ethics and responsible AI?",
        answer: "Yes. The program covers AI ethics, bias, fairness, explainability, and responsible AI decision-making for products."
    },
    {
        question: "Will I build or design AI-powered product features?",
        answer: "Yes. You’ll design AI-powered product features, workflows, and user experiences using real product scenarios."
    },
    {
        question: "Is this relevant for SaaS and enterprise products?",
        answer: "Absolutely. The curriculum is aligned with SaaS, B2B, B2C, FMCG, Physical Products and enterprise AI products."
    },
    {
        question: "How does this program help with AI PM interviews?",
        answer: "You’ll gain AI PM interview readiness, including case questions, trade-off discussions, system thinking, and AI product storytelling."
    },
    {
        question: "Can I transition into AI PM roles after this?",
        answer: "Yes. This program helps you transition into AI Product Manager roles by building the right skills, language, and confidence."
    },
    {
        question: "Is this suitable for working professionals?",
        answer: "Yes. Designed for working professionals, with practical learning, real-world examples, and flexible schedules."
    },
    {
        question: "What roles can I target after completing this program?",
        answer: "You can target roles like AI Product Manager, GenAI PM, Product Lead (AI), Growth PM (AI), and Product Strategy roles."
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

export default function ProductManagementFAQEIE() {
    return (
        <section
            id="faq"
            className="py-24 bg-cover bg-center z-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundImage: "url('/redesign/ai-pm/astorFAQ.webp')" }}
        >
            <img src="/redesign/ai-pm/ast.png" alt="astronaut" className="absolute -bottom-10 -right-20 w-64 h-64 object-contain opacity-20 md:opacity-40 pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0A0F1E] dark:text-white mb-4 transition-colors duration-300">
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
