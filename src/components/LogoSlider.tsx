import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const companies = [
  { name: "Adobe", logo: "/assets/companyLogos/adobe.png" },
  { name: "Walmart", logo: "/assets/companyLogos/Walmart_logo.png" },
  { name: "HP", logo: "/assets/companyLogos/HP.png" },
  { name: "Licious", logo: "/assets/companyLogos/Licious-Logo.png" },
  { name: "Tracxn", logo: "/assets/companyLogos/TRACXN.png" },
  { name: "Times Internet", logo: "/assets/companyLogos/TIMES.png" },
  { name: "PayU", logo: "/assets/companyLogos/PAY U.png" },
  {
    name: "VMware",
    logo: "https://cdn.worldvectorlogo.com/logos/vmware-1.svg",
  },
  { name: "Cars24", logo: "/assets/companyLogos/CARS24.png" },
  { name: "Pine Labs", logo: "/assets/companyLogos/pinelabs.png" },
  { name: "Unacademy", logo: "/assets/companyLogos/Unacademy-Symbol.png" },
  { name: "ANQ", logo: "/assets/companyLogos/anqfinance_logo.jpeg" },
  { name: "Showtime", logo: "/assets/companyLogos/Showtime.png" },
  { name: "PeakMind", logo: "/assets/companyLogos/PEAKMIND.png" },
  { name: "Junglee Games", logo: "/assets/companyLogos/jungle_games.png" },
];

const LogoSlider: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-3">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 mx-auto backdrop-blur-xl border border-blue-500/20">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              Join hands with companies worldwide that trust our resources.
            </p>
          </motion.div>

          {/* Seamless Logo Slider */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black after:to-transparent">
            <div className="flex gap-8 logos-slide">
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center p-4 hover:bg-white/[0.06] transition-all duration-300 border border-white/10 group"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translate3d(0,0,0)",
                    WebkitTransform: "translate3d(0,0,0)",
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                    loading="lazy"
                    style={{
                      imageRendering: "auto",
                      WebkitImageRendering: "auto",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx="true" global="true">{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .logos-slide {
              animation: slide 20s linear infinite;
              animation-play-state: running;
              width: fit-content;
              will-change: transform;
            }

            .logos-slide:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default LogoSlider;
