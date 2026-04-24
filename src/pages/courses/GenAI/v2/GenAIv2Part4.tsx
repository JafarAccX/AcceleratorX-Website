import {
    TOOLS_LIST,
    PM_PHASES,
    CAREER_ROLES
} from "./GenAIv2Constants";
import { GradientLabel } from "./GenAIv2Part1";

// ── Component: Tools.tsx ───────────────────────────────────────────────────
export const Tools = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
        <div className="max-w-[1285px] flex flex-col items-center relative px-4 sm:px-6 md:px-0">
            <GradientLabel text="TOOLS" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 text-center">Tools You Will Work With</h2>


            <div className="w-full relative mt-12 mb-16 overflow-hidden" style={{ height: "120px" }}>
                <div className="absolute inset-y-0 left-0 w-20 sm:w-60 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 sm:w-60 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-12 sm:gap-24 animate-infinite-scroll-left items-center py-4 px-10 z-20 relative">
                    {[...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST].map((tool, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0">
                            <div className="relative">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="h-8 sm:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"
                                    style={{ backgroundColor: `${tool.color}30` }} />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest duration-500">
                                    {tool.name}
                                </span>
                                <div className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"
                                    style={{ backgroundColor: tool.color || '#FC6401' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        <div className="w-full h-[1px] bg-white/10 mt-8 sm:mt-12" />
    </section>
);

// ── Component: Checklist.tsx ───────────────────────────────────────────────────
export const Checklist = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/5">
        <div className="max-w-[1267px] mx-auto text-center px-4 sm:px-6">
            <GradientLabel text="PROGRAMS DESCRIPTION" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Generative AI Skill Checklist</h2>

            <div className="relative min-h-[300px]">
                <div className="absolute top-10 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block pointer-events-none" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 sm:gap-y-12 gap-x-3 sm:gap-x-4">
                    {PM_PHASES.map((phase, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default h-full">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#111] border-2 border-[#FC6401]/20 flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:border-[#FC6401]/60 group-hover:bg-[#FC6401]/5 transition-all duration-500 shadow-[0_0_15px_rgba(252,100,1,0.05)]">
                                <img src={phase.icon} alt={phase.title} className="w-4 h-4 sm:w-5 sm:h-5 object-contain drop-shadow-md brightness-110 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <h3 className="text-white text-[14px] sm:text-[18px] font-bold mb-1 sm:mb-2 tracking-tight">{phase.title}</h3>
                            <p className="text-[#A0A8B8] text-[12px] sm:text-[14px] leading-snug mb-3 sm:mb-4 max-w-[200px] font-regular">{phase.description}</p>
                            <span className="mt-auto text-[#FC6401] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">{phase.phase}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ── Component: CareerRoles.tsx ───────────────────────────────────────────────────
export const RoleCard = ({ role, idx }: { role: typeof CAREER_ROLES[0], idx: number }) => (
    <div className="relative group w-full max-w-[550px] h-[90px] sm:h-[105px] cursor-pointer">
        <svg width="100%" height="100%" viewBox="0 0 632 140" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
            <path
                d={idx % 2 === 0
                    ? "M556 0H24C10.7452 0 0 10.7452 0 24V116C0 129.255 10.7452 140 24 140H556C568 140 576 134 580 124L628 16C632 6 624 0 612 0H556Z"
                    : "M76 0H608C621.255 0 632 10.7452 632 24V116C632 129.255 621.255 140 608 140H76C64 140 56 134 52 124L4 16C0 6 8 0 20 0H76Z"
                }
                className="fill-[#0A0A0A] transition-all duration-300 group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.1))] hover-glow-path"
                stroke="none"
                strokeWidth="0"
            />
        </svg>

        <div className={`relative flex flex-col justify-center h-full z-10 ${idx % 2 === 0 ? 'pl-5 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-20' : 'pl-[40px] sm:pl-[64px] lg:pl-[76px] pr-5 sm:pr-8 lg:pr-12'}`}>
            <div className="flex items-center justify-between gap-2 sm:gap-4 mb-1">
                <h4 className="text-white text-[14px] sm:text-[16px] lg:text-[18px] font-medium tracking-tight leading-snug whitespace-nowrap">{role.title}</h4>
                <div
                    className="px-[6px] sm:px-[10px] h-[22px] sm:h-[26px] flex items-center justify-center rounded-[4px] text-center flex-shrink-0"
                    style={{
                        background: "linear-gradient(#0A0A0A,#0A0A0A) padding-box, linear-gradient(90deg, #FC6401, #EE965D, #E9A77C) border-box",
                        border: "1px solid transparent"
                    }}
                >
                    <span className="text-[#FC6401] text-[10px] sm:text-[12px] font-semibold tracking-[0.5px] whitespace-nowrap">{role.salary}</span>
                </div>
            </div>
            <p className="text-[#94A3B8] text-[11px] sm:text-[13px] font-medium leading-snug w-[95%]">{role.description}</p>
        </div>
    </div>
);
