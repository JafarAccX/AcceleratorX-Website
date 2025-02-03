import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MessageCircleHeart } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useCourseContext } from "../context/courseContext";
import { useLocation } from "react-router-dom";
import { trackFormSubmission } from "../utils/metaPixel";
import { shouldShowChatWidget } from "../utils/chatWidgetUtils";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { selectedCourse, setSelectedCourse } = useCourseContext();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for button disabling
  const isHomePage = location.pathname === "/";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
  });

  useEffect(() => {
    // Show chat widget after 3 seconds on course pages
    if (location.pathname.includes("/courses/")) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Update form course when selectedCourse changes
    if (!isHomePage && selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse, isHomePage]);

  // Check if chat widget should be shown
  if (!shouldShowChatWidget(location.pathname)) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button during submission

    // If on homepage, update the selected course
    if (isHomePage) {
      setSelectedCourse(formData.course);
    }

    try {
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
          course: isHomePage ? formData.course : selectedCourse || "Unknown", // Fallback if selectedCourse is null
        },
      ]);

      if (error) throw error;

      // Track form submission with Meta Pixel after successful submission
      trackFormSubmission({
        ...formData,
        course: isHomePage ? formData.course : selectedCourse || "Unknown"
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", education: "", course: "" });
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again."); // Provide user feedback
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918884288277`, "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-20 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)]">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <MessageCircleHeart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Chat with AcceX</h3>
                      <p className="text-sm text-blue-100/80">Response time: ~10 mins</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                      {/* Name Input */}
                      <div>
                        <input
                          type="text"
                          required
                          className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-r-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => {
                            const sanitizedValue = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                            setFormData({
                              ...formData,
                              phone: sanitizedValue,
                            });
                          }}
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <input
                          type="email"
                          required
                          className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      {/* Course Selection */}
                      {isHomePage && (
                        <select
                          required
                          className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                          value={formData.course}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              course: e.target.value,
                            })
                          }
                        >
                          <option value="" hidden>Select Course</option>
                          <option value="Product Management">Product Management</option>
                          <option value="Data Analytics">Data Analytics</option>
                          <option value="No-Code Program">No-Code Program</option>
                        </select>
                      )}

                      {/* Education Level */}
                      <select
                        required
                        className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                        value={formData.education}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            education: e.target.value,
                          })
                        }
                      >
                        <option value="" hidden>Education Level</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="PhD">PhD</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-4 py-3 font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 flex items-center justify-center gap-2 ${
                          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                        <Send className="h-4 w-4" />
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={handleWhatsApp}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-emerald-500 text-white rounded-xl px-4 py-3 font-medium hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <MessageCircleHeart className="h-4 w-4" />
                        Chat on WhatsApp
                      </motion.button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <svg
                        className="h-7 w-7 text-emerald-500"
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
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      Thanks for reaching out!
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      We'll get back to you within 10 minutes
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
