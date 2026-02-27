"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 bg-black/30 backdrop-blur-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <h4 className="font-heading text-lg font-semibold text-white pr-4">{question}</h4>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    {isOpen ? (
                        <span className="text-white text-xl font-light">×</span>
                    ) : (
                        <span className="text-white text-xl font-light">+</span>
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="font-sans px-6 pb-6 text-gray-300 leading-relaxed whitespace-pre-line">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQS = [
    {
        question: "Is this program beginner-friendly?",
        answer: "Yes. This is a beginner-friendly Data Analytics program designed for students, freshers, and non-technical learners."
    },
    {
        question: "Do I need prior coding or statistics knowledge?",
        answer: "No prior coding or statistics background is required. The program starts from analytics fundamentals and builds step by step."
    },
    {
        question: "Will I learn SQL and Python from scratch?",
        answer: "Yes. You’ll learn SQL and Python from scratch, focused on practical data analysis and real-world use cases."
    },
    {
        question: "Is this focused more on dashboards or decision-making?",
        answer: "The program focuses on decision-driven analytics, not just dashboards — teaching how data supports business and product decisions."
    },
    {
        question: "Will I work with real-world datasets?",
        answer: "Yes. You’ll analyze real-world datasets from business, marketing, finance, and product scenarios."
    },
    {
        question: "Does the program include business and product analytics?",
        answer: "Yes. The curriculum includes business analytics and product analytics, covering KPIs, funnels, cohorts, and metrics."
    },
    {
        question: "How much Excel is covered in the program?",
        answer: "Excel is covered extensively, including formulas, pivot tables, data cleaning, and analysis workflows."
    },
    {
        question: "Will I learn data visualization tools?",
        answer: "Yes. You’ll learn data visualization tools like looker studio, Power Bi, Tableau to create clear, impactful charts and dashboards."
    },
    {
        question: "Is this suitable for career switchers?",
        answer: "Yes. This program is ideal for career switchers transitioning into data analytics roles from non-technical backgrounds."
    },
    {
        question: "Does the program include AI-assisted analytics?",
        answer: "Yes. You’ll learn AI-assisted analytics, including using AI tools to speed up analysis and generate insights."
    },
    {
        question: "Will I build an analytics portfolio?",
        answer: "Yes. You’ll build a strong data analytics portfolio with real projects that demonstrate practical skills."
    },
    {
        question: "Is this program suitable for working professionals?",
        answer: "Yes. Designed for working professionals, with flexible learning and practical, job-relevant skills."
    },
    {
        question: "How job-ready will I be after completion?",
        answer: "You’ll be job-ready for entry-level and junior analytics roles, with hands-on experience and interview preparation."
    },
    {
        question: "What kind of analytics roles does this prepare me for?",
        answer: "The program prepares you for roles like Data Analyst, Business Analyst, Product Analyst, and Junior Analytics roles."
    },
    {
        question: "Is this different from generic data analytics courses?",
        answer: "Yes. This program focuses on real business problems, decision-making, and practical tools, not just theory or tools."
    },
    {
        question: "Will I get an interview and career guidance?",
        answer: "Yes. The program includes interview preparation, resume guidance, portfolio review, and career support."
    }
];

export default function DataFAQEIE() {
    return (
        <section className="relative py-20 mx-4 lg:mx-0 overflow-hidden rounded-3xl">
            {/* Background Image - contained and anchored to bottom */}
            <img
                src="/redesign/ai-da/astronot-1.webp"
                alt=""
                className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom pointer-events-none select-none"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Decorative Half Moon - Right */}
            <img
                src="/redesign/ai-da/hald-space-moon.png"
                alt="Half Moon"
                className="absolute right-8 top-24 w-32 h-32 object-contain opacity-90 hidden lg:block"
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            defaultOpen={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
