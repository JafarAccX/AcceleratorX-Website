import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCourseContext } from "../../../../context/courseContext";
import EnrollmentModal from "../../../../components/EnrollmentModal";
import { Typewriter } from "../../../../components/common/Typewriter";

interface CounterProps {
    end: number;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.round(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [end]);

    return (
        <span className="text-xl md:text-3xl font-bold text-white dark:text-white">
            {count}
            {suffix}
        </span>
    );
};

export default function DataScienceHeroEIE() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDownload, setIsDownload] = useState(false);
    const { setSelectedCourse } = useCourseContext();
    const [isTypingDone, setIsTypingDone] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsDownload(false);
    };

    const handleModalSubmit = () => {
        if (isDownload) {
            window.open(
                "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758293290835_notes_AI_Powered_DA_Brochure.pdf?alt=media&token=1bbeb25b-e1aa-49e2-8752-3e7a6b7b4e52",
            );
        }
        handleModalClose();
    };

    useEffect(() => {
        setSelectedCourse("Data Science");
    }, [setSelectedCourse]);

    return (
        <section
            className="relative min-h-[800px] bg-cover bg-center pt-32 pb-20 overflow-hidden"
            style={{ backgroundImage: "url('/redesign/ai-da/ai-da-hero.webp')" }}
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10 pt-10">
                <Typewriter
                    text="INITIALIZING . . ."
                    onComplete={() => setIsTypingDone(true)}
                    className="mb-8"
                />

                {isTypingDone && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <h1 className="text-5xl md:text-7xl font-serif text-white dark:text-white leading-tight font-medium">
                                Become a <br />
                                <span className="italic font-light text-[#3B82F6]">Production-Ready Data Scientist</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full h-px bg-white/20 dark:bg-white/20 mb-10 origin-left"
                        ></motion.div>

                        <div className="grid lg:grid-cols-12 gap-8 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="lg:col-span-4"
                            >
                                <div className="inline-flex items-center gap-2 bg-black dark:bg-[#171717] border border-white/20 dark:border-[#848484]/30 rounded-full px-5 py-2 text-white dark:text-white text-sm font-medium tracking-wide shadow-lg backdrop-blur-sm transition-colors duration-300">
                                    <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
                                    25 Live Sessions • Build-First
                                </div>
                                <div className="mt-4 text-gray-300 text-sm font-medium">
                                    2025 Ready | Real ML Systems | End-to-End MLOps
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="lg:col-span-8 items-end flex flex-col gap-4"
                            >
                                <p className="text-gray-200 dark:text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl ml-auto text-right lg:text-left lg:ml-0 lg:mr-0 transition-colors duration-300">
                                    Build real machine learning systems, not just notebooks. Master the art of framing business problems, evaluating models, and deploying production-ready ML pipelines.
                                </p>

                                <div className="flex flex-wrap gap-4 justify-center md:justify-end lg:justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-8 py-3.5 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
                                    >
                                        Apply Now
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => { setIsModalOpen(true); setIsDownload(true); }}
                                        className="px-8 py-3.5 bg-white hover:bg-gray-100 text-black rounded-full font-semibold transition-all shadow-lg flex items-center gap-2 group"
                                    >
                                        View Curriculum
                                        <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-24 flex flex-row gap-4 md:gap-6 lg:w-[240px]"
                        >
                            <div className="flex-1 border border-white/20 dark:border-[#848484]/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-[#171717]/50 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-[#171717]/80 transition-colors duration-300">
                                <div className="mb-1 md:mb-2"><Counter end={14} suffix=" LPA" /></div>
                                <div className="text-gray-300 dark:text-gray-300 text-xs md:text-base font-medium transition-colors duration-300">Average DS Salary</div>
                            </div>
                            <div className="flex-1 border border-white/20 dark:border-[#848484]/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-[#171717]/50 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-[#171717]/80 transition-colors duration-300">
                                <div className="mb-1 md:mb-2"><Counter end={50000} suffix=" +" /></div>
                                <div className="text-gray-300 dark:text-gray-300 text-xs md:text-base font-medium transition-colors duration-300">DS & ML Job Openings</div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>

            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </section>
    );
}
