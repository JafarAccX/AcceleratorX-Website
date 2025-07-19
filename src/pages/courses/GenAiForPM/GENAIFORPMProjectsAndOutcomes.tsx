import { Rocket } from "lucide-react";

const GENProjectsAndOutcomes = () => {
  const projects = [
    {
      title: "GenAI-powered product research assistant",
      description: "Automate competitor analysis and user research for product managers",
      delay: 100,
    },
    {
      title: "AI-driven roadmap generator",
      description: "Create dynamic product roadmaps from user feedback and market data",
      delay: 200,
    },
    {
      title: "GenAI stakeholder update bot",
      description: "Automate stakeholder communications and reporting with GenAI agents",
      delay: 300,
    },
    {
      title: "Capstone Project: GenAI PM dashboard",
      description: "Build a dashboard that integrates GenAI insights for product management",
      delay: 400,
    },
  ];

  return (
    <section className="relative py-6 my-20  overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center gap-12">
            {/* Left Side - Image */}
            <div className="lg:w-5/12 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl" />
                <img src="/genibg.webp" alt="AI Projects" className="relative rounded-3xl shadow-lg animate-fade-in" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-7/12">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2 animate-fade-in">
                  <Rocket className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-blue-600 text-xs font-medium">Projects & Outcomes</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold  mb-2 animate-fade-in">
                  Build Real GenAI Solutions for Product Managers
                </h2>
                <p className="text-gray-600 text-base max-w-2xl animate-fade-in">
                  Apply your GenAI skills through hands-on projects that solve real product management challenges
                </p>
              </div>

              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group p-3 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 animate-slide-in"
                    style={{ animationDelay: `${project.delay}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <div className="flex-grow">
                        <h3 className="text-sm font-semibold  mb-0.5 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-400">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-in {
          opacity: 0;
          animation: slide-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default GENProjectsAndOutcomes;
