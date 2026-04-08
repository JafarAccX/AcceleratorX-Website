import { 
  ibmModules, 
  regularModules,
  MENTORS
} from "./GenAIv2Constants";
import { GradientLabel } from "./GenAIv2Part1";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────
export const Curriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(null);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="WHAT YOU WILL LEARN IN THIS GENERATIVE AI COURSE" highlight="GENERATIVE AI COURSE" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Program Curriculum</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[800px] mx-auto mb-10 sm:mb-16 leading-relaxed">
                    This program covers everything from fundamentals to advanced AI workflows, tools, and automation systems.
                </p>

                <div className="inline-flex bg-[#111] p-1.5 rounded-full mb-10 sm:mb-16">
                    <button onClick={() => setCurrMode("ibm")} className={`px-5 sm:px-8 py-2.5 sm:py-3 border-none rounded-full text-[13px] sm:text-sm font-bold cursor-pointer transition-all duration-300 ${currMode === "ibm" ? "bg-[#FF6701] text-white" : "bg-transparent text-white"}`}>IBM + AcceX</button>
                    <button onClick={() => setCurrMode("regular")} className={`px-5 sm:px-8 py-2.5 sm:py-3 border-none rounded-full text-[13px] sm:text-sm font-bold cursor-pointer transition-all duration-300 ${currMode === "regular" ? "bg-[#FF6701] text-white" : "bg-transparent text-white"}`}>Regular</button>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 max-w-[1276px] mx-auto">
                    {currModules.map((m, i) => (
                        <div
                            key={i}
                            onClick={() => setOpenModule(openModule === i ? null : i)}
                            className="group relative p-4 sm:p-[24px] bg-[#111] transition-all duration-300 rounded-[12px] sm:rounded-[16px] flex flex-col gap-[12px] sm:gap-[16px] text-left cursor-pointer overflow-hidden border-none"
                            style={{ minHeight: openModule === i ? 'auto' : '80px' }}
                        >
                            <div className="flex items-start justify-between w-full">
                                <div className="flex gap-[8px] sm:gap-[10px] items-center">
                                    <span className="text-[16px] sm:text-[20px] font-bold text-[#FC6401] leading-[28px] opacity-70 w-[20px] sm:w-[23px]">0{i + 1}</span>
                                    <h3 className="text-[15px] sm:text-[20px] font-regular text-white leading-[24px] sm:leading-[28px] font-['Inter',sans-serif]">{m.title}</h3>
                                </div>
                                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-white/40 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${openModule === i ? 'rotate-180' : ''}`} />
                            </div>

                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-[28px] sm:pl-[40px]">
                                    <p className="text-[#A0A8B8] text-[14px] sm:text-[16px] leading-[20px] font-regular font-['Inter',sans-serif] max-w-[789px]">
                                        {m.desc}
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

// ── Component: Mentors.tsx ───────────────────────────────────────────────────
export const MentorCard = ({ mentor }: { mentor: typeof MENTORS[0] }) => (
    <div className="relative w-[210px] sm:w-[260px] h-[230px] sm:h-[310px] flex-shrink-0 group">
        {/* Inner Card with Mentor Image */}
        <div className="absolute inset-x-0 top-0 bottom-12 rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#4D240E] to-[#0D0D0D] overflow-hidden">
            <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
            />
        </div>
        
        {/* Floating Logo Top-Right */}
        <div className="absolute top-[-10px] -right-3 z-40 drop-shadow-[0_4px_10px_rgba(252,100,1,0.3)]">
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-white border border-white/20">
                <img src={mentor.companyLogo} alt="" className="w-full h-full object-contain p-1 rounded-full" />
            </div>
        </div>

        {/* Floating Info Box at Bottom */}
        <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%] h-[70px] sm:h-[85px] rounded-[24px] flex flex-col items-center justify-center text-center z-50 p-3 sm:p-4 border border-white/10 shadow-[0_0_20px_rgba(252,100,1,0.25)] bg-[#0A0A0A]/95 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <div className="text-white text-[12px] sm:text-[14px] font-bold tracking-tight">{mentor.name}</div>
            <div className="text-white text-[10px] sm:text-[11px] opacity-70 mt-0.5 leading-tight">{mentor.designation}</div>
            <div className="text-[#FC6401] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">@ {mentor.company}</div>
        </div>
    </div>
);

export const Mentors = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden relative">
        <style>{`
            @keyframes mentor-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-mentor-scroll {
                animation: mentor-scroll 50s linear infinite;
            }
        `}</style>

        {/* Side Gradients for Atmosphere */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FC6401]/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FC6401]/10 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="w-full max-w-[1440px] flex flex-col items-center z-10">
            <div className="px-4 sm:px-6 text-center">
                <GradientLabel text="MENTORS" highlight="ORS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-white mb-2">
                    Learn from Industry AI Experts
                </h2>
                <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[800px] mx-auto mb-12 sm:mb-20 leading-relaxed font-medium">
                    Get mentored by professionals with 10+ years of experience working in AI roles across top companies.
                </p>
            </div>

            <div className="w-full relative" style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}>
                <div className="flex w-max gap-8 sm:gap-12 animate-mentor-scroll hover:[animation-play-state:paused] py-8 px-4">
                    {[...MENTORS, ...MENTORS, ...MENTORS, ...MENTORS].map((mentor, i) => (
                        <div key={i} className="flex-shrink-0">
                            <MentorCard mentor={mentor} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
