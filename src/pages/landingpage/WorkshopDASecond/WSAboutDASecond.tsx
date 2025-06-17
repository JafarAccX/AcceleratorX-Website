import { FaCheck, FaUser, FaUsers, FaBrain, FaRobot, FaDatabase, FaChartBar } from "react-icons/fa";

const WSAboutDASecond = () => {
  const instructorDetails = {
    name: "Sagar Rajput",
    title: " Generative AI Engineer Flooid.in ",
  };

  const targetAudience = [
    "Aspiring Data Analysts - See how AI can elevate your data skills and make you job-ready — faster than ever.",
    "Business Professionals - Automate tedious analysis and turn raw reports into decision-driving strategies.",
    "Students & Researchers – Create powerful, research-grade visuals and insights — effortlessly and accurately.",
    "Non-Technical Learners – Learn how to work with data using intuitive, no-code AI tools — no background required.",
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/95 to-[#0A0F1C] py-16 lg:py-24">
      <div className="container mx-auto px-4 z-10 flex flex-col gap-10 md:gap-20">
        {/* About and Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 h-full mb-20">
          {/* About Masterclass Section */}
          <div className=" lg:h-full float-start items-start justify-between ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white">
                About this Workshop
              </span>
            </h2>
            <div className="bg-white/5 backdrop-blur-xl lg:h-full rounded-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                Most people see raw data as rows of noise — but in this live workshop, you’ll{" "}
                <span className="font-bold text-white">learn how to clean that chaos, segment it into meaning,</span>{" "}
                and let AI do the heavy lifting in finding stories worth telling.
              </p>

              <p className="text-gray-300 text-left leading-relaxed mb-6 lg:text-lg">
                Join <span className="font-bold text-white">AcceleratorX's Hands-on Workshop</span> and learn :
              </p>
              <ul className="list-none pl-0 mb-8 space-y-4">
                {[
                  "Use AI tools to clean and structure messy datasets",
                  "Segment data to uncover patterns and trends",
                  "Automate your analysis and save hours",
                  "Craft insights into persuasive, data-driven stories",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 lg:text-lg group">
                    <FaCheck className="text-emerald-400 mt-1.5 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid Section */}
          <div className="h-full ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left">
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white"> */}
              Workshop Features
              {/* </span> */}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 h-full">
              {[
                {
                  icon: <FaRobot className="text-3xl text-emerald-400" />,
                  title: "AI-Powered Data Cleaning",
                  description: "Experience how AI can clean messy datasets live — no Excel or scripts needed.",
                },
                {
                  icon: <FaDatabase className="text-3xl text-indigo-400" />,
                  title: "Live Data Segmentation with AI",
                  description: "Watch how intelligent grouping reveals hidden patterns from raw data effortlessly.",
                },
                {
                  icon: <FaChartBar className="text-3xl text-emerald-400" />,
                  title: "Instant Insight Generation",
                  description: "See AI transform numbers into ready-to-present insights — as you upload them.",
                },
                {
                  icon: <FaBrain className="text-3xl text-indigo-400" />,
                  title: "Impact-Driven Storytelling",
                  description:
                    "Master the art of using AI-generated visuals and narratives to tell compelling data stories.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5   backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20  transition-all duration-300"
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

        <div className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 rounded-lg p-6 border-l-4 border-emerald-400">
          <p className="text-gray-300 font-medium lg:text-lg">
            <span className="font-bold text-emerald-400">Pro tip:</span> You’ll walk away with a portfolio-ready data
            story — one that’s automated, human-centered, and impossible to ignore.
          </p>
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
              <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">Register Now</span>
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
          <h2 className="text-3xl   font-bold mb-8 text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              What You Will Gain From This 2-Hour Tableau Data Storytelling Masterclass
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaBrain,
                title: "Raw to Refined Workflow",
                description:
                  "Learn how to go from messy CSVs to structured, ready-to-analyze datasets — live, with AI.",
              },
              {
                icon: FaDatabase,
                title: "AI-Powered Segmentation",
                description:
                  "Discover how AI can group your data into meaningful clusters — without writing a single formula.",
              },
              {
                icon: FaChartBar,
                title: "Real-World Business Applications",
                description: "Explore how AI Analysts are used in marketing, sales, and strategy by leading companies.",
              },
              {
                icon: FaUsers,
                title: "Live Demos & Interactive Q&A",
                description:
                  "Experience hands-on automation flows and get expert answers to your real-world data challenges.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-start  gap-4">
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
                    src="/assets/mentor/sagar.png"
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
                    Sagar Rajput is a Generative AI Engineer and the AI Lead behind AstroSure AI, where he scaled
                    intelligent systems to 700K+ monthly users. With deep expertise in data science, LLMs, and computer
                    vision, Sagar has built advanced AI pipelines, real-time chatbots, and vector-based retrieval
                    systems.{" "}
                  </p>
                </div>
              </div>
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
              <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">Register Now</span>
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
  );
};

export default WSAboutDASecond;
