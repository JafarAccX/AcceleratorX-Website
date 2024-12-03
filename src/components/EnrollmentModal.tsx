import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useCourseContext } from "../context/courseContext";
import toast from "react-hot-toast";
import { trackFormSubmission } from "../utils/metaPixel";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void; // Optional onSubmit callback
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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

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
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
          course: formData.course,
          work_experience: formData.workExperience,
          designation: formData.designation,
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

      // Track form submission with Meta Pixel
      trackFormSubmission(formData);

      setIsSubmitted(true);
      if (onSubmit) onSubmit();
      
      // Navigate after a brief delay
      setTimeout(() => {
        onClose();
        navigate('/thank-you', { state: { courseName: formData.course } });
      }, 1000);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };

  const handleThankYouModalClose = () => {
    setIsThankYouModalOpen(false);
  };

  return (
    <AnimatePresence>
      {/* Enrollment Modal */}
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
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                    placeholder="1234567890"
                    value={formData.phone}
                    onChange={(e) => {
                      const sanitizedValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setFormData({ ...formData, phone: sanitizedValue });
                    }}
                  />
                </div>
                {formData.phone.length > 0 && formData.phone.length < 10 && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number must be 10 digits.
                  </p>
                )}
              </div>

              {/* Education Field */}
              <div>
                <label
                  htmlFor="educationLevel"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Education Level
                </label>
                <select
                  id="educationLevel"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.education}
                  onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                  }
                >
                  <option value="" hidden>
                    Select your education
                  </option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Work Experience Field */}
              <div>
                <label
                  htmlFor="workExperience"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  How many years of work experience do you have?
                </label>
                <input
                  type="number"
                  id="workExperience"
                  min="0"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter years of experience"
                  value={formData.workExperience}
                  onChange={(e) =>
                    setFormData({ ...formData, workExperience: e.target.value })
                  }
                />
              </div>

              {/* Designation Field */}
              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your current designation
                </label>
                <input
                  type="text"
                  id="designation"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write NA if you are a fresher"
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                />
              </div>

              {/* Course Selection Field */}
              {!selectedCourse && (
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Select Course
                  </label>
                  <select
                    id="course"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                  >
                    <option value="" hidden>
                      Choose a course
                    </option>
                    <option value="Product Management">
                      Product Management
                    </option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="No-Code Tool Program">No-Code Tool Program</option>
                  </select>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition mt-6"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}

      {/* Thank You Modal */}
      {isThankYouModalOpen && (
        <motion.div
          key="thank-you-modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/60"
        >
          <div className="relative bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-8 text-center">
            <button
              onClick={handleThankYouModalClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col items-center gap-6">
              {/* Success Icon */}
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Thank You Message */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-300">
                  Your enrollment has been successfully submitted. Our team will contact you shortly.
                </p>
              </div>

              {/* Course Info */}
              <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                <p className="text-gray-300">
                  Enrolled Course:{" "}
                  <span className="text-white font-semibold">{formData.course}</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
