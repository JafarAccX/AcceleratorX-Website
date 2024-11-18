import { motion } from "framer-motion";
import { dataAnalyticsmodules } from "../../../utils/constants";

const DataProgram = () => {
  return (
    <section
      id="program"
      className="relative py-24 px-6 overflow-hidden bg-black"
    >
      <div className="relative z-50 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
            Program Highlights
          </h2>
        </motion.div>

        {/* First set of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {dataAnalyticsmodules.slice(0, 3).map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-blue-900/10 glow-border hover:border-blue-400/50 transition-all duration-300 group backdrop-blur-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <img
                  src={module.image}
                  alt={module.title}
                  className="h-12 w-12"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {module.title}
              </h3>
              <p className="text-gray-300 mb-6">{module.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Line and Header for "Doorway to your first product role" */}
        <div className="col-span-full mb-10 text-center">
          <hr className="border-blue-500/20 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-300">
            Doorway to your first data analyst role
          </h3>
        </div>

        {/* Second set of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {dataAnalyticsmodules.slice(3, 6).map((module, index) => (
            <motion.div
              key={index + 3} // Offset index for the second set
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.2 }}
              className="relative p-8 rounded-2xl bg-blue-900/10 glow-border hover:border-blue-400/50 transition-all duration-300 group backdrop-blur-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <img
                  src={module.image}
                  alt={module.title}
                  className="h-12 w-12"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {module.title}
              </h3>
              <p className="text-gray-300 mb-6">{module.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Line and Header for "Build Your Network" */}
        <div className="col-span-full mb-10 text-center">
          <hr className="border-blue-500/20 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-300">
            Build Your Network
          </h3>
        </div>

        {/* Third set of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataAnalyticsmodules.slice(6).map((module, index) => (
            <motion.div
              key={index + 6} // Offset index for the third set
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 6) * 0.2 }}
              className="relative p-8 rounded-2xl bg-blue-900/10 glow-border hover:border-blue-400/50 transition-all duration-300 group backdrop-blur-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <img
                  src={module.image}
                  alt={module.title}
                  className="h-12 w-12"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {module.title}
              </h3>
              <p className="text-gray-300 mb-6">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataProgram;
