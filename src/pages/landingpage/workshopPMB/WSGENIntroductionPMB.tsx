import { Code, TestTube, Rocket } from "lucide-react";

const WSGENIntroductionPMB = () => {
  const stats = [
    {
      value: "Zero",
      label: "unnecessary complexity",
    },
    {
      value: "100%",
      label: "practical learning",
    },
    {
      value: "Free",
      label: "live workshop",
    },
  ];

  const features = [
    {
      icon: <Code className="w-5 h-5 text-blue-500" />,
      title: "Complete App Workflow",
      description:
        "From code to deployment — done in one tool.",
    },
    {
      icon: <TestTube className="w-5 h-5 text-blue-500" />,
      title: "Automated Testing",
      description:
        "Catch issues before launch.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-blue-500" />,
      title: "Deployment Blueprint",
      description:
        "Publish stable builds with confidence.",
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
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Build, Test & Deploy — <span className="text-blue-500">All in One Place</span>
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
              Learn complete development — the simple way.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#0A1020] p-4 rounded-lg border border-blue-900/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
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
                <div className="rounded-md bg-blue-500/10 p-2">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WSGENIntroductionPMB;