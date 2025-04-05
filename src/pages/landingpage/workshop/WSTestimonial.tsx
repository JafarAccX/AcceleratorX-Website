

const WSTestimonial = () => {
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
    <div className="relative bg-gradient-to-b from-[#072536] via-[#072536]/95 to-[#0B2D45] py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/patterns/grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-amber-400/10 to-teal-300/15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,178,172,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(246,173,85,0.15),rgba(0,0,0,0))]"></div>
        
        {/* Data visualization decorative elements */}
        <div className="hidden lg:block absolute left-[5%] top-[10%] w-32 h-32 border-4 border-teal-500/10 rounded-lg transform rotate-12"></div>
        <div className="hidden lg:block absolute right-[8%] top-[25%] w-20 h-20 border-4 border-amber-500/10 rounded-full"></div>
        <div className="hidden lg:block absolute left-[15%] bottom-[15%] w-24 h-48 border-4 border-teal-400/10 rounded-lg transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-400/20 border border-amber-500/40 backdrop-blur-sm mb-4">
            <span className="text-white text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-200 to-amber-100">
              Words from attendees
            </span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
            See what professionals achieved after attending our Advanced Analytics Masterclass
          </p>
        </div>

        {/* Testimonial Logos Section - Only Images with Enhanced Visibility */}
        <div className="py-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {testimonialLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-6 bg-[#083349]/60 rounded-xl backdrop-blur-sm border border-teal-500/20 hover:border-amber-400/30 hover:bg-[#083349]/80 transition-all duration-300 flex items-center justify-center group hover:transform hover:scale-105 hover:shadow-xl"
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
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-teal-600/20 via-amber-500/15 to-teal-500/20 rounded-xl border border-teal-500/20 backdrop-blur-sm flex items-center justify-center group-hover:border-amber-400/30 transition-all duration-300">
                <span className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-amber-300 to-teal-300">
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
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
          <button 
            onClick={scrollToForm}
            className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#072536] rounded-lg leading-none border border-teal-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10 text-white group-hover/btn:text-teal-50 transition-all">
              Join Our Next Workshop
            </span>
            <svg
              className="ml-2 w-5 h-5 text-white group-hover/btn:text-amber-100 transition-colors animate-pulse"
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
      <div className="mt-16 pt-8 border-t border-teal-500/20">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 text-center hover:text-teal-400 transition-colors">
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WSTestimonial;
