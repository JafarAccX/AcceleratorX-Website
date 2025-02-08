import React, { useState } from "react";
import { Sparkles, Send, Cpu } from "lucide-react";

function GENAIFlyers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#001219] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300 rounded-full opacity-10 blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-300 font-medium text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Limited Time Early Access
              </div>

              {/* Simplified Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-xl"></div>
                  <Cpu className="w-12 h-12 text-cyan-400 p-2 logo-glow animate-spin-slow relative z-10" />
                </div>
                <div className="flex flex-col">
                  <img
                    src="/assets/companylogo.png"
                    alt="AcceleratorX Logo"
                    className="w-64 h-auto"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Master the Art of{" "}
              <span className="text-cyan-300">Generative AI</span> in 8 Weeks
            </h1>

            <p className="text-xl text-gray-300 max-w-xl">
              Join the AI revolution with our comprehensive course. Learn to
              create, innovate, and transform your ideas into reality.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#012a36]/50 backdrop-blur-sm p-8 rounded-2xl retro-shadow border border-cyan-900/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="input-style"
                  placeholder="Rahul Gupta"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="input-style"
                  placeholder="rahulgupta@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-style"
                  placeholder="+91 9876543210"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-lg
                         transform transition-all duration-200 hover:scale-[1.02] flex items-center justify-center
                         text-lg retro-shadow-cyan hover:shadow-lg"
              >
                Get Access Now! <Send className="w-5 h-5 ml-2" />
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-400">
              Join 2,00+ professionals already enrolled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GENAIFlyers;
