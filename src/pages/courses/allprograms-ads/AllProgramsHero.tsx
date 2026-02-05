import { motion } from "framer-motion";
import { User, Mail, Phone, Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEnrollment } from "../../../api/enrollmentApi";
import { trackFormSubmission, getUTMDataForDB } from "../../../utils/metaPixel";
import toast from "react-hot-toast";

const omniAccessToken = import.meta.env.VITE_OMNI_ACCESS_TOKEN;

const BROCHURES: Record<string, { title: string; url: string }> = {
    "AI Digital Marketing": {
        title: "AI Digital Marketing Syllabus",
        url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758802254913_notes_new_nano_19th_Sept%2C_2025-compressed.pdf?alt=media&token=42c3ad1b-7519-461b-aad6-ea9f4f5c7be7",
    },
    "Product Management": {
        title: "Product Management",
        url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/documents%2F1768997735586_aipm-broucher-compressed.pdf?alt=media&token=a821e497-52e9-4238-ad3b-bf9cf5aa9635",
    },
    "Generative AI": {
        title: "Generative AI",
        url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1761905010664_notes_new_AcceleratorX_Gen_AI_Brochure-compressed.pdf?alt=media&token=53d0ad2d-4d03-435c-8d31-4c03fc476c78",
    },
    "Gen AI for PMs": {
        title: "Gen AI for PMs",
        url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758294289672_notes_Gen_ai_pm.pdf?alt=media&token=c84b8402-1bc1-40be-8baa-e00c0a4fff36",
    },
    "Data Analytics": {
        title: "AI Powered Data Analytics",
        url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758293290835_notes_AI_Powered_DA_Brochure.pdf?alt=media&token=1bbeb25b-e1aa-49e2-8752-3e7a6b7b4e52",
    },
    "Advanced AI Crash Course": {
        title: "AI Crash Course Build Pass",
        url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/documents%2F1769087535130_Build_Session.pdf?alt=media&token=8e54fe45-68ec-4000-960b-3ed53623c1eb"
    }
};

function resolveBrochure(course?: string | null) {
    if (!course) return BROCHURES["AI Digital Marketing"]; // default

    const lower = course.toLowerCase();

    if (lower.includes("product management")) return BROCHURES["Product Management"];
    if (lower.includes("generative ai") || lower.includes("automation")) return BROCHURES["Generative AI"];
    if (lower.includes("data analytics") || lower.includes("data analyst")) return BROCHURES["Data Analytics"];
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

const programOptions = [
    "AI Product Management",
    "Generative AI",
    "AI Digital Marketing",
    "AI Data Analytics",
];

export default function AllProgramsHero() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        experience: "",
        education: "",
        program: "",
    });

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openBrochure = (courseName?: string | null) => {
        try {
            const { url } = resolveBrochure(courseName);
            const a = document.createElement("a");
            a.href = url;
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

        if (!formData.program) {
            toast.error("Please select a program");
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
                course: formData.program,
                work_experience: formData.experience,
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
            };

            await createEnrollment(submissionData);

            const broucherData = resolveBrochure(formData.program);

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
            trackingFormData.append("course", formData.program);
            trackingFormData.append("workExperience", formData.experience);
            await trackFormSubmission(trackingFormData);

            toast.success("Enrollment submitted successfully! Opening brochure...");
            openBrochure(formData.program);

            setTimeout(() => {
                navigate("/thank-you", { state: { courseName: formData.program, fromAllPrograms: true } });
            }, 800);

        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit enrollment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-black overflow-hidden py-20 px-4">
            {/* Background Images/Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Yellow glow top left */}
                <img
                    src="/all-programs-amit-camp/yellow.webp"
                    alt=""
                    className="absolute -top-20 -left-20 w-[600px] h-auto  mix-blend-screen"
                />
                {/* Blue glow bottom right */}
                <img
                    src="/all-programs-amit-camp/blue.webp"
                    alt=""
                    className="absolute -bottom-20 -right-20 w-[800px] h-auto opacity-30 md:opacity-40 mix-blend-screen"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 items-center py-20 relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-2 relative"
                >
                    {/* Background Vector Image */}
                    <div className="absolute -top-20 -left-20 w-full h-full -z-10 opacity-60 pointer-events-none">
                        <img
                            src="/all-programs-amit-camp/Vector.png"
                            alt=""
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <h2 className="text-[#3B82F6] font-bold text-4xl mb-4">
                        India's #1 AI Upskilling Programs
                    </h2>
                    <h1 className="text-white text-4xl leading-tight mb-8">
                        For Working Professionals,<br />
                        Founders and Freshers
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                        Mentor-led, cohort-based online AI programs for working professionals, founders, and freshers.
                        Upskill in AI product management, generative AI & AI automation, AI data analytics, and AI digital marketing.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12 max-w-[500px]">
                        {programOptions.map((program, idx) => (
                            <motion.div
                                key={program}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className={`px-6 py-2 rounded-full border text-sm font-semibold cursor-pointer transition-all
                  ${idx === 0 ? "border-blue-500/50 bg-blue-500/10 text-blue-400" : ""}
                  ${idx === 1 ? "border-orange-500/50 bg-orange-500/10 text-orange-400" : ""}
                  ${idx === 2 ? "border-green-500/50 bg-green-500/10 text-green-400" : ""}
                  ${idx === 3 ? "border-purple-500/50 bg-purple-500/10 text-purple-400" : ""}
                `}
                            >
                                {program}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="inline-flex items-center gap-[10px] px-6 py-3 rounded-[24px] text-gray-300 text-sm md:text-base whitespace-nowrap"
                        style={{
                            height: '48px',
                            background: 'linear-gradient(180deg, #1F2D3E 0%, #101720 50%, #1F2D3E 100%) padding-box, linear-gradient(90deg, #1F2D3E 0%, #1E2C3D 2.17%, #101720 50%, #1E2B3C 96.14%, #1F2D3E 100%) padding-box, linear-gradient(90.79deg, #0C3F8E 13.4%, #072554 86.4%) border-box',
                            border: '1px solid transparent',
                            boxShadow: '2px 2px 8px 0px #1A71F580'
                        }}
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[#3B82F6]" />
                            Cohorts fill fast
                        </span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[#3B82F6]" />
                            No prior coding required
                        </span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[#3B82F6]" />
                            Hands-on projects
                        </span>
                    </motion.div>
                </motion.div>

                {/* Right Content - Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full"
                >
                    <div className="bg-[#0E0E0E4D] border border-[#1A71F54D] rounded-[32px] p-8 md:p-10 shadow-[0px_0px_15px_0px_#1B71F64D] backdrop-blur-[50px]">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    required
                                    className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input
                                    type="text"
                                    placeholder="Designation"
                                    className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                    value={formData.designation}
                                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative">
                                    <Award className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <select
                                        className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    >
                                        <option value="" className="bg-black">Experience</option>
                                        <option value="0-1" className="bg-black">0-1 yrs</option>
                                        <option value="1-3" className="bg-black">1-3 yrs</option>
                                        <option value="3-5" className="bg-black">3-5 yrs</option>
                                        <option value="5+" className="bg-black">5+ yrs</option>
                                    </select>
                                </div>
                                <div className="relative">
                                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <select
                                        className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                                        value={formData.education}
                                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                    >
                                        <option value="" className="bg-black">Education</option>
                                        <option value="Undergraduate" className="bg-black">Undergraduate</option>
                                        <option value="Graduate" className="bg-black">Graduate</option>
                                        <option value="Postgraduate" className="bg-black">Postgraduate</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative">
                                <select
                                    required
                                    className="w-full bg-[#141920] border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                                    value={formData.program}
                                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                                >
                                    <option value="" className="bg-black">Program Interested</option>
                                    {programOptions.map(opt => (
                                        <option key={opt} value={opt} className="bg-black">{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Subtle glow underneath */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
