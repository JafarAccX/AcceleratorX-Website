import { motion } from "framer-motion";
import { Code, Database, Server } from "lucide-react";

const GENCTAC = () => {
  const currentYear = new Date().getFullYear();

  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 bg-black"></div>

      {/* Main Content */}
      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* Heading */}
            <motion.h2
              className="text-4xl   font-bold text-center text-white max-w-3xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Build Your First AI Agent – Live in 2 Hours
            </motion.h2>

            {/* Badge */}
            <motion.div
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-blue-500/10 rounded-full px-6 py-2">
                <span className="text-lg font-bold text-white">Hands-On. No Pressure. Real Skills.</span>
              </div>
            </motion.div>

            {/* Value Props */}
            <motion.div
              className="flex flex-col items-center space-y-4  mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <Server className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-green-400">Use Your Own Data</p>
                  <p className="text-sm text-gray-400">PDFs, notes, websites, databases</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <Database className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-purple-400">Step-by-Step Guidance</p>
                  <p className="text-sm text-gray-400">From blank page to working Agent</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <Code className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-blue-400">Smart Responses, Your Way</p>
                  <p className="text-sm text-gray-400">Agents that know what you mean, not just what you type</p>
                </div>
              </div>
            </motion.div>

            {/* Button Section */}
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="bg-blue-500/10 rounded-full px-6 py-2 text-lg font-bold text-white">
                Hands-On. No Pressure. Real Skills.
              </p>
              <p>100+ beginners have already built with us. Now it’s your turn.</p>
              <p>Click Register Now – Join the live bootcamp and build your first AI Agents!</p>
              {/* Button */}
              <button
                onClick={handleEnrollClick}
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 text-lg font-semibold">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
              </button>
            </motion.div>

            {/* Footer Section */}
            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <img src="/favicon.svg" alt="AcceleratorX" className="h-6 w-6" />
                <span className="text-white font-medium">AcceleratorX</span>
              </div>
              <p className="text-gray-400 text-sm">{currentYear} AcceleratorX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[slide_3s_linear_infinite]" />
      </div>
    </div>
  );
};

export default GENCTAC;
