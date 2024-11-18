import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MessageCircleHeart } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", education: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="flex flex-col gap-2 justify-center items-center mb-2">
                  <h3 className="text-2xl font-bold text-white">Let's Chat</h3>
                  <p className="text-sm font-semibold text-white">
                    How can we help you?
                  </p>
                </div>

                <div className="mt-4">
                  {!isSubmitted ? (
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
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
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
                              setFormData({
                                ...formData,
                                phone: sanitizedValue,
                              });
                            }}
                          />
                        </div>
                        {formData.phone.length > 0 &&
                          formData.phone.length < 10 && (
                            <p className="text-red-500 text-sm mt-1">
                              Phone number must be 10 digits.
                            </p>
                          )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      {/* Education Level Field */}
                      <div>
                        <label
                          htmlFor="education"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Education Level
                        </label>
                        <select
                          id="education"
                          required
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.education}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              education: e.target.value,
                            })
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

                      {/* Buttons */}
                      <div className="flex justify-between items-center mt-6">
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          className="inline-flex items-center px-3 py-2 border border-green-600 text-sm font-medium rounded-lg text-green-600 bg-gray-700 hover:bg-green-700 hover:text-white transition"
                        >
                          <MessageCircleHeart size={20} className="mr-2" />
                          WhatsApp
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition"
                        >
                          Submit
                          <Send size={16} className="ml-2" />
                        </motion.button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg
                          className="h-6 w-6 text-green-600"
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
                      <h3 className="mt-2 text-sm font-medium text-white">
                        Submission Successful!
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">
                        We'll get back to you soon.
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-4 text-sm text-center text-gray-400">
                  By submitting, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
}
