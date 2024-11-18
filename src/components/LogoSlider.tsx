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
      <div className="overflow-hidden relative">
        <motion.div
          className="flex items-center space-x-6"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }} // Shift entire width
          transition={{
            repeat: Infinity,
            duration: 30, // Smooth scrolling speed
            ease: "linear",
          }}
        >
          {logoSet.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
