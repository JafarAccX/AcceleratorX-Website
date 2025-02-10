import React, { useState } from "react";
import { Sparkles, Send, Briefcase, Trophy, Users, Calendar, Clock, Star, Building, DollarSign, GraduationCap, Award, Target, Building2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { useCourseContext } from "../context/courseContext";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function DAFlyers() {
  const { selectedCourse } = useCourseContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "DA_Flyers"
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
        course: selectedCourse || "DA_Flyers"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full opacity-10 blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-left space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1.5 bg-yellow-500/20 rounded-full text-yellow-300 font-medium text-sm">
                <Star className="w-4 h-4 mr-2" />
                UNIVERSITY BACKED PROGRAM
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex flex-col">
                  <img
                    src="/assets/companylogo.png"
                    alt="AcceleratorX Logo"
                    className="w-48 h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Master Data Analytics with{" "}
                <span className="text-yellow-300">EIE European Business School Malta</span>
              </h1>

              <p className="text-lg text-purple-100 max-w-xl">
                Unlock your potential with a world-class program designed for ambitious professionals. 
                Backed by the renowned EIE European Business School Malta.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4">
                <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" />
                  <h3 className="text-white text-sm sm:text-base font-semibold">Avg. Salary</h3>
                  <p className="text-purple-200 text-sm sm:text-base">12 LPA</p>
                </div>
                <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" />
                  <h3 className="text-white text-sm sm:text-base font-semibold">Job Openings</h3>
                  <p className="text-purple-200 text-sm sm:text-base">29,120+</p>
                </div>
                <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" />
                  <h3 className="text-white text-sm sm:text-base font-semibold">Duration</h3>
                  <p className="text-purple-200 text-sm sm:text-base">16 Weeks</p>
                </div>
                <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" />
                  <h3 className="text-white text-sm sm:text-base font-semibold">Next Cohort</h3>
                  <p className="text-purple-200 text-sm sm:text-base">25th Jan</p>
                </div>
              </div>

              {/* Tools & Skills */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Tools You'll Master</h3>
                <div className="flex flex-wrap gap-1.5">
                  <div className="bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300">Excel</div>
                  <div className="bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300">SQL</div>
                  <div className="bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300">Tableau</div>
                  <div className="bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300">Power BI</div>
                  <div className="bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300">Python</div>
                  <div className="bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300">Google Analytics</div>
                </div>

                {/* Program Benefits */}
                <div className="mt-4 space-y-2">
                  <div>
                    <h3 className="text-xs font-semibold text-yellow-400 mb-1.5">Program Benefits</h3>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-purple-900/30 p-2 rounded border border-purple-800/30">
                        <div className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-yellow-400" />
                          <div>
                            <p className="text-xs font-medium text-purple-300">EIE Malta Certificate</p>
                            <p className="text-[10px] text-gray-400">Industry-recognized</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-900/30 p-2 rounded border border-purple-800/30">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-yellow-400" />
                          <div>
                            <p className="text-xs font-medium text-purple-300">1:1 Mentorship</p>
                            <p className="text-[10px] text-gray-400">Expert guidance</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-900/30 p-2 rounded border border-purple-800/30">
                        <div className="flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-yellow-400" />
                          <div>
                            <p className="text-xs font-medium text-purple-300">Real Projects</p>
                            <p className="text-[10px] text-gray-400">Industry case studies</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-900/30 p-2 rounded border border-purple-800/30">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-yellow-400" />
                          <div>
                            <p className="text-xs font-medium text-purple-300">Job Support</p>
                            <p className="text-[10px] text-gray-400">Career assistance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 sticky top-4">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Begin Your Data Analytics Journey</h2>
              <p className="text-purple-200 text-sm">
                Limited seats available for next cohort
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-purple-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent"
                  placeholder="Your phone number"
                  pattern="[0-9]{10}"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-purple-200 mb-2">
                  Education Level
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent"
                  placeholder="Highest qualification"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-purple-200 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent"
                  placeholder="Your designation"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="workExperience" className="block text-sm font-medium text-purple-200 mb-2">
                  Work Experience (in years)
                </label>
                <input
                  type="text"
                  id="workExperience"
                  name="workExperience"
                  required
                  value={formData.workExperience}
                  onChange={handleChange}
                  className="w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent"
                  placeholder="Years of experience"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Contact Information */}
              <div className="md:col-span-2 mt-4 space-y-3">
                <div className="text-center text-sm text-purple-200">
                  For enquiries call: <span className="text-yellow-300">9916859555</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DAFlyers;
