import { useState, useEffect } from "react";
import {
    freshersPath,
    switchPath,
} from "./AICrashCoursev2Constants";
import { GradientLabel } from "./AICrashCoursev2Part1";

// ── Component: Roadmap.tsx ───────────────────────────────────────────────────
export const Roadmap = () => {
    const [roadmapPath, setRoadmapPath] = useState<"switch" | "freshers">("switch");
    const currentPath = roadmapPath === "freshers" ? freshersPath : switchPath;

    return (
        <section className="min-h-[500px] lg:min-h-[815px] py-12 sm:py-16 lg:py-[100px] px-4 md:px-8 lg:px-[70px] bg-[#0A0A0A]">
            <div className="max-w-[1440px] mx-auto text-center">
                <GradientLabel text="PROGRAMS ROADMAP" />
                <p className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 px-2">Advanced AI Roadmap for Working Professionals & Freshers</p>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[1047px] mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2">
                    2,000+ learners across India are transitioning into AI careers by building AI agents, automation workflows, and real-world AI systems.

                </p>

                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button
                        onClick={() => setRoadmapPath("switch")}
                        className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "switch" ? "bg-[#EA580C] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Career Switch
                    </button>
                    <button
                        onClick={() => setRoadmapPath("freshers")}
                        className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "freshers" ? "bg-[#EA580C] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Freshers
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-white font-medium text-[16px] sm:text-[20px] mb-4 tracking-tight">
                        {roadmapPath === "freshers"
                            ? "Start Your Career in Ai Advanced AI Crash From zero"
                            : "Transition into High-Paying AI Roles."}
                    </p>
                    <div className="inline-flex items-center justify-center px-4 py-[6px] rounded-[30px] border border-[#EA580C] bg-white/5 text-[#EA580C] text-[11px] sm:text-[12px] font-bold leading-[20px] uppercase mb-[40px] sm:mb-[90px] tracking-wide">
                        {roadmapPath === "freshers" ? "FRESHERS PATH" : "CAREER SWITCHERS PATH"}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 sm:gap-y-6 w-full max-w-[1288px] mx-auto">
                    {currentPath.map((item: any, idx) => (
                        <div
                            key={idx}
                            className={`relative group w-full max-w-[664px] min-h-[100px] sm:min-h-[111px] h-auto py-[10px] sm:py-4 mx-auto cursor-pointer 
                                ${idx === 4 ? 'md:col-span-2' : ''} 
                                ${idx % 2 !== 0 && idx !== 4 ? 'md:ml-[-1px]' : ''}`}
                        >
                            <svg width="100%" height="100%" viewBox="0 0 664 111" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <defs>
                                    <linearGradient id={`cardGradient-crash-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0A0A0A" />
                                        <stop offset="100%" stopColor="#141414" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d={idx % 2 === 0
                                        ? "M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                        : "M76 0H640C653.255 0 664 10.7452 664 24V87C664 100.255 653.255 111 640 111H20C8 111 0 105 4 95L52 16C56 6 64 0 76 0Z"
                                    }
                                    className="transition-all duration-300 group-hover:stroke-white/60 group-hover:stroke-[1.2px] group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.2))] hover-glow-path"
                                    fill={`url(#cardGradient-crash-${idx})`}
                                    stroke="white"
                                    strokeOpacity="0.1"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <div className={`relative flex flex-col gap-1 h-full justify-center ${idx % 2 === 0 ? 'pl-6 sm:pl-10 pr-12 sm:pr-20' : 'pl-[50px] sm:pl-[88px] pr-6 sm:pr-10'}`}>
                                <div className="flex items-center gap-3 sm:gap-5 text-left">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-[14px] sm:text-[16px] font-bold text-[#ECECEC] font-['Inter',sans-serif] tracking-tight">{item.title}</h3>
                                </div>
                                <div className="pl-8 sm:pl-11 text-left">
                                    <p className="text-[12px] sm:text-[14px] text-[#C2C2C2] font-normal leading-tight font-['Inter',sans-serif]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Component: ProgramDesign.tsx ───────────────────────────────────────────────────
export const programBenefits = [
    {
        icon: <div className="text-3xl">👨‍🏫</div>,
        title: "1:1 Mentorship from AI Experts",
        desc: <>Learn directly from professionals working in <span className="text-white font-bold">AI, machine learning, automation, and product roles</span>.</>
    },
    {
        icon: <div className="text-3xl">💻</div>,
        title: "Live Project-Based Learning",
        desc: <>Build <span className="text-white font-bold">AI agents, automation workflows, and real-world AI systems</span> in real-time.</>
    },
    {
        icon: <div className="text-3xl">📚</div>,
        title: "Industry-Relevant AI Curriculum",
        desc: <>Stay updated with the <span className="text-white font-bold">latest Generative AI tools, LLMs, automation trends</span>, and production-level AI systems.</>
    },
    {
        icon: <div className="text-3xl">🚀</div>,
        title: "Career-Focused Learning Path",
        desc: <>Move from learning AI to earning with <span className="text-white font-bold">job-ready skills, portfolio projects, and career support</span>.</>
    }
];

export const ProgramDesign = () => {
    const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
    const [isReturning, setIsReturning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBenefitIndex((prev) => {
                const next = (prev + 1) % 4;
                if (next === 0) {
                    setIsReturning(true);
                } else {
                    setIsReturning(false);
                }
                return next;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 lg:py-32 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center px-4">
                <GradientLabel text="PROGRAM BENEFITS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4">Designed for Real-World AI Execution</h2>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[900px] mx-auto leading-relaxed font-medium">
                    You learn by building Advanced AI systems, automation workflows, and real business applications used in companies.
                </p>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] items-center justify-center max-w-[1188px] mx-auto min-h-[300px] lg:min-h-[400px] mt-12 sm:mt-20">
                    <div className="relative flex-shrink-0 w-full max-w-[605px] lg:w-[605px] aspect-[605/351] rounded-[24px] overflow-hidden shadow-2xl border border-white/[0.08] bg-[#0D0D0D]">
                        <div className="w-full h-full relative">
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[11px] font-bold text-white/90 tracking-wide uppercase">Live Sprint</span>
                            </div>
                            <img src="/assets/programdesign.png" alt="Crash Course Design" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 mt-0 lg:mt-11 flex-shrink-0 w-full max-w-[543px]">
                        <div className="relative w-full max-w-[543px] aspect-[543/334] rounded-[32px] overflow-hidden border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-xl shadow-2xl">
                            <div
                                className={`flex w-max transition-transform ${isReturning ? "duration-[1000ms] ease-in-out" : "duration-[450ms] ease-out"}`}
                                style={{ transform: `translateX(-${(activeBenefitIndex % 4) * 100 / 4}%)` }}
                            >
                                {programBenefits.map((benefit, idx) => (
                                    <div key={idx} className="w-full max-w-[543px] aspect-[543/334] flex-shrink-0 p-8 text-left flex flex-col justify-start" style={{ width: '25%' }}>
                                        <div className="flex items-center gap-3 mb-5 mt-2">
                                            <div className="flex-shrink-0">{benefit.icon}</div>
                                            <h3 className="text-[18px] font-bold text-white tracking-tight">{benefit.title}</h3>
                                        </div>
                                        <p className="text-[#C2C2C2] text-[16px] leading-[1.6] font-medium">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === (activeBenefitIndex % 4) ? "bg-[#EA580C] w-6" : "bg-white/20"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
