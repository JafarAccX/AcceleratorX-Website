import { WorkshopProvider } from "../../../context/WorkshopContext";
// import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";
import type React from "react"
import StatsSection from "./StatsSection";

const CryptoHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden " >
       {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="w-44 md:w-48 relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full"></div>
            <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20">
              <img src="/companylogo.webp" alt="AcceleratorX Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>


      {/* Purple Glow Background */}
      <div className="absolute left-[-200px] top-1/4 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-30 blur-[150px] pointer-events-none z-0" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{
          backgroundImage: `url('/backgrounds/1_s.webp')`,
        }}
      />
      {/* Circular Gradient Blobs */}
      <div className="absolute inset-0">
        {/* Top gradient blob */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0.1) 40%, transparent 70%)",
          }}
        />

        {/* Bottom left gradient blob */}
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 80%)",
          }}
        />

        {/* Additional smaller blob for depth */}
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.05) 60%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:my-12 mt-28 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
             
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Data Analysis with <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                AI
              </span>     </h1>
              
            </div>

            {/* Subtext */}
            <div className="space-y-4 text-slate-300 text-lg max-w-lg">
              <p className="font-medium">Learn How to Turn Raw Data into Smart Decisions — With Zero Coding! </p>
              {/* <p>
               But for many, it feels confusing. This workshop makes it simple to understand and present data—no code needed.

              </p> */}
            </div>
          </div>

          {/* Right Illustration */}
          {/* <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
               
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
 
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl shadow-2xl transform rotate-12">
                  <div className="p-6 h-full flex flex-col justify-center items-center">
                    <div className="w-full h-32 bg-gradient-to-r from-pruple-400/20 to-emerald-400/20 rounded-xl mb-4"></div>
                    <div className="space-y-2 w-full">
                      <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  ₿
                </div>

                <div className="absolute top-8 -right-8 w-10 h-10 bg-gradient-to-br from-pruple-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  $
                </div>

                <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  Ξ
                </div>

                <div className="absolute bottom-12 -right-6 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>

                
                <div className="absolute -top-8 right-8 transform -rotate-12">
                  <div className="w-16 h-20 bg-gradient-to-b from-pruple-400 to-emerald-500 rounded-t-full relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                 
                <div className="absolute top-1/4 left-8 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-pruple-400 rounded-full opacity-60"></div>
                  ))}
                </div>

                <div className="absolute bottom-1/4 right-4 grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          <div className="w-full ">
            <div className="relative">
              
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>

             
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
    <StatsSection />
      </div>


    </section>
  )
}

export default CryptoHeroSection
