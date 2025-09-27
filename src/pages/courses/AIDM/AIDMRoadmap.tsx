import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Zap, Rocket } from 'lucide-react';
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';

const modules = [
  {
    title: "Month 1 — Foundations & AI Content",
    description: "Funnels, personas, copy frameworks, AI visuals, GA4 basics",
    icon: Brain
  },
  {
    title: "Month 2 — Performance Marketing & Analytics",
    description: "Google & Meta Ads, social strategy, A/B testing, CRO",
    icon: BarChart3
  },
  {
    title: "Month 3 — Automation & B2B Growth",
    description: "n8n workflows, email drips, lead enrichment, CRM integration",
    icon: Zap
  },
  {
    title: "Month 4 — Full-Funnel Integration & Capstone",
    description: "B2B outreach, heatmaps, full-funnel automation, capstone demo day",
    icon: Rocket
  }
];

const AIDMRoadmap: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // Handle enrollment submission if needed
  };

  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Learning Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338] mb-6">
            From Scratch to{" "}
            <span className="text-[#5CB338]">AI-First Marketer</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 16-week program designed to transform you into an AI-powered marketing professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-[#0F0F0F] rounded-xl border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-6 h-6 text-[#5CB338]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{module.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <motion.button 
            onClick={handleEnrollClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#5CB338]/25"
          >
            Download Full Curriculum
          </motion.button>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </section>
  );
};

export default AIDMRoadmap;
