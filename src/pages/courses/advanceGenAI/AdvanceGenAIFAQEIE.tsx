"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_DATA = [
    {
        question: "Do I need coding experience for this program?",
        answer: "While we use frameworks like LangGraph and CrewAI that are code-friendly, beginners can follow along. Basic Python knowledge is helpful but we provide foundations to get you started with building agents."
    },
    {
        question: "How is this different from a regular Generative AI course?",
        answer: "Most courses focus on prompt engineering and using chatbots. This program is about building 'Autonomous Agents'—systems that use reasoning, memory, and tools to complete complex tasks without humans in the loop."
    },
    {
        question: "What kind of agents will I build?",
        answer: "You will build research agents, customer support agents that use tools, multi-agent marketing teams, and data analyst agents that can reason over product metrics."
    },
    {
        question: "Does the program include live labs?",
        answer: "Yes, especially in the Regular+ plan, we have live mentor-led labs where we build and deploy agents together on real-world infrastructure."
    },
    {
        question: "What is the duration of the program?",
        answer: "This is a 10-week intensive specialized program designed for professionals and builders."
    }
];

export default function AdvanceGenAIFAQEIE() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            className="py-24 bg-cover bg-center transition-colors duration-300 relative"
            style={{ backgroundImage: "url('/redesign/advance-gen-ai/faq-bg.webp')" }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Common Questions
                    </h2>
                    <p className="text-gray-300">Everything you need to know about the Agentic AI program.</p>
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
                                <span className="text-lg font-bold text-white">{faq.question}</span>
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
                                        <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5">
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
