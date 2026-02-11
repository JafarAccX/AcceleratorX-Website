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
        question: "Is this program suitable for beginners in digital marketing?",
        answer: "Yes. This is a beginner-friendly AI digital marketing program, designed for students, freshers, and non-marketing backgrounds"
    },
    {
        question: "Do I need prior marketing experience?",
        answer: "No prior marketing experience is required. The program starts from digital marketing fundamentals and gradually introduces AI-powered strategies"
    },
    {
        question: "How is AI used throughout the marketing curriculum?",
        answer: "AI is integrated across content creation, SEO, ads, analytics, automation, and optimization, making marketing faster and more data-driven."
    },
    {
        question: "Will I learn SEO, paid ads, and content together?",
        answer: "Yes. You’ll learn SEO, performance marketing, and content marketing as a single, connected growth system."
    },
    {
        question: "Does the program cover real marketing campaigns?",
        answer: "Yes. You’ll work on real-world marketing campaigns, including planning, execution, optimization, and reporting."
    },
    {
        question: "Will I learn AI tools for content creation?",
        answer: "Yes. You’ll learn AI tools for content creation, including ad copies, blogs, emails, social media posts, and creatives."
    },
    {
        question: "Is performance marketing included in this program?",
        answer: "Yes. The program includes performance marketing, covering paid ads, funnels, targeting, budgets, and ROI optimization"
    },
    {
        question: "Will I learn marketing analytics and CRO?",
        answer: "Yes. You’ll learn marketing analytics, conversion rate optimization (CRO), and data-driven decision-making."
    },
    {
        question: "Does the program include automation and AI agents?",
        answer: "Yes. You’ll learn marketing automation, AI workflows, and AI agents for lead generation, follow-ups, and campaign optimization."
    },
    {
        question: "Is this useful for freelancers and founders?",
        answer: "Absolutely. This program is ideal for freelancers, founders, solopreneurs, and agency builders."
    },
    {
        question: "Will I build a digital marketing portfolio?",
        answer: "Yes. You’ll build a portfolio of real AI-powered marketing projects showcasing practical skills."
    },
    {
        question: "Is this program suitable for working professionals?",
        answer: "Yes. Designed for working professionals, with flexible learning and practical, career-relevant skills."
    },
    {
        question: "Can this help me get hired faster?",
        answer: "Yes. The program focuses on job-ready marketing skills, real projects, and tools companies actually use."
    },
    {
        question: "Does the program cover social media marketing?",
        answer: "Yes. You’ll learn social media marketing, content strategy, growth tactics, and AI-assisted scheduling and analytics."
    },
    {
        question: "Will I learn how to scale campaigns using AI?",
        answer: "Yes. You’ll learn how to scale marketing campaigns using AI, automation, audience insights, and performance optimization."
    },
    {
        question: "What marketing roles does this prepare me for?",
        answer: "You can target roles like Digital Marketing Executive, Performance Marketer, SEO Specialist, Growth Marketer, AI Marketing Specialist, and Freelancer."
    }
];

export default function AIDMFAQEIE() {
    return (
        <section className="relative py-20 mx-4 lg:mx-0 overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/redesign/ai-dm/pricing-bg.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Decorative Logo - Left */}
            <img
                src="/redesign/ai-dm/mailchamp.png"
                alt="Mailchimp"
                className="absolute left-8 top-24 w-20 h-20 object-contain opacity-80 hidden lg:block"
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white text-center mb-12">
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
