import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useCourseContext } from "../context/courseContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createEnrollment } from "../api/enrollmentApi";
import { trackFormSubmission, getUTMDataForDB } from "../utils/metaPixel";

const whatsappSerriApi = import.meta.env.VITE_WHATSAPP_SERRI_API_KEY;

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

// Central brochure map (updated to use provided Firebase Storage links)
const BROCHURES: Record<string, { title: string; url: string }> = {
  "AI Digital Marketing": {
    title: "AI Digital Marketing Syllabus",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758802254913_notes_new_nano_19th_Sept%2C_2025-compressed.pdf?alt=media&token=42c3ad1b-7519-461b-aad6-ea9f4f5c7be7",
  },
  "Product Management": {
    title: "Product Management",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1762861871432_notes_AcceleratorX_PM_Brochure-compressed.pdf?alt=media&token=f21f29c9-522a-4d26-a948-2ab6f19a4760",
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
};

// Helper to resolve brochure by (possibly varied) course name
function resolveBrochure(course?: string | null) {
  if (!course) return BROCHURES["AI Digital Marketing"]; // default
  // exact match first
  if (BROCHURES[course]) return BROCHURES[course];
  const lower = course.toLowerCase();
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
  try { 
    const response = await fetch("https://backend.api-wa.co/campaign/serri-india/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: whatsappSerriApi,
        campaignName: "course_reg_da_new",
        destination: phone,
        userName: name,
        templateParams: ["$FirstName"],
        source: "registration form",
        media: {
          url: broucher.url,
          filename: broucher.title,
        },
        paramsFallbackValue: {
          FirstName: "user",
          value: "fallback value",
        },
        buttons: [],
        carouselCards: [],
        location: {},
        attributes: {},
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("WhatsApp API error:", err);
      throw new Error("WhatsApp message sending failed");
    }

  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
}

export default function EnrollmentModal({ isOpen, onClose, onSubmit }: EnrollmentModalProps) {
  const { selectedCourse } = useCourseContext();
  const navigate = useNavigate();

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
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // helper to open brochure in new tab
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

    setIsSubmitting(true);

    try {
      const utmData = getUTMDataForDB();
      const submissionData = {
        full_name: formData.name,
        phone_number: formData.phone,
        email: formData.email,
        education_level: formData.education,
        course: formData.course,
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
      };

      await createEnrollment(submissionData);

  const broucherData = resolveBrochure(selectedCourse);

      await sendWhatsAppMessage({
        phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
        name: formData.name,
        broucher: broucherData,
      });

      // Track form submission with Meta Pixel (Conversion API only)
      const trackingFormData = new FormData();
      trackingFormData.append("name", formData.name);
      trackingFormData.append("email", formData.email);
      trackingFormData.append("phone", formData.phone);
      trackingFormData.append("education", formData.education);
      trackingFormData.append("designation", formData.designation);
      trackingFormData.append("course", formData.course || selectedCourse || "");
      trackingFormData.append("workExperience", formData.workExperience);
      await trackFormSubmission(trackingFormData);

      toast.success("Enrollment submitted successfully! Opening brochure...");

      // open brochure after success
      openBrochure(selectedCourse);

      if (onSubmit) onSubmit();

      setTimeout(() => {
        onClose();
        navigate("/thank-you", { state: { courseName: formData.course } });
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
          key="enrollment-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div className="relative w-full max-w-md mx-auto mt-10 md:mt-0 bg-gray-800/95 rounded-xl shadow-xl overflow-y-auto md:my-6 ">
            <div className="h-[85vh] md:h-auto flex flex-col">
              <div className="sticky top-0 bg-gray-800/95 px-4 py-3 border-b border-gray-700 z-10">
                <button
                  onClick={onClose}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex flex-col gap-1 pr-8">
                  <h3 className="text-lg md:text-xl font-bold text-white">Enroll Now</h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {selectedCourse
                      ? `You are enrolling for the ${selectedCourse} course.`
                      : "Start Your Product Management or Data Analytics Journey or No Code Development Journey."}
                  </p>
                </div>
              </div>

              <div className=" shadow-2xl p-6 w-full border border-gray-800/30" id={"course-form"}>
                <form onSubmit={handleSubmit} className="p-4 space-y-3 flex flex-col gap-4">
                  <div className="space-y-3">
                    <div className="flex gap-2 items-center ">
                      <label htmlFor="name" className="block min-w-[100px] text-sm font-medium text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
                        placeholder="Type Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-2 items-center">
                      <label htmlFor="email" className="block min-w-[100px] text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
                        placeholder="Type Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-2 items-center">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <div className="flex">
                        <span className=" bg-transparent text-white px-2 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
                          placeholder="Type Your Phone No"
                          value={formData.phone}
                          onChange={(e) => {
                            const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 12);
                            setFormData({ ...formData, phone: sanitizedValue });
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <label htmlFor="designation" className="block min-w-[100px] text-sm font-medium text-gray-300 mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        id="designation"
                        required
                        className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
                        placeholder="Type Your Designation"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-300 mb-1">
                        Education
                      </label>
                      <select
                        id="education"
                        required
                        className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="PhD">PhD</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="workExperience" className="block text-sm font-medium text-gray-300 mb-1">
                        Experience
                      </label>
                      <select
                        id="workExperience"
                        required
                        className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
                        value={formData.workExperience}
                        onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="0-1">0-1 yrs</option>
                        <option value="1-3">1-3 yrs</option>
                        <option value="3-5">3-5 yrs</option>
                        <option value="5+">5+ yrs</option>
                      </select>
                    </div>
 
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-400 mb-3">
                      By submitting this form, you acknowledge that we collect non-personal campaign data for analytics
                      purposes.
                    </p>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm"
                    >
                      Submit Application
                    </button>
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
