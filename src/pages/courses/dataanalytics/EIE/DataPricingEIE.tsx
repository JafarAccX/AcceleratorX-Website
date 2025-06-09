import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Clock, TrendingUp } from "lucide-react";
import EnrollmentModal from "../../../../components/EnrollmentModal";

const eiePricingData = {
  title: "EIE European Business School Program",
  mrp: "39,999",
  features: [
    {
      name: "EIE European Business School Malta University Certificate",
      included: true,
    },
    { name: "Data Analytics Toolbox & Templates", included: true },
    { name: "Assignment Feedback", included: true },
    {
      name: "Product Analytics Specialization ",
      included: true,
      highlight: true,
    },
    { name: "Mock Interviews", included: true, detail: "1:1 + Group" },
    { name: "Personalized Skill Report", included: true },
    { name: "AcceleratorX Job Priority Access", included: true },
    { name: "Alumni Access & Exclusive Content", included: true },
    { name: "Project-Based Mini Challenges", included: true },
    { name: "Exclusive Data Analytics Workshops & Events", included: true },
    { name: "Bi-Weekly Career Review Calls", included: true },
    { name: "Chance to win Industry Internship", included: true },
    { name: "Data Analytics Portfolio Workshop", included: true },
    { name: "Project Showcase on Wall of Analytics", included: true },
    { name: "Ask Doubt (1:1 with Mentor on demand)", included: true },
  ],
};

const dataAnalyticsPricingData = {
  title: "AcceleratorX Program",
  currentPrice: "29,999",
  newPrice: "32,999",
  features: [
    { name: "AI Automation techniques for Data analytics", included: true },
    { name: "Data Engineering Basics", included: true },
    { name: "Full Data Analytics Curriculum", included: true },
    { name: "Personalized CAPE Project", included: true },
    {
      name: "Product Analytics Specialization (optional)",
      included: true,
      highlight: true,
    },
    { name: "Real-world, hands-on project experiences", included: true },
    { name: "Access to industry-leading tools and datasets", included: true },
    { name: "Mock Interviews with Industry Leaders", included: true },
    { name: "Comprehensive Interview Guide", included: true },
    { name: "Exclusive Access To Our Job Portal", included: true },
    { name: "Priority Screening In Job Applications", included: true },
    { name: "Verifiable Certificate", included: true },
  ],
};

export default function DataPricingEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isEIE, setIsEIE] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const pricingData = isEIE ? eiePricingData : dataAnalyticsPricingData;

  // Calculate time until 11:59 PM today
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const today = new Date();
      today.setHours(23, 59, 0, 0); // Set to 11:59 PM today

      // If it's already past 11:59 PM today, set to 11:59 PM tomorrow
      if (now > today) {
        today.setDate(today.getDate() + 1);
      }

      const difference = today - now;

      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }) => (
    <div className="bg-[#1a365d]   rounded-lg p-3 min-w-[70px]">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold text-white text-center"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <div className="text-xs text-gray-300 text-center uppercase tracking-wide">{label}</div>
    </div>
  );

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Learning Path</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Select the plan that best fits your learning goals and career aspirations
        </p>
      </div>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Price Hike Alert - Only show for AcceleratorX */}
        {!isEIE && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto mb-6 "
          >
            <div className="  rounded-xl p-4 bg-[#1a365d]/50 w-full">
              <div className="flex items-center justify-center gap-2 mb-3 ">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <TrendingUp className="w-5 h-5 text-[#1a365d]" />
                </motion.div>
                <h3 className="text-[#1a365d] font-bold text-lg">Price Increase Alert!</h3>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <TrendingUp className="w-5 h-5 text-[#1a365d]" />
                </motion.div>
              </div>

              <p className="text-white text-xl text-center mb-4">
                <span className="font-semibold">₹29,999</span> → <span className="font-semibold ">₹32,999</span>
              </p>

              <div className="flex items-center justify-center gap-2 mb-4">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  <Clock className="w-5 h-5 text-orange-400" />
                </motion.div>
                <span className="text-orange-400 font-medium">Price increases in:</span>
              </div>

              <div className="flex justify-center gap-3">
                <CountdownBox value={timeLeft.hours} label="Hours" />
                <div className="flex flex-col justify-center">
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-white text-2xl font-bold"
                  >
                    :
                  </motion.div>
                </div>
                <CountdownBox value={timeLeft.minutes} label="Mins" />
                <div className="flex flex-col justify-center">
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-white text-2xl font-bold"
                  >
                    :
                  </motion.div>
                </div>
                <CountdownBox value={timeLeft.seconds} label="Secs" />
              </div>

              <p className="text-xs text-gray-300 text-center mt-3">
                Secure your spot at the current price before it increases!
              </p>
            </div>
          </motion.div>
        )}

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-3xl p-8 ${isEIE ? "bg-[#0A2615]" : "bg-[#1a365d]"}`}
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <div
                className={`${
                  isEIE ? "bg-[#5CB338]" : "bg-blue-600"
                } text-white text-xs font-medium px-3 py-1 rounded-lg`}
              >
                Most Popular
              </div>
            </div>

            {/* Header */}
            <div className="mb-6">
              <div className="text-center">
                <h3 className="text-2xl mt-2 font-bold text-white mb-4">{pricingData.title}</h3>
              </div>

              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">
                    ₹{isEIE ? pricingData.mrp : pricingData.currentPrice}
                  </span>
                  {!isEIE && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-400 line-through">
                        ₹{pricingData.newPrice} (after price hike)
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full"
                      >
                        Save ₹3,000
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Enroll Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(true);
                setSelectedPlan(pricingData.title);
              }}
              className={`w-full py-3 px-6 rounded-xl font-semibold mb-2 transition-all duration-300 ${
                !isEIE
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {!isEIE ? "🔥 Secure Current Price" : "Enroll Now"}
            </motion.button>

            {/* Money Back Guarantee */}
            {isEIE && (
              <div className="text-center mb-8">
                <p className="text-xs text-amber-400 flex items-center justify-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                  *15 Days Money Back Guarantee
                  <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                </p>
              </div>
            )}

            {/* Features List */}
            <div className="space-y-4">
              {pricingData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check
                      className={`w-5 h-5 ${
                        isEIE ? (feature.highlight ? "text-amber-400" : "text-[#5CB338]") : "text-blue-500"
                      } mt-1 flex-shrink-0`}
                    />
                  ) : (
                    <div className="w-5 h-5 mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-auto mt-1.5" />
                    </div>
                  )}
                  <div>
                    <p
                      className={`${
                        feature.included ? (feature.highlight ? "text-amber-400" : "text-white") : "text-gray-500"
                      }`}
                    >
                      {feature.name}
                    </p>
                    {feature.detail && feature.included && (
                      <p className={`text-sm ${isEIE ? "text-[#5CB338]" : "text-blue-500"}`}>{feature.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} plan={selectedPlan} />
    </section>
  );
}
