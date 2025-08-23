import { Lightbulb, Calculator, ClipboardCheck, BarChart } from "lucide-react";

const capeSteps = [
  {
    icon: <Lightbulb className="h-6 w-6 text-blue-400" />,
    title: "Data Fundamentals",
    description: "Organize raw data into actionable insights.",
    duration: "Weeks 1–3",
  },
  {
    icon: <BarChart className="h-6 w-6 text-blue-400" />,
    title: "Visual Storytelling",
    description: "Make data speak through compelling visuals.",
    duration: "Weeks 4–6",
  },
  {
    icon: <Calculator className="h-6 w-6 text-blue-400" />,
    title: "Analytical Skills",
    description: "Apply statistics to uncover hidden insights.",
    duration: "Weeks 7–9",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-blue-400" />,
    title: "CAP Project",
    description: "Complete a custom project to showcase your data skills.",
    duration: "Weeks 10–13",
  },
];

export default function CAPE() {
  return (
    <div className="relative py-20 overflow-hidden bg-[#0B1120]" id="bydp">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <span className="text-blue-400 text-lg font-semibold mb-4 block">
            Your Learning Journey
          </span>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text mb-6">
            Build Your CAP Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A Portfolio That Speaks for You – Build Skills That Stand Out
          </p>
  </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capeSteps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-[#0F172A] border border-blue-500/10 hover:border-blue-400/50 transition-all duration-500 group backdrop-blur-sm hover:transform hover:-translate-y-2"
            >
              <div className="inline-block p-4 bg-blue-500/10 rounded-2xl mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-xl filter blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative z-10">{step.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
                {step.title}
              </h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <p className="text-sm text-blue-400 font-medium">
                {step.duration}
              </p>
            </div>
          ))}
        </div>

  <div className="mt-20 p-10 rounded-3xl bg-[#0F172A] border border-blue-500/10">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">
            What You'll Achieve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">
                Portfolio
              </div>
              <p className="text-gray-400">A real product in your portfolio</p>
      </div>
      <div className="text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">
                Experience
              </div>
              <p className="text-gray-400">
                Hands-on product development experience
              </p>
      </div>
      <div className="text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">
                Network
              </div>
              <p className="text-gray-400">Connect with industry experts</p>
      </div>
          </div>
    </div>
      </div>
    </div>
  );
}
