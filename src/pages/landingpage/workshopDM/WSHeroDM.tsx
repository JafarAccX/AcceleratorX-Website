import React, { useEffect } from "react";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import WSForm from "../workshop/WSForm";

const WSHeroDM = () => {
  useEffect(() => {
    // Optimize scrolling performance
    document.body.style.overscrollBehavior = 'none';
    document.body.style.overflow = 'overlay';
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('workshop-form');
    if (form) {
      form.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'start' 
      });
    }
  };

  return (
    <div 
      className="relative min-h-screen overflow-x-hidden bg-[#0A0F1C] will-change-transform transform translate-z-0"
      style={{ 
        contain: 'layout',
        willChange: 'scroll-position',
        scrollBehavior: 'smooth'
      }}
    >
      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20 transform will-change-transform">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-[180px] mx-auto relative">
            <div className="relative bg-[#0A0F1C]/90 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-lg">
              <img
                src="/assets/logo/logo.png"
                alt="AcceleratorX Logo"
                className="w-full h-auto transform will-change-transform"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 pt-32 md:pt-36">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              {/* Live Masterclass Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                <span className="text-blue-400 font-semibold text-sm">
                  Live Masterclass
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Performance Marketing Masterclass</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
                How to Run High-Performing Meta Ads for Your Business?
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
                🚀 Want to scale your business with Meta Ads? Join our expert-led workshop and discover step-by-step strategies to create high-converting campaigns!
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                {[
                  { label: "Duration", value: "2 Hours", icon: "⏱️" },
                  { label: "Date", value: "Feb 21", icon: "📅" },
                  { label: "Time", value: "4:00 PM", icon: "🕐" },
                  { label: "Level", value: "All Levels", icon: "🎯" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#0A0F1C] border border-white/10 rounded-lg p-4 transform transition-transform duration-200 hover:scale-105"
                  >
                    <div className="text-xl mb-2">{item.icon}</div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="block lg:hidden pt-6">
                <button 
                  onClick={scrollToForm}
                  className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Reserve Your Spot
                </button>
              </div>
            </div>

            {/* Mobile Form Section */}
            <div className="block lg:hidden" id="workshop-form">
              <div className="bg-[#0A0F1C]/90 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <WorkshopProvider>
                  <WSForm />
                </WorkshopProvider>
              </div>
            </div>
          </div>

          {/* Desktop Form Section */}
          <div className="hidden lg:block lg:w-5/12">
            <div className="sticky top-24" id="workshop-form">
              <div className="bg-[#0A0F1C]/90 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <WorkshopProvider>
                  <WSForm />
                </WorkshopProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSHeroDM;