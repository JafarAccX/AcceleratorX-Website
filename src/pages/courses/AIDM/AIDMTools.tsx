import React from 'react';

const AIDMTools: React.FC = () => {
  const toolCategories = [
    {
      category: "Content & Copy",
      tools: "ChatGPT, Claude.ai, Copy.ai, Jasper, Grammarly, Notion AI"
    },
    {
      category: "Visuals & Media",
      tools: "Canva, SDXL, Ideogram, Leonardo.ai, Runway, Pika Labs, Veo3, Nano Banana"
    },
    {
      category: "Ads & Growth",
      tools: "Google Ads Sandbox, Meta Ads Manager, AdCreative.ai, Modash, Mesa.ai"
    },
    {
      category: "Analytics & CRO",
      tools: "GA4, Microsoft Clarity, HotJar, GrowthBook"
    },
    {
      category: "Automation & CRM",
      tools: "n8n, Make.com, HubSpot, Mailchimp, Clay, Apollo.io"
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Background Gradient Blob */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            The AI Stack top Recruiters and Founders Want You to Know
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-colors duration-300"
            >
              <h3 className="font-bold text-lg text-cyan-400 mb-2">{category.category}</h3>
              <p className="text-gray-300">{category.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDMTools;
