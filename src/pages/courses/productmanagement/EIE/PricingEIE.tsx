import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Crown } from "lucide-react";
import EnrollmentModal from "../../../../components/EnrollmentModal";

const acceleratorPricingData = {
  title: "Accelerator Program",
  mrp: "39999",
  price: "34999",
  discount: "12",
  features: [
    { name: "BYDP", included: true },
    { name: "EIE European Business School Malta University Certificate", included: false },
    { name: "PM Toolbox & Templates", included: true },
    { name: "Assignment Feedback", included: true },
    { name: "Mock Interviews", included: true, detail: "Group" },
    { name: "Personalized Skill Report", included: false },
    { name: "AcceleratorX Job Priority Access", included: false },
    { name: "Alumni Access & Exclusive Content", included: true },
    { name: "Project-Based Mini Challenges", included: true },
    { name: "Exclusive PM Workshops & Events", included: true },
    { name: "Bi-Weekly Career Review Calls", included: false },
    { name: "Chance to win Industry Internship", included: false },
    { name: "Business Pitch & Investor Workshop", included: false },
    { name: "Product Showcase on Wall of Product", included: true },
    { name: "Ask Doubt (1:1 with Mentor on demand)", included: false }
  ]
};

const eiePricingData = {
  title: "EIE Program",
  mrp: "69999",
  price: "64999",
  discount: "12",
  features: [
    { name: "BYDP", included: true },
    { name: "EIE European Business School Malta University Certificate", included: true },
    { name: "PM Toolbox & Templates", included: true },
    { name: "Assignment Feedback", included: true },
    { name: "Mock Interviews", included: true, detail: "1:1 + Group" },
    { name: "Personalized Skill Report", included: true },
    { name: "AcceleratorX Job Priority Access", included: true },
    { name: "Alumni Access & Exclusive Content", included: true },
    { name: "Project-Based Mini Challenges", included: true },
    { name: "Exclusive PM Workshops & Events", included: true },
    { name: "Bi-Weekly Career Review Calls", included: true },
    { name: "Chance to win Industry Internship", included: true },
    { name: "Business Pitch & Investor Workshop", included: true },
    { name: "Product Showcase on Wall of Product", included: true },
    { name: "Ask Doubt (1:1 with Mentor on demand)", included: true }
  ]
};

export default function PricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isEIE, setIsEIE] = useState(true);

  const pricingData = isEIE ? eiePricingData : acceleratorPricingData;

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select the plan that best fits your learning goals and career aspirations
          </p>
          
          {/* Tab Switch */}
          <div className="flex justify-center mt-8 p-1 space-x-1 bg-gray-800/50 rounded-xl max-w-xs mx-auto">
            <button
              onClick={() => setIsEIE(false)}
              className={`${
                !isEIE
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              } flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200`}
            >
              Accelerator
            </button>
            <button
              onClick={() => setIsEIE(true)}
              className={`${
                isEIE
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              } flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200`}
            >
              EIE
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-3xl p-8 ${
              isEIE 
                ? 'bg-[#0A2615]' 
                : 'bg-[#1a365d]'
            }`}
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <div className={`${isEIE ? 'bg-[#5CB338]' : 'bg-blue-600'} text-white text-xs font-medium px-3 py-1 rounded-lg`}>
                Most Popular
              </div>
            </div>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Crown className={`w-6 h-6 ${isEIE ? 'text-[#5CB338]' : 'text-blue-500'}`} />
                <h3 className="text-2xl font-bold text-white">
                  {isEIE ? "Iconic" : "Premium"}
                </h3>
              </div>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">₹{pricingData.price}</span>
                <div>
                  <span className="text-gray-400 text-sm line-through">₹{pricingData.mrp}</span>
                  <span className={`ml-2 text-sm ${isEIE ? 'text-[#5CB338]' : 'text-blue-500'}`}>
                    {pricingData.discount}% OFF
                  </span>
                </div>
              </div>
              
              <p className="text-gray-400">
                {isEIE ? "For serious product leaders" : "For aspiring product managers"}
              </p>
            </div>

            {/* Enroll Button */}
            <button
              onClick={() => {
                setIsModalOpen(true);
                setSelectedPlan(pricingData.title);
              }}
              className="w-full py-3 px-6 rounded-xl bg-white text-black font-semibold mb-8 hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>

            {/* Features List */}
            <div className="space-y-4">
              {pricingData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className={`w-5 h-5 ${isEIE ? 'text-[#5CB338]' : 'text-blue-500'} mt-1 flex-shrink-0`} />
                  ) : (
                    <div className="w-5 h-5 mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-auto mt-1.5" />
                    </div>
                  )}
                  <div>
                    <p className={`${feature.included ? 'text-white' : 'text-gray-500'}`}>
                      {feature.name}
                    </p>
                    {feature.detail && feature.included && (
                      <p className={`text-sm ${isEIE ? 'text-[#5CB338]' : 'text-blue-500'}`}>
                        {feature.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
}
