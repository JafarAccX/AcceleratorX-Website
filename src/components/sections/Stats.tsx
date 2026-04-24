import { motion } from "framer-motion";
import { stats } from "../../utils/constants";

export default function Stats() {
  return (
    <section className="relative bg-black py-0 overflow-hidden">
      {/* Global Animated Puzzle Grid */}
      <div className="bg-puzzle-grid absolute inset-0 opacity-20 pointer-events-none"></div>

      {/* Single Upward Beam Effect */}
      <div className="beam-container absolute top-0 left-1/2 w-full h-96 transform -translate-x-1/2 pointer-events-none">
        <div className="beam"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container with Divider Lines */}
        <div className="relative bg-gray-900/80 backdrop-blur-md rounded-3xl p-1 border border-gray-700 shadow-xl overflow-hidden">
          {/* Horizontal and Vertical Connecting Lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full border-t border-gray-600 transform -translate-y-1/2"></div>
            <div className="absolute inset-y-0 left-1/3 border-l border-gray-600"></div>
            <div className="absolute inset-y-0 left-2/3 border-l border-gray-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center justify-center text-center p-8 overflow-hidden"
              >
                {/* Individual Animated Grid with Glow for Each Stat Box */}
                <div className="absolute inset-0 bg-glow-grid opacity-70 pointer-events-none"></div>

                <h3 className="text-gray-400 text-lg font-semibold mb-2 z-10">
                  {stat.title}
                </h3>
                <motion.p
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  className="text-4xl font-bold bg-gradient-to-r from-gray-200 to-indigo-500 text-transparent bg-clip-text mb-2 z-10"
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-500 text-sm z-10">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
