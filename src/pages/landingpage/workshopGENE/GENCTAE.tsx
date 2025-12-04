import { motion } from "framer-motion";

const GENCTAE = () => {
  const currentYear = new Date().getFullYear();

  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#050A14] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main content area */}
          <div className="bg-[#0A1020] rounded-lg p-8 border border-blue-900/20 shadow-md">
            {/* Title section */}
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Build Smarter AI — Powered by Hybrid RAG
              </motion.h2>

              <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-4 py-2 mb-4">
                <span className="text-base text-blue-400 font-medium">
                  Register now for hands-on Hybrid RAG Agent development
                </span>
              </div>
            </div>

            {/* Value proposition boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10 text-center">
                <p className="text-xl font-bold text-blue-400 mb-1">Hybrid Retrieval</p>
                <p className="text-sm text-gray-400">Best of sparse and dense methods.</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md border border-green-500/10 text-center">
                <p className="text-xl font-bold text-green-400 mb-1">Superior Accuracy</p>
                <p className="text-sm text-gray-400">Enhanced performance with multiple strategies.</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md border border-green-500/10 text-center">
                <p className="text-xl font-bold text-green-400 mb-1">Multi-Source</p>
                <p className="text-sm text-gray-400">Integrate diverse data sources seamlessly.</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md border border-green-500/10 text-center">
                <p className="text-xl font-bold text-blue-400 mb-1">Production Ready</p>
                <p className="text-sm text-gray-400">Deploy hybrid RAG agents that scale.</p>
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
                Build Your First Hybrid RAG Agent Today
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

export default GENCTAE;
