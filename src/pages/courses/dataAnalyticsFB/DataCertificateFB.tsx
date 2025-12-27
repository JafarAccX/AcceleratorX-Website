import React from "react";
import { motion } from "framer-motion";
import dataCertificate from "/assets/programcertificates/dawithoutmalta.webp";

const DataCertificateFB = () => {
  return (
    <section className="relative bg-[#0B1120] text-white py-2 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Accelerate your career with our industry-recognized certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-800/50 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-blue-400 font-medium">
                  Data Analytics
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Advanced Certification Program
                </h3>
                <p className="text-gray-400">
                  Our advanced certification program equips you with the
                  expertise and insights to thrive in your industry.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="aspect-[4/3] rounded-xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                <img
                  src={dataCertificate}
                  alt="Certificate Preview"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="absolute -bottom-4 -right-4 bg-blue-600/10 w-32 h-32 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCertificateFB;
