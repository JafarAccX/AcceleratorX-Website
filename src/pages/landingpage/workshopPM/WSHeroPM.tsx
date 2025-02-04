import React, { useRef } from "react";
import WSForm from "../workshop/WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { ArrowRight, Star } from "lucide-react";

const WSHeroPM = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#0A0F1D] min-h-screen overflow-x-hidden">
      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="w-44 md:w-48">
            <img
              src="/assets/logo/logo.png"
              alt="AcceleratorX Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col mt-24 mb-8 md:mt-28 lg:flex-row items-start gap-12">
          {/* Left Content Section */}
          <div className="w-full lg:max-w-3xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Limited Seats are available
              </span>
            </div>

            {/* Hero Image */}
            <div className="relative mb-8 lg:mb-12">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900/20 to-violet-900/20 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden bg-[#0A0F1D]">
                  <img
                    src="/assets/workshopCover/pmMobile.webp"
                    alt="PM Masterclass Mobile"
                    className="w-full h-[300px] object-contain object-center px-4 block lg:hidden"
                  />
                  <img
                    src="/assets/workshopCover/pmDesktop.webp"
                    alt="PM Masterclass Desktop"
                    className="w-full h-[300px] object-contain object-left px-4 hidden lg:block"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Product Management Masterclass
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Masterclass in AI in Product Management
                </h2>
              </div>

              {/* Register Now Button */}
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 lg:hidden"
              >
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </button>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Unlock the future of product innovation with our comprehensive Masterclass in AI for Product Management. 
                Designed for forward-thinking professionals, this course offers in-depth insights into integrating artificial 
                intelligence seamlessly into your product development lifecycle.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Industry Expert", "Live Sessions", "Hands-on Projects", "Career Support"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className="mt-12">
              <div className="inline-flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-2xl backdrop-blur-sm border border-indigo-500/10">
                <img
                  src="/companylogo.png"
                  alt="AcceleratorX"
                  className="h-12"
                />
                <div className="h-12 w-px bg-indigo-500/20"></div>
                <div>
                  <p className="text-gray-400 text-sm">Powered by</p>
                  <p className="text-white font-medium">A2M Technologies PVT. LTD.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-[400px] w-full" ref={formRef}>
            <div className="bg-gradient-to-b from-indigo-500/10 to-violet-500/10 p-1 rounded-2xl">
              <div className="bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/20">
                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Reserve Your Spot
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                    <p className="text-gray-400 text-sm">Limited seats available</p>
                  </div>
                </div>

                <WorkshopProvider>
                  <WSForm />
                </WorkshopProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>
    </div>
  );
};

export default WSHeroPM;
