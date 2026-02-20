import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        icon: "/redesign/dm-ads-page/streamline-ultimate_work-from-home-user-pet-cat-bold(1).webp",
        text: "Fit for every tech professionals",
    },
    {
        icon: "/redesign/dm-ads-page/mingcute_target-white.webp",
        text: "Proven results",
    },
    {
        icon: "/redesign/dm-ads-page/mingcute_robot-white.webp",
        text: "Land your first AI Job",
    },
];

const AICrashCourseTestimonial: React.FC = () => {
    return (
        <section className="relative py-20 bg-black text-white overflow-hidden">
            {/* Background Dots */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(#333333 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.6
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                        Proven Skills, Real Results
                    </h2>
                    <p className="text-gray-400 mb-10 max-w-md leading-relaxed text-sm md:text-base">
                        Join hundreds of professionals who have transformed their careers with actionable AI skills.
                    </p>

                    <div className="flex flex-col gap-6 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-6 h-6 flex-shrink-0">
                                    <img
                                        src={feature.icon}
                                        alt=""
                                        className="w-full h-full object-contain brightness-0 invert"
                                    />
                                </div>
                                <span className="text-gray-300 text-sm md:text-base">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-xs">
                        <button className="group relative flex items-center justify-between w-full border-b border-gray-700 pb-3 text-white hover:text-white transition-colors cursor-pointer">
                            <span className="uppercase tracking-widest text-xs md:text-sm font-medium">GET YOUR SEAT</span>
                            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <p className="text-[#3b82f6] text-xs font-medium mt-1 tracking-wide">
                            The only program you need.
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    // Using the "Section" style border from previous requirement for consistency
                    className="w-full border border-[#373737] rounded-[25px] bg-[#0C0C0C] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start"
                >
                    <div className="relative flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                        <div className="w-48 h-56 rounded-xl overflow-hidden grayscale relative">
                            <img
                                src="/redesign/dm-ads-page/person.webp"
                                alt="Ram S"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 flex flex-col items-start gap-1">
                                <div className="bg-white text-black text-xs font-bold px-2 py-1">
                                    Ram S
                                </div>
                                <div className="bg-black/90 text-white border border-gray-700 text-[10px] font-medium px-2 py-0.5">
                                    Data Scientist
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic">
                            “I transformed my career with this AI program, mastering agent tech.
                            Now, I lead AI initiatives at Hyperdyne Systems. I transformed my
                            career with this AI program, mastering agent tech. Now, I lead AI
                            initiatives at Hyperdyne Systems.”
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AICrashCourseTestimonial;
