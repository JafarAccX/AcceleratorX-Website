import React from "react";
import { FaCheck, FaUser, FaCertificate } from "react-icons/fa";

const WSAboutPM = () => {
  const instructorDetails = {
    name: "Subhasis Chandra",
    title: "Senior PM, Publicis Sapient",
  };

  const targetAudience = [
    "Aspiring product managers looking to leverage AI in product development",
    "Professionals transitioning into product management roles with an AI focus",
    "Tech professionals seeking to integrate AI tools into product strategies",
    "Students and professionals keen on enhancing product management skills with AI-driven insights",
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
                In today’s fast-paced market, product managers must stay ahead
                by embracing innovation. Artificial Intelligence (AI) is no
                longer a futuristic concept—it’s a critical tool for creating
                smarter, more impactful products. But how do you bridge the gap
                between AI theory and real-world product strategies? This
                masterclass will show you how.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Join{" "}
                <span className="font-bold">AcceleratorX's Masterclass</span>{" "}
                with industry expert{" "}
                <span className="font-bold">Subhasis Chandra</span> on{" "}
                <span className="font-bold">
                  Thursday, 16th January, 08:00 PM onwards
                </span>{" "}
                and unlock the secrets to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Integrating AI into product development for smarter
                  decision-making
                </li>
                <li>
                  Leveraging real-world AI applications to drive product
                  innovation
                </li>
                <li>
                  Mastering AI tools and technologies to build market-leading
                  products
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium text-sm">
                  <span className="font-bold">Pro Tip:</span> The future of
                  product management is AI-driven. Don’t miss this chance to
                  gain a competitive edge. Seats are filling fast—register now
                  and start leading with innovation.
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
                    Master AI-Driven Product Strategies
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Build a strong foundation in integrating AI into product
                    management. Learn how to align AI capabilities with business
                    goals to create impactful, market-ready products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Navigate Cutting-Edge Tools with Confidence
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Explore industry-leading AI tools like TensorFlow, PyTorch,
                    and AWS SageMaker. Learn how to apply these technologies to
                    streamline product workflows and drive innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Real-World Product Innovations
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Gain actionable insights from real-world case studies where
                    AI has transformed products across industries like
                    healthcare, retail, and logistics. See how you can apply
                    these lessons to your own projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <FaCheck className="text-green-500 mt-1 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Scale Products with AI Efficiency
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Learn how to design AI-powered products that scale
                    effortlessly. Discover strategies to handle growing datasets
                    and complex user needs without sacrificing performance.
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
                      src="/assets/mentor/subhasis.png"
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
                    {/* <div className="grid grid-cols-2 gap-3 mt-4">
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
                    </div> */}
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
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Tools You Will Learn
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                <div className="flex flex-col items-center justify-center text-center gap-2 w-full">
                  <img
                    src="/assets/toolLogo/asanaa.webp"
                    alt="Asana"
                    className="w-20 h-20 object-contain"
                  />
                  <p className="font-medium text-gray-700 text-center">Asana</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 w-full">
                  <img
                    src="/assets/toolLogo/jiraa.webp"
                    alt="Jira"
                    className="w-20 h-20 object-contain"
                  />
                  <p className="font-medium text-gray-700 text-center">Jira</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 w-full">
                  <img
                    src="/assets/toolLogo/Amplitude.png"
                    alt="Amplitude"
                    className="w-20 h-20 object-contain"
                  />
                  <p className="font-medium text-gray-700 text-center">
                    Amplitude
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 w-full">
                  <img
                    src="/assets/toolLogo/miroo.webp"
                    alt="Miro"
                    className="w-20 h-20 object-contain"
                  />
                  <p className="font-medium text-gray-700 text-center">Miro</p>
                </div>
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

export default WSAboutPM;
