import { Users, Briefcase, Megaphone, Brain } from "lucide-react";

const WSGENWhoShouldEnrollB = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Entrepreneurs & Startups",
      description: "Grow faster with AI-powered campaigns",
    },
    {
      icon: Briefcase,
      title: "Marketers & Content Teams",
      description: "Save time and boost creativity",
    },
    {
      icon: Megaphone,
      title: "Students & Freshers",
      description: "Learn skills that companies are hiring for",
    },
    {
      icon: Brain,
      title: "No-Code Enthusiasts",
      description: "Take your AI + marketing game to the next level",
    },
  ];

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

  return (
    <section className="bg-[#050A14] py-12">
      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">For Doers & Builders</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-white">Who Can </span>
              <span className="text-blue-500">Benefit</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto">
              Anyone looking to grow faster, save time, boost creativity, and gain in-demand AI marketing skills can benefit from this workshop.
            </p>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Target Audience Grid */}
            <div className="w-full lg:w-3/5">
              <div className="grid sm:grid-cols-2 gap-4">
                {targetAudience.map((audience, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 rounded-md bg-blue-500/10">
                        <audience.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{audience.title}</h3>
                        <p className="text-sm text-gray-300">{audience.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button with space for ads */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={scrollToForm}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/5">
              <div className="relative rounded-lg overflow-hidden">
                <img src="/genai.webp" alt="AI Workflow Automation" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENWhoShouldEnrollB;
