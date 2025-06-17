import { WorkshopProvider } from "../../../context/WorkshopContext";
import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";

const WSHeroDASecond = () => {
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
              <img src="/assets/logo/logo.png" alt="AcceleratorX Logo" className="w-full h-auto" />
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
                <span className="text-blue-400 text-sm font-medium">Live Masterclass</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300">
                  Build Your First AI Analyst
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text  ">
                  — Live!
                </span>
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover how to turn raw data into real insights using AI — without writing a single line of code. In
                this live session, you’ll learn to clean, segment, and analyze data in minutes using smart tools and
                guided workflows. Perfect for beginners curious about the power of AI in analytics.
              </p>

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
                    value: "June 24, 2025",
                  },
                  {
                    icon: <FaClock className="text-cyan-400 mb-1" />,
                    label: "Time",
                    value: " 7:30 PM",
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
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.label}</p>
                    <p className="text-white font-semibold mt-1 group-hover:text-blue-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                ))}
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
