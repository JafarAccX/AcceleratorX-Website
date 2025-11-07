import WSFormFree from "./WSFormFree";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";

const WSHeroGENE = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
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

      {/* Header Logo */}
      <div className="relative z-20 w-full bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="w-36 md:w-44">
            <img src="/companylogo-new.webp" alt="company logo - professional certificate in product management online" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Pre-title */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 font-medium text-sm"> No Code. No Complexity.
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-blue-100">
               Build Your First RAG Agent in Just 90 Minutes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 max-w-xl">
            Learn how to build Retrieval-Augmented Generation (RAG) agents from scratch. Discover the power of combining vector databases with large language models to create intelligent, context-aware AI applications that can answer questions and generate responses based on your custom data.
            </p>

            {/* Workshop Info Tag */}
            <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
              <div className="text-yellow-400 text-sm font-medium">
                Learn RAG Agent Development for Free – No Experience Needed
              </div>
              <div className="block sm:hidden animate-pulse">
                <button
                  onClick={scrollToForm}
                  className="px-3 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn Automation for Free – No Experience Needed
                </button>
              </div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                { icon: <FaCalendarAlt className="text-indigo-400 mb-1" />, label: "Date", value: "Nov 14th" },
                {
                  icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                  label: "time",
                  value: "7:00 PM",
                },
                { icon: <FaUserGraduate className="text-cyan-400 mb-1" />, label: "Level", value: "All Levels" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#0A1A2A]/80 to-[#061625]/60 backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg"
                >
                  {item.icon}
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-5/12">
            <div className="relative mx-auto max-w-md">
              {/* Simple border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-md"></div>

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

export default WSHeroGENE;
