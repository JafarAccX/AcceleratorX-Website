"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { weeklyData, tools, mentors } from "../../../../utils/constants";
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
    { id: "curriculum", label: "Learning Journey - Curriculum" },
    { id: "tools", label: "Tools Which You Master as a Professional" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "The Certificate Recognized By The Industry" },
    { id: "career", label: "High-Paying Career Opportunities" },
    { id: "pricing", label: "Make an Investment for the AI Ready Future" },
];

const PM_MENTORS = mentors.slice(0, 6);

// --- Components ---

const AccordionItem = ({ week }: { week: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                        WEEK {week.week}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900">
                        {week.topics.join(" & ")}
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
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Key Skills:</p>
                                <div className="flex flex-wrap gap-2">
                                    {week.skills.map((skill: string, sIdx: number) => (
                                        <span key={sIdx} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {week.caseStudies && week.caseStudies.length > 0 && (
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2">Case Studies:</p>
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
            setPaymentCancelled(true);
            setIsProcessing(false);
            setShowCancellationModal(true);
        }
    };

    // Handle course purchase
    const handleBuyCourse = async () => {
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
                amount: coursePrice.amount,
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
                            AI Programs that help you become a Leader
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
                        <h3 className="text-2xl font-serif font-bold mb-6">Why this Program</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our AI Product Management program is designed for professionals who want to lead the next generation of tech products. We combine strategic product thinking with hands-on AI implementation.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Hands-on AI implementation for real products",
                                "Strategic product life-cycle management",
                                "Advanced roadmap and feature prioritization",
                                "Direct mentorship from senior PM leaders",
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
                        <h3 className="text-2xl font-serif font-bold mb-6">Learning Journey - Curriculum</h3>
                        <p className="text-gray-600 mb-8">
                            A comprehensive 4-month journey covering everything from user research to AI scaling.
                        </p>
                        <div>
                            {weeklyData.slice(0, 10).map((week, idx) => (
                                <AccordionItem key={idx} week={week} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-colors flex items-center gap-2">
                                Download Full Curriculum <ChevronDown size={18} />
                            </button>
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Tools Which You Master as a Professional</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {tools.slice(0, 9).map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="bg-gray-50 rounded-lg p-3 inline-block mb-4">
                                        <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 object-contain" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            TOOL
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                                    <p className="text-xs text-gray-500">{tool.description.substring(0, 50)}...</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Top Tech Leaders</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {PM_MENTORS.map((mentor, idx) => (
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
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="/assets/programcertificates/PM_Cert_EIE.webp"
                                    alt="Product Management Certificate"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">
                                    Professional Certificate in AI Product Management
                                </h4>
                                <p className="text-gray-600 text-sm mb-6">
                                    Validate your expertise with an industry-recognized certificate from AcceleratorX. Boost your LinkedIn profile and stand out to recruiters.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Globally recognized certification",
                                        "Shareable digital badge for LinkedIn",
                                        "Trusted by leading product-based companies",
                                        "Access to exclusive PM Alumni network",
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
                        <h3 className="text-2xl font-serif font-bold mb-8">High-Paying Career Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "AI Product Manager", pay: "₹18L - 35L", desc: "Lead AI-driven product strategy and development." },
                                { role: "Growth Product Manager", pay: "₹15L - 28L", desc: "Focus on user acquisition and monetization scaling." },
                                { role: "Technical Product Manager", pay: "₹20L - 40L", desc: "Bridge the gap between complex engineering and product." },
                                { role: "Product Strategist", pay: "₹14L - 25L", desc: "Develop market enter strategies and long-term vision." },
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
                        <h3 className="text-2xl font-serif font-bold mb-8">Make an Investment for your Future</h3>
                        <div className="flex justify-center">
                            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-lg transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2">Program Investment</h4>
                                <p className="text-xs text-gray-500 mb-6">4-month intensive PM program</p>

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
                                        "4 month intensive live instructor-led training",
                                        "Build Your Dream Product (BYDP) project",
                                        "Access to AI templates and frameworks",
                                        "Lifetime access to content and alumni",
                                        "Dedicated placement assistance",
                                    ].map((feat, i) => (
                                        <li key={i} className="flex gap-2">
                                            <Check size={16} className="text-blue-500 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {paymentCancelled && (
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 text-left">
                                        <p className="text-yellow-800 text-xs">
                                            Your previous payment was cancelled. Click below to try again.
                                        </p>
                                    </div>
                                )}

                                <button
                                    onClick={handleBuyCourse}
                                    disabled={isProcessing || isAuthLoading}
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : isAuthenticated ? (
                                        paymentCancelled ? 'Retry Payment' : 'Enroll Now'
                                    ) : (
                                        <>
                                            Sign in to Enroll <ArrowRight size={16} />
                                        </>
                                    )}
                                </button>

                                {!isAuthenticated && (
                                    <p className="text-xs text-gray-500 mt-3">
                                        Already have an account? You'll be redirected to sign in first.
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Payment Cancellation Modal */}
                    {showCancellationModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
                                <button
                                    onClick={() => setShowCancellationModal(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Cancelled</h3>
                                    <p className="text-gray-600 mb-6">Your payment was cancelled. Would you like to try again?</p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                                setPaymentCancelled(false);
                                                handleBuyCourse();
                                            }}
                                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Retry Payment
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                                setPaymentCancelled(false);
                                            }}
                                            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
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
