import React, { useState } from "react";
import { DollarSign, Check, Gift } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import ScholarshipForm from "../../../components/ScholarshipForm";
import DMTimer from "../dmAI/DMTimer";

const GENPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);

  const features = [
    "3-month intensive program",
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
      name: "Early Bird",
      price: "34,999",
      description: "Limited time offer",
      features: features,
      highlighted: true,
    },
    {
      name: "Regular",
      price: "44,999",
      description: "Standard pricing",
      features: features,
      highlighted: false,
    },
  ];

  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Timer Banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">
              Early Bird Offer ends in:
            </span>
            <DMTimer initialHours={120} className="text-white font-semibold" />
          </div>
        </div>

        {/* Scholarship Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-2 border-blue-500/50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/10">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Gift className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-1">Scholarship Available!</h3>
                <p className="text-gray-300 text-sm">Start your career with a scholarship</p>
              </div>
            </div>
            <button
              onClick={() => setIsScholarshipModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Invest in Your AI Future
            </h2>
            <p className="text-gray-400 text-sm">
              Join our comprehensive AI program and master the future of technology
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-gray-900 to-black border rounded-xl p-8 shadow-xl ${
                  plan.highlighted ? 'border-blue-500' : 'border-gray-800'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-3xl font-bold text-white">₹</span>
                    <span className={`text-4xl font-bold ${
                      plan.highlighted ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text' : 'text-gray-400'
                    }`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={plan.highlighted ? () => setIsModalOpen(true) : undefined}
                  disabled={!plan.highlighted}
                  className={`w-full rounded-lg py-3 px-6 font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-70'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Scholarship Form Modal */}
      {isScholarshipModalOpen && (
        <ScholarshipForm onClose={() => setIsScholarshipModalOpen(false)} />
      )}
    </section>
  );
};

export default GENPricing;
