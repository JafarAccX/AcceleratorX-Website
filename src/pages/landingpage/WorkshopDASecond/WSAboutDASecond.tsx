import { FaCheck, FaUser, FaUsers, FaBrain, FaRobot, FaDatabase, FaChartBar } from "react-icons/fa";

const WSAboutDASecond = () => {
  const instructorDetails = {
    name: "Shubham Swaraj ",
    title: "Founder & Director - BIP Consults pvt. ltd.",
  };

  const targetAudience = [
    "Aspiring Data Analysts – Learn one of the most in-demand tools in data analytics.",
    "Business Professionals – Turn reports into interactive dashboards that tell compelling stories.",
    "Students & Researchers – Build presentation-ready visuals for academic or project use.",
    "Non-Technical Learners – Use Tableau’s no-code interface to analyze and share insights effortlessly.",
  ];

  // const scrollToForm = () => {
  //   const form = document.getElementById("workshop-registration-form");
  //   if (form) {
  //     form.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   } else {
  //     console.error('Form element not found with ID "workshop-registration-form"');
  //   }
  // };

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white">
                  About this Workshop
                </span>
              </h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                  Storytelling is one of the <span className="font-bold text-white">most valuable skills</span> in
                  today’s data-driven world. With Tableau, anyone can turn raw data into stunning visual insights — no
                  technical background required.
                </p>
                <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                  In this hands-on workshop, you’ll
                  <span className="font-bold text-white"> go from zero to master Tableau’s interface </span>, building
                  dashboards, and crafting compelling data stories that deliver impact.
                </p>
                <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                  Join <span className="font-bold text-white">AcceleratorX's Hands-on Workshop</span> and learn :
                </p>
                <ul className="list-none pl-0 mb-8 space-y-4">
                  {[
                    "Build interactive dashboards from scratch using Tableau",
                    "Create dynamic visuals that convey key insights instantly",
                    "Connect, clean, and visualize real-world datasets with ease",
                    "Master best practices in storytelling with data",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 lg:text-lg group">
                      <FaCheck className="text-emerald-400 mt-1.5 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 rounded-lg p-6 border-l-4 border-emerald-400">
                  <p className="text-gray-300 font-medium lg:text-lg">
                    <span className="font-bold text-emerald-400">Pro tip:</span> You’ll leave with a portfolio-ready
                    dashboard and the skills to start using Tableau like a pro. Limited seats — reserve yours today!
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white">
                  Workshop Features
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaRobot className="text-3xl text-emerald-400" />,
                    title: "No-Code Dashboard Building",
                    description: "Create impactful dashboards using Tableau’s intuitive drag-and-drop interface.",
                  },
                  {
                    icon: <FaDatabase className="text-3xl text-indigo-400" />,
                    title: "End-to-End Data Visualization",
                    description: "From connecting data to publishing visuals, learn the full Tableau workflow.",
                  },
                  {
                    icon: <FaChartBar className="text-3xl text-emerald-400" />,
                    title: "One-Click Insights",
                    description: "Use Tableau’s smart features to uncover trends, patterns, and stories in your data.",
                  },
                  {
                    icon: <FaBrain className="text-3xl text-indigo-400" />,
                    title: "Custom Visual Narratives",
                    description: "Craft stories that resonate with stakeholders and support business decisions.",
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
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
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
                      block: "center",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* What You'll Gain Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                What You Will Gain From This 2-Hour Tableau Data Storytelling Masterclass
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaBrain,
                  title: "Dashboard Design Principles",
                  description: "Understand how to structure dashboards for clarity, insight, and visual appeal",
                },
                {
                  icon: FaDatabase,
                  title: "Data Transformation in Tableau",
                  description: "Learn built-in tools for filtering, grouping, and cleaning data seamlessly.",
                },
                {
                  icon: FaChartBar,
                  title: "Real-World Tableau Use Cases",
                  description:
                    "See how top organizations use Tableau in business intelligence, marketing, and operations.",
                },
                {
                  icon: FaUsers,
                  title: "Live Demos & Q&A",
                  description:
                    "Watch step-by-step Tableau builds, get your questions answered, and connect with experts.",
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
            {/* <div className="flex justify-center mt-4">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div> */}
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
                      src="/assets/mentor/Shubham.jpeg"
                      alt={instructorDetails.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{instructorDetails.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{instructorDetails.title}</p>
                  <div className="space-y-4">
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Shubham Swaraj is the Founder of BIP CONSULTS with over 5 years of experience in academic
                      operations, faculty training, and financial strategy. A former AVP at MIDHA, he is passionate
                      about simplifying complex concepts and helping learners master tools like Tableau.
                    </p>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50/10 p-4 rounded-lg">
                        <p className="text-gray-400">
                          <span className="font-semibold text-white">Expertise:</span> Machine Learning, Deep Learning,
                          Computer Vision, NLP
                        </p>
                      </div>
                      <div className="bg-gray-50/10 p-4 rounded-lg">
                        <p className="text-gray-400">
                          <span className="font-semibold text-white">Previous:</span> Microsoft, Intel, Research Papers
                          in ML
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center mt-4">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div> */}
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
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
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
                  console.log("WSAbout: Form element found:", form);
                  if (form) {
                    // console.log('WSAbout: Attempting to scroll to form');
                    form.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
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

export default WSAboutDASecond;
