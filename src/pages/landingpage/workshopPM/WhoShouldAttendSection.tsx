import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WhoShouldAttendSection = () => {
  const targetAudience = [
    "Product Managers & Founders",
    "Designers & Tech Leads",
    "AI learners, coders, and non-coders",
    "Indie builders and automation creators",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who Is This For</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Anyone who wants to build functional AI products, not just talk about them.
          </p>
        </motion.div>

        {/* Target Audience Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full   backdrop-blur-xl border border-gray-700/50 p-2 rounded-2xl   hover:border-gray-600/50 transition-all duration-300">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex gap-4 items-start">
                  {/* Check Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-10 h-10 rounded-xl   flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    <Check className="w-5 h-5 text-blue-400" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item}
                  </p>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-violet-400/20 rounded-full blur-sm"
      />
    </section>
  );
};

export default WhoShouldAttendSection;
