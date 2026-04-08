import React, { useState, useEffect } from "react";
import { 
  FAQS,
  FOOTER_COLUMNS,
  ASSETS
} from "./GenAIv2Constants";
import { GradientLabel, Hero, AlumniLogos } from "./GenAIv2Part1";
import { Roadmap, ProgramDesign } from "./GenAIv2Part2";
import { Curriculum, Mentors } from "./GenAIv2Part3";
import { Tools, Checklist } from "./GenAIv2Part4";
import { CareerRoles, BYDP, Pricing } from "./GenAIv2Part5";
import { useCoursePurchase } from "../../../../hooks/useCoursePurchase";
import { COURSE_IDS } from "../../../../utils/constants_price";
import { Link } from "react-router-dom";
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
                    <GradientLabel text="SUPPORT" />
                    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-3 sm:mb-4">Frequently Asked Questions</h2>
                    <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] leading-relaxed">
                        Everything you need to know about the program.
                    </p>
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
                                    ? "linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.08) 100%)"
                                    : "linear-gradient(90deg, rgba(10, 10, 10, 0.2) 0%, rgba(255, 255, 255, 0.03) 100%)",
                                borderLeft: "none",
                                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                                boxShadow: "inset -10px 0 20px rgba(255, 255, 255, 0.01)"
                            }}
                        >
                            <button
                                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between font-semibold text-[14px] sm:text-[17px] transition-all duration-500 ${open === i ? "text-white bg-white/[0.02]" : "text-[#F5F7FF] hover:text-white"}`}
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="pr-4">{faq.q}</span>
                                <span className={`text-xl sm:text-2xl font-extralight transition-transform duration-500 flex-shrink-0 ml-2 sm:ml-4 text-white ${open === i ? "rotate-45 text-[#FC6401]" : ""}`}>
                                    +
                                </span>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? "max-h-[500px] opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0"}`}>
                                <div className="px-4 sm:px-6 text-[#CFCFCF] text-[14px] sm:text-[16px] leading-relaxed border-t border-white/[0.05] pt-4 sm:pt-5 mx-2">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-6 sm:mt-8 gap-4 sm:gap-6">
                    {limit > 5 && (
                        <button
                            onClick={() => setLimit(5)}
                            className="text-white/60 text-[13px] sm:text-[14px] font-medium flex items-center gap-2 hover:text-white transition-all pb-1 border-b border-white/10"
                        >
                            View less <span className="text-[16px]">↑</span>
                        </button>
                    )}
                    {limit < FAQS.length && (
                        <button
                            onClick={() => setLimit(prev => Math.min(prev + 5, FAQS.length))}
                            className="text-white text-[13px] sm:text-[14px] font-medium flex items-center gap-2 hover:opacity-80 transition-all pb-1 border-b border-white/20"
                        >
                            View more <span className="text-[16px]">↓</span>
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
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #FC6401 -10%, #451a03 25%, #000000 35%)" }} />
                <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/40 rounded-full z-10 hidden sm:block" />
            </div>

            <div className="relative lg:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-0 lg:px-[72px] gap-3 sm:gap-4 max-w-[750px]">
                <h2 className="text-[#FFFFFF] font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3] sm:leading-[48px] tracking-tight max-w-[697px]">
                    Start Your AI Career Before You're Forced To Catch Up
                </h2>
                <p className="text-[#C2C2C2] font-medium text-[14px] sm:text-[16px] leading-normal max-w-[650px]">
                    Join professionals who are building AI-powered careers using Generative AI, automation, and real-world projects.
                </p>
                <div className="mt-4 sm:mt-6">
                    <div onClick={onDownloadBrochure} className="cursor-pointer">
                        <button className="w-[140px] sm:w-[174px] h-[42px] sm:h-[50px] text-white font-semibold bg-[#FC6401]/5 border border-[#FC6401] rounded-[9px] text-[14px] sm:text-[16px] cursor-pointer backdrop-blur-[100px] hover:bg-[#FC6401]/10 transition-all duration-300">
                            Apply
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
        @keyframes borderFlow {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
        }
        @keyframes infinite-scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll-left {
            animation: infinite-scroll-left 80s linear infinite;
        }
        .hover-glow-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            transition: stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease;
        }
        .group:hover .hover-glow-path {
            animation: borderFlow 15s linear infinite;
        }
    `}</style>
);

// ── Main Page Component ─────────────────────────────────────────────────────
import { SEO } from "../../../../components/SEO";

export default function GenAIPageV2() {
    const { handleBuyCourse } = useCoursePurchase(COURSE_IDS.GENERATIVE_AI, "Generative AI Portfolio Program");
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
        <div className="min-h-screen w-full bg-[#0A0A0A] text-white font-['Inter',sans-serif] overflow-x-hidden">
            <SEO 
                title="Generative AI & AI Agent Course | AcceleratorX"
                description="Learn Generative AI, ChatGPT, and automation systems through real-world projects. For working professionals and beginners with no coding background."
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
            <CareerRoles />
            <BYDP />
            <Pricing onEnroll={handleBuyCourse} />
            <FAQ />
            <CTABanner onDownloadBrochure={() => setIsModalOpen(true)} />

            <EnrollmentModalADS 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                program={{
                    title: "Generative AI",
                    label: "Gen AI",
                    description: "Learn Generative AI, ChatGPT, and automation systems through real-world projects",
                    color: "#FC6401",
                    link: "",
                    hoverBorder: ""
                }}
            />
        </div>
    );
}

