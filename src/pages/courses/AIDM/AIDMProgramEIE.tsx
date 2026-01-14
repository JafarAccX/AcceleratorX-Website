"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Loader2 } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../context/UserContext';
import { COURSE_IDS, COURSE_PRICES } from '../../../utils/constants_price';
import { api } from '../../../api';

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

// --- Data & Constants ---

const SECTIONS = [
    { id: "why-this-program", label: "Why this Nano-Degree" },
    { id: "curriculum", label: "Learning Journey - 16 Weeks" },
    { id: "tools", label: "Master AI Marketing Tools" },
    { id: "mentors", label: "Mentors from DrinksPrime, TargetG & more" },
    { id: "certificate", label: "Industry Recognized Certificate" },
    { id: "career", label: "Job Placement & Career Outcomes" },
    { id: "pricing", label: "Investment for the Future" },
];

const AIDM_MENTORS = [
    { name: "Kumar Savino", role: "Associate Director - Growth", company: "DrinkPrime", image: "/assets/mentor/kumar.webp" },
    { name: "Yash Manghnani", role: "AI Builder & PM Consultant", company: "Neuwriter.ai", image: "/assets/mentor/yash-manghnani.webp" },
    { name: "Ankita Das", role: "B2B Product Marketer", company: "Ex-TargetG", image: "/assets/mentor/ankita.webp" },
];

const CURRICULUM = [
    {
        month: "1",
        title: "Foundations & AI Content Creation",
        goal: "Master the fundamentals of digital marketing and use AI for high-speed content production.",
        weeks: ["Digital Marketing Foundations", "AI-Powered Content (SEO)", "Visual Storytelling (Midjourney/Runway)", "Video & Audio with AI"],
        skills: ["Funnel Mapping", "Generative AI", "Content Strategy"],
    },
    {
        month: "2",
        title: "Growth Channels & Paid Media",
        goal: "Lead high-ROI campaigns on Google and Meta using AI for strategy and ad creative.",
        weeks: ["Paid Ads with AI (Meta/Google)", "Social Media Growth", "Data Analytics (GA4)", "Conversion Optimization (CRO)"],
        skills: ["Media Buying", "A/B Testing", "Data Analysis"],
    },
    {
        month: "3",
        title: "Automation & E-commerce",
        goal: "Integrate AI into business operations with n8n workflow automation and B2B growth tools.",
        weeks: ["Workflow Automation (n8n)", "Email & Drip Marketing", "B2B Growth (Apollo/Clay)", "E-commerce Marketing"],
        skills: ["Automation Ops", "Lead Gen", "lifecycle Marketing"],
    },
    {
        month: "4",
        title: "AI Agents & Career Launch",
        goal: "Build autonomous marketing agents with CrewAI and finish with a real capstone showcase.",
        weeks: ["Building AI Marketing Agents", "Campaign Automation Deep-dive", "Growth Hacking Loops", "Career Prep & Capstone"],
        skills: ["Agentic Frameworks", "Portfolio Building", "Client Readiness"],
    },
];

const AIDM_TOOLS = [
    { name: "ChatGPT", description: "Prompt engineering & research", image: "/assets/genAITools/gpt4.webp" },
    { name: "Midjourney", description: "AI Visual & creative generation", image: "/assets/aidmtools/ido.webp" },
    { name: "n8n", description: "Advanced workflow automation", image: "/assets/genAITools/n8n-seeklogo.webp" },
    { name: "Jasper", description: "AI copywriting platform", image: "/assets/dmAITools/jasper.webp" },
    { name: "GA4", description: "Data analytics & insight", image: "/assets/dmAITools/googleanalytics.webp" },
    { name: "Apollo.io", description: "B2B lead generation", image: "/assets/aidmtools/Apollo.io.webp" },
];

const AccordionItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                        MONTH {item.month}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900">
                        {item.title}
                    </h4>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                            <p className="text-sm text-blue-600 italic mb-4 font-medium">{item.goal}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wider">Weeks/Topics:</p>
                                    <ul className="space-y-1">
                                        {item.weeks.map((week: string, wIdx: number) => (
                                            <li key={wIdx} className="text-xs flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                {week}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wider">Key Skills:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill: string, sIdx: number) => (
                                            <span key={sIdx} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AIDMProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated, isLoading: isAuthLoading } = useUser();

    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Payment states
    const [isProcessing, setIsProcessing] = useState(false);
    const [batches, setBatches] = useState<Batch[]>([]);
    const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
    const [paymentCancelled, setPaymentCancelled] = useState(false);
    const [showCancellationModal, setShowCancellationModal] = useState(false);

    const coursePrice = COURSE_PRICES.AIDM_NANO_DEGREE;
    const courseId = COURSE_IDS.AIDM_NANO_DEGREE;
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch active batches for this course
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
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        };
        fetchBatches();
    }, [courseId, apiUrl]);

    // Initialize Razorpay SDK
    const initializeRazorpay = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Handle payment cancellation
    const handlePaymentCancellation = async (enrollmentId: string) => {
        try {
            const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
            await fetch(`${baseUrl}/course-checkout/cancel-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ enrollmentId }),
            });
        } catch (error) {
            console.error('Error handling payment cancellation:', error);
        } finally {
            setPaymentCancelled(true);
            setIsProcessing(false);
            setShowCancellationModal(true);
        }
    };

    // Handle course purchase
    const handleBuyCourse = async () => {
        if (!isAuthenticated) {
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        if (!selectedBatchId) {
            toast.error('Please select a batch first');
            return;
        }

        setIsProcessing(true);

        try {
            const razorpayLoaded = await initializeRazorpay();
            if (!razorpayLoaded) {
                throw new Error('Failed to load Razorpay SDK');
            }

            const orderResponse = await api.post('/course-checkout/create-order', {
                courseId,
                batchId: selectedBatchId,
                amount: coursePrice.amount,
            });

            if (!orderResponse.data.success) {
                throw new Error(orderResponse.data.message || 'Failed to create order');
            }

            const { orderId, enrollmentId } = orderResponse.data.data;

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderResponse.data.data.amount,
                currency: orderResponse.data.data.currency || 'INR',
                name: 'AcceleratorX',
                description: coursePrice.name,
                order_id: orderId,
                handler: async (response: any) => {
                    try {
                        const verifyResponse = await api.post('/course-checkout/verify-payment', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            enrollmentId,
                        });

                        if (verifyResponse.data.success) {
                            toast.success('Payment successful! Welcome to the program.');
                            navigate(`/course-payment/success/${orderId}`);
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error: any) {
                        console.error('Payment verification error:', error);
                        toast.error('Payment verification failed. Please contact support.');
                    } finally {
                        setIsProcessing(false);
                    }
                },
                prefill: {
                    name: user?.FirstName ? `${user.FirstName} ${user.LastName || ''}` : '',
                    email: user?.Email || '',
                    contact: '',
                },
                theme: { color: '#2563EB' },
                modal: {
                    ondismiss: () => handlePaymentCancellation(enrollmentId),
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.on('payment.failed', () => handlePaymentCancellation(enrollmentId));
            razorpay.open();
        } catch (error: any) {
            console.error('Course purchase error:', error);
            toast.error(error.message || 'Failed to process payment. Please try again.');
            setIsProcessing(false);
        }
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

                if (!isFixed) {
                    setSidebarWidth(sidebarRef.current.offsetWidth);
                }
            }

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        if (sidebarRef.current) {
            setSidebarWidth(sidebarRef.current.offsetWidth);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [isFixed]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-20 text-[#0A0F1E]">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
                        }`}
                    style={isFixed ? {
                        width: `${sidebarWidth}px`,
                        maxWidth: `${sidebarWidth}px`,
                        maxHeight: 'calc(100vh - 4rem)'
                    } : {}}
                >
                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                        <h2 className="text-3xl font-serif font-bold text-[#0A0F1E] mb-8 leading-tight">
                            A Complete Road Map to Master AI Marketing
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
                                        ? "border-l-2 border-blue-600 -ml-0.5 text-blue-600 font-bold"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-24">
                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-6">Why this Nano-Degree</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our 16-week Nano-Degree is the only program that deeply integrates Generative AI with core performance marketing. You don't just learn marketing; you learn how to automate it, scale it, and lead it.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "100% live training by industry experts from DrinkPrime, TargetG and etc.",
                                "Hands-on mastery of 20+ AI marketing tools",
                                "Job assistance & placement support after completion",
                                "Advanced AI agent building workshops for marketing ops",
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 mt-12"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-6">Learning Journey - 16 Weeks</h3>
                        <p className="text-gray-600 mb-8">
                            A structured 4-month journey from digital foundations to building autonomous AI marketing agents.
                        </p>
                        <div>
                            {CURRICULUM.map((item, idx) => (
                                <AccordionItem key={idx} item={item} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-colors flex items-center gap-2">
                                Download Full Syllabus <ChevronDown size={18} />
                            </button>
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Master AI Marketing Tools</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {AIDM_TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="bg-gray-50 rounded-lg p-3 inline-block mb-4">
                                        <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 object-contain" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            MARKETING TECH
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                                    <p className="text-xs text-gray-500">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Industry Leading Brands</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {AIDM_MENTORS.map((mentor, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group hover:shadow-md transition-all"
                                >
                                    <div className="aspect-square bg-gray-200 relative overflow-hidden">
                                        <img
                                            src={mentor.image || "/placeholder.svg"}
                                            alt={mentor.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                                        <p className="text-sm text-gray-500">{mentor.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">The Certificate Recognized By The Industry</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-4 border border-gray-100">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/22d117f5e0031a8a28264cb1534717baed3eb5b1.webp?alt=media&token=3e74db69-6da1-4083-bdb3-fb3944a27764"
                                    alt="AI Digital Marketing Certificate"
                                    className="w-full h-auto border-4 border-white shadow-xl"
                                    onError={(e) => { e.currentTarget.src = "/assets/programcertificates/Gen_AI_Cert.webp" }}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">
                                    Professional Nano-Degree in AI Digital Marketing
                                </h4>
                                <p className="text-gray-600 text-sm mb-6">
                                    Validate your expertise in the future of marketing with a certificate acknowledged by 2200+ companies worldwide.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Globally recognized industry certification",
                                        "Digital badge for verified AI Marketer status",
                                        "Placement & Hiring assistance provided",
                                        "Lifetime access to professional network",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <Check size={10} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="career" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Career Outcomes & High Paying Roles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "AI Performance Marketer", pay: "₹15L - 35L", desc: "Scale global ad accounts using intelligent bid and creative automation." },
                                { role: "Growth Lead (AI Ops)", pay: "₹20L - 45L", desc: "Design full-funnel growth engines powered by autonomous agents." },
                                { role: "Senior Marketing Analyst", pay: "₹12L - 28L", desc: "Leverage GA4 and AI to forecast trends and drive conversion." },
                                { role: "Creative Strategist (GenAI)", pay: "₹10L - 22L", desc: "Direct AI-first content labs for consumer brands." },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-lg text-gray-900 w-2/3">
                                            {item.role}
                                        </h4>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">{item.pay}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Invest in your AI-Ready Career</h3>
                        <div className="flex justify-center">
                            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-lg transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2">Nano-Degree Admission</h4>
                                <p className="text-xs text-gray-500 mb-6">16-week comprehensive training</p>

                                <div className="mb-2">
                                    <span className="text-3xl font-bold text-blue-600">₹ {coursePrice.amount.toLocaleString('en-IN')}</span>
                                    <span className="text-gray-400 text-xs ml-1">+ GST</span>
                                </div>

                                {/* Batch Selection */}
                                {batches.length > 0 && (
                                    <div className="mb-4">
                                        <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                            Select Batch
                                        </label>
                                        <select
                                            value={selectedBatchId || ''}
                                            onChange={(e) => setSelectedBatchId(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            {batches.map((batch) => (
                                                <option key={batch.Id} value={batch.Id}>
                                                    {batch.Batch} - Starts {new Date(batch.StartDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <ul className="text-left space-y-3 my-8 text-sm text-gray-600">
                                    {[
                                        "16-Week live instructor-led program",
                                        "Masters 20+ top-tier AI marketing tools",
                                        "Job placement & career assistance",
                                        "Live capstone project & portfolio support",
                                        "Alumni access for lifetime",
                                    ].map((feat, i) => (
                                        <li key={i} className="flex gap-2">
                                            <Check size={16} className="text-blue-500 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {isAuthLoading ? (
                                    <button
                                        disabled
                                        className="w-full py-3 bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Loader2 size={16} className="animate-spin" />
                                        Loading...
                                    </button>
                                ) : isAuthenticated ? (
                                    <button
                                        onClick={handleBuyCourse}
                                        disabled={isProcessing || batches.length === 0}
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                Processing...
                                            </>
                                        ) : batches.length === 0 ? (
                                            'No batches available'
                                        ) : paymentCancelled ? (
                                            <>
                                                Try Again <ArrowRight size={16} />
                                            </>
                                        ) : (
                                            <>
                                                Enroll Now <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => navigate('/sign-in', { state: { from: location } })}
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        Sign in to Enroll <ArrowRight size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Payment Cancellation Modal */}
                    <AnimatePresence>
                        {showCancellationModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                                onClick={() => setShowCancellationModal(false)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Cancelled</h3>
                                    <p className="text-gray-600 mb-6">
                                        Your payment was not completed. Would you like to try again?
                                    </p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setShowCancellationModal(false)}
                                            className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                                setPaymentCancelled(false);
                                                handleBuyCourse();
                                            }}
                                            className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
