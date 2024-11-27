import React, { useState } from "react";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

const features = [
  "🎯 Lifetime Course Access",
  "👨‍🏫 Personal Mentorship",
  "📱 Mobile App Access",
  "💬 Priority Support",
  "📚 Project-based Learning",
  "🎖️ Certification",
];

const comparisonData = [
  {
    feature: "🎯 Lifetime Access",
    ourPlatform: true,
    others: false,
  },
  {
    feature: "💰 One-time Payment",
    ourPlatform: true,
    others: false,
  },
  {
    feature: "🛠️ Project-based Learning",
    ourPlatform: true,
    others: true,
  },
  {
    feature: "💼 Industry-relevant Skills",
    ourPlatform: true,
    others: true,
  },
  {
    feature: "👨‍🏫 Personal Mentorship",
    ourPlatform: true,
    others: false,
  },
];

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              🎓 Learn & Grow
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            ✨ Transform Your Career with Premium Education
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Pricing Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="transform overflow-hidden rounded-2xl bg-gray-900 p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-blue-500/20">
                <div className="relative space-y-8">
                  {/* Price Display */}
                  <div className="relative">
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-bold text-blue-400">
                        ₹6,000
                      </span>
                      <span className="ml-2 text-sm text-gray-400">
                        lifetime access
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-400">Best Value</span>
                    </div>
                  </div>

                  <hr className="border-gray-700" />

                  {/* Feature List */}
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1"
                      >
                        <Check className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enroll Button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-700"
                  >
                    <div className="relative flex items-center justify-center gap-2">
                      <span className="font-semibold">Enroll Now</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 transition-transform duration-500 group-hover:translate-x-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-8 text-center text-2xl font-semibold text-white">
              🔄 How We Compare
            </h3>
            <div className="overflow-hidden rounded-xl bg-gray-900 shadow-lg border border-blue-500/20">
              <div className="overflow-x-auto">
                <table className="w-full min-w-full table-fixed border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="w-1/3 px-6 py-4 text-left text-sm font-semibold text-white">
                        Feature
                      </th>
                      <th className="w-1/3 px-6 py-4 text-left text-sm font-semibold text-blue-400">
                        ⭐ Our Platform
                      </th>
                      <th className="w-1/3 px-6 py-4 text-left text-sm font-semibold text-white">
                        Others
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {comparisonData.map((item, index) => (
                      <tr
                        key={index}
                        className="transition-colors duration-200 hover:bg-gray-800"
                      >
                        <td className="px-6 py-4 text-sm text-white">
                          {item.feature}
                        </td>
                        <td className="px-6 py-4">
                          {item.ourPlatform ? (
                            <Check className="h-5 w-5 text-blue-400" />
                          ) : (
                            <X className="h-5 w-5 text-gray-500" />
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {item.others ? (
                            <Check className="h-5 w-5 text-gray-400" />
                          ) : (
                            <X className="h-5 w-5 text-gray-500" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
}
