import React from "react";
import WSForm from "./WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";

const WSHero = () => {
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
        <div className="relative flex flex-col mt-24 mb-8 md:mt-28 lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Mobile Image - Only visible on mobile */}
          <div className="w-full block lg:hidden mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
                <img
                  src="/assets/workshopCover/daDesktop.webp"
                  alt="DA Masterclass Mobile Version"
                  className="w-full object-contain p-4"
                />
              </div>
            </div>
            {/* Register Now Button for Mobile */}
            <div className="flex justify-center mt-4">
              <div className="relative inline-flex group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button 
                  onClick={() => {
                    const form = document.getElementById('workshop-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 rounded-lg leading-none border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                    Register Now
                  </span>
                  <svg
                    className="ml-2 w-5 h-5 text-white group-hover/btn:text-blue-50 transition-colors"
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

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative z-10 text-left mb-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <span className="animate-pulse w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                  <span className="text-blue-400 text-sm font-medium">Live Masterclass</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Data Analytics Masterclass
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                  Topic: Masterclass in Dashboarding in Power BI
                </h2>
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Transform raw data into powerful insights with our comprehensive Power BI masterclass. 
                  Learn to create impactful dashboards that drive business decisions.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { label: "Duration", value: "2 Hours" },
                    { label: "Date", value: "Feb 10" },
                    { label: "Time", value: "7:30 PM" },
                    { label: "Level", value: "All Levels" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section - Only visible on mobile */}
            <div className="relative z-10 lg:hidden">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <WorkshopProvider>
                  <WSForm />
                </WorkshopProvider>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Form for Desktop */}
          <div className="w-full lg:w-5/12 space-y-8">
            {/* Desktop Banner Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/assets/workshopCover/daMobile.webp"
                    alt="DA Masterclass"
                    className="w-full object-contain p-6"
                  />
                </div>
              </div>
            </div>

            {/* Form Section - Only visible on desktop */}
            <div className="hidden lg:block">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
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
