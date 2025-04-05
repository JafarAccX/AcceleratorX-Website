import React from "react";
import {
  FaCheck,
  FaUser,
  FaLaptopCode,
  FaCertificate,
  FaClock,
  FaRocket,
  FaUsers,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

const WSAbout = () => {
  const instructorDetails = {
    name: "Akash Maurya",
    title: "Senior ML Engineer, Nagarro, Ex-Deloitte ",
  };

  const targetAudience = [
    "Excel Power Users – Discover what tools and techniques will take your analytics to the next level.",
    "Business Analysts & Data Professionals – Learn modern analytics approaches that leading companies are using.",
    "Executives & Managers – Understand how advanced analytics drives better decision-making and competitive advantage.",
    "Anyone Struggling with Excel Limitations – Find better solutions for your complex data analysis needs.",
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
    <div className="relative bg-gradient-to-b from-[#072536] via-[#072536]/95 to-[#0B2D45] py-16 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-amber-400/5 to-teal-300/10 mix-blend-overlay"></div>
        
        {/* Data visualization decorative elements */}
        <div className="hidden lg:block absolute left-[5%] top-[10%] w-32 h-32 border-4 border-teal-500/10 rounded-lg transform rotate-12"></div>
        <div className="hidden lg:block absolute right-[8%] top-[25%] w-20 h-20 border-4 border-amber-500/10 rounded-full"></div>
        <div className="hidden lg:block absolute left-[15%] bottom-[15%] w-24 h-48 border-4 border-teal-400/10 rounded-lg transform -rotate-12"></div>
        <div className="hidden lg:block absolute right-[12%] bottom-[28%] w-36 h-16 border-4 border-amber-400/10 rounded-lg"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {/* About and Features Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Masterclass Section */}
            <div>
  <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left relative">
    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-teal-400 to-amber-400 rounded-full"></div>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-amber-50">
      About this Masterclass
    </span>
  </h2>
  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
    <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
      Business analytics is evolving rapidly—and{" "}
      <span className="font-bold text-white">Excel's limitations</span> are becoming increasingly apparent in 2025. 
      Top analysts have moved beyond spreadsheets to{" "}
      <span className="font-bold text-white">leverage advanced analytics platforms, automation tools, and AI-powered solutions</span>{" "}
      to gain deeper insights with unprecedented efficiency.  
    </p>
    <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
      In this practical workshop, you'll discover how{" "}
      <span className="font-bold text-white">modern analytics tools are replacing traditional Excel workflows</span>, 
      empowering professionals with powerful capabilities to{" "}
      <span className="font-bold text-white">visualize complex data, automate repetitive tasks, and uncover deeper insights</span>.
    </p>
    <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
      Join{" "}
      <span className="font-bold text-white">AcceleratorX's Exclusive Masterclass</span>{" "}
      with expert{" "}
      <span className="font-bold text-white">Aakash Maurya</span> on{" "}
      <span className="font-bold text-white">9th April, 2025, 7:30 PM</span>, and gain hands-on expertise in:
    </p>
    <ul className="list-none pl-0 mb-8 space-y-4">
      {[
        "Modern alternatives to Excel that top analysts are using in 2025",
        "Advanced data visualization techniques that reveal insights Excel can't show",
        "Automating repetitive analytics tasks to save hours of manual work",
        "Integrating AI and machine learning into your analytics workflow",
      ].map((item, index) => (
        <li key={index} className="flex items-start space-x-3 lg:text-lg group">
          <FaCheck className="text-teal-400 mt-1.5 flex-shrink-0 group-hover:text-amber-300 transition-colors" />
          <span className="text-gray-300 group-hover:text-white transition-colors">
            {item}
          </span>
        </li>
      ))}
    </ul>

    <div className="bg-gradient-to-r from-teal-900/40 to-amber-900/30 rounded-lg p-6 border-l-4 border-amber-400 transform hover:scale-[1.01] transition-transform duration-300">
      <p className="text-gray-300 font-medium lg:text-lg">
        <span className="font-bold text-amber-400">Pro tip:</span> Excel skills alone are no longer enough in today's data-driven world.  
        Secure your spot now—limited seats available! Learn what top analysts are doing in 2025 and transform your analytics capabilities.
      </p>
    </div>
  </div>

</div>


            {/* Features Grid Section */}
            <div>
  <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left relative">
    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-400 to-teal-400 rounded-full"></div>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-teal-50">
      Workshop Features
    </span>
  </h2>
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        icon: <FaChartBar className="text-3xl text-blue-400" />,
        title: "Beyond Excel Limitations",
        description:
          "Discover powerful analytics platforms that overcome Excel's constraints for complex data analysis.",
      },
      {
        icon: <FaDatabase className="text-3xl text-green-400" />,
        title: "Advanced Visualization Techniques",
        description:
          "Create interactive dashboards and visualizations that reveal insights Excel simply can't show.",
      },
      {
        icon: <FaRobot className="text-3xl text-blue-400" />,
        title: "Automation & AI Integration",
        description:
          "Learn how top analysts automate repetitive tasks and leverage AI to enhance their analytics workflows.",
      },
      {
        icon: <FaRocket className="text-3xl text-green-400" />,
        title: "Future-Proof Your Analytics Skills",
        description:
          "Master the modern analytics toolkit that leading companies demand in 2025 and beyond.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="group bg-[#083349]/60 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-teal-500/20 hover:border-amber-400/30 transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg"
      >
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-teal-700/30 to-amber-700/20 p-3 rounded-lg inline-block"
          style={{
            boxShadow: '0 0 15px rgba(56, 178, 172, 0.2)'
          }}
        >
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-300 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</div>

          </div>

          {/* Register Now Button */}
          <div className="flex justify-center">
            <div className="relative inline-flex group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button
                onClick={scrollToForm}
                className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#072536] rounded-lg leading-none border border-teal-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                  Register Now
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

          {/* What You'll Gain Section */}
          <div>
  <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
      What You Will Gain From This 2-Hour Generative AI & Business Analytics Masterclass
    </span>
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: FaBrain,
        title: "Generative AI in Business Analytics",
        description:
          "Discover how Generative AI transforms raw data into business intelligence, predictive models, and automated reports.",
      },
      {
        icon: FaDatabase,
        title: "AI-Powered Data Processing",
        description:
          "Learn how AI automates data wrangling, trend forecasting, and customer behavior analysis at scale.",
      },
      {
        icon: FaChartBar,
        title: "Real-World AI Use Cases",
        description:
          "Explore how companies leverage AI in marketing, finance, supply chain, and customer experience to drive decisions.",
      },
      {
        icon: FaUsers,
        title: "Live AI Demos & Q&A",
        description:
          "Engage in hands-on AI demonstrations, interact with industry experts, and expand your professional network.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group bg-[#083349]/60 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-teal-500/20 hover:border-amber-400/30 transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg"
      >
        <div className="flex items-start space-x-4">
          <item.icon className="text-teal-400 w-6 h-6 mt-1 flex-shrink-0 group-hover:text-amber-300 transition-colors transform group-hover:scale-110 duration-300" />
          <div>
            <h3 className="font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center mt-4">
    <div className="relative inline-flex group/btn">
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
      <button 
        onClick={scrollToForm}
        className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0A0F1C] rounded-lg leading-none border border-teal-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <span className="relative z-10 text-white group-hover/btn:text-amber-300 transition-all">
          Register Now
        </span>
        <svg
          className="ml-2 w-5 h-5 text-white group-hover/btn:text-amber-300 transition-colors animate-pulse"
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
</div>


          {/* Instructor Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-amber-50">
                Meet {instructorDetails.name}
              </span>
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:block w-48 h-48 rounded-lg bg-gradient-to-br from-teal-500 to-amber-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-lg p-1">
                    <img
                      src="/assets/mentor/akash.png"
                      alt={instructorDetails.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {instructorDetails.name}
                  </h3>
                  <p className="text-teal-400 font-medium mb-4">
                    {instructorDetails.title}
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-400 text-lg leading-relaxed">
                      With 7 years of experience in Machine Learning and AI,
                      Akash Maurya, Senior ML Engineer at Nagarro, has delivered
                      impactful projects in computer vision, NLP, and predictive
                      analytics. His passion for data science extends to
                      education.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50/10 p-4 rounded-lg">
                        <p className="text-gray-400">
                          <span className="font-semibold text-white">Expertise:</span>{" "}
                          Machine Learning, Deep Learning, Computer Vision, NLP
                        </p>
                      </div>
                      <div className="bg-gray-50/10 p-4 rounded-lg">
                        <p className="text-gray-400">
                          <span className="font-semibold text-white">Previous:</span>{" "}
                          Microsoft, Intel, Research Papers in ML
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="relative inline-flex group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button 
                  onClick={scrollToForm}
                  className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0A0F1C] rounded-lg leading-none border border-teal-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 text-white group-hover/btn:text-amber-300 transition-all">
                    Register Now
                  </span>
                  <svg
                    className="ml-2 w-5 h-5 text-white group-hover/btn:text-amber-300 transition-colors animate-pulse"
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
          </div>

          {/* Target Audience Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-amber-50">
                This Masterclass is for
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <FaUser className="w-5 h-5 text-teal-400" />
                    </div>
                    <p className="text-gray-400 text-lg">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Final CTA Button */}
          <div className="flex justify-center">
            <div className="relative inline-flex group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button
                onClick={() => {
                  // console.log('WSAbout: Register button clicked');
                  const form = document.getElementById("workshop-registration-form");
                  console.log('WSAbout: Form element found:', form);
                  if (form) {
                    // console.log('WSAbout: Attempting to scroll to form');
                    form.scrollIntoView({ 
                      behavior: "smooth",
                      block: "center"
                    });
                    // console.log('WSAbout: Scroll command executed');
                  } else {
                    // console.error('WSAbout: Form element not found with ID "workshop-registration-form"');
                  }
                }}
                className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0A0F1C] rounded-lg leading-none border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                  Register Now
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
        </div>
      </div>
    </div>
  );
};

export default WSAbout;
