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
                <h4 className="text-lg font-semibold text-white pr-4">{question}</h4>
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
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed whitespace-pre-line">
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
        question: "What kind of background do I need to join the AI program at AcceleratorX?",
        answer: "You don't need any prior AI or programming experience to join. The program is designed for beginners, freelancers, working professionals or entrepreneurs looking to enter the AI domain.\n\nAcceleratorX offers a no-code, hands-on learning path, so you can learn practical AI skills without needing to write code."
    },
    {
        question: "What kinds of AI programs does AcceleratorX offer?",
        answer: "AcceleratorX offers comprehensive programs in AI-Powered Data Analytics, covering everything from data collection and cleaning to advanced analytics, machine learning, and AI-driven insights. Our curriculum is designed to make you job-ready with real-world projects and hands-on experience."
    },
    {
        question: "Will I receive a certificate after completing the program?",
        answer: "Yes! Upon successful completion of the program, you'll receive an Industry-Recognized Nano Degree in AI-Powered Data Analytics. This certificate validates your skills in data analysis, visualization, statistical modeling, and AI-powered analytics."
    },
    {
        question: "Are there real-world projects included in the course?",
        answer: "Absolutely! You'll work with real datasets throughout the program, including a comprehensive capstone project. You'll build actual analytics dashboards, perform product and user analysis, create predictive models, and develop AI-powered analytics solutions that you can showcase in your portfolio."
    },
    {
        question: "What kind of support is available if I get stuck during the program?",
        answer: "You'll have access to mentors from leading companies, community support, and dedicated assistance throughout your learning journey. Our mentors include professionals from top analytics teams who provide guidance and answer your questions."
    }
];

export default function DataFAQEIE() {
    return (
        <section className="relative py-20 mx-4 lg:mx-0 overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/redesign/ai-da/astronot-1.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Decorative Half Moon - Right */}
            <img
                src="/redesign/ai-da/hald-space-moon.png"
                alt="Half Moon"
                className="absolute right-8 top-24 w-32 h-32 object-contain opacity-90 hidden lg:block"
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-12">
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
