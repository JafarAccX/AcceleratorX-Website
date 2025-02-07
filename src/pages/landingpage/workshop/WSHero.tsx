import React from "react";
import WSForm from "./WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";

const WSHero = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50/40 pointer-events-none"></div>

      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6 flex justify-center">
          <div className="w-40 md:w-56 relative">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full"></div>
            <div className="relative bg-black backdrop-blur-sm rounded-2xl p-4 shadow-lg">
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
        <div className="relative flex flex-col mt-24 mb-8 md:mt-28 lg:flex-row items-start gap-12">
          {/* Content Section with Image Banner */}
          <div className="w-full lg:max-w-2xl">
            {/* Hero Image as Banner */}
            <div className="relative mb-8 lg:mb-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 bg-white shadow-lg">
                {/* Mobile Image */}
                <div className="relative block lg:hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30 mix-blend-overlay"></div>
                  <img
                    src="/assets/workshopCover/daDesktop.webp"
                    alt="DA Masterclass Mobile Version"
                    className="w-full h-[500px] md:h-[600px] object-contain object-center py-8 px-6"
                  />
                </div>
                {/* Desktop Image */}
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30 mix-blend-overlay"></div>
                  <img
                    src="/assets/workshopCover/daMobile.webp"
                    alt="DA Masterclass"
                    className="w-full h-[600px] xl:h-[700px] object-contain object-center py-10 px-8"
                  />
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Heading Section */}
            <div className="relative z-10 text-left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                  Data Analytics Masterclass
                </h1>
                <h2 className="text-2xl font-semibold text-blue-600">
                  Topic: Masterclass in Dashboarding in Power BI
                </h2>
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/5 blur-xl rounded-xl"></div>
                  <p className="relative text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Masterclass in Dashboarding with Power BI is a hands-on workshop designed to help professionals and data enthusiasts create effective, interactive dashboards. This session will cover the essentials of Power BI, including data modeling, DAX formulas, and visualization techniques to turn raw data into meaningful insights.
                  </p>
                </div>
                
                {/* Button */}
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

            {/* Company Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-12">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl blur-lg transition-all duration-500 group-hover:blur-xl"></div>
                <div className="relative flex items-center gap-4 px-8 py-4 bg-black rounded-2xl shadow-md border border-gray-100">
                  <img
                    src="/assets/companylogo.png"
                    alt="AcceleratorX"
                    className="h-10 md:h-12"
                  />
                  <div className="h-8 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium text-white">Powered by</p>
                    <p className="font-semibold text-white">
                      A2M Technologies PVT. LTD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[500px] relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
            <div className="relative" id="workshop-form">
              <WorkshopProvider>
                <WSForm />
              </WorkshopProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-100/40 to-transparent rounded-tr-full pointer-events-none blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.02] pointer-events-none"></div>
    </div>
  );
};

export default WSHero;
