import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import EnrollmentModal from "../../../../components/EnrollmentModal";

const acceleratorPricingData = {
  title: "AcceleratorX Program",
  mrp: "49,999",
  // price: "34999",
  discount: "12",
  features: [
    { name: "BYDP", included: true },

    { name: "PM Toolbox & Templates", included: true },
    { name: "Assignment Feedback", included: true },
    { name: "Growth Product Management Specialization", included: true },
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
    { name: "Ask Doubt (1:1 with Mentor on demand)", included: false },
  ],
};

export default function PricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingData = acceleratorPricingData;

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Learning Path</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select the plan that best fits your learning goals and career aspirations
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-3xl p-8 ${"bg-[#1a365d]"}`}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="text-center">
                <h3 className="text-2xl mt-2 font-bold text-white mb-4">{pricingData.title}</h3>
              </div>

              <div className="flex flex-col items-center gap-2 mb-2">
                {/* <span className="text-4xl font-bold text-white">
                  ₹{pricingData.price} text-gray-400 text-sm line-through 
                </span> */}
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">₹{pricingData.mrp}</span>
                </div>
              </div>
            </div>

            {/* Enroll Button */}
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="w-full py-3 px-6 rounded-xl bg-white text-black font-semibold mb-2 hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>

            {/* Features List */}
            <div className="space-y-4">
              {pricingData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className={`w-5 h-5   "text-blue-500"} mt-1 flex-shrink-0`} />
                  ) : (
                    <div className="w-5 h-5 mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-auto mt-1.5" />
                    </div>
                  )}
                  <div>
                    <p className={`${feature.included ? "text-white" : "text-gray-500"}`}>{feature.name}</p>
                    {feature.detail && feature.included && (
                      <p className={`text-sm   "text-blue-500"}`}>{feature.detail}</p>
                    )}
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
