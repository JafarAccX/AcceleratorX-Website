import { WorkshopProvider } from "../../../context/WorkshopContext";
// import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";
import { SEO } from "../../../components/seo/SEO";
import type React from "react"
import StatsSection from "./StatsSection";

const CryptoHeroSection: React.FC = () => {
  return (
    <>
      <SEO
        title="Data Analysis with AI | AcceleratorX"
        description="Learn how to use AI-powered tools to analyze data faster, uncover insights instantly, and make smarter business decisions — without heavy coding."
        ogTitle="Data Analysis with AI"
        ogDescription="Discover how modern AI tools can automate data cleaning, analysis, visualization, and insight generation in this hands-on workshop."
        ogImage="/Data-Analytics.webp"
      />
      <section className="relative min-h-screen overflow-hidden " >
        {/* Logo Section */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="container mx-auto px-4 py-6">
            <div className="w-44 md:w-48 relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full"></div>
              <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20">
                <img src="/assets/accelerator.png" alt="AcceleratorX Logo" className="w-full h-auto" />
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
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Data Analysis <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                  with AI
                </span></h1>

              </div>

              {/* Subtext */}
              <div className="space-y-4 text-slate-300 text-lg max-w-lg">
                <p className="font-medium">Learn how to use Automated Machine Learning (AutoML) tools like Google AutoML, AutoKeras, H2O.ai, and Auto-Sklearn to build powerful models — even if you don’t know deep coding.</p>

                <p>In this live, hands-on session, you'll discover how modern AI tools can automate data cleaning, analysis, visualization, and insight generation. Whether you're working with Excel, Google Sheets, or dashboards, this workshop will show you how AI upgrades your daily data work.</p>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 mt-4">
                  <p className="text-yellow-200 text-sm font-medium">
                    ⚠️ Note: This is a live-only session. No recordings will be shared.
                  </p>
                </div>
              </div>
            </div>

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
    </>
  )
}

export default CryptoHeroSection

