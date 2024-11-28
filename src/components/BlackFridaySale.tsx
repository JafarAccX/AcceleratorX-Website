import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Zap, X } from "lucide-react";
import { Timer } from "./Timer";

const BlackFridaySale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const targetDate = new Date("2024-11-30");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center px-4 z-50 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] shadow-2xl border border-white/10"
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-white/10 rounded-full p-2 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Main Content */}
              <div className="px-8 py-10 md:px-12 md:py-14">
                <div className="flex flex-col items-center text-center space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center justify-center space-x-3 mb-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="relative">
                        <Zap className="w-8 h-8 text-yellow-400 filter drop-shadow-lg" />
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                      <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
                          BLACK FRIDAY
                        </span>
                      </h2>
                      <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                    </motion.div>

                    <div className="space-y-2">
                      <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Save up to 70% on Premium Courses
                      </p>
                      <p className="text-blue-200/80 text-lg">
                        Master new skills with our biggest discount of the year!
                      </p>
                    </div>
                  </div>

                  {/* Timer */}
                  <Timer timeLeft={timeLeft} />

                  {/* CTA Button */}
                  {/* <motion.button
                    className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transform transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Claim Your Discount Now
                  </motion.button> */}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-300"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BlackFridaySale;
