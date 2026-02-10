"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Linkedin } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../../context/UserContext';
import { COURSE_IDS, COURSE_PRICES } from '../../../../utils/constants_price';
import { api } from '../../../../api';

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface Batch {
    Id: string;
    Batch: string;
    Course: string;
    StartDate: string;
    EndDate: string | null;
    IsFree: boolean;
}

const SECTIONS = [
    { id: "why-this-program", label: "Why this Program" },
    { id: "curriculum", label: "Learning Journey" },
    { id: "skillverse", label: "Skillverse" },
    { id: "tools", label: "Tools & DS Stack" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Invest in Your Career" },
];

const MENTORS = [
    { name: "Ravi Ahlawat", role: "Senior PM", company: "Paytm", image: "/redesign/data-science/mentors/Ravi Ahlawat.png", bio: "Production ML Systems", linkedin: "https://www.linkedin.com/in/raviahlawat09/" },
    { name: "Aakash Maurya", role: "Sr. ML Engineer", company: "Nagarro", image: "/redesign/data-science/mentors/Aakash Maurya.png", bio: "Deployment & MLOps Specialization", linkedin: "https://www.linkedin.com/in/aakash-maurya/" },
    { name: "Nitish Setty", role: "Analytics Lead", company: "DataFlow", image: "/redesign/data-science/mentors/Nitish Setty.png", bio: "Advanced Data Modeling", linkedin: "https://www.linkedin.com/in/nitish-setty/" },
    { name: "Shubham Swaraj", role: "BI Developer", company: "InsightTech", image: "/redesign/data-science/mentors/Shubham Swaraj.png", bio: "Business Intelligence Solutions", linkedin: "https://www.linkedin.com/in/shubham-swaraj/" },
    { name: "Himangi Sharma", role: "Senior AI Engineer", company: "Google", image: "/redesign/data-science/mentors/Himangi Sharma.png", bio: "AI Infrastructure & Scalability", linkedin: "https://www.linkedin.com/in/himangi-sharma" },
    { name: "Preeti Money", role: "Associate Director", company: "Walmart", image: "/redesign/data-science/mentors/Preeti Money.png", bio: "Enterprise ML & Scalable Analytics", linkedin: "https://www.linkedin.com/in/preeti-money/" },
];

const CURRICULUM = [
    {
        week: "Ph 1",
        topics: ["Analyst → Data Scientist Mindset"],
        goal: "Transition from basic analysis to structured data science problem framing.",
        skills: ["DS Problem Framing", "Advanced EDA", "Statistical Inference"],
        outcome: "Ability to map business goals to DS objectives."
    },
    {
        week: "Ph 2",
        topics: ["Core ML foundations"],
        goal: "Master the essentials of machine learning modeling.",
        skills: ["Regression", "Classification", "Decision Trees", "Ensemble Methods"],
        outcome: "Build and evaluate robust ML models from scratch."
    },
    {
        week: "Ph 3",
        topics: ["Advanced ML Techniques"],
        goal: "Deeper dive into complex patterns and unstructured data.",
        skills: ["Time Series Forecasting", "NLP Fundamentals", "Experiment Design"],
        outcome: "Handle real-world messy data and time-dependent trends."
    },
    {
        week: "Ph 4",
        topics: ["Generative AI & Agentic Data Science"],
        goal: "Stay ahead with the latest in GenAI and agentic workflows.",
        skills: ["LLM Embeddings", "Vector DBs", "Agentic Workflows for EDA"],
        outcome: "Automate complex DS tasks using autonomous agents."
    },
    {
        week: "Ph 5",
        topics: ["Deployment & MLOps"],
        goal: "Turn your notebooks into real, working production systems.",
        skills: ["Model Deployment", "Monitoring Drift", "Pipeline Orchestration"],
        outcome: "You graduate as a production-ready Data Scientist."
    }
];

const TOOLS = [
    {
        name: "Claude",
        category: "LLM & Research",
        image: "/redesign/data-science/tools/claude.png",
        description: "Advanced AI for content strategy, research, and copywriting."
    },
    {
        name: "n8n",
        category: "Workflows",
        image: "/redesign/data-science/tools/n8n.png",
        description: "Open-source workflow automation for marketing pipelines."
    },
    {
        name: "CrewAI",
        category: "AI Agents",
        image: "/redesign/data-science/tools/crewai.png",
        description: "Framework for orchestrating autonomous AI agents."
    },
    {
        name: "Jasper",
        category: "AI Copywriting",
        image: "/redesign/data-science/tools/jasper.png",
        description: "Enterprise-grade AI platform for marketing content."
    },
    {
        name: "CapCut",
        category: "Video Editing",
        image: "/redesign/data-science/tools/capcut.png",
        description: "Pro-level video editing and effects for social content."
    },
    {
        name: "Runway",
        category: "Video Generation",
        image: "/redesign/data-science/tools/runway.png",
        description: "Next-gen AI tools for creative video production."
    },
    {
        name: "Leonardo.ai",
        category: "Image Generation",
        image: "/redesign/data-science/tools/leonardo.png",
        description: "Full-stack AI image generation platform."
    },
    {
        name: "Ideogram",
        category: "AI Design",
        image: "/redesign/data-science/tools/ideogram.png",
        description: "Text-to-image AI focused on typography and design."
    },
    {
        name: "OpusClip",
        category: "Video Automation",
        image: "/redesign/data-science/tools/opusclip.png",
        description: "AI-powered tool for creating viral short-form clips."
    },
    {
        name: "Pika Labs",
        category: "Video Generation",
        image: "/redesign/data-science/tools/pika.png",
        description: "Idea-to-video platform for high-quality animation."
    },
    {
        name: "Stability AI",
        category: "Deep Learning",
        image: "/redesign/data-science/tools/stability.png",
        description: "Open-source foundational models for creative AI."
    }
];

const AccordionItem = ({ module }: { module: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-[#3B82F6] bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full uppercase tracking-widest">
                            {module.week}
                        </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{module.topics.join(" & ")}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#3B82F6] text-white rotate-180' : 'bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-[#3B82F6] hover:text-white'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="p-6 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717] border-t border-gray-50 dark:border-[#848484]/30">
                            <p className="text-base text-gray-700 dark:text-gray-200 mb-6 font-medium leading-relaxed">{module.goal}</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-bold mb-3 text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">What you'll learn:</p>
                                    <ul className="space-y-2">
                                        {module.skills.map((skill: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30 self-start">
                                    <p className="text-sm font-bold text-green-700 dark:text-green-400 mb-1">Outcome:</p>
                                    <p className="text-sm text-green-800 dark:text-green-300">{module.outcome}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function DataScienceProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated } = useUser();
    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [batches, setBatches] = useState<Batch[]>([]);
    const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
    const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(0);
    const [showCancellationModal, setShowCancellationModal] = useState(false);

    const coursePrice = COURSE_PRICES.DATA_SCIENCE;
    const courseId = COURSE_IDS.DATA_SCIENCE;
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
                const response = await fetch(`${baseUrl}/course-checkout/batches/${courseId}`);
                const result = await response.json();
                if (result.success && result.data) {
                    const batchList = result.data.batches || result.data;
                    if (Array.isArray(batchList) && batchList.length > 0) {
                        setBatches(batchList);
                        setSelectedBatchId(batchList[0].Id);
                    }
                }
            } catch (error) { console.error('Error fetching batches:', error); }
        };
        fetchBatches();
    }, [courseId, apiUrl]);

    const initializeRazorpay = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) { resolve(true); return; }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePaymentCancellation = async (enrollmentId: string) => {
        try {
            const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
            await fetch(`${baseUrl}/course-checkout/cancel-payment`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ enrollmentId }) });
        } catch (error) { console.error('Error handling payment cancellation:', error); }
        finally { setIsProcessing(false); setShowCancellationModal(true); }
    };

    const handleBuyCourse = async (amount: number) => {
        setSelectedPlanPrice(amount);
        if (!isAuthenticated) { navigate('/sign-in', { state: { from: location } }); return; }
        if (!selectedBatchId) { toast.error('Please select a batch first'); return; }
        setIsProcessing(true);
        try {
            const razorpayLoaded = await initializeRazorpay();
            if (!razorpayLoaded) throw new Error('Failed to load Razorpay SDK');
            const orderResponse = await api.post('/course-checkout/create-order', { courseId, batchId: selectedBatchId, amount: amount });
            if (!orderResponse.data.success) throw new Error(orderResponse.data.message || 'Failed to create order');
            const { orderId, enrollmentId } = orderResponse.data.data;
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID, amount: orderResponse.data.data.amount, currency: orderResponse.data.data.currency || 'INR',
                name: 'AcceleratorX', description: coursePrice.name, order_id: orderId,
                handler: async (response: any) => {
                    try {
                        const verifyResponse = await api.post('/course-checkout/verify-payment', { razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature, enrollmentId });
                        if (verifyResponse.data.success) { toast.success('Payment successful! Welcome to the program.'); navigate(`/course-payment/success/${orderId}`); }
                        else throw new Error('Payment verification failed');
                    } catch (error: any) { toast.error('Payment verification failed. Please contact support.'); }
                    finally { setIsProcessing(false); }
                },
                prefill: { name: user?.FirstName ? `${user.FirstName} ${user.LastName || ''}` : '', email: user?.Email || '', contact: '' },
                theme: { color: '#3B82F6' },
                modal: { ondismiss: () => handlePaymentCancellation(enrollmentId) },
            };
            const razorpay = new window.Razorpay(options);
            razorpay.on('payment.failed', () => handlePaymentCancellation(enrollmentId));
            razorpay.open();
        } catch (error: any) { toast.error(error.message || 'Failed to process payment. Please try again.'); setIsProcessing(false); }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            if (containerRef.current && sidebarRef.current) {
                const containerTop = containerRef.current.offsetTop;
                const containerBottom = containerTop + containerRef.current.offsetHeight;
                const sidebarHeight = sidebarRef.current.offsetHeight;
                const viewportCenter = window.scrollY + window.innerHeight / 2;
                const sidebarCenter = containerTop + sidebarHeight / 2;
                const shouldStartFixed = viewportCenter > sidebarCenter;
                const sidebarBottom = window.scrollY + window.innerHeight / 2 + sidebarHeight / 2;
                const shouldStopFixed = sidebarBottom > containerBottom;
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
        if (sidebarRef.current) setSidebarWidth(sidebarRef.current.offsetWidth);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleScroll); };
    }, [isFixed]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    };

    return (
        <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">
                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}
                <aside ref={sidebarRef} className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''}`} style={isFixed ? { width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px`, maxHeight: 'calc(100vh - 4rem)' } : {}}>
                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                        <h2 className="text-3xl font-serif font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight">Master Production-Ready Data Science</h2>
                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30">
                            {SECTIONS.map((section) => (
                                <button key={section.id} onClick={() => scrollToSection(section.id)} className={`block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id ? "border-l-2 border-[#3B82F6] -ml-0.5 text-[#3B82F6] font-bold" : "text-gray-500 hover:text-gray-900"}`}>{section.label}</button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-24">

                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-6 italic text-[#3B82F6]">AI Programs that helps to
                            become a Professional</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">Designed for serious DS careers, this program matches how Data Science roles work today. You won't just learn Python; you'll build models that survive production and influence real business decisions.</p>
                        <ul className="space-y-3 mb-8">
                            {["Frame real business problems", "Build ML systems, not just notebooks", "Deploy & monitor ML pipelines", "Direct feedback on models", "Small-batch cohorts for deep learning"].map((text, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24 relative">
                        <img src="/redesign/ai-pm/github.png" alt="github" className="h-16 w-16 absolute top-40 -right-20" />

                        <h3 className="text-2xl font-serif font-bold mb-6">Program Structure - 25 Sessions • 5 Phases</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">Everything is hands-on. Move from the Analyst mindset to becoming a Data Scientist.</p>
                        <div>{CURRICULUM.map((module, idx) => <AccordionItem key={idx} module={module} />)}</div>
                        <div className="mt-8 flex justify-center">
                            <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg flex items-center gap-2">View Curriculum <ChevronDown size={18} /></button>
                        </div>
                        <img src="/redesign/data-science/astroid.webp" alt="slack" className="absolute bottom-40 -left-[400px] w-[200px]" />

                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16"></div>
                    </section>

                    <section id="skillverse" className="scroll-mt-24">
                        <div className="w-full mb-16">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white relative z-10">Skillverse You Actually Master</h3>

                            <img
                                src="/redesign/data-science/ds-skillverses.webp"
                                alt="Skillverse You Actually Master"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Tools You’ll Master</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] border border-[#252525] rounded-2xl p-4 hover:border-[#333333] transition-all duration-300 group"
                                >
                                    <div className="p-6 mb-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="inline-block px-3 py-1 bg-gray-300 rounded text-[10px] font-bold text-black uppercase tracking-wider mb-4">
                                        {tool.category}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Industry</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {MENTORS.map((m, i) => (
                                <div key={i} className="bg-gray-50 relative dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300">
                                    <div className="aspect-square relative overflow-hidden"><img src={m.image} alt={m.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" /></div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{m.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{m.role} @ {m.company}</p>
                                        {m.linkedin && (
                                            <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href={m.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[#0077b5] hover:text-[#005582] font-semibold text-xs transition-colors"
                                                >
                                                    <Linkedin size={14} fill="currentColor" />
                                                    <span>LinkedIn</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16"></div>
                    </section>

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Industry-Recognized Certification</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-4 transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform"><img src="/redesign/advance-gen-ai/ADV-GEN-AI.webp" alt="Data Science Certificate" className="w-full h-auto rounded-md shadow-xl" /></div>
                            <div className="w-full md:w-1/2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">Nano-Degree in Production Data Science</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Validates your ability to build ML systems, handle drift, and deploy scalable pipelines.</p>
                                <ul className="space-y-3">
                                    {["Frame & build ML models", "Deploy & monitor pipelines", "Handle model failures", "Influence business results"].map((f, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300"><div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#3B82F6] flex items-center justify-center flex-shrink-0"><Check size={10} /></div>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16"></div>
                    </section>

                    <section id="career" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Roles You’ll Be Ready For</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {["Data Scientist", "ML Engineer", "Product Data Scientist", "Analytics Manager", "DS Consultant"].map((role) => (
                                <div key={role} className="bg-white dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white w-2/3">{role}</h4>
                                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">₹8 LPA – ₹25 LPA+</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24 relative">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif font-bold mb-4 text-white">Make an Investment for the AI Ready Future</h3>
                        </div>

                        <div className="flex justify-center max-w-5xl mx-auto">
                            <div
                                className="relative rounded-[10px] p-[1px] w-[375px]"
                                style={{
                                    background: "linear-gradient(180deg, #5BA4E5 0%, rgba(91, 164, 229, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #5BA4E566",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{
                                        boxShadow: "-4px -4px 10px 0px #5BA4E566",
                                    }}
                                >
                                    {/* Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(142.89deg, rgba(91, 164, 229, 0.2) 0%, rgba(91, 164, 229, 0) 100%)",
                                        }}
                                    ></div>

                                    <h4 className="font-bold text-white text-2xl mb-2 relative z-10">Regular</h4>
                                    <p className="text-gray-300 text-sm mb-6 relative z-10">Comprehensive AI training program</p>

                                    <div className="mb-4 relative z-10">
                                        <span className="text-4xl font-bold text-[#5BA4E5]">₹ 32,499</span>
                                        <span className="text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    {/* Batch Selection Logic */}
                                    {batches.length > 0 && (
                                        <div className="mb-6 w-full relative z-10">
                                            <label className="block text-left text-sm font-medium text-gray-300 mb-2">Select Batch</label>
                                            <select
                                                value={selectedBatchId || ''}
                                                onChange={(e) => setSelectedBatchId(e.target.value)}
                                                className="w-full px-3 py-2 border border-[#848484]/30 rounded-lg text-sm focus:ring-[#5BA4E5] focus:border-[#5BA4E5] bg-black text-white"
                                            >
                                                {batches.map((batch) => (
                                                    <option key={batch.Id} value={batch.Id}>
                                                        {batch.Batch} - Starts {new Date(batch.StartDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    <ul className="text-left space-y-3 mb-8 text-sm text-gray-300 w-full relative z-10">
                                        {[
                                            "3-month intensive, live instructor-led training",
                                            "Hands-on projects tackling real-world AI challenges",
                                            "Industry-recognised certification",
                                            "Lifetime access to all program materials",
                                            "Exclusive AI community membership",
                                            "Career mentorship and guidance",
                                            "Build a strong project portfolio",
                                            "Interview preparation for AI roles"
                                        ].map((f, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <span className="text-gray-400 mt-1">•</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button Logic */}
                                    {isAuthenticated ? (
                                        <button
                                            onClick={() => handleBuyCourse(32499)}
                                            disabled={isProcessing || batches.length === 0}
                                            className="w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10 disabled:bg-gray-600 disabled:text-gray-400"
                                        >
                                            {isProcessing ? <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Processing...</> : batches.length === 0 ? 'No batches available' : <>Apply Now <ArrowRight size={18} /></>}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => navigate('/sign-in', { state: { from: location } })}
                                            className="w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                        >
                                            Sign in to Enroll <ArrowRight size={18} />
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    </section>

                    <AnimatePresence>
                        {showCancellationModal && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center"><h3 className="text-xl font-bold text-gray-900 mb-4">Payment Cancelled</h3><p className="text-gray-600 mb-6">Your payment was not completed. Would you like to try again?</p><div className="flex gap-4"><button onClick={() => setShowCancellationModal(false)} className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button><button onClick={() => { setShowCancellationModal(false); handleBuyCourse(selectedPlanPrice); }} className="flex-1 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-700">Try Again</button></div></div></div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
