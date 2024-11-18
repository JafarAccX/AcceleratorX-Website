import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const companies = [
  {
    name: "Accenture",
    logo: "/assets/dataAnalyticsLogo/accenture.png",
  },
  {
    name: "Deloitte",
    logo: "/assets/dataAnalyticsLogo/Deloitte.png",
  },
  {
    name: "EXL Service",
    logo: "/assets/dataAnalyticsLogo/EXL_Service_logo.svg.png",
  },
  {
    name: "Fractal",
    logo: "/assets/dataAnalyticsLogo/Fractal.png",
  },
  {
    name: "Genpact",
    logo: "/assets/dataAnalyticsLogo/genpact.png",
  },
  {
    name: "IBM",
    logo: "/assets/dataAnalyticsLogo/IBM.png",
  },
  {
    name: "MU",
    logo: "/assets/dataAnalyticsLogo/Mu_sigma_logo.jpg",
  },
  {
    name: "Oracle",
    logo: "/assets/dataAnalyticsLogo/Oracle.png",
  },
  {
    name: "Quantiphi",
    logo: "/assets/dataAnalyticsLogo/Quantiphi.png",
  },
  {
    name: "SAP",
    logo: "/assets/dataAnalyticsLogo/SAP.png",
  },
];

const DataMentors: React.FC = () => {
  const logoSet = [...companies, ...companies]; // Duplicate for seamless looping

  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
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
              Join thousands of companies worldwide that trust our platform for
              their data analytics needs
            </p>
          </motion.div>

          {/* Seamless Logo Slider */}
          <div className="relative overflow-hidden py-4">
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
      </section>
    </div>
  );
};

export default DataMentors;
