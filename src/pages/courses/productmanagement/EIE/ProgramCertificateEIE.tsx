import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';

const certificationFeatures = [
  "Industry-recognized Product Management certification",
  "Validated by leading tech companies",
  "Digital badge for LinkedIn and resume",
  "Lifetime access to alumni network",
  "Verifiable Credentials for career growth",
  "Priority access to job opportunities"
];

export default function ProgramCertificateEIE() {
  return (
    <section className="py-24 bg-white">
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
              <div className="absolute inset-0 bg-[#0F0F0F]">
                <img 
                  src="/assets/programcertificates/PM_Cert_EIE.webp"
                  alt="Product Management Certificate"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-black backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="w-6 h-6 text-[#5CB338]" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-black backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <CheckCircle className="w-6 h-6 text-[#5CB338]" />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-medium text-[#5CB338] mb-4">
              Program Certificate
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338] mb-8">
              Get <span className="text-[#5CB338]">Certified</span> in Product Management
            </h3>
            
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
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5CB338]" />
                  <span className="text-black">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
