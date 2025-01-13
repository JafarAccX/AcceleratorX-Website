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
} from "react-icons/fa";

const WSAbout = () => {
  const requirements = [
    "Strong interest in Data Analytics and Machine Learning",
    "Want to enhance your familiarity with data analysis and visualization tools (e.g., Excel, Tableau, or Matplotlib)",
    "Interest in AI, analytics, and problem-solving",
  ];

  const instructorDetails = {
    name: "Akash Maurya",
    title: "Senior ML Engineer, Nagarro, Ex-Deloitte ",
  };

  const targetAudience = [
    "Aspiring data scientists and machine learning engineers",
    "Students and Professionals interested in transitioning to AI roles",
    "Tech professionals looking to integrate AI into their projects",
    "Students and professionals keen on exploring AI applications across industries",
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:pr-[450px]">
        <div className="lg:max-w-none lg:mr-auto space-y-10">
          {/* About Masterclass Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 lg:text-left text-center text-gray-900">
              About this Masterclass
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ever wondered what makes AI solutions so powerful? AI is
                revolutionizing industries, from diagnosing illnesses faster to
                optimizing business processes. But behind every successful AI
                solution is a blend of tools, technologies, and strategies you
                too can master.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Join{" "}
                <span className="font-bold">AcceleratorX's Masterclass</span>{" "}
                with expert <span className="font-bold">Aakash Maurya</span> on{" "}
                <span className="font-bold">
                  Saturday, 12th January, 11:00 AM - 1:00 PM
                </span>
                , and discover:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  How to design AI solutions that are scalable and reliable
                </li>
                <li>
                  Lessons from real-world case studies that inspire innovation
                </li>
                <li>
                  The latest tools and technologies to kickstart your AI journey
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium text-sm">
                  <span className="font-bold">Pro tip:</span> Your first step
                  into AI mastery starts here. Register now—spots are filling
                  fast! Let's build the future, one solution at a time.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Gain Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 lg:text-left text-center">
              What You Will Gain From This Masterclass
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Master the Fundamentals
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Gain a solid understanding of the foundational components of
                    building AI solutions, from data preparation to deploying
                    machine learning models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Tools and Technologies Demystified
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Learn about cutting-edge tools and technologies like
                    TensorFlow, PyTorch, and AWS SageMaker that simplify the
                    process of building and deploying AI solutions at scale.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Real-World Applications
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Discover how AI is solving real-world challenges through
                    case studies in industries like healthcare, retail, and
                    logistics, providing actionable insights you can implement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Scalability and Efficiency
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Understand how to design AI solutions that are scalable and
                    efficient, capable of handling large datasets and complex
                    workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 lg:text-left text-center">
              Meet {instructorDetails.name}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="hidden md:block w-40 h-40 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-lg p-1">
                    <img
                      src="/assets/mentor/akash.png"
                      alt={instructorDetails.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {instructorDetails.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {instructorDetails.title}
                  </p>
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      With 7 years of experience in Machine Learning and AI,
                      Akash Maurya, Senior ML Engineer at Nagarro, has delivered
                      impactful projects in computer vision, NLP, and predictive
                      analytics. An IBM-certified Data Scientist and former Data
                      Science Consultant at Deloitte, Akash specializes in AI,
                      Python, and Data Science. As a part-time instructor at
                      Skillvertex, he mentors aspiring data professionals,
                      combining industry expertise with a passion for AI
                      education.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Expertise:</span>{" "}
                          Machine Learning, Deep Learning, Computer Vision, NLP
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Previous:</span>{" "}
                          Microsoft, Intel, Research Papers in ML
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Certificate Section */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="w-6 h-6" />
                <h3 className="text-xl font-bold">Certificates</h3>
              </div>
              <p className="text-sm mb-3">
                All attendees will receive an official certificate from
                AcceleratorX!
              </p>
              <p className="text-xs bg-white/10 p-3 rounded-lg">
                Please be careful while entering your details during
                registration as they will appear on your certificate
              </p>
            </div>

            {/* Prerequisites Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Tools You will learn</h3>
              <div className="grid grid-cols-3 gap-6 p-4">
                <img
                  src="/assets/dataTools/python.webp"
                  alt="Python"
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                />
                <img
                  src="/assets/dataTools/Tensorflow_logo.webp"
                  alt="TensorFlow"
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                />
                <img
                  src="/assets/dataTools/pandas.webp"
                  alt="Pandas"
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                />
                <img
                  src="/assets/dataTools/scikit-learn-logo.webp"
                  alt="Scikit-learn"
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                />
                <img
                  src="/assets/dataTools/tableu.webp"
                  alt="Tableau"
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Target Audience Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 lg:text-left text-center">
              This Masterclass is for
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FaUser className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-gray-700 text-sm">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 lg:text-left text-center">
              About AcceleratorX
            </h2>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                AcceleratorX, where innovation meets education. We're dedicated
                to transforming ambitious individuals into industry leaders
                through cutting-edge technology and personalized mentorship.
                <br />
                <br />
                At AcceleratorX, we are on a mission to shape visionary leaders
                who dare to redefine the future. We believe in harnessing
                ambition and transforming it into unstoppable momentum, turning
                ideas into action and dreams into impactful careers. Our
                commitment is to empower individuals with immersive, hands-on
                learning experiences that challenge limits, unlock potential,
                and open doors to a world of opportunity.
                <br />
                <br />
                Our programs are meticulously crafted for those who strive not
                just to learn but to lead, with a focus on real-world
                application, mentorship from top industry experts, and a
                powerful support network. Through a curriculum that bridges
                theory and practice, we guide our students in mastering
                high-impact skills, building their personal brand, and
                navigating competitive markets with confidence and purpose. With
                access to elite mentors from companies like Tata, Walmart, and
                PayPal, and an unmatched placement support system, we create a
                seamless path from ambition to achievement.
                <br />
                <br />
                At AcceleratorX, we don't just prepare you for a career; we
                equip you to make waves. Join us to build, lead, and succeed in
                the arena of tomorrow's leaders. The future starts with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSAbout;
