import React from "react";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import WSForm from "../workshop/WSForm";

const WSHeroDM = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-green-500/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6 flex justify-center">
          <div className="w-40 md:w-48 relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">
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
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 mt-24 md:mt-28">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="animate-pulse w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                <span className="text-blue-400 text-sm font-medium">Live Masterclass</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Performance Marketing Masterclass
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  <span className="text-white">Topic: </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    How to Run Ads Effectively
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
                Learn how to run high-converting ads with proven strategies! 🚀 Join our exclusive workshop and master the art of audience targeting, ad creatives, budgeting, and optimization to maximize your ROI. Perfect for marketers, entrepreneurs, and business owners looking to scale their growth through effective advertising.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { label: "Duration", value: "2 Hours" },
                  { label: "Date", value: "Feb 16" },
                  { label: "Time", value: "4:00 PM" },
                  { label: "Level", value: "All Levels" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="block lg:hidden pt-4">
                <div className="relative inline-flex group/btn">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                  <button 
                    onClick={() => {
                      const form = document.getElementById('workshop-form');
                      if (form) {
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 rounded-lg leading-none hover:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                      Reserve Your Spot
                    </span>
                    <svg
                      className="ml-3 w-5 h-5 text-white group-hover/btn:text-blue-50 transition-all transform group-hover/btn:translate-x-1"
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

            {/* Form Section - Mobile */}
            <div className="block lg:hidden">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                <WorkshopProvider>
                  <WSForm />
                </WorkshopProvider>
              </div>
            </div>
          </div>

          {/* Form Section - Desktop */}
          <div className="hidden lg:block lg:w-5/12">
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl sticky top-24">
              <WorkshopProvider>
                <WSForm />
              </WorkshopProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSHeroDM;
