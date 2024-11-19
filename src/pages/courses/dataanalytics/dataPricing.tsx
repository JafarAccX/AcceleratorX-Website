import { useState } from "react";
import PricingCard from "../../../components/PricingCard";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { Check } from "lucide-react";

export default function DataPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Check className="h-5 w-5 text-blue-500" />,
      text: "Full Data Analytics Curriculum",
    },
    {
      icon: <Check className="h-5 w-5 text-blue-500" />,
      text: "Personalized CAPE Project",
    },
    {
      icon: <Check className="h-5 w-5 text-blue-500" />,
      text: "Real-world, hands-on project experiences",
    },
    {
      icon: <Check className="h-5 w-5 text-blue-500" />,
      text: "Access to industry-leading tools and datasets",
    },
    {
      icon: <Check className="h-5 w-5 text-blue-500" />,
      text: "Exclusive interview prep resources to maximize your hiring potential",
    },
  ];

  return (
    <div className="py-24 bg-[#111827]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Your Future Starts Here – No Surprises, Just Value
          </h2>
        </div>

        <PricingCard
          courseName="Data Analytics"
          originalPrice={35400}
          discountedPrice={27999}
          features={features}
          onEnroll={() => setIsModalOpen(true)}
        />

        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
