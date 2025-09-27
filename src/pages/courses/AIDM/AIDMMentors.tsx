import React from 'react';
import { motion } from "framer-motion";
import { Users, Linkedin } from "lucide-react";

const mentors = [
  {
    name: "Kumar Savino",
    role: "Associate Director - Growth (D2C)",
    company: "DrinkPrime",
    bio: "9+ years in performance-led digital strategies across FMCG, FEC, and tech consumer brands. Specializes in lifecycle marketing, CRM, automation, and full-funnel growth campaigns.",
    experience: "9+ Years",
    transitions: "Scaled multiple D2C brands",
    image: "/assets/mentor/kumar.webp", // add image manually
    linkedin: "https://www.linkedin.com/in/kumar-savino/"
  },
  {
    name: "Yash Manghnani",
    role: "Founder",
    company: "Neuwriter.ai",
    bio: "Helps PMs and teams build AI-powered products. Known for saving 20+ hours/week on content workflows using AI automation.",
    experience: "Product & AI Consulting",
    transitions: "Enabled 50+ PMs into AI Builders",
    image: "/assets/mentor/yash-manghnani.webp",
    linkedin: "https://www.linkedin.com/in/yash-manghnani/"
  },
  {
    name: "Ankita Das",
    role: "B2B Product Marketer",
    company: "Ex-TargetG", 
    bio: "B2B Product Marketer for Brands That Don't Want Boring | Help early stage startups to mid-size company Founders Scale with Strategy, Content & Personal Branding That Converts",
    experience: "9+ Years",
    transitions: "6,891 followers • 500+ connections",
    image: "/assets/mentor/ankita.webp",
    linkedin: "https://www.linkedin.com/in/ankita-das/" // You'll need to get the exact LinkedIn URL
  }
];


const AIDMMentors: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5CB338]/10">
              <Users className="w-8 h-8 text-[#5CB338]" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Learn from <span className="text-[#5CB338]">Industry Experts</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn directly from marketing leaders with 10+ years of experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-[#0F0F0F] rounded-2xl border border-white/10 group-hover:border-[#5CB338]/50 transition-all duration-500 overflow-hidden group-hover:shadow-lg group-hover:shadow-[#5CB338]/10 group-hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#5CB338]/20 to-[#5CB338]/5 flex items-center justify-center">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover object-center" />
                </div>

                {/* Company Badge - Slides in from left */}
                <div className="absolute top-4 left-0 z-20 transform -translate-x-full group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#5CB338]/10 backdrop-blur-md border border-[#5CB338]/20 rounded-lg px-3 py-1.5">
                    <span className="text-[#5CB338] text-sm font-medium">
                      {mentor.company}
                    </span>
                  </div>
                </div>

                {/* LinkedIn Button - Slides in from right */}
                <div className="absolute top-4 right-0 z-20 transform translate-x-full group-hover:-translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-[#5CB338] hover:bg-[#5CB338]/80 text-white px-4 py-1.5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm group/btn"
                  >
                    <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Connect</span>
                  </a>
                </div>

                {/* Content Section */}
                <div className="relative p-6 z-20">
                  {/* Name and Role */}
                  <div className="mb-6 transform transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#5CB338] transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-[#5CB338] font-medium">{mentor.role}</p>
                    <p className="text-gray-400 text-sm mt-2">{mentor.bio}</p>
                  </div>

                  {/* Details - Fade in on hover */}
                  <div className="space-y-3 transform transition-all duration-500">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-gray-400 text-sm">Experience</span>
                      <span className="text-white text-sm font-medium">
                        {mentor.experience}
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-gray-400 text-sm">Impact</span>
                      <span className="text-white text-sm font-medium">
                        {mentor.transitions}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#5CB338] text-[#5CB338] hover:bg-[#5CB338]/10 font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            See Full Mentor Bios
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

export default AIDMMentors;
