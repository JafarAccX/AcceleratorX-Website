import { motion } from "framer-motion";
import { dataAnalyticsmodules } from "../../../../utils/constants";

const DataProgramEIE = () => {
  return (
    <section
      id="program"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-[#0A0F1E] via-[#0D1326] to-[#0A0F1E]"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] animate-pulse">
          <div className="absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] animate-pulse delay-1000">
          <div className="absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform -rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse"></div>
        </div>
        {/* Premium grid pattern */}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/60 to-[#96E072]/30 rounded-full blur opacity-75"></div>
            <span className="relative text-[#96E072] text-lg font-semibold px-6 py-2 rounded-full border border-[#96E072]/20">
              Core Benefits
            </span>
          </motion.div>

          <div className="mt-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg opacity-50"></div>
            <h2 className="relative text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text mb-10 pb-3">
              Your Path to AI Data Analytics Mastery
            </h2>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg relative backdrop-blur-sm">
            Gain the essential skills and tools to excel as a data analyst.
          </p>
        </motion.div>

        {/* Module Cards */}
        {[0, 3, 6].map((startIndex) => (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {dataAnalyticsmodules.slice(startIndex, startIndex + 3).map((module, index) => {
                return module.title === "AI-Powered Tools & Tech Training" ? (
                  <motion.div
                    key={startIndex + index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative"
                  >
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F2B50D]/30 to-[#F2B50D]/10 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                    {/* Card content */}
                    <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] border border-[#F2B50D]/20 group-hover:border-[#F2B50D]/40 transition-all duration-500 backdrop-blur-sm flex flex-col items-center text-center transform hover:-translate-y-2">
                      {/* Icon container */}
                      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-[#F2B50D]/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          <div className="relative bg-gradient-to-b from-[#F2B50D]/20 to-[#F2B50D]/5 p-4 rounded-full">
                            <img src={module.image} alt={module.title} className="h-12 w-12 relative z-10" />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#F2B50D] to-[#F2B50D]/90 text-transparent bg-clip-text group-hover:from-[#F2B50D] group-hover:to-[#F2B50D] transition-all duration-300">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{module.description}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={startIndex + index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative"
                  >
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                    {/* Card content */}
                    <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] border border-[#96E072]/20 group-hover:border-[#96E072]/40 transition-all duration-500 backdrop-blur-sm flex flex-col items-center text-center transform hover:-translate-y-2">
                      {/* Icon container */}
                      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-[#96E072]/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          <div className="relative bg-gradient-to-b from-[#96E072]/20 to-[#96E072]/5 p-4 rounded-full">
                            <img src={module.image} alt={module.title} className="h-12 w-12 relative z-10" />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text group-hover:from-[#96E072] group-hover:to-[#96E072] transition-all duration-300">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{module.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {startIndex < 6 && (
              <motion.div
                className="col-span-full mb-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-full blur opacity-75"></div>
                  <div className="relative flex items-center justify-center gap-4 px-8 py-3">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#96E072]/30 to-transparent"></div>
                    <h3 className="text-2xl font-bold text-[#96E072]/90">
                      {startIndex === 0
                        ? "Your Roadmap to an AI Data Analyst career."
                        : "Level up your Career in Data Analytics."}
                    </h3>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#96E072]/30 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default DataProgramEIE;
