import { TrendingUp, Target, Brain } from "lucide-react";

const WSGENIntroductionE = () => {

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
            {/* <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Automate & Create Smarter with Generative AI</span>
            </div> */}

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
             
              <span className="text-blue-500">Master Hybrid RAG Agents</span> & Build Intelligent AI Apps
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
              Learn to build Hybrid Retrieval-Augmented Generation (RAG) agents that combine sparse and dense retrieval strategies for enhanced accuracy. Create AI applications that can understand and respond based on your custom data sources with superior performance.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                value: "Hybrid RAG",
                label: "Sparse + Dense Retrieval",
              },
              {
                value: "100%",
                label: "hands-on learning",
              },
              {
                value: "Free",
                label: "live Hybrid RAG workshop",
              },
            ].map((stat, index) => (
              <div key={index} className="bg-[#0A1020] p-4 rounded-lg border border-blue-900/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <Target className="w-5 h-5 text-blue-500" />,
                title: "Hybrid Retrieval",
                description:
                  "Combine BM25 sparse search with dense vector embeddings for optimal retrieval performance.",
              },
              {
                icon: <Brain className="w-5 h-5 text-blue-500" />,
                title: "Multi-Source Integration",
                description:
                  "Connect multiple data sources and retrieval methods for comprehensive knowledge bases.",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
                title: "Advanced LLM Integration",
                description:
                  "Build hybrid RAG systems with GPT, Claude, and open-source models for production use.",
              },
            ].map((feature, index) => (
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

export default WSGENIntroductionE;
