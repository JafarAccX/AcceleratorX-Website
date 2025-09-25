import React from 'react';
import { useCourseContext } from '../../../context/courseContext';

const AIDMCareerOutcomes: React.FC = () => {
  const { setSelectedCourse } = useCourseContext();

  const handleRegister = () => {
    setSelectedCourse('AI Digital Marketing');
    window.dispatchEvent(new Event('open-enrollment-modal'));
  };
  return (
    <section className="relative py-24 px-4 ">
      {/* Background Gradient Blob */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Where This Nano-Degree Takes You: Roles, Skills & ROI
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h3 className="font-bold text-xl text-blue-400 mb-4">Get Hired</h3>
            <p className="text-gray-300">
              AI Marketing Specialist, Campaign Manager, Marketing Automation Specialist, Growth Consultant
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-xl text-blue-400 mb-4">Unlock AI Skills</h3>
            <p className="text-gray-300">
              AI-first campaign design, automation, CRO, B2B outreach, analytics
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-xl text-blue-400 mb-4">ROI</h3>
            <p className="text-gray-300">
              Portfolio-ready capstone projects that demonstrate measurable impact to recruiters and clients
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button onClick={handleRegister} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/25">
            Register Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIDMCareerOutcomes;
