import React from 'react';

const AIDMMentors: React.FC = () => {
  const mentors = [
    {
      name: "Rajesh Kumar",
      title: "Marketing Director at TechCorp",
      bio: "10+ years in digital marketing with expertise in AI automation and growth strategies.",
      credential: "Helped scale 50+ businesses"
    },
    {
      name: "Priya Sharma",
      title: "AI Marketing Consultant",
      bio: "Specialized in AI-powered content creation and marketing automation workflows.",
      credential: "Trained 1000+ marketers"
    },
    {
      name: "Arjun Patel",
      title: "Growth Hacking Expert",
      bio: "Focus on data-driven marketing strategies and AI optimization techniques.",
      credential: "Generated $10M+ in revenue"
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Background Gradient Blob */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Learn Directly from Marketing Leaders with 10+ Years of Experience
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-blue-400/30">
                <span className="text-blue-400 text-2xl font-bold">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-bold text-lg text-white">{mentor.name}</h3>
              <p className="text-blue-400 mb-2">{mentor.title}</p>
              <p className="text-gray-300 mb-2">{mentor.bio}</p>
              <p className="text-sm text-gray-400">{mentor.credential}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-bold py-3 px-8 rounded-lg transition duration-300">
            See Full Mentor Bios
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIDMMentors;
