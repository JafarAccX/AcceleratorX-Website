import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
import OfflineExperience from "../../../components/landing-page/OfflineExperience";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Asset URLs ────────────────────────────────────────────────────────
const ASSETS = {
    heroImage: "https://www.figma.com/api/mcp/asset/5bf7a16d-2bc9-4713-91ed-adb12c1c391f",
    heroLogo: "/assets/accelerator.png",
    avatar1: "/assets/Margin.png",
    avatar2: "/assets/Margin (1).png",
    dhruv: "/assets/Margin.png",
    shivam: "/assets/Margin (1).png",
    nikhil: "/assets/Margin (2).png",
    srikant: "/assets/Margin (3).png",
    devesh: "/assets/Margin (4).png",
    ctaperson: "/assets/ctaperson.png",
    aipmgraph: "/assets/AI PM Graph.png",
    buildrLogo: "/assets/builder.png",
    buildrBg: "https://www.figma.com/api/mcp/asset/64553b5e-2be6-40fa-860e-19cb5de5af11",
};

// ── Data ───────────────────────────────────────────────────────────────
const testimonials = [
    {
        name: "Kamayani Chaliki",
        role: "Founder at Skinbuddy",
        quote: "Built Rasa AI to simplify personalized nutrition — turning complex meal planning into an intelligent, adaptive experience.",
        avatar: "/assets/testimonials/Kamayani Chaliki.png",
        color: "blue",
    },
    {
        name: "Dhruv Dave",
        role: "Prompt Engineer at Alight Technologies",
        quote: "Understood how AI systems actually work — from agents and workflows to production-ready builds.",
        avatar: "/assets/testimonials/dhruvedave.png",
        color: "blue",
    },
    {
        name: "Shivam Jha",
        role: "Data Engineer at Caparo Engineering India Ltd",
        quote: "An eye-opening journey that bridged data analytics learning with real-world business application.",
        avatar: "/assets/testimonials/Shivam Jha.png",
        color: "blue",
    },
    {
        name: "Sourabh Kalra",
        role: "HR Analyst at Rajesh Chetan Insurance Brokers Pvt Ltd",
        quote: "Built ContextForge — a web app that transforms average prompts into high-performing, context-rich instructions in seconds.",
        avatar: "/assets/testimonials/Sourabh Kalra.png",
        color: "blue",
    },
    {
        name: "Srikant Pandey",
        role: "AI QA Engineering Lead at TO THE NEW",
        quote: "Built Rasa AI to simplify personalized nutrition — turning complex meal planning into an intelligent, adaptive experience.",
        avatar: "/assets/testimonials/Srikant Pandey.png",
        color: "blue",
    },
    {
        name: "Nikhil D",
        role: "Associate PM",
        quote: "From idea to interface — shipped my first product and applied product principles in real time.",
        avatar: "/assets/testimonials/nikhil d.png",
        color: "teal",
    },
    {
        name: "Devesh Kumar",
        role: "Founder (3rd Year CSE Student) at VaidhyaTechAI",
        quote: "A single question changed my product thinking: Who is this for, and what exact problem am I solving?",
        avatar: "/assets/testimonials/Devesh Kumar.png",
        color: "orange",
    },
    {
        name: "Shivam Sharma",
        role: "Product intern",
        quote: "Learned how Generative AI reshapes product roadmaps, customer experience, and strategic decision-making.",
        avatar: "/assets/testimonials/Shivam Sharma.png",
        color: "teal",
    },
];

const projects = [
    {
        title: "Omni-Channel Social Media Agent",
        holder: "Project Holder: Siddiq Ahmed",
        description: "A high-performance neural network visualizer designed for rapid prototyping and real-time…",
        tags: ["AI", "Web App"],
        holderColor: "green",
    },
    {
        title: "Classmate.io",
        holder: "project holder : Biswajit Pradhan",
        description: "Enterprise-grade data analytics dashboard with predictive modeling and custom report generati…",
        tags: ["SAAS", "DATA"],
        holderColor: "blue",
    },
    {
        title: "SecureVault",
        holder: "Design Lead at CreativeCo",
        description: "Next-gen decentralized security infrastructure protecting digital assets with military-grade…",
        tags: ["Web App", "SECURITY"],
        holderColor: "orange",
    },
];

const faqItems = [
    {
        question: "What is AcceleratorX, and how is it different from other AI courses?",
        answer: "AcceleratorX offers AI-powered courses in data analytics, product management, digital marketing, generative AI and data science. Focused on real-world project automation and job-ready skills, unlike traditional courses. You learn how to apply AI in real business scenarios.",
    },
    {
        question: "Which is the best AI course in India for working professionals?",
        answer: "The best course is the one that focuses on practical skills, real projects, and career outcomes. AcceleratorX programs are designed specifically for working professionals in India who want to transition into AI-driven roles without wasting time on outdated content.",
    },
    {
        question: "Can I learn AI or data analytics without coding?",
        answer: "Yes, our programs are designed for beginners and professionals who want to learn AI tools, data analytics, automation, and product management without coding. You will start with no code tools and gradually build practical skills.",
    },
    {
        question: "What are the career opportunities after completing AcceleratorX AI courses?",
        answer: "After completing an AI-focused program, you can apply for roles such as AI data analyst, business analyst, AI product manager, AI digital marketer, automation specialist, and many more.",
    },
    {
        question: "How can I switch my career to AI or data and analytics?",
        answer: "In a career, you need practical skills and a real-world project experience portfolio that proves your ability. AcceleratorX helps you transition by focusing on hands-on learning and real use cases.",
    },
    {
        question: "What is the salary of a data analyst or AI professional in India?",
        answer: "For the entry level is 8 to 12 LPA. For mid-level 10 to 20 LPA. For experienced roles, 35 to 70 LPA. AI-skilled professionals often earn 131% higher due to increasing demands.",
    },
    {
        question: "Are these AI courses suitable for beginners and non-tech backgrounds?",
        answer: "Yes, these programs are designed for beginners, working professionals, and individuals with diverse backgrounds. You don't need prior coding or technical experience to get started.",
    },
    {
        question: "What tools and technologies will you be learning in these courses?",
        answer: "Depending on the program, you will work with a variety of tools. In the gen AI and agentic AI course, you will cover AI tools and AI automation. In the AI Product Management course, you will learn product workflow tools. The data analytics course will cover Excel, SQL, Python, and AI dashboard tools.",
    },
    {
        question: "Do I get a certificate after completing the course?",
        answer: "Yes, you will receive a certification that validates job-ready skills along with a portfolio of real projects valuable for job applications.",
    },
    {
        question: "How long does it take to become job-ready in AI or data analytics?",
        answer: "Most become job-ready within 3 to 6 months, depending on consistency and effort. The focus is on building practical skills and real projects.",
    },
    {
        question: "Is AI replacing jobs or creating new opportunities?",
        answer: "AI is transforming jobs, not just replacing them. Professionals who learn how to work with AI tools and automation are seeing better opportunities, higher salaries and faster career growth.",
    },
    {
        question: "Why is learning AI important for working professionals today?",
        answer: "AI is becoming a core skill across industries. Professionals who understand AI, data analytics and automation are valuable and future-proof compared to those relying on traditional skills.",
    },
    {
        question: "How do I get started with the AcceleratorX?",
        answer: "You can start by booking a free demo where we will walk you through the programme structure, career path, and learning roadmap. This helps you understand exactly how to transition into an AI-driven career.",
    },
];

const floatingBadges = [
    { label: "AI Digital Marketing", top: "245px", left: "105px", icon: "/assets/aidigitalmarketing.png", width: 221, path: "/courses/ai-digital-marketing" },
    { label: "Generative AI", top: "330px", left: "530px", icon: "/assets/generativeai.png", width: 180, path: "/courses/generative-ai" },
    { label: "AI Data Analytics", top: "440px", left: "65px", icon: "/assets/aidataanalystics.png", width: 204, path: "/courses/data-analytics" },
    { label: "AI Data Science", top: "530px", left: "510px", icon: "/assets/aidatascience.png", width: 195, path: "/courses/data-science" },
    { label: "AI Product Management", top: "650px", left: "50px", icon: "/assets/aiproductmanagemnt.png", width: 252, path: "/courses/product-management" },
    { label: "Advanced Generative AI", top: "720px", left: "350px", icon: "/assets/advancedgenerativeai.png", width: 252, path: "/courses/advance-ai-crash-course" },
];

const companyLogos = [
    { name: "Microsoft", url: "/assets/microsoft.png", height: 40 },
    { name: "Deloitte", url: "/assets/deloitte.png", height: 40 },
    { name: "Paisabazaar", url: "/assets/paisabazaar.png", height: 40 },
    { name: "Bajaj Finserv", url: "/assets/bajajfinserv.png", height: 40 },
    { name: "Indian Government", url: "/assets/indiangovernment.png", height: 40 },
    { name: "Razorpay", url: "/assets/Razorpay.png", height: 40 },
    { name: "Healthcare", url: "/assets/companyLogos/alumni/Healthcare.png", height: 40 },
    { name: "Resolute AI", url: "/assets/companyLogos/alumni/resolute AI.png", height: 40 },
    { name: "Logo 1", url: "/assets/companyLogos/alumni/image 149.png", height: 40 },
    { name: "Logo 2", url: "/assets/companyLogos/alumni/image 234.png", height: 40 },
    { name: "Logo 3", url: "/assets/companyLogos/alumni/image 235.png", height: 40 },
    { name: "Logo 4", url: "/assets/companyLogos/alumni/image 236.png", height: 40 },
    { name: "Logo 5", url: "/assets/companyLogos/alumni/image 237.png", height: 40 },
    { name: "Logo 6", url: "/assets/companyLogos/alumni/image 238.png", height: 40 },
    { name: "Logo 7", url: "/assets/companyLogos/alumni/image 239.png", height: 40 },
    { name: "Logo 8", url: "/assets/companyLogos/alumni/image 240.png", height: 40 },
    { name: "Logo 9", url: "/assets/companyLogos/alumni/image 241.png", height: 40 },
    { name: "Logo 10", url: "/assets/companyLogos/alumni/image 242.png", height: 40 },
    { name: "Logo 11", url: "/assets/companyLogos/alumni/image 244.png", height: 40 },
    { name: "Logo 12", url: "/assets/companyLogos/alumni/image-removebg-preview (1).png", height: 40 },
    { name: "Logo 13", url: "/assets/companyLogos/alumni/image-removebg-preview (2).png", height: 40 },
    { name: "Logo 14", url: "/assets/companyLogos/alumni/image-removebg-preview (3).png", height: 40 },
    { name: "Logo 15", url: "/assets/companyLogos/alumni/image-removebg-preview (4).png", height: 40 },
    { name: "Logo 16", url: "/assets/companyLogos/alumni/image-removebg-preview (5).png", height: 40 },
    { name: "Logo 17", url: "/assets/companyLogos/alumni/image-removebg-preview (6).png", height: 40 },
    { name: "Logo 18", url: "/assets/companyLogos/alumni/image-removebg-preview (7).png", height: 40 },
    { name: "Logo 19", url: "/assets/companyLogos/alumni/image-removebg-preview (8).png", height: 40 },
    { name: "Logo 20", url: "/assets/companyLogos/alumni/image-removebg-preview (9).png", height: 40 },
    { name: "Logo 21", url: "/assets/companyLogos/alumni/image-removebg-preview (10).png", height: 40 },
];

// ── Components ─────────────────────────────────────────────────────────

const ProjectCardComponent = memo(function ProjectCardComponent({ project, offset = 0, isThird = false }: { project: any; offset?: number; isThird?: boolean }) {
    return (
        <div
            className="group relative bg-[#0a0a0a] border border-[#2f6bff]/5 rounded-[16px] p-5 md:p-[24px] flex flex-col justify-between shadow-[0px_4px_30px_0px_rgba(47,107,255,0.1)] w-full max-w-[384px] flex-shrink-0 transition-all duration-500 overflow-hidden mx-auto"
            style={{ marginTop: typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : offset, height: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'auto' : (isThird ? '213px' : '210px'), minHeight: '180px' }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2f6bff]/5 via-[#0A0A0A] to-[#0A0A0A] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-white font-bold text-[18px] leading-[28px] tracking-tight line-clamp-1 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.title}
                    </h3>
                    <div className={`inline-block border rounded-full px-3 py-0.5 text-[11px] font-medium ${project.holderColor === 'green' ? 'border-[#9eff1f]/30 bg-[#9eff1f]/5 text-[#9eff1f]' :
                        project.holderColor === 'blue' ? 'border-[#2f6bff]/30 bg-[#2f6bff]/5 text-[#2f6bff]' :
                            'border-orange-400/30 bg-orange-400/5 text-orange-400'}`}>
                        {project.holder}
                    </div>
                </div>

                <p className="text-[#999] text-[14px] leading-[23px] line-clamp-2 mb-6 md:mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex gap-2">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="bg-[#1c1c1c] text-[#cfcfcf] text-[11px] font-medium px-3 py-1 rounded-full border border-white/5 uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a 
                        href="https://buildrx.org/projects" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-white/10 rounded-lg px-4 md:px-5 py-2 md:py-2.5 text-white text-[12px] font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        View Project <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
});

// ── HomePage ───────────────────────────────────────────────────────────

// ── Components: FAQ Section ────────────────────────────────────────────

const FAQSection = memo(function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number>(-1);
    const [visibleCount, setVisibleCount] = useState(3);

    const toggleFAQ = useCallback((idx: number) => {
        setOpenFAQ(prev => (prev === idx ? -1 : idx));
    }, []);

    const showMore = useCallback(() => {
        setVisibleCount(prev => Math.min(prev + 5, faqItems.length));
    }, []);

    const visibleFAQs = faqItems.slice(0, visibleCount);
    const hasMore = visibleCount < faqItems.length;

    return (
        <section className="max-w-[900px] mx-auto px-4 py-16 lg:py-32">
            <h2 className="text-3xl font-bold text-center mb-10 lg:mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {visibleFAQs.map((item, idx) => (
                    <div key={idx} className="bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#3e38e0]/40 transition-all">
                        <button className="w-full p-6 text-left flex justify-between items-center" onClick={() => toggleFAQ(idx)}>
                            <span className="font-medium text-sm md:text-base">{item.question}</span>
                            <span className={`text-2xl transition-transform ${openFAQ === idx ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        {openFAQ === idx && (
                            <div className="px-6 pb-6 text-[#999] text-sm md:text-base leading-relaxed">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {hasMore && (
                <div className="mt-8 flex justify-end px-2">
                    <button onClick={showMore} className="text-white font-bold flex items-center gap-2 hover:opacity-80 transition-all text-sm md:text-base">
                        View more <span>→</span>
                    </button>
                </div>
            )}
        </section>
    );
});

// ── Components: Skill Gap Section ──────────────────────────────────────

const skillGapCategories = ["AI Product Management", "AI Digital Marketing", "AI Data Science", "Generative AI", "Advanced Generative AI"];

const skillGapData = [
  {
    // AI Product Management
    path: "M 0,400 C 125,400 125,266 250,266 C 375,266 375,180 500,180 C 625,180 625,80 750,80 C 875,80 875,20 1000,20",
    dots: [{ cx: 0, cy: 400 }, { cx: 250, cy: 266 }, { cx: 500, cy: 180 }, { cx: 750, cy: 80 }, { cx: 1000, cy: 20 }]
  },
  {
    // AI Digital Marketing
    path: "M 0,380 C 125,380 125,240 250,240 C 375,240 375,160 500,160 C 625,160 625,60 750,60 C 875,60 875,10 1000,10",
    dots: [{ cx: 0, cy: 380 }, { cx: 250, cy: 240 }, { cx: 500, cy: 160 }, { cx: 750, cy: 60 }, { cx: 1000, cy: 10 }]
  },
  {
    // AI Data Science
    path: "M 0,350 C 125,350 125,200 250,200 C 375,200 375,120 500,120 C 625,120 625,40 750,40 C 875,40 875,0 1000,0",
    dots: [{ cx: 0, cy: 350 }, { cx: 250, cy: 200 }, { cx: 500, cy: 120 }, { cx: 750, cy: 40 }, { cx: 1000, cy: 0 }]
  },
  {
    // Generative AI
    path: "M 0,410 C 125,410 125,320 250,320 C 375,320 375,250 500,250 C 625,250 625,160 750,160 C 875,160 875,100 1000,100",
    dots: [{ cx: 0, cy: 410 }, { cx: 250, cy: 320 }, { cx: 500, cy: 250 }, { cx: 750, cy: 160 }, { cx: 1000, cy: 100 }]
  },
  {
    // Advanced Generative AI
    path: "M 0,330 C 125,330 125,180 250,180 C 375,180 375,90 500,90 C 625,90 625,30 750,30 C 875,30 875,-20 1000,-20",
    dots: [{ cx: 0, cy: 330 }, { cx: 250, cy: 180 }, { cx: 500, cy: 90 }, { cx: 750, cy: 30 }, { cx: 1000, cy: -20 }]
  }
];

const SkillGapSection = memo(function SkillGapSection() {
    const [activeBadge, setActiveBadge] = useState(0);
    const currentData = skillGapData[activeBadge] || skillGapData[0];

    return (
        <section className="max-w-[1440px] mx-auto px-4 py-16 lg:py-32 bg-[#0A0A0A]">
            <div className="text-center mb-10 lg:mb-16 px-4">
                <h2 className="text-4xl md:text-[54px] font-bold mb-6 text-white">The AI Skill Gap is Growing Faster</h2>
                <p className="text-[#C2C2C2] text-[16px] md:text-[18px] max-w-4xl mx-auto leading-relaxed mb-12">
                    The demand for AI-skilled professionals, data analytics, and automation experts is growing rapidly across industries. Companies are actively hiring professionals who can work with AI tools, analyse data, and drive decisions. If you're not learning AI, data analytics, products, or automations, you're falling behind in today's job market
                </p>
 
                {/* Program Category Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {skillGapCategories.map((text, i) => (
                        <span
                            key={i}
                            onClick={() => setActiveBadge(i)}
                            className={`px-5 py-2.5 rounded-full text-[12px] font-bold border transition-all cursor-pointer ${activeBadge === i ? 'bg-[#3E38DE] border-[#3E38DE] text-white' : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'}`}
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
 
            <div className="relative bg-[#0D0D0D] rounded-[32px] border border-[#1f1f1f] shadow-[0_0_100px_rgba(62,56,222,0.15)] overflow-hidden w-full max-w-[1100px] mx-auto p-8 lg:p-16">
                <style>
                    {`
                        @keyframes draw-chart-line {
                            0% { stroke-dashoffset: 1500; }
                            40% { stroke-dashoffset: 0; }
                            100% { stroke-dashoffset: 0; }
                        }
                        @keyframes dot-appear {
                            0%, 15% { transform: scale(0); opacity: 0; }
                            25%, 100% { transform: scale(1); opacity: 1; }
                        }
                        @keyframes glow-pulse {
                            0%, 100% { opacity: 0.3; }
                            20% { opacity: 0.8; }
                        }
                        .draw-path-blue {
                            stroke-dasharray: 1500;
                            stroke-dashoffset: 1500;
                            animation: draw-chart-line 6s ease-in-out infinite;
                        }
                        .chart-dot {
                            transform-origin: center;
                            animation: dot-appear 6s ease-out infinite;
                        }
                        .chart-glow {
                            animation: glow-pulse 6s ease-in-out infinite;
                        }
                        `}
                </style>
 
                <div className="relative w-full aspect-[2/1] min-h-[300px]">
                    {/* Header Legend */}
                    <div className="absolute top-0 left-0 lg:left-10 flex gap-8 items-center text-[10px] lg:text-[12px] font-bold tracking-widest uppercase">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-[2px] border-b-[2px] border-dashed border-[#555]"></div>
                            <span className="text-[#7A7A7A]">Average Analytics</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-[3px] bg-[#2f6bff]"></div>
                            <span className="text-white">Performance Analytics</span>
                        </div>
                    </div>
 
                    {/* Chart Grid Lines */}
                    <div className="absolute top-[60px] bottom-8 left-[40px] lg:left-[50px] right-0 flex flex-col justify-between">
                        {[75, 60, 45, 30, 15, 0].map((val) => (
                            <div key={val} className="relative w-full border-t border-white/5 h-0">
                                <span className="absolute -top-3 -left-[35px] lg:-left-[45px] w-8 text-right text-[10px] lg:text-[11px] font-medium text-[#7A7A7A]">
                                    ₹{val}L
                                </span>
                            </div>
                        ))}
                    </div>
 
                    {/* Chart X-axis Labels */}
                    <div className="absolute bottom-0 left-[40px] lg:left-[50px] right-0 flex justify-between px-0 text-[10px] lg:text-[11px] font-medium text-[#7A7A7A] transform translate-y-1/2">
                        <span className="-ml-3">2026</span>
                        <span>2028</span>
                        <span>2030</span>
                        <span>2032</span>
                        <span className="-mr-3">2035</span>
                    </div>
 
                    {/* Chart Vectors */}
                    <svg key={activeBadge} className="absolute top-[60px] bottom-8 left-[40px] lg:left-[50px] right-0 w-full h-[calc(100%-60px-32px)] overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">
 
                        {/* Blue Line Ambient Glow */}
                        <path
                            d={currentData.path}
                            fill="none" stroke="#2f6bff" strokeWidth="12" className="chart-glow blur-xl" strokeLinecap="round"
                        />
 
                        {/* Average Grey Dashed Path */}
                        <path
                            d="M 0,433 L 250,416 L 500,400 L 750,383 L 1000,366"
                            fill="none" stroke="#555" strokeWidth="2" strokeDasharray="8 8"
                        />
 
                        {/* Performance Blue Path */}
                        <path
                            d={currentData.path}
                            fill="none" stroke="#2f6bff" strokeWidth="4" className="draw-path-blue" strokeLinecap="round"
                        />
 
                        {/* Grey Background Dots */}
                        {[
                            { cx: 0, cy: 433 }, { cx: 250, cy: 416 }, { cx: 500, cy: 400 }, { cx: 750, cy: 383 }, { cx: 1000, cy: 366 }
                        ].map((point, i) => (
                            <circle key={`g-${i}`} cx={point.cx} cy={point.cy} r="4" fill="#0D0D0D" stroke="#555" strokeWidth="2" />
                        ))}
 
                        {/* Glowing Blue Dots */}
                        {currentData.dots.map((point, i) => (
                            <circle
                                key={`b-${i}`}
                                cx={point.cx}
                                cy={point.cy}
                                r="6"
                                fill="#fff"
                                stroke="#2f6bff"
                                strokeWidth="3"
                                className="chart-dot"
                                style={{ animationDelay: `${i * 0.4}s` }}
                            />
                        ))}
                    </svg>
                </div>
            </div>
        </section>
    );
});

// ── HomePage ───────────────────────────────────────────────────────────

const HomePage = memo(function HomePage() {
    const { setSelectedCourse } = useCourseContext();

    useEffect(() => {
        setSelectedCourse(null);
    }, [setSelectedCourse]);

    // Heavily optimized sub-section memoizations
    const heroSection = useMemo(() => (
        <section className="relative min-h-0 lg:min-h-[900px] pb-20 lg:pb-0 bg-[#0A0A0A] overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto relative flex flex-col lg:flex-row gap-12 lg:gap-[60px] items-center lg:items-start pt-20 lg:pt-0 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: "80px 80px",
                        maskImage: "radial-gradient(circle at 40% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(circle at 40% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 75%)",
                        mixBlendMode: "soft-light",
                        opacity: 0.7,
                    }}
                />

                <div className="relative z-10 w-full px-0 lg:pl-[70px] pt-[80px] lg:pt-[250px] flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-['Inter'] font-medium text-[52px] leading-[70px] tracking-[0] max-w-[575px]">
                            AI Courses in India For <br />
                            Working <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, #E2E2E2 0%, #6F79E1 30%, #3B46E0 100%)' }}>Professionals,</span> <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, #E2E2E2 0%, #6F79E1 30%, #3B46E0 100%)' }}>Freshers</span> and <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, #E2E2E2 0%, #6F79E1 30%, #3B46E0 100%)' }}>Business</span> <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, #E2E2E2 0%, #6F79E1 30%, #3B46E0 100%)' }}>Owners</span>
                        </h1>
                        <p className="text-[16px] md:text-[20px] text-[#94a3b8] max-w-[690px] font-medium leading-[32px] text-center lg:text-left">
                            AI Courses in India For Working Professionals, Freshers and<br /> Business Owners. Focusing on project and real career<br /> outcomes.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-14 mt-6 lg:mt-4">
                        <div 
                            className="flex items-center group cursor-pointer transition-all duration-300 transform hover:scale-[1.02]"
                            onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {/* Combined Main Button */}
                            <button className="h-[52px] lg:h-[58px] px-8 lg:px-10 bg-[#3E38DE] text-white text-[16px] lg:text-[18px] font-bold rounded-full shadow-[0_8px_32px_rgba(62,56,222,0.35)] z-20 group-hover:brightness-110 whitespace-nowrap">
                                Explore Our Programs
                            </button>
                            {/* Arrow part - joined with a negative margin on desktop/tablet */}
                            <div className="w-[52px] lg:w-[58px] h-[52px] lg:h-[58px] bg-[#3E38DE] text-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(62,56,222,0.35)] -ml-[1px] z-10 group-hover:brightness-110">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </div>

                        <a href="/sign-up" className="relative group cursor-pointer whitespace-nowrap">
                            <span className="flex items-center gap-3 text-[16px] lg:text-[20px] font-bold text-white transition-all group-hover:text-white/90">
                                Download Brochure <span className="text-[20px] lg:text-[24px] transform transition-transform group-hover:translate-x-2">→</span>
                            </span>
                            <div className="absolute left-0 bottom-[-6px] w-full h-[1.5px] bg-white/20 group-hover:bg-white/60 transition-all" />
                        </a>
                    </div>
                </div>

                <div className="pt-[40px] lg:pt-[125px] relative z-10 hidden sm:block">
                    <div className="relative transform scale-[0.6] md:scale-[0.8] lg:scale-100 origin-top" style={{ width: "700px", height: "800px" }}>
                        <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 bg-[#161616]">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a3e] via-[#2a2570] to-[#4C5BFA]/60 opacity-60" />
                            <div className="absolute left-1/2 top-[60%] -translate-x-1/2 w-[130%] h-[80%] bg-[#4C5BFA]/30 rounded-full blur-[100px]" />
                            <img src={ASSETS.heroImage} alt="AI Student" className="absolute top-0 left-0 w-full h-full object-cover z-0" draggable={false} fetchPriority="high" />
                        </div>

                        <img src="/assets/happystudent.png" className="absolute top-[30px] left-[30px] w-[208px] h-auto rounded-[20px] z-20" draggable={false} fetchPriority="high" />
                        <div className="absolute top-[34px] right-[40px] z-20 flex flex-col items-end opacity-90">
                            <img src="/assets/ibm.png" className="w-[100px] h-auto brightness-0 invert" draggable={false} />
                        </div>
                        {floatingBadges.map((badge, idx) => (
                            <Link 
                                key={idx} 
                                to={badge.path} 
                                className="absolute z-20 bg-white flex items-center p-2 px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-white/95 active:scale-95 group/badge" 
                                style={{ top: badge.top, left: badge.left }}
                            >
                                <div className="mr-2 flex items-center justify-center">
                                    <img src={badge.icon} className="w-5 h-5 object-contain" draggable={false} />
                                </div>
                                <span className="text-[13px] font-bold text-[#161616] whitespace-nowrap">{badge.label}</span>
                                <div className="ml-2 w-4 h-4 rounded-full bg-[#3E38DE]/10 flex items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-opacity">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#3E38DE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    ), []);

    {/* ── ALUMNI LOGOS ──────────────────────────────────────────── */ }
    const alumniSection = useMemo(() => (
        <section className="max-w-[1440px] mx-auto px-4 py-12 lg:py-24 overflow-hidden">
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 35s linear infinite;
                    }
                    `}
            </style>
            <p className="text-center text-white text-3xl md:text-5xl font-bold mb-6">Our Alumni Are Working across 1700+ Top MNCs</p>
            <p className="text-center text-[#C2C2C2] text-lg mb-16 max-w-4xl mx-auto leading-relaxed">
                Get hired in AI, product, marketing, and data roles. AcceleratorX AI courses are trusted by 1700+ companies globally. Our learners aren't just learning; they're applying AI tools, dashboards, automation workflows, and business use cases in real companies like Microsoft, Deloitte, and high-growth startups.
            </p>

            <div className="relative overflow-hidden w-full">
                <div className="flex w-max gap-16 animate-scroll whitespace-nowrap">
                    {[...companyLogos, ...companyLogos].map((logo, idx) => (
                        <img key={idx} src={logo.url} alt={logo.name} style={{ height: `${logo.height}px` }} className="transition-all cursor-pointer inline-block mx-12 object-contain" draggable={false} loading="lazy" />
                    ))}
                </div>
            </div>
        </section>
    ), []);

    {/* ── DOMAIN CARDS ────────────────────────────────────────────── */ }
    const domainSection = useMemo(() => (
        <section id="programs-section" className="max-w-[1440px] mx-auto px-4 lg:px-[70px] py-16 lg:py-32">
            <h2 className="text-3xl lg:text-[40px] font-bold text-white text-center mb-4">Choose Your AI Career Path and Build Your AI Edge</h2>
            <p className="text-[#C2C2C2] text-sm lg:text-lg text-center mb-10 lg:mb-16 max-w-4xl mx-auto">
                From startups to global companies like Microsoft, Deloitte, Paytm, and many more. Our learners are applying AI, product, data analytics, and automation skills in high-paying AI roles.
            </p>

            <div className="flex flex-wrap gap-x-[23px] gap-y-[23px] justify-center lg:justify-start">
                {/* First Extra-Wide Card */}
                <Link to="/courses/data-science" className="relative bg-[#0a0a0a] rounded-[24px] overflow-hidden border border-[#202020] w-full lg:w-[589px] h-auto lg:h-[250px] shadow-2xl flex flex-col sm:flex-row group cursor-pointer z-10 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative w-full sm:w-[350px] h-[200px] sm:h-full overflow-hidden">
                        <img src="/assets/aidatasciencecard.png" alt="AI Data Science" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                    </div>
                    <div className="flex-1 lg:w-[239px] h-full pl-[22px] pt-[15px] pb-6 pr-6 flex flex-col justify-start bg-[#0A0A0A] border-t sm:border-t-0 sm:border-l border-[#202020]">
                        <div className="pt-2">
                            <p className="text-[14px] md:text-[16px] xl:text-[18px] font-bold uppercase text-[#f5f7ff] leading-[24px] mb-[8px]">WHO IS IT FOR?</p>
                            <p className="text-[#f5f7ff] md:text-[12px] xl:text-[15px] leading-[20px] xl:leading-[22px] font-normal capitalize min-h-[120px] md:min-h-[144px]">
                                Turn Messy Data Into Predictive Insights. Go Beyond Basic Dashboards And Learn The Analytics That Drive High-Impact Decisions.
                            </p>
                        </div>
                        <div className="group/btn flex items-center mt-auto md:mt-[13px] mb-2 mr-3">
                            <button className="relative z-[1] bg-[#3E38E0] text-white text-[14px] font-medium w-[103px] h-[32px] rounded-[30px] flex items-center justify-center transition-all duration-300 group-hover/btn:brightness-110">
                                Read More
                            </button>
                            <div className="relative z-[0] -ml-[2px] bg-[#3E38E0] rounded-full w-[32px] h-[32px] flex items-center justify-center transition-all duration-300 group-hover/btn:brightness-110">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-[0deg] transition-transform duration-300 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Standard Cards */}
                {[
                    { img: "/assets/aidigitalmarketingcard.png", path: "/courses/ai-digital-marketing" },
                    { img: "/assets/aidataanalyticscard.png", path: "/courses/data-analytics" },
                    { img: "/assets/aiproductmanagement.png", path: "/courses/product-management" },
                    { img: "/assets/generativeai&aiagents.png", path: "/courses/generative-ai" },
                    { img: "/assets/advancegenai_v2.png", path: "/courses/advance-ai-crash-course" }
                ].map((card, idx) => (
                    <Link
                        key={idx}
                        to={card.path}
                        className={`relative bg-[#0a0a0a] overflow-hidden border border-[#202020] group cursor-pointer shadow-xl transition-transform hover:scale-[1.02] duration-300 w-full sm:w-[calc(50%-12px)] ${idx < 2 ? 'lg:w-[332px]' : 'lg:w-[417px]'}`}
                        style={{ height: '250px', borderRadius: idx < 2 ? '24px' : '24px' }}
                    >
                        <img src={card.img} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-90 group-hover:opacity-100" draggable={false} loading="lazy" />
                    </Link>
                ))}
            </div>
        </section>
    ), []);

    {/* ── TESTIMONIALS ──────────────────────────────────────────── */ }
    const testimonialSection = useMemo(() => (
        <section className="relative w-full mt-[-80px] pt-20 lg:pt-32 pb-24 lg:pb-40 overflow-hidden bg-[#0A0A0A]">
            <style>
                {`
                    @keyframes scroll-test {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll-test {
                        animation: scroll-test 60s linear infinite;
                    }
                    `}
            </style>
            <div className="absolute left-0 top-[55%] -translate-y-1/2 w-[255px] h-[682px] z-30 pointer-events-none hidden md:block"
                style={{ background: 'linear-gradient(90deg, #1B1F6E 0%, rgba(10, 10, 10, 0) 100%)' }}
            />
            <div className="absolute right-0 top-[55%] -translate-y-1/2 w-[255px] h-[682px] z-30 pointer-events-none hidden md:block"
                style={{ background: 'linear-gradient(270deg, #1B1F6E 0%, rgba(10, 10, 10, 0) 100%)' }}
            />

            <div className="relative z-20 w-full overflow-hidden">
                <div className="text-center mb-10 lg:mb-16 px-4 md:px-8 lg:px-[70px]">
                    <h2 className="text-4xl md:text-[54px] font-bold text-white mb-4 tracking-tight">
                        2700+ Success Stories
                    </h2>
                    <p className="text-white text-[20px] md:text-[28px] font-bold mb-6">
                        Real people. Real career shifts. Real results.
                    </p>
                    <div className="w-full flex justify-center">
                        <p className="text-[#C2C2C2] text-[16px] md:text-[18px] font-medium leading-relaxed mx-auto max-w-[900px]">
                            Professionals like you are already making the shift. Hear directly from our learner who transitioned into an AI-led career in data analytics, marketing, and product roles after learning with AcceleratorX
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-full">
                    <div
                        className="relative w-full overflow-hidden pt-[48px]"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        }}
                    >
                        <div className="flex w-max gap-4 md:gap-6 animate-scroll-test hover:[animation-play-state:paused] pb-8 pt-2">
                            {[...testimonials.slice(0, 4), ...testimonials.slice(0, 4)].map((t, idx) => (
                                <div key={idx} className="group relative flex-shrink-0 w-[280px] md:w-[383px] h-[190px] md:h-[251px]">
                                    <div
                                        className="w-full h-full rounded-[12px] relative z-10 transition-all duration-300 ease-out hover:scale-[1.015] hover:-translate-y-1"
                                        style={{
                                            background: 'linear-gradient(180deg, #141414 0%, #0A0A0A 100%)',
                                            border: '1px solid rgba(47, 107, 255, 0.1)',
                                            boxShadow: '0px 1px 20px 0px rgba(47, 107, 255, 0.25)',
                                            padding: typeof window !== 'undefined' && window.innerWidth < 768 ? '45px 15px 15px 15px' : '57px 18px 24px 18px',
                                        }}
                                    >
                                        <div className="absolute top-[-35px] md:top-[-48px] left-[15px] md:left-[18px] w-[70px] md:w-[96px] h-[70px] md:h-[96px] z-20">
                                            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-white/15">
                                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" draggable={false} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-[16px] md:text-[18px] font-bold text-white leading-snug md:leading-[28px] tracking-[0px]">{t.name}</h3>
                                            <div className={`inline-block border px-2 md:px-3 py-0.5 md:py-1 mt-1 md:mt-2 rounded-full text-[9px] md:text-[11px] font-medium tracking-wide ${t.color === "teal" ? "border-teal-400/40 text-teal-400" : t.color === "orange" ? "border-orange-400/40 text-orange-400" : "border-blue-400/40 text-blue-400"}`}>
                                                {t.role}
                                            </div>
                                        </div>
                                        <p className="text-[13px] md:text-[16px] font-medium text-[#E5E5E5] leading-relaxed md:leading-[24px] text-left mt-3 md:mt-6 tracking-[0px] line-clamp-3">
                                            {t.quote}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="relative w-full overflow-hidden pt-[48px]"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        }}
                    >
                        <div
                            className="flex w-max gap-4 md:gap-6 animate-scroll-test hover:[animation-play-state:paused] pb-8 pt-2"
                            style={{ animationDirection: 'reverse', animationDuration: '70s' }}
                        >
                            {[...testimonials.slice(4, 8), ...testimonials.slice(4, 8)].map((t, idx) => (
                                <div key={idx} className="group relative flex-shrink-0 w-[280px] md:w-[383px] h-[190px] md:h-[251px]">
                                    <div
                                        className="w-full h-full rounded-[12px] relative z-10 transition-all duration-300 ease-out hover:scale-[1.015] hover:-translate-y-1"
                                        style={{
                                            background: 'linear-gradient(180deg, #141414 0%, #0A0A0A 100%)',
                                            border: '1px solid rgba(47, 107, 255, 0.1)',
                                            boxShadow: '0px 1px 20px 0px rgba(47, 107, 255, 0.25)',
                                            padding: typeof window !== 'undefined' && window.innerWidth < 768 ? '45px 15px 15px 15px' : '57px 18px 24px 18px',
                                        }}
                                    >
                                        <div className="absolute top-[-48px] left-[18px] w-[96px] h-[96px] z-20">
                                            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-white/15">
                                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" draggable={false} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-[18px] font-bold text-white leading-[28px] tracking-[0px]">{t.name}</h3>
                                            <div className={`inline-block border px-3 py-1 mt-2 rounded-full text-[11px] font-medium tracking-wide ${t.color === "teal" ? "border-teal-400/40 text-teal-400" : t.color === "orange" ? "border-orange-400/40 text-orange-400" : "border-blue-400/40 text-blue-400"}`}>
                                                {t.role}
                                            </div>
                                        </div>
                                        <p className="text-[16px] font-medium text-[#E5E5E5] leading-[24px] text-left mt-4 tracking-[0px] line-clamp-3">
                                            {t.quote}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ), []);

    {/* ── BUILDRX PORTFOLIO ─────────────────────────────────────── */ }
    const buildrxSection = useMemo(() => (
        <section className="max-w-[1440px] mx-auto mt-[-115px] px-4 md:px-8 lg:px-[70px] py-16 lg:py-20 bg-[#0A0A0A]">
            <h2 className="text-3xl md:text-[44px] font-bold text-white text-center mb-6">
                Build in Public. Get Hired.
            </h2>
            <p className="max-w-[1020px] mx-auto text-[#C2C2C2] text-[16px] md:text-[18px] font-medium text-center leading-[28px] mb-12">
                Instead of just learning, you build a real AI project dashboard, automation systems, and workflow. Anshul keeps them as solid proof of work in your resume and interviews. Instead of just completing assignments, our learners build real-world work that demonstrates the ability to apply AI, data analytics, and automation in business scenarios.
            </p>

            <div className="relative bg-[#0a0a0a] rounded-[20px] mt-10 border-0 overflow-hidden w-full lg:w-[1300px] h-auto lg:h-[1040px] mx-auto pb-16 lg:pb-0">
                <div className="absolute left-[-80px] top-[-20px] w-[300px] h-[650px] rounded-full bg-[#3e38e0]/10 blur-3xl opacity-50 hidden lg:block" />
                <div className="absolute right-[-80px] bottom-[50px] w-[250px] h-[500px] rounded-full bg-[#3e38e0]/8 blur-3xl opacity-30 hidden lg:block" />

                <div className="relative z-10 w-full h-full flex flex-col pt-10 lg:pt-0">
                    <div className="relative lg:absolute top-0 lg:top-[40px] left-0 lg:left-[458px] w-full lg:w-[384px] h-[64px] lg:h-[84px] flex items-center justify-center">
                        <img src={ASSETS.buildrLogo} alt="BuildrX" className="h-[48px] lg:h-[64px] object-contain" draggable={false} loading="lazy" />
                    </div>
                    <div
                        className="relative lg:absolute mt-4 lg:mt-0 top-0 lg:top-[124px] left-0 lg:left-[531px] w-full lg:w-[239px] h-[27px] flex items-center justify-center font-['Poppins',sans-serif] font-medium text-[16px] lg:text-[18px] leading-none mb-10 lg:mb-0"
                        style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #D8E3FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                        Projects built with BuilderX
                    </div>

                    <div className="relative lg:absolute top-0 lg:top-[124px] left-0 lg:left-[42px] right-0 lg:right-[42px] flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-[32px] px-4 lg:px-0">
                        {[0, 1, 2].map((col) => (
                            <div key={col} className={`flex flex-col w-full max-w-[384px] mx-auto lg:mx-0 ${col === 1 ? 'gap-0 hidden lg:flex' : 'gap-6 lg:gap-[42px]'}`}>
                                {[projects[col % 3], projects[(col + 1) % 3], projects[(col + 2) % 3]].map((p, i) => (
                                    <div key={`${col}-${i}`} className={col === 1 ? (i === 0 ? 'mb-[35px]' : i === 1 ? 'mb-[42px]' : '') : ''}>
                                        <ProjectCardComponent project={p} offset={col === 1 && i === 0 ? 79 : 0} isThird={col === 2 && i === 0} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="relative lg:absolute top-0 lg:top-[952px] left-0 right-0 flex justify-center mt-12 lg:mt-0">
                        <div className="group flex items-center cursor-pointer">
                            <button
                                className="relative z-[2] bg-[#3E38DE] text-white font-semibold text-[16px] px-10 h-[54px] rounded-full shadow-[0_8px_32px_rgba(62,56,222,0.22)] transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_12px_40px_rgba(62,56,222,0.38)] group-hover:scale-[1.02] flex items-center justify-center antialiased"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                Start Building Real Projects
                            </button>
                            <div className="relative z-[1] -ml-[1px] bg-[#3E38DE] w-[54px] h-[54px] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(62,56,222,0.22)] transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ), []);

    {/* ── SKILL GAP SECTION ─────────────────────────────────────── */ }
    const skillGapSection = <SkillGapSection />;

    {/* ── CTA BANNER ────────────────────────────────────────────── */ }
    const ctaSection = useMemo(() => (
        <section className="w-full max-w-[1440px] mx-auto mt-10 sm:mt-16 lg:mt-24 py-6 sm:py-10 px-4 md:px-8 lg:px-[70px]" style={{ overflow: "visible" }}>
            <div className="relative mx-auto flex flex-col lg:block w-full max-w-[1296px] h-auto lg:h-[318px]" style={{ overflow: "visible" }}>
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/5">
                    <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #3E38E0 -10%, #121040 25%, #000000 35%)" }} />
                    <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/20 rounded-full z-10 hidden sm:block" />
                </div>

                <div className="relative lg:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-0 lg:px-[72px] gap-3 sm:gap-4 max-w-[850px]">
                    <h2 className="text-[#FFFFFF] font-semibold text-[20px] sm:text-[28px] lg:text-[32px] leading-[1.3] sm:leading-[48px] tracking-tight w-full">
                        Take First Step Towards Your AI Career Before <br /> It's Too Late
                    </h2>
                    <p className="text-[#C2C2C2] font-medium text-[14px] sm:text-[16px] leading-normal max-w-[650px]">
                        Join 12,700+ professionals who've accelerated their careers through mentor-led, job-focused AI upskilling.
                    </p>
                    <div className="mt-4 sm:mt-6">
                        <Link to="/sign-up">
                            <button className="w-[140px] sm:w-[174px] h-[42px] sm:h-[50px] text-white font-semibold bg-[#3E38E0]/10 border border-[#3E38E0] rounded-[9px] text-[14px] sm:text-[16px] cursor-pointer backdrop-blur-[100px] hover:bg-[#3E38E0]/20 transition-all duration-300">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block absolute right-0 bottom-0 top-[-80px] w-[600px] h-full z-20 pointer-events-none" style={{ overflow: "visible" }}>
                    <img
                        src={ASSETS.ctaperson}
                        alt="Student Success"
                        className="absolute right-[-20px] bottom-[-130px] h-[486px] w-auto object-contain z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </div>
        </section>
    ), []);


    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter',sans-serif] overflow-x-hidden">
            <SEO />
            <Helmet>
                <link rel="preload" as="image" href={ASSETS.heroImage} fetchPriority="high" />
                <link rel="preload" as="image" href={ASSETS.ctaperson} fetchPriority="high" />
                <link rel="preload" as="image" href="/assets/happystudent.png" fetchPriority="high" />
            </Helmet>
            {heroSection}
            {alumniSection}
            {domainSection}
            {testimonialSection}
            <OfflineExperience />
            {buildrxSection}
            {skillGapSection}

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <FAQSection />

            {ctaSection}
        </div>
    );
});

export default HomePage;
