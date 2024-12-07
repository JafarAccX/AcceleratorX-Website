import React from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { CountdownTimer } from "../../../components/CountdownTimer";

export const XSATHero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20 z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] gap-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-500">
                India's First Industrial Scholarship Test
              </span>
            </h1>
          </motion.div>

          {/* Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-6"
          >
            {/* Scholarship Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-[#121212] border border-gray-800 shadow-lg rounded-2xl p-6 w-80 text-white"
            >
              <div className="absolute -top-4 -left-4 bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4 pt-6">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-400">
                    Win scholarships worth
                  </div>
                  <div className="text-4xl font-bold text-yellow-400">
                    ₹1 Crore+
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-[#121212] border border-gray-800 shadow-lg rounded-2xl p-6 w-80 text-white"
            >
              <div className="absolute -top-4 -left-4 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4 pt-6">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-400">
                    Transform your future with
                  </div>
                  <div className="text-2xl font-bold">
                    <img
                      src="/companylogo.png"
                      alt="companyLogo"
                      className="mx-auto w-29"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
