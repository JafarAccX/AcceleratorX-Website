import React from "react";
import { FaCheck } from "react-icons/fa";
import { Star, Award, Target, Sparkles } from "lucide-react";
import { FaUser, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const WSAboutPM = () => {
  const instructorDetails = {
    name: "Subhasis Chandra",
    title: "Senior PM, Publicis Sapient",
  };

  const targetAudience = [
    "Aspiring Product Managers looking to transition into PM roles with AI-powered skills",
    "Professionals seeking a career shift into high-impact product management positions",
    "Tech Experts & Engineers eager to integrate AI-driven strategic decision-making",
    "Students & Early-Career Professionals preparing for AI-driven PM roles",
  ];

  const whatWillYouGain = [
    {
      icon: <Star className="w-5 h-5" />,
      title: "Master AI-driven product management frameworks",
      description: "Learn cutting-edge frameworks that combine traditional PM methodologies with AI capabilities"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Transform product strategy with AI",
      description: "Discover how AI enhances market research, user insights, and strategic decision-making"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Hands-on AI applications",
      description: "Get practical experience with real-world AI implementations in product management"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Future-proof your career",
      description: "Develop the in-demand AI skills that will set you apart in the product management field"
    },
  ];

  return (
    <div className="bg-[#0A0F1D] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-16">
          {/* About Masterclass Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-2xl"></div>
            <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                About this Masterclass
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Unlock the future of product innovation with our Masterclass in
                  AI for Product Management – a cutting-edge program designed to
                  equip you with the AI skills that top product managers are
                  leveraging in 2025 and beyond.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Join <span className="text-indigo-400 font-medium">AcceleratorX's Masterclass</span> led 
                  by seasoned product manager <span className="text-indigo-400 font-medium">{instructorDetails.name}</span> on{" "}
                  <span className="text-indigo-400 font-medium">Saturday, 8th February, 07:00 PM onwards</span> to discover:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Master AI-Driven Product Management Skills",
                      desc: "Learn how AI is transforming product management by automating workflows, enhancing decision-making, and driving data-driven strategies.",
                    },
                    {
                      title: "Stay Ahead with AI & Industry Trends",
                      desc: "Understand the latest AI applications in product management, including predictive analytics, user personalization, and intelligent automation.",
                    },
                    {
                      title: "Build a Clear AI-Powered Career Path",
                      desc: "Gain actionable insights to transition into AI-driven product management, from leveraging AI tools to applying real-world case studies and best practices.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 border border-indigo-500/20">
                        <FaCheck className="text-indigo-400 w-3 h-3" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-xl p-6 border border-indigo-500/20">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-indigo-400 mt-1" />
                    <div>
                      <p className="font-medium text-white mb-1">Pro Tip</p>
                      <p className="text-gray-300">
                        Stay ahead of the curve and become the AI-driven product leader companies are
                        searching for. Limited Spots Available! Secure yours now! 🚀
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Gain Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              What You Will Gain
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {whatWillYouGain.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-xl transition-all duration-300 group-hover:from-indigo-500/10 group-hover:to-violet-500/10"></div>
                  <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-xl p-6 border border-indigo-500/20 transition-all duration-300 group-hover:border-indigo-400/30">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Instructor Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Meet {instructorDetails.name}</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-40 w-full aspect-square rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-0.5">
                <div className="w-full h-full bg-white rounded-lg p-1">
                  <img
                    src="/assets/mentor/subhasis.png"
                    alt={instructorDetails.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{instructorDetails.name}</h3>
                  <span className="text-gray-400">|</span>
                  <p className="text-blue-600 font-medium">{instructorDetails.title}</p>
                </div>
                <p className="text-gray-600">
                  Subhasis Chandra is an experienced Product Manager with
                  over 8 years in the US healthcare sector, specializing in
                  market assessment and growth strategy. Skilled in Agile
                  methodologies, he has led successful agile transitions for
                  top healthcare clients, optimizing efficiency and
                  outcomes. Certified CSPO, POPM, and SAFe® 5.0 Scrum
                  Master, Subhasis excels in crafting product roadmaps, use
                  cases, and user stories, ensuring alignment and clarity
                  across teams. He is driven by data insights, constantly
                  innovating and improving products to exceed customer and
                  business goals. Passionate about improving patient
                  outcomes, Subhasis navigates complex healthcare
                  regulations to deliver compliant, impactful products. His
                  expertise and commitment make him an invaluable asset to
                  any healthcare organization aiming to drive growth and
                  enhance patient care.
                </p>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Certificate Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="w-5 h-5" />
                <h3 className="text-lg font-bold">Certificates</h3>
              </div>
              <p className="text-sm mb-2 text-blue-50">
                All attendees will receive an official certificate from AcceleratorX!
              </p>
              <p className="text-xs bg-white/10 p-3 rounded">
                Please be careful while entering your details during registration as they will appear on your certificate
              </p>
            </div>

            {/* Tools Section */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Tools You Will Learn</h3>
              <div className="grid grid-cols-4 gap-4">
                {["asanaa", "jiraa", "Amplitude", "miroo"].map((tool, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img
                      src={`/assets/toolLogo/${tool}.${tool === "Amplitude" ? "png" : "webp"}`}
                      alt={tool}
                      className="w-12 h-12 object-contain"
                    />
                    <p className="text-xs text-gray-600 text-center">{tool.replace(/aa$/, "")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Target Audience Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Who Should Attend
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {targetAudience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-xl"></div>
                  <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-xl p-6 border border-indigo-500/20">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-indigo-400 w-4 h-4" />
                      </div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About AcceleratorX</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                AcceleratorX, where innovation meets education. We're dedicated
                to transforming ambitious individuals into industry leaders
                through cutting-edge technology and personalized mentorship.
              </p>
              <p>
                At AcceleratorX, we are on a mission to shape visionary leaders
                who dare to redefine the future. We believe in harnessing
                ambition and transforming it into unstoppable momentum, turning
                ideas into action and dreams into impactful careers. Our
                commitment is to empower individuals with immersive, hands-on
                learning experiences that challenge limits, unlock potential,
                and open doors to a world of opportunity.
              </p>
              <p>
                Our programs are meticulously crafted for those who strive not
                just to learn but to lead, with a focus on real-world
                application, mentorship from top industry experts, and a
                powerful support network. Through a curriculum that bridges
                theory and practice, we guide our students in mastering
                high-impact skills, building their personal brand, and
                navigating competitive markets with confidence and purpose.
                With access to elite mentors from companies like Tata,
                Walmart, and PayPal, and an unmatched placement support
                system, we create a seamless path from ambition to
                achievement.
              </p>
              <p>
                At AcceleratorX, we don't just prepare you for a career; we
                equip you to make waves. Join us to build, lead, and succeed
                in the arena of tomorrow's leaders. The future starts with
                you.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WSAboutPM;
