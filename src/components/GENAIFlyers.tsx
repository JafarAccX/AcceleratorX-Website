import React, { useState } from "react";
import { Sparkles, Send, Cpu } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { useCourseContext } from "../context/courseContext";
import { SEO } from "./SEO";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function GENAIFlyers() {
  const { selectedCourse } = useCourseContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "GenAI-Flyers",
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

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        designation: "",
        workExperience: "",
        course: selectedCourse || "GenAI-Flyers",
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
    <>
      <SEO />
      <div className="min-h-screen bg-[#001219] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 cyber-grid"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300 rounded-full opacity-10 blur-xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-12 relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-cyan-500/10 rounded-full text-cyan-300 font-medium text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Limited Time Early Access
                </div>

                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl"></div>
                    <Cpu className="w-10 h-10 text-cyan-400 p-2 logo-glow animate-spin-slow relative z-10" />
                  </div>
                  <div className="flex flex-col">
                    <img src="/redesign/logo-no-bg.webp" alt="company logo - professional certificate in product management online" className="w-48 h-auto" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Master the Art of <span className="text-cyan-300">Generative AI</span> in 14 Weeks
                </h1>

                <p className="text-lg text-gray-300 max-w-xl">
                  Join the AI revolution with our comprehensive course. Learn to create, innovate, and transform your
                  ideas into reality.
                </p>

                {/* Added Benefits Section */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30">
                    <h3 className="text-cyan-300 font-semibold mb-1">Industry-Led Curriculum</h3>
                    <p className="text-xs text-gray-400">Designed by AI experts from top tech companies</p>
                  </div>
                  <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30">
                    <h3 className="text-cyan-300 font-semibold mb-1">Hands-on Projects</h3>
                    <p className="text-xs text-gray-400">Build real-world AI applications</p>
                  </div>
                  <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30">
                    <h3 className="text-cyan-300 font-semibold mb-1">1:1 Mentorship</h3>
                    <p className="text-xs text-gray-400">Personal guidance from industry experts</p>
                  </div>
                  <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30">
                    <h3 className="text-cyan-300 font-semibold mb-1">Job-Ready Skills</h3>
                    <p className="text-xs text-gray-400">Learn the most in-demand AI tools</p>
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Master These Tools</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30">
                      <h4 className="text-cyan-300 text-xs font-medium mb-1.5">LLM & Foundation</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Chat-GPT & Claude 2</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">LangChain</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Hugging Face</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30">
                      <h4 className="text-cyan-300 text-xs font-medium mb-1.5">Image & Vision</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">DALL-E & Midjourney</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Stable Diffusion</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Vision APIs</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30">
                      <h4 className="text-cyan-300 text-xs font-medium mb-1.5">Development</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Python & FastAPI</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Vector DBs</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Streamlit</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30">
                      <h4 className="text-cyan-300 text-xs font-medium mb-1.5">Deployment</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">AWS & Azure AI</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">Docker</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">MLOps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-5 bg-[#012a36]/50 backdrop-blur-sm p-6 rounded-xl retro-shadow border border-cyan-900/50 sticky top-4">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white mb-2">Start Your AI Journey Today</h2>
                <p className="text-gray-400 text-sm">Fill out the form below to secure your spot</p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-style py-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-style py-2"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-style py-2"
                    placeholder="Enter phone number"
                    pattern="[0-9]{10}"
                  />
                </div>

                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-300 mb-1">
                    Education Level
                  </label>
                  <input
                    type="text"
                    id="education"
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="input-style py-2"
                    placeholder="Highest qualification"
                  />
                </div>

                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-300 mb-1">
                    Current Role
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    className="input-style py-2"
                    placeholder="Your designation"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="workExperience" className="block text-sm font-medium text-gray-300 mb-1">
                    Work Experience (in years)
                  </label>
                  <input
                    type="text"
                    id="workExperience"
                    name="workExperience"
                    required
                    value={formData.workExperience}
                    onChange={handleChange}
                    className="input-style py-2"
                    placeholder="Years of experience"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white rounded-lg py-2.5 font-medium hover:bg-cyan-600 transition-colors"
                >
                  Secure Your Spot Now <Send className="w-4 h-4 inline-block ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GENAIFlyers;
