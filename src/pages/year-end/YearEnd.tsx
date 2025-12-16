import { useState, useCallback } from "react";
import { motion } from 'framer-motion';
import ProgramsSection from './components/ProgramsSection';
import FAQSection from './components/FAQSection';
import YearEndEnrollmentModal from "./components/YearEndEnrollmentModal";

const blurContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
};

const blurChildVariants = {
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
        x: -1,
    }
};

const BlurText = ({ text, className = "" }: { text: string, className?: string }) => {
    return (
        <motion.h1
            variants={blurContainerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-wrap justify-center gap-x-[0.25em] ${className}`}
        >
            {text.split(" ").map((word, index) => (
                <span key={index} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={blurChildVariants}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h1>
    );
};

const YearEnd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

    const handleEnroll = useCallback((courseName?: string) => {
        setSelectedCourse(courseName);
        setIsModalOpen(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#0A0A0A] selection:bg-blue-500/30">
            {/* Hero Section Container */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#5e4b44]/20 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#364b59]/20 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-[#2a303c]/30 blur-[100px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
                    >
                        <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">
                            MAKING AI LEARNING ACCESSIBLE FOR ALL
                        </span>
                    </motion.div>

                    {/* Hero Title */}
                    <BlurText
                        text="Learn Skills That Actually Get You Hired — Faster"
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight"
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        Real-world programs in GenAI, Product, Marketing & Analytics — built for people who want clarity, confidence, and career momentum.
                    </motion.p>

                    {/* Sale Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <p className="text-gray-300 text-lg">
                            Now up to <span className="font-bold text-white">40% off</span> as part of our <span className="font-bold text-white">Christmas & Year-End Sale</span>
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => handleEnroll()}
                            className="px-8 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-lg font-semibold transition-all duration-200 min-w-[160px]"
                        >
                            Claim the Offer
                        </button>
                        <button
                            onClick={() => handleEnroll()}
                            className="px-8 py-3.5 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium transition-all duration-200 min-w-[160px]"
                        >
                            Get Brochure
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* Content Sections */}
            <ProgramsSection onEnroll={handleEnroll} />

            {/* FAQ Section */}
            <FAQSection />

            {/* Enrollment Modal */}
            <YearEndEnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialCourse={selectedCourse}
            />
        </div>
    );
};

export default YearEnd;
