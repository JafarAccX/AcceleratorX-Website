import type React from "react"
import WSAboutDASecond from "./WSAboutDASecond"




const TradingPlatformSection: React.FC = () => {


  return (
    <section className="relative   py-16 md:py-24">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full gradient-blob-1 opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/6 w-80 h-80 rounded-full gradient-blob-2 opacity-15"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center mb-16 max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="flex items-center justify-end ">
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Attend This Workshop?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              “Data is the new oil. But AI is the refinery.”
              </p>

              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              Whether you’re a student, working professional, founder, or freelancer — this session will show you how to use AI to analyze data, make better decisions, and stand out in your career.
              </p>
            </div>
          </div>

          {/* Right Image Instead of Trading Interface */}
            <div className="relative">
              <img
                src="/Data-Analytics.webp"
                alt="Data Analytics Illustration"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </div>
        </div>

        {/* Feature Cards */}
       <WSAboutDASecond />
      </div>
    </section>
  )
}

export default TradingPlatformSection
