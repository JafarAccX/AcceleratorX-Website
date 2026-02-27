"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_DATA = [
    {
        question: "Is this program suitable for beginners in AI?",
        answer: "Yes. This program is beginner-friendly for AI aspirants with basic logical thinking, programming curiosity, or tech background. It starts from AI foundations and progresses to advanced AI engineering"
    },
    {
        question: "How is this different from a basic Generative AI program?",
        answer: "Basic Generative AI programs focus on tool usage and prompt writing. This program focuses on AI system engineering, agent architecture, RAG pipelines, and real-world deployment."
    },
    {
        question: "Do I need strong coding skills to join?",
        answer: "No. You don’t need advanced coding skills, Basic understanding of Python is enough. The program teaches practical Python for AI, system logic, and engineering workflows step by step."
    },
    {
        question: "Will I build AI agents from scratch?",
        answer: "Yes. You will design, build, and optimize AI agents from scratch, including memory, reasoning, tools, and workflows."
    },
    {
        question: "Does the program cover RAG systems?",
        answer: "Yes. You’ll build end-to-end Retrieval-Augmented Generation (RAG) systems using vector databases, embeddings, and real-world data."
    },
    {
        question: "Are multi-agent systems included?",
        answer: "Yes. The program includes multi-agent architectures, agent collaboration, task delegation, and coordination strategies."
    },
    {
        question: "Will I work with open-source AI frameworks?",
        answer: "Yes. You’ll work with popular open-source AI frameworks and tools used by startups and AI engineering teams."
    },
    {
        question: "Is this program more engineering-focused?",
        answer: "This is for anyone who wants to build their own agents & their AI application. This is a hands-on AI engineering program, focused on architecture, pipelines, reliability, scalability, and system design."
    },
    {
        question: "Will I deploy real AI systems?",
        answer: "Yes. You’ll deploy real AI applications and AI agents, not just notebooks or theoretical demos."
    },
    {
        question: "Does the program include production-level projects?",
        answer: "Yes. Projects are production-grade, covering performance optimization, latency, cost efficiency, and scalability."
    },
    {
        question: "Will I build a portfolio-ready AI capstone?",
        answer: "Yes. You’ll complete a strong AI engineering capstone project that is fully portfolio-ready and recruiter-facing."
    },
    {
        question: "Is this aligned with AI engineering roles?",
        answer: "Yes. The curriculum aligns directly with AI Engineer, GenAI Engineer, AI Agent Engineer, and Applied AI roles."
    },
    {
        question: "How advanced is the curriculum?",
        answer: "The curriculum is advanced and industry-aligned, covering reasoning systems, memory, RAG optimization,Agent orchestration, and deployment."
    },
    {
        question: "Is this suitable for working professionals?",
        answer: "Yes. The program is designed for working professionals, career switchers, and serious AI builders, with flexible learning and hands-on projects."
    },
    {
        question: "Will I learn system design for AI applications?",
        answer: "Yes. You’ll learn AI system design, including architecture decisions, scaling strategies, and production trade-offs."
    },
    {
        question: "Who should choose this program over basic GenAI courses?",
        answer: "This program is ideal for learners who want to build AI systems, not just use AI tools, and aim for real AI engineering roles or startup-level AI work."
    }
];

export default function AdvanceGenAIFAQEIE() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            className="py-24 transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background image - contained and anchored to bottom */}
            <img
                src="/redesign/advance-gen-ai/faq-bg.webp"
                alt=""
                className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom pointer-events-none select-none"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Common Questions
                    </h2>
                    <p className="font-sans text-gray-300">Everything you need to know about the Agentic AI program.</p>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-heading text-lg font-bold text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-[#3B82F6]" />
                                ) : (
                                    <ChevronDown className="text-gray-400" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="font-sans p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
