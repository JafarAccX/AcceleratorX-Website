import React, { useState } from "react";
import {
  Sparkles,
  Send,
  Briefcase,
  Trophy,
  Users,
  Calendar,
  Clock,
  Star,
  Award,
  Code,
  Target,
  CalendarDays,
  Users2,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { useCourseContext } from "../context/courseContext";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function PMFlyers() {
  const { selectedCourse } = useCourseContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "PM_Flyers",
  });

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
        course: selectedCourse || "PM_Flyers",
      });

      toast.success("Thank you for enrolling! We'll contact you soon.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-300 rounded-full opacity-10 blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 bg-purple-500/20 rounded-full text-purple-300 font-medium text-sm">
                <Star className="w-4 h-4 mr-2" />
                #1 IN EXECUTIVE EDUCATION
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex flex-col">
                  <img
                    src="/companylogo-new.webp"                    alt="AcceleratorX Logo"
                    className="w-48 h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Professional Certificate in{" "}
                <span className="text-purple-300">Product Management</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl">
                Get Certified and Master the fundamentals of product management
                with the most hands-on product management program. Build Your
                Dream Product (BYDP) as part of the program.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Duration</p>
                  <p className="text-purple-200">4 Months</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <Users className="w-6 h-6 text-purple-400 mb-2" />
                  <h3 className="text-white font-semibold">Enrolled</h3>
                  <p className="text-purple-200">50+ this month</p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <h3 className="text-purple-300 font-semibold mb-2">
                    EIE Malta Certificate
                  </h3>
                  <p className="text-sm text-gray-400">
                    Globally recognized certification
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <h3 className="text-purple-300 font-semibold mb-2">
                    Build Your Dream Product
                  </h3>
                  <p className="text-sm text-gray-400">
                    Hands-on product development
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <h3 className="text-purple-300 font-semibold mb-2">
                    1:1 Mentorship
                  </h3>
                  <p className="text-sm text-gray-400">
                    Personal guidance from experts
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <h3 className="text-purple-300 font-semibold mb-2">
                    Job Priority Access
                  </h3>
                  <p className="text-sm text-gray-400">
                    Exclusive career opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 sticky top-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white mb-2">
                Begin Your PM Journey
              </h2>
              <p className="text-gray-400 text-sm">Limited seats available</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="md:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Enter your full name"
                />
              </div>

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
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Your phone number"
                  pattern="[0-9]{10}"
                />
              </div>

              <div>
                <label
                  htmlFor="education"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Education Level
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Highest qualification"
                />
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Current Role
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Your designation"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="workExperience"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Work Experience (in years)
                </label>
                <input
                  type="text"
                  id="workExperience"
                  name="workExperience"
                  required
                  value={formData.workExperience}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Years of experience"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Contact and Trust Indicators */}
              <div className="md:col-span-2 mt-4 space-y-3">
                <div className="text-center text-sm text-blue-200">
                  For enquiries call:{" "}
                  <span className="text-orange-300">9916859555</span>
                </div>
              </div>
            </form>

            {/* Key Features Section */}
            <div className="mt-4 space-y-3">
              <div className="border-t border-blue-500/20 pt-3">
                <h3 className="text-xs font-medium text-orange-300 mb-2">
                  Program Benefits
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    <p className="text-blue-200 text-xs">
                      EIE Malta Certificate
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="w-3.5 h-3.5 text-orange-400" />
                    <p className="text-blue-200 text-xs">
                      Build Your Dream Product
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-3.5 h-3.5 text-orange-400" />
                    <p className="text-blue-200 text-xs">
                      AI PM Specialization
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-3.5 h-3.5 text-orange-400" />
                    <p className="text-blue-200 text-xs">
                      Growth PM Specialization
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-500/20 pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users2 className="w-3.5 h-3.5 text-orange-400" />
                    <p className="text-blue-200 text-xs">
                      50+ Enrolled this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMFlyers;
