import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Crown } from "lucide-react";
import EnrollmentModal from "../../../../components/EnrollmentModal";

const pricingData = {
  premium: {
    title: "Premium",
    mrp: "39999",
    price: "34999",
    discount: "12",
    features: [
      { name: "BYDP", included: true },
      { name: "EIE Malta Certificate", included: false },
      { name: "PM Toolbox & Templates", included: true },
      { name: "Assignment Feedback", included: true },
      { name: "Mock Interviews", included: true, detail: "Group" },
      { name: "Personalized Skill Report", included: false },
      { name: "AcceleratorX Job Priority Access", included: false, detail: "Regular Access" },
      { name: "Alumni Access & Exclusive Content", included: true },
      { name: "Project-Based Mini Challenges", included: false },
      { name: "Exclusive PM Workshops & Events", included: false },
      { name: "Bi-Weekly Career Review Calls", included: false },
      { name: "Chance to win Industry Internship", included: false },
      { name: "Business Pitch & Investor Workshop", included: false },
      { name: "Product Showcase on Wall of Product", included: false },
      { name: "Ask Doubt (1:1 with Mentor on demand)", included: false }
    ]
  },
  iconic: {
    title: "Iconic",
    mrp: "69999",
    price: "64999",
    discount: "7",
    features: [
      { name: "BYDP", included: true },
      { name: "EIE Malta Certificate", included: true },
      { name: "PM Toolbox & Templates", included: true },
      { name: "Assignment Feedback", included: true },
      { name: "Mock Interviews", included: true, detail: "Yes (1:1 x 3) + Group" },
      { name: "Personalized Skill Report", included: true },
      { name: "AcceleratorX Job Priority Access", included: true, detail: "Priority Access" },
      { name: "Alumni Access & Exclusive Content", included: true },
      { name: "Project-Based Mini Challenges", included: true },
      { name: "Exclusive PM Workshops & Events", included: true },
      { name: "Bi-Weekly Career Review Calls", included: true },
      { name: "Chance to win Industry Internship", included: true },
      { name: "Business Pitch & Investor Workshop", included: true },
      { name: "Product Showcase on Wall of Product", included: true },
      { name: "Ask Doubt (1:1 with Mentor on demand)", included: true }
    ]
  }
};

export default function PricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-[#5CB338]">Learning Path</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the program that best fits your career goals and learning needs
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-[#5CB338]" />
                <h3 className="text-2xl font-bold">{pricingData.premium.title}</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-4xl font-bold">₹{pricingData.premium.price}</p>
                  <div className="text-left">
                    <p className="text-gray-500 line-through text-lg">₹{pricingData.premium.mrp}</p>
                    <p className="text-[#5CB338] text-sm">{pricingData.premium.discount}% OFF</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-2">For aspiring product managers</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-6 rounded-xl bg-[#5CB338] hover:bg-[#5CB338]/90 text-white font-semibold transition-colors mb-8"
              >
                Enroll Now
              </button>
              <div className="space-y-4">
                {pricingData.premium.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#5CB338] mt-1" />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      </div>
                    )}
                    <div>
                      <p className={feature.included ? "text-white" : "text-gray-500"}>
                        {feature.name}
                      </p>
                      {feature.detail && (
                        <p className="text-sm text-gray-400">{feature.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Iconic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-[#5CB338]/20 to-black rounded-2xl border border-[#5CB338]/30 overflow-hidden"
          >
            {/* Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-[#5CB338] text-white text-sm font-semibold px-4 py-1 rounded-bl-lg">
                Most Popular
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-[#5CB338]" />
                <h3 className="text-2xl font-bold">{pricingData.iconic.title}</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-4xl font-bold">₹{pricingData.iconic.price}</p>
                  <div className="text-left">
                    <p className="text-gray-500 line-through text-lg">₹{pricingData.iconic.mrp}</p>
                    <p className="text-[#5CB338] text-sm">{pricingData.iconic.discount}% OFF</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-2">For serious product leaders</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-6 rounded-xl bg-white hover:bg-gray-100 text-black font-semibold transition-colors mb-8"
              >
                Enroll Now
              </button>
              <div className="space-y-4">
                {pricingData.iconic.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5CB338] mt-1" />
                    <div>
                      <p className="text-white">{feature.name}</p>
                      {feature.detail && (
                        <p className="text-sm text-[#5CB338]">{feature.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
