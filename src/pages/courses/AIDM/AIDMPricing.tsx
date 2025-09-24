import React, { useState } from 'react';
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';

const AIDMPricing: React.FC = () => {
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
  const pricingOptions = [
    {
      title: "Early-bird",
      price: "₹29,999",
      description: "full program",
      highlight: true
    },
    {
      title: "Standard",
      price: "₹39,999",
      description: "full program",
      highlight: false
    },
    {
      title: "Instalments",
      price: "3 × ₹13,999/month",
      description: "(no-cost EMI)",
      highlight: false
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-black">
     
      
      {/* Background Gradient Blob */}
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            This is Your High-ROS (Return on Skills) that Pays Back in Multiples
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border ${option.highlight ? 'border-blue-500 relative shadow-lg shadow-blue-500/25' : 'border-gray-700/50 hover:border-blue-500/50'} transition-colors duration-300`}
            >
              {option.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-bold text-xl text-white mb-2">{option.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-400">{option.price}</span>
                <span className="text-gray-400 ml-2">{option.description}</span>
              </div>
              <button 
                onClick={handleEnrollClick}
                className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                  option.highlight 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25' 
                    : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10'
                }`}
              >
                {option.highlight ? 'Lock Early-Bird Executive Spot' : 'Enrol Now'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
          <p className="text-gray-300">
            "Master hands-on AI labs, capstone, and automation flows and save 40–60% time and increase efficiency."
          </p>
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

export default AIDMPricing;
