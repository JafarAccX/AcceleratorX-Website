import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProgramCard from './ProgramCard';

const programs = [
    {
        category: "CAREER-FOCUSED PROGRAM",
        title: "AI Product Management",
        description: "Learn how modern products are built using data, AI, and user insight — not just frameworks and buzzwords. Designed to help you think, communicate, and perform like a real Product Manager.",
        image: "/redesign/year-end/pm.webp"
    },
    {
        category: "FUTURE-READY SKILLS",
        title: "Generative AI",
        description: "Understand how GenAI fits into real jobs — from automation to content, strategy, and decision-making. Built for professionals who want to use AI confidently, not fear it.",
        image: "/redesign/year-end/genai.webp"
    },
    {
        category: "PERFORMANCE & GROWTH",
        title: "AI Digital Marketing",
        description: "Learn how marketing actually works today — paid ads, funnels, analytics, and AI-powered execution. Made for people who want results, not just theory.",
        image: "/redesign/year-end/dm.webp"
    },
    {
        category: "DATA-DRIVEN CAREERS",
        title: "AI Data Analytics",
        description: "Go from raw data to real insights using tools companies actually use. Perfect for beginners, career switchers, and professionals who want stronger decision-making skills.",
        image: "/redesign/year-end/da.webp"
    }
];

interface ProgramsSectionProps {
    onEnroll: (courseName: string) => void;
}

const ProgramsSection = ({ onEnroll }: ProgramsSectionProps) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-120px"
    });

    return (
        <section ref={sectionRef} className="py-24 bg-[#140a0c] relative z-10 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-24"
                >
                    Programs We Offer
                </motion.h2>

                <div className="space-y-24">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={program.title}
                            {...program}
                            isReversed={index % 2 !== 0}
                            onEnroll={onEnroll}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
