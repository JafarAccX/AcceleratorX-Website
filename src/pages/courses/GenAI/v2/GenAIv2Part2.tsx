import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
    freshersPath,
    switchPath,
    ibmModules,
    regularModules,
    MENTORS,
    TOOLS_LIST,
    PM_PHASES
} from "./GenAIv2Constants";
import { GradientLabel } from "./GenAIv2Part1";

// ── Component: Roadmap.tsx ───────────────────────────────────────────────────
export const Roadmap = () => {
    const [roadmapPath, setRoadmapPath] = useState<"switch" | "freshers">("switch");
    const currentPath = roadmapPath === "freshers" ? freshersPath : switchPath;

    return (
        <section className="min-h-[500px] lg:min-h-[815px] py-12 sm:py-16 lg:py-24 px-4 md:px-8 lg:px-[70px] bg-[#0A0A0A]">
            <div className="max-w-[1440px] mx-auto text-center">
                <GradientLabel text="PROGRAMS  ROADMAP" />
                <p className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 px-2">Generative AI Roadmap for Working Professionals & Freshers</p>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[1047px] mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2">
                    2,000+ learners across India are transitioning into Generative AI careers by building real projects and applying AI in their work.
                </p>

                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button
                        onClick={() => setRoadmapPath("switch")}
                        className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "switch" ? "bg-[#FC6401] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Career Switch
                    </button>
                    <button
                        onClick={() => setRoadmapPath("freshers")}
                        className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "freshers" ? "bg-[#FC6401] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Freshers
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-white font-medium text-[18px] sm:text-[18px] mb-4 tracking-tight">
                        {roadmapPath === "freshers"
                            ? "Start Your Career in Generative AI From Zero"
                            : "Transition into AI Roles"}
                    </p>
                    <div className="inline-flex items-center justify-center px-3 py-[4px] rounded-[30px] border border-[#FC6401] bg-white/5 text-[#FC6401] text-[11px] sm:text-[12px] font-bold leading-[20px] uppercase mb-[40px] sm:mb-[90px]">
                        {roadmapPath === "freshers" ? "FRESHERS PATH" : "CAREER SWITCHERS PATH"}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 sm:gap-y-6 w-full max-w-[1288px] mb-4 sm:mb-6">
                    {currentPath.slice(0, 4).map((item, idx) => (
                        <div key={idx} className={`relative group w-full max-w-[664px] min-h-[100px] sm:min-h-[111px] h-auto py-[10px] sm:py-4 mx-auto cursor-pointer ${idx % 2 !== 0 ? 'md:ml-[-1px]' : ''}`}>
                            <svg width="100%" height="100%" viewBox="0 0 664 111" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <defs>
                                    <linearGradient id={`cardGradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
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
                                    fill={`url(#cardGradient-${idx})`}
                                    stroke="white"
                                    strokeOpacity="0.1"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <div className={`relative flex flex-col gap-1 h-full justify-center ${idx % 2 === 0 ? 'pl-6 sm:pl-10 pr-12 sm:pr-20' : 'pl-[50px] sm:pl-[88px] pr-6 sm:pr-10'}`}>
                                <div className="flex items-center gap-3 sm:gap-5">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-[13px] sm:text-[14px] font-bold text-[#ECECEC] font-['Inter',sans-serif] tracking-tight">{item.title}</h3>
                                </div>
                                <div className="pl-8 sm:pl-11 text-left">
                                    <p className="text-[12px] sm:text-[14px] text-[#C2C2C2] font-normal font-['Inter',sans-serif]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-2 sm:mt-4">
                    {currentPath[4] && (
                        <div className="relative group w-full max-w-[664px] min-h-[100px] sm:min-h-[111px] h-auto py-[10px] sm:py-4 cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 664 111" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <defs>
                                    <linearGradient id="cardGradientCentered" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0A0A0A" />
                                        <stop offset="100%" stopColor="#141414" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                    className="transition-all duration-300 group-hover:stroke-white/60 group-hover:stroke-[1.2px] group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.2))] hover-glow-path"
                                    fill="url(#cardGradientCentered)"
                                    stroke="white"
                                    strokeOpacity="0.1"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <div className="relative pl-6 sm:pl-10 pr-12 sm:pr-20 flex flex-col gap-1 h-full justify-center">
                                <div className="flex items-center gap-3 sm:gap-5">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                        <img src={currentPath[4].icon} alt={currentPath[4].title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-[13px] sm:text-[14px] font-bold text-[#ECECEC] font-['Inter',sans-serif] tracking-tight">{currentPath[4].title}</h3>
                                </div>
                                <div className="pl-8 sm:pl-11 text-left">
                                    <p className="text-[12px] sm:text-[14px] text-[#C2C2C2] font-normal font-['Inter',sans-serif]">
                                        {currentPath[4].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// ── Component: ProgramDesign.tsx ───────────────────────────────────────────────────
export const programBenefits = [
    {
        icon: <img src="/assets/productmanagement/leftrbag.png" alt="1:1 Mentorship" className="w-8 h-8 object-contain" />,
        title: "Personalized 1:1 Mentorship",
        desc: <>2,000+ learners across India — from Bengaluru to Bhilai — are already building real AI skills and getting into top companies. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Live Project-Based Learning" className="w-8 h-8 object-contain" />,
        title: "Live Project-Based Learning",
        desc: <>Build <span className="text-white font-bold">AI workflows, ChatGPT use cases, and automation systems</span> in real-time.</>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Industry-Relevant AI Curriculum" className="w-8 h-8 object-contain" />,
        title: "Industry-Relevant AI Curriculum",
        desc: <>Stay updated with the latest <span className="text-white font-bold">Generative AI tools, automation trends, and real-world use cases.</span></>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Career-Focused Learning Path" className="w-8 h-8 object-contain" />,
        title: "Career-Focused Learning Path",
        desc: <>Move from learning to earning with <span className="text-white font-bold">job-ready AI skills and project portfolios.</span></>
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
        <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAMS BENEFITS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Designed for Real-World AI Execution</h2>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[800px] mx-auto mb-12 sm:mb-20 leading-relaxed font-medium">
                    You learn by building Generative AI projects, automation workflows, and real business applications.
                </p>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] items-center justify-center max-w-[1188px] mx-auto min-h-[300px] lg:min-h-[400px]">
                    <div className="relative flex-shrink-0 w-full max-w-[605px] lg:w-[605px] aspect-[605/351] rounded-[5px] overflow-hidden shadow-2xl border border-white/[0.08] bg-[#0D0D0D]">
                        <div className="w-full h-full relative">
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] sm:text-[11px] font-bold text-white/90 tracking-wide uppercase">Live Class</span>
                            </div>
                            <img src="/assets/programdesign.png" alt="Program Design" className="w-full h-full object-contain" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 w-[140px] sm:w-[180px] p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl text-left">
                                <p className="text-[11px] sm:text-[13px] font-bold text-white leading-tight">Mentored by<br />Top 1% Industry Experts</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    <div className="flex flex-col items-center gap-4 sm:gap-6 mt-0 lg:mt-11 flex-shrink-0 w-full max-w-[543px]">
                        <div className="relative w-full max-w-[543px] lg:w-[543px] aspect-[543/334] lg:h-[334px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-xl shadow-2xl">
                            <div
                                className={`flex w-max transition-transform ${isReturning ? "duration-[1000ms] ease-in-out" : "duration-[450ms] ease-out"}`}
                                style={{ transform: `translateX(-${(activeBenefitIndex % 4) * 100 / 4}%)` }}
                            >
                                {programBenefits.map((benefit, idx) => (
                                    <div key={idx} className="w-full max-w-[543px] lg:w-[543px] aspect-[543/334] lg:h-[334px] flex-shrink-0 p-6 sm:p-8 lg:p-8 text-left flex flex-col justify-start" style={{ width: '25%' }}>
                                        <div className="flex items-center gap-3 mb-4 sm:mb-5 mt-2">
                                            <div className="flex-shrink-0">{benefit.icon}</div>
                                            <h3 className="text-[15px] sm:text-[18px] font-bold text-white tracking-tight">{benefit.title}</h3>
                                        </div>
                                        <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] leading-[1.6] font-medium">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === (activeBenefitIndex % 4) ? "bg-white w-6" : "bg-white/20"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
