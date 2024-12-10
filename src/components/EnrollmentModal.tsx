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

const supabase = createClient(supabaseUrl, supabaseKey);

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

export default function EnrollmentModal({
  isOpen,
  onClose,
  onSubmit,
}: EnrollmentModalProps) {
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

    if (formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // Get UTM data
      const utmData = getUTMDataForDB();

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
          msclkid: utmData.msclkid
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/60"
        >
          <div className="relative bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-2 justify-center items-center mb-2">
              <h3 className="text-2xl font-bold text-white">Enroll Now</h3>
              <p className="text-sm font-semibold text-white">
                {selectedCourse
                  ? `You are enrolling for the ${selectedCourse} course.`
                  : "Start Your Product Management or Data Analytics Journey"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rohit Ahuja"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="rohitahuja@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <div className="flex items-center">
                  <span className="bg-gray-700 text-white px-3 py-2 rounded-l-lg border border-gray-600">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-r-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      const sanitizedValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setFormData({ ...formData, phone: sanitizedValue });
                    }}
                  />
                </div>
              </div>

              {/* Education Field */}
              <div>
                <label
                  htmlFor="education"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Highest Education
                </label>
                <select
                  id="education"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.education}
                  onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                  }
                >
                  <option value="">Select Education Level</option>
                  <option value="High School">High School</option>
                  <option value="Bachelors">Bachelor's Degree</option>
                  <option value="Masters">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Work Experience Field */}
              <div>
                <label
                  htmlFor="workExperience"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Work Experience (in years)
                </label>
                <select
                  id="workExperience"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.workExperience}
                  onChange={(e) =>
                    setFormData({ ...formData, workExperience: e.target.value })
                  }
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/* Designation Field */}
              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Current Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Software Engineer"
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                />
              </div>

              <div className="text-xs text-gray-400 mt-2">
                By submitting this form, you acknowledge that we collect non-personal campaign data for analytics purposes.
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
