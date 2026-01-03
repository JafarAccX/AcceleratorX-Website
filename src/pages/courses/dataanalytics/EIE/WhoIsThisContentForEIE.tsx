import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Target } from "lucide-react";

export default function WhoIsThisContentForEIE() {
  const stats = [
    {
      icon: TrendingUp,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      value: "$1.3T",
      label: "Market Size by 2030",
      description: "The global DA market is projected to reach $1.3T by 2030"
    },
    {
      icon: Briefcase,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      value: "97M",
      label: "New Jobs by 2030",
      description: "DA with AI will create 97 million new jobs across industry by 2030"
    },
    {
      icon: Target,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      value: "40%",
      label: "Productivity Boost",
      description: "Companies report up to 40% increase in productivity in DA with AI"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-blue-50 text-blue-600 font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase">
            Data Analytics - Market Scope
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#0A0F1E] mb-6">
            The Growing Data Analytics Industry
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 text-lg mb-16 leading-relaxed">
            Data Analytics is transforming industries worldwide. Organizations are increasingly relying on data-driven insights to make strategic decisions, creating a massive demand for skilled professionals who can harness the power of AI and analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-shadow text-left"
            >
              <div className={`w-12 h-12 rounded-lg ${stat.iconBg} ${stat.iconColor} flex items-center justify-center mb-6`}>
                <stat.icon size={24} />
              </div>

              <h3 className="text-4xl font-serif text-[#0A0F1E] font-medium mb-3">
                {stat.value}
              </h3>

              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {stat.label}
              </h4>

              <p className="text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
