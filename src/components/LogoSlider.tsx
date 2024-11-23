import React from "react";
import { motion } from "framer-motion";
import "./LogoSlider.css";

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
          className="mt-6 text-xl md:text-5xl font-bold"
        >
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
            AcceX Squad
          </span>{" "}
          <span className="text-white">In Some Of The Top Companies</span>
        </motion.h2>
      </motion.div>

      <div
        className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-dark before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-dark after:to-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="inline-flex logos-slide">
          {[...companies, ...companies].map((company, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[150px] mx-4 h-[80px] bg-white/[0.03] backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center p-4 hover:bg-white/[0.06] transition-all duration-300 border border-white/10 group"
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
    </div>
  );
};

export default LogoSlider;