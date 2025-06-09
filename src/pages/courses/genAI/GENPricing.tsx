// import { useState } from "react";
// import { Check, Gift } from "lucide-react";
// import EnrollmentModal from "../../../components/EnrollmentModal";
// import ScholarshipForm from "../../../components/ScholarshipForm";
// import DMTimer from "../dmAI/DMTimer";

// const GENPricing = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);

//   const features = [
//     "3-month intensive program",
//     "Live instructor-led sessions",
//     "Real-world AI projects",
//     "Industry-recognized certification",
//     "Lifetime access to course content",
//     "AI community membership",
//     "Career guidance and support",
//     "Project portfolio development",
//     "Interview preparation",
//   ];

//   const plans = [
//     {
//       name: "Regular",
//       price: "34,999",
//       description: "Limited time offer",
//       features: features,
//       highlighted: true,
//     },
//   ];

//   return (
//     <section className="relative py-12 bg-black">
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Timer Banner */}
//         <div className="flex justify-center mb-6">
//           <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2">
//             <span className="text-white text-sm font-medium">Early Bird Offer ends in:</span>
//             <DMTimer initialHours={120} className="text-white font-semibold" />
//           </div>
//         </div>

//         {/* Scholarship Banner */}
//         <div className="max-w-3xl mx-auto mb-12">
//           <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-2 border-blue-500/50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/10">
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-500/20 p-3 rounded-full">
//                 <Gift className="w-8 h-8 text-blue-400" />
//               </div>
//               <div className="text-center sm:text-left">
//                 <h3 className="text-xl font-bold text-white mb-1">Scholarship Available!</h3>
//                 <p className="text-gray-300 text-sm">Start your career with a scholarship</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsScholarshipModalOpen(true)}
//               className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg"
//             >
//               Apply Now
//             </button>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Invest in Your AI Future</h2>
//             <p className="text-gray-400 text-sm">
//               Join our comprehensive AI program and master the future of technology
//             </p>
//           </div>

//           {/* Pricing Cards */}
//           <div className="flex items-center justify-center gap-8 max-w-4xl mx-auto">
//             {plans.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-b min-w-[300px] from-gray-900 to-black border rounded-xl p-8 shadow-xl ${
//                   plan.highlighted ? "border-blue-500" : "border-gray-800"
//                 }`}
//               >
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//                   <p className="text-gray-400 mb-4">{plan.description}</p>
//                   <div className="flex items-baseline justify-center gap-1 mb-4">
//                     <span className="text-3xl font-bold text-white">₹</span>
//                     <span
//                       className={`text-4xl font-bold ${
//                         plan.highlighted
//                           ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       {plan.price}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="space-y-4 mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-2">
//                       <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
//                       <span className="text-sm text-gray-300">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button
//                   onClick={plan.highlighted ? () => setIsModalOpen(true) : undefined}
//                   disabled={!plan.highlighted}
//                   className={`w-full rounded-lg py-3 px-6 font-semibold transition-all duration-300 ${
//                     plan.highlighted
//                       ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
//                       : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"
//                   }`}
//                 >
//                   Enroll Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Enrollment Modal */}
//       <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

//       {/* Scholarship Form Modal */}
//       {isScholarshipModalOpen && <ScholarshipForm onClose={() => setIsScholarshipModalOpen(false)} />}
//     </section>
//   );
// };

// export default GENPricing;

import { useState, useEffect } from "react";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { Check, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const GENPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time until 11:59 PM today for price hike
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
      name: "Regular",
      currentPrice: "34,999",
      newPrice: "38,499",
      description: "Limited time offer",
      features: features,
      highlighted: true,
    },
  ];

  const CountdownBox = ({ value, label }) => (
    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 min-w-[70px]">
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
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Invest in Your AI Future</h2>
        <p className="text-gray-400 text-sm">Join our comprehensive AI program and master the future of technology</p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-start  js px-4 relative z-10">
        {/* Price Hike Alert */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className=" mx-auto mb-8 w-full">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </motion.div>
              <h3 className="text-blue-400 font-bold text-lg">Price Increase Alert!</h3>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>

            <p className="text-white text-center mb-4">
              <span className="font-semibold">₹34,999</span> →{" "}
              <span className="font-semibold text-blue-400">₹37,499</span>
            </p>

            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Clock className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <span className="text-cyan-400 font-medium">Price increases in:</span>
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
        <div className="w-full mx-auto">
          {/* Pricing Cards */}
          <div className="flex items-center justify-center gap-8  w-full mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-b min-w-[300px] w-full max-w-[400px] from-gray-900 to-black border rounded-xl p-8 shadow-xl ${
                  plan.highlighted ? "border-blue-500 shadow-blue-500/20" : "border-gray-800"
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">₹</span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                      {plan.currentPrice}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={plan.highlighted ? () => setIsModalOpen(true) : undefined}
                  disabled={!plan.highlighted}
                  className={`w-full rounded-lg py-3 px-6 font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"
                  }`}
                >
                  🚀 Secure Current Price
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Scholarship Form Modal */}
      {isScholarshipModalOpen && <ScholarshipForm onClose={() => setIsScholarshipModalOpen(false)} />}
    </section>
  );
};

export default GENPricing;
