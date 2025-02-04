import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaTools,
  FaChartLine,
  FaCertificate,
  FaUsers,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

const DMCourseBenefits = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: <FaTools />,
      title: "Hands-on Tools",
      description:
        "Get practical experience with industry-leading marketing tools",
    },
    {
      icon: <FaChartLine />,
      title: "Better ROI",
      description: "Learn to maximize returns through data-driven decisions",
    },
    {
      icon: <FaCertificate />,
      title: "Certification",
      description: "Earn an industry-recognized certification",
    },
    {
      icon: <FaUsers />,
      title: "Network Growth",
      description: "Connect with industry experts and peers",
    },
    {
      icon: <FaRobot />,
      title: "AI Mastery",
      description: "Master cutting-edge AI marketing tools",
    },
    {
      icon: <FaBrain />,
      title: "Future-Ready",
      description: "Stay ahead with emerging marketing trends",
    },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 highlight-text">
            Course Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:bg-neutral-800/80"
              >
                <div className="w-12 h-12 bg-neon-yellow rounded-lg flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-neon-pink transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-mono font-bold text-neon-yellow mb-4 group-hover:text-neon-pink transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-100/70 font-mono">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMCourseBenefits;
