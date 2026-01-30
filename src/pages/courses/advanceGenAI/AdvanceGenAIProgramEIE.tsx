"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../context/UserContext';

declare global {
    interface Window {
        Razorpay: any;
    }
}



const SECTIONS = [
    { id: "why-this-program", label: "Why This Program" },
    { id: "curriculum", label: "Learning Journey" },
    { id: "tools", label: "Tools & Agent Stack" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Pricing" },
];

const CURRICULUM = [
    {
        module: "1",
        topics: ["Foundations of Agentic AI"],
        goal: "Understand how AI agents work—reasoning, planning, memory, tools, and feedback loops.",
        skills: ["Reasoning Models", "Planning Loops", "Basic Tool Integration"],
        outcome: "Core understanding of autonomous agent design."
    },
    {
        module: "2",
        topics: ["Data, Context & Memory for AI Agents"],
        goal: "Design agents that use structured data, retrieval, and long-term memory effectively.",
        skills: ["Vector Databases", "Knowledge Graphs", "Context Management"],
        outcome: "Ability to build agents with persistent memory."
    },
    {
        module: "3",
        topics: ["Product Analytics & Decision-Making Agents"],
        goal: "Build agents that analyze user behavior, generate insights, and support product decisions.",
        skills: ["Agentic Analytics", "Data Reasoning", "Automated Insights"],
        outcome: "Exclusive skills in building decision-making agents."
    },
    {
        module: "4",
        topics: ["AI Tools, Automation & Multi-Agent Systems"],
        goal: "Create autonomous workflows and multi-agent architectures for real-world use cases.",
        skills: ["CrewAI / LangChain / LangGraph", "Workflow Orchestration", "Agent Collaboration"],
        outcome: "Production-ready multi-agent system builder."
    }
];

const TOOLS = [
    { name: "Make", description: "Workflow automation for AI agents", image: "/assets/dmAITools/make.webp" },
    { name: "Simplified", description: "Agent-powered marketing & design", image: "/assets/dmAITools/canvaai.webp" },
    { name: "Claude", description: "Advanced reasoning for AI agents", image: "/redesign/ai-dm/claude.png" },
    { name: "ChatGPT", description: "Leading conversational AI model", image: "/redesign/advance-gen-ai/chatgpt.png" },
    { name: "CrewAI", description: "Multi-agent framework", image: "/redesign/advance-gen-ai/crewai%201.png" },
    { name: "n8n", description: "Self-hosted automation platform", image: "/redesign/ai-dm/n8n.png" },
];

const MENTORS = [
    { name: "Kumar Savino", role: "Associate Director", company: "Walmart", image: "/assets/mentor/kumar.webp", bio: "Enterprise AI & Intelligent Systems" },
    { name: "Ravi Ahlawat", role: "Senior Data Scientist", company: "Paytm", image: "/assets/mentor/ravi.webp", bio: "Agentic Analytics & AI Automation" },
    { name: "Chloe Thomas", role: "Senior AI Engineer", company: "Google", image: "/assets/mentor/ankita.webp", bio: "LLMs, Multi-Agent Systems & Production AI" },
];

const AccordionItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-[#3B82F6] bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full uppercase tracking-widest">
                            MODULE {item.module}
                        </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.topics.join(" & ")}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#3B82F6] text-white rotate-180' : 'bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-[#3B82F6] hover:text-white'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717] border-t border-gray-50 dark:border-[#848484]/30">
                            <p className="text-base text-gray-700 dark:text-gray-200 mb-6 font-medium leading-relaxed">
                                {item.goal}
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-bold mb-3 text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">What you'll learn:</p>
                                    <ul className="space-y-2">
                                        {item.skills.map((skill: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30 self-start">
                                    <p className="text-sm font-bold text-green-700 dark:text-green-400 mb-1">Key Outcome:</p>
                                    <p className="text-sm text-green-800 dark:text-green-300">{item.outcome}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AdvanceGenAIProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useUser();

    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Using dummy IDs for now or mapping based on constants if available
    const coursePrice = { amount: 32499, regularPlus: 42499 };


    const handleBuyCourse = async (_amount: number) => {
        if (!isAuthenticated) {
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        // Enrollment handling
        toast.error("Enrollment for this advanced program will be open soon!");
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            if (containerRef.current && sidebarRef.current) {
                const containerTop = containerRef.current.offsetTop;
                const containerBottom = containerTop + containerRef.current.offsetHeight;
                const sidebarHeight = sidebarRef.current.offsetHeight;
                const shouldStartFixed = window.scrollY + window.innerHeight / 2 > containerTop + sidebarHeight / 2;
                const shouldStopFixed = window.scrollY + window.innerHeight / 2 + sidebarHeight / 2 > containerBottom;
                setIsFixed(shouldStartFixed && !shouldStopFixed);
                if (!isFixed) setSidebarWidth(sidebarRef.current.offsetWidth);
            }
            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => setSidebarWidth(sidebarRef.current?.offsetWidth || 0));
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFixed]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    };

    return (
        <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4" style={{ width: sidebarWidth }} />}

                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 self-start transition-all duration-200 ${isFixed ? 'fixed top-1/2 -translate-y-1/2 z-10' : ''}`}
                    style={isFixed ? { width: sidebarWidth } : {}}
                >
                    <div className="relative">
                        <img src="/redesign/advance-gen-ai/astroid.webp" alt="ai" className="absolute -top-16 left-0 opacity-40 animate-float" />
                        <h2 className="text-3xl font-serif font-bold mb-10 leading-tight">
                            Build AI Agents. <br /><span className="italic font-light">Not Just AI Skills.</span>
                        </h2>
                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30 transition-colors duration-300">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block pl-4 py-1 text-left text-sm transition-all duration-300 w-full relative group ${activeSection === section.id ? "border-l-2 border-[#3B82F6] -ml-0.5 text-[#3B82F6] font-bold" : "text-gray-500 hover:text-gray-900"}`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-32">
                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="text-3xl font-serif font-bold mb-8 italic text-[#3B82F6]">An AI Agents Program Built for the Real World</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 font-light">
                            This is not a generic AI course. AcceleratorX is designed to teach you how AI agents are actually built and deployed in production. You’ll go beyond prompts and learn how to create autonomous, tool-using agents and multi-agent systems.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Autonomous agents with memory and goals",
                                "Tool-using agents that take real actions",
                                "Multi-agent systems that collaborate",
                                "AI workflows that replace manual processes",
                                "Agent design patterns used by AI startups",
                                "LLM orchestration and reasoning flows",
                                "Agent safety, reliability, and evaluation",
                                "Deploying agents into real products"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 dark:bg-[#171717] p-5 rounded-xl border border-gray-100 dark:border-white/5 group hover:border-[#3B82F6]/30 transition-all">
                                    <div className="w-6 h-6 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Learning Journey – Curriculum</h3>
                        <div className="space-y-4">
                            {CURRICULUM.map((item, idx) => <AccordionItem key={idx} item={item} />)}
                        </div>
                        <div className="mt-12 flex justify-center">
                            <button className="px-10 py-4 bg-[#FFC107] hover:bg-yellow-500 text-black font-extrabold rounded-full shadow-xl transition-all flex items-center gap-3">
                                Download Agentic AI Roadmap <ChevronDown size={20} />
                            </button>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">AI Agent Tools You’ll Master</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {TOOLS.map((tool, idx) => (
                                <div key={idx} className="bg-white dark:bg-[#171717] border flex flex-col justify-center items-center border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="p-3 inline-block mb-4 transition-colors duration-300">
                                        <img src={tool.image} alt={tool.name} className="w-8 h-8 object-contain" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300 text-center">{tool.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 text-center">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Top AI Teams</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {MENTORS.map((m, i) => (
                                <div key={i} className="bg-gray-50 dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300">
                                    <div className="aspect-square relative overflow-hidden">
                                        <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{m.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{m.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Industry-Recognized Certification</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-4 transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img src="/redesign/advance-gen-ai/ADV-GEN-AI.webp" alt="Certification" className="w-full h-auto rounded-md shadow-xl transition-colors duration-300" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Nano-Degree in Agentic AI & Intelligent Systems</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">Prove your ability to design and deploy autonomous AI agents. Stand out with a credential that signals real agent-building expertise.</p>
                                <ul className="space-y-3">
                                    {["Industry-recognized Agentic AI Nano-Degree", "Verifiable digital credential", "Portfolio of deployed AI agents"].map((f, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#3B82F6] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                                <Check size={10} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="career" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Careers Powered by AI Agents</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "AI Agent Engineer", desc: "Build autonomous agents and intelligent systems" },
                                { title: "AI Automation Specialist", desc: "Replace manual workflows with agent-based systems" },
                                { title: "AI Product Analyst", desc: "Design agents that drive insights and decisions" },
                                { title: "AI Consultant & Strategist", desc: "Help companies adopt agentic AI at scale" }
                            ].map((c, i) => (
                                <div key={i} className="bg-white dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white w-2/3 transition-colors duration-300">
                                            {c.title}
                                        </h4>
                                        <span className="bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-colors duration-300">₹12L – ₹25L+</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif font-bold mb-4">Invest in Your Agentic AI Career</h3>
                            <p className="text-gray-500 dark:text-gray-400">Master the future of automation with our expert-led program.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                            {[
                                { name: "Regular", price: coursePrice.amount, features: ["10-week agentic AI program", "Hands-on AI agent projects", "Industry certification", "Mentorship", "Interview prep"], highlight: false },
                                { name: "Regular+", price: coursePrice.regularPlus, features: ["Everything in Regular", "Advanced multi-agent projects", "Live mentor-led agent labs", "AI career roadmap", "Priority hiring"], highlight: true },
                            ].map((p, i) => (
                                <div key={i} className={`bg-blue-50/50 dark:bg-[#171717] border ${p.highlight ? 'border-[#3B82F6] shadow-md ring-1 ring-[#3B82F6]' : 'border-blue-100 dark:border-[#848484]/30'} rounded-2xl p-8 w-full text-center hover:shadow-lg transition-all duration-300 relative`}>
                                    {p.highlight && <div className="absolute top-0 right-0 bg-[#3B82F6] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">RECOMMENDED</div>}
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{p.name}</h4>
                                    <div className="mb-2">
                                        <span className="text-3xl font-bold text-[#3B82F6] transition-colors duration-300">₹{p.price.toLocaleString()}</span>
                                        <span className="text-gray-400 dark:text-gray-500 text-xs ml-1 transition-colors duration-300">+ GST</span>
                                    </div>
                                    <ul className="text-left space-y-3 my-8 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                        {p.features.map((f, fi) => (
                                            <li key={fi} className="flex gap-2"><Check size={16} className="text-[#3B82F6] flex-shrink-0 transition-colors duration-300" /><span>{f}</span></li>
                                        ))}
                                    </ul>
                                    <button onClick={() => handleBuyCourse(p.price)} className="w-full py-3 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">Apply Now</button>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
