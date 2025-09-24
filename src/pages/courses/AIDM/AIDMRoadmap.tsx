import React, { useState } from 'react';
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';

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
  const months = [
    {
      title: "Month 1 — Foundations & AI Content",
      description: "Funnels, personas, copy frameworks, AI visuals, GA4 basics"
    },
    {
      title: "Month 2 — Performance Marketing & Analytics",
      description: "Google & Meta Ads, social strategy, A/B testing, CRO"
    },
    {
      title: "Month 3 — Automation & B2B Growth (n8n focus)",
      description: "n8n workflows, email drips, lead enrichment, CRM integration"
    },
    {
      title: "Month 4 — Full-Funnel Integration & Capstone",
      description: "B2B outreach, heatmaps, full-funnel automation, capstone demo day"
    }
  ];

  return (
    <section className="relative py-24 px-4 my-20">
        <div className="absolute inset-0">
        <img 
          src="/backgrounds/bg-bar.webp" 
          alt="AI Digital Marketing Background" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      {/* Background Gradient Blob */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A Journey from Scratch to becoming an AI-First Marketer
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {months.map((month, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors duration-300"
            >
              <p className="font-bold text-lg text-blue-400 mb-2">{month.title}</p>
              <p className="text-gray-300">{month.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleEnrollClick}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/25"
          >
            Download Full Curriculum
          </button>
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
