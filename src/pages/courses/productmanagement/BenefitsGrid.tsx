import { motion } from "framer-motion";
import { Shield, DollarSign, Zap, Globe, Cog, Eye } from "lucide-react";

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Skill-Focused Learning",
    description:
      "Master practical skills with an emphasis on real-world application.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Guided Interview Preparation",
    description:
      "Expert-led coaching to help you ace every interview with confidence.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "1:1 Mock Interviews",
    description:
      "Personalized mock interviews to sharpen your skills and boost your confidence.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Lifetime Access to Job Portal",
    description:
      "Exclusive, 24/7 access to a dedicated job portal to support your career journey, anytime.",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Always Up-to-Date Content",
    description:
      "Stay ahead with regularly refreshed content, updated to include the latest trends and innovations in the field.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "On-Demand Mentor Support",
    description:
      "Get expert guidance whenever you need it, with mentors available to support you at every step.",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="relative bg-black py-24">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Unlock Your </span>
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text"></span>

              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
                Potential
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 text-gray-400 text-lg"
          >
            Boost your business operations with Inno's innovative Web3 platform,
            combining security, efficiency, and transparency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <div className="bg-indigo-500/20 p-3 rounded-lg w-fit text-indigo-400 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
