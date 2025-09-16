import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

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
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-12 py-12 lg:flex-row lg:justify-between lg:py-20">
          
          {/* Left */}
          < div
            className="w-full lg:w-1/2 space-y-8"
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
              Transform your ideas into action. Accelerating ideas into
              impactful solutions that shape the future.
            </p>

            {/* CTAs */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                type="button"
                onClick={() => {
                  const section = document.getElementById("features");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                aria-label="Explore Courses"
              >
                Explore Courses
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
                className="group inline-flex items-center justify-center rounded-lg border border-yellow-400/40 bg-black/50 px-8 py-3 text-yellow-400 backdrop-blur-sm hover:border-yellow-400/60 transition-all"
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
            className="w-full lg:w-1/2 flex flex-col items-center justify-center"
          >
            <img
              src='/n8n-commingsoon.webp'
              alt="/n8n Coming Soon"
              className="w-full max-w-md rounded-xl shadow-2xl object-cover"
              loading="eager"
              decoding="async"
              width={600}
              height={400}
              fetchPriority="high"
            />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJxgV3bMDrcy4m8bGdEIHqR0GLZrvVeZ5QF0itPIQqgDaC2g/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-8 px-10 py-4 text-lg font-semibold text-white bg-[#1a71f6] hover:bg-[#1558b0] rounded-xl shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 w-[90vw] max-w-xs text-center"
            >
              Join the Waitlist
            </a>
          </ div>
        </div>
      </div>
    </div>
  );
}
