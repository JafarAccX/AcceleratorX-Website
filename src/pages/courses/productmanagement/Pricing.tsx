import { useState } from "react";
import PricingCard from "../../../components/PricingCard";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { Check, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const productManagementFeatures = [
  {
    icon: <Trophy className="h-5 w-5 text-yellow-500" />,
    text: "Comprehensive Product Management Curriculum from Basic to Advance",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
    text: "Growth Product Management (Specialization)",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-blue-500" />,
    text: "AI Product Management Specialisation",
  },
  {
    icon: <Trophy className="h-5 w-5 text-yellow-500" />,
    text: "Build a Product Portfolio with BYDP",
  },
  {
    icon: <Check className="h-5 w-5 text-green-500" />,
    text: "Product Analytics & Industry Relevant Tools",
  },
  {
    icon: <Check className="h-5 w-5 text-green-500" />,
    text: "Mock Interviews with Industry Leaders",
  },
  {
    icon: <Check className="h-5 w-5 text-green-500" />,
    text: "Comprehensive Interview Guide & Practice material",
  },
  {
    icon: <Check className="h-5 w-5 text-green-500" />,
    text: "Exclusive Access To Our Job Portal",
  },
  {
    icon: <Trophy className="h-5 w-5 text-yellow-500" />,
    text: "Priority Screening In Job Applications & Queue",
  },
  {
    icon: <Check className="h-5 w-5 text-green-500" />,
    text: "Verifiable Certificate",
  },
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Invest in Your Future
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your career with our comprehensive programs
          </p>
        </motion.div>

        <PricingCard
          courseName="Product Management"
          originalPrice={39999}
          discountedPrice={34999}
          features={productManagementFeatures}
          onEnroll={() => setIsModalOpen(true)}
        />
        {/* <PricingCard
          courseName="Product Management"
          originalPrice={59000}
          discountedPrice={24999}
          features={productManagementFeatures}
          onEnroll={() => setIsModalOpen(true)}
        /> */}

        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
