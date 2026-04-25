
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createEnrollment, EnrollmentData } from "../../../api/enrollmentApi";
import { trackFormSubmission, getUTMDataForDB } from "../../../utils/metaPixel";

const omniAccessToken = import.meta.env.VITE_OMNI_ACCESS_TOKEN;


interface EnrollmentModalADSProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    program?: {
        label: string;
        title: string;
        description: string;
        color: string;
        link: string;
        hoverBorder: string;
    };
    customData?: Partial<EnrollmentData>;
}

const BROCHURES: Record<string, { title: string; url: string }> = {
    "AI Digital Marketing": {
        title: "AI Digital Marketing Syllabus",
        url: "/brochure/AIDIGITALMARKETING.pdf",
    },
    "Product Management": {
        title: "Product Management Syllabus",
        url: "/brochure/AIPRODUCTMANAGMENT.pdf",
    },
    "Generative AI": {
        title: "Generative AI Syllabus",
        url: "/brochure/GENERATIVEAI.pdf",
    },
    "Advanced Generative AI": {
        title: "Advanced Generative AI Syllabus",
        url: "/brochure/ADVANCEDGENERATIVEAI.pdf",
    },
    "Data Analytics": {
        title: "AI Powered Data Analytics Syllabus",
        url: "/brochure/AIDATAANALYTICS.pdf",
    },
    "Data Science": {
        title: "AI Data Science Syllabus",
        url: "/brochure/DATASCIENCE.pdf",
    },
    "Advanced AI Crash Course": {
        title: "AI Crash Course Build Pass",
        url: "/brochure/GENERATIVEAI.pdf"
    }
};

// Helper to resolve brochure by course name or title
function resolveBrochure(course?: string | null) {
    if (!course) return BROCHURES["AI Digital Marketing"]; // default

    const lower = course.toLowerCase();

    if (lower.includes("advanced generative ai")) return BROCHURES["Advanced Generative AI"];
    if (lower.includes("product management")) return BROCHURES["Product Management"];
    if (lower.includes("generative ai") || lower.includes("automation")) return BROCHURES["Generative AI"];
    if (lower.includes("data analytics") || lower.includes("data analyst")) return BROCHURES["Data Analytics"];
    if (lower.includes("data science")) return BROCHURES["Data Science"];
    if (lower.includes("digital marketing") || lower.includes("marketing")) return BROCHURES["AI Digital Marketing"];
    if (lower.includes("crash course")) return BROCHURES["Advanced AI Crash Course"];

    // Fallback check against keys
    const foundKey = Object.keys(BROCHURES).find(k => k.toLowerCase() === lower);
    return foundKey ? BROCHURES[foundKey] : BROCHURES["AI Digital Marketing"];
}

async function sendWhatsAppMessage({
    phone,
    name,
    broucher,
}: {
    phone: string;
    name: string;
    broucher: { title: string; url: string };
}) {
    console.log("Sending WhatsApp message to:", phone);
    try {
        const response = await fetch("https://wb.omni.tatatelebusiness.com/whatsapp-cloud/messages", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${omniAccessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "to": (() => {
                    const cleaned = phone.replace(/^\+/, '');
                    return cleaned.length === 10 ? `91${cleaned}` : cleaned;
                })(),
                "type": "template",
                "source": "external",
                "template": {
                    "name": "registration_request_2",
                    "language": {
                        "code": "en"
                    },
                    "components": [
                        {
                            "type": "header",
                            "parameters": [
                                {
                                    "type": "document",
                                    "document": {
                                        "link": broucher.url,
                                        "filename": broucher.title
                                    }
                                }
                            ]
                        },
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": name
                                }
                            ]
                        }
                    ]
                },
                "metaData": {
                    "custom_callback_data": ""
                }
            }),
        });

        if (!response.ok) {
            const data = await response.json();
            console.error("WhatsApp API error:", data);
        }
    } catch (error) {
        console.error("Error sending WhatsApp message:", error);
    }
}


const PROGRAM_THEMES: Record<string, {
    border: string;
    gradient: string; // For button
    text: string;
    ring: string;
    topGradient: string;
}> = {
    "AI PM": {
        border: "border-purple-500/50",
        gradient: "from-purple-600 to-indigo-600 hover:to-purple-700",
        text: "text-purple-400",
        ring: "focus:ring-purple-500",
        topGradient: "from-purple-500 to-indigo-500"
    },
    "Gen AI": {
        border: "border-orange-500/50",
        gradient: "from-orange-500 to-red-500 hover:to-orange-600",
        text: "text-orange-400",
        ring: "focus:ring-orange-500",
        topGradient: "from-orange-500 to-amber-500"
    },
    "AI DA": {
        border: "border-blue-500/50",
        gradient: "from-blue-600 to-cyan-600 hover:to-blue-700",
        text: "text-blue-400",
        ring: "focus:ring-blue-500",
        topGradient: "from-blue-500 to-cyan-500"
    },
    "AI DM": {
        border: "border-emerald-500/50",
        gradient: "from-emerald-600 to-teal-600 hover:to-emerald-700",
        text: "text-emerald-400",
        ring: "focus:ring-emerald-500",
        topGradient: "from-emerald-500 to-teal-500"
    },
    "Crash Course": {
        border: "border-yellow-500/50",
        gradient: "from-yellow-500 to-orange-500 hover:to-yellow-600",
        text: "text-yellow-400",
        ring: "focus:ring-yellow-500",
        topGradient: "from-yellow-500 to-amber-500"
    }
};

const DEFAULT_THEME = {
    border: "border-gray-800",
    gradient: "from-blue-600 to-blue-700",
    text: "text-blue-400",
    ring: "focus:ring-blue-500",
    topGradient: "from-blue-500 to-indigo-500" // fall back
};

export default function EnrollmentModalADS({ isOpen, onClose, onSubmit, program, customData }: EnrollmentModalADSProps) {
    const navigate = useNavigate();

    // Get theme based on program label
    const theme = program && PROGRAM_THEMES[program.label] ? PROGRAM_THEMES[program.label] : DEFAULT_THEME;

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        education: "",
        course: "",
        workExperience: "",
        designation: "",
    });

    useEffect(() => {
        if (program) {
            setFormData((prev) => ({ ...prev, course: program.title }));
        }
    }, [program]);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const openBrochure = (courseName?: string | null) => {
        try {
            const { url, title } = resolveBrochure(courseName);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${title}.pdf`;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (err) {
            console.error("Failed to download brochure:", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        if (formData.phone.length < 10 || formData.phone.length > 12) {
            toast.error("Please enter a valid phone number (10-12 digits)");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);

        try {
            const utmData = getUTMDataForDB();
            const submissionData = {
                full_name: formData.name,
                phone_number: formData.phone,
                email: formData.email,
                education_level: formData.education,
                course: formData.course || "General Inquiry",
                work_experience: formData.workExperience,
                designation: formData.designation,
                utm_source: utmData.utm_source,
                utm_medium: utmData.utm_medium,
                utm_campaign: utmData.utm_campaign,
                utm_term: utmData.utm_term,
                utm_content: utmData.utm_content,
                referrer: utmData.referrer,
                landing_page_url: utmData.landing_page_url,
                fbclid: utmData.fbclid,
                gclid: utmData.gclid,
                ttclid: utmData.ttclid,
                msclkid: utmData.msclkid,
                internal_campaign_code: "AMITCC",
                internal_campaign_name: "amit campaign",
                ...customData,
            };

            await createEnrollment(submissionData);

            const broucherData = resolveBrochure(formData.course);

            await sendWhatsAppMessage({
                phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
                name: formData.name,
                broucher: broucherData,
            });

            const trackingFormData = new FormData();
            trackingFormData.append("name", formData.name);
            trackingFormData.append("email", formData.email);
            trackingFormData.append("phone", formData.phone);
            trackingFormData.append("education", formData.education);
            trackingFormData.append("designation", formData.designation);
            trackingFormData.append("course", formData.course);
            trackingFormData.append("workExperience", formData.workExperience);
            await trackFormSubmission(trackingFormData);

            // Google Ads Tracking
            if (window.gtag) {
                window.gtag('event', 'generate_lead', {
                    'send_to': 'AW-10956877740',
                    'event_callback': () => console.log('Google Ads lead event sent')
                });
            }

            toast.success("Enrollment submitted successfully! Opening brochure...");
            openBrochure(formData.course);

            if (onSubmit) onSubmit();

            setTimeout(() => {
                onClose();
                navigate("/thank-you", { state: { courseName: formData.course, fromAllPrograms: true } });
            }, 800);

        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit enrollment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="enrollment-modal-ads"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
                >
                    <div className={`relative w-full max-w-md mx-auto mt-10 md:mt-0 bg-[#0a0a0a] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden border ${theme.border}`}>

                        {/* Top Gradient Line */}
                        <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${theme.topGradient}`}></div>

                        <div className="h-[85vh] md:h-auto flex flex-col">
                            <div className="sticky top-0 bg-[#0a0a0a]/95 px-6 py-5 border-b border-gray-800 z-10 backdrop-blur-md">
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                                <div className="flex flex-col gap-1 pr-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                                        Enroll Now
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-400 font-medium">
                                        {program
                                            ? <span>You are enrolling for: <span className={`${theme.text}`}>{program.title}</span></span>
                                            : "Start Your AI Journey with AcceleratorX"}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 w-full">
                                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className={`w-full bg-[#111] text-white px-4 py-3 rounded-xl border border-[#333] ${theme.ring} focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-sm`}
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className={`w-full bg-[#111] text-white px-4 py-3 rounded-xl border border-[#333] ${theme.ring} focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-sm`}
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
                                                Phone Number
                                            </label>
                                            <div className="flex gap-2">
                                                <span className="bg-[#111] text-gray-400 px-3 py-3 rounded-xl border border-[#333] flex items-center text-sm font-medium">
                                                    +91
                                                </span>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    required
                                                    className={`w-full bg-[#111] text-white px-4 py-3 rounded-xl border border-[#333] ${theme.ring} focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-sm`}
                                                    placeholder="9876543210"
                                                    value={formData.phone}
                                                    onChange={(e) => {
                                                        const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 12);
                                                        setFormData({ ...formData, phone: sanitizedValue });
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="designation" className="block text-sm font-medium text-gray-400">
                                                Designation
                                            </label>
                                            <input
                                                type="text"
                                                id="designation"
                                                required
                                                className={`w-full bg-[#111] text-white px-4 py-3 rounded-xl border border-[#333] ${theme.ring} focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-sm`}
                                                placeholder="Software Engineer"
                                                value={formData.designation}
                                                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="education" className="block text-sm font-medium text-gray-400">
                                                Education
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="education"
                                                    required
                                                    className={`w-full bg-[#111] text-white px-4 py-3 rounded-xl border border-[#333] ${theme.ring} focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-sm`}
                                                    value={formData.education}
                                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                                >
                                                    <option value="" className="bg-neutral-900">Select</option>
                                                    <option value="High School" className="bg-neutral-900">High School</option>
                                                    <option value="Bachelor's" className="bg-neutral-900">Bachelor's</option>
                                                    <option value="Master's" className="bg-neutral-900">Master's</option>
                                                    <option value="PhD" className="bg-neutral-900">PhD</option>
                                                </select>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="workExperience" className="block text-sm font-medium text-gray-400">
                                                Experience
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="workExperience"
                                                    required
                                                    className={`w-full bg-[#111] text-white px-4 py-3 rounded-xl border border-[#333] ${theme.ring} focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-sm`}
                                                    value={formData.workExperience}
                                                    onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                                                >
                                                    <option value="" className="bg-neutral-900">Select</option>
                                                    <option value="0-1" className="bg-neutral-900">0-1 yrs</option>
                                                    <option value="1-3" className="bg-neutral-900">1-3 yrs</option>
                                                    <option value="3-5" className="bg-neutral-900">3-5 yrs</option>
                                                    <option value="5+" className="bg-neutral-900">5+ yrs</option>
                                                </select>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full relative h-[52px] rounded-xl flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform bg-gradient-to-r ${theme.gradient} text-white font-bold text-base shadow-lg`}
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                "Submit Application"
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-gray-500 mt-4 leading-relaxed">
                                            By submitting this form, you acknowledge that we collect non-personal campaign data for analytics purposes.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
