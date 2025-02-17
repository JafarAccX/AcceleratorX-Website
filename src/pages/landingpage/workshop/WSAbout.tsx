import React from "react";
import {
  FaCheck,
  FaUser,
  FaLaptopCode,
  FaCertificate,
  FaClock,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaBrain,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const WSAbout = () => {
  const instructorDetails = {
    name: "Akash Maurya",
    title: "Senior ML Engineer, Nagarro, Ex-Deloitte ",
  };

  const targetAudience = [
    "Aspiring Data Scientists & ML Engineers – Gain hands-on expertise in AI-driven analytics.",
    "Students & Professionals – Transition into AI roles with practical, industry-ready skills.",
    "Tech Enthusiasts – Learn to integrate machine learning solutions into real-world projects.",
    "AI Learners – Master cutting-edge AI applications across industries—all in just 2 hours!",
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
    <div className="relative bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/95 to-[#0A0F1C] py-16 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-500/5 to-green-500/5 mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {/* About and Features Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Masterclass Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  About this Masterclass
                </span>
              </h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                  Ever wondered how businesses harness AI to transform raw data into{" "}
                  <span className="font-bold text-white">powerful, predictive insights?</span>{" "}
                  AI-driven analytics is revolutionizing how professionals{" "}
                  <span className="font-bold text-white">analyze, automate, and visualize data</span>.
                  Unlock the potential of AI to make{" "}
                  <span className="font-bold text-white">smarter, data-backed decisions faster than ever!</span>
                </p>
                <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                  Join{" "}
                  <span className="font-bold text-white">AcceleratorX's Exclusive Masterclass</span>{" "}
                  with expert{" "}
                  <span className="font-bold text-white">Aakash Maurya</span> on{" "}
                  <span className="font-bold text-white">Wednesday, 19th February, 7:30 PM</span>, and
                  master:
                </p>
                <ul className="list-none pl-0 mb-8 space-y-4">
                  {[
                    "How AI automates data analysis for real-time decision-making",
                    "Building AI-powered dashboards that predict trends & insights",
                    "Hands-on experience with top AI analytics tools & frameworks",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 lg:text-lg group">
                      <FaCheck className="text-blue-400 mt-1.5 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-r from-blue-950/50 to-green-950/50 rounded-lg p-6 border-l-4 border-blue-400">
                  <p className="text-gray-300 font-medium lg:text-lg">
                    <span className="font-bold text-blue-400">Pro tip:</span> AI is
                    the future of data analytics. Secure your spot now— limited seats
                    available! Elevate your data skills with AI today. 🚀
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
              <div className="relative inline-flex group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button 
                  onClick={scrollToForm}
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

            {/* Features Grid Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  Workshop Features
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaBrain className="text-3xl text-blue-400" />,
                    title: "AI-Powered Insights",
                    description:
                      "Learn how AI transforms raw data into actionable intelligence",
                  },
                  {
                    icon: <FaLaptopCode className="text-3xl text-green-400" />,
                    title: "Hands-on AI Training",
                    description:
                      "Work with real-world datasets and AI analytics tools",
                  },
                  {
                    icon: <FaClock className="text-3xl text-blue-400" />,
                    title: "2-Hour Expert Session",
                    description:
                      "Fast-track your AI analytics skills with focused, practical learning",
                  },
                  {
                    icon: <FaRocket className="text-3xl text-green-400" />,
                    title: "Boost Your Career",
                    description:
                      "Master AI-driven data analytics and stay ahead in the industry",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button
                onClick={() => {
                  // console.log('WSAbout: Register button clicked');
                  const form = document.getElementById("workshop-registration-form");
                  // console.log('WSAbout: Form element found:', form);
                  if (form) {
                    // console.log('WSAbout: Attempting to scroll to form');
                    form.scrollIntoView({ 
                      behavior: "smooth",
                      block: "center"
                    });
                    // console.log('WSAbout: Scroll command executed');
                  } else {
                    console.error('WSAbout: Form element not found with ID "workshop-registration-form"');
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

          {/* What You'll Gain Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                What You Will Gain From This 2-Hour AI & Data Analytics Masterclass
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaBrain,
                  title: "AI-Driven Data Analytics",
                  description:
                    "Understand how AI enhances data analysis, automates insights, and improves decision-making.",
                },
                {
                  icon: FaRobot,
                  title: "Machine Learning for Data Processing",
                  description:
                    "Explore AI techniques like predictive analytics, pattern recognition, and data automation.",
                },
                {
                  icon: FaChartLine,
                  title: "Real-World Applications",
                  description:
                    "Learn how top companies use AI in business intelligence, marketing, and operations.",
                },
                {
                  icon: FaUsers,
                  title: "Live Q&A & Networking",
                  description:
                    "Engage with industry experts, ask questions, and connect with like-minded professionals.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <item.icon className="text-blue-400 w-6 h-6 mt-1 flex-shrink-0 group-hover:text-blue-300 transition-colors transform group-hover:scale-110 duration-300" />
                    <div>
                      <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button 
                  onClick={scrollToForm}
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

          {/* Instructor Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                Meet {instructorDetails.name}
              </span>
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:block w-48 h-48 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-0.5">
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
                  <p className="text-blue-600 font-medium mb-4">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button 
                  onClick={scrollToForm}
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

          {/* Target Audience Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                This Masterclass is for
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <FaUser className="w-5 h-5 text-blue-400" />
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
