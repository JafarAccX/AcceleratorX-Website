import React from 'react';
import { useCourseContext } from '../../../context/courseContext';

const AIDMFinalCTA: React.FC = () => {
  const { setSelectedCourse } = useCourseContext();

  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    window.dispatchEvent(new Event('open-enrollment-modal'));
  };
  return (
    <section className="relative py-24 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Next Job, Client, or Growth Opportunity Starts Here — Reserve Your Seat Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get instant access to syllabus, tool checklist, and early-bird executive pricing.
          </p>
          <button 
            onClick={handleEnrollClick}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
          >
            Enroll now
          </button>
        </div>
      </div>

  {/* Enrollment Modal is rendered globally in MainLayout */}
    </section>
  );
};

export default AIDMFinalCTA;
