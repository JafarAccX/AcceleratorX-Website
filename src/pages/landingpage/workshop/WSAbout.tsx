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
  const instructorDetails = {
    name: "Akash Maurya",
    title: "Senior ML Engineer, Nagarro, Ex-Deloitte ",
  };

  const targetAudience = [
    "Aspiring data scientists and machine learning engineers seeking advanced knowledge",
    "Students and professionals aiming to transition to AI roles with practical expertise",
    "Tech professionals eager to integrate machine learning solutions into real-world projects",
    "Individuals keen on mastering AI applications across industries within a focused two-hour session",
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
                Ever wondered what makes machine learning solutions so powerful?
                Machine learning is transforming industries, from predicting
                customer behavior to optimizing complex systems. Behind every
                successful ML solution is a blend of advanced algorithms,
                Python-powered tools, and cutting-edge techniques you can
                master.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Join{" "}
                <span className="font-bold">AcceleratorX's Masterclass</span>{" "}
                with expert <span className="font-bold">Aakash Maurya</span> on{" "}
                <span className="font-bold">
                  Tuesday, 21st January, 07:30 PM
                </span>
                , and discover:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Master advanced machine learning techniques to build scalable
                  and efficient models
                </li>
                <li>
                  Insights from real-world projects to enhance problem-solving
                  and innovation
                </li>
                <li>
                  Explore cutting-edge Python libraries like TensorFlow,
                  PyTorch, and Scikit-learn
                </li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium text-sm">
                  <span className="font-bold">Pro tip:</span> Take the leap into
                  advanced machine learning expertise. Enroll today—limited
                  seats available! Start building smarter, scalable solutions
                  for tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Gain Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 lg:text-left text-center">
              What You Will Gain From This 2-Hour Masterclass
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Essential Advanced Techniques
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Quickly grasp key advanced machine learning concepts,
                    including neural networks and model optimization, to elevate
                    your expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Hands-On Python Tools Overview
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Get a focused introduction to essential Python libraries
                    like TensorFlow, PyTorch, and Scikit-learn to start building
                    impactful models right away.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Real-World Applications in Action
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Discover how machine learning is solving real-world problems
                    through concise case studies in industries like retail and
                    logistics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Build Scalable Solutions Quickly
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Learn to design AI models that are efficient and scalable,
                    tailored for large datasets and rapid deployment within just
                    two hours.
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
