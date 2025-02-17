import React from "react";

const WSTestimonial = () => {
  const testimonialImages = [
    "/assets/testimonialsLogo/feedback1.png",
    "/assets/testimonialsLogo/feedback2.png",
    "/assets/testimonialsLogo/feedback4.png",
    "/assets/testimonialsLogo/feedback5.png",
    "/assets/testimonialsLogo/feedback6.png",
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/95 to-[#0A0F1C] py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-purple-500/5 to-green-500/5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.05),rgba(0,0,0,0))]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              What Our Participants Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from our workshop alumni
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-[400px] lg:h-[500px] transform hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 via-purple-500/30 to-green-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative h-full bg-black/40 backdrop-blur-sm">
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0F1C] to-transparent"></div>
                
                {/* Enhanced Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Testimonial Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              value: "500+",
              label: "Happy Participants"
            },
            {
              value: "4.9",
              label: "Average Rating"
            },
            {
              value: "98%",
              label: "Success Rate"
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
            onClick={() => {
              // console.log('WSTestimonial: Register button clicked');
              const form = document.getElementById('workshop-registration-form');
              // console.log('WSTestimonial: Form element found:', form);
              if (form) {
                // console.log('WSTestimonial: Attempting to scroll to form');
                form.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
                // console.log('WSTestimonial: Scroll command executed');
              } else {
                console.error('WSTestimonial: Form element not found with ID "workshop-registration-form"');
              }
            }}
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

export default WSTestimonial;
