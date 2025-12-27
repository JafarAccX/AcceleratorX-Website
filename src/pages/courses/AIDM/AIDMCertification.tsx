import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Shield, Trophy } from 'lucide-react';

const certificationFeatures = [
  "Industry-recognized Nano Degree in AI Digital Marketing",
  "Verified badge + unique verification ID",
  "Digital AI Marketing Nano Degree for LinkedIn and resume",
  "Trusted by 2500+ companies and agencies",
  "AI Marketing Projects portfolio",
  "Lifetime exclusive alumni community access"
];

const AIDMCertification: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Certificate Frame */}
            <div className="relative border-4 border-[#5CB338] aspect-[4/3] rounded-2xl overflow-hidden">
                {/* Certificate Image */}
                <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <img
                      src="/assets/certificates/Nano_Degree_in_DM.webp"
                      alt="Nano Degree certificate in best ai digital marketing"
                      className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4  backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-6 h-6 text-[#5CB338]" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4  backdrop-blur-lg border border-[#5CB338]/20 rounded-lg p-3 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Trophy className="w-6 h-6 text-[#5CB338]" />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-medium text-gray-400 mb-4">
              Unlock Your Nano Degree
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338] mb-8">
              Get Your Nano-Degree in AI Marketing.
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Show the world your expertise in AI Marketing and stand out in a competitive AI Marketing jobs and get hired easily.
            </p>
            
            <div className="space-y-4 mb-8">
              {certificationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#5CB338]" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-[#0F0F0F] rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#5CB338] mb-1">2500+</div>
                <div className="text-gray-400 text-sm">Companies Trust Us.</div>
              </div>
              <div className="text-center p-4 bg-[#0F0F0F] rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#5CB338] mb-1">100%</div>
                <div className="text-gray-400 text-sm">Verified Credentials.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIDMCertification;
