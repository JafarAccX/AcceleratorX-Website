import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Shield,
  Zap,
  BarChart3,
  Users,
  BookOpen,
  Target,
  Award,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function BecomeAMentor() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    expertise: "",
    motivation: "",
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
          area_of_expertise: formData.expertise,
          motivation: formData.motivation,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        expertise: "",
        motivation: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting mentor application:", error);
    } finally {
      setIsLoading(false);
    }
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
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-20 pb-32"
      >
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Empower the Future Become a Mentor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Join Us in Cultivating Tomorrow's Talent
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
          >
            Apply For Our Mentors Hub
          </motion.button>
        </div>
      </motion.div>
      ={/* Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Benefits of Mentoring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
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
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
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
                  className="w-full px-4 py-3 bg-slate-950  rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
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
                  className="w-full px-4 py-3 bg-slate-950  rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Years Of Experience
              </label>
              <select
                name="expertise"
                className="w-full px-4 py-3 bg-slate-950 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300"
                value={formData.expertise}
                onChange={handleInputChange}
                required
              >
                <option value="" hidden>
                  Select Years{" "}
                </option>
                <option value="1-3 Years">1-3 Year</option>
                <option value="4-7 Years">4-7 Years</option>
                <option value="8-12 Years">8-12 Years</option>
                <option value="13+ Years">13+ Years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Why do you want to mentor?
              </label>
              <textarea
                name="motivation"
                className="w-full px-4 py-3 bg-slate-950  rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600 focus:border-blue-500 transition-colors duration-300 h-32"
                placeholder="Tell us about your motivation..."
                value={formData.motivation}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Application"}
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
