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
        question: "Who is this crash course designed for?",
        answer: "This crash course is designed for working professionals, students, entrepreneurs, and career switchers who want to rapidly upskill in AI — without spending months on a long-format program."
    },
    {
        question: "Do I need any prior AI or coding experience?",
        answer: "No. The course starts from the fundamentals and progressively moves to advanced topics. Basic familiarity with computers is enough to get started."
    },
    {
        question: "How is this different from a regular AI course?",
        answer: "This is an intensive, fast-paced program focused on real-world application — not theory. Every session delivers practical, immediately usable skills with hands-on exercises."
    },
    {
        question: "What topics will I cover in this crash course?",
        answer: "You'll cover LLMs, prompt engineering, AI Agents, automation workflows, GenAI tools for text/image/code, and real-world AI deployment — all in a compressed, high-impact format."
    },
    {
        question: "Will I build real projects during the course?",
        answer: "Yes. Every module includes hands-on project work so you leave with real AI artifacts — not just theoretical knowledge."
    },
    {
        question: "What tools and platforms will I learn?",
        answer: "You'll work with leading AI tools including ChatGPT, Claude, Gemini, LangChain, n8n, Make, Hugging Face, and more — chosen for their real-world adoption across industries."
    },
    {
        question: "How long is the crash course?",
        answer: "The course is designed to be completed in an intensive format — giving you maximum skills in minimum time. Full schedule details are shared upon enrollment."
    },
    {
        question: "Will I receive a certificate after completing the course?",
        answer: "Yes. You'll receive an industry-recognized certificate of completion that validates your AI skills for employers, clients, and portfolio use."
    },
    {
        question: "Is this useful for non-tech professionals?",
        answer: "Absolutely. The course is specifically structured to be accessible to professionals from marketing, finance, HR, operations, and other non-technical backgrounds."
    },
    {
        question: "Can this course help me get a job or promotion?",
        answer: "Yes. AI skills are among the top differentiators in today's job market. This crash course helps you stand out in interviews, perform better in current roles, and unlock new opportunities."
    },
    {
        question: "Will I learn about AI Agents and automation?",
        answer: "Yes. AI Agents and workflow automation are core modules — you'll learn how to design and deploy agentic systems for real business problems."
    },
    {
        question: "Is live instruction included?",
        answer: "Yes. The program includes live sessions with industry practitioners and expert mentors who guide you through the material with real-world context."
    },
    {
        question: "What support do I get after the course?",
        answer: "You get access to the course alumni community, recorded sessions, and continued access to learning materials after the crash course ends."
    },
    {
        question: "How do I enroll in the Advance AI Crash Course?",
        answer: "Click 'Apply Now' to fill out the enrollment form. Our team will get in touch with you within 24 hours with the next steps and batch details."
    },
];

export default function FAQAICC() {
    return (
        <section className="relative py-20 mx-4 lg:mx-0 overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/redesign/ai-crash-course/pluto-walking.webp"
                    alt=""
                    className="w-full h-full object-contain object-bottom"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Decorative Hugging Face Logo - Right */}
            <img
                src="/redesign/gen-ai/huggingface.png"
                alt="Hugging Face"
                className="absolute right-8 top-32 w-20 h-20 object-contain opacity-80 hidden lg:block"
            />

            {/* Decorative Fire/Energy Element - Left */}
            <div className="absolute left-8 top-24 w-24 h-24 hidden lg:block">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-70">
                    <defs>
                        <radialGradient id="fireGradientAICC">
                            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.3" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#fireGradientAICC)" className="animate-pulse" />
                    <circle cx="50" cy="50" r="25" fill="url(#fireGradientAICC)" opacity="0.7" />
                </svg>
            </div>

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
