import React from "react";
import { motion } from "framer-motion";

const GENCTA = () => {
  const currentYear = new Date().getFullYear();

  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black flex items-center justify-center pb-20 px-4">
      <div className="relative max-w-2xl w-full text-center space-y-8">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-xl md:text-3xl font-bold text-white">Don’t Just Scroll. Automate.</h2>
          <p className="text-gray-400 text-base">This is not another “watch and forget” session.</p>
          <p className="text-gray-300 text-base">
            This is your shortcut to turning social media into a lead-gen machine using{" "}
            <span className="text-blue-400 font-semibold">Make.com</span> — in just 90 minutes.
          </p>
        </motion.div>

        {/* Feature + Badge Cards as Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Feature Card 1 */}
          <div className="bg-white/5 p-5 rounded-xl text-center shadow-lg border border-white/10">
            <p className="text-2xl font-bold text-blue-400">2 Hours</p>
            <p className="text-sm text-gray-400 mt-1">Live Workshop</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/5 p-5 rounded-xl text-center shadow-lg border border-white/10">
            <p className="text-2xl font-bold text-green-400">Interactive</p>
            <p className="text-sm text-gray-400 mt-1">Q&A Session</p>
          </div>

          {/* Badge Card 1 */}
          <div className="bg-blue-600/20 p-5 rounded-xl text-center shadow-lg border border-blue-600/30">
            <p className="text-lg font-semibold text-blue-400">Seats are limited</p>
          </div>

          {/* Badge Card 2 */}
          <div className="bg-green-600/20 p-5 rounded-xl text-center shadow-lg border border-green-600/30">
            <p className="text-lg font-semibold text-green-400">₹99 only</p>
          </div>

          {/* Badge Card 3 (Full width on small screens) */}
          <div className="sm:col-span-2 bg-white/10 p-5 rounded-xl text-center shadow-lg border border-white/10">
            <p className="text-lg font-semibold text-white">Real tools. Real Results.</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={handleEnrollClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold uppercase hover:from-blue-700 hover:to-blue-800 transition mt-6"
          >
            REGISTER NOW & START AUTOMATING
          </button>
        </motion.div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-flow"></div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes border-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GENCTA;
