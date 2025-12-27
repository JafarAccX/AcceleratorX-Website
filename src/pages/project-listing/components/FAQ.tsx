import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
    {
        question: "What kind of background do I need to join the AI program at AcceleratorX?",
        answer: "You don't need any prior AI or programming experience to join. The program is designed for beginners, freelancers, working professionals or entrepreneurs looking to enter the AI domain. AcceleratorX offers a no-code, hands-on learning path, so you can learn practical AI skills without needing to write code."
    },
    {
        question: "What kinds of AI programs does AcceleratorX offer?",
        answer: "AcceleratorX offers a variety of AI programs ranging from introductory courses to advanced specializations, focusing on practical application and real-world skills."
    },
    {
        question: "Will I receive a certificate after completing the program?",
        answer: "Yes, upon successful completion of the program and all required projects, you will receive a verified certificate from AcceleratorX."
    },
    {
        question: "Are there real-world projects included in the course?",
        answer: "Absolutely! Our curriculum is project-based, meaning you will work on multiple real-world scenarios and build a portfolio of projects to showcase your skills."
    },
    {
        question: "What kind of support is available if I get stuck during the program?",
        answer: "We provide comprehensive support including dedicated mentorship, a community forum for peer support, and regular Q&A sessions to ensure you never feel stuck."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Infant'] text-[#1A1A1A] text-center mb-16">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-[#EEEEEE]' : 'bg-[#F9F9F9] hover:bg-[#F5F5F5]'
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className="font-semibold text-[#1A1A1A] text-lg pr-8">
                                {faq.question}
                            </span>
                            <span className="flex-shrink-0 text-gray-500">
                                {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                            </span>
                        </button>

                        <div
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
