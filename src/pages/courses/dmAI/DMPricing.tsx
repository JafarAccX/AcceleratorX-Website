import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";

const DMPricing = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const plans = [
    {
      name: "Early Bird",
      price: 999,
      description: "Limited time offer",
      features: [
        "Full Course Access",
        "AI Tools Access",
        "Live Sessions",
        "Project Reviews",
        "Certification",
        "Community Access",
      ],
      highlighted: true,
    },
    {
      name: "Regular",
      price: 1499,
      description: "Standard pricing",
      features: [
        "Full Course Access",
        "AI Tools Access",
        "Live Sessions",
        "Project Reviews",
        "Certification",
        "Community Access",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-neutral-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 highlight-text">
            Pricing & Enrollment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`
                  card group
                  ${plan.highlighted ? "border-neon-yellow border-2" : ""}
                `}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-mono font-bold text-neon-yellow mb-2 group-hover:text-neon-pink transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-100/70 font-mono mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-mono font-bold text-neon-pink mb-2">
                    ${plan.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-neutral-100/70 font-mono"
                    >
                      <FaCheck className="text-neon-yellow mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`
                  w-full py-4 rounded-lg font-mono font-bold text-lg transition-all duration-300 transform hover:-translate-y-1
                  ${
                    plan.highlighted
                      ? "neon-button"
                      : "bg-neutral-900 text-neutral-100 hover:bg-neutral-700"
                  }
                `}
                >
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMPricing;
