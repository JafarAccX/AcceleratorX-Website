import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Send,
  Briefcase,
  Trophy,
  Users,
  Calendar,
  Clock,
  Star,
  Building,
  DollarSign,
  GraduationCap,
  Info,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { useCourseContext } from "../context/courseContext";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function DMFlyers() {
  const { selectedCourse } = useCourseContext();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "DM_Flyers",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(now);
      target.setDate(target.getDate() + 3); // 3 days from now
      target.setHours(23, 59, 59, 999);

      const diff = target.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        designation: "",
        workExperience: "",
        course: selectedCourse || "DM_Flyers",
      });

      toast.success("Thank you for enrolling! We'll contact you soon.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-left space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 rounded-full text-orange-300 font-medium text-sm">
                <Star className="w-4 h-4 mr-2" />
                INDUSTRY RECOGNIZED CERTIFICATION
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Master Digital Marketing & Performance Marketing with{" "}
                <span className="text-orange-300">AI-Powered Strategies</span>
              </h1>

              <p className="text-base text-blue-100 max-w-xl">
                Learn advanced strategies, automation, and data-driven decision-making to optimize campaigns and drive
                business growth.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:border-orange-500/30 transition-all">
                  <DollarSign className="w-5 h-5 text-orange-400 mb-1" />
                  <h3 className="text-white text-sm font-semibold">Efficiency Boost</h3>
                  <p className="text-blue-200 text-sm">40%</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:border-orange-500/30 transition-all">
                  <Users className="w-5 h-5 text-orange-400 mb-1" />
                  <h3 className="text-white text-sm font-semibold">Global Ad Spend</h3>
                  <p className="text-blue-200 text-sm">$700B</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:border-orange-500/30 transition-all">
                  <Clock className="w-5 h-5 text-orange-400 mb-1" />
                  <h3 className="text-white text-sm font-semibold">AI Adoption</h3>
                  <p className="text-blue-200 text-sm">83%</p>
                </div>
              </div>

              {/* Who Should Enroll */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Who Should Enroll?</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20">
                    <Briefcase className="w-5 h-5 text-orange-400 mb-1" />
                    <h4 className="text-white text-sm font-medium mb-1">Marketing Professionals</h4>
                    <p className="text-xs text-blue-200">Level up your career with AI-powered marketing strategies</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20">
                    <Users className="w-5 h-5 text-orange-400 mb-1" />
                    <h4 className="text-white text-sm font-medium mb-1">Freelancers</h4>
                    <p className="text-xs text-blue-200">
                      Enhance your service offerings with cutting-edge marketing tools
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20">
                    <GraduationCap className="w-5 h-5 text-orange-400 mb-1" />
                    <h4 className="text-white text-sm font-medium mb-1">Students</h4>
                    <p className="text-xs text-blue-200">Start your career with the most in-demand marketing skills</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-blue-500/20">
                    <Building className="w-5 h-5 text-orange-400 mb-1" />
                    <h4 className="text-white text-sm font-medium mb-1">Business Owners</h4>
                    <p className="text-xs text-blue-200">Scale your business with data-driven marketing strategies</p>
                  </div>
                </div>
              </div>

              {/* Tools Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Master These Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <h4 className="text-orange-300 font-medium text-sm">Paid Advertising</h4>
                    <div className="space-y-1">
                      {["Google Ads", "Meta Ads", "Adzooma"].map((tool) => (
                        <div key={tool} className="flex items-center space-x-2 text-blue-200 text-xs">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-orange-300 font-medium text-sm">SEO & Content</h4>
                    <div className="space-y-1">
                      {["SEMRush", "Surfer SEO", "Jasper AI"].map((tool) => (
                        <div key={tool} className="flex items-center space-x-2 text-blue-200 text-xs">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-orange-300 font-medium text-sm">Analytics</h4>
                    <div className="space-y-1">
                      {["Google Analytics 4", "Tableau", "IBM Watson"].map((tool) => (
                        <div key={tool} className="flex items-center space-x-2 text-blue-200 text-xs">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 sticky top-4">
            <div className="mb-4">
              <div className="bg-orange-500/20 text-orange-300 text-sm font-medium px-3 py-1 bg-orange-500/20 rounded-full inline-flex items-center mb-3">
                <Sparkles className="w-4 h-4 mr-2" />
                Early Bird Offer - Save ₹10,000
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">Begin Your Digital Marketing Journey</h2>
              <p className="text-blue-200 text-sm">Limited seats available for next cohort</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
                  placeholder="Your phone number"
                  pattern="[0-9]{10}"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-blue-200 mb-2">
                  Education Level
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
                  placeholder="Highest qualification"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-blue-200 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
                  placeholder="Your designation"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="workExperience" className="block text-sm font-medium text-blue-200 mb-2">
                  Work Experience (in years)
                </label>
                <input
                  type="text"
                  id="workExperience"
                  name="workExperience"
                  required
                  value={formData.workExperience}
                  onChange={handleChange}
                  className="w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
                  placeholder="Years of experience"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Enroll Now - Early Bird Offer</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Contact Information */}
              <div className="md:col-span-2 mt-4 space-y-3">
                <div className="text-center text-sm text-blue-200">
                  For enquiries call: <span className="text-orange-300">9916859555</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DMFlyers;
