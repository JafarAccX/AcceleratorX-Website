import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users } from "lucide-react";

const companies = [
  { name: "Adobe", logo: "/assets/companyLogos/adobe.webp" },
  { name: "Walmart", logo: "/assets/companyLogos/walmart.webp" },
  { name: "HP", logo: "/assets/companyLogos/HP.webp" }, 
  { name: "Tracxn", logo: "/assets/companyLogos/TRACXN.webp" }, 
  { name: "PayU", logo: "/assets/companyLogos/PAY U.webp" },
  { name: "VMware", logo: "https://cdn.worldvectorlogo.com/logos/vmware-1.svg" },
  { name: "Cars24", logo: "/assets/companyLogos/CARS24.webp" },
  { name: "Pine Labs", logo: "/assets/companyLogos/pinelabs.webp" },
  { name: "Unacademy", logo: "/assets/companyLogos/Unacademy-Symbol.webp" },
  { name: "ANQ", logo: "/assets/companyLogos/anqfinance_logo.webp" },
  { name: "Showtime", logo: "/assets/companyLogos/Showtime.webp" },
  { name: "PeakMind", logo: "/assets/companyLogos/PEAKMIND.webp" },
  { name: "Junglee Games", logo: "/assets/companyLogos/jungle_games.webp" },
];

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sliderRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    if (isInView) {
      slider.style.animationPlayState = "running";
    } else {
      slider.style.animationPlayState = "paused";
    }
  }, [isInView]);

  return (
    <div className="bg-black">
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-3">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mx-auto border border-blue-500/20">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
              Join hands with companies worldwide that trust our resources.
            </p>
          </motion.div>

          {/* Optimized Logo Slider */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black after:to-transparent">
            <div 
              ref={sliderRef}
              className="flex gap-8 logos-slide"
              style={{ 
                animationPlayState: isInView ? "running" : "paused",
                willChange: "transform"
              }}
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] rounded-xl flex items-center justify-center p-4 hover:bg-white/[0.06] transition-colors duration-300 border border-white/10"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
              {/* Duplicate only what's needed for seamless loop */}
              {companies.slice(0, 5).map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] rounded-xl flex items-center justify-center p-4 hover:bg-white/[0.06] transition-colors duration-300 border border-white/10"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-150px * ${companies.length}));
          }
        }

        .logos-slide {
          animation: slide 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
