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
  FaBullseye,
  FaChartLine,
} from "react-icons/fa";

const WSAboutDM = () => {
  const instructorDetails = {
    name: "Ankita Das",
    title: "LinkedIn Personal Branding for B2B CEO & Founders | B2B Content Marketing | B2B Copywriter | B2B Growth Marketer | Marketing Consultant|",
  };

  const targetAudience = [
    "Entrepreneurs and business owners eager to skyrocket sales with high-ROI Meta Ads",
    "Marketing professionals looking to master advanced targeting and ad optimization",
    "Startups and small businesses seeking cost-effective strategies to scale fast",
    "Anyone ready to dominate ad platforms like Facebook, Instagram, and LinkedIn in just two hours",
  ];  
  

  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-green-50/50 mix-blend-overlay"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          {/* About and Features Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Workshop Section */}
            
            <div className="relative">
  <div className="sticky top-24">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
      About This Workshop
    </h2>
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
      <p className="text-gray-700 text-left leading-relaxed mb-6 lg:text-lg">
        Struggling to make your Meta Ads profitable? Running ads successfully requires the right 
        strategies, laser-focused targeting, and optimization techniques. This workshop will teach you 
        how to create high-converting campaigns that drive real business growth.
      </p>
      <p className="text-gray-700 text-left leading-relaxed mb-6 lg:text-lg">
        Join <span className="font-bold text-blue-600">AcceleratorX's Exclusive Workshop</span>  
        with expert <span className="font-bold text-green-600">Ankita Das</span> on  
        <span className="font-bold text-blue-600">Friday, 21st February, 4:00 PM</span>, and learn:
      </p>
      <ul className="list-none pl-0 mb-8 space-y-4">
        {[
          "How to create scroll-stopping ad creatives that drive conversions",
          "Advanced audience targeting techniques to reach the right customers",
          "Budgeting, bidding, and optimization strategies to maximize ROI",
          "Proven frameworks to scale ad campaigns profitably"
        ].map((item, index) => (
          <li key={index} className="flex items-start space-x-3 lg:text-lg group">
            <div className="bg-blue-50 p-1.5 rounded-full group-hover:bg-blue-100 transition-colors">
              <FaCheck className="text-blue-500 flex-shrink-0" />
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-l-4 border-blue-500 transform hover:scale-[1.02] transition-all duration-300">
        <p className="text-gray-700 font-medium lg:text-lg">
          <span className="font-bold text-blue-700">Pro Tip:</span> Stop wasting money on ads that don’t convert!  
          Unlock the secrets of high-ROI Meta Ads and start scaling your business today. Seats are limited—sign up now!
        </p>
      </div>
    </div>
  </div>
</div>


            {/* Workshop Features Section */}
            <div>
  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
    Why Join This Workshop?
  </h2>
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        icon: <FaLaptopCode className="text-3xl text-blue-500" />, 
        title: "Hands-on Learning", 
        description: "Set up real Meta Ads campaigns with expert guidance."
      },
      {
        icon: <FaCertificate className="text-3xl text-green-500" />, 
        title: "Industry-Recognized Certificate", 
        description: "Get certified and showcase your expertise in paid ads."
      },
      {
        icon: <FaClock className="text-3xl text-blue-500" />, 
        title: "Intensive 2-Hour Training", 
        description: "Master high-ROI ad strategies in a focused, power-packed session."
      },
      {
        icon: <FaRocket className="text-3xl text-green-500" />, 
        title: "Scale Your Business", 
        description: "Learn proven ad frameworks to increase conversions and revenue."
      }
    ].map((feature, index) => (
      <div
        key={index}
        className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      >
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
      </div>
    ))}
  </div>
</div>

          </div>

          {/* Register Now Button */}
          <div className="flex justify-center">
            <div className="relative inline-flex group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button 
                onClick={() => {
                  const form = document.getElementById('workshop-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative inline-flex items-center px-10 py-5 text-lg font-semibold text-white bg-gray-800 rounded-lg leading-none hover:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                  Reserve Your Spot Now
                </span>
                <svg
                  className="ml-3 w-6 h-6 text-white group-hover/btn:text-blue-50 transition-all transform group-hover/btn:translate-x-1"
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
  <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
    What You Will Gain From This 2-Hour Meta Ads Masterclass
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: FaBullseye,
        title: "Master Advanced Ad Targeting",
        description: "Identify and reach high-intent audiences with precision to maximize conversions."
      },
      {
        icon: FaChartLine,
        title: "Optimize Ads for Higher ROI",
        description: "Implement data-driven strategies to reduce costs and boost ad performance."
      },
      {
        icon: FaLightbulb,
        title: "Create Scroll-Stopping Ad Creatives",
        description: "Design visually compelling and high-converting ad creatives that grab attention instantly."
      },
      {
        icon: FaUsers,
        title: "Scale Campaigns Like a Pro",
        description: "Use analytics and A/B testing to refine, optimize, and scale winning ad campaigns."
      }
    ].map((item, index) => (
      <div key={index} className="group bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
            <item.icon className="text-blue-500 w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              Meet {instructorDetails.name}
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-[1.01] transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:block w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 p-0.5 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="w-full h-full bg-white rounded-2xl p-1">
                    <img
                      src="/assets/mentor/ankitadas.jpeg"
                      alt={instructorDetails.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {instructorDetails.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {instructorDetails.title}
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Ankita Das helps businesses cut through the noise with high-impact content 
                      that drives engagement and conversions. With expertise in LinkedIn strategy, 
                      website copy, and community growth, she transforms invisible content into 
                      powerful brand assets.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                        <p className="text-gray-600">
                          <span className="font-semibold text-blue-600">Expertise:</span>{" "}
                          LinkedIn Strategy, Website Copywriting, Community Growth, Content Marketing
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
                        <p className="text-gray-600">
                          <span className="font-semibold text-green-600">What She Does:</span>{" "}
                          Optimizes LinkedIn profiles, crafts website copy that converts, and builds 
                          loyal online communities.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              This Masterclass is for
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <FaUser className="w-5 h-5 text-blue-500 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors text-lg">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="flex justify-center">
            <div className="relative inline-flex group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt"></div>
              <button 
                onClick={() => {
                  const form = document.getElementById('workshop-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative inline-flex items-center px-10 py-5 text-lg font-semibold text-white bg-gray-800 rounded-lg leading-none hover:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span className="relative z-10 text-white group-hover/btn:text-blue-50 transition-all">
                  Join the Workshop
                </span>
                <svg
                  className="ml-3 w-6 h-6 text-white group-hover/btn:text-blue-50 transition-all transform group-hover/btn:translate-x-1"
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

export default WSAboutDM;
