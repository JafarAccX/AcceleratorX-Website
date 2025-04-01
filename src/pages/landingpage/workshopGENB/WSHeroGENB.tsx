import WSFormFree from "./WSFormFree";
import { WorkshopProvider } from "../../../context/WorkshopContext";

const WSHeroGENB = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error(
        'Form element not found with ID "workshop-registration-form"'
      );
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#050A14] via-[#0A0F1F] to-[#050A14]">
      {/* Simplified background with cleaner pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Accent glow effects */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-green-600/10 rounded-full blur-3xl"></div>

      {/* Header Logo - Simplified */}
      <div className="relative z-20 w-full bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="w-36 md:w-44">
            <img
              src="/assets/companylogo.png"
              alt="AcceleratorX Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section - Simplified */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Pre-title with minimal animation */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 font-medium text-sm">AI Workflow Automation</span>
            </div>

            {/* Main Title - Cleaner with better spacing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-100">
                How to Automate Your Daily Workflow Using Generative AI Tools
              </span>
            </h1>

            {/* Subtitle - More concise */}
            <p className="text-lg text-gray-300 max-w-xl">
              Learn practical strategies to save hours each day by automating repetitive tasks with AI tools that work for you.
            </p>

            {/* Workshop Info Tag */}
            <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg border border-blue-500/20">
              <div className="text-yellow-400 text-sm font-medium">
                2-Hour Live Workshop with Certificate
              </div>
              <div className="block sm:hidden animate-pulse">
                <button
                  onClick={scrollToForm}
                  className="px-3 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xs font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                  Register Now
                </button>
              </div>
            </div>

            {/* CTA Button - Simplified */}
            {/* <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300">
              Register Now for Free
            </button> */}
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-5/12">
            <div className="relative mx-auto max-w-md">
              {/* Simple border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-xl blur-md"></div>

              {/* Form Container */}
              <div className="relative bg-[#111827] p-5 rounded-xl shadow-xl border border-white/5">
                <WorkshopProvider>
                  <div id="workshop-registration-form">
                    <WSFormFree />
                  </div>
                </WorkshopProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSHeroGENB;
