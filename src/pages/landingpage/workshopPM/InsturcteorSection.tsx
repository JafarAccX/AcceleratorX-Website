import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";

const InstructorSection = () => {
  const instructorDetails = {
    name: "Subhas Chand",
    title: "Senior Product Manager",
  };

  const scrollToForm = () => {
    // Your scroll logic here
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b ">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto ">
        {/* Instructor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative group col-span-2 "
        >
          <div className="    rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl  pointer-events-none" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8"
              >
                Meet {instructorDetails.name}
              </motion.h2>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Profile Image */}
                {/* <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 p-1">
                    <div className="w-full h-full bg-gray-900 rounded-xl p-1">
                      <img
                        src="/assets/mentor/subhasis.webp"
                        alt={instructorDetails.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div> */}

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{instructorDetails.name}</h3>
                      <span className="hidden sm:block text-gray-500">|</span>
                      <p className="text-blue-400 font-medium text-lg">{instructorDetails.title}</p>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      Dynamic product leader with expertise in driving innovation across edtech and SaaS. Specializes in
                      business strategy, product development, and user experience with a passion for creating impactful
                      solutions that bridge technology and user needs.
                    </p>
                  </motion.div>

                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="block lg:hidden pt-4"
                  >
                    <motion.button
                      onClick={scrollToForm}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      Reserve Your Spot
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative group "
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Official Certificate</h3>
              </div>

              <p className="text-blue-100 mb-4 text-lg">
                All attendees will receive an official certificate from AcceleratorX!
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <p className="text-gray-300 text-sm">
                  💡 <strong>Note:</strong> Please attend the entire session to qualify for the certificate.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
      />
    </section>
  );
};

export default InstructorSection;
