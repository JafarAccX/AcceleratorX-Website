import { motion } from "framer-motion";
import { dataAnalyticsmodules } from "../../../utils/constants";

const DataProgramFB = () => {
  return (
    <section
      id="program"
      className="relative py-32 px-6 overflow-hidden bg-[#0B1120]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <motion.span
            className="text-blue-400 text-lg font-semibold mb-4 block relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Journey to Success
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text mb-8 py-3 relative">
            Program Highlights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg relative">
            Master the essential skills and tools needed to become a successful
            data analyst
          </p>
        </motion.div>

        {/* First set of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {dataAnalyticsmodules.slice(0, 3).map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-[#0F172A] border border-blue-500/10 hover:border-blue-400/50 transition-all duration-500 group backdrop-blur-sm flex flex-col items-center text-center hover:transform hover:-translate-y-2"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full filter blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <img
                    src={module.image}
                    alt={module.title}
                    className="h-16 w-16 relative z-10"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
                {module.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section divider with enhanced styling */}
        <motion.div
          className="col-span-full mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <h3 className="text-2xl font-bold text-blue-300">
              Doorway to your first data analyst role
            </h3>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Second set of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {dataAnalyticsmodules.slice(3, 6).map((module, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.2 }}
              className="relative p-8 rounded-3xl bg-[#0F172A] border border-blue-500/10 hover:border-blue-400/50 transition-all duration-500 group backdrop-blur-sm flex flex-col items-center text-center hover:transform hover:-translate-y-2"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full filter blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <img
                    src={module.image}
                    alt={module.title}
                    className="h-16 w-16 relative z-10"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
                {module.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section divider with enhanced styling */}
        <motion.div
          className="col-span-full mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <h3 className="text-2xl font-bold text-blue-300">
              Build Your Network
            </h3>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Third set of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataAnalyticsmodules.slice(6).map((module, index) => (
            <motion.div
              key={index + 6}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 6) * 0.2 }}
              className="relative p-8 rounded-3xl bg-[#0F172A] border border-blue-500/10 hover:border-blue-400/50 transition-all duration-500 group backdrop-blur-sm flex flex-col items-center text-center hover:transform hover:-translate-y-2"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full filter blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <img
                    src={module.image}
                    alt={module.title}
                    className="h-16 w-16 relative z-10"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
                {module.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataProgramFB;
