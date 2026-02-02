import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCourseContext } from "../../../context/courseContext";
import EnrollmentModal from "../../../components/EnrollmentModal";

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
        <span className="text-xl md:text-3xl font-bold text-white">
            {count}
            {suffix}
        </span>
    );
};

export default function GENHeroEIE() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setSelectedCourse } = useCourseContext();
    const [isDownload, setIsDownload] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsDownload(false);
    };

    const handleModalSubmit = () => {
        if (isDownload) {
            window.open(
                "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzM4NzM1MTI1LCJleHAiOjE3NzAyNzExMjV9.t6cs2LulI_9QaZmYub0mjJL8Yqelj8hDnR6ESIh_8Jc"
            );
        }
        handleModalClose();
    };

    useEffect(() => {
        setSelectedCourse("Generative AI");
    }, [setSelectedCourse]);

    return (
        <section
            className="relative min-h-[800px] bg-cover bg-center pt-32 pb-20 overflow-hidden"
            style={{ backgroundImage: "url('/redesign/background/course-gb.webp')" }}
        >
            {/* Decorative Images */}
            <img
                src="/redesign/gen-ai/claude.png"
                alt="Claude AI"
                className="absolute right-8 top-32 w-16 h-16 object-contain opacity-80 hidden lg:block animate-float-delayed"
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 relative z-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight font-medium">
                        Stay Ahead in Your Career with
                        <br />
                        <span className="italic">Generative AI & AI Agents</span>
                    </h1>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-px bg-white/20 mb-10 origin-left"
                ></motion.div>

                {/* Ellipse Background - Behind Description */}


                <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
                    {/* Left Col - Program Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-black dark:bg-[#171717] border border-white/20 dark:border-[#848484]/30 rounded-full px-5 py-2 text-white dark:text-white text-sm font-medium tracking-wide shadow-lg transition-all duration-300">
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                            14 WEEKS PROGRAM
                        </div>
                    </motion.div>

                    {/* Right Col - Description and Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-8 items-end flex flex-col gap-4 relative bg-red"
                    >
                        <div
                            className="absolute -right-32 top-2/3 -translate-y-1/2 w-[1080px] h-[1080px] opacity-45 bg-contain bg-center bg-no-repeat pointer-events-none"
                            style={{ backgroundImage: "url('/redesign/gen-ai/elips.webp')" }}
                        ></div>
                        <p className="text-gray-200 relative text-lg leading-relaxed mb-10 max-w-2xl text-right lg:text-left">
                            Learn to build, automate, and deploy real-world AI systems using Generative AI, LLMs, autonomous agents, and production-grade workflows.
                        </p>

                        <div className="flex relative flex-wrap gap-4 justify-center md:justify-end lg:justify-start">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-3.5 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
                            >
                                Apply Now
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => { setIsModalOpen(true); setIsDownload(true); }}
                                className="px-8 py-3.5 bg-[#FFC107] hover:bg-yellow-500 text-black rounded-full font-semibold transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2 group"
                            >
                                Get Full Curriculum
                                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section - Bottom Left */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-24 flex flex-row gap-4 md:gap-6  lg:w-[240px] relative"
                >
                    <img
                        src="/redesign/gen-ai/langchain.png"
                        alt="Langchain"
                        className="absolute -left-24 top-24 w-16 h-16 object-contain opacity-80 hidden lg:block animate-float"
                    />
                    {/* Stat 1 */}
                    <div className="flex-1 border border-white/20 dark:border-[#848484]/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-[#171717]/50 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-[#171717]/80 transition-all duration-300">
                        <div className="mb-1 md:mb-2"><Counter end={16} suffix=" LPA" /></div>
                        <div className="text-gray-300 text-xs md:text-base font-medium">Average Salary Package</div>
                    </div>
                    {/* Stat 2 */}
                    <div className="flex-1 border border-white/20 dark:border-[#848484]/30 rounded-2xl p-4 md:p-6 bg-white/5 dark:bg-[#171717]/50 backdrop-blur-sm min-w-0 md:min-w-[240px] hover:bg-white/10 dark:hover:bg-[#171717]/80 transition-all duration-300">
                        <div className="mb-1 md:mb-2"><Counter end={40000} suffix=" +" /></div>
                        <div className="text-gray-300 text-xs md:text-base font-medium">Job Openings</div>
                    </div>
                </motion.div>

            </div>

            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </section>
    );
}
