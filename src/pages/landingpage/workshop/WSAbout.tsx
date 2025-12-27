import {
  FaCheck,
  FaUser,
  FaChartBar,
  FaMapSigns,
  FaToolbox,
  FaCogs,
  FaLaptopCode,
  FaBriefcase,
  FaIndustry,
  FaRobot,
} from "react-icons/fa";

const WSAbout = () => {
  const instructorDetails = {
    name: "Akash Maurya",
    title: "Senior ML Engineer, Nagarro",
  };

  const targetAudience = [
    "Excel Power Users looking to automate and scale their workflows",
    "Business Analysts ready to adopt next-gen tools",
    "Managers and Executives seeking deeper, faster insights",
    "Professionals who want to stay ahead in an AI-first data world",
  ];

  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0A1A2A] via-[#091E2D] to-[#061625] py-12 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-cyan-400/5 to-emerald-300/10 mix-blend-overlay"></div>

        {/* Minimal decorative elements */}
        <div className="hidden lg:block absolute left-[5%] top-[10%] w-24 h-24 border-4 border-emerald-500/10 rounded-lg transform rotate-12"></div>
        <div className="hidden lg:block absolute right-[8%] top-[25%] w-16 h-16 border-4 border-indigo-500/10 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {/* About and Features Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Masterclass Section */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-left relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-emerald-400 to-indigo-400 rounded-full"></div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-indigo-50">
                  About this Masterclass
                </span>
              </h2>
              <div className="bg-[#0A1A2A]/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-emerald-500/10 hover:border-indigo-400/20 transition-all duration-300">
                <p className="text-gray-300 text-left leading-relaxed mb-4">
                  Data analysis is evolving—fast. In 2025, it's not just about Excel and SQL anymore. AI is becoming an
                  essential part of every analyst’s toolkit. This masterclass will show you how to integrate AI into
                  your existing workflow, automate repetitive tasks, and generate deeper insights—all without needing to
                  be a data scientist.
                </p>
                <p className="text-gray-300 text-left leading-relaxed mb-4">
                  Learn the latest AI-powered techniques, explore high-impact projects, and discover how top analysts
                  are transforming their careers by combining traditional tools with modern AI solutions.
                </p>
                <ul className="list-none pl-0 mb-6 space-y-3">
                  {[
                    "Advanced analysis workflows using AI tools",
                    "Automate data tasks and reporting with AI",
                    "Real project ideas to implement immediately",
                    "Strategies to stay competitive and AI-ready in your role",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <FaCheck className="text-emerald-400 mt-1 flex-shrink-0 group-hover:text-indigo-300 transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-r from-emerald-900/30 to-indigo-900/20 rounded-lg p-4 border-l-4 border-cyan-400">
                  <p className="text-gray-300 font-medium text-sm">
                    <span className="font-bold text-cyan-400">Pro tip:</span> Analysts who adopt AI tools in 2025 are
                    becoming decision-makers faster—this session helps you get there.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid Section */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-left relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-400 to-emerald-400 rounded-full"></div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-cyan-50">
                  Workshop Features
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    icon: <FaCogs className="text-2xl text-emerald-400" />,
                    title: "AI-Enhanced Workflows",
                    description:
                      "Integrate tools like ChatGPT, low-code AI platforms, and automation into your analysis stack",
                  },
                  {
                    icon: <FaLaptopCode className="text-2xl text-indigo-400" />,
                    title: "Real Business Projects",
                    description:
                      "Build analysis solutions you can showcase—think dashboards, predictions, and insights powered by AI",
                  },
                  {
                    icon: <FaBriefcase className="text-2xl text-cyan-400" />,
                    title: "Productivity Boosters",
                    description:
                      "Learn how to reduce manual work, speed up reporting, and improve data accuracy with AI",
                  },
                  {
                    icon: <FaIndustry className="text-2xl text-emerald-400" />,
                    title: "Cross-Industry Use Cases",
                    description:
                      "Explore how AI is transforming data analysis in industries like marketing, finance, healthcare, and operations",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-[#0A1A2A]/60 backdrop-blur-xl p-5 rounded-xl shadow-xl border border-emerald-500/10 hover:border-indigo-400/20 transition-all duration-300 transform hover:translate-y-[-2px]"
                  >
                    <div
                      className="mb-3 transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-emerald-700/20 to-indigo-700/10 p-2 rounded-lg inline-block"
                      style={{
                        boxShadow: "0 0 10px rgba(16, 185, 129, 0.15)",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button
                onClick={scrollToForm}
                className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#061625] rounded-lg leading-none border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 text-white group-hover/btn:text-emerald-50 transition-all">
                  Register Now
                </span>
                <svg
                  className="ml-2 w-5 h-5 text-white group-hover/btn:text-indigo-100 transition-colors animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* What You'll Gain Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-emerald-50">
                What You'll Gain
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: FaMapSigns,
                  title: "Next-Level Skills",
                  description: "Move beyond spreadsheets with AI-supported analysis and automation techniques",
                },
                {
                  icon: FaChartBar,
                  title: "Practical Project Ideas",
                  description: "Start building impactful projects immediately to boost your portfolio and confidence",
                },
                {
                  icon: FaRobot,
                  title: "Workflow Efficiency",
                  description: "Save time on tedious tasks and focus on strategy and decision-making",
                },
                {
                  icon: FaToolbox,
                  title: "Career Edge",
                  description: "Stand out by adding AI tools to your resume and becoming future-proof in analytics",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#0A1A2A]/60 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-indigo-500/10 hover:border-emerald-400/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-3">
                    <item.icon className="text-cyan-400 w-5 h-5 mt-1 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <div className="relative inline-flex group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
                <button
                  onClick={scrollToForm}
                  className="relative inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#061625] rounded-lg leading-none border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 text-white group-hover/btn:text-emerald-50 transition-all">
                    Register Now
                  </span>
                  <svg
                    className="ml-2 w-4 h-4 text-white group-hover/btn:text-cyan-100 transition-colors animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Instructor Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-indigo-50">
                Meet {instructorDetails.name}
              </span>
            </h2>
            <div className="bg-[#0A1A2A]/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-emerald-500/10 hover:border-indigo-400/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:block w-32 h-32 rounded-lg bg-gradient-to-br from-emerald-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-lg p-1">
                    <img
                      src="/assets/mentor/akash.webp"
                      alt={instructorDetails.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{instructorDetails.name}</h3>
                  <p className="text-emerald-400 font-medium mb-3 text-sm">{instructorDetails.title}</p>
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      With 7 years in ML and AI, Akash has delivered impactful projects in computer vision, NLP, and
                      predictive analytics, with a passion for data science education.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-indigo-900/20 p-3 rounded-lg">
                        <p className="text-gray-300 text-xs">
                          <span className="font-semibold text-cyan-300">Expertise:</span> ML, Deep Learning, Computer
                          Vision, NLP
                        </p>
                      </div>
                      <div className="bg-emerald-900/20 p-3 rounded-lg">
                        <p className="text-gray-300 text-xs">
                          <span className="font-semibold text-cyan-300">Previous:</span> Microsoft, Intel, ML Research
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-indigo-50">
                Who Should Attend
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="group bg-[#0A1A2A]/60 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-indigo-500/10 hover:border-emerald-400/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600/10 flex items-center justify-center flex-shrink-0">
                      <FaUser className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-gray-300 text-sm">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="flex justify-center">
            <div className="relative inline-flex group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button
                onClick={scrollToForm}
                className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#061625] rounded-lg leading-none border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 text-white group-hover/btn:text-emerald-50 transition-all">
                  Register Now
                </span>
                <svg
                  className="ml-2 w-5 h-5 text-white group-hover/btn:text-indigo-100 transition-colors animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
