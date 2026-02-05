
import { motion } from "framer-motion";
import { Check, Calendar, Briefcase, TrendingUp } from "lucide-react";

const scheduleItems = [
    {
        title: "Live sessions outside work hours",
        desc: "Scheduled for evenings (8 PM - 10 PM) or weekends."
    },
    {
        title: "Recordings always available",
        desc: "Missed a session? Watch high-quality replays anytime."
    },
    {
        title: "Clear, structured roadmap",
        desc: "No time wasted searching for what to learn next."
    },
    {
        title: "Focused learning",
        desc: "High-impact curriculum designed to respect your time."
    }
];

const bottomBenefits = [
    {
        icon: <Briefcase size={20} className="text-[#0077FF]" />,
        text: "Designed for full-time professionals"
    },
    {
        icon: <Calendar size={20} className="text-[#0077FF]" />,
        text: "No daily time pressure"
    },
    {
        icon: <TrendingUp size={20} className="text-[#0077FF]" />,
        text: "Learn at a sustainable pace"
    }
];

const DataScienceFBSchedule = () => {
    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">
                        Can I <span className="text-[#0077FF]">Manage</span> This With My Job?
                    </h2>
                    <p className="text-gray-400 text-lg">
                        You don't need to quit your job to learn AI properly.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start w-full">

                    {/* Left Content */}
                    <div className="flex-1 max-w-xl">
                        <h3 className="text-2xl font-bold text-white mb-8">
                            Designed for Busy Professionals
                        </h3>
                        <div className="space-y-8">
                            {scheduleItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#0077FF] flex items-center justify-center shrink-0 mt-1">
                                        <Check size={14} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Schedule Graphic */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 w-full">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-semibold text-lg">Your Weekly Schedule</span>
                                <Calendar className="text-gray-500" size={24} />
                            </div>

                            <div className="space-y-3">
                                {/* Weekdays */}
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                                    <div key={day} className="flex items-center gap-4">
                                        <span className="text-gray-500 w-8 text-sm font-medium">{day}</span>
                                        <div className="flex flex-1 h-10 rounded-lg overflow-hidden gap-1">
                                            <div className="flex-[2] bg-[#1A1A1A] flex items-center justify-center text-gray-500 text-xs font-medium">Work</div>
                                            <div className="flex-1 bg-[#1A1A1A]/50 flex items-center justify-center text-gray-600 text-xs font-medium">Free</div>
                                        </div>
                                    </div>
                                ))}

                                {/* Weekend */}
                                <div className="h-px bg-white/10 my-4"></div>

                                {['Sat', 'Sun'].map((day) => (
                                    <div key={day} className="flex items-center gap-4">
                                        <span className="text-white w-8 text-sm font-medium">{day}</span>
                                        <div className="flex flex-1 h-10 rounded-lg overflow-hidden gap-1">
                                            <div className="flex-[1.5] bg-[#0077FF] flex items-center justify-center text-white text-xs font-medium">Class</div>
                                            <div className="flex-1 bg-[#1A1A1A]/50 flex items-center justify-center text-gray-600 text-xs font-medium">Free</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Benefits */}
                <div className="w-full h-px bg-white/10 my-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    {bottomBenefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center gap-3"
                        >
                            {item.icon}
                            <span className="text-gray-300 font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DataScienceFBSchedule;
