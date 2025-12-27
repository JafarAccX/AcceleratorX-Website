import { useState } from "react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const GENPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);

  const features = [
    "8-week intensive program",
    "Live instructor-led sessions",
    "Real-world AI projects",
    "Industry-recognized certification",
    "Lifetime access to course content",
    "AI community membership",
    "Career guidance and support",
    "Project portfolio development",
    "Interview preparation",
  ];

  const plans = [
    {
      name: "Regular",
      currentPrice: "21,999",
      description: "Comprehensive AI training program",
      features: features,
      highlighted: true,
    },
  ];

  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Invest in Your AI Future</h2>
        <p className="text-gray-400 text-sm">Join our comprehensive AI program and master the future of technology</p>
      </div>

      <div className="container grid grid-cols-1 gap-4 items-start js px-4 relative z-10">
        <div className="w-full mx-auto">
          {/* Pricing Cards */}
          <div className="flex items-center justify-center gap-8 w-full mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-b min-w-[300px] w-full max-w-[400px] from-gray-900 to-black border rounded-xl p-8 shadow-xl ${
                  plan.highlighted ? "border-blue-500 shadow-blue-500/20" : "border-gray-800"
                }`}
              >
                <div className="text-center mb-8">
                  <p className="text-2xl font-bold text-white mb-2">{plan.name}</p>
                  <p className="text-gray-400 mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">₹</span>
                    <span className="text-4xl flex gap-2 items-center font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                      {plan.currentPrice} <span className="block text-base text-gray-400 mt-1">+ GST</span>
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={plan.highlighted ? () => setIsModalOpen(true) : undefined}
                  disabled={!plan.highlighted}
                  className={`w-full rounded-lg py-3 px-6 font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"
                  }`}
                >
                  🚀 Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Scholarship Form Modal */}
      {/* {isScholarshipModalOpen && <ScholarshipForm onClose={() => setIsScholarshipModalOpen(false)} />} */}
    </section>
  );
};

export default GENPricing;
