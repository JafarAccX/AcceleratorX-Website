import { useState, useCallback } from "react";
import { motion } from 'framer-motion';
import ProgramsSection from './components/ProgramsSection';
import FAQSection from './components/FAQSection';
import YearEndEnrollmentModal from "./components/YearEndEnrollmentModal";
import AnimatedOfferButton from './components/AnimatedOfferButton';

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
            <div className="relative min-h-screen bg-gradient-to-b from-[#DC143C] via-[#FF6B6B] to-[#FF8A80] flex items-center justify-center overflow-hidden">
                {/* Full-screen Snowing Effect Overlay */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
                    {/* Top row - 8 columns */}
                    <div className="absolute top-0 -left-20 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-0 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-[12.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-[37.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-1/2 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-[62.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-3/4 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-0 left-[87.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>

                    {/* Middle row - 8 columns */}
                    <div className="absolute top-1/3 -left-20 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-0 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-[12.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-[37.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-[62.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-3/4 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-1/3 left-[87.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>

                    {/* Bottom row - 8 columns */}
                    <div className="absolute top-2/3 -left-20 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-0 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-[12.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-1/4 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-[37.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-1/2 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-[62.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-3/4 w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute top-2/3 left-[87.5%] w-[400px] h-[400px]">
                        <img src="/xmas-lottie/Snowing.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Optional: Subtle overlay gradients for depth */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent" />
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
                        className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
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
                        <p className="text-gray-100 text-lg">
                            Now up to <span className="font-bold text-white">40% off</span> as part of our <span className="font-bold text-white">Christmas & Year-End Sale</span>
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-row items-center justify-center gap-4"
                    >
                        <div className="px-8 py-3.5 min-w-[200px] bg-transparent  relative">
                            <div className="absolute -top-[58px] md:-top-[85px]  md:-left-16">
                                <AnimatedOfferButton
                                    onClick={() => handleEnroll()}
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => handleEnroll()}
                            className=" text-xs p-4 py-3 md:px-8 md:py-3.5 bg-transparent border border-white-600 hover:bg-white hover:text-black text-white rounded-lg font-medium transition-all duration-200 min-w-[120px] md:min-w-[160px]"
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
