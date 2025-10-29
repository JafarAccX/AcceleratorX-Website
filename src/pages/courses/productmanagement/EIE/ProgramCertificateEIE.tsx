
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certificationFeatures = [
  "Across the world, recognised certification validated by leading tech companies.",
  "Present your achievement with a digital badge on LinkedIn and your resume.",
  "Become a master of AI product management and leverage product management automation tools.",
  "Specialising in growth product management and sealing data-driven products.",
  "Access to product management Accelerator for exclusive career mentorship and hiring.",
  "Lifetime access to the Alumni network and product management workshop",
  "Priority access to top opportunities in the global product team."
];

export default function ProgramCertificateEIE() {
  return (
    <section className="py-24 bg-white/5">
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
              Gateway to Product Management Career
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
                  <span className="">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
