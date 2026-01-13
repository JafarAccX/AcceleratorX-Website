import WSFormFree from "../workshopGENB/WSFormFree";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { FaCalendarAlt, FaClock, FaLevelUpAlt, FaUserGraduate } from "react-icons/fa";

const WSHeroGEND = () => {
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
            <img src="/redesign/logo-bg-black.webp" alt="company logo - professional certificate in product management online" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Pre-title */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 font-medium text-sm">Hands-on AI Workshop</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100">
                Master LLM Models & Fine-Tuning
                <br />
                <span className="text-yellow-400">Train AI Models That Understand You</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 max-w-xl">
              Learn how to customize and fine-tune Large Language Models (LLMs) for your own use cases — no deep ML background needed.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              In this hands-on workshop, you'll build and fine-tune an LLM step-by-step, test it on real data, and deploy it instantly. No heavy theory. Just practical learning and real-world AI implementation.
            </p>

            {/* Workshop Info Tag */}
            <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <div className="text-yellow-400 text-sm font-medium">Free Live Workshop – Master LLM Fine Tuning</div>
              <div className="block sm:hidden animate-pulse">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" />
                </svg>
              </div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                {
                  icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                  label: "Date",
                  value: "11th Nov 2025",
                },
                {
                  icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                  label: "Time",
                  value: "7:00 PM",
                },
                { icon: <FaLevelUpAlt className="text-cyan-400 mb-1" />, label: "Level", value: "All Levels" },
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
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>

              {/* Form Container */}
              <div className="relative bg-gradient-to-b from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl">
                {/* Form Content */}
                <div className="relative">
                  <div className="mb-6 text-center">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Reserve Your Spot Now!</h3>
                      <p className="text-sm text-gray-400">Limited seats available for the next session</p>
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
        </div>
      </div>
    </div>
  );
};

export default WSHeroGEND;
