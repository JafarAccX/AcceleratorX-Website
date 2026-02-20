import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "../common/Typewriter";
import { PremiumButton } from "../common/PremiumButton";
import { ProgramBadge } from "../common/ProgramBadge";

export default function Hero() {
  const [isTypingDone, setIsTypingDone] = useState(false);
  return (
    <div className="relative min-h-screen w-full px-4 overflow-hidden bg-black dark:bg-black text-white selection:bg-blue-500/30">
      {/* Background Image with Person */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
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
      </motion.div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Plus Animation Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute top-[60%] left-[5%] md:left-[8%] opacity-40 md:opacity-60"
        >
          <div id="plus-animation" className="relative group">
            {/* Subtle Glow behind the badge */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-150" />





            {/* Floating Pluses around the badge */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.05, 0.25, 0.05],
                  y: [0, Math.sin(i * 30) * 40, 0],
                  x: [0, Math.cos(i * 30) * 40, 0],
                  rotate: [0, 90, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 5 + (i % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute text-white/30 font-light pointer-events-none"
                style={{
                  top: `${Math.sin(i * 30) * 100 + 10}px`,
                  left: `${Math.cos(i * 30) * 120 + 40}px`,
                  fontSize: `${14 + (i % 3) * 4}px`,
                }}
              >
                +
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex max-w-7xl mx-auto  flex-col min-h-screen">
        <div className="pt-32">
          <Typewriter
            text="lOADING AI Skillverse....."
            onComplete={() => setIsTypingDone(true)}
            className="mb-6"
          />
        </div>

        {isTypingDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col"
          >
            {/* Top Section: Headline & Animation */}
            <div className="flex-1 flex flex-col justify-center pb-10">
              <div className="max-w-6xl">
                <h1 className="font-heading text-[2.75rem] sm:text-6xl   leading-[1.1] font-light tracking-tight text-white dark:text-white ">

                  <span className="not-italic font-normal">Built for Your Next</span>
                  <br />
                  <span className="not-italic font-normal"> Career</span>


                </h1>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-px bg-white/20 dark:bg-white/20 mt-12 mb-8" />

              {/* Middle Info & CTA Row */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                <ProgramBadge text="AI-Powered Program" />
                {/* Right: Subtext and Main Button */}
                <div className="flex flex-col items-end justify-end gap-6">
                  <p className="font-sans text-lg md:text-xl text-white/90 dark:text-white/90 max-w-md font-light leading-relaxed">
                    Accelerate your career with a job-ready AI program.
                  </p>

                  <div className="w-full  flex items-end justify-end">
                    <PremiumButton
                      onClick={() => {
                        const section = document.getElementById("features");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      icon={<ChevronDown className="w-5 h-5 text-blue-400 group-hover:text-white" />}
                    >
                      Explore Programs
                    </PremiumButton>
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
                      className="w-32"
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
                      className="w-36"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
