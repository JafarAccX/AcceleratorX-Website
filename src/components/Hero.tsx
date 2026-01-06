import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.webp")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.1),transparent)] animate-pulse" />
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex  min-h-screen h-full flex-col-reverse items-center justify-center gap-12 py-12 lg:flex-row lg:justify-between lg:py-20">

          {/* Left */}
          < div
            className="w-full lg:w-1/2  flex flex-col items-start justify-center space-y-6 text-center lg:text-left"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
              <TypeAnimation
                sequence={["Build", 1000, "Lead", 1000, "Succeed", 1000]}
                wrapper="h1"
                speed={50}
                className="relative bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-transparent drop-shadow"
                repeat={Infinity}
                cursor
              />
            </div>

            <p className="max-w-xl text-lg text-gray-100 leading-relaxed">
              Accelerate your career with a job-ready AI program. Learn how Data Analytics, Generative AI, and Digital Marketing Automation work through hands-on experience. Gain practical skills, get job-ready for high demand in AI Job roles.

            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center w-full space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                type="button"
                onClick={() => {
                  const section = document.getElementById("features");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                aria-label="Explore Programs"
              >
                Explore Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              < button

                onClick={() => navigate("/xsat")}
                className="group inline-flex items-center w-full justify-center rounded-lg border border-yellow-400/40 bg-black/50 px-8 py-3 text-yellow-400 backdrop-blur-sm hover:border-yellow-400/60 transition-all"
                aria-label="More About XSAT"
              >
                More About XSAT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ button>
            </div>
          </ div>

          {/* Right */}
          < div
            className="w-full lg:w-1/2 flex flex-col items-center justify-centername relative"
          >
            <img
              src='/assets/ai-digital-m/website_BuildrX.webp'
              alt="BuildrX - Showcase your projects"
              className="w-full  rounded-xl shadow-2xl object-cover"
              loading="eager"
              decoding="async"
              width={800}
              height={600}
              fetchPriority="high"
            />
            <a href="https://buildrx.org" target="_blank" rel="noopener noreferrer nofollow" className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6">
              <button className="flex items-center gap-2 px-4 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-lg font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:from-[#7c3aed] hover:to-[#2563eb] shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
                Get Early Access
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
