import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WhoIsThisContentForEIE = () => {
  const targetAudience = [
    {
      title: "Business Professionals",
      description: "Looking to leverage data for strategic decision-making",
    },
    {
      title: "Career Transitioners",
      description: "Aiming to move into data analytics roles",
    },
    {
      title: "Recent Graduates",
      description: "Seeking to build a strong foundation in data analytics",
    },
    {
      title: "Entrepreneurs",
      description: "Wanting to make data-driven business decisions",
    },
    {
      title: "Marketing Professionals",
      description: "Looking to enhance their data analysis capabilities",
    },
    {
      title: "Students",
      description: "Looking forward to start a career in data analytics",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F9F4] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1A5D1A] mb-4">
            Who Is This Program For?
          </h2>
          <p className="text-lg text-[#1F441E] max-w-3xl mx-auto">
            Our EIE Data Analytics program is designed for ambitious professionals ready to master data-driven decision making
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#C7DCA7]"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#E4EFE7] rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#1A5D1A]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A5D1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#1F441E]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisContentForEIE;
