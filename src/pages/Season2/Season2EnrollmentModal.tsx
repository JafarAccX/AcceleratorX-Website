
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createEnrollment } from "../../api/enrollmentApi";
import { trackFormSubmission, getUTMDataForDB } from "../../utils/metaPixel";

const omniAccessToken = import.meta.env.VITE_OMNI_ACCESS_TOKEN;

interface Season2EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
}

// Hardcoded brochure for Season 2 (using Gen AI or similar as placeholder if no specific one)
// User didn't specify a brochure, so I'll reuse one or leave it generic/empty for now, 
// but the original modal relied on it for WhatsApp. 
// I'll default to "Generative AI" brochure as it fits "AI Crash Course".
const SEASON_2_BROCHURE = {
    title: "AI Crash Course (Season 2)",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/documents%2F1769087535130_Build_Session.pdf?alt=media&token=8e54fe45-68ec-4000-960b-3ed53623c1eb"
};

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

export default function Season2EnrollmentModal({ isOpen, onClose, onSubmit }: Season2EnrollmentModalProps) {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        education: "",
        workExperience: "",
        designation: "",
    });

    const courseName = "AI Crash Course (Season 2)";

    const openBrochure = () => {
        try {
            const a = document.createElement("a");
            a.href = SEASON_2_BROCHURE.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (err) {
            console.error("Failed to open brochure:", err);
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

            // FORCED OVERRIDE as requested
            const submissionData = {
                full_name: formData.name,
                phone_number: formData.phone,
                email: formData.email,
                education_level: formData.education,
                course: courseName,
                work_experience: formData.workExperience,
                designation: formData.designation,

                // Force specific UTMs
                utm_source: "telegram-outreach",
                utm_campaign: "telegram-outreach",

                // Keep others generic or from URL if needed, but usually source/campaign are the main ones overridden
                utm_medium: utmData.utm_medium,
                utm_term: utmData.utm_term,
                utm_content: utmData.utm_content,
                referrer: utmData.referrer,
                landing_page_url: utmData.landing_page_url,
                fbclid: utmData.fbclid,
                gclid: utmData.gclid,
                ttclid: utmData.ttclid,
                msclkid: utmData.msclkid,
            };

            await createEnrollment(submissionData);

            await sendWhatsAppMessage({
                phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
                name: formData.name,
                broucher: SEASON_2_BROCHURE,
            });

            // Track form submission
            const trackingFormData = new FormData();
            trackingFormData.append("name", formData.name);
            trackingFormData.append("email", formData.email);
            trackingFormData.append("phone", formData.phone);
            trackingFormData.append("education", formData.education);
            trackingFormData.append("designation", formData.designation);
            trackingFormData.append("course", courseName);
            trackingFormData.append("workExperience", formData.workExperience);
            await trackFormSubmission(trackingFormData);

            toast.success("Spot reserved! Opening brochure...");
            openBrochure();

            if (onSubmit) onSubmit();

            setTimeout(() => {
                onClose();
                navigate("/thank-you", { state: { courseName } });
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
                    key="season2-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] flex items-center justify-center p-4 overflow-y-auto"
                >
                    {/* Matching Style to Season 2 Page */}
                    <div className="relative w-full max-w-md mx-auto bg-neutral-900 border border-orange-500/50 rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.15)] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-600"></div>

                        <div className="flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
                            <div className="sticky top-0 bg-neutral-900/95 px-6 py-4 border-b border-orange-500/20 z-10 flex justify-between items-start backdrop-blur-md">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        Secure Your Spot
                                    </h3>
                                    <p className="text-orange-400 text-sm font-medium">
                                        Season 2: AI Crash Course
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-black/50 text-white px-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-black/50 text-white px-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                            <div className="flex gap-2">
                                                <span className="bg-black/50 text-gray-400 px-3 py-3 rounded-lg border border-orange-500/30">
                                                    +91
                                                </span>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full bg-black/50 text-white px-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                                                    placeholder="9876543210"
                                                    value={formData.phone}
                                                    onChange={(e) => {
                                                        const val = e.target.value.replace(/\D/g, "").slice(0, 12);
                                                        setFormData({ ...formData, phone: val });
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-300">Current Designation</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-black/50 text-white px-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                                                placeholder="Software Engineer"
                                                value={formData.designation}
                                                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-sm font-medium text-gray-300">Education</label>
                                                <select
                                                    required
                                                    className="w-full bg-black/50 text-white px-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer"
                                                    value={formData.education}
                                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                                >
                                                    <option value="" className="bg-neutral-900">Select</option>
                                                    <option value="High School" className="bg-neutral-900">High School</option>
                                                    <option value="Bachelor's" className="bg-neutral-900">Bachelor's</option>
                                                    <option value="Master's" className="bg-neutral-900">Master's</option>
                                                    <option value="PhD" className="bg-neutral-900">PhD</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm font-medium text-gray-300">Experience</label>
                                                <select
                                                    required
                                                    className="w-full bg-black/50 text-white px-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer"
                                                    value={formData.workExperience}
                                                    onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                                                >
                                                    <option value="" className="bg-neutral-900">Select</option>
                                                    <option value="0-1" className="bg-neutral-900">0-1 yrs</option>
                                                    <option value="1-3" className="bg-neutral-900">1-3 yrs</option>
                                                    <option value="3-5" className="bg-neutral-900">3-5 yrs</option>
                                                    <option value="5+" className="bg-neutral-900">5+ yrs</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Submitting..." : "Join the Crash Course"}
                                        </button>
                                        <p className="text-xs text-center text-gray-500 mt-3">
                                            Limited seats available. Join 2000+ builders.
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
