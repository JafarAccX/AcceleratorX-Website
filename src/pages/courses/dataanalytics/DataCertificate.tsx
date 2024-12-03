import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import certificate from "/main_certificate.jpg";

const CERTIFICATE_DOWNLOAD_URL = import.meta.env.VITE_DATA_ANALYTICS_CERTIFICATE_URL;

const DataCertificate = () => {
  // Initialize cache mechanism
  const cacheKey = 'data-analytics-certificate-cache';
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
        const response = await fetch(certificate);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result as string;
          localStorage.setItem(cacheKey, base64data);
          setCachedImage(base64data);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error caching certificate image:', error);
      }
    };

    if (!cached) {
      cacheImage();
    }
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
                onClick={() => window.open(CERTIFICATE_DOWNLOAD_URL, "_blank")}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Sample Certificate
              </motion.button>
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
                  src={cachedImage || certificate}
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

export default DataCertificate;
