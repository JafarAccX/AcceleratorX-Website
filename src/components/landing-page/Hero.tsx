import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full px-4 overflow-hidden bg-black dark:bg-black text-white selection:bg-blue-500/30">
      {/* Background Image with Person */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/redesign/main-page/main-hero-bg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        {/* Subtle Gradient Overlays to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex max-w-7xl mx-auto  flex-col min-h-screen">

        {/* Top Section: Headline & Animation */}
        <div className="flex-1 flex flex-col justify-center pt-32 pb-10">
          <div className="max-w-6xl">
            <h1 className="font-heading text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-light tracking-tight text-white dark:text-white italic">
              {/* <TypeAnimation
                sequence={["Build", 2000, "Lead", 2000, "Succeed", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block "
                cursor={false}
              />
              <span className="not-italic font-normal"> with</span>
              <br />*/}
              <span className="not-italic font-normal">Built for Your Next</span>
              <br />
              <span className="not-italic font-normal"> Career</span>


            </h1>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full h-px bg-white/20 dark:bg-white/20 mt-12 mb-8" />

          {/* Middle Info & CTA Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Left: Badge Pill */}
            <div className="flex items-center gap-2.5 bg-black dark:bg-black/80 border border-white/30 dark:border-white/30 rounded-full px-5 py-2 self-start ring-1 ring-white/5 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-white dark:bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] font-medium text-white dark:text-white uppercase opacity-90">
                AI-Powered Program
              </span>
            </div>

            {/* Right: Subtext and Main Button */}
            <div className="flex flex-col items-end justify-end gap-6">
              <p className="font-sans text-lg md:text-xl text-white/90 dark:text-white/90 max-w-md font-light leading-relaxed">
                Accelerate your career with a job-ready AI program.
              </p>

              <div className="w-full  flex items-end justify-end">

                <button
                  onClick={() => {
                    const section = document.getElementById("features");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="font-sans group flex items-center justify-end  gap-3 bg-[#FFC107]  hover:bg-[#FFD54F] active:scale-95 text-black px-8 py-3.5 rounded-lg font-bold text-lg shadow-[0_10px_30px_-10px_rgba(255,193,7,0.3)] transition-all duration-300"
                >
                  Explore Programs
                  <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: App Download Badges */}
        <div className="pb-12 pt-6">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-sm md:text-base font-medium text-white/70 dark:text-white/70 tracking-wide text-center md:text-left">
              Download our App for exciting offers!
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://apps.apple.com/in/app/acceleratorx-learning/id6753216468"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform active:scale-95"
              >
                <img
                  src="/redesign/main-page/main-hero/app-store.jpg"
                  alt="Download on the App Store"
                  className="w-56"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.acceleratorx.acceleratorx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform active:scale-95"
              >
                <img
                  src="/redesign/main-page/main-hero/play-store.jpg"
                  alt="Get it on Google Play"
                  className="w-56"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
