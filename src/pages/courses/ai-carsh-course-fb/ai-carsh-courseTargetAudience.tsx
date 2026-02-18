import React from "react";
import { motion } from "framer-motion";

const audienceData = [
    {
        icon: "/redesign/dm-ads-page/streamline-ultimate_work-from-home-user-pet-cat-purple.webp",
        text: (
            <>
                Ideal for professionals looking to <span className="text-purple-400 font-semibold">upskill</span> and stay relevant in the age of AI.
            </>
        ),
    },
    {
        icon: "/redesign/dm-ads-page/tdesign_user-business-filled.webp",
        text: (
            <>
                Perfect for entrepreneurs and <span className="text-orange-500 font-semibold">business owners</span> wanting to automate operations.
            </>
        ),
    },
    {
        icon: "/redesign/dm-ads-page/mingcute_robot-green.webp",
        text: (
            <>
                Designed for students and freshers aiming to <span className="text-emerald-500 font-semibold">land high-paying</span> AI roles.
            </>
        ),
    },
];

const AICrashCourseTargetAudience: React.FC = () => {
    return (
        <section className="relative py-20 bg-black text-white flex justify-center items-center px-4">

            {/* Main "Section" Container as requested */}
            <div className="w-full max-w-[1200px] border border-[#373737] rounded-[25px] relative overflow-hidden bg-black p-8 md:p-12 lg:p-16">
                {/* Background Dots */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: 'radial-gradient(#333333 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                        opacity: 0.6
                    }}
                />

                <div className="relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                            Who All Can Do This <br />
                            <span className="text-blue-500">Advanced Crash Course</span>
                        </h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {audienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group rounded-[15px] border border-[#4E4E4E] bg-[#2F2F2F] p-[4px]"
                            >
                                <div className="h-full rounded-[13px] border border-[#4E4E4E] bg-[#0C0C0C] p-6 flex flex-col gap-6">
                                    <div>
                                        <img
                                            src={item.icon}
                                            alt="Audience Icon"
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AICrashCourseTargetAudience;
