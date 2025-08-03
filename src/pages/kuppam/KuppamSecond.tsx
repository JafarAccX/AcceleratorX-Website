import { Globe } from "lucide-react";

const KuppamSecond = () => {
  return (
    <div className="relative bg-[#0A0F1D] min-h-screen overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img src="/kuppam-tools.png" alt="Background" className="w-full h-full object-cover" />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/80" />
          {/* Blur effect */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8">
            <Globe className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Exclusive AI Tools Workshop</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Learn the skill that get you hired
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Gen AI and AI Agent Building program
          </h1>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm" />
      </section>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>
    </div>
  );
};

export default KuppamSecond;
