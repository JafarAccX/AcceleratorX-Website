import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useCourseContext } from "../context/courseContext";
import toast from "react-hot-toast";
import { trackFormSubmission, getUTMDataForDB } from "../utils/metaPixel";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const whatsappSerriApi = import.meta.env.VITE_WHATSAPP_SERRI_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

const daBroucher = {
  title: "AI Powered Data Analytics",
  url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AI%20Powered%20DA%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FJIFBvd2VyZWQgREEgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzQ2Mjc3MTU1LCJleHAiOjE4NzI0MjExNTV9.NWSk8RPs_nwupsr5Wfu6-EGpUzFFaVPrMKOVZmICPgw",
};

const genAiBroucher = {
  title: "Generative AI",
  url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkucGRmIiwiaWF0IjoxNzQ2NDQwMTE0LCJleHAiOjE4MDk1MTIxMTR9.AFFhiMscFVvpzecvbkax-r6zDxugIz2LPmabyvm9m7o",
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
  try {
    console.log(" Sending WhatsApp message to:", phone, name);
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

    //       // console.log('WhatsApp message sent successfully!');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10 || formData.phone.startsWith("0")) {
      toast.error("Please enter a valid 10-digit phone number that doesn't start with 0");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // Get UTM data
      const utmData = getUTMDataForDB();

      const { data: existingEnrollment } = await supabase
        .from("enrollments")
        .select("*")
        .eq("phone_number", formData.phone)
        .eq("course", formData.course);

      console.log("Existing enrollment data:", existingEnrollment);

      // throw existing enrollment error
      if (existingEnrollment && existingEnrollment.length > 0) {
        toast.error("You have already enrolled for this course.");
        throw new Error("User already enrolled for this course.");
      }

      // Store enrollment data
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
          course: formData.course,
          work_experience: formData.workExperience,
          designation: formData.designation,
          // UTM and tracking data
          utm_source: utmData.utm_source,
          utm_medium: utmData.utm_medium,
          utm_campaign: utmData.utm_campaign,
          utm_term: utmData.utm_term,
          utm_content: utmData.utm_content,
          referrer: utmData.referrer,
          landing_page_url: utmData.full_url,
          fbclid: utmData.fbclid,
          gclid: utmData.gclid,
          ttclid: utmData.ttclid,
          msclkid: utmData.msclkid,
        },
      ]);

      if (error) {
        if (error.code === "23505") {
          toast.error("You have already enrolled with this email address");
        } else {
          toast.error("Failed to submit enrollment. Please try again.");
        }
        console.error("Error submitting form:", error);
        return;
      }

      //courses available -- Generative AI, Data Analytics, Product Management
      const broucherData = selectedCourse === "Data Analytics" ? daBroucher : genAiBroucher;

      await sendWhatsAppMessage({
        phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
        name: formData.name,
        broucher: broucherData,
      });

      // Send to Meta Conversion API
      await trackFormSubmission(formData);

      if (onSubmit) onSubmit();

      // Navigate after a brief delay
      setTimeout(() => {
        onClose();
        navigate("/thank-you", { state: { courseName: formData.course } });
      }, 1000);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error("Error submitting form:", error);
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
          <div className="relative w-full max-w-md mx-auto mt-auto md:mt-0 bg-gray-800/95 rounded-xl shadow-xl overflow-y-auto md:my-6 ">
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
                <form onSubmit={handleSubmit} className="p-4 space-y-3">
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
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

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
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

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <div className="flex">
                        <span className=" bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm">
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
                            const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData({ ...formData, phone: sanitizedValue });
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="designation" className="block text-sm font-medium text-gray-300 mb-1">
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

                    {/* <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Course
                      </label>
                      <select
                        id="course"
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-2 py-1.5 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        value={formData.course}
                        onChange={(e) =>
                          setFormData({ ...formData, course: e.target.value })
                        }
                      >
                        <option value="">Select</option>
                        {courseOptions.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div> */}
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
