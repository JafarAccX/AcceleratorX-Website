import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function PricingCard({
  courseName,
  originalPrice,
  discountedPrice,
  features,
  onEnroll,
}) {
  const savingsAmount = originalPrice - discountedPrice;

  return (
    <div className="mt-16 max-w-xl mx-auto">
      <div className="relative">
        {/* Limited Time Offer Banner */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full shadow-lg flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span className="font-semibold text-sm md:text-lg">
            Limited Time Offer
          </span>
        </div>

        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-8 text-center relative">
            {/* Savings Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
              Save ₹{savingsAmount.toLocaleString()}
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">{courseName}</h3>
            <p className="text-gray-400 mb-6">Complete Career Transformation</p>

            <div className="flex items-center justify-center space-x-4">
              <span className="text-6xl font-bold text-white">
                ₹{discountedPrice.toLocaleString()}
              </span>
              <div className="text-left">
                <span className="text-gray-400 line-through block">
                  ₹{originalPrice.toLocaleString()}
                </span>
                <span className="text-green-500 font-semibold">20% OFF</span>
              </div>
            </div>
          </div>

          <div className="px-8 pb-8">
            <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-300 space-x-3"
                  >
                    <span className="flex-shrink-0">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnroll}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Enroll Now
            </motion.button>

            <p className="text-center text-gray-500 mt-4 text-sm">
              Limited seats available. Don't miss out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
