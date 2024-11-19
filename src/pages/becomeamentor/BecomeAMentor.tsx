import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Target, Award } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function BecomeAMentor() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    yearsOfExperience: "",
    designation: "",
    linkedinUrl: "",
    additionalInfo: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("mentors").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          years_of_experience: formData.yearsOfExperience,
          designation: formData.designation,
          linkedin_url: formData.linkedinUrl,
          additional_info: formData.additionalInfo,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        yearsOfExperience: "",
        designation: "",
        linkedinUrl: "",
        additionalInfo: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting mentor application:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("mentor-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build Connections",
      description:
        "Network with other mentors and expand your professional circle.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Share Knowledge",
      description:
        "Make a difference by sharing your expertise with the next generation.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Growth",
      description:
        "Enhance your leadership skills and boost your professional profile.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description:
        "Earn badges and certificates for your mentoring achievements.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,243,0.1),transparent_50%)]"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 mix-blend-screen animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-700/30 rounded-full blur-3xl top-1/2 right-0 mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl bottom-0 left-0 mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-16 lg:pt-20 pb-24 lg:pb-32"
      >
        <div className="max-w-4xl mx-auto py-12 lg:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            Become a Mentor with AcceleratorX
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12">
            Join Us in Cultivating Tomorrow's Talent
          </p>
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
          >
            Apply Here as Mentor
          </motion.button>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-blue-500">
          Benefits of Mentoring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-blue-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white/90">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div id="mentor-form" className="container mx-auto px-4 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-gray-700/50 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
            Apply to Become a Mentor
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Years of Experience
                </label>
                <select
                  name="yearsOfExperience"
                  className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" hidden>Select Experience</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="4-7 Years">4-7 Years</option>
                  <option value="8-12 Years">8-12 Years</option>
                  <option value="13+ Years">13+ Years</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  placeholder="e.g., Senior Product Manager"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                className="w-full px-4 py-3 bg-slate-950/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300 h-32"
                placeholder="Tell us about your expertise and motivation to become a mentor..."
                value={formData.additionalInfo}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-blue-500/20"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Apply Now"}
            </motion.button>
            {isSubmitted && (
              <p className="mt-4 text-sm text-green-500 text-center">
                Application submitted successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default BecomeAMentor;
