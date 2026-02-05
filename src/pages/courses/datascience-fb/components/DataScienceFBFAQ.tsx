import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
    {
        question: "I’m a Data Analyst with no prior ML experience. Is this program for me?",
        answer: "Absolutely. This program is specifically designed for builders transitioning from Analyst or Fresher roles. We move beyond SQL and dashboards to teach you how to frame ambiguous problems and build models that survive production."
    },
    {
        question: "What kind of production-grade projects will I build?",
        answer: "You will graduate with an end-to-end Capstone project showcased on BuildrX. Projects include credit/risk churn modeling, revenue forecasting, and building autonomous data analysis agents using real-world datasets."
    },
    {
        question: "What tangible outcomes will I have by the end of the program?",
        answer: "We focus on 'Employability Assets' rather than just a certificate. You will graduate with a deployed ML pipeline, a professional portfolio, and a mindset shift that prepares you for 2025-ready DS roles."
    },
    {
        question: "How does this program make me hireable as a Data Scientist?",
        answer: "Most DS projects fail due to bad problem framing. We fix that gap by training you in causal thinking, error analysis, and business decisioning—the exact skills hiring managers look for beyond 'knowing Python'."
    },
    {
        question: "How does the mentorship and feedback system work?",
        answer: "This isn't a recorded video class. You get live sessions in small-batch cohorts (1:10 ratio) with direct feedback on your modeling work and error analysis critiques from practicing Data Scientists."
    }
];

const DataScienceFBFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="w-full space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => toggleFAQ(index)}
                                className={`rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden relative group
                                    ${isOpen
                                        ? "bg-black border-[#0077FF] shadow-[0_0_20px_rgba(0,119,255,0.2)]"
                                        : "bg-[#0A0A0A] border-white/10 hover:border-white/20"
                                    }`}
                            >
                                <div className="p-6 md:p-8 flex justify-between items-start gap-4">
                                    <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                        {item.question}
                                    </h3>
                                    <div className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-0"}`}>
                                        {isOpen ? <X className="text-white" size={24} /> : <Plus className="text-gray-400" size={24} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 text-gray-400 text-base md:text-lg leading-relaxed border-t border-transparent">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default DataScienceFBFAQ;
