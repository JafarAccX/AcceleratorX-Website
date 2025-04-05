import React from "react";
import { WorkshopProvider } from "../../../context/WorkshopContext";
import { FaCalendarAlt, FaClock, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";

const WSHero = () => {
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
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0B2D45] to-[#072536]">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/patterns/grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-amber-400/10 to-teal-300/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,178,172,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(246,173,85,0.15),rgba(0,0,0,0))]"></div>
        
        {/* Modern abstract data shapes */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? 'rgba(56, 178, 172, 0.3)' : 'rgba(246, 173, 85, 0.3)',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
          
          {/* Data visualization elements */}
          <div className="absolute top-[20%] right-[15%] w-16 h-16 border-4 border-teal-500/20 rounded-lg" style={{animation: 'float-data 8s ease-in-out infinite'}}></div>
          <div className="absolute bottom-[30%] left-[10%] w-12 h-12 border-4 border-amber-500/20 rounded-full" style={{animation: 'float-data 6s ease-in-out infinite', animationDelay: '2s'}}></div>
          <div className="absolute top-[60%] right-[25%] w-8 h-20 border-4 border-teal-400/20 rounded-lg" style={{animation: 'float-data 7s ease-in-out infinite', animationDelay: '1s'}}></div>
        </div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6 flex justify-center md:justify-start">
          <div className="w-40 md:w-48 relative group">
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-teal-500/40 via-amber-400/30 to-teal-300/40 rounded-full group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative bg-[#072536]/90 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-teal-500/20 hover:border-teal-400/30 transition-all duration-300">
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
        <div className="flex flex-col lg:flex-row items-center justify-between pt-32 pb-16 lg:pt-40 lg:pb-24 gap-12 md:gap-8">
          {/* Main Content Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-400/20 border border-amber-500/40 backdrop-blur-sm hover:border-amber-400/50 ">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 mr-2"></span>
                <span className="text-white text-sm font-medium">Live Masterclass</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-amber-100">
                  Advanced Analytics Masterclass
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold">
                <span className="text-white">Topic: </span>
                <span className="bg-gradient-to-r from-teal-400 via-amber-300 to-teal-300 text-transparent bg-clip-text">
                  Still Using Excel? Here's What Top Analysts Are Doing in 2025
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join us for an exclusive masterclass on how leading analysts have moved beyond Excel spreadsheets! 🚀 Discover powerful modern analytics tools and techniques that are transforming data analysis in 2025. Learn how to leverage advanced visualization, automation, and AI-powered solutions to gain deeper insights and make data-driven decisions faster than ever before.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="relative inline-flex group/btn">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                  <button 
                    onClick={scrollToForm}
                    className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#072536] rounded-lg leading-none border border-teal-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10 text-white group-hover/btn:text-teal-50 transition-all">
                      Reserve Your Seat
                    </span>
                    <svg
                      className="ml-2 w-5 h-5 text-white group-hover/btn:text-amber-100 transition-colors animate-pulse"
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
                  { icon: <FaClock className="text-teal-400 mb-1" />, label: "Duration", value: "2 Hours" },
                  { icon: <FaCalendarAlt className="text-amber-400 mb-1" />, label: "Date", value: "April 9th" },
                  { icon: <FaClock className="text-teal-300 mb-1" />, label: "Time", value: "7:30 PM" },
                  { icon: <FaUserGraduate className="text-amber-300 mb-1" />, label: "Level", value: "All Levels" }
                ].map((item, index) => (
                  <div key={index} className="group bg-gradient-to-br from-[#083349]/80 to-[#072536]/60 backdrop-blur-xl rounded-lg p-4 border border-teal-500/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col items-center lg:items-start hover:translate-y-[-2px] hover:shadow-lg">
                    {item.icon}
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.label}</p>
                    <p className="text-white font-semibold mt-1 group-hover:text-amber-300 transition-colors">{item.value}</p>
                  </div>
                ))}
              </div>
              
              {/* Mentor Badge - Enhanced */}
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-3 bg-gradient-to-r from-teal-900/40 to-amber-900/30 px-5 py-3 rounded-lg border border-teal-500/30 w-fit mx-auto lg:mx-0 hover:shadow-lg transition-all duration-300 hover:border-amber-500/30">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400 flex-shrink-0 shadow-md">
                  <img 
                    src="/assets/mentor/akash.png" 
                    alt="Aakash Maurya" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-medium">Aakash Maurya</p>
                    <div className="ml-2 px-2 py-0.5 bg-amber-500/20 rounded-full">
                      <p className="text-amber-300 text-xs">Mentor</p>
                    </div>
                  </div>
                  <p className="text-teal-400 text-sm">Senior ML Engineer, Nagarro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"></div>
              
              {/* Form decoration */}
              <div className="absolute top-10 right-1/2 w-10 h-10 bg-amber-500/10 rounded-full blur-lg"></div>
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-teal-400/10 rounded-full blur-lg"></div>
              
              {/* Form container with enhanced styling */}
              <div className="relative z-10 bg-[#051824]/90 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-teal-500/20 hover:border-amber-400/30 transition-all duration-300 shadow-2xl max-w-lg mx-auto w-full transform hover:-translate-y-1 hover:shadow-xl" id="workshop-registration-form">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-amber-500/10 rounded-2xl"></div>
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
          0%, 100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float-data {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WSHero;
