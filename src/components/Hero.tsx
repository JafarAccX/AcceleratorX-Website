import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { X, Sparkles, Zap } from "lucide-react";
import { VintageTV } from "./VintageTV";

// Timer component
// const Timer = ({
//   days,
//   hours,
//   minutes,
//   seconds,
// }: {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }) => {
//   return (
//     <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
//       <div className="flex items-center">
//         <span className="font-mono font-bold text-white">
//           {days.toString().padStart(2, "0")}d
//         </span>
//       </div>
//       <span className="text-white/50">:</span>
//       <div className="flex items-center">
//         <span className="font-mono font-bold text-white">
//           {hours.toString().padStart(2, "0")}h
//         </span>
//       </div>
//       <span className="text-white/50">:</span>
//       <div className="flex items-center">
//         <span className="font-mono font-bold text-white">
//           {minutes.toString().padStart(2, "0")}m
//         </span>
//       </div>
//       <span className="text-white/50">:</span>
//       <div className="flex items-center">
//         <span className="font-mono font-bold text-white">
//           {seconds.toString().padStart(2, "0")}s
//         </span>
//       </div>
//     </div>
//   );
// };

export default function Hero() {
  const navigate = useNavigate();
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   const targetDate = new Date("2024-11-31"); // Set your target date here

  //   const updateTimer = () => {
  //     const now = new Date();
  //     const difference = targetDate.getTime() - now.getTime();

  //     if (difference > 0) {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor(
  //         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       const minutes = Math.floor(
  //         (difference % (1000 * 60 * 60)) / (1000 * 60)
  //       );
  //       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //       setTimeLeft({ days, hours, minutes, seconds });
  //     }
  //   };

  //   const timer = setInterval(updateTimer, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black pb-20 lg:pb-24">
      {/* Main content container */}
      <div className="relative z-10 flex h-screen w-full flex-col items-center lg:items-stretch lg:-mt-16">
        {/* Content Wrapper */}
        <div className="flex w-full h-full flex-col lg:flex-row items-center">
          {/* Left side - Text content */}
          <div className="relative z-20 w-full px-4 pt-20 lg:pt-10 lg:w-1/2 lg:px-16 xl:px-24 flex items-center">
            <div className="w-full max-w-xl text-center lg:text-left">
              <TypeAnimation
                sequence={[
                  "Build",
                  1000,
                  "",
                  500,
                  "Lead",
                  1000,
                  "",
                  500,
                  "Succeed",
                  1000,
                  "",
                  500,
                ]}
                wrapper="h1"
                speed={50}
                className="mb-5 bg-clip-text text-3xl font-bold text-blue-600 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                repeat={Infinity}
                cursor={true}
                style={{
                  whiteSpace: "pre",
                  display: "inline-block",
                  minWidth: "150px",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0)",
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mx-auto mb-8 max-w-lg text-sm font-semibold leading-relaxed text-gray-300 md:text-lg lg:mx-0 lg:text-xl px-4 lg:px-0"
              >
                Transform your ideas into action. <br /> Accelerating ideas into
                impactful solution that shapes the future.
              </motion.p>

              <div className="button-sparkle px-4 lg:px-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="enroll-button flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-600 md:text-base"
                    onClick={() => {
                      const featuresSection =
                        document.getElementById("features");
                      if (featuresSection) {
                        featuresSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Explore Courses
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="enroll-button flex items-center justify-center gap-2 rounded-lg bg-black border px-5 py-3 text-sm font-medium text-yellow-400 md:text-base"
                    onClick={() => navigate("/xsat")}
                  >
                    More About XSAT
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right side - VintageTV */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8 z-[5]">
            <div className="w-full max-w-3xl">
              <VintageTV videoSrc="https://vimeo.com/1034754105/f909e7b129" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}
