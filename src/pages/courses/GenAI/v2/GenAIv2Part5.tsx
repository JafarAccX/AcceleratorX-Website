import { 
  CAREER_ROLES, 
  PRICING_PLANS,
} from "./GenAIv2Constants";
import { GradientLabel } from "./GenAIv2Part1";
import { RoleCard } from "./GenAIv2Part4";
import { Link } from "react-router-dom";

export const CareerRoles = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16 sm:mb-24">
                <GradientLabel text="CAREER" highlight="ER" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Career Opportunities After This AI Course</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[900px] mx-auto leading-relaxed font-medium">
                    2,000+ learners across India — from Bengaluru to Bhilai — are already building real AI skills
                    and getting hired at top companies. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                <div className="flex-1 flex flex-col items-center lg:items-start w-full gap-3 sm:gap-5">
                    {CAREER_ROLES.map((role, j) => (
                        <RoleCard key={j} role={role} idx={j} />
                    ))}
                </div>

                <div className="flex-1 relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[654px]" style={{ aspectRatio: '654/507' }}>
                        <img src="/assets/roles.png" alt="Career Opportunities Illustration" className="w-full h-full object-contain relative z-20" />
                    </div>
                </div>
            </div>

            <div className="mt-16 sm:mt-24 lg:mt-32">
                <div className="relative w-full max-w-[1232px] bg-[#0A0A0A] p-4 sm:p-8 lg:p-[48px] mx-auto mb-16 border border-white/5 rounded-[16px] sm:rounded-[24px]">
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

                            <div className="absolute top-0 left-0 lg:left-10 flex gap-8 items-center text-[10px] lg:text-[12px] font-bold tracking-widest uppercase z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-[18px] sm:w-[24px] h-[4px] bg-[#FC6401] rounded-full"></div>
                                    <span className="text-white">AI-POWERED LEARNING</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-[18px] sm:w-[24px] border-b-[2px] border-dashed border-white/20"></div>
                                    <span className="text-[#ADAAAA]">TRADITIONAL LEARNING (WITHOUT AI)</span>
                                </div>
                            </div>

                            {/* Chart Grid Lines */}
                            <div className="absolute top-[80px] bottom-10 left-[40px] lg:left-[50px] right-0 flex flex-col justify-between z-10 opacity-30">
                                {[30, 25, 20, 15, 10, 5, 0].map((val) => (
                                    <div key={val} className="relative w-full border-t border-[#494847]/40 h-0">
                                        <span className="absolute -top-3 -left-[35px] lg:-left-[45px] w-8 text-right text-[10px] lg:text-[11px] font-medium text-[#7A7A7A]">
                                            ₹{val}L
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Chart X-axis Labels */}
                            <div className="absolute bottom-2 lg:bottom-4 left-[40px] lg:left-[50px] right-0 flex justify-between px-0 text-[10px] lg:text-[11px] font-medium text-[#7A7A7A] z-10">
                                <span className="-ml-3">2026</span>
                                <span>2028</span>
                                <span>2030</span>
                                <span>2032</span>
                                <span className="-mr-3">2035</span>
                            </div>

                            <svg className="absolute top-[80px] bottom-10 left-[40px] lg:left-[50px] right-0 w-full h-[calc(100%-80px-40px)] overflow-visible z-20" viewBox="0 0 1000 500" preserveAspectRatio="none">
                                {/* Orange Line Ambient Glow */}
                                <path
                                    d="M 20,383 C 140,383 140,266 260,266 C 380,266 380,150 500,150 C 620,150 620,66 740,66 C 860,66 860,33 980,33"
                                    fill="none" stroke="#FC6401" strokeWidth="15" className="g-chart-glow blur-2xl" strokeLinecap="round"
                                />

                                {/* Traditional Gray Dashed Path */}
                                <path
                                    d="M 20,416 L 980,350"
                                    fill="none" stroke="#494847" strokeWidth="2.5" strokeDasharray="10 10" opacity="0.6"
                                />

                                {/* AI Orange Path */}
                                <path
                                    d="M 20,383 C 140,383 140,266 260,266 C 380,266 380,150 500,150 C 620,150 620,66 740,66 C 860,66 860,33 980,33"
                                    fill="none" stroke="#FC6401" strokeWidth="5.5" className="g-draw-path-orange" strokeLinecap="round"
                                />

                                {/* AI Orange Dots */}
                                {[
                                    { cx: 20, cy: 383 }, { cx: 260, cy: 266 }, { cx: 500, cy: 150 }, { cx: 740, cy: 66 }, { cx: 980, cy: 33 }
                                ].map((point, i) => (
                                    <circle
                                        key={`org-${i}`}
                                        cx={point.cx}
                                        cy={point.cy}
                                        r="6"
                                        fill="#fff"
                                        stroke="#FC6401"
                                        strokeWidth="3.5"
                                        className="g-chart-dot"
                                        style={{ animationDelay: `${i * 0.4}s` }}
                                    />
                                ))}

                                {/* Growth Badge at end of path */}
                                <foreignObject x="920" y="-15" width="100" height="40" className="g-chart-dot" style={{ animationDelay: '1.6s' }}>
                                    <div className="flex flex-col items-center justify-center bg-[#1A1A1A]/80 border border-[#FC6401]/40 rounded-lg p-1 backdrop-blur-sm">
                                        <span className="text-[#FC6401] text-[10px] font-bold leading-none">₹28L</span>
                                        <span className="text-[#ADAAAA] text-[7px] font-bold uppercase leading-none mt-0.5 tracking-tighter">GROWTH</span>
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>


                        <div className="mt-8 sm:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-10">
                            <div className="flex flex-col gap-2 sm:gap-3 text-left">
                                <h3 className="text-white text-[18px] sm:text-[24px] font-bold tracking-tight">Learning Journey</h3>
                                <p className="text-[#ADAAAA] text-[12px] sm:text-[14px] font-medium max-w-[358px] leading-relaxed">
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
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-[1047px] mx-auto text-center">
            <GradientLabel text="PROGRAMS DESCRIPTION" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-10 sm:mb-16">Build your dream product</h2>

            <div className="flex flex-col gap-8 sm:gap-12 items-center">
                <div className="max-w-[950px]">
                    <h3 className="text-white font-bold text-[16px] sm:text-[18px] mb-3 sm:mb-4">What is BYDP?</h3>
                    <p className="text-[#94A3B8] text-[14px] sm:text-[16px] leading-[1.6] font-medium">
                        Build Your Dream Product (BYDP) is a structured design and development process that turns
                        raw ideas into usable, market-ready digital products-fast, focused, and without guesswork.
                    </p>
                </div>
                <div className="max-w-[950px]">
                    <h3 className="text-white font-bold text-[16px] sm:text-[18px] mb-3 sm:mb-4">Why BYDP?</h3>
                    <p className="text-[#94A3B8] text-[14px] sm:text-[16px] leading-[1.6] font-medium">
                        Because building the wrong product is more expensive than building it right. BYDP aligns
                        strategy, design, and execution so you ship something users actually want, not just
                        something that looks good.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// ── Component: Pricing.tsx ───────────────────────────────────────────────────
export const Pricing = ({ onEnroll }: { onEnroll: (amount: number) => void }) => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
                <GradientLabel text="PROGRAMS DESCRIPTION" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Choose Your Gen AI Learning Path</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[800px] mx-auto leading-relaxed">
                    Flexible pricing options designed for professionals who want to learn AI tools, automation, and real-world applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-[900px] mx-auto pb-8 sm:pb-12">
                {PRICING_PLANS.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 border transition-all duration-300 flex flex-col h-full ${plan.highlighted
                            ? "border-white/10 shadow-[0_0_80px_rgba(252,100,1,0.25)]"
                            : "bg-[#111] border-white/[0.08]"
                            }`}
                        style={plan.highlighted ? {
                            background: "radial-gradient(circle at 100% 0%, rgba(252, 100, 1, 0.35) 0%, rgba(252, 100, 1, 0.08) 40%, rgba(5, 5, 5, 1) 75%), #050505"
                        } : {}}
                    >
                        {plan.badge && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FC6401] text-white text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
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
                        <p className="text-[#A0A8B8] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] font-normal mb-6 sm:mb-8">{plan.subtitle}</p>

                        <div className="text-[30px] sm:text-[40px] font-black text-white mb-2 leading-none tracking-tight">{plan.price}</div>
                        <div className={`text-[12px] sm:text-[14px] font-normal leading-[20px] tracking-[0.7px] uppercase mb-6 sm:mb-10 ${plan.highlighted ? "text-[#FC6401]" : "text-[#7B7B7B]"}`}>
                            {plan.track}
                        </div>

                        <ul className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 flex-1">
                            {plan.features.map((f, j) => (
                                <li key={j} className="flex items-start gap-3 sm:gap-4 text-[13px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22.5px] text-[#CFCFCF]">
                                    <div className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? "bg-[#FC6401]" : "border border-white/20"}`}>
                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="1.5 5 4.5 8 10.5 2" />
                                        </svg>
                                    </div>
                                    <span className="flex-1">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/sign-up" className="w-full mt-auto">
                            <button
                                className={`w-full py-3 sm:py-4 rounded-[10px] sm:rounded-[12px] font-bold text-[14px] sm:text-[15px] transition-all duration-300 tracking-[0.5px] ${plan.highlighted
                                    ? "bg-[#FC6401] text-white hover:brightness-110 shadow-xl shadow-[#FC6401]/25"
                                    : "border-2 border-[#FC6401] text-[#FC6401] hover:bg-[#FC6401]/5"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
