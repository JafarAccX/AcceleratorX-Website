import React from "react";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";

const WSHeroDASecond = () => {
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
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0A0F1C] to-[#121a2e]">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-500/5 to-green-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(24,119,242,0.15),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,29,149,0.1),rgba(0,0,0,0))]"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6 flex justify-center md:justify-start">
          <div className="w-40 md:w-48 relative group">
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 rounded-full group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
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
        <div className="flex flex-col lg:flex-row items-center justify-between pt-32 pb-16 lg:pt-40 lg:pb-24 gap-12">
          {/* Main Content Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 mr-2"></span>
                <span className="text-blue-400 text-sm font-medium">
                  Live Masterclass
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300">
                  Data Analytics Workshop
                </span>
              </h1>

              <h2 className="text-2xl font-semibold">
                <span className="text-white">Topic: </span>
                <span className="bg-gradient-to-r from-emerald-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text text-3xl">
                  Build Your Own Data Analyst Bot with GenAI
                </span>
              </h2>

              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Create a powerful GenAI agent that cleans, analyzes, and
                visualizes CSV data with just one command — no coding required!
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="relative inline-flex group/btn">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                  <button
                    onClick={scrollToForm}
                    className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0A0F1C] rounded-lg leading-none border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                      Reserve Your Seat
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

              {/* Enhanced Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  {
                    icon: <FaClock className="text-blue-400 mb-1" />,
                    label: "Duration",
                    value: "2 Hours",
                  },
                  {
                    icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                    label: "Date",
                    value: "April 12, 2025",
                  },
                  {
                    icon: <FaClock className="text-cyan-400 mb-1" />,
                    label: "Time",
                    value: "7:30 PM",
                  },
                  {
                    icon: <FaUserGraduate className="text-yellow-400 mb-1" />,
                    label: "Level",
                    value: "Beginner to Intermediate",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center lg:items-start"
                  >
                    {item.icon}
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold mt-1 group-hover:text-blue-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mentor Badge - Enhanced */}
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-5 py-3 rounded-lg border border-blue-500/20 w-fit mx-auto lg:mx-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 flex-shrink-0">
                  <img
                    src="/assets/mentor/akash.png"
                    alt="Aakash Maurya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-medium">Aakash Maurya</p>
                    <div className="ml-2 px-2 py-0.5 bg-emerald-500/20 rounded-full">
                      <p className="text-emerald-300 text-xs">Mentor</p>
                    </div>
                  </div>
                  <p className="text-emerald-400 text-sm">
                    Senior ML Engineer, Nagarro
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>

              {/* Form container with enhanced styling */}
              <div
                className="relative z-10 bg-black/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl"
                id="workshop-registration-form"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <WorkshopProvider>
                    <WSFormFree />
                  </WorkshopProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes tilt {
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default WSHeroDASecond;
