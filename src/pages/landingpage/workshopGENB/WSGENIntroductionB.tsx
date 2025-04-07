import { TrendingUp, Target, Brain } from "lucide-react";

const WSGENIntroductionB = () => {
  const stats = [
    {
      value: "Zero",
      label: "Coding Knowledge Required",
    },
    {
      value: "100%",
      label: "Hands-on Learning Experience",
    },
    {
      value: "Free",
      label: "Creative Workshop",
    },
  ];

  const features = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "Creative Prompt Engineering",
      description:
        "Master the art of crafting prompts that turn your ideas into functional code without programming knowledge",
    },
    {
      icon: <Brain className="w-5 h-5 text-blue-500" />,
      title: "App Building Without Code",
      description:
        "Learn techniques to create interactive web applications and sites entirely through GenAI tools",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      title: "Idea-to-Prototype Pipeline",
      description:
        "Develop a systematic approach to transform creative concepts into working prototypes in hours, not weeks",
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
      console.error(
        'Form element not found with ID "workshop-registration-form"'
      );
    }
  };

  return (
    <section className="bg-[#050A14] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">
                Build Apps & Websites Without Writing Code
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Vibe <span className="text-blue-500">Coding</span> With Generative AI
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
              Discover how to bring your wildest app ideas to life without writing a single line of code. This hands-on creative workshop teaches you how to use GenAI tools to build functional applications, websites, and interactive experiences from scratch.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0A1020] p-4 rounded-lg border border-blue-900/20 text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0A1020] rounded-lg p-4 flex flex-col items-start gap-3 border border-blue-900/20"
              >
                <div className="rounded-md bg-blue-500/10 p-2">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENIntroductionB;
