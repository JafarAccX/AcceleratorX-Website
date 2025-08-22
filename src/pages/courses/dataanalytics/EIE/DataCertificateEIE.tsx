import React from "react";
import { motion } from "framer-motion";
import dataCertificate from "/assets/programcertificates/DACertificate.webp";

const DataCertificateEIE = () => {
  // Initialize cache mechanism
  const cacheKey = "data-analytics-certificate-cache";
  const [cachedImage, setCachedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Try to get cached image from localStorage
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setCachedImage(cached);
    }

    // Fetch and cache new image
    const cacheImage = async () => {
      try {
        const response = await fetch(dataCertificate);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result as string;
          localStorage.setItem(cacheKey, base64data);
          setCachedImage(base64data);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error caching certificate image:", error);
      }
    };

    if (!cached) {
      cacheImage();
    }
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#F4F9F4] via-[#F4F9F4] to-[#F4F9F4] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A5D1A]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A5D1A]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/60 to-[#1A5D1A]/30 rounded-full blur opacity-75"></div>
              <span className="relative text-[#1A5D1A] text-lg font-semibold px-6 py-2 rounded-full border border-[#1A5D1A]/20">
                Validate Your Expertise
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/20 to-transparent blur-lg opacity-50"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold text-[#1A5D1A]">
                Professional Certifications
              </h2>
            </div>
            <p className="mt-6 text-xl text-[#1F441E] max-w-2xl mx-auto">
              Accelerate your career with our industry-recognized certifications
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm p-4">
            <img
              src={cachedImage || dataCertificate}
              alt="Data Analytics Certificate"
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCertificateEIE;
