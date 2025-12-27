import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Briefcase
} from 'lucide-react';
import { useCourseContext } from '../../../context/courseContext';

const benefits = [
  {
    title: "Get Hired",
    description: "AI Marketing Specialist, Campaign Manager, Marketing Automation Specialist, Growth Consultant and many more",
    icon: Trophy,
    highlight: "High-demand marketing roles"
  },
  {
    title: "Industry Network",
    description: "Connect with 500+ marketing professionals and industry leaders",
    icon: Users,
    highlight: "Professional Network"
  },
  {
    title: "Career Support",
    description: "100% job assistance with personalised career guidance and interview preparation",
    icon: Briefcase,
    highlight: "Career guarantee"
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
            Career Outcome
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338]">
            Where does this Nano Degree in AI Digital Marketing take you?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            After completing this Nano Degree in AI Digital Marketing, you will be ready for AI Marketing jobs, freelancing projects, AI Marketing Consultant and many other fast-growing roles in marketing.
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
            className="bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#5CB338]/25"
          >
            Register Now!
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AIDMCareerOutcomes;
