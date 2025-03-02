import React from "react";
import { FaStar } from "react-icons/fa";

const WSTestimonialDASecond = () => {
  // Testimonial logo images
  const testimonialLogos = [
    "/assets/testimonialsLogo/feedback1.png",
    "/assets/testimonialsLogo/feedback2.png",
    "/assets/testimonialsLogo/feedback4.png",
    "/assets/testimonialsLogo/feedback5.png",
    "/assets/testimonialsLogo/feedback6.png"
  ];

  const scrollToForm = () => {
    const form = document.getElementById('workshop-registration-form');
    if (form) {
      form.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/95 to-[#0A0F1C] py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/patterns/grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-purple-500/5 to-green-500/5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(24,119,242,0.05),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(76,29,149,0.05),rgba(0,0,0,0))]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-4">
            <span className="text-blue-400 text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Words from attendees
            </span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
            See what professionals achieved after attending our AI Powered Data Visualization & Story Telling Masterclass
          </p>
        </div>

        {/* Testimonial Logos Section - Only Images with Enhanced Visibility */}
        <div className="py-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {testimonialLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 flex items-center justify-center group hover:transform hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={logo} 
                  alt={`Workshop Attendee Feedback ${index + 1}`} 
                  className="max-w-full max-h-full object-contain filter brightness-110 contrast-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonial Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              value: "500+",
              label: "Workshop Attendees"
            },
            {
              value: "4.9",
              label: "Satisfaction Score"
            },
            {
              value: "98%",
              label: "Applied Skills at Work"
            }
          ].map((stat, index) => (
            <div key={index} className="group text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-600/10 via-purple-500/10 to-green-500/10 rounded-xl border border-white/5 backdrop-blur-sm flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                <span className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                  {stat.value}
                </span>
              </div>
              <p className="text-gray-400 font-medium text-lg group-hover:text-gray-300 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced CTA Button */}
      <div className="flex justify-center mt-16">
        <div className="relative inline-flex group/btn">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
          <button 
            onClick={scrollToForm}
            className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0A0F1C] rounded-lg leading-none border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
              Join Our Next Workshop
            </span>
            <svg
              className="ml-2 w-5 h-5 text-white group-hover/btn:text-blue-50 transition-colors animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 text-center hover:text-gray-400 transition-colors">
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WSTestimonialDASecond;
