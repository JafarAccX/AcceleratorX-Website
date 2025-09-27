import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Image, TrendingUp, BarChart, Zap } from 'lucide-react';

const toolCategories = [
  {
    category: "Content & Copy",
    tools: "ChatGPT, Claude.ai, Copy.ai, Jasper, Grammarly, Notion AI",
    icon: FileText,
    color: "text-blue-400"
  },
  {
    category: "Visuals & Media",
    tools: "Canva, SDXL, Ideogram, Leonardo.ai, Runway, Pika Labs, Veo3, Nano Banana",
    icon: Image,
    color: "text-purple-400"
  },
  {
    category: "Ads & Growth", 
    tools: "Google Ads Sandbox, Meta Ads Manager, AdCreative.ai, Modash, Mesa.ai",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    category: "Analytics & CRO",
    tools: "GA4, Microsoft Clarity, HotJar, GrowthBook",
    icon: BarChart,
    color: "text-orange-400"
  },
  {
    category: "Automation & CRM",
    tools: "n8n, Make.com, HubSpot, Mailchimp, Clay, Apollo.io",
    icon: Zap,
    color: "text-cyan-400"
  }
];

const AIDMTools: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            AI Tools & Technologies
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-[#5CB338]">AI Stack</span> Top Recruiters Want
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master the essential AI tools and technologies that industry leaders are looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 bg-[#0F0F0F] border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#5CB338]/50 hover:shadow-lg hover:shadow-[#5CB338]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 text-[#5CB338]" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#5CB338] transition-colors duration-300">
                      {category.category}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {category.tools}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5CB338]/10 rounded-full border border-[#5CB338]/20">
            <div className="w-2 h-2 rounded-full bg-[#5CB338]"></div>
            <span className="text-[#5CB338] text-sm font-medium">
              20+ Industry-Leading AI Tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDMTools;
