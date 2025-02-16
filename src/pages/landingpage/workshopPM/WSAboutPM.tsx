import React from "react";
import { FaCheck } from "react-icons/fa";
import { Star, Award, Target, Sparkles, ArrowRight, UserIcon, PenTool, CheckCircle, BarChart } from "lucide-react";
import { FaUser, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const WSAboutPM = () => {

  const scrollToForm = () => {
    const form = document.getElementById('workshop-registration-form');
    if (form) {
      form.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };

  const instructorDetails = {
    name: "Ravi Ahlawat",
    title: "Senior PM, Paytm",
  };

  const targetAudience = [
    "Product Managers looking to enhance their UX design skills for better product adoption." ,
    "Business Analysts and Product Owners** aiming to integrate user-centric design into their product strategy. ",
    "Startup Founders and Entrepreneurs** focused on building intuitive and engaging products. ",
    "Professionals transitioning into Product Management** who want to master UX principles for product success.",
  ];


  const whatWillYouGain = [
    {
      icon: <Star className="w-5 h-5" />,
      title: "Master UX Fundamentals",
      description: "Learn core UX principles and methodologies to enhance product design and usability."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "User-Centered Design",
      description: "Develop skills to create intuitive, user-friendly experiences that drive engagement."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Hands-On UX Techniques",
      description: "Gain practical experience with wireframing, prototyping, and usability testing."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Optimizing Product Success",
      description: "Learn how UX impacts product strategy, customer retention, and business growth."
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
        Master the art of UX Designing for Product Management with our expert-led masterclass – designed to equip you with the essential skills and frameworks to create user-centric, high-impact products.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Join <span className="text-indigo-400 font-medium">AcceleratorX's Masterclass</span> led 
        by seasoned UX and product expert <span className="text-indigo-400 font-medium">{instructorDetails.name}</span> on{" "}
        <span className="text-indigo-400 font-medium">Thursday, 20th February, 07:00 PM IST onwards</span> to discover:
      </p>
      <ul className="space-y-4">
        {[
          {
            title: "User-Centered Product Strategy",
            desc: "Learn how to integrate UX principles into product management for enhanced user engagement and retention.",
          },
          {
            title: "Practical UX Design Techniques",
            desc: "Master wireframing, prototyping, and usability testing to create seamless user experiences.",
          },
          {
            title: "Data-Driven UX Optimization",
            desc: "Leverage analytics and user feedback to refine and optimize product design for maximum impact.",
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
              Elevate your product management skills with UX-focused strategies. Limited seats available – Register now to transform your product’s user experience! 🚀
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
        title: "User-Centric Mindset",
        description: "Develop a deep understanding of user behavior and needs to create intuitive and impactful product experiences.",
        icon: <UserIcon className="w-6 h-6" />,
      },
      {
        title: "Wireframing & Prototyping",
        description: "Learn industry-standard tools and techniques for designing high-fidelity wireframes and interactive prototypes.",
        icon: <PenTool className="w-6 h-6" />,
      },
      {
        title: "Effective Usability Testing",
        description: "Master the art of testing user experiences, gathering feedback, and iterating designs for optimal product success.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
      {
        title: "Data-Driven UX Optimization",
        description: "Leverage analytics and A/B testing to refine product interfaces and enhance overall user satisfaction.",
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
          <section className="bg-white rounded-lg shadow-sm p-6">
  <h2 className="text-2xl font-bold mb-4 text-gray-900">Meet {instructorDetails.name}</h2>
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-40 w-full aspect-square rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-0.5">
      <div className="w-full h-full bg-white rounded-lg p-1">
        <img
          src="/assets/mentor/ravi.png"
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
        Ravi Ahlawat is a dynamic product leader with a track record of driving innovation 
        across multiple industries, from edtech to SaaS. With experience at the intersection 
        of business strategy, product development, and user experience, Ravi has helped 
        build and scale impactful solutions in fast-paced environments.
      </p>
      <p className="text-gray-600 mt-3">
        Following Robert Heinlein’s belief that "specialization is for insects," Ravi 
        embodies versatility—leading teams, optimizing growth strategies, crafting 
        compelling narratives, and developing solutions that bridge the gap between 
        technology and user needs. He is passionate about continuous learning, cross-domain 
        expertise, and pushing boundaries to create meaningful impact.
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
        </div>
      </div>
    </div>
  );
};

export default WSAboutPM;
