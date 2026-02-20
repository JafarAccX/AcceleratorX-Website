import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";
import { PremiumButton } from "./common/PremiumButton";

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardProps {
  courseName: string;
  originalPrice: number;
  features: Feature[];
  onEnroll: () => void;
}

export default function PricingCard({
  courseName,
  originalPrice,
  features,
  onEnroll,
}: PricingCardProps) {
  // const savingsAmount = originalPrice - discountedPrice;

  return (
    <div className="mt-16 max-w-xl mx-auto">
      <div className="relative">
        {/* Limited Time Offer Banner */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-black px-6 py-2 rounded-full shadow-lg flex items-center space-x-2">
          <AlertCircle className="h-4 w-4" />
          <span className="font-semibold text-sm md:text-lg">
            Hike Ahead – Act Now!
          </span>

          {/* <span className="font-semibold text-sm md:text-lg">
            Black Friday Sale
          </span> */}
        </div>

        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-8 text-center relative">
            {/* Savings Badge */}
            {/* <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
              Save ₹{savingsAmount.toLocaleString()}
            </div> */}

            <h3 className="text-3xl font-bold text-white mb-2">{courseName}</h3>
            <p className="text-gray-400 mb-6">Complete Career Transformation</p>

            <div className="flex items-center justify-center space-x-4">
              {/* <span className="text-6xl font-bold text-white">
                ₹{discountedPrice.toLocaleString()} text-gray-400 line-through block
              </span> */}
              <div className="text-left">
                <span className=" text-6xl font-bold text-white">
                  ₹{originalPrice.toLocaleString()}
                </span>
                {/* <span className="text-green-500 font-semibold">
                  {Math.round(
                    ((originalPrice - discountedPrice) / originalPrice) * 100
                  )}
                  % OFF
                </span> */}
              </div>
            </div>

            {/* New Price Hike Warning */}
            <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm font-medium flex items-center justify-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Prices increasing from 20th Jan!
              </p>
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

            <PremiumButton
              onClick={onEnroll}
              className="w-full"
              icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            >
              Apply Now
            </PremiumButton>

            <p className="text-center text-gray-500 mt-4 text-sm">
              Limited seats available. Don't miss out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
