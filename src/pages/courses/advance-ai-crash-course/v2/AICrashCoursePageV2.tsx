import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
    FAQS,
    ASSETS
} from "./AICrashCoursev2Constants";
import { GradientLabel, Hero, AlumniLogos } from "./AICrashCoursev2Part1";
import { Roadmap, ProgramDesign } from "./AICrashCoursev2Part2";
import { Curriculum, Mentors } from "./AICrashCoursev2Part3";
import { Tools, Checklist } from "./AICrashCoursev2Part4";
import { CareerRoles, BYDP, Pricing, Certificate } from "./AICrashCoursev2Part5";
import { SEO } from "../../../../components/seo/SEO";
import { useCoursePurchase } from "../../../../hooks/useCoursePurchase";
import { COURSE_IDS } from "../../../../utils/constants_price";
import EnrollmentModalADS from "../../allprograms-ads/EnrollmentModalADS";

// ── Component: FAQ.tsx ───────────────────────────────────────────────────
export const FAQ = () => {
    const [open, setOpen] = useState<number | null>(0);
    const [limit, setLimit] = useState(5);
    const displayedFAQs = FAQS.slice(0, limit);

    return (
        <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/[0.05]">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-10 sm:mb-14">

                    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium font-inter text-white leading-tight text-center mb-4">
                        FAQs
                    </h2>
                    {/* <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] leading-relaxed">
                        Answers to your common queries about the crash course.
                    </p> */}
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                    {displayedFAQs.map((faq, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-xl overflow-hidden backdrop-blur-[20px] transition-all duration-500 ease-in-out ${open === i
                                ? "drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                                : "hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
                                }`}
                            style={{
                                background: open === i
                                    ? "linear-gradient(90deg, rgba(234, 88, 12, 0.05) 0%, rgba(234, 88, 12, 0.15) 100%)"
                                    : "linear-gradient(90deg, rgba(10, 10, 10, 0.2) 0%, rgba(255, 255, 255, 0.03) 100%)",
                                borderLeft: "none",
                                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                                boxShadow: "inset -10px 0 20px rgba(255, 255, 255, 0.01)"
                            }}
                        >
                            <button
                                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between font-medium text-[14px] sm:text-[17px] transition-all duration-500 ${open === i ? "text-white bg-white/[0.02]" : "text-white hover:text-white"}`}
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="pr-4">{faq.q}</span>
                                <span className={`text-xl sm:text-2xl font-extralight transition-transform duration-500 flex-shrink-0 ml-2 sm:ml-4 text-white ${open === i ? "rotate-45 text-[#EA580C]" : ""}`}>
                                    +
                                </span>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? "max-h-[500px] opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0"}`}>
                                <div className="px-4 sm:px-6 text-[#C2C2C2] font-regular text-[14px] sm:text-[16px] leading-relaxed border-t border-white/[0.05] pt-4 sm:pt-5 mx-2">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 sm:gap-6">
                    {limit > 5 && (
                        <button
                            onClick={() => setLimit(5)}
                            className="px-8 py-3 rounded-full border border-[#EA580C]/30 text-[#EA580C] text-[14px] font-bold hover:bg-[#EA580C]/10 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
                        >
                            See Less Questions
                            <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180" />
                        </button>
                    )}
                    {limit < FAQS.length && (
                        <button
                            onClick={() => setLimit(prev => Math.min(prev + 5, FAQS.length))}
                            className="px-8 py-3 rounded-full border border-[#EA580C]/30 text-[#EA580C] text-[14px] font-bold hover:bg-[#EA580C]/10 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
                        >
                            See More Questions
                            <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

// ── Component: CTABanner.tsx ───────────────────────────────────────────────────
export const CTABanner = ({ onDownloadBrochure }: { onDownloadBrochure?: () => void }) => (
    <section className="w-full max-w-[1440px] mx-auto mt-10 sm:mt-16 lg:mt-24 py-6 sm:py-10 px-4 md:px-8 lg:px-[70px]" style={{ overflow: "visible" }}>
        <div className="relative mx-auto flex flex-col lg:block w-full max-w-[1296px] h-auto lg:h-[318px]" style={{ overflow: "visible" }}>
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/5">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #EA580C -10%, #431407 25%, #000000 35%)" }} />
                <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/40 rounded-full z-10 hidden sm:block" />
            </div>

            <div className="relative lg:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-0 lg:px-[72px] gap-3 sm:gap-4 max-w-[750px]">
                <h2 className="text-[#FFFFFF] font-semibold text-[22px] sm:text-[28px] lg:text-[40px] leading-[1.2] sm:leading-[1.1] tracking-tight max-w-[697px]">
                    Start Your AI Career Before You Fall Behind
                </h2>
                <p className="text-[#C2C2C2] font-medium text-[14px] sm:text-[16px] leading-relaxed max-w-[650px]">
                    Join professionals building AI-powered careers using advanced AI systems, agents, and automation.
                </p>
                <div className="mt-4 sm:mt-6">
                    <div onClick={onDownloadBrochure} className="cursor-pointer">
                        <button className="w-[180px] sm:w-[214px] h-[42px] sm:h-[50px] text-white font-semibold bg-[#EA580C]/5 border border-[#EA580C] rounded-[9px] text-[14px] sm:text-[16px] backdrop-blur-[100px] hover:bg-[#EA580C]/10 transition-all duration-300">
                            Claim Your Scholarship
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block absolute right-0 bottom-0 top-[-80px] w-[600px] h-full z-20 pointer-events-none" style={{ overflow: "visible" }}>
                <img
                    src={ASSETS.ctaperson}
                    alt="Student Success"
                    className="absolute right-[-60px] bottom-[-130px] h-[486px] w-auto object-contain z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
            </div>
        </div>
    </section>
);

// ── Global Styles ───────────────────────────────────
export const GlobalStyles = () => (
    <style>{`
        @keyframes borderFlow { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: infinite-scroll 40s linear infinite; }
        .hover-glow-path { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
        .group:hover .hover-glow-path { animation: borderFlow 15s linear infinite; }
    `}</style>
);

export default function AICrashCoursePageV2() {
    const { handleBuyCourse } = useCoursePurchase(COURSE_IDS.GENERATIVE_AI, "Advanced AI Crash Course");
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const handleDragStart = (e: React.DragEvent | Event) => {
            if ((e.target as HTMLElement).tagName === "IMG") {
                e.preventDefault();
            }
        };
        document.addEventListener("dragstart", handleDragStart as EventListener);
        return () => document.removeEventListener("dragstart", handleDragStart as EventListener);
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#0A0A0A] text-white font-['Inter',sans-serif]">
            <SEO
                title="Advanced AI Crash Course | 20 Weeks | AcceleratorX"
                description="Intensive 20-week program on Advanced AI. Build multi-agent systems, autonomous bots, and production-ready products."
            />
            <GlobalStyles />
            <Hero onDownloadBrochure={() => setIsModalOpen(true)} />
            <AlumniLogos />
            <Roadmap />
            <ProgramDesign />
            <Curriculum />
            <Mentors />
            <Tools />
            <Checklist />
            <Certificate />
            <CareerRoles />
            <BYDP />
            <Pricing onEnroll={handleBuyCourse} />
            <FAQ />
            <CTABanner onDownloadBrochure={() => setIsModalOpen(true)} />

            <EnrollmentModalADS
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                program={{
                    title: "Advanced AI Crash Course",
                    label: "AI Crash Course",
                    description: "Learn Advanced AI, Generative AI, ChatGPT, AI Agents, and automation systems.",
                    color: "#EA580C",
                    link: "",
                    hoverBorder: ""
                }}
            />
        </div>
    );
}
