 

import { Globe } from "lucide-react";

const KuppamHeader = () => {

    const scrollToForm = () => {
        const form = document.getElementById("workshop-registration-form");
        if (form) {
          // Add a small delay to ensure the element is properly rendered
          setTimeout(() => {
            form.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }, 10);
        } else {
          // Fallback: try to find the form by data attribute
          const formContainer = document.querySelector('[data-form-container="workshop"]');
          if (formContainer) {
            setTimeout(() => {
              formContainer.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }, 100);
          } else {
            console.error('Form element not found with ID "workshop-registration-form"');
          }
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
              <img src="/assets/companylogo.png" alt="AcceleratorX Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src="/pmbg.jpg" alt="Background" className="w-full h-full object-cover" />
          {/* Darker overlay for better contrast */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8">
            <Globe className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Live Workshop | 3-Hour AI Marathon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            First Ever AI Program In
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            English & Telugu
          </h1>

          <div>
            <button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 min-w-[200px]"
              onClick={scrollToForm}
            >
              Claim your scholorship
            </button>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm" />
      </section>

     
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>
    </div>
  )
}

export default KuppamHeader