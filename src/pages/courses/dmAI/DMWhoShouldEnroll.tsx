import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserTie,
  FaLaptopCode,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";

const DMWhoShouldEnroll = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const audiences = [
    {
      icon: <FaUserTie className="w-12 h-12" />,
      title: "Marketing Professionals",
      description: "Level up your career with AI-powered marketing strategies",
    },
    {
      icon: <FaLaptopCode className="w-12 h-12" />,
      title: "Freelancers",
      description:
        "Enhance your service offerings with cutting-edge marketing tools",
    },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: "Students",
      description: "Start your career with the most in-demand marketing skills",
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Business Owners",
      description: "Scale your business with data-driven marketing strategies",
    },
  ];

  return (
    <section className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 highlight-text">
            Who Should Enroll?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card hover:border-neon-yellow/50 group"
              >
                <div className="mb-6 text-neon-yellow group-hover:text-neon-yellow transition-colors duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mb-4">
                  {audience.title}
                </h3>
                <p className="text-neutral-100/70 font-mono">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMWhoShouldEnroll;
