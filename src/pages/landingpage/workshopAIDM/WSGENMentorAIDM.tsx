import { motion } from "framer-motion";
import { Linkedin, Award, Sparkles, Briefcase } from "lucide-react";

const WSGENMentorAIDM = () => {
  const mentors = [
    {
      name: "Kumar Savino",
      designation: "AI Marketing Specialist",
      description: "Expert in AI-driven automation, ad optimization, and workflow systems.",
      linkedin: "https://www.linkedin.com/in/kumar-savino/",
      image: "/assets/mentor/kumar.webp",
      experience: "8+ Years",
    },
  ];

  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AI Marketing Automation — Learn From Experts
            </h2>
            <p className="text-gray-300 text-lg">Meet Your Mentor</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1  gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 max-w-screen-sm mx-auto"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Mentor Image */}
                  <div className="relative">
                    <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-indigo-500/30">
                      <img src={mentor.image} alt={`generative ai program mentor ${mentor.name} for product managers`} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-white hover:text-blue-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Mentor Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Briefcase className="w-3 h-3" />
                        {mentor.experience}
                      </span>
                    </div>

                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <p>{mentor.designation}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                        <p>{mentor.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WSGENMentorAIDM;