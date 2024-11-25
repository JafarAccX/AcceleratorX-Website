import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MessageCircleHeart } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useCourseContext } from "../context/courseContext";
import { useLocation } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { selectedCourse } = useCourseContext();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
          course: selectedCourse,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", education: "" });
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918884288277`, "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-2 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] max-h-[85vh] overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center relative">
                      <MessageCircleHeart className="h-6 w-6 text-white" />
                      <span className="absolute top-1 right-1 h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">Let's Chat</h3>
                      <p className="text-blue-100/80 text-sm mt-0.5">How can we help you?</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl p-2 hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5 text-white/80" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-700 bg-gray-800/50 text-gray-300">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-r-xl px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={(e) => {
                              const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 10);
                              setFormData({ ...formData, phone: sanitizedValue });
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Education Level
                        </label>
                        <select
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                          value={formData.education}
                          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        >
                          <option value="" hidden>Select your education</option>
                          <option value="Bachelor's">Bachelor's</option>
                          <option value="Master's">Master's</option>
                          <option value="PhD">PhD</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl px-4 py-2.5 font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        Submit Form
                        <Send className="h-4 w-4" />
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        onClick={handleWhatsApp}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl px-4 py-2.5 font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <MessageCircleHeart className="h-4 w-4" />
                        Chat on WhatsApp
                      </motion.button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500">
                      <svg
                        className="h-6 w-6 text-white"
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
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      Submission Successful!
                    </h3>
                    <p className="mt-1 text-gray-300">
                      We'll get back to you soon.
                    </p>
                  </div>
                )}

                <p className="text-xs text-center text-gray-400 mt-2">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-[6rem] right-6 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="flex items-center gap-3 bg-white/90 backdrop-blur-lg pl-4 pr-3 py-2.5 rounded-xl shadow-lg"
            >
              <motion.p 
                className="text-sm font-medium text-blue-600 whitespace-nowrap"
                animate={{ 
                  opacity: [0.8, 1, 0.8] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                AcceX Buddy is here
              </motion.p>
              
              <motion.button
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-lg bg-white/10 relative"
              >
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              </motion.button>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating chat button when chat is open */}
      {isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-200 relative"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </motion.button>
      )}
    </>
  );
}
