
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "I’m new to AI and have no technical background. Will I be able to understand this course?",
        answer: "Yes! This course is designed for beginners with no coding or AI experience. We start with the basics and gradually move to advanced applications, using a hands-on approach to make AI learning simple and practical. By the end of the course, you’ll be able to build AI-powered tools and automation solutions with ease."
    },
    {
        question: "What kind of real-world projects will I be working on?",
        answer: "You'll build practical agents like research assistants, coding helpers, and automation bots using tools like CrewAI, LangChain, and more."
    },
    {
        question: "Will I get a certification after completing the course?",
        answer: "Yes, you will receive a verified certificate of completion that you can share on LinkedIn and your resume."
    },
    {
        question: "I’m interested in AI for career growth. How will this course help me professionally?",
        answer: "You'll gain high-demand skills in building AI agents and workflows, making you valuable for roles in AI automation, prompt engineering, and product development."
    },
    {
        question: "Will I get support during the course if I have questions or get stuck?",
        answer: "Absolutely! We have a dedicated community and mentor support to ensure all your queries are resolved."
    }
];

const AICrashCourseFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-white font-bold text-[36px] md:text-[48px] leading-[100%] text-center mb-16">
                Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-6">
                {faqs.map((faq, index) => (
                    <FAQItemCard
                        key={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </section>
    );
};

const FAQItemCard = ({ faq, isOpen, onClick }: { faq: FAQItem, isOpen: boolean, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className={`w-full rounded-[16px] p-[30px] cursor-pointer transition-all duration-300 relative overflow-hidden group ${isOpen
                ? "bg-transparent"
                : "bg-black border border-[#252525] hover:border-[#48A2EB]/50"
                }`}
            style={isOpen ? {
                background: '#06060614', // From specs
                boxShadow: '0px 0px 20px 0px #AC0AE780',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #AC0AE7 0%, #48A2EB 100%)',
                backgroundOrigin: 'padding-box, border-box',
                backgroundClip: 'padding-box, border-box',
            } : {}}
        >
            <div className="flex justify-between items-start gap-4">
                <h3 className="font-heading text-white font-medium text-lg leading-tight flex-1">
                    {faq.question}
                </h3>
                <span className="text-white flex-shrink-0 mt-0.5">
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                </span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AICrashCourseFAQ;
