import { useState } from "react";
import PricingCard from "../../../components/PricingCard";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { Check } from "lucide-react";

export default function DataPricingFB() {
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
    <section className="relative py-8 bg-[#0B1120] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Your Future Starts Here – No Surprises, Just Value
          </h2>
        </div>

        <PricingCard
          courseName="Data Analytics"
          originalPrice={16999}
          discountedPrice={14999}
          features={features}
          onEnroll={() => setIsModalOpen(true)}
        />
        {/* <PricingCard
          courseName="Data Analytics"
          originalPrice={35400}
          discountedPrice={14999}
          features={features}
          onEnroll={() => setIsModalOpen(true)}
        /> */}

        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
