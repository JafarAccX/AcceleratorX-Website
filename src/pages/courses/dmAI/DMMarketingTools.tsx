import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DMMarketingTools = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tools = [
    {
      category: "Paid Advertising",
      items: [
        {
          name: "Google Ads",
          logo: "/assets/dmAITools/googleads.webp",
          description: "Online advertising platform by Google for search, display, and video ads",
        },
        {
          name: "Meta Ads",
          logo: "/assets/dmAITools/meta.webp",
          description: "Facebook and Instagram advertising platform for social media marketing",
        },
        {
          name: "Adzooma",
          logo: "/assets/dmAITools/adzooma.webp",
          description: "PPC management and optimization platform for paid search campaigns",
        },
      ],
    },
    {
      category: "SEO & Content Marketing",
      items: [
        {
          name: "SEMRush",
          logo: "/assets/dmAITools/semrush.webp",
          description: "Comprehensive SEO and content marketing toolkit for digital marketing",
        },
        {
          name: "Surfer SEO",
          logo: "/assets/dmAITools/surfer.webp",
          description: "SEO content optimization platform with data-driven insights",
        },
        {
          name: "Jasper AI",
          logo: "/assets/dmAITools/jasper.webp",
          description: "AI-powered content creation platform for marketing copy and blogs",
        },
      ],
    },
    {
      category: "Marketing Automation",
      items: [
        {
          name: "HubSpot AI",
          logo: "/assets/dmAITools/HubSpot.webp",
          description: "Marketing automation and CRM platform with AI-powered insights",
        },
        {
          name: "Active Campaign",
          logo: "/assets/dmAITools/activecampaign.webp",
          description: "Email marketing and automation platform for customer engagement",
        },
        {
          name: "Drift AI",
          logo: "/assets/dmAITools/drift.webp",
          description: "Conversational marketing platform for live chat and AI assistants",
        },
      ],
    },
    {
      category: "Analytics & Performance Tracking",
      items: [
        {
          name: "Google Analytics 4",
          logo: "/assets/dmAITools/googleanalytics.webp",
          description: "Web analytics and tracking platform for user behavior analysis",
        },
        {
          name: "Tableau",
          logo: "/assets/dataTools/tableu.webp",
          description: "Business intelligence and data visualization platform",
        },
        {
          name: "IBM Watson",
          logo: "/assets/dmAITools/imwatson.webp",
          description: "AI and data analytics platform for advanced insights",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-neutral-800/95">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl pb-3 md:text-6xl font-bold text-center mb-20 highlight-text">
            Master These <span className="text-neon-pink">Tools</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {tools.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-xl hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm"
              >
                <h3 className="text-xl font-mono font-bold text-neon-yellow mb-8 text-center pb-2 border-b border-neutral-700">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {category.items.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-neutral-900/80 p-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 group flex items-center gap-4 hover:transform hover:scale-105 hover:shadow-lg"
                    >
                      <div className="bg-gradient-to-br from-white to-neutral-100 rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} - ${tool.description}`}
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-base font-mono font-semibold text-neutral-100 group-hover:text-neon-pink transition-colors duration-300">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMMarketingTools;
