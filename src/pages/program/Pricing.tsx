import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import EnrollmentModal from "../../components/EnrollmentModal";

const features = [
  "Comprehensive Product Management Curriculum from Basic to Advance",
  "Growth Product Management (Specialization)",
  "AI Product Management Specialisation",
  "Build a Product Portfolio with BYDP",
  "Product Analytics & Industry Relevant Tools",
  "Mock Interviews with Industry Leaders",
  "Comprehensive Interview Guide & Practice material",
  "Exclusive Access To Our Job Portal",
  "Priority Screening In Job Applications & Queue",
  "Verifiable Certificate",
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const originalPrice = 59000;
  const discountedPrice = 47200;

  return (
    <div className="py-24 bg-[#111827]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            Invest in your future
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            with our comprehensive product management program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 max-w-lg mx-auto relative"
        >
          {/* Ribbon for Discount */}
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-bl-lg text-lg font-semibold">
            20% Off
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Premium Plan</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">
                  ₹{discountedPrice.toLocaleString()}
                </span>
                <span className="ml-2 text-gray-400 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              </div>
              <p className="mt-4 text-gray-400">
                Everything you need to become a successful Product Manager
              </p>
            </div>

            <div className="px-8 pb-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
