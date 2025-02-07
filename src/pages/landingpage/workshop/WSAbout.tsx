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
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-green-50/50 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 lg:pr-[450px]">
        <div className="lg:max-w-none lg:mr-auto space-y-12">
          {/* About Masterclass Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-left text-black">
              About this Masterclass
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <p className="text-black text-left leading-relaxed mb-6">
                Ever wondered how businesses turn raw data into actionable insights? 
                Power BI is revolutionizing the way professionals analyze, visualize, 
                and present data. A well-designed dashboard can drive smarter decisions, 
                improve efficiency, and unlock hidden opportunities.
              </p>
              <p className="text-black text-left leading-relaxed mb-6">
                Join{" "}
                <span className="font-bold text-black">AcceleratorX's Masterclass</span>{" "}
                with expert <span className="font-bold text-black">Aakash Maurya</span> on{" "}
                <span className="font-bold text-black">
                  Monday, 10th February, 7:30 PM
                </span>
                , and learn:
              </p>
              <ul className="list-none pl-0 mb-8 space-y-4">
                {[
                  "How to build interactive, data-driven dashboards for impactful decision-making",
                  "Advanced techniques in data modeling, DAX, and visualization best practices",
                  "Hands-on experience with real-world datasets and Power BI tools"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <FaCheck className="text-blue-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-black font-medium">
                  <span className="font-bold text-blue-700">Pro tip:</span> Take the leap into 
                  data visualization mastery. Enroll today—limited seats available! 
                  Start creating dashboards that drive results.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Gain Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 lg:text-left text-left text-black">
              What You Will Gain From This 2-Hour Masterclass
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaLaptopCode,
                  title: "Master the Fundamentals of Power BI",
                  description: "Gain a strong foundation in Power BI, including data modeling, visualization techniques, and dashboard creation."
                },
                {
                  icon: FaRocket,
                  title: "Hands-On Dashboard Building",
                  description: "Create your first Power BI dashboard with practical exercises and real-world examples."
                },
                {
                  icon: FaLightbulb,
                  title: "Industry Best Practices",
                  description: "Learn professional techniques and standards used in leading organizations."
                },
                {
                  icon: FaUsers,
                  title: "Interactive Learning Experience",
                  description: "Engage in a collaborative environment with live Q&A and peer discussions."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <item.icon className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-black text-sm">
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
            <h2 className="text-3xl font-bold mb-6 lg:text-left text-left text-black">
              Meet {instructorDetails.name}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className=" md:block w-48 h-48 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-lg p-1">
                    <img
                      src="/assets/mentor/akash.png"
                      alt={instructorDetails.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {instructorDetails.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {instructorDetails.title}
                  </p>
                  <div className="space-y-4">
                    <p className="text-black text-sm leading-relaxed">
                      With 7 years of experience in Machine Learning and AI,
                      Akash Maurya, Senior ML Engineer at Nagarro, has delivered
                      impactful projects in computer vision, NLP, and predictive
                      analytics. His passion for data science extends to
                      education.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-black">Expertise:</span>{" "}
                          Machine Learning, Deep Learning, Computer Vision, NLP
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-black">Previous:</span>{" "}
                          Microsoft, Intel, Research Papers in ML
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
            <h2 className="text-3xl font-bold mb-6 text-left text-black">
              This Masterclass is for
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <FaUser className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-black text-sm">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSAbout;
