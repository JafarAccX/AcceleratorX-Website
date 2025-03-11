import React from "react";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { ArrowRight, Star } from "lucide-react";
import WSFormFree from "../workshopGENB/WSFormFree";

const WSHeroPM = () => {

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
    <div className="relative bg-[#0A0F1D] min-h-screen overflow-x-hidden">
      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="w-44 md:w-48 relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full"></div>
            <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20">
              <img
                src="/assets/companylogo.png"
                alt="AcceleratorX Logo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 mt-24 md:mt-28">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Limited Seats are available
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                    Product Management Masterclass
                  </span>
                </h1>

                {/* Hero Image */}
                <div className="relative w-full max-w-2xl mx-auto mt-6 lg:mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-xl blur-xl"></div>
                  <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <img
                      src="/assets/workshopCover/pmWebinar.png"
                      alt="Product Management Masterclass"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  UX Designing for Product Management
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
              Unlock the secrets to successful product management with our hands-on masterclass! Learn to navigate every stage—ideation, development, launch, and growth—with proven strategies. Gain expert insights, practical frameworks, and real-world applications to drive innovation, maximize impact, and ensure long-term success. Enroll now and take your product skills to the next level!
              </p>


              <div className="block lg:hidden pt-4">
                <button
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
                >
                  Reserve Your Spot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                {["Industry Expert", "Live Sessions", "Hands-on Projects", "Career Support"].map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 hover:bg-indigo-500/20 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              
            </div>

            {/* Company Section */}
            <div className="flex justify-center w-full">
              <div className="inline-flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-2xl backdrop-blur-sm border border-indigo-500/10">
                <img
                  src="/assets/companylogo.png"
                  alt="AcceleratorX"
                  className="h-12"
                />
              </div>
            </div>

            {/* Form Section - Mobile */}
            <div className="block lg:hidden">
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
<div id="workshop-registration-form">

                  <WorkshopProvider>
                    <WSFormFree />
                  </WorkshopProvider>
</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section - Desktop */}
          <div className="hidden lg:block lg:w-5/12" >
            <div className="bg-gradient-to-b from-indigo-500/10 to-violet-500/10 p-1 rounded-2xl sticky top-24">
              <div className="bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
                <div className="mb-6 space-y-2"  onClick={scrollToForm}>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Reserve Your Spot
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                    <p className="text-gray-400 text-sm">Limited seats available</p>
                  </div>
                </div>

                <WorkshopProvider>
                  <WSFormFree />
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
