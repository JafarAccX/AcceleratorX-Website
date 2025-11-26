import { motion } from "framer-motion";

const GENCTAPMB = () => {
  const currentYear = new Date().getFullYear();

  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-registration-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#050A14] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main content area */}
          <div className=" rounded-lg p-8 border border-blue-900/20 shadow-md">
            {/* Title section */}
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Build Smarter. Deploy Faster.
              </motion.h2>

              <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-4 py-2 mb-4">
                <span className="text-base text-blue-400 font-medium">
                  Register now to learn complete development — the simple way.
                </span>
              </div>
            </div>

            {/* Value proposition boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10 text-center">
                <p className="text-xl font-bold text-blue-400 mb-1">Integrated</p>
                <p className="text-sm text-gray-400">Code, test, and deploy in one place.</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md border border-purple-500/10 text-center">
                <p className="text-xl font-bold text-purple-400 mb-1">Automated</p>
                <p className="text-sm text-gray-400">Reduce bugs with smart testing.</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md border border-purple-500/10 text-center">
                <p className="text-xl font-bold text-purple-400 mb-1">Fast</p>
                <p className="text-sm text-gray-400">Ship stable builds in minutes.</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10 text-center">
                <p className="text-xl font-bold text-blue-400 mb-1">Professional</p>
                <p className="text-sm text-gray-400">Industry-standard development workflow.</p>
              </div>
            </div>

            {/* CTA button */}
            <div className="flex justify-center">
              <motion.button
                onClick={handleEnrollClick}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
              </motion.button>
            </div>
          </div>

          {/* Footer section */}
          <div className="mt-8 flex flex-col items-center space-y-2 text-center">
            <div className="flex items-center justify-center space-x-2">
              <img src="/favicon.svg" alt="product management certification courses icon" className="h-5 w-5" />
              <span className="text-white text-sm font-medium">AcceleratorX</span>
            </div>
            <p className="text-gray-500 text-xs">{currentYear} AcceleratorX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GENCTAPMB;