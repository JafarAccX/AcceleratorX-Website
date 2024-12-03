import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ThankYouPageProps {
  courseName: string;
}

export default function ThankYouPage({ courseName }: ThankYouPageProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
          <p className="mt-4 text-gray-300 text-lg">
            Loading your enrollment details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4"
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Success Icon */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          className="space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-4xl font-bold text-white">Thank You!</h1>
          <p className="text-xl text-gray-300">
            Your enrollment for {courseName} has been successfully submitted.
          </p>
          <p className="text-gray-400">
            Our team will contact you shortly with further details.
          </p>
        </motion.div>

        {/* Course Info */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-300 text-lg">
            Get ready to start your journey with
            <span className="text-white font-semibold block mt-2">
              {courseName}
            </span>
          </p>
        </motion.div>

        {/* Know More Button */}
        <motion.button
          onClick={() => window.location.href = "https://acceleratorx.org"}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Know More About Us
        </motion.button>
      </div>
    </motion.div>
  );
}
