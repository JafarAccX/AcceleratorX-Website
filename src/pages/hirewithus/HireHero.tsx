import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Wallet, Shield, Zap, BarChart3 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// GradientText Component
function GradientText({ children, className = "" }) {
  return (
    <span
      className={`bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

// EnquiryForm Component
function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companyDomain: "",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("enquiries").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          company_domain: formData.companyDomain,
          project_details: formData.projectDetails,
        },
      ]);

      if (error) throw error;

      setSuccessMessage(
        "Enquiry submitted successfully! We will contact you shortly."
      );
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        companyDomain: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error.message);
      setSuccessMessage("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Success Message */}
      {successMessage && (
        <p
          className={`text-center ${
            successMessage.includes("successfully")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {successMessage}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
            placeholder="john@example.com"
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
            placeholder="Your Company Name"
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label
            htmlFor="companyDomain"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Company Domain
          </label>
          <input
            type="text"
            id="companyDomain"
            required
            value={formData.companyDomain}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
            placeholder="e.g., Software Engineer"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <label
          htmlFor="projectDetails"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Company Details
        </label>
        <textarea
          id="projectDetails"
          required
          rows={4}
          value={formData.projectDetails}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
          placeholder="Tell us about your requirements..."
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Send className="w-5 h-5 mr-2" />
          {loading ? "Submitting..." : "Submit Enquiry"}
        </motion.button>
      </motion.div>
    </motion.form>
  );
}

// FinanceCard Component
function FinanceCard({ icon: Icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl h-full">
        <div className="flex flex-col space-y-4">
          <Icon className="w-8 h-8 text-indigo-400" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// HireWithUsPage Component
export default function HireWithUsPage() {
  const features = [
    {
      icon: Wallet,
      title: "Comprehensive Curriculum",
      description:
        "A meticulously designed syllabus encompassing industry sessions, case studies, and essential tools to equip you for a successful product management career.",
    },
    {
      icon: Shield,
      title: "Expert Mentorship",
      description:
        "Guidance from seasoned professionals and mentors to navigate the complexities of product management roles.",
    },
    {
      icon: Zap,
      title: "Career Support",
      description:
        "Dedicated assistance in interview preparation, placements, and post-completion support to ensure a smooth transition into your desired role.",
    },
    {
      icon: BarChart3,
      title: "Industry Connections",
      description:
        "Access to a network of companies and professionals through the AcceX Squad, enhancing your industry exposure and opportunities.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <GradientText>Hire</GradientText> best talents with AcceleratorX
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Be the part of hiring mine and skilled individuals for your teams.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FinanceCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center space-y-12"
          >
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-4 text-sm text-gray-500">or</span>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gradient-to-r from-indigo-900/10 to-purple-900/10 backdrop-blur-xl border border-white/5 rounded-2xl p-8">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold mb-4">
                    <GradientText>Let's get to know each other</GradientText>
                  </h2>
                  <p className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
                <EnquiryForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
