import React from "react";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = React.useState(false);
  const logoSet = [...companies, ...companies]; // Duplicate for seamless looping

  return (
    <div className="relative overflow-hidden bg-dark text-white w-full py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl md:text-3xl font-bold"
        >
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
            AcceX Squad
          </span>{" "}
          <span className="text-white">In Some Of The Top Companies</span>
        </motion.h2>
      </motion.div>

      {/* Seamless Logo Slider */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark to-transparent z-10"></div>

        <motion.div
          className="flex items-center space-x-8 px-4 will-change-transform"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: [0.32, 0, 0.67, 0],
            pause: isHovered,
            repeatType: "loop"
          }}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translate3d(0,0,0)",
            WebkitTransform: "translate3d(0,0,0)"
          }}
        >
          {logoSet.map((company, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300 will-change-transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translate3d(0,0,0)",
                WebkitTransform: "translate3d(0,0,0)"
              }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain h-full w-full filter brightness-100 hover:brightness-110 transition-all duration-300"
                style={{
                  imageRendering: "auto",
                  WebkitImageRendering: "auto"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
