import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Settings } from 'lucide-react';

const solutions = [
  {
    title: "Executive-Level Training",
    description: "Executive-level training + hands-on AI labs",
    icon: Target,
    highlight: "Industry Expert Training"
  },
  {
    title: "Real-World Projects",
    description: "Recruiter-ready live capstone projects aligned with real hiring needs",
    icon: Rocket,
    highlight: "Portfolio-Ready Projects"
  },
  {
    title: "AI Tool Mastery",
    description: "Tool-first learning: n8n, GA4, Meta Ads, Google Ads, Stable Diffusion, Runway, Apollo.io, Mailchimp and many more.",
    icon: Settings,
    highlight: "10+ AI Marketing Tools"
  }
];

const AIDMSolution: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            The Solution
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A High-End <span className="text-[#5CB338]">AI Marketing Solution</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            That enables Freelance Success, Career Growth and Business Scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0F0F0F] rounded-xl p-6 border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-[#5CB338]" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors">
                  {solution.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">
                  {solution.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5CB338]" />
                  <span className="text-[#5CB338] text-sm font-medium">
                    {solution.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDMSolution;
