import { 
  TOOLS_LIST, 
  AGENT_PHASES,
} from "./AdvanceGenAIv2Constants";
import { GradientLabel } from "./AdvanceGenAIv2Part1";

// ── Component: Tools.tsx ───────────────────────────────────────────────────
export const Tools = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
        <div className="max-w-[1285px] flex flex-col items-center relative px-4 sm:px-6 md:px-0">
            <div
                className="hidden xl:block absolute z-50 pointer-events-none"
                style={{ width: "104px", height: "201px", left: "-75px", top: "200px", background: "linear-gradient(90deg, #FC6401 0%, rgba(252, 100, 1, 0) 100%)", borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px", opacity: 0.5 }}
            />
            <div
                className="hidden xl:block absolute z-50 pointer-events-none"
                style={{ width: "104px", height: "201px", right: "-75px", top: "200px", background: "linear-gradient(270deg, #FC6401 0%, rgba(252, 100, 1, 0) 100%)", borderTopRightRadius: "16px", borderBottomRightRadius: "16px", opacity: 0.5 }}
            />

            <GradientLabel text="ADVANCED TECH STACK" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 text-center">Tools You Will Master</h2>
            <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[1285px] font-medium mx-auto mb-10 sm:mb-14 text-center leading-relaxed">
                Beyond basic ChatGPT prompts — master the frameworks that power high-scale AI agents, 
                from fine-tuning to production-grade orchestration.
            </p>

            <div className="w-full relative mt-12 mb-16" style={{ height: "120px" }}>
                <div className="absolute inset-y-0 left-0 w-20 sm:w-60 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 sm:w-60 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-12 sm:gap-24 animate-infinite-scroll-left items-center py-4 px-10 hover:[animation-play-state:paused] z-20 relative">
                    {[...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST].map((tool, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0">
                            {/* Logo with Brand Color Glow on Hover */}
                            <div className="relative">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="h-8 sm:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10"
                                />
                                {/* Soft Brand Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"
                                     style={{ backgroundColor: `${tool.color}30` }} />
                            </div>
                            
                            {/* Name with Underline in Tech Style */}
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

            <div className="flex gap-2.5 justify-center mt-8 sm:mt-12">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FC6401]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F7FF] opacity-20" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F7FF] opacity-20" />
            </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mt-8 sm:mt-12" />
    </section>
);

// ── Component: Checklist.tsx ───────────────────────────────────────────────────
export const Checklist = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/5">
        <div className="max-w-[1267px] mx-auto text-center px-4 sm:px-6">
            <GradientLabel text="SKILL DESCRIPTION" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Advanced AI Skill Checklist</h2>
            <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[850px] mx-auto mb-12 sm:mb-20 leading-relaxed font-medium">
                The six core phases of mastering professional AI agent engineering and production-scale systems.
            </p>

            <div className="relative min-h-[300px]">
                <div className="absolute top-10 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block pointer-events-none" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 sm:gap-y-12 gap-x-3 sm:gap-x-4">
                    {AGENT_PHASES.map((phase, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default h-full">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#111] border-2 border-[#FC6401]/20 flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:border-[#FC6401]/60 group-hover:bg-[#FC6401]/5 transition-all duration-500 shadow-[0_0_15px_rgba(252,100,1,0.05)]">
                                <div 
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundColor: '#FC6401',
                                        maskImage: `url(${phase.icon})`,
                                        WebkitMaskImage: `url(${phase.icon})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                            </div>

                            <h3 className="text-white text-[14px] sm:text-[18px] font-bold mb-1 sm:mb-2 tracking-tight">{phase.title}</h3>
                            <p className="text-[#A0A8B8] text-[12px] sm:text-[14px] leading-snug mb-3 sm:mb-4 max-w-[160px] font-regular">{phase.description}</p>
                            <span className="mt-auto text-[#FC6401] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">{phase.phase}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
