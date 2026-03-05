"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Linkedin, TrendingUp, BarChart2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { COURSE_PRICES, COURSE_IDS } from "../../../../utils/constants_price";
import { useUser } from "../../../../context/UserContext";
import { api } from "../../../../api";
import { PremiumButton } from "../../../../components/common/PremiumButton";
import EnrollmentModal from "../../../../components/EnrollmentModal";

// Razorpay type declaration
declare global {
    interface Window {
        Razorpay: any;
    }
}

// interface Batch {
//     Id: string;
//     Batch: string;
//     Course: string;
//     StartDate: string;
//     EndDate: string | null;
//     IsFree: boolean;
// }

// --- Data & Constants ---

const SECTIONS = [
    { id: "why-this-program", label: "WHY THIS PROGRAM" },
    { id: "curriculum", label: "LEARNING JOURNEY" },
    { id: "tools", label: "TOOLS USED" },
    { id: "mentors", label: "TUTORS" },
    { id: "certificate", label: "CERTIFICATION" },
    { id: "career", label: "CAREER OUTCOMES" },
    { id: "pricing", label: "PRICING" },
];

const CURRICULUM = [
    {
        week: "1",
        title: "Product Analytics Foundations",
        goal: "Build product thinking before dashboards.",
        sessions: [
            {
                title: "Session 1: Introduction to Product Analytics & the Product Analyst Role",
                points: [
                    "Product analytics vs. business analytics vs. data science.",
                    "Role of Product Analyst in modern teams.",
                    "How analytics supports product lifecycle decisions.",
                ],
                outcome: "Understand how analysts influence roadmap, growth, and retention.",
            },
            {
                title: "Session 2: Product Goals, North Star Metrics & KPI Trees",
                points: [
                    "North Star Metric (NSM).",
                    "Leading vs. lagging indicators.",
                    "Metric hierarchies & KPI trees.",
                    "Exercise: Build a metric tree for a real product (SaaS / app / marketplace).",
                ],
                outcome: null,
            },
            {
                title: "Session 3: Users, Behavior & Event-Based Thinking",
                points: [
                    "Users vs. customers.",
                    "Behavioral segmentation.",
                    "Events, user properties, & event properties.",
                    "Mapping user journeys.",
                ],
                outcome: "Define analytics questions before data collection.",
            },
            {
                title: "Session 4: Core Product Metrics & Frameworks",
                points: [
                    "AARRR framework.",
                    "Activation, engagement, retention, churn.",
                    "DAU/MAU, stickiness, time-to-value.",
                    "Case: Why products fail despite \"good traffic\".",
                ],
                outcome: null,
            },
        ],
    },
    {
        week: "2",
        title: "Data Foundations & Instrumentation",
        goal: "Collect clean, decision-grade data.",
        sessions: [
            {
                title: "Session 5: How Product Data Is Generated",
                points: [
                    "Client-side vs. server-side tracking.",
                    "Event vs. snapshot data.",
                    "Data pipelines (high-level understanding).",
                    "Industry Insight: Where data breaks in real companies.",
                ],
                outcome: null,
            },
            {
                title: "Session 6: Tracking Plans & Event Taxonomy Design",
                points: [
                    "Event naming conventions.",
                    "Schema design.",
                    "Collaboration with engineering.",
                    "Hands-on: Create a complete tracking plan document.",
                ],
                outcome: null,
            },
            {
                title: "Session 7: Web & App Analytics with Google Analytics 4",
                points: [
                    "GA4 event-based model.",
                    "Users vs. sessions.",
                    "Acquisition & channel quality.",
                    "Engagement metrics.",
                    "Use Case: Landing page → signup → activation analysis.",
                ],
                outcome: null,
            },
            {
                title: "Session 8: Behavioral Analytics Setup with Mixpanel",
                points: [
                    "Events & properties in Mixpanel.",
                    "Segmentation logic.",
                    "Real-time product usage analysis.",
                ],
                outcome: "Live feature usage tracking.",
            },
        ],
    },
    {
        week: "3",
        title: "Behavioral Analytics & Insights",
        goal: "Understand how users actually behave.",
        sessions: [
            {
                title: "Session 9: Funnel Analysis (Activation & Conversion)",
                points: [
                    "Tool Focus: Mixpanel Funnels, Amplitude Funnels.",
                    "Drop-off analysis, time-to-convert, and segment comparisons.",
                ],
                outcome: null,
            },
            {
                title: "Session 10: Retention & Cohort Analysis",
                points: [
                    "Tool Focus: Mixpanel Retention, Amplitude Retention & Cohorts.",
                    "N-day retention, behavioral cohorts, and lifecycle analysis.",
                ],
                outcome: null,
            },
            {
                title: "Session 11: User Journeys, Paths & Drop-Off Diagnosis",
                points: [
                    "Tool Focus: Amplitude User Journeys, Mixpanel Flows.",
                    "Happy paths vs. failure paths and identifying friction points.",
                ],
                outcome: null,
            },
            {
                title: "Session 12: Feature Adoption & Impact Measurement",
                points: [
                    "Feature adoption metrics and power vs. casual user analysis.",
                    "Impact of features on retention.",
                    "Decision Lens: Should this feature be scaled or killed?",
                ],
                outcome: null,
            },
        ],
    },
    {
        week: "4",
        title: "Qualitative Analytics, Experimentation & Growth",
        goal: "Move from insight to action.",
        sessions: [
            {
                title: "Session 13: Qualitative Analytics with Microsoft Clarity",
                points: [
                    "Session replays, heatmaps, and rage clicks.",
                    "Combining qualitative + quantitative insights.",
                ],
                outcome: null,
            },
            {
                title: "Session 14: Experimentation & A/B Testing Fundamentals",
                points: [
                    "Hypothesis-driven product development and experiment design.",
                    "Guardrail metrics.",
                    "Case: Failed experiment analysis.",
                ],
                outcome: null,
            },
            {
                title: "Session 15: Growth Analytics & Engagement Loops",
                points: [
                    "Growth loops vs. funnels.",
                    "Engagement depth vs. frequency and feature-led growth metrics.",
                ],
                outcome: null,
            },
            {
                title: "Session 16: Churn Analysis & Retention Strategies",
                points: [
                    "Types of churn and early churn signals.",
                    "Save tactics backed by data.",
                ],
                outcome: "Define churn-risk user segments.",
            },
        ],
    },
    {
        week: "5",
        title: "Reporting, Storytelling & Career Readiness",
        goal: "Make insights consumable and career-ready.",
        sessions: [
            {
                title: "Session 17: Dashboards & Executive Reporting",
                points: [
                    "Tool Focus: Looker Studio.",
                    "Product health dashboards and avoiding dashboard overload.",
                ],
                outcome: null,
            },
            {
                title: "Session 18: Data Storytelling & Stakeholder Communication",
                points: [
                    "Structuring insights for PMs & leadership and turning data into recommendations.",
                    "Handling pushback.",
                ],
                outcome: null,
            },
            {
                title: "Session 19: End-to-End Product Analytics Case Study",
                points: [
                    "Simulation: Feature launch simulation including instrumentation, funnel, retention, and adoption analysis.",
                    "Recommendation & roadmap impact.",
                ],
                outcome: null,
            },
            {
                title: "Session 20: Portfolio, Interviews & Industry Readiness",
                points: [
                    "Product analytics interview questions and case interview frameworks.",
                    "Building a strong analytics portfolio.",
                    "Deliverable: 1–2 industry-grade product analytics case studies.",
                ],
                outcome: null,
            },
        ],
    },
];

const PA_TOOLS = [
    {
        name: "Mixpanel",
        category: "Product Analytics",
        image: "/redesign/ai-pm/tools/mixpanel.png",
        description: "Leading platform for user behavior analytics and product insights.",
    },
    {
        name: "Google Analytics",
        category: "Web Analytics",
        image: "/redesign/ai-pm/tools/google-analytics.png",
        description: "Platform for tracking & reporting website traffic and user journeys.",
    },
    {
        name: "Looker",
        category: "Business Intelligence",
        image: "/redesign/ai-pm/tools/looker.png",
        description: "Modern BI & data exploration platform for product metrics.",
    },
    {
        name: "Power BI",
        category: "Business Intelligence",
        image: "/redesign/ai-pm/tools/power-bi.png",
        description: "Interactive data visualization & reporting for stakeholder dashboards.",
    },
    {
        name: "Claude",
        category: "LLM Assistant",
        image: "/redesign/ai-pm/tools/claude.png",
        description: "AI writing and reasoning assistant for analysis and documentation.",
    },
    {
        name: "ChatGPT",
        category: "AI Assistant",
        image: "/redesign/ai-pm/tools/chatgpt.png",
        description: "AI-powered assistant for ideation, analytics interpretation, and drafting.",
    },
    {
        name: "Google Sheets",
        category: "Data Analysis",
        image: "/redesign/ai-pm/tools/google-sheets.png",
        description: "Collaborative spreadsheets for real-time data work and cohort analysis.",
    },
];



const PA_MENTORS = [
    {
        name: "Ravi Ahlawat",
        role: "Sr. Product Manager - PayU",
        image: "/redesign/ai-pm/ai-pm-mentors/Ravi Ahlawat.png",
        linkedin: "https://www.linkedin.com/in/raviahlawat09/",
    },
    {
        name: "Subhasis Chandra",
        role: "Sr. Product Manager - Publicis Sapient",
        image: "/redesign/ai-pm/ai-pm-mentors/Subhasis Chandra.png",
        linkedin: "https://www.linkedin.com/in/subhasis-chandra/",
    },
];

// --- Accordion Component ---

const AccordionItem = ({ item, index }: { item: typeof CURRICULUM[0]; index: number }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-green-600/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-sans text-[10px] font-bold text-green-600 bg-green-600/10 px-3 py-1 rounded-full uppercase tracking-widest">
                            MODULE {index + 1}
                        </span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                    </h4>
                    {item.goal && (
                        <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1 italic">Goal: {item.goal}</p>
                    )}
                </div>
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${isOpen
                        ? "bg-green-600 text-white rotate-180"
                        : "bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-green-600 hover:text-white"
                        }`}
                >
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
                        <div className="px-6 pb-6 bg-white dark:bg-[#171717] border-t border-gray-50 dark:border-[#848484]/30 space-y-6 pt-4">
                            {item.sessions.map((session, si) => (
                                <div key={si}>
                                    <p className="font-sans text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                                        {session.title}
                                    </p>
                                    <ul className="space-y-1.5 mb-2">
                                        {session.points.map((point: string, pi: number) => (
                                            <li key={pi} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    {session.outcome && (
                                        <div className="bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 px-4 py-2 rounded-lg">
                                            <p className="text-xs font-bold text-green-700 dark:text-green-400">
                                                Outcome: <span className="font-normal text-green-800 dark:text-green-300">{session.outcome}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Component ---

export default function ProductAnalyticsProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated } = useUser();

    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // // Payment states
    // const [isProcessing, setIsProcessing] = useState(false);
    // const [batches, setBatches] = useState<Batch[]>([]);
    const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
    const [showCancellationModal, setShowCancellationModal] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Expandable sections
    const [whyExpanded, setWhyExpanded] = useState(false);
    const [careerExpanded, setCareerExpanded] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = () => {
        handleModalClose();
    };

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
                    const batchList = result.data.batches || result.data;
                    if (Array.isArray(batchList) && batchList.length > 0) {
                        // setBatches(batchList);
                        setSelectedBatchId(batchList[0].Id);
                    }
                }
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        };
        fetchBatches();
    }, [courseId, apiUrl]);

    const initializeRazorpay = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) { resolve(true); return; }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

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
            // setIsProcessing(false);
            setShowCancellationModal(true);
        }
    };

    const handleBuyCourse = async (amount: number) => {
        if (!isAuthenticated) {
            navigate('/sign-in', { state: { from: location } });
            return;
        }
        if (!selectedBatchId) {
            toast.error('Please select a batch first');
            return;
        }
        // setIsProcessing(true);
        try {
            const razorpayLoaded = await initializeRazorpay();
            if (!razorpayLoaded) throw new Error('Failed to load Razorpay SDK');

            const orderResponse = await api.post('/course-checkout/create-order', {
                courseId, batchId: selectedBatchId, amount,
            });
            if (!orderResponse.data.success) throw new Error(orderResponse.data.error || 'Failed to create order');

            const { orderId, enrollmentId } = orderResponse.data.data;
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: coursePrice.amountInPaise,
                currency: 'INR',
                name: 'AcceleratorX',
                description: coursePrice.name,
                order_id: orderId,
                handler: async function (response: any) {
                    try {
                        const verificationResponse = await api.post('/course-checkout/verify-payment', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            enrollmentId,
                        });
                        if (verificationResponse.data.success) {
                            toast.success('Payment successful! Welcome to the program.');
                            navigate(`/course-payment/success/${response.razorpay_order_id}`);
                        } else throw new Error('Payment verification failed');
                    } catch (error: any) {
                        toast.error(error.message || 'Payment verification failed');
                    }
                },
                modal: { ondismiss: function () { handlePaymentCancellation(enrollmentId); } },
                prefill: {
                    name: user ? `${user.FirstName} ${user.LastName}` : '',
                    email: user?.Email || '',
                    contact: user?.Mobile || '',
                },
                theme: { color: '#2563EB' },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                toast.error(`Payment failed: ${response.error.description}`);
                // setIsProcessing(false);
            });
            paymentObject.open();
        } catch (error: any) {
            toast.error(error.message || 'Failed to process payment. Please try again.');
            // setIsProcessing(false);
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
                if (!isFixed) setSidebarWidth(sidebarRef.current.offsetWidth);
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
        if (sidebarRef.current) setSidebarWidth(sidebarRef.current.offsetWidth);
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

            {/* PM Problem Section */}
            <section className="py-16 px-4 max-w-5xl mx-auto text-center mb-8">
                <p className="font-sans text-[#4ADE80] text-xs font-bold uppercase tracking-widest mb-4">THE PM PROBLEM THIS PROGRAM SOLVES</p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Most PMs Know What to Build. Few Can<br />Prove Why
                </h2>
                <p className="font-sans text-gray-400 mb-10">As a PM, you're expected to:</p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="bg-[#171717] border border-[#848484]/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#252525] rounded-xl flex items-center justify-center">
                                <TrendingUp size={20} className="text-green-400" />
                            </div>
                            <h3 className="font-heading font-bold text-white text-lg">you're expected to:</h3>
                        </div>
                        <ul className="space-y-2">
                            {[
                                "Justify roadmap decisions",
                                "Prioritize features under ambiguity",
                                "Defend trade-offs to leadership",
                                "Diagnose why growth or retention is stalling",
                            ].map((item, i) => (
                                <li key={i} className="font-sans text-gray-400 text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#171717] border border-[#848484]/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#252525] rounded-xl flex items-center justify-center">
                                <BarChart2 size={20} className="text-green-400" />
                            </div>
                            <h3 className="font-heading font-bold text-white text-lg">PMs often rely on:</h3>
                        </div>
                        <ul className="space-y-2">
                            {[
                                "Opinions over evidence",
                                "Vanity metrics",
                                "Delayed data from analysts",
                                "Post-hoc explanations",
                            ].map((item, i) => (
                                <li key={i} className="font-sans text-gray-400 text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="font-sans text-gray-400 mt-10 text-sm">
                    This program helps you own analytics as a PM, not depend on it.
                </p>
            </section>

            {/* Sidebar + Main Content */}
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 relative self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''}`}
                    style={isFixed ? { width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px`, maxHeight: 'calc(100vh - 4rem)' } : {}}
                >
                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                        <p className="font-sans text-[#4ADE80] text-xs font-bold uppercase tracking-widest mb-2">PROGRAMS DESCRIPTION</p>
                        <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
                            Why PMs Are Moving into<br />Product Analysis
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-gray-700 transition-colors duration-300">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`font-sans block pl-4 py-1 text-left text-xs font-medium tracking-wider transition-all duration-300 w-full ${activeSection === section.id
                                        ? "border-l-2 border-[#4ADE80] -ml-0.5 text-[#4ADE80] font-bold"
                                        : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
                                        }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-24">

                    {/* Why This Program */}
                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-4 dark:text-white transition-colors duration-300">Why this Program</h3>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mb-8 transition-colors duration-300"></div>

                        <p className="font-sans text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">The Fastest-Growing PMs Are Analytics-First</p>
                        <ul className="space-y-2 mb-6">
                            {[
                                "PMs who understand analytics influence roadmaps more",
                                "Data-literate PMs get promoted faster",
                                "Analytics-driven PMs lead growth & retention charters",
                                "Companies value PMs who can think like analysts",
                            ].map((item, i) => (
                                <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <AnimatePresence>
                            {whyExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="font-sans text-gray-500 dark:text-gray-400 text-sm mb-1 font-semibold mt-4">Reality:</p>
                                    <p className="font-sans text-gray-600 dark:text-gray-400 text-sm">Many PMs know metrics.</p>
                                    <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-4">Very few PMs know how to diagnose behavior and make decisions with data.</p>
                                    <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-4">This program closes that gap.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => setWhyExpanded(!whyExpanded)}
                            className="font-sans flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors font-medium mt-2"
                        >
                            Read More
                            <ChevronDown size={16} className={`transition-transform ${whyExpanded ? "rotate-180" : ""}`} />
                        </button>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-10 transition-colors duration-300"></div>
                    </section>

                    {/* Curriculum */}
                    <section id="curriculum" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-2 dark:text-white transition-colors duration-300">WHAT YOU'LL LEARN</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-1 transition-colors duration-300">
                            This is not a data analyst bootcamp.
                        </p>
                        <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-8 transition-colors duration-300">
                            Everything is taught to answer PM questions.
                        </p>
                        <div className="space-y-4">
                            {CURRICULUM.map((item, idx) => (
                                <AccordionItem key={idx} item={item} index={idx} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <PremiumButton
                                onClick={() => { setIsModalOpen(true); }}
                                icon={<ChevronDown size={18} className="transition-transform group-hover:translate-y-1 text-green-400 group-hover:text-white" />}
                            >
                                Download Full Curriculum
                            </PremiumButton>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* What Changes After This Program */}
                    <section className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-4 dark:text-white transition-colors duration-300">What Changes After This Program</h3>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mb-8 transition-colors duration-300"></div>
                        <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-3">You become a PM who:</p>
                        <ul className="space-y-2 mb-4">
                            {[
                                "Defends roadmaps with data",
                                "Spots growth & retention issues early",
                                "Works seamlessly with analytics teams",
                                "Is trusted with high-impact product bets",
                            ].map((item, i) => (
                                <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <AnimatePresence>
                            {careerExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="font-sans text-gray-500 dark:text-gray-400 text-sm mt-2 mb-2 font-semibold">Career Paths</p>
                                    <ul className="space-y-1 mb-4">
                                        {["Senior Product Manager", "Growth Product Manager", "Product Analyst", "Data-Driven PM / Product Ops"].map((p, i) => (
                                            <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => setCareerExpanded(!careerExpanded)}
                            className="font-sans flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors font-medium"
                        >
                            Read More
                            <ChevronDown size={16} className={`transition-transform ${careerExpanded ? "rotate-180" : ""}`} />
                        </button>
                        <div className="h-px w-full dark:bg-[#848484]/30 mt-10 transition-colors duration-300"></div>
                    </section>

                    {/* Tools */}
                    <section id="tools" className="scroll-mt-24">
                        {/* Skillverse You Acually Master */}
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Skillverse You Acually Master</h3>
                        <div className="w-full mb-12">
                            <img
                                src="/redesign/product-analytics/product-analytics-skillverse.webp"
                                alt="Product Analytics Skillverse"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Tools Which You Master as a Professional</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                            {PA_TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] border border-[#252525] rounded-2xl p-3 hover:border-[#333333] transition-all duration-300 group"
                                >
                                    <div className="p-2 mb-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="font-sans inline-block px-3 py-1 bg-gray-300 rounded text-[10px] font-bold text-black uppercase tracking-wider mb-4">
                                        {tool.category}
                                    </div>
                                    <h4 className="font-heading text-xl font-bold text-white mb-2">{tool.name}</h4>
                                    <p className="font-sans text-xs text-gray-400 leading-relaxed">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Mentors */}
                    <section id="mentors" className="scroll-mt-24 relative">
                        <img src="/redesign/product-analytics/side-moon.png" alt="mentor-section-bg" className="absolute bottom-40 h-[600px] -left-36 rotate-180 " />
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white">Learn from Industry Experts</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {PA_MENTORS.map((mentor, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 relative dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all"
                                >
                                    <div className="aspect-square relative overflow-hidden">
                                        <img
                                            src={mentor.image}
                                            alt={mentor.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center relative">
                                        <h4 className="font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300">{mentor.name}</h4>
                                        <p className="font-sans text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 mb-2">{mentor.role}</p>
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

                    {/* Certificate */}
                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">The Certificate Recognized By The Industry</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-8 transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="/redesign/certificates/PM.webp"
                                    alt="Product Analytics Certificate"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    Get Your Nano-Degree in AI Product Analytics
                                </h4>
                                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors duration-300">
                                    Show the world your expertise in AI Marketing and stand out in a competitive AI Marketing jobs and get hired easily.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Industry-recognized Nano Degree in AI Data Analytics.",
                                        "Verified badge + unique verification ID",
                                        "Trusted by 2500+ companies and agencies",
                                        "AI Marketing Projects portfolio",
                                        "Lifetime exclusive alumni community access",
                                    ].map((item, i) => (
                                        <li key={i} className="font-sans flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
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

                    {/* Career Outcomes */}
                    <section id="career" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">High-Paying Career Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "Artificial Intelligence Consultants & Strategists", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Artificial Intelligence Consultants & Strategists", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Artificial Intelligence Consultants & Strategists", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Artificial Intelligence Consultants & Strategists", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#171717] border border-[#848484]/30 rounded-xl p-8 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="font-heading font-bold text-xl text-white transition-colors duration-300 w-2/3">
                                            {item.role}
                                        </h4>
                                        <span className="font-sans bg-[#5BA4E5] text-black text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300">{item.pay}</span>
                                    </div>
                                    <p className="font-sans text-gray-400 text-sm transition-colors duration-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Pricing */}
                    <section id="pricing" className="scroll-mt-24 relative">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-4xl font-bold mb-4 text-white">Make an Investment for the AI Ready Future</h3>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-5xl mx-auto">

                            {/* Regular Plan */}
                            {/* <div
                                className="relative rounded-[10px] p-[1px] w-full sm:w-[340px]"
                                style={{
                                    background: "linear-gradient(180deg, #5BA4E5 0%, rgba(91, 164, 229, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #5BA4E566",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{ boxShadow: "-4px -4px 10px 0px #5BA4E566" }}
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{ background: "linear-gradient(142.89deg, rgba(91, 164, 229, 0.2) 0%, rgba(91, 164, 229, 0) 100%)" }}
                                    />
                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Regular</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">Comprehensive AI training program</p>

                                    <div className="mb-4 relative z-10">
                                        <span className="font-heading text-4xl font-bold text-[#5BA4E5]">₹ 32,499</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    {batches.length > 0 && (
                                        <div className="mb-6 w-full relative z-10">
                                            <label className="block text-left text-sm font-medium text-gray-300 mb-2">Select Batch</label>
                                            <select
                                                value={selectedBatchId || ''}
                                                onChange={(e) => setSelectedBatchId(e.target.value)}
                                                className="font-sans w-full px-3 py-2 border border-[#848484]/30 rounded-lg text-sm focus:ring-[#5BA4E5] focus:border-[#5BA4E5] bg-black text-white"
                                            >
                                                {batches.map((batch) => (
                                                    <option key={batch.Id} value={batch.Id}>
                                                        {batch.Batch} - Starts {new Date(batch.StartDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    <ul className="font-sans text-left space-y-3 mb-8 text-sm text-gray-300 w-full relative z-10">
                                        {[
                                            "3-month intensive, live instructor-led training",
                                            "Hands-on projects tackling real-world AI challenges",
                                            "Industry-recognised certification",
                                            "Lifetime access to all program materials",
                                            "Exclusive AI community membership",
                                            "Career mentorship and guidance",
                                            "Build a strong project portfolio",
                                            "Interview preparation for AI roles",
                                        ].map((f, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <span className="text-gray-400 mt-1">•</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {isAuthenticated ? (
                                        <button
                                            onClick={() => handleBuyCourse(32499)}
                                            disabled={isProcessing || batches.length === 0}
                                            className="font-sans w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10 disabled:bg-gray-600 disabled:text-gray-400"
                                        >
                                            {isProcessing ? <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />Processing...</> : batches.length === 0 ? 'No batches available' : <>Apply Now <ArrowRight size={18} /></>}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => navigate('/sign-in', { state: { from: location } })}
                                            className="font-sans w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                        >
                                            Apply Now <ArrowRight size={18} />
                                        </button>
                                    )}
                                </div>
                            </div> */}

                            {/* Product Analytics Program Plan */}
                            <div
                                className="relative rounded-[10px] p-[1px] w-full sm:w-[340px]"
                                style={{
                                    background: "linear-gradient(180deg, #4ADE80 0%, rgba(74, 222, 128, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #4ADE8066",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{ boxShadow: "-4px -4px 10px 0px #4ADE8066" }}
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{ background: "linear-gradient(142.89deg, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0) 100%)" }}
                                    />
                                    {/* Popular Badge */}
                                    <div className="absolute top-4 right-4 bg-[#4ADE80] text-black text-[10px] font-bold px-2 py-0.5 rounded-full z-10 uppercase tracking-wider">
                                        Best Value
                                    </div>

                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Regular +</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">Product Analytics Program</p>

                                    <div className="mb-8 relative z-10">
                                        <span className="font-heading text-4xl font-bold text-[#4ADE80]">₹ 18,999</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="font-sans w-full py-3 bg-[#4ADE80] hover:bg-[#22c55e] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                    >
                                        Apply Now <ArrowRight size={18} />
                                    </button>
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
                                            onClick={() => { setShowCancellationModal(false); handleBuyCourse(coursePrice.amount); }}
                                            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            Retry Payment
                                        </button>
                                        <button
                                            onClick={() => setShowCancellationModal(false)}
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
            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </div>
    );
}
