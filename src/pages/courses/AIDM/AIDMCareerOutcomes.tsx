import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Target, 
  Briefcase,
  Star,
  Brain
} from 'lucide-react';
import { useCourseContext } from '../../../context/courseContext';

const benefits = [
  {
    title: "Get Hired",
    description: "AI Marketing Specialist, Campaign Manager, Marketing Automation Specialist, Growth Consultant",
    icon: Trophy,
    highlight: "High-Demand Roles"
  },
  {
    title: "Unlock AI Skills",
    description: "AI-first campaign design, automation, CRO, B2B outreach, analytics",
    icon: Brain,
    highlight: "Future-Ready Skills"
  },
  {
    title: "Portfolio ROI",
    description: "Portfolio-ready capstone projects that demonstrate measurable impact to recruiters and clients",
    icon: Target,
    highlight: "Measurable Results"
  },
  {
    title: "Industry Network",
    description: "Connect with 500+ marketing professionals and industry leaders",
    icon: Users,
    highlight: "Professional Network"
  },
  {
    title: "Career Support",
    description: "100% job assistance with personalized career guidance and interview preparation",
    icon: Briefcase,
    highlight: "Career Guarantee"
  },
  {
    title: "Certification",
    description: "Industry-recognized AI Digital Marketing certification from AcceleratorX",
    icon: Star,
    highlight: "Certified Professional"
  }
];

const AIDMCareerOutcomes: React.FC = () => {
  const { setSelectedCourse } = useCourseContext();

  const handleRegister = () => {
    setSelectedCourse('AI Digital Marketing');
    window.dispatchEvent(new Event('open-enrollment-modal'));
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Career Outcomes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338]">
            Where This Nano-Degree Takes You
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Discover the roles, skills, and ROI that await you after completing our program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
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
                  <benefit.icon className="w-6 h-6 text-[#5CB338]" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">
                  {benefit.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5CB338]" />
                  <span className="text-[#5CB338] text-sm font-medium">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <motion.button 
            onClick={handleRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5CB338] hover:bg-[#5CB338]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#5CB338]/25"
          >
            Register Now!
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AIDMCareerOutcomes;
