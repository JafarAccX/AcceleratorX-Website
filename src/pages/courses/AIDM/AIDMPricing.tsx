import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from "lucide-react";
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';

const pricingOptions = [
  {
    title: "Early-bird",
    price: "₹29,999 + GST",
    originalPrice: "₹49,999", 
    highlight: true,
    discount: "40% Off"
  },
  {
    title: "Standard",
    price: "₹39,999 + GST",
    originalPrice: "₹49,999", 
    highlight: false,
    discount: "20% Off"
  },
  {
    title: "Installments",
    price: "₹1,967*",
    originalPrice: "", 
    highlight: false,
    discount: "(18 months no cost EMI)"
  }
];

const pricingFeatures = [
  "16-Week AI Marketing Program",
  "20+ AI Marketing Tool Mastery",
  "Live AI Marketing Capstone Projects",
  "1:1 Mentor Support",
  "AI Marketing Job Placement Assistance",
  "Industry Certification",
  "Alumni Network Access",
  "n8n Automation Workshops",
  "AI Marketing Portfolio Development",
  "Career Review Calls"
];

const AIDMPricing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // Handle enrollment submission if needed
  };

  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Investment
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start You AI Marketing Journey Today

          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We have designed a flexible enrolment plans so you can start learning without financial commitment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                option.highlight 
                  ? 'bg-[#0F0F0F] border-[#5CB338] shadow-lg shadow-[#5CB338]/20' 
                  : 'bg-[#0F0F0F] border-white/10 hover:border-[#5CB338]/50'
              }`}
            >
              {/* Popular Badge */}
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#5CB338] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">{option.title}</h4>
                {option.discount && (
                  <span className="inline-block bg-[#5CB338]/10 text-[#5CB338] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {option.discount}
                  </span>
                )}
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-[#5CB338]">{option.price}</span>
                  {option.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{option.originalPrice}</span>
                  )}
                </div>

              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleEnrollClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  option.highlight
                    ? 'bg-[#5CB338] hover:bg-[#5CB338]/90 text-white shadow-lg shadow-[#5CB338]/25'
                    : 'border-2 border-[#5CB338] text-[#5CB338] hover:bg-[#5CB338]/10'
                }`}
              >
                {option.highlight ? 'Lock Early-Bird Spot' : 'Enroll Now'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-xl p-8"
        >
          <h4 className="text-2xl font-bold text-white text-center mb-8">
            What's Included in All Plans
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#5CB338]" />
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonial */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-[#0F0F0F] border border-white/10 rounded-xl p-6 max-w-2xl mx-auto"
        >
          <p className="text-gray-300 italic mb-4">
            "Master hands-on AI labs, capstone, and automation flows and save 40–60% time and increase efficiency."
          </p>
        </motion.div> */}
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </section>
  );
};

export default AIDMPricing;
