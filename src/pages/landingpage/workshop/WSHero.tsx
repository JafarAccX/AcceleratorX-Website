import { WorkshopProvider } from "../../../context/WorkshopContext";
import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";

const WSHero = () => {
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
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0A1A2A] to-[#061625]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0  bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/15 via-cyan-400/10 to-emerald-400/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.15),rgba(0,0,0,0))]"></div>

        {/* Modern abstract shapes */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? "rgba(16, 185, 129, 0.4)" : "rgba(79, 70, 229, 0.4)",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6 flex justify-center md:justify-start">
          <div className="w-40 md:w-48 relative group">
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-emerald-500/40 via-indigo-400/30 to-cyan-400/40 rounded-full group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative bg-[#061625]/90 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-emerald-500/20 hover:border-indigo-400/30 transition-all duration-300">
              <img src="/assets/logo/logo.webp" alt="AcceleratorX Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-32 pb-16 lg:pt-40 lg:pb-24 gap-12 md:gap-8">
          {/* Main Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/30 to-indigo-400/20 border border-indigo-500/40 backdrop-blur-sm">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 mr-2"></span>
                <span className="text-white text-sm font-medium">Live Masterclass</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-indigo-200">
                  Analyst Masterclass
                </span>
              </h1>

              <h2 className="text-xl lg:text-2xl font-semibold">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-300 text-transparent bg-clip-text">
                  Upgrade Your Data Analysis Techniques with AI
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Level up your data skills with cutting-edge AI tools. Discover how modern analysts in 2025 are enhancing
                their workflows, delivering faster insights, and solving real business problems using AI.
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="relative inline-flex group/btn">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                  <button
                    onClick={scrollToForm}
                    className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#061625] rounded-lg leading-none border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10 text-white group-hover/btn:text-emerald-50 transition-all">
                      Reserve Your Seat
                    </span>
                    <svg
                      className="ml-2 w-5 h-5 text-white group-hover/btn:text-indigo-100 transition-colors animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[
                  { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                  { icon: <FaCalendarAlt className="text-indigo-400 mb-1" />, label: "Date", value: "May 23th" },
                  { icon: <FaUserGraduate className="text-cyan-400 mb-1" />, label: "time", value: "8:00 pm" },
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

              {/* Mentor Badge */}
              <div className="mt-6 flex items-center space-x-3 bg-gradient-to-r from-emerald-900/40 to-indigo-900/30 px-4 py-2 rounded-lg border border-emerald-500/30 w-fit mx-auto lg:mx-0 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400 flex-shrink-0 shadow-md">
                  <img src="/assets/mentor/akash.webp" alt="Aakash Maurya" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-medium text-sm">Aakash Maurya</p>
                    <div className="ml-2 px-2 py-0.5 bg-indigo-500/20 rounded-full">
                      <p className="text-indigo-300 text-xs">Mentor</p>
                    </div>
                  </div>
                  <p className="text-emerald-400 text-xs">Senior ML Engineer, Nagarro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              {/* Form container with enhanced styling */}
              <div
                className="relative z-10 bg-[#051522]/90 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 hover:border-indigo-400/30 transition-all duration-300 shadow-2xl max-w-lg mx-auto w-full transform hover:-translate-y-1"
                id="workshop-registration-form"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <WorkshopProvider>
                    <WSFormFree />
                  </WorkshopProvider>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(0) translateX(10px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes animate-tilt {
          0%,
          50%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default WSHero;
