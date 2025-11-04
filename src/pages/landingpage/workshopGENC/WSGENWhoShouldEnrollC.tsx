 
import { Users, Briefcase, Brain, Code, Laptop } from "lucide-react";

const WSGENWhoShouldEnrollC = () => {
  const targetAudience = [
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Automate routine work and save hours every week.",
    },
    {
      icon: Laptop,
      title: "Students",
      description: "Learn the tools shaping the future of AI-driven productivity.",
    },
    {
      icon: Code,
      title: "Entrepreneurs",
      description: "Automate leads, marketing, and customer engagement.",
    },
    {
      icon: Brain,
      title: "Creatives",
      description: "Build custom assistants and tools that simplify your workflow.",
    },
  ];

  return (
    <section className="relative py-12 bg-black px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className=" items-center">
          {/* Content Section */}
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Who Should Attend</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-white">This workshop is for you if you've ever thought:<br/>"Automation sounds great, but I don't know where to start."</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Target Audience Grid */}
          <div className=" col-span-2 grid sm:grid-cols-2 gap-4">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl   backdrop-blur-sm border border-white/20  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="flex-shrink-0 p-2.5 rounded-lg   transform group-hover:rotate-6 transition-all duration-300">
                    <audience.icon className="w-5 h-5 text-blue-700 " />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold  transition-colors">{audience.title}</h3>
                    <p className="  mb-2 text-gray-400">{audience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/genai.webp"
                alt="Students learning together"
                className="object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENWhoShouldEnrollC;
