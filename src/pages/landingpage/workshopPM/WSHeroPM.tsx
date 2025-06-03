import { WorkshopProvider } from "../../../context/WorkshopContext";
import { ArrowRight, Star } from "lucide-react";
import WSFormFree from "../workshopGENB/WSFormFree";
import { FaCalendarAlt, FaClock, FaLevelUpAlt, FaUserGraduate } from "react-icons/fa";

const WSHeroPM = () => {
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
                <h1 className="  text-3xl md:text-5xl    font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                    Gen AI for PMs Masterclass
                  </span>
                </h1>

                {/* Hero Image */}
                <div className="relative w-full max-w-2xl mx-auto mt-6 lg:mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-xl blur-xl"></div>
                  <div className="relative hidden md:block overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <img
                      src="/assets/workshopCover/PMWebinarLPCover.jpg"
                      alt="Product Management Masterclass"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="relative block md:hidden overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <img
                      src="/assets/workshopCover/mobilePm.png"
                      alt="Product Management Masterclass"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                    Master Generative AI for Product Management!
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
                Learn how to use Gen AI to speed up product research, ideation, development, and optimization. Gain
                hands-on tools, real-world strategies, and become the AI-savvy PM every team wants. Enroll now!
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "2 Hours" },
                  {
                    icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                    label: "Date",
                    value: "07 Jun",
                  },
                  {
                    icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                    label: "time",
                    value: "07:30 pm",
                  },
                  { icon: <FaLevelUpAlt className="text-cyan-400 mb-1" />, label: "Level", value: "All Levels" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group   backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                  >
                    {item.icon}
                    <p className="text-gray-400 text-xs ">{item.label}</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

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
          <div className="hidden lg:block lg:w-5/12">
            <div className="bg-gradient-to-b from-indigo-500/10 to-violet-500/10 p-1 rounded-2xl sticky top-24">
              <div className="bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
                <div className="mb-6 space-y-2" onClick={scrollToForm}>
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
