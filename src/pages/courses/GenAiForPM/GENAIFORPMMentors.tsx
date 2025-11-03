import React from "react";
import { Linkedin } from "lucide-react";

const GENMentors = () => {
  const mentors = [
    {
      name: "Anjali Sharma",
      designation: "AI Product Manager at Mesha",
      linkedin: "https://www.linkedin.com/in/anjalisharmaaa/",
      image: "/assets/mentor/anjali.webp",
      experience: "10+ Years",
    },
    {
      name: "Pranali Bose",
      designation: "Software Engineer (Data Science), Ex-Walmart",
      linkedin: "https://www.linkedin.com/in/pranalibose",
      image: "/assets/mentor/pranali.webp",
      experience: "7+ Years",
    },
    {
      name: "Nitish M L Setty",
      designation: "Software Developer, MD at GrowSharp Technologies",
      linkedin: "https://www.linkedin.com/in/nitish-m-l-shetty-7a0206192",
      image: "/assets/mentor/nitish.webp",
      experience: "5+ Years",
    },
    {
      name: "Dr. Prashant ",
      designation: "Professor at Renowned University",
      // linkedin: "https://www.linkedin.com/in/prashant-sahatiya",
      image: "/assets/mentor/dummyuser.webp",
      experience: "5+ Years",
    },
  ];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm text-blue-400 font-medium">Learn From Industry Experts</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Your <span className="text-blue-500">Mentors</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Learn from experienced professionals who will guide you through your GenAI journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <img
                    src={mentor.image}
                    alt={`generative ai program mentor ${mentor.name} for product managers`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/mentor/dummyuser.webp";
                    }}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-1">{mentor.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{mentor.designation}</p>

                  <p className="text-white font-semibold">Experience: {mentor.experience}</p>

                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENMentors;
