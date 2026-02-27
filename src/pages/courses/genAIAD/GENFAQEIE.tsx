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
        question: "Is this program suitable for non-technical beginners?",
        answer: "Yes. This program is 100% beginner-friendly and designed for non-technical learners, students, creators, marketers, founders, and professionals."
    },
    {
        question: "Do I need coding experience to learn Generative AI?",
        answer: "No coding experience is required. You’ll learn no-code and low-code Generative AI tools with simple, practical workflows. Paralley, you will also learn about how to get your hands on basic python and its use."
    },
    {
        question: "Will I understand how GenAI actually works?",
        answer: "Yes. The program explains how Generative AI works internally in a simple, easy-to-understand way — without heavy math or theory."
    },
    {
        question: "Does the program include hands-on projects?",
        answer: "Yes. This is a hands-on Generative AI program with real use cases and practical projects in every module."
    },
    {
        question: "Will I build real AI-powered applications?",
        answer: "Yes. You’ll build real AI-powered applications like content generators, chatbots, automation tools, and AI assistants, AI Agents."
    },
    {
        question: "Which Generative AI tools are covered?",
        answer: "You’ll work with popular Generative AI tools for text, images, video, chatbots,AI Agent building, Multi-Agent orchestration and automation used across industries."
    },
    {
        question: "Is this useful for business and non-tech roles?",
        answer: "Absolutely. The program is highly valuable for marketing, sales, HR, product, founders, consultants, and creators."
    },
    {
        question: "Will I learn AI automation workflows?",
        answer: "Yes. You’ll learn AI automation workflows to save time, automate tasks, and improve productivity using GenAI."
    },
    {
        question: "Does the program cover text, image, and video generation?",
        answer: "Yes. The program covers text generation, image generation, and video generation using modern Generative AI tools."
    },
    {
        question: "Is AI ethics and responsible AI included?",
        answer: "Yes. You’ll learn AI ethics, responsible AI usage, data privacy, and real-world AI limitations."
    },
    {
        question: "Can this help me monetize AI skills?",
        answer: "Yes. You’ll learn how to monetize Generative AI skills through freelancing, content creation, consulting, and business use cases"
    },
    {
        question: "Is this suitable for working professionals?",
        answer: "Yes. Designed for working professionals, with flexible learning and practical outcomes that fit busy schedules."
    },
    {
        question: "Will I build a GenAI portfolio?",
        answer: "Yes. You’ll build a portfolio of Generative AI projects that showcase real skills, not just certificates."
    },
    {
        question: "How is this different from prompt-only courses?",
        answer: "Prompt-only courses teach commands. This program teaches end-to-end Generative AI usage, workflows, tools, automation, and real applications."
    },
    {
        question: "Will this help in freelancing or consulting?",
        answer: "Yes. The program prepares you for AI freelancing, consulting, and client-based work with real deliverables."
    },
    {
        question: "What opportunities open up after this program?",
        answer: "You can explore roles and opportunities like elevation in your current role, AI Automation Specialist, AI Consultant, Freelancer, or Business AI Strategist."
    }
];

export default function GENFAQEIE() {
    return (
        <section className="relative py-20 mx-4 lg:mx-0 overflow-hidden rounded-3xl">
            {/* Background Image - contained and anchored to bottom */}
            <img
                src="/redesign/gen-ai/WS.webp"
                alt=""
                className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom pointer-events-none select-none"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Decorative Hugging Face Logo - Right */}
            <img
                src="/redesign/gen-ai/huggingface.png"
                alt="Hugging Face"
                className="absolute right-8 top-32 w-20 h-20 object-contain opacity-80 hidden lg:block"
            />

            {/* Decorative Fire/Energy Element - Left (from reference image) */}
            <div className="absolute left-8 top-24 w-24 h-24 hidden lg:block">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-70">
                    <defs>
                        <radialGradient id="fireGradient">
                            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.3" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#fireGradient)" className="animate-pulse" />
                    <circle cx="50" cy="50" r="25" fill="url(#fireGradient)" opacity="0.7" />
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
