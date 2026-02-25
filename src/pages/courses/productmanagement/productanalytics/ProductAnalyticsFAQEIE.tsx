import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
    {
        question: "Is this program suitable for non-technical Product Managers?",
        answer: "Yes. This program is designed for PMs who want to own analytics without coding. You'll learn to use analytics tools and interpret data, not build data infrastructure.",
    },
    {
        question: "Do I need prior knowledge of statistics or data science?",
        answer: "No prior statistics or data science knowledge is required. The curriculum is built for PMs who need to make decisions with data, not build models.",
    },
    {
        question: "How is Product Analytics different from Business Analytics?",
        answer: "Product Analytics focuses on user behavior within a product — funnels, retention, feature adoption, and experimentation — while Business Analytics is broader (revenue, costs, market analysis). This program is specifically PM-focused.",
    },
    {
        question: "Will I learn how to set up tracking and instrumentation?",
        answer: "Yes. You'll learn how to design a tracking plan, work with engineers on event implementation, and validate data quality — all from a PM perspective.",
    },
    {
        question: "Does this program cover A/B testing and experimentation?",
        answer: "Yes. You'll learn how to design experiments, define success metrics, interpret results, and make product decisions based on experiment outcomes.",
    },
    {
        question: "Which analytics tools will I learn?",
        answer: "The program covers Mixpanel, Google Analytics 4 (GA4), Amplitude concepts, and data visualization with tools like Looker and Power BI — the most commonly used PM analytics stack.",
    },
    {
        question: "Will I learn how to work with data teams effectively?",
        answer: "Yes. You'll understand how to collaborate with data analysts, data engineers, and data scientists — including how to write good analytics requirements and ask the right questions.",
    },
    {
        question: "Is this useful for Senior PMs or Growth PMs?",
        answer: "Absolutely. Senior PMs and Growth PMs often need to own data narratives in leadership conversations. This program helps you defend roadmaps, diagnose growth issues, and drive alignment with data.",
    },
    {
        question: "Will this help with PM interviews?",
        answer: "Yes. Many PM interviews include analytics case studies (e.g., 'How would you diagnose a drop in DAU?'). This program gives you a structured framework to answer these confidently.",
    },
    {
        question: "Can I transition into analytics-focused PM roles after this?",
        answer: "Yes. Roles like Growth PM, Product Analyst (PM track), and Data-Driven PM are accessible paths after this program. You'll have the skills and vocabulary to compete for them.",
    },
    {
        question: "Does this cover retention and cohort analysis?",
        answer: "Yes. Retention curves and cohort analysis are core modules. You'll learn how to read them and use insights to drive roadmap decisions.",
    },
    {
        question: "Is this relevant for SaaS, consumer apps, and enterprise products?",
        answer: "Yes. The curriculum applies to SaaS, consumer apps, and marketplaces — wherever product analytics drives product decisions.",
    },
    {
        question: "Is this suitable for working professionals?",
        answer: "Yes. The program is designed for working PMs and aspiring PMs who want to build analytics skills alongside their current role.",
    },
    {
        question: "What makes this different from a data analytics course?",
        answer: "This is not a data analyst course. Every module is built to answer PM questions — roadmap decisions, feature prioritization, growth diagnosis, and stakeholder communication.",
    },
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

export default function ProductAnalyticsFAQEIE() {
    return (
        <section
            id="faq"
            className="py-24 z-20 transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background image contained within section */}
            <img
                src="/redesign/product-analytics/faq-img.webp"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 w-full object-contain pointer-events-none"
            />
            <img src="/redesign/ai-pm/ast.png" alt="astronaut" className="absolute -bottom-10 -right-20 w-64 h-64 object-contain opacity-20 md:opacity-40 pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0A0F1E] dark:text-white mb-4 transition-colors duration-300">
                        Frequently Asked <br />
                        <span className=" font-light">Questions</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Everything you need to know about the Product Analytics Program</p>
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
