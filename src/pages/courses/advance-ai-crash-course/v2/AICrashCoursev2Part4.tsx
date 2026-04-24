import {
    TOOLS_LIST,
    CRASH_PHASES,
} from "./AICrashCoursev2Constants";
import { GradientLabel } from "./AICrashCoursev2Part1";

// ── Component: Tools.tsx ───────────────────────────────────────────────────
export const Tools = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden border-t border-white/5">
        <div className="max-w-[1285px] flex flex-col items-center relative px-4 sm:px-6 md:px-0">
            <GradientLabel text="TOOLS" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 text-center">Tools You Will Work With</h2>

            <div className="w-full relative mt-12 mb-16 overflow-hidden" style={{ minHeight: "140px" }}>
                <div className="absolute inset-y-0 left-0 w-20 sm:w-60 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 sm:w-60 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-12 sm:gap-24 animate-infinite-scroll-left items-center py-4 z-20 relative">
                    {[...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST].map((tool, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0">
                            <div className="relative">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="h-8 sm:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"
                                    style={{ backgroundColor: `${tool.color || '#EA580C'}30` }} />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest duration-500">
                                    {tool.name}
                                </span>
                                <div className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"
                                    style={{ backgroundColor: tool.color || '#EA580C' }} />
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
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/5 relative">
        <div className="max-w-[1267px] mx-auto text-center px-4 sm:px-6 relative z-10">
            <GradientLabel text="SKILLSET" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Advanced AI Skill Checklist</h2>

            <div className="relative min-h-[300px]">
                <div className="absolute top-10 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block pointer-events-none" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 sm:gap-y-12 gap-x-3 sm:gap-x-4">
                    {CRASH_PHASES.map((phase, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default h-full">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#111] border-2 border-[#EA580C]/20 flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:border-[#EA580C]/60 group-hover:bg-[#EA580C]/5 transition-all duration-500 shadow-[0_0_15px_rgba(234,88,12,0.05)]">
                                <div
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundColor: '#EA580C',
                                        maskImage: `url("${phase.icon}")`,
                                        WebkitMaskImage: `url("${phase.icon}")`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                            </div>

                            <h3 className="text-white text-[14px] sm:text-[18px] font-bold mb-1 sm:mb-2 tracking-tight group-hover:text-[#EA580C]">{phase.title}</h3>
                            <p className="text-[#A0A8B8] text-[12px] sm:text-[14px] leading-snug mb-3 sm:mb-4 max-w-[200px] font-medium">{phase.description}</p>
                            <span className="mt-auto text-[#EA580C] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">{phase.phase}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
