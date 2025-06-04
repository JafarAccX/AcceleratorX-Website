import { FaCheck } from "react-icons/fa";
import { Star, ArrowRight, UserIcon, PenTool, CheckCircle, BarChart } from "lucide-react";
import { FaCertificate } from "react-icons/fa";

const WSAboutPM = () => {
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

  const instructorDetails = {
    name: "Subhasis Chandra",
    title: " Senior Product Manager, Publicis Sapient",
  };

  const targetAudience = [
    "Product Managers seeking to harness the power of Generative AI to boost efficiency, innovation, and impact.",
    "Business Analysts and Product Owners aiming to integrate AI-driven insights and automation into their product strategy.",
    "Startup Founders and Entrepreneurs looking to leverage Gen AI to accelerate product development and stand out in competitive markets.",
    "Professionals transitioning into Product Management who want to future-proof their skills with cutting-edge AI applications.",
  ];

  return (
    <div className="bg-[#0A0F1D] py-16">
      <div className="container mx-auto ">
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
                  Harness the power of Generative AI to revolutionize your product management approach in this
                  expert-led masterclass—designed to help you build smarter, faster, and more user-centric products with
                  cutting-edge AI tools.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {" "}
                  Join <span className="text-indigo-400 font-medium">AcceleratorX's Masterclass</span> led by AI and
                  product leader <span className="text-indigo-400 font-medium">Subhasis Chandra</span> on Thursday, 7th
                  June, 07:30 PM IST onwards to discover:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "AI-Powered Product Strategy",
                      desc: "Learn how to incorporate Generative AI into your product roadmap to accelerate research, ideation, and execution.",
                    },
                    {
                      title: "Hands-On with Gen AI Tools",
                      desc: "Explore real-world applications of tools like ChatGPT, Midjourney, and more to automate tasks, enhance collaboration, and boost creativity.",
                    },
                    {
                      title: "Data-Driven Decision Making",
                      desc: "Use AI to analyze user behavior, forecast trends, and make smarter product decisions that drive results.",
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
                        Stand out as a future-ready PM by integrating Generative AI into your workflow. Only 15 seats
                        left! – Register now and get ahead of the curve! 🚀
                      </p>
                    </div>
                  </div>
                </div>
                <div className="block lg:hidden pt-4">
                  <button
                    onClick={scrollToForm}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
                  >
                    Reserve Your Spot
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </button>
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
              {[
                {
                  title: "AI-Enhanced Product Thinking",
                  description:
                    "Understand how to integrate Generative AI into product workflows to streamline ideation, planning, and development.",
                  icon: <UserIcon className="w-6 h-6" />,
                },
                {
                  title: "Hands-On AI Tool Mastery",
                  description:
                    "Get practical experience with Gen AI tools like ChatGPT, DALL·E, and more to automate tasks and enhance creativity.",
                  icon: <PenTool className="w-6 h-6" />,
                },
                {
                  title: "Smarter Decision Making with AI",
                  description:
                    "Use AI to extract insights from data, run simulations, and validate product decisions faster and more effectively.",
                  icon: <CheckCircle className="w-6 h-6" />,
                },
                {
                  title: "Innovation-Driven PM Skills",
                  description:
                    "Learn how to leverage AI for rapid prototyping, user research, and growth experimentation to stay ahead of the curve.",
                  icon: <BarChart className="w-6 h-6" />,
                },
              ].map((item, index) => (
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
            <div className="block lg:hidden pt-4">
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Reserve Your Spot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </button>
            </div>
          </section>

          {/* Instructor Section */}
          <section className="  rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 ">Meet {instructorDetails.name}</h2>
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
                  <h3 className="text-xl font-bold ">{instructorDetails.name}</h3>
                  <span className="text-gray-400">|</span>
                  <p className="text-blue-600 font-medium">{instructorDetails.title}</p>
                </div>
                <p className="text-gray-600">
                  Ravi Ahlawat is a dynamic product leader with a track record of driving innovation across multiple
                  industries, from edtech to SaaS. With experience at the intersection of business strategy, product
                  development, and user experience, Ravi has helped build and scale impactful solutions in fast-paced
                  environments.
                </p>
                <p className="text-gray-600 mt-3">
                  Following Robert Heinlein’s belief that "specialization is for insects," Ravi embodies
                  versatility—leading teams, optimizing growth strategies, crafting compelling narratives, and
                  developing solutions that bridge the gap between technology and user needs. He is passionate about
                  continuous learning, cross-domain expertise, and pushing boundaries to create meaningful impact.
                </p>
              </div>
              <div className="block lg:hidden pt-4">
                <button
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
                >
                  Reserve Your Spot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </section>

          <div className="grid  grid-cols-1 gap-4">
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
                Please be sure to attend the entire session to qualify for the certificate.
              </p>
            </div>

            {/* Tools Section */}
            {/* <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Tools You Will Learn</h3>
              <div className="grid grid-cols-4 gap-4">
                {["asanaa", "Figma", "Amplitude", "miroo"].map((tool, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img
                      src={`/assets/toolLogo/${tool}.${tool === "Amplitude" ? "png" : "webp"}`}
                      alt={tool}
                      className="w-12 h-12 object-contain"
                    />
                    <p className="text-xs text-gray-600 text-center">{tool.replace(/a$/, "")}</p>
                  </div>
                ))}
              </div>
            </div> */}
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
                  <div className="relative h-full bg-[#0A0F1D]/80 backdrop-blur-xl rounded-xl p-6 border border-indigo-500/20">
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

            <div className="block lg:hidden pt-4">
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Reserve Your Spot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </button>
            </div>
          </section>

          {/* Company Section */}
          <section className="bg-gray-900 text-white rounded-lg shadow-md p-6 md:p-10">
            <h2 className="text-3xl font-bold mb-6 text-white">About AcceleratorX</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <span className="text-indigo-400 font-semibold">AcceleratorX</span> is where innovation meets education.
                We transform ambitious individuals into industry leaders through cutting-edge technology and
                personalized mentorship.
              </p>

              <div className="border-t border-gray-700 pt-4">
                <p>
                  Our mission is to shape visionary leaders who dare to redefine the future. We harness ambition,
                  turning ideas into action and dreams into impactful careers.
                </p>
                <p>
                  Empowering individuals through immersive, hands-on learning, we challenge limits, unlock potential,
                  and open doors to opportunity.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p>
                  <span className="text-indigo-400 font-medium">What sets us apart?</span> Real-world application,
                  mentorship from industry experts, and a strong support network.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                  <li>Curriculum bridging theory & practice</li>
                  <li>Elite mentors from Tata, Walmart, PayPal</li>
                  <li>Unmatched placement support</li>
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p>
                  At <span className="text-indigo-400 font-semibold">AcceleratorX</span>, we don’t just prepare you for
                  a career; we equip you to lead and make waves in tomorrow’s world.
                </p>
                <p className="text-indigo-300 font-semibold mt-2">The future starts with you.</p>
              </div>
            </div>

            <div className="block lg:hidden pt-8">
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300"
              >
                Reserve Your Spot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WSAboutPM;
