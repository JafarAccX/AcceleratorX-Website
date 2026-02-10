"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { COURSE_PRICES, COURSE_IDS } from "../../../../utils/constants_price";
import { useUser } from "../../../../context/UserContext";
import { api } from "../../../../api";

// Razorpay type declaration
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
    { id: "why-this-program", label: "Why this Program" },
    { id: "curriculum", label: "Learning Journey (Core PM + AI PM)" },
    { id: "tools", label: "Tools & Frameworks" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Industry-Recognized Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Invest in Your Product Management Career" },
];

const PM_MENTORS = [
    {
        name: "Nitya Sagar",
        role: "Software Engineer (DS) at Apple",
        image: "/redesign/ai-pm/ai-pm-mentors/Nitya Sagar.png",
        linkedin: "https://www.linkedin.com/in/nitya-sagar/",
    },
    {
        name: "Ravi Ahlawat",
        role: "Senior PM at Paytm",
        image: "/redesign/ai-pm/ai-pm-mentors/Ravi Ahlawat.png",
        linkedin: "https://www.linkedin.com/in/raviahlawat09/",
    },
    {
        name: "Ruchir Rana",
        role: "PM at AcceleratorX",
        image: "/redesign/ai-pm/ai-pm-mentors/Ruchir Rana.png",
        linkedin: "https://www.linkedin.com/in/ruchir-rana007",
    },
    {
        name: "Subhasis Chandra",
        role: "Senior PM at Publicis Sapient",
        image: "/redesign/ai-pm/ai-pm-mentors/Subhasis Chandra.png",
        linkedin: "https://www.linkedin.com/in/subhasis-chandra",
    },
];

const CURRICULUM = [
    // Part A: Core Product Management (Weeks 1-12)
    {
        week: "1-2",
        topics: ["Foundations of Product Management"],
        goal: "Understand the PM role, responsibilities, and product lifecycle. Learn to handle ambiguity and own outcomes.",
        skills: ["PM Mindset", "Stakeholder Management", "Ambiguity Handling"],
    },
    {
        week: "3-4",
        topics: ["Users, Problems & Market Understanding"],
        goal: "Learn how great products start with real problems. Conduct user interviews, create personas, and size markets.",
        skills: ["User Interviews", "Personas", "Jobs-To-Be-Done", "Market Sizing (TAM/SAM/SOM)"],
    },
    {
        week: "5-6",
        topics: ["Product Strategy & Roadmapping"],
        goal: "Move from insights to clear product direction. Build vision, strategy, and competitive analysis.",
        skills: ["Product Vision", "Value Proposition", "Competitive Analysis", "Roadmapping"],
    },
    {
        week: "7-8",
        topics: ["Product Execution & Documentation"],
        goal: "Translate strategy into execution. Write PRDs, understand UX fundamentals, and prioritize features.",
        skills: ["PRD Writing", "UX Fundamentals", "Wireframing", "Prioritization (RICE/MoSCoW)"],
    },
    {
        week: "9-10",
        topics: ["MVPs, Metrics & Analytics"],
        goal: "Learn to measure what matters. Design MVPs and define North Star metrics and funnels.",
        skills: ["MVP Design", "North Star Metric", "Funnels & Cohorts", "Data-Informed Decisions"],
    },
    {
        week: "11-12",
        topics: ["GTM, Launch & Growth"],
        goal: "Take products to market confidently. Plan launches, pricing, and positioning.",
        skills: ["GTM Strategy", "Pricing & Positioning", "Launch Planning", "Post-Launch Analysis"],
    },

    // Part B: AI Product Management (Weeks 13-18)
    {
        week: "13",
        topics: ["Introduction to AI Product Management"],
        goal: "Understand how AI changes discovery, design, and delivery. AI-first vs AI-assisted products.",
        skills: ["AI-First Thinking", "AI Value Assessment", "Data & Models as Product"],
    },
    {
        week: "14",
        topics: ["AI Product Discovery & Problem Framing"],
        goal: "Learn to frame AI-appropriate problems. Evaluate data feasibility, risks, and trust.",
        skills: ["Data Feasibility", "AI Risk Assessment", "Trust & UX for AI"],
    },
    {
        week: "15",
        topics: ["AI Models, LLMs & Modern AI Stack"],
        goal: "Understand trade-offs in ML, LLMs vs SLMs, and prompting frameworks without needing to code.",
        skills: ["ML Basics", "LLMs vs SLMs", "Prompting for PMs", "Cost-Latency Trade-offs"],
    },
    {
        week: "16",
        topics: ["AI PRDs, Metrics & Iteration"],
        goal: "Write AI-specific requirements. Design for human-in-the-loop and define AI success metrics.",
        skills: ["AI PRDs", "Human-in-the-loop", "AI Success Metrics", "Model Monitoring"],
    },
    {
        week: "17",
        topics: ["Building AI Products & Rapid MVPs"],
        goal: "Build faster in the AI era. Practice rapid AI MVPs and vibe coding.",
        skills: ["Rapid Prototyping", "Vibe Coding", "AI Workflows"],
    },
    {
        week: "18",
        topics: ["Advanced AI Systems, Ethics & Career"],
        goal: "Prepare for AI PM interviews. Understand RAG, Agents, and Responsible AI.",
        skills: ["RAG Architecture", "AI Agents", "Responsible AI", "Interview Prep"],
    },
];

const PM_TOOLS = [
    { name: "Product Frameworks", description: "JTBD, AARRR, North Star, RICE, Kano", image: "/assets/genAITools/gpt4.webp" },
    { name: "Research & Strategy", description: "Tools for user interviews, personas, and market sizing", image: "/assets/genAITools/claude.webp" },
    { name: "Analytics & Experimentation", description: "Funnels, cohorts, and feedback loops", image: "/assets/genAITools/midjourney.webp" },
    { name: "AI Tools", description: "For research, PRDs, prototyping, and automation", image: "/assets/genAITools/runway.webp" },
    { name: "Vibe Coding", description: "Tools to build and demo AI-powered MVPs", image: "/assets/genAITools/elevenlabs.webp" }
];

// --- Components ---

const AccordionItem = ({ week }: { week: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-colors duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1 transition-colors duration-300">
                        WEEK {week.week}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {week.topics.join(" & ")}
                    </h4>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-5 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717]  transition-colors duration-300">
                            {week.goal && (
                                <p className="text-sm text-blue-600 dark:text-blue-400 italic mb-3 font-medium transition-colors duration-300">
                                    {week.goal}
                                </p>
                            )}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">Key Skills:</p>
                                <div className="flex flex-wrap gap-2">
                                    {week.skills.map((skill: string, sIdx: number) => (
                                        <span key={sIdx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded text-xs transition-colors duration-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {week.caseStudies && week.caseStudies.length > 0 && (
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">Case Studies:</p>
                                    <div className="flex gap-4">
                                        {week.caseStudies.map((logo: string, lIdx: number) => (
                                            <img key={lIdx} src={logo} alt="case study" className="h-6 object-contain opacity-70" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ProductProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated } = useUser();

    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Payment states
    const [isProcessing, setIsProcessing] = useState(false);
    const [batches, setBatches] = useState<Batch[]>([]);
    const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
    const [showCancellationModal, setShowCancellationModal] = useState(false);

    const coursePrice = COURSE_PRICES.PM_PROGRAM;
    const courseId = COURSE_IDS.PM_PROGRAM;
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch active batches for this course
    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
                const response = await fetch(`${baseUrl}/course-checkout/batches/${courseId}`);
                const result = await response.json();

                if (result.success && result.data) {
                    // Handle new response format: data.batches
                    const batchList = result.data.batches || result.data;
                    if (Array.isArray(batchList) && batchList.length > 0) {
                        setBatches(batchList);
                        // Auto-select first batch if available
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
            script.async = true;
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
            setIsProcessing(false);
            setShowCancellationModal(true);
        }
    };

    // Handle course purchase
    const handleBuyCourse = async (amount: number) => {
        // Check if user is authenticated
        if (!isAuthenticated) {
            // Redirect to sign-in with current path as callback
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        if (!selectedBatchId) {
            toast.error('Please select a batch first');
            return;
        }

        setIsProcessing(true);

        try {
            // Initialize Razorpay
            const razorpayLoaded = await initializeRazorpay();
            if (!razorpayLoaded) {
                throw new Error('Failed to load Razorpay SDK');
            }

            // Create order
            const orderResponse = await api.post('/course-checkout/create-order', {
                courseId,
                batchId: selectedBatchId,
                amount: amount,
            });

            if (!orderResponse.data.success) {
                throw new Error(orderResponse.data.error || 'Failed to create order');
            }

            const { orderId, enrollmentId } = orderResponse.data.data;

            // Open Razorpay modal
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: coursePrice.amountInPaise,
                currency: 'INR',
                name: 'AcceleratorX',
                description: coursePrice.name,
                order_id: orderId,
                handler: async function (response: any) {
                    try {
                        // Verify payment
                        const verificationResponse = await api.post('/course-checkout/verify-payment', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            enrollmentId,
                        });

                        if (verificationResponse.data.success) {
                            toast.success('Payment successful! Welcome to the program.');
                            navigate(`/course-payment/success/${response.razorpay_order_id}`);
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error: any) {
                        console.error('Payment verification error:', error);
                        toast.error(error.message || 'Payment verification failed');
                    }
                },
                modal: {
                    ondismiss: function () {
                        handlePaymentCancellation(enrollmentId);
                    },
                },
                prefill: {
                    name: user ? `${user.FirstName} ${user.LastName}` : '',
                    email: user?.Email || '',
                    contact: user?.Mobile || '',
                },
                theme: {
                    color: '#2563EB',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                console.error('Payment failed:', response.error);
                toast.error(`Payment failed: ${response.error.description}`);
                setIsProcessing(false);
            });
            paymentObject.open();
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
        <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
            <div ref={containerRef} className="max-w-7xl  mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 relative self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
                        }`}
                    style={isFixed ? {
                        width: `${sidebarWidth}px`,
                        maxWidth: `${sidebarWidth}px`,
                        maxHeight: 'calc(100vh - 4rem)'
                    } : {}}
                >
                    <img src="/redesign/ai-pm/Google-Analytics.png" alt="Google Analytics" className="h-16 w-16 absolute -top-16 -left-20" />

                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                        <h2 className="text-3xl font-serif font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
                            AI Programs that help you become a Leader
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-gray-700 transition-colors duration-300">
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
                        <h3 className="text-2xl font-serif font-bold mb-6 dark:text-white transition-colors duration-300">A Product Management Program Built for Real-World PM Roles</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                            This is not a theory-heavy PM course.
                            AcceleratorX trains you to think and operate like a real Product Manager — handling ambiguity, making trade-offs, working with engineers & designers, and shipping products.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Covers core PM + AI Product Management",
                                "Strong focus on problem discovery and decision-making",
                                "Real deliverables: PRDs, roadmaps, MVPs, metrics",
                                "Hands-on exposure to AI-powered product workflows",
                                "Career-ready capstone and mock interviews",
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12 transition-colors duration-300"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24 relative">
                        <img src="/redesign/ai-pm/github.png" alt="github" className="h-16 w-16 absolute top-40 -right-20" />

                        <h3 className="text-2xl font-serif font-bold mb-6 dark:text-white transition-colors duration-300">LEARNING JOURNEY (CORE PM + AI PM)</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
                            A comprehensive journey covering everything from user research to AI scaling.
                        </p>
                        <div className="relative">
                            {CURRICULUM.map((week, idx) => (
                                <AccordionItem key={idx} week={week} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-colors flex items-center gap-2">
                                Download Full Curriculum <ChevronDown size={18} />
                            </button>
                            <img src="/redesign/ai-pm/ast.png" alt="astronaut" className="absolute bottom-40 -left-[400px]" />
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="bydp" className="scroll-mt-24">
                        <div className="bg-[#171717] rounded-2xl p-8 md:p-12 border border-[#848484]/30 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white relative z-10">Build your dream product</h3>

                            <div className="space-y-10 relative z-10">
                                <div>
                                    <h4 className="text-xl font-bold text-blue-400 mb-3">What is BYDP?</h4>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        Build Your Dream Product (BYDP) is a structured design and development process that turns raw ideas into usable, market-ready digital products-fast, focused, and without guesswork.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-blue-400 mb-3">Why BYDP?</h4>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        Because building the wrong product is more expensive than building it right. BYDP aligns strategy, design, and execution so you ship something users actually want, not just something that looks good.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="skillverse" className="scroll-mt-24">
                        <div className="w-full mb-16">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white relative z-10">Skillverse You Actually Master</h3>

                            <img
                                src="/redesign/ai-pm/pm-skillverse.webp"
                                alt="Skillverse You Actually Master"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">TOOLS & FRAMEWORKS (EMBEDDED ACROSS PROGRAM)</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {PM_TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-[#171717] border flex flex-col justify-center items-center border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="p-3 inline-block mb-4 transition-colors duration-300">
                                        <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 object-contain" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300 text-center">{tool.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 text-center">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24 relative">
                        <img src="/redesign/ai-pm/mentor-section-bg.png" alt="mentor-section-bg" className="absolute bottom-40 -left-[320px] rotate-12" />

                        <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Top Tech Leaders</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {PM_MENTORS.map((mentor, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 relative dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all"
                                >
                                    <div className="aspect-square relative overflow-hidden">
                                        <img
                                            src={mentor.image || "/placeholder.svg"}
                                            alt={mentor.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center relative">
                                        <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{mentor.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 mb-2">{mentor.role}</p>
                                        {mentor.linkedin && (
                                            <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href={mentor.linkedin}
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
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">Industry-Recognized Nano Degree in Product Management</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-8  transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="/redesign/ai-pm/PM-certificate.webp"
                                    alt="Product Management Certificate"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                                    Nano Degree: Product Management & AI Product Management
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors duration-300">
                                    This certification validates your ability to:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Discover and validate problems",
                                        "Build and launch products",
                                        "Make data-driven decisions",
                                        "Design and manage AI-enabled products",
                                        "Backed by real PM deliverables and AI product thinking.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                                <Check size={10} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="career" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">High-Paying Career Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "Product Manager", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Associate / Junior PM", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Founder / Product Owner", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "AI Product Manager", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#171717] border border-[#848484]/30 rounded-xl p-8 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="font-bold text-2xl text-white transition-colors duration-300">
                                            {item.role}
                                        </h4>
                                        <span className="bg-[#5BA4E5] text-black text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300">{item.pay}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm transition-colors duration-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24 relative">
                        <img src="/redesign/ai-pm/Miro-Logo.png" alt="Miro-Logo" className="absolute w-24 h-24 bottom-40 -left-[400px] rotate-12" />

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
                                    <p className="text-gray-300 text-sm mb-6 relative z-10">AI Product Management</p>

                                    <div className="mb-4 relative z-10">
                                        <span className="text-4xl font-bold text-[#5BA4E5]">₹ 49,999</span>
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
                                            "4-month intensive, live instructor-led training",
                                            "Hands-on building AI Products",
                                            "Industry-recognised certification",
                                            "Lifetime access to all program materials",
                                            "Exclusive AI community membership",
                                            "Career mentorship and guidance",
                                            "Build a strong product portfolio",
                                            "Interview preparation for product roles",
                                            "Build your dream product",
                                            "Get exclusive access to PM Job openings"
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
                                            onClick={() => handleBuyCourse(49999)}
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

                    {/* Payment Cancellation Modal */}
                    {showCancellationModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 relative transition-colors duration-300">
                                <button
                                    onClick={() => setShowCancellationModal(false)}
                                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                                >
                                    ✕
                                </button>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                                        <svg className="w-8 h-8 text-yellow-500 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Payment Cancelled</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">Your payment was cancelled. Would you like to try again?</p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                                handleBuyCourse(coursePrice.amount);
                                            }}
                                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Retry Payment
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                            }}
                                            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
