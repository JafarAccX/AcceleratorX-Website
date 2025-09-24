import React from 'react';

const AIDMSolution: React.FC = () => {
  return (
    <section className="relative py-24 px-4  my-20">
      {/* Background Gradient Blob */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            A High-End AI Marketing Solution that enables Freelance Success, Career Growth and Business Scale
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Executive-level training + hands-on AI labs",
            "Recruiter-ready live capstone projects aligned with real hiring needs",
            "Tool-first learning: n8n, GA4, Meta Ads, Google Ads, Stable Diffusion, Runway, Apollo.io, Mailchimp and many more."
          ].map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
            >
              <p className="text-gray-300">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDMSolution;
