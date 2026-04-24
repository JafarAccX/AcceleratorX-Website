import { ArrowRight, Briefcase, IndianRupee, Megaphone, Users, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useCourseContext } from "../../../../context/courseContext";
import EnrollmentModal from "../../../../components/modals/EnrollmentModal";

const COUNTER_STATS = [
    {
        icon: <Briefcase className="w-5 h-5 text-orange-500" />,
        value: "3200+",
        label: "Active Jobs",
        delay: 0.1
    },
    {
        icon: <IndianRupee className="w-5 h-5 text-orange-500" />,
        value: "16.6 L",
        label: "Avg CTC Offered",
        delay: 0.2
    }
];

const HIRING_LOGOS = [
    { name: "Microsoft", src: "/redesign/corporate/logos/microsoft.png" },
    { name: "Deloitte", src: "/redesign/corporate/logos/deloitte.png" },
    { name: "Paisabazaar", src: "/redesign/corporate/logos/paissabazaar.png" },
    { name: "Bajaj Finserv", src: "/redesign/corporate/logos/bajaj.png" },
    { name: "Indian Government", src: "/redesign/corporate/logos/indiangov.png" },
    { name: "Razorpay", src: "/redesign/corporate/logos/razorpay.png" }
];

export default function GenAIHero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setSelectedCourse } = useCourseContext();

    useEffect(() => {
        setSelectedCourse("Generative AI");
    }, [setSelectedCourse]);

    return (
        <section className="relative min-h-[90vh] bg-[#0A0A0A] pt-32 pb-24 overflow-hidden flex items-center">
            {/* Background Grid & Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Content */}
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-12 h-px bg-[#FC6401]" />
                            <span className="font-heading text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
                                IN COLLABORATION WITH <span className="text-white">IBM</span>
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-heading text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight"
                        >
                            Become <br />
                            <span className="text-[#FC6401]">AI-Ready</span> <br />
                            with Gen AI
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-sans text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed"
                        >
                            From understanding core concepts to deploying practical solutions—gain the capability to use AI where it matters most.
                        </motion.p>

                        {/* Stats Card */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#111]/80 border border-white/5 rounded-[32px] p-8 mb-14 flex flex-wrap gap-12 backdrop-blur-xl shadow-2xl"
                        >
                            {COUNTER_STATS.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FC6401]/10 flex items-center justify-center border border-[#FC6401]/20">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-white text-4xl font-bold font-heading italic tracking-tighter">{stat.value}</div>
                                        <div className="text-gray-600 text-[10px] font-bold font-sans uppercase tracking-[0.2em]">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Hiring Logos */}
                        <div className="mb-16">
                            <p className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                                TOP COMPANIES HIRING RIGHT NOW
                            </p>
                            <div className="flex flex-wrap items-center gap-10 opacity-30 grayscale contrast-125">
                                {HIRING_LOGOS.map((logo, idx) => (
                                    <img 
                                        key={idx} 
                                        src={logo.src} 
                                        alt={logo.name} 
                                        className="h-5 md:h-6 w-auto object-contain" 
                                        onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${logo.name.charAt(0)}&background=111&color=fff`; }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-12">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative w-20 h-20 flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-[#FC6401] rounded-full animate-ping opacity-20" />
                                <div className="w-20 h-20 bg-[#FC6401] rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-[0_0_30px_rgba(252,100,1,0.5)]">
                                    <span className="font-bold text-sm uppercase tracking-widest">Dive in</span>
                                </div>
                                <div className="absolute -right-16 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all group-hover:-right-12">
                                    <span className="text-[#FC6401] font-bold text-xs uppercase tracking-widest">Start Now</span>
                                    <ChevronRight size={16} className="text-[#FC6401]" />
                                </div>
                            </button>
                            
                            <a 
                                href="#curriculum" 
                                className="font-heading text-lg font-bold text-white group flex items-center gap-4 hover:text-[#FC6401] transition-all"
                            >
                                <span className="w-12 h-px bg-white/20 group-hover:bg-[#FC6401] transition-all" />
                                Explore Syllabus
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Mentor & Badges */}
                    <div className="relative flex items-center justify-center">
                        {/* Large Orange Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FC6401]/20 blur-[120px] rounded-full pointer-events-none" />

                        {/* Main Mentor Container */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-[40px] overflow-visible"
                        >
                            <div className="absolute inset-0 bg-[#111] border border-white/10 rounded-[40px] overflow-hidden">
                                {/* Placeholder for Mentor Image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xs font-heading font-bold opacity-30 select-none">
                                    MENTOR IMAGE (IBM COLLABORATION)
                                </div>
                            </div>

                            {/* Badges Overlay */}
                            {/* Happy Students */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-10 -left-10 bg-white p-4 rounded-2xl shadow-2xl z-30"
                            >
                                <p className="text-black text-[10px] font-bold uppercase mb-2">Happy Students</p>
                                <div className="flex items-center -space-x-3">
                                    {[1, 2, 3, 4].map(idx => (
                                        <div key={idx} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden" />
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white text-[8px] flex items-center justify-center font-bold">1998+</div>
                                </div>
                            </motion.div>

                            {/* Live Classes Badge */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/3 -right-6 lg:-right-12 bg-white px-6 py-3 rounded-full shadow-2xl z-30 flex items-center gap-3 border border-gray-100"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Megaphone size={16} />
                                </div>
                                <span className="text-black font-bold text-sm whitespace-nowrap">Live Classes</span>
                            </motion.div>

                            {/* Mentor Connect Badge */}
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/3 -right-10 lg:-right-20 bg-white px-6 py-3 rounded-full shadow-2xl z-30 flex items-center gap-3 border border-gray-100"
                            >
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                    «»
                                </div>
                                <span className="text-gray-500 font-bold text-sm whitespace-nowrap">
                                    <span className="text-[#FC6401]">Mentor Connect</span>
                                </span>
                            </motion.div>

                            {/* Career Support Badge */}
                            <motion.div 
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-10 -left-12 bg-white px-6 py-3 rounded-full shadow-2xl z-30 flex items-center gap-3 border border-gray-100"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Briefcase size={16} />
                                </div>
                                <span className="text-blue-600 font-bold text-sm whitespace-nowrap">Career Support</span>
                            </motion.div>

                            {/* Collaboration Badge */}
                            <div className="absolute top-6 right-6 text-right z-30">
                                <p className="text-white/60 text-[10px] font-bold uppercase mb-1">In collaboration with IBM</p>
                                <div className="text-white font-heading text-xl font-bold tracking-tighter">IBM</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={() => setIsModalOpen(false)} />
        </section>
    );
}
