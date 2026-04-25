import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
import OfflineExperience from "../../../components/landing-page/OfflineExperience";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/seo/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Asset URLs ────────────────────────────────────────────────────────
const ASSETS = {
    heroImage: "/mainhero.png",
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
        quote: "Built Rasa AI to simplify personalized nutrition turning complex meal planning into an intelligent, adaptive experience.",
        avatar: "/assets/testimonials/Kamayani Chaliki.png",
        color: "blue",
    },
    {
        name: "Dhruv Dave",
        role: "Prompt Engineer at Alight Technologies",
        quote: "Understood how AI systems actually work from agents and workflows to production-ready builds.",
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
        quote: "Built ContextForge a web app that transforms average prompts into high-performing, context-rich instructions in seconds.",
        avatar: "/assets/testimonials/Sourabh Kalra.png",
        color: "blue",
    },
    {
        name: "Srikant Pandey",
        role: "AI QA Engineering Lead at TO THE NEW",
        quote: "Built Rasa AI to simplify personalized nutrition turning complex meal planning into an intelligent, adaptive experience.",
        avatar: "/assets/testimonials/Srikant Pandey.png",
        color: "blue",
    },
    {
        name: "Nikhil D",
        role: "Associate PM",
        quote: "From idea to interface shipped my first product and applied product principles in real time.",
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
    {
        name: "Abrar Shaikh",
        role: "Payroll Specialist @ UKG",
        quote: "Experience over 4 years spread across service outsourcing operations & international one call resolution.",
        avatar: "/assets/testimonials/abrarshaik.png",
        color: "orange",
    },
    {
        name: "Raghul Balaji",
        role: "Content Developer @ Ments",
        quote: "From idea to interface delivered my first Content and applied on products in real time.",
        avatar: "/assets/testimonials/raghubalaji.png",
        color: "teal",
    },
    {
        name: "Arun Karthik M B",
        role: "Digital Marketing Intern @ VMax Wellness",
        quote: "I enjoy analyzing markets, understanding consumer behavior, and transforming insights into their marketing strategies",
        avatar: "/assets/testimonials/arunkartik.png",
        color: "teal",
    },
    {
        name: "Manal",
        role: "Assistant Manager PD @ Motilal Oswal Financial Services Ltd",
        quote: "I've crafted over 150+ projects (think Mobile Apps, Web Applications, Ecommerce, Games, Browser Extensions, TV Applications, Landing Pages the whole shebang)",
        avatar: "/assets/testimonials/manal.png",
        color: "teal",
    },
    {
        name: "Riya Jain",
        role: "Sales Analyst @ manakmeva",
        quote: "I enjoy transforming raw data into clear visualizations and actionable insights that support better business decisions.",
        avatar: "/assets/testimonials/riyajain.png",
        color: "blue",
    },
    {
        name: "Taniya P",
        role: "Associate Product Manager @ VLCC",
        quote: "Learning has never been a checkbox; it's a constant pursuit. And growth, for me, has never been linear - it had its own series of explorations.",
        avatar: "/assets/testimonials/taniyap.png",
        color: "blue",
    },
    {
        name: "Imran Baiq",
        role: "Co-founder | Product & Growth @ Logisrch",
        quote: "I help startups and medium-sized businesses build, launch, and scale.",
        avatar: "/assets/testimonials/imranbaig.png",
        color: "blue",
    },
    {
        name: "Harshitha SR",
        role: "Software Engineering Trainee @ Excelsoft Technologies",
        quote: "I started my career as a Software Engineer. After a long break, I came back not to catch up, but to create what the future will run on.",
        avatar: "/assets/testimonials/harshitasr.png",
        color: "blue",
    },
];

const projects = [
    {
        title: "Omni-Channel Social Media Agent",
        holder: "Project Holder: Siddiq Ahmed",
        description: "It converts content from a single URL into optimized social media posts",
        tags: ["Next.js", "Docker"],
        holderColor: "green",
    },
    {
        title: "Classmate.io",
        holder: "project holder : Biswajit Pradhan",
        description: "A comprehensive product build for Early age students, professionals and aspirants",
        tags: ["Front end", "Backend"],
        holderColor: "blue",
    },
    {
        title: "Getyourcard",
        holder: "project holder : Krusnansh Gupta",
        description: "Get Your Card is a smart one-click bridge that connects people",
        tags: ["Cursor", "React"],
        holderColor: "orange",
    },
    {
        title: "Edubudy GPT Bot",
        holder: "project holder : Amit Thakkar",
        description: "It helps you solve math problems by breaking them down into simple, easy-to-understand steps",
        tags: ["Web App", "Security"],
        holderColor: "orange",
    },
    {
        title: "Netflix Content & Analysis Dashboard",
        holder: "Project Holder: Bhagyashree Kachhawaha",
        description: "Built an interactive Power BI dashboard to analyze Netflix movies and series",
        tags: ["AI", "Web App"],
        holderColor: "green",
    },
    {
        title: "ClearMind AI",
        holder: "project holder : Satyansh",
        description: "A proactive healthcare solution to bridge the gap between home wellness and clinical neurology",
        tags: ["SaaS", "Data"],
        holderColor: "blue",
    },
    {
        title: "Trust Browser",
        holder: "project holder : Agam Bansal",
        description: "A product concept designed to make credibility a first-class part of the browsing experience",
        tags: ["Credibility System Design"],
        holderColor: "blue",
    },
    {
        title: "Analytics Dashboard",
        holder: "project holder : Satyendra Mourya",
        description: "Comprehensive analysis of Washington State EV population data",
        tags: ["Dashboard"],
        holderColor: "orange",
    },
    {
        title: "StockRadar - Investment made easy",
        holder: "Project Holder: Jagannath Panigrahy",
        description: "AI-powered stock research and education platform targeting Indian retail investors",
        tags: ["Vanilla JS", "MACD"],
        holderColor: "green",
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
    { label: "AI Digital Marketing", top: "37%", left: "8%", mobileTop: "38%", mobileLeft: "5%", icon: "/assets/aidigitalmarketing.png", width: 221, path: "/courses/ai-digital-marketing" },
    { label: "Generative AI", top: "45%", left: "68%", mobileTop: "45%", mobileLeft: "55%", icon: "/assets/generativeai.png", width: 180, path: "/courses/generative-ai" },
    { label: "AI Data Analytics", top: "54%", left: "4%", mobileTop: "54%", mobileLeft: "2%", icon: "/assets/aidataanalystics.png", width: 204, path: "/courses/data-analytics" },
    { label: "AI Data Science", top: "68%", left: "67%", mobileTop: "68%", mobileLeft: "52%", icon: "/assets/aidatascience.png", width: 195, path: "/courses/data-science" },
    { label: "AI Product Management", top: "80%", left: "2%", mobileTop: "80%", mobileLeft: "0%", icon: "/assets/aiproductmanagemnt.png", width: 252, path: "/courses/product-management" },
    { label: "Advanced Generative AI", top: "86%", left: "57%", mobileTop: "86%", mobileLeft: "45%", icon: "/assets/advancedgenerativeai.png", width: 252, path: "/courses/advance-generative-ai" },
];

const companyLogos = [
    { name: "Healthcare", url: "/assets/homepage_companies/Healthcare_1.png", height: 40 },
    { name: "Resolute AI", url: "/assets/homepage_companies/resolute_AI_1.png", height: 40 },
    { name: "Logo 1", url: "/assets/homepage_companies/image_234_1.png", height: 40 },
    { name: "Logo 2", url: "/assets/homepage_companies/image_235_1.png", height: 40 },
    { name: "Logo 3", url: "/assets/homepage_companies/image_236_1.png", height: 40 },
    { name: "Logo 4", url: "/assets/homepage_companies/image_237_1.png", height: 40 },
    { name: "Logo 5", url: "/assets/homepage_companies/image_238_1.png", height: 40 },
    { name: "Logo 6", url: "/assets/homepage_companies/image_239_1.png", height: 40 },
    { name: "Logo 7", url: "/assets/homepage_companies/image_240_1.png", height: 40 },
    { name: "Logo 8", url: "/assets/homepage_companies/image_241_1.png", height: 40 },
    { name: "Logo 9", url: "/assets/homepage_companies/image_242_1.png", height: 40 },
    { name: "Logo 10", url: "/assets/homepage_companies/image_244_1.png", height: 40 },
    { name: "Logo 11", url: "/assets/homepage_companies/image_245.png", height: 40 },
    { name: "Logo 12", url: "/assets/homepage_companies/image-removebg-preview_(1)_1.png", height: 40 },
    { name: "Logo 13", url: "/assets/homepage_companies/image-removebg-preview_(2)_1.png", height: 40 },
    { name: "Logo 14", url: "/assets/homepage_companies/image-removebg-preview_(3)_1.png", height: 40 },
    { name: "Logo 15", url: "/assets/homepage_companies/image-removebg-preview_(4)_1.png", height: 40 },
    { name: "Logo 16", url: "/assets/homepage_companies/image-removebg-preview_(5)_1.png", height: 40 },
    { name: "Logo 17", url: "/assets/homepage_companies/image-removebg-preview_(6)_1.png", height: 40 },
    { name: "Logo 18", url: "/assets/homepage_companies/image-removebg-preview_(7)_1.png", height: 40 },
    { name: "Logo 19", url: "/assets/homepage_companies/image-removebg-preview_(8)_1.png", height: 40 },
    { name: "Logo 20", url: "/assets/homepage_companies/image-removebg-preview_(9)_2.png", height: 40 },
];

// ── Components ─────────────────────────────────────────────────────────

const ProjectCardComponent = memo(function ProjectCardComponent({ project, offset = 0 }: { project: any; offset?: number }) {
    return (
        <div
            className="group relative bg-[#0a0a0a] rounded-[16px] p-5 md:p-[24px] flex flex-col justify-between w-full max-w-[384px] flex-shrink-0 transition-all duration-500 overflow-hidden mx-auto shadow-[0_0_20px_rgba(62,56,222,0.15)] hover:shadow-[0_0_35px_rgba(62,56,222,0.3)]"
            style={{
                marginTop: `${offset}px`,
                height: 'auto',
                minHeight: '200px'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2f6bff]/5 via-[#0A0A0A] to-[#0A0A0A] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

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

                <p className="text-[#999] text-[14px] leading-[23px] mb-6 md:mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 gap-4">
                    <div className="flex flex-wrap gap-2 min-w-0">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="bg-[#1c1c1c] text-[#cfcfcf] text-[11px] font-medium px-3 py-1 rounded-full border border-white/5 uppercase tracking-wide truncate">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a
                        href="https://buildrx.org/projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/10 rounded-lg px-4 md:px-5 py-2 md:py-2.5 text-white text-[12px] font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300 whitespace-nowrap flex-shrink-0"
                    >
                        View Project <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
});

// ── Components: FAQ Section ────────────────────────────────────────────

const FAQSection = memo(function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number>(-1);
    const [visibleCount, setVisibleCount] = useState(5);

    const toggleFAQ = useCallback((idx: number) => {
        setOpenFAQ(prev => (prev === idx ? -1 : idx));
    }, []);

    const showMore = useCallback(() => {
        setVisibleCount(prev => Math.min(prev + 5, faqItems.length));
    }, []);

    const showLess = useCallback(() => {
        setVisibleCount(5);
    }, []);

    const visibleFAQs = faqItems.slice(0, visibleCount);
    const hasMore = visibleCount < faqItems.length;

    return (
        <section className="max-w-[900px] mx-auto px-4 pt-16 lg:pt-24 pb-0">
            <h2 className="text-[32px] font-medium text-center mb-10 lg:mb-16">FAQs</h2>
            <div className="space-y-4">
                {visibleFAQs.map((item, idx) => (
                    <div key={idx} className="bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#3e38e0]/40 transition-all">
                        <button className="w-full p-6 text-left flex justify-between items-center" onClick={() => toggleFAQ(idx)}>
                            <span className="font-medium text-sm md:text-base">{item.question}</span>
                            <span className={`text-2xl transition-transform ${openFAQ === idx ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        {openFAQ === idx && (
                            <div className="px-6 pb-6 text-[#C2C2C2] text-sm md:text-base leading-relaxed">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-end gap-6 px-2">
                {hasMore && (
                    <button onClick={showMore} className="text-white font-bold flex items-center gap-2 hover:opacity-80 transition-all text-sm md:text-base">
                        View more <span>→</span>
                    </button>
                )}
                {visibleCount > 5 && (
                    <button onClick={showLess} className="text-white font-bold flex items-center gap-2 hover:opacity-80 transition-all text-sm md:text-base">
                        View less <span>↑</span>
                    </button>
                )}
            </div>
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
        <section className="max-w-[1440px] mx-auto px-4 pt-16 lg:pt-24 pb-0 bg-[#0A0A0A]">
            <div className="text-center mb-10 lg:mb-16 px-4">
                <h2 className="text-4xl md:text-[32px] font-medium mb-6 text-white">The AI Skill Gap is Growing Faster</h2>
                <p className="text-[#C2C2C2] text-[16px] md:text-[18px] max-w-4xl mx-auto leading-relaxed mb-12">
                    If you’re not learning AI, data analytics, products, or automations, you’re falling behind in today’s job market.
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
                    <div className="absolute bottom-0 left-[35px] sm:left-[40px] lg:left-[50px] right-0 flex justify-between px-0 text-[10px] lg:text-[11px] font-medium text-[#7A7A7A] transform translate-y-1/2">
                        <span className="-ml-2">2026</span>
                        <span>2028</span>
                        <span>2030</span>
                        <span>2032</span>
                        <span className="-mr-2">2035</span>
                    </div>

                    {/* Chart Vectors */}
                    <svg key={activeBadge} className="absolute top-[60px] bottom-8 left-[35px] sm:left-[40px] lg:left-[50px] right-2 sm:right-4 w-[calc(100%-45px)] sm:w-[calc(100%-55px)] h-[calc(100%-60px-32px)] overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">

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

function HomePage() {
    const { setSelectedCourse } = useCourseContext();


    useEffect(() => {
        setSelectedCourse(null);
    }, [setSelectedCourse]);

    // ── HERO SECTION ─────────────────────────────────────────────
    const heroSection = (
        <section className="relative min-h-[600px] lg:min-h-[850px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center pt-[80px]">
            {/* Badge styles are now consolidated in index.css */}
            <div className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-[70px] z-10 gap-10 lg:gap-0">
                <div
                    className="absolute left-[10%] lg:left-[70px] z-0 pointer-events-none"
                    style={{
                        width: '625.05px',
                        height: '625.05px',
                        top: '80px',
                        opacity: 0.3
                    }}
                >
                    <img
                        src="/assets/grid.png"
                        alt=""
                        className="w-full h-full object-contain"
                        style={{ filter: 'invert(1)' }}
                        loading="eager"
                    />
                </div>

                <div className="relative z-10 w-full lg:w-[612px] flex flex-col gap-6 sm:gap-8 mt-12 md:mt-[100px] lg:mt-[180px] text-center lg:text-left">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="font-['Inter',sans-serif] font-medium text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-[612px] text-white mx-auto lg:mx-0">
                            Stop Using AI. <br />
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#DFDFDF_0%,#384EE0_54.33%)]">
                                Start Building
                            </span> With It.
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] text-[#94a3b8] font-normal max-w-[569px] opacity-80 mx-auto lg:mx-0">
                            AI Courses in India For Working Professionals, Freshers and Business Owners. Focusing on project and real career outcomes.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-14 pt-32 lg:pt-48">
                        <div
                            className="flex items-center group cursor-pointer transition-all duration-300 transform hover:scale-[1.02]"
                            onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <button className="h-[48px] sm:h-[54px] px-5 sm:px-8 bg-[#3E38DE] text-white text-[14px] sm:text-[16px] font-bold rounded-full shadow-[0_8px_32px_rgba(62,56,222,0.35)] z-20 group-hover:brightness-110 whitespace-nowrap">
                                Explore Our Programs
                            </button>
                            <div className="w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] bg-[#3E38DE] text-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(62,56,222,0.35)] -ml-[1px] z-10 group-hover:brightness-110">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex-1 h-auto relative flex justify-center lg:justify-end">
                    <div
                        className="relative w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[649px] lg:w-[649px] aspect-[649/683] lg:h-[683px] bg-gradient-to-b from-[#141414] via-[#1a1c4e] to-[#25287e] rounded-[32px] sm:rounded-[48px] border-t border-t-black border-b border-b-white/5 border-x-0 overflow-hidden mt-6 lg:mt-0 shadow-2xl"
                    >
                        <img
                            src={ASSETS.heroImage}
                            alt="AI Student"
                            className="absolute bottom-[-28px] left-[55%] -translate-x-1/2 h-full w-auto object-contain scale-[1.05] z-10"
                            draggable={false}
                            loading="eager"
                            fetchpriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent z-20 pointer-events-none" />

                        {/* Top Left Asset: Happy Students Card */}
                        <div className="absolute top-[4%] sm:top-[6%] left-[4%] sm:left-[6%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <img src="/assets/happystudents.png" alt="Happy Students" className="w-[110px] sm:w-[140px] md:w-[165px] lg:w-[190px] h-auto object-contain rounded-[16px]" draggable={false} />
                        </div>

                        {/* Top Right Asset: IBM Collaboration */}
                        <div className="absolute top-[4%] sm:top-[6%] right-[2%] sm:right-[4%] z-30 flex flex-col items-end gap-1">
                            <img src="/assets/ibm.png" alt="IBM" className="h-[35px] sm:h-[48px] lg:h-[64px] brightness-0 invert opacity-90" draggable={false} />
                        </div>

                        {floatingBadges.map((badge, idx) => (
                            <Link
                                key={idx}
                                to={badge.path}
                                className="absolute z-20 bg-white flex items-center p-2.5 px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-white/95 active:scale-95 group/badge hero-badge-mobile-fix"
                                style={{
                                    top: badge.top,
                                    left: badge.left,
                                    "--m-top": (badge as any).mobileTop,
                                    "--m-left": (badge as any).mobileLeft
                                } as React.CSSProperties}
                            >
                                <div className="mr-2.5 flex items-center justify-center badge-icon-container">
                                    <img src={badge.icon} className="w-6 h-6 object-contain" draggable={false} />
                                </div>
                                <span className="text-[14px] font-bold text-[#161616] whitespace-nowrap">{badge.label}</span>
                                <div className="ml-2.5 w-4 h-4 rounded-full bg-[#3E38DE]/10 flex items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-opacity">
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
    );

    // ── ALUMNI LOGOS ────────────────────────────────────────────
    const alumniSection = useMemo(() => (
        <section className="max-w-[1440px] mx-auto px-4 pt-16 lg:pt-24 pb-0 overflow-hidden">
            {/* Scroll animation now in index.css */}
            <p className="text-center text-[#F5F7FF] text-[32px] md:text-[32px] font-medium font-inter mb-4 leading-none tracking-normal">
                Our Alumni Are Working Across 1700+ Top MNCs
            </p>
            <p className="text-center text-[#C2C2C2] text-[16px] font-medium font-inter mb-12 max-w-[950px] mx-auto leading-none tracking-normal">
                Get hired in AI, product, marketing, and data roles. AcceleratorX AI courses are trusted by 1700+ companies globally.
            </p>

            <div className="relative overflow-hidden w-full min-h-[40px] flex items-center">
                <div className="flex w-max gap-16 animate-scroll whitespace-nowrap">
                    {[...companyLogos, ...companyLogos].map((logo, idx) => (
                        <img key={idx} src={logo.url} alt={logo.name} style={{ height: `${logo.height}px` }} className="cursor-pointer inline-block mx-1 object-contain" draggable={false} loading="lazy" />
                    ))}
                </div>
            </div>
        </section>
    ), []);

    // ── DOMAIN CARDS ──────────────────────────────────────────────
    const domainCards = [
        {
            title: "Generative AI & AI Agents",
            img: "/assets/generativeai&aiagents.png",
            path: "/courses/generative-ai",
            description: "For Graduates, Professionals, Freelancers, And Students Across Domains Who Want To Use AI In Daily Work. No Coding Required. Focus On Tools And Real-World Applications To Boost Productivity.",
        },
        {
            title: "AI Product Management",
            img: "/assets/aiproductmanagement.png",
            path: "/courses/product-management",
            description: "For Aspiring And Existing Product Managers, Analysts, And Founders Entering AI. Covers How To Build, Launch, And Scale AI-Powered Products From Idea To Execution.",
        },
        {
            title: "Advanced AI & AI Agents",
            img: "/assets/advancegenai_v2.png",
            path: "/courses/advance-generative-ai",
            description: "For Developers, Tech Enthusiasts, And Builders With Basic AI Knowledge Looking To Go Deeper. Focuses On Building AI Systems, Agents, And Automation Workflows (Coding Preferred).",
        },
        {
            title: "AI Data Science",
            img: "/assets/aidatasciencecard.png",
            path: "/courses/data-science",
            description: "For Engineers, Developers, And Analysts Ready To Move Into Machine Learning. Focuses On Building Predictive Models And Working With Advanced Data Techniques.",
        },
        {
            title: "AI Data Analytics",
            img: "/assets/aidataanalyticscard.png",
            path: "/courses/data-analytics",
            description: "For Beginners, Freshers, And Non-Tech Professionals Working With Data. Learn To Analyze Data, Build Reports, And Generate Insights Without Heavy Coding.",
        },
        {
            title: "AI Digital Marketing",
            img: "/assets/aidigitalmarketingcard.png",
            path: "/courses/ai-digital-marketing",
            description: "For Marketers, Creators, Freelancers, And Business Owners Aiming To Grow Using AI. Focused On AI-Driven Ads, Content Creation, And Marketing Automation.",
        },
    ];


    const domainSection = (
        <section id="programs-section" className="max-w-[1440px] mx-auto mt-14 px-4 lg:px-[70px] pt-16 lg:pt-24 pb-0">
            <style>{`
                .mobile-domain-scroll {
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }
                .mobile-domain-scroll::-webkit-scrollbar { display: none; }
                .mobile-domain-card {
                    scroll-snap-align: center;
                }
            `}</style>

            <h2 className="text-center text-white text-[32px] font-medium font-inter leading-none tracking-normal mb-4">
                Choose Your AI Career Path and Build Your AI Edge
            </h2>

            <p className="text-center text-[#C2C2C2] text-[16px] font-medium font-inter leading-none tracking-normal mb-10 lg:mb-16 max-w-[896px] mx-auto">
                From startups to global companies like Microsoft, Deloitte, Paytm, and many more. Our learners are applying AI, product, data analytics, and automation skills in high-paying AI roles.
            </p>

            {/* ── MOBILE: Horizontal swipeable carousel ── */}
            <div className="block sm:hidden">
                <div className="mobile-domain-scroll flex gap-4 overflow-x-auto pb-6 px-1">
                    {domainCards.map((card, idx) => (
                        <Link
                            key={idx}
                            to={card.path}
                            className="mobile-domain-card relative flex-shrink-0 w-[85vw] max-w-[340px] rounded-[20px] overflow-hidden border border-[#1a1a1a] block"
                            style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-[200px] overflow-hidden">
                                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" draggable={false} loading="lazy" />
                                <div className="absolute inset-x-0 bottom-0 h-[40px]" style={{ background: 'linear-gradient(to top, #0a0a0f, transparent)' }} />
                            </div>
                            {/* Always-visible content */}
                            <div className="bg-[#0a0a0f] px-5 py-4 flex flex-col gap-3">
                                <span className="inline-block self-start text-[9px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full" style={{ background: 'rgba(62,56,222,0.12)', color: '#a5b4fc', border: '1px solid rgba(62,56,222,0.25)' }}>WHO IS IT FOR?</span>
                                <p className="text-[13px] text-[#b0b0b0] leading-[20px] line-clamp-3">{card.description}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-white text-[12px] font-semibold px-4 h-[32px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3E38E0 0%, #5B54F0 100%)' }}>Read More</span>
                                    <span className="-ml-[2px] rounded-full w-[32px] h-[32px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3E38E0 0%, #5B54F0 100%)' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-2">
                    {domainCards.map((_, idx) => (<div key={idx} className="w-[6px] h-[6px] rounded-full bg-white/20" />))}
                </div>
            </div>

            {/* ── TABLET & DESKTOP: Clean hover grid ── */}
            <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {domainCards.map((card, idx) => (
                    <Link
                        key={idx}
                        to={card.path}
                        className="relative rounded-[24px] overflow-hidden border border-white/[0.08] cursor-pointer group block h-[260px] md:h-[300px] xl:h-[280px] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(62,56,222,0.3)]"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                    >
                        {/* Image */}
                        <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-15" draggable={false} loading="lazy" />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                        <div className="absolute inset-0 p-8 flex flex-col items-start justify-center text-left bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                            <p className="text-white font-bold text-[16px] md:text-[18px] uppercase tracking-[1px] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">WHO IS IT FOR?</p>
                            <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{card.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );

    // ── TESTIMONIALS ────────────────────────────────────────────
    const testimonialSection = useMemo(() => (
        <section className="relative w-full pt-16 lg:pt-24 pb-0 overflow-hidden bg-[#0A0A0A]">
            {/* Scroll-test animation now in index.css */}

            <div className="relative z-20 w-full overflow-hidden">
                <div className="text-center mb-10 lg:mb-16 px-4 md:px-8 lg:px-[70px]">
                    <h2 className="text-[32px] font-medium text-white mb-4 tracking-normal leading-[100%]">
                        2700+ Success Stories
                    </h2>
                    <div className="w-full flex justify-center">
                        <p className="text-[#C2C2C2] text-[16px] md:text-[18px] font-medium leading-relaxed mx-auto max-w-[1100px]">
                            Professionals like you are already making the shift. Hear directly from our learner who transitioned into an AI-led career
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col gap-8 w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-[255px] z-30 pointer-events-none hidden md:block"
                        style={{ background: 'linear-gradient(90deg, rgba(27, 31, 110, 0.5) 0%, rgba(10, 10, 10, 0) 100%)' }}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-[255px] z-30 pointer-events-none hidden md:block"
                        style={{ background: 'linear-gradient(270deg, rgba(27, 31, 110, 0.5) 0%, rgba(10, 10, 10, 0) 100%)' }}
                    />

                    <div className="relative w-full overflow-hidden pt-[48px] min-h-[350px]">
                        <div className="flex w-max gap-4 md:gap-6 animate-scroll-test pb-8 pt-2 items-stretch">
                            {[...testimonials.slice(0, 8), ...testimonials.slice(0, 8)].map((t, idx) => (
                                <div key={idx} className="group relative flex-shrink-0 w-[280px] md:w-[383px] h-auto min-h-[230px] md:min-h-[280px]">
                                    <div
                                        className="w-full h-full rounded-[12px] relative z-10 transition-all duration-300 ease-out hover:scale-[1.015] hover:-translate-y-1"
                                        style={{
                                            background: 'linear-gradient(180deg, #141414 0%, #0A0A0A 100%)',
                                            border: '1px solid rgba(47, 107, 255, 0.1)',
                                            boxShadow: '0px 1px 20px 0px rgba(47, 107, 255, 0.25)',
                                            padding: '57px 18px 24px 18px',
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

                    <div className="relative w-full overflow-hidden pt-[48px] min-h-[350px]">
                        <div
                            className="flex w-max gap-4 md:gap-6 animate-scroll-test pb-8 pt-2 items-stretch"
                            style={{ animationDirection: 'reverse', animationDuration: '25s' }}
                        >
                            {[...testimonials.slice(8, 16), ...testimonials.slice(8, 16)].map((t, idx) => (
                                <div key={idx} className="group relative flex-shrink-0 w-[280px] md:w-[383px] h-auto min-h-[230px] md:min-h-[280px]">
                                    <div
                                        className="w-full h-full rounded-[12px] relative z-10 transition-all duration-300 ease-out hover:scale-[1.015] hover:-translate-y-1"
                                        style={{
                                            background: 'linear-gradient(180deg, #141414 0%, #0A0A0A 100%)',
                                            border: '1px solid rgba(47, 107, 255, 0.1)',
                                            boxShadow: '0px 1px 20px 0px rgba(47, 107, 255, 0.25)',
                                            padding: '57px 18px 24px 18px',
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
                                        <p className="text-[13px] md:text-[16px] font-medium text-[#E5E5E5] leading-relaxed md:leading-[24px] text-left mt-3 md:mt-4 tracking-[0px] line-clamp-3">
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

    // ── BUILDRX PORTFOLIO ───────────────────────────────────────
    const buildrxSection = useMemo(() => (
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[70px] pt-16 lg:pt-24 pb-0 bg-[#0A0A0A]">
            <h2 className="text-center text-white text-[32px] font-medium font-inter leading-none tracking-normal mb-6">
                Build in Public. Get Hired.
            </h2>
            <p className="text-center text-[#C2C2C2] text-[16px] font-medium font-inter leading-none tracking-normal mb-12 max-w-[892px] mx-auto">
                Instead of just completing assignments, our learners build real-world work that demonstrates the ability to apply AI in business scenarios.
            </p>

            <div className="relative bg-[#0a0a0a] rounded-[20px] mt-10 border-0 overflow-hidden w-full lg:w-[1300px] h-auto lg:h-[1150px] mx-auto pb-16 lg:pb-0">
                {/* Top Left Shade */}
                <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#3E38DE] opacity-[0.18] blur-[120px] rounded-full pointer-events-none" />

                {/* Bottom Right Shade */}
                <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#3E38DE] opacity-[0.15] blur-[120px] rounded-full pointer-events-none" />

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
                                {[projects[col * 3], projects[col * 3 + 1], projects[col * 3 + 2]].map((p, i) => (
                                    <div key={`${col}-${i}`} className={col === 1 ? (i === 0 ? 'mb-[42px]' : i === 1 ? 'mb-[42px]' : '') : (i === 1 ? 'mt-[30px]' : '')}>
                                        <ProjectCardComponent project={p} offset={col === 1 && i === 0 ? 86 : 0} isThird={col === 2 && i === 0} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="relative lg:absolute top-0 lg:top-[1060px] left-0 right-0 flex justify-center mt-12 lg:mt-0">
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

    // ── CTA SECTION ──────────────────────────────────────────────
    const ctaSection = useMemo(() => (
        <section className="w-full max-w-[1440px] mx-auto mt-16 sm:mt-24 xl:mt-32 py-10 px-4 md:px-8 lg:px-[70px]" style={{ overflow: "visible" }}>
            <div className="relative mx-auto flex flex-col xl:block w-full max-w-[1296px] h-auto xl:h-[318px]" style={{ overflow: "visible" }}>
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/5">
                    <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #3E38DE -10%, #1a1a3e 25%, #000000 35%)" }} />
                    <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/40 rounded-full z-10 hidden sm:block" />
                </div>

                <div className="relative xl:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 xl:py-0 xl:px-[72px] gap-3 sm:gap-4 max-w-[750px]">
                    <h2 className="text-[#FFFFFF] font-semibold text-[22px] sm:text-[28px] xl:text-[32px] leading-[1.3] sm:leading-[48px] tracking-tight max-w-[697px]">
                        Take First Step Towards Your AI Career Before It’s Too Late
                    </h2>
                    <p className="text-[#C2C2C2] font-medium text-[16px] sm:text-[16px] leading-normal max-w-[640px]">
                        Join 12,700+ professionals who’ve accelerated their careers through mentor-led, job-focused AI upskilling
                    </p>
                    <div className="mt-4 sm:mt-6">
                        <Link to="/sign-up">
                            <button className="w-full sm:w-[350px] h-[52px] sm:h-[60px] text-white font-bold bg-[#3E38DE] rounded-[16px] text-[16px] sm:text-[18px] cursor-pointer hover:bg-[#3E38DE]/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_40px_rgba(62,56,222,0.4)]">
                                Start Your AI Career Journey
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="hidden xl:block absolute right-0 bottom-0 top-[-80px] w-[600px] h-full z-20 pointer-events-none" style={{ overflow: "visible" }}>
                    <img
                        src={ASSETS.ctaperson}
                        alt="Student Success"
                        className="absolute right-0 bottom-[-130px] h-[486px] w-auto object-contain z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        draggable={false}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    ), []);

    const skillGapSection = useMemo(() => (
        <SkillGapSection />
    ), []);

    return (
        <div className="bg-[#0A0A0A] text-white font-['Inter',sans-serif]">
            <SEO />
            <Helmet>
                <link rel="preload" as="image" href={ASSETS.heroImage} />
                <link rel="preload" as="image" href="/assets/happystudent.png" />
            </Helmet>
            {heroSection}
            {alumniSection}
            {domainSection}
            {testimonialSection}
            <OfflineExperience />
            {skillGapSection}
            {buildrxSection}

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <FAQSection />

            {ctaSection}
        </div>
    );
}

export default HomePage;
