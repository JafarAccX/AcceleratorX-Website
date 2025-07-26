import { WorkshopProvider } from "../../../context/WorkshopContext";
import { Star } from "lucide-react";
import WSFormFree from "../workshopGENB/WSFormFree";
import { FaCalendarAlt, FaClock, FaLevelUpAlt, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const WSHeroPM = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8"
          >
            <Globe className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Live Workshop | 3-Hour AI Marathon</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Build AI Products That Actually Work!
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From idea to deployment, learn how real-world AI products are built (and shipped).
          </motion.p>

          {/* CTA Buttons */}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 min-w-[200px]"
              onClick={scrollToForm}
            >
              Book Your Free Slot
            </button>
          </motion.div>
        </div>

        {/* Subtle floating animation for background elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm"
        />
      </section>

      {/* Main Content */}
      <div className="container mx-auto  px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 my-24 md:my-28">
          {/* Left Content Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2  space-y-8">
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
                <h1 className="text-3xl md:text-5xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                    About the Workshop
                  </span>
                </h1>

                <h2 className="text-2xl lg:text-3xl font-semibold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                    High-impact, practical training to help you ship AI products that solve real problems in the real
                    world.
                  </span>
                </h2>
              </div>

              <p className="text-gray-400   leading-relaxed">
                In today’s AI gold rush, everyone’s building, but few know how to build right. This 3-hour live workshop
                is for builders, founders, PMs, and creators who want to go beyond GPT demos and actually create usable,
                scalable, AI-first products.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { icon: <FaClock className="text-emerald-400 mb-1" />, label: "Duration", value: "3 Hours" },
                  {
                    icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
                    label: "Date",
                    value: "July 13",
                  },
                  {
                    icon: <FaUserGraduate className="text-cyan-400 mb-1" />,
                    label: "time",
                    value: "11:00 AM IST",
                  },
                  { icon: <FaLevelUpAlt className="text-cyan-400 mb-1" />, label: "Level", value: "All Levels" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                  >
                    {item.icon}
                    <p className="text-gray-400 text-xs">{item.label}</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile form section */}
            <div>
              <div className="bg-gradient-to-b from-indigo-500/10 to-violet-500/10 p-1 rounded-2xl max-w-[500px] mx-auto">
                <div
                  className="bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/20"
                  id="workshop-registration-form"
                  data-form-container="workshop"
                >
                  <div className="mb-6 space-y-2">
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
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>
    </div>
  );
};

export default WSHeroPM;
