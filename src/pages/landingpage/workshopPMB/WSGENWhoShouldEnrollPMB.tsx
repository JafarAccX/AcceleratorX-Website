import { Users, Brain, Code, GraduationCap, Rocket } from "lucide-react";

const WSGENWhoShouldEnrollPMB = () => {
  const targetAudience = [
    {
      icon: Code,
      title: "Developers & Engineers",
      description: "Build faster with integrated workflows.",
    },
    {
      icon: GraduationCap,
      title: "Students & Freshers",
      description: "Learn job-ready skills.",
    },
    {
      icon: Brain,
      title: "Tech Enthusiasts",
      description: "Understand end-to-end development.",
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Deploy products without depending on large teams.",
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
              <span className="text-blue-400 text-sm font-medium">Perfect for anyone looking to sharpen real development skills</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-white">Who Is This </span>
              <span className="text-blue-500">For</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto">
              Perfect for anyone looking to sharpen real development skills and speed up their workflow.
            </p>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Target Audience Grid */}
            <div className="w-full  mx-auto">
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
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENWhoShouldEnrollPMB;