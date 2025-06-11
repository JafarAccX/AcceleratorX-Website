import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import EnrollmentModal from "../../../../components/EnrollmentModal";

const dataAnalyticsPricingData = {
  title: "AcceleratorX Program",
  currentPrice: "32,999",
  features: [
    { name: "AI Automation techniques for Data analytics", included: true },
    { name: "Data Engineering Basics", included: true },
    { name: "Full Data Analytics Curriculum", included: true },
    { name: "Personalized CAPE Project", included: true },
    {
      name: "Product Analytics Specialization (optional)",
      included: true,
      highlight: true,
    },
    { name: "Real-world, hands-on project experiences", included: true },
    { name: "Access to industry-leading tools and datasets", included: true },
    { name: "Mock Interviews with Industry Leaders", included: true },
    { name: "Comprehensive Interview Guide", included: true },
    { name: "Exclusive Access To Our Job Portal", included: true },
    { name: "Priority Screening In Job Applications", included: true },
    { name: "Verifiable Certificate", included: true },
  ],
};

export default function DataPricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingData = dataAnalyticsPricingData;

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Learning Path</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Select the plan that best fits your learning goals and career aspirations
        </p>
      </div>
      <div className="max-w-7xl grid grid-cols-1   mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-3xl p-8 ${"bg-[#1a365d]"}`}
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <div className={`${"bg-blue-600"} text-white text-xs font-medium px-3 py-1 rounded-lg`}>Most Popular</div>
            </div>

            {/* Header */}
            <div className="mb-6">
              <div className="text-center">
                <h3 className="text-2xl mt-2 font-bold text-white mb-4">{pricingData.title}</h3>
              </div>

              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">₹{pricingData.currentPrice}</span>
                </div>
              </div>
            </div>

            {/* Enroll Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(true);
              }}
              className={`w-full py-3 px-6 rounded-xl font-semibold mb-2 transition-all duration-300 ${"bg-white text-black hover:bg-gray-100"}`}
            >
              {"Enroll Now"}
            </motion.button>

            {/* Money Back Guarantee */}

            {/* Features List */}
            <div className="space-y-4">
              {pricingData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className={`w-5 h-5 ${"text-[#5CB338]"} mt-1 flex-shrink-0`} />
                  ) : (
                    <div className="w-5 h-5 mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-auto mt-1.5" />
                    </div>
                  )}
                  <div>
                    <p
                      className={`${
                        feature.included ? (feature.highlight ? "text-amber-400" : "text-white") : "text-gray-500"
                      }`}
                    >
                      {feature.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
