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
             
              <span className="text-blue-500">Build & Deploy Your First Hybrid RAG Agent</span> – Live Workshop
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
              Hands-on and beginner-friendly. Learn hybrid retrieval, vector databases, and how to evaluate answers — then deploy a working agent.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                value: "Hybrid RAG",
                label: "Hands-on workshop",
              },
              {
                value: "Beginner-Friendly",
                label: "No advanced coding needed",
              },
              {
                value: "Real Projects",
                label: "Build actual RAG agents",
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
                title: "Index & Retrieve",
                description: "Hybrid search: BM25 + semantic",
              },
              {
                icon: <Brain className="w-5 h-5 text-blue-500" />,
                title: "RAG Architecture",
                description: "Vectors, embeddings, generation",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
                title: "Agent Evaluation",
                description: "Measure retrieval + answer quality",
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
