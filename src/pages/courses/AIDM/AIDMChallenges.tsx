import React from 'react';

const AIDMChallenges: React.FC = () => {
  return (
    <section className="relative py-24 px-4 ">
      {/* Background Gradient Blob */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            In 2025, Marketing Is Broken Without AI.
          </h2>
          <p className="text-xl text-gray-300">Here's Why:</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Most of the marketing tasks are often repetitive, slow, and prone to errors.",
            "Teams lose hours on low-impact work (copy, A/B setups, manual reports, scripts, etc.).",
            "Companies now prefer AI-first marketers who can automate, optimise, and deliver measurable ROI faster."
          ].map((challenge, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
            >
              <p className="text-gray-300">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDMChallenges;
