import React, { useState } from "react";
import { DollarSign, Check } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

const GENPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "3-month intensive program",
    "Live instructor-led sessions",
    "Real-world AI projects",
    "Industry-recognized certification",
    "AI tools and resources worth $500",
    "Lifetime access to course content",
    "AI community membership",
    "Career guidance and support",
    "Project portfolio development",
    "Interview preparation",
  ];

  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1.5 mb-3">
              <DollarSign className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">
                Course Investment
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Invest in Your AI Future
            </h2>
            <p className="text-gray-400 text-sm">
              Join our comprehensive AI program and master the future of
              technology
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6 shadow-xl">
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-3xl font-bold text-white">₹</span>
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                39,999
              </span>
              <span className="text-gray-400 text-sm ml-1">+ GST</span>
            </div>

            {/* EMI Option */}
            <div className="inline-block bg-blue-500/10 rounded-full px-3 py-1.5 mb-6">
              <p className="text-xs text-blue-400">
                EMI options available from ₹3,333/month
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-left">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg py-3 px-6 font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default GENPricing;
