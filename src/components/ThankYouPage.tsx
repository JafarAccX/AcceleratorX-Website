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

        {/* Join Our Community Section */}
        <motion.div
          className="space-y-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="text-center space-y-2">
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            >
              Join Our Community
            </motion.h2>
            <motion.p 
              className="text-gray-400"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
            >
              Connect with us and other learners
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* WhatsApp Button */}
            <motion.a
              href="https://chat.whatsapp.com/IvnND9N9iMXBcdaf2a8lwJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl p-0.5 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#25D366] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" />
              <div className="relative flex items-center gap-4 bg-gray-900 p-4 rounded-[10px] transition-all duration-300 group-hover:bg-gray-900/80">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors duration-300">Join WhatsApp</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get Daily Updates</span>
                </div>
              </div>
            </motion.a>

            {/* Discord Button */}
            <motion.a
              href="https://discord.gg/WKAdQuuv"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl p-0.5 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#5865F2] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500" />
              <div className="relative flex items-center gap-4 bg-gray-900 p-4 rounded-[10px] transition-all duration-300 group-hover:bg-gray-900/80">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors duration-300">Join Discord</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">For Job Opportunities</span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
