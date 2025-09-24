import React, { useState } from 'react';
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';

const AIDMHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const { setSelectedCourse } = useCourseContext();

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      // Handle download if needed
    }
  };

  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
    setIsDownload(false);
  };
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/backgrounds/bfdmi.webp" 
          alt="AI Digital Marketing Background" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Nano-Degree in AI-Powered Digital Marketing
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">
            Become the Marketer Every Company Wants in 2025
          </p>
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <span className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-blue-400/30">
              16 weeks
            </span>
            <span className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-blue-400/30">
              100% live
            </span>
            <span className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-blue-400/30">
              Job assistance
            </span>
          </div>
          <p className="text-gray-300 mb-8">
            Recognised by India's top recruiters and agencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleEnrollClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/25"
            >
              Reserve My Seat
            </button>
            <button 
              onClick={handleEnrollClick}
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Next Cohort Starts: Jan 2025
            </button>
          </div>
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

export default AIDMHero;
