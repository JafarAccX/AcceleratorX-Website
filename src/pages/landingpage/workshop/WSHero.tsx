import React from "react";
import WSForm from "./WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";

const WSHero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('workshop-registration-form');
    if (form) {
      form.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0F1C]">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-green-500/20"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-30 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.1),rgba(0,0,0,0))]"></div>
      </div>

      {/* Enhanced Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6 flex justify-center">
          <div className="w-40 md:w-48 relative group">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-green-500/40 rounded-full group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <img
                src="/assets/logo/logo.png"
                alt="AcceleratorX Logo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative flex flex-col mt-24 mb-8 md:mt-28 lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Mobile Image - Enhanced for mobile */}
          <div className="w-full block lg:hidden mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-500/30 to-green-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300">
                <img
                  src="/assets/workshopCover/daMobile.png"
                  alt="DA Masterclass Mobile Version"
                  className="w-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Enhanced Register Now Button for Mobile */}
            <div className="flex justify-center mt-4">
              <div className="relative inline-flex group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button 
                  onClick={scrollToForm}
                  className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0A0F1C] rounded-lg leading-none border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                    Register Now
                  </span>
                  <svg
                    className="ml-2 w-5 h-5 text-white group-hover/btn:text-blue-50 transition-colors animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative z-10 text-left mb-8">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                  <span className="animate-ping absolute h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 mr-2"></span>
                  <span className="text-blue-400 text-sm font-medium">Live Masterclass</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300">
                    Data Analytics Masterclass
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  <span className="text-white">Topic: </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 text-transparent bg-clip-text">
                    Leveraging AI in Data Analytics
                  </span>
                </h2>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Unlock the power of AI in data analytics! 🚀 Join our exclusive workshop to learn how to leverage AI-driven insights, automate data processing, and build intelligent dashboards that transform decision-making. Don't just analyze—predict, optimize, and lead with AI-powered analytics!
                </p>

                {/* Enhanced Key Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { label: "Duration", value: "2 Hours" },
                    { label: "Date", value: "Feb 19" },
                    { label: "Time", value: "7:30 PM" },
                    { label: "Level", value: "All Levels" }
                  ].map((item, index) => (
                    <div key={index} className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.label}</p>
                      <p className="text-white font-semibold mt-1 group-hover:text-blue-300 transition-colors">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section - Mobile */}
            <div className="relative z-10 lg:hidden" id="workshop-registration-form">
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <WorkshopProvider>
                  <WSForm />
                </WorkshopProvider>
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Image and Form for Desktop */}
          <div 
            className="w-full lg:w-5/12 space-y-8"
          >
            {/* Desktop Banner Image */}
            <div className="hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-500/30 to-green-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/assets/workshopCover/daMobile.png"
                    alt="DA Masterclass"
                    className="w-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Form Section - Desktop */}
            <div className="hidden lg:block">
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300" id="workshop-registration-form">
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

export default WSHero;
