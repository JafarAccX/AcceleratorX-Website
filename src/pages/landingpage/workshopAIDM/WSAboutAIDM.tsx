import { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Brain, Target, TrendingUp } from "lucide-react";

const WSAboutAIDM = () => {
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
  const toolsRef = useRef(null);

  const allTools = [
    { name: "HubSpot", img: "/assets/dataAnalyticsLogo/hubspot.webp" },
    { name: "Mailchimp", img: "/assets/dataAnalyticsLogo/mailchimp.webp" },
    { name: "Zapier", img: "/assets/dataAnalyticsLogo/zapier.webp" },
    { name: "Google Analytics", img: "/assets/dataAnalyticsLogo/google-analytics.webp" },
    { name: "Notion", img: "/assets/dataAnalyticsLogo/notion.webp" },
    { name: "ActiveCampaign", img: "/assets/dataAnalyticsLogo/activecampaign.webp" },
    { name: "Make.com", img: "/assets/dataAnalyticsLogo/make.webp" },
    { name: "ChatGPT", img: "/assets/genAITools/gpt4.webp" },
    { name: "Claude", img: "/assets/genAITools/claude.webp" },
    { name: "Meta Ads", img: "/assets/dataAnalyticsLogo/meta-ads.webp" },
    { name: "Google Ads", img: "/assets/dataAnalyticsLogo/google-ads.webp" },
  ];

  return (
    <div className="bg-[#050A14] py-12 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 space-y-6">
            {/* About Card */}
            <div className="bg-[#0A1020] rounded-lg shadow-md border border-green-900/20 overflow-hidden">
              <div className="p-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-md px-3 py-1 mb-4">
                  <span className="text-green-400 text-sm font-medium">AI-Powered Marketing Automation Workshop</span>
                </div>

                {/* Title */}
                {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-4"> AI Marketing Automation Workshop
                </h2> */}

                {/* Workshop Info */}

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Workshop Highlights */}
                  <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-blue-500/10 rounded-md">
                        <Brain className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">Workshop Highlights</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Understand how AI transforms modern marketing workflows.",
                        "Learn to automate repetitive tasks like emails, ads & reporting.",
                        "Build automated customer journeys and funnels.",
                        "Use AI tools to personalize campaigns at scale.",
                        "Learn how to track performance and optimize with automation.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-xs bg-blue-500/20 p-1 rounded-sm">{index + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You'll Learn */}
                  <div className="bg-[#111827] p-4 rounded-md border border-green-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-green-500/10 rounded-md">
                        <Target className="w-4 h-4 text-green-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">What You'll Learn</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "How to use AI tools to automate marketing processes.",
                        "Setting up customer journeys, triggers, and automated workflows.",
                        "Building smart segmentation & personalized messaging.",
                        "Automating reporting, analytics & campaign optimization.",
                        "Creating an end-to-end marketing automation system for your business.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-xs bg-green-500/20 p-1 rounded-sm">{index + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full mt-5 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Tools Section - Simplified */}
            <div ref={toolsRef} className="bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20">
              <p className="text-xl font-bold text-white mb-4">CRO Tools You'll Master</p>
              <div className="relative overflow-hidden">
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-3 px-2"
                    animate={{
                      x: [0, -80 * allTools.length],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: allTools.length * 2,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...allTools, ...allTools].map((tool, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-16 h-16 bg-[#111827] rounded-md p-2 flex flex-col items-center justify-center gap-1 border border-gray-800/30"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-md">
                          <img src={tool.img} alt={tool.name} className="w-6 h-6 object-contain" />
                        </div>
                        <p className="text-[9px] font-medium text-gray-300 text-center line-clamp-1">{tool.name}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certificate Only */}
          <div className="w-full lg:w-2/5 space-y-6">
            {/* Certification Card */}
            <div className="bg-gradient-to-r from-blue-900/60 to-green-900/60 rounded-lg overflow-hidden shadow-md">
              <div className="p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <FaCertificate className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Certification Included</h3>
                </div>
                <p className="text-gray-200 mb-3 text-sm">
                  After attending the complete workshop, you'll receive an official Professional Certificate in Marketing Automation—a strong proof of your AI digital marketing skills.
                </p>
                <p className="text-gray-200 mb-3 text-sm">
                  Earn an industry-recognized certificate showcasing your automation expertise!
                </p>
                <div className="bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10">
                  ⚠️ Certificate is provided only to participants who attend the full workshop.
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="bg-[#0A1020] rounded-lg shadow-md p-5 border border-green-900/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Workshop Benefits</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Hands-on practice with real marketing tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  AI-based automation strategies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Practical industry case studies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Live Q&A + mentorship from experts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutAIDM;