import {
    CAREER_ROLES,
    PRICING_PLANS,
} from "./AICrashCoursev2Constants";
import { GradientLabel } from "./AICrashCoursev2Part1";

// ── Component: CareerRoles.tsx ───────────────────────────────────────────────────
export const Certificate = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16 sm:mb-20">
                <GradientLabel text="CERTIFICATION" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">The Certificate Recognized By The Industry</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <div className="relative w-full max-w-[517px]">
                        <img
                            src="/assets/certificate/AI CRASH COURCE.png"
                            alt="Advanced AI Certificate"
                            className="w-full h-auto object-contain relative z-20 mix-blend-lighten"
                            width={517}
                            height={731}
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-white font-bold text-[24px] sm:text-[32px] leading-tight mb-4">
                        Get Your Nano-Degree in Advanced AI Crash Course
                    </h3>
                    <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                        Show the world your expertise in AI Crash Course, stand out in a competitive Ai job market and get hired easily.
                    </p>

                    <ul className="flex flex-col gap-4 sm:gap-5 text-left w-full max-w-[500px]">
                        {[
                            "Industry-recognized Nano Degree in AI Crash Course.",
                            "Verified badge + unique verification ID",
                            "Trusted by 2500+ companies and agencies",
                            "Advanced AI Projects portfolio",
                            "Lifetime exclusive alumni community access"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 sm:gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EA580C] flex-shrink-0" />
                                <span className="text-[#C2C2C2] text-[14px] sm:text-[15px] font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
export const RoleCard = ({ role, idx }: { role: any, idx: number }) => (
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
                        background: "linear-gradient(#0A0A0A,#0A0A0A) padding-box, linear-gradient(90deg, #EA580C, #FB923C, #FDBA74) border-box",
                        border: "1px solid transparent"
                    }}
                >
                    <span className="text-[#EA580C] text-[10px] sm:text-[12px] font-semibold tracking-[0.5px] whitespace-nowrap">{role.salary}</span>
                </div>
            </div>
            <p className="text-[#C2C2C2] text-[11px] sm:text-[13px] font-medium leading-snug w-[95%]">{role.description}</p>
        </div>
    </div>
);

export const CareerRoles = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16 sm:mb-24">
                <GradientLabel text="CAREER" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Career Opportunities After This AI Course</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                <div className="flex-1 flex flex-col items-center lg:items-start w-full gap-3 sm:gap-5">
                    {CAREER_ROLES.map((role, j) => (
                        <RoleCard key={j} role={role} idx={j} />
                    ))}
                </div>

                <div className="flex-1 relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[654px] aspect-[654/507]">
                        <img src="/assets/roles.png" alt="Career Opportunities Illustration" className="w-full h-full object-contain relative z-20" />
                    </div>
                </div>
            </div>
            <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[1188px] mx-auto mt-10 leading-relaxed text-center">
                Companies are actively hiring professionals with AI, automation, and LLM expertise.
            </p>

            <div className="mt-16 sm:mt-24 lg:mt-32">
                <div className="relative w-full max-w-[1232px] bg-[#0A0A0A] p-4 sm:p-8 lg:p-[48px] mx-auto mb-16 border border-white/5 rounded-[16px] sm:rounded-[24px] overflow-hidden">
                    <div className="relative w-full h-auto flex flex-col">
                        <div className="relative w-full h-auto flex items-center justify-center min-h-[300px] lg:min-h-[450px]">
                            <style>
                                {`
                                    @keyframes g-draw-chart-line {
                                        0% { stroke-dashoffset: 1500; }
                                        40% { stroke-dashoffset: 0; }
                                        100% { stroke-dashoffset: 0; }
                                    }
                                    @keyframes g-dot-appear {
                                        0%, 15% { transform: scale(0); opacity: 0; }
                                        25%, 100% { transform: scale(1); opacity: 1; }
                                    }
                                    @keyframes g-glow-pulse {
                                        0%, 100% { opacity: 0.3; }
                                        20% { opacity: 0.8; }
                                    }
                                    .g-draw-path-orange {
                                        stroke-dasharray: 1500;
                                        stroke-dashoffset: 1500;
                                        animation: g-draw-chart-line 6s ease-in-out infinite;
                                    }
                                    .g-chart-dot {
                                        transform-origin: center;
                                        animation: g-dot-appear 6s ease-out infinite;
                                    }
                                    .g-chart-glow {
                                        animation: g-glow-pulse 6s ease-in-out infinite;
                                    }
                                `}
                            </style>

                            <div className="absolute top-0 left-0 lg:left-10 flex flex-wrap gap-4 sm:gap-8 items-center text-[9px] sm:text-[10px] lg:text-[12px] font-bold tracking-widest uppercase z-20">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-[14px] sm:w-[24px] h-[3px] sm:h-[4px] bg-[#FC6401] rounded-full"></div>
                                    <span className="text-white">AI-POWERED LEARNING</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-[14px] sm:w-[24px] border-b-[2px] border-dashed border-white/20"></div>
                                    <span className="text-[#ADAAAA]">TRADITIONAL LEARNING</span>
                                </div>
                            </div>

                            <div className="absolute top-[80px] bottom-10 left-[35px] sm:left-[40px] lg:left-[50px] right-0 flex flex-col justify-between z-10 opacity-30">
                                {[30, 25, 20, 15, 10, 5, 0].map((val) => (
                                    <div key={val} className="relative w-full border-t border-[#494847]/40 h-0">
                                        <span className="absolute -top-3 -left-[32px] sm:-left-[35px] lg:-left-[45px] w-8 text-right text-[9px] sm:text-[10px] lg:text-[11px] font-medium text-[#7A7A7A]">
                                            ₹{val}L
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-2 lg:bottom-4 left-[35px] sm:left-[40px] lg:left-[50px] right-0 flex justify-between px-0 text-[9px] sm:text-[10px] lg:text-[11px] font-medium text-[#7A7A7A] z-10">
                                <span className="-ml-2">2026</span>
                                <span>2028</span>
                                <span>2030</span>
                                <span>2032</span>
                                <span className="-mr-2">2035</span>
                            </div>

                            <svg className="absolute top-[80px] bottom-10 left-[35px] sm:left-[40px] lg:left-[50px] right-2 sm:right-4 w-[calc(100%-45px)] sm:w-[calc(100%-55px)] h-[calc(100%-80px-40px)] overflow-visible z-20" viewBox="0 0 1000 500" preserveAspectRatio="none">
                                <path
                                    d="M 20,383 C 140,383 140,266 260,266 C 380,266 380,150 500,150 C 620,150 620,66 740,66 C 860,66 860,33 960,33"
                                    fill="none" stroke="#EA580C" strokeWidth="15" className="g-chart-glow blur-2xl" strokeLinecap="round"
                                />

                                <path
                                    d="M 20,416 L 960,350"
                                    fill="none" stroke="#494847" strokeWidth="2.5" strokeDasharray="10 10" opacity="0.6"
                                />

                                <path
                                    d="M 20,383 C 140,383 140,266 260,266 C 380,266 380,150 500,150 C 620,150 620,66 740,66 C 860,66 860,33 960,33"
                                    fill="none" stroke="#EA580C" strokeWidth="5.5" className="g-draw-path-orange" strokeLinecap="round"
                                />

                                {[
                                    { cx: 20, cy: 383 }, { cx: 260, cy: 266 }, { cx: 500, cy: 150 }, { cx: 740, cy: 66 }, { cx: 960, cy: 33 }
                                ].map((point, i) => (
                                    <circle
                                        key={`org-${i}`}
                                        cx={point.cx}
                                        cy={point.cy}
                                        r="6"
                                        fill="#fff"
                                        stroke="#EA580C"
                                        strokeWidth="3.5"
                                        className="g-chart-dot"
                                        style={{ animationDelay: `${i * 0.4}s` }}
                                    />
                                ))}

                                <foreignObject x="880" y="-15" width="100" height="40" className="g-chart-dot" style={{ animationDelay: '1.6s' }}>
                                    <div className="flex flex-col items-center justify-center bg-[#1A1A1A]/80 border border-[#EA580C]/40 rounded-lg p-1 backdrop-blur-sm">
                                        <span className="text-[#EA580C] text-[10px] font-bold leading-none">₹28L</span>
                                        <span className="text-[#ADAAAA] text-[7px] font-bold uppercase leading-none mt-0.5 tracking-tighter">GROWTH</span>
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>


                        <div className="mt-8 sm:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-10">
                            <div className="flex flex-col gap-2 sm:gap-3 text-left">
                                <h3 className="text-white text-[18px] sm:text-[24px] font-bold tracking-tight">Growth Projection</h3>
                                <p className="text-[#C2C2C2] text-[12px] sm:text-[14px] font-medium max-w-[358px] leading-relaxed">
                                    Based on internal data synthesis of AI-adapted career paths vs traditional industry norms.
                                </p>
                            </div>

                            <div className="flex gap-8 sm:gap-16 pr-4">
                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <span className="text-[#81ECFF] text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">CAGR</span>
                                    <span className="text-white text-[24px] sm:text-[32px] font-regular leading-none">42.8%</span>
                                </div>
                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <span className="text-[#A68CFF] text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">TOTAL GAIN</span>
                                    <span className="text-white text-[24px] sm:text-[32px] font-regular leading-none">₹21L+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ── Component: BYDP.tsx ───────────────────────────────────────────────────
export const BYDP = () => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/[0.05]">
        <div className="max-w-[1047px] mx-auto text-center">
            <GradientLabel text="PROJECTS" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-10 sm:mb-16">Build Real AI Systems That Get You Hired</h2>

            <div className="flex flex-col gap-8 sm:gap-12 items-center">
                <div className="max-w-[1000px]">
                    <p className="text-[#C2C2C2] text-[16px] sm:text-[20px] leading-[1.6] font-medium mb-6 sm:mb-8">
                        Instead of just completing assignments, you build:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
                        {[
                            "AI agents",
                            "Automation systems",
                            "Real-world AI applications",
                            "Business AI workflows"
                        ].map((item, i) => (
                            <div key={i} className="group relative flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#EA580C]/40 bg-[#0A0A0A] transition-all duration-300 hover:border-[#EA580C] hover:bg-[#EA580C]/5 hover:scale-105 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(234,88,12,0.05)] hover:shadow-[0_0_25px_rgba(234,88,12,0.25)]">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#EA580C] shadow-[0_0_8px_rgba(234,88,12,0.8)] group-hover:animate-pulse"></div>
                                <span className="text-[#EA580C] text-[15px] sm:text-[16px] font-medium tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[#C2C2C2] text-[16px] sm:text-[20px] leading-[1.6] font-medium">
                        This becomes your proof of work. What recruiters actually care about.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// ── Component: Pricing.tsx ───────────────────────────────────────────────────
export const Pricing = ({ onEnroll }: { onEnroll?: (amount: number, batchId?: string) => Promise<void> }) => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
                <GradientLabel text="PRICING" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 leading-tight">Choose Your Advanced AI Learning Path</h2>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[900px] mx-auto leading-relaxed">
                    Flexible pricing options designed for professionals who want to master AI systems, automation workflows, and real-world AI applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-[900px] mx-auto pb-8 sm:pb-12">
                {PRICING_PLANS.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 border transition-all duration-300 flex flex-col h-full ${plan.highlighted
                            ? "border-white/10 shadow-[0_0_80px_rgba(234,88,12,0.25)]"
                            : "bg-[#111] border-white/[0.08]"
                            }`}
                        style={plan.highlighted ? {
                            background: "radial-gradient(circle at 100% 0%, rgba(234, 88, 12, 0.35) 0%, rgba(234, 88, 12, 0.08) 40%, rgba(5, 5, 5, 1) 75%), #050505"
                        } : {}}
                    >
                        {plan.badge && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EA580C] text-white text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
                                {plan.badge}
                            </div>
                        )}

                        <h3 className="text-[#E4E4E4] font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] mb-3 flex items-center gap-2">
                            {plan.title}
                            {plan.highlighted && (
                                <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="1.5 5 4.5 8 10.5 2" />
                                    </svg>
                                </div>
                            )}
                        </h3>
                        <p className="text-[#C2C2C2] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] font-normal mb-6 sm:mb-8 min-h-[88px] sm:min-h-[104px]">{plan.subtitle}</p>

                        <div className="text-[30px] sm:text-[40px] font-black text-white mb-2 leading-none tracking-tight">{plan.price}</div>
                        <div className={`text-[12px] sm:text-[14px] font-normal leading-[20px] tracking-[0.7px] uppercase mb-6 sm:mb-10 ${plan.highlighted ? "text-[#EA580C]" : "text-[#7B7B7B]"}`}>
                            {plan.track}
                        </div>

                        <ul className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 flex-1">
                            {plan.features.map((f, j) => (
                                <li key={j} className="flex items-start gap-3 sm:gap-4 text-[13px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22.5px] text-[#C2C2C2]">
                                    <div className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? "bg-[#EA580C]" : "border border-white/20"}`}>
                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="1.5 5 4.5 8 10.5 2" />
                                        </svg>
                                    </div>
                                    <span className="flex-1">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div onClick={() => plan.price !== "TBA" && onEnroll?.(parseInt(plan.price.replace(/[^\d]/g, "")), plan.track)} className="w-full mt-auto cursor-pointer">
                            <button
                                className={`w-full py-3 sm:py-4 rounded-[10px] sm:rounded-[12px] font-bold text-[14px] sm:text-[15px] transition-all duration-300 tracking-[0.5px] ${plan.highlighted
                                    ? "bg-[#EA580C] text-white hover:brightness-110 shadow-xl shadow-[#EA580C]/25 border-2 border-transparent"
                                    : "border-2 border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C]/5"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
