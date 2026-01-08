import { useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

const WSAboutGENE = () => {
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
  const toolsRef = useRef(null);

  const allTools = [
    { name: "Chat-GPT", img: "/assets/genAITools/gpt4.webp" },
    { name: "DeepSeek", img: "/assets/genAITools/deepseek.webp" },
    { name: "LLaMA", img: "/assets/genAITools/ollama.webp" },
    { name: "Falcon", img: "/assets/genAITools/falcon.webp" },
    { name: "LangChain", img: "/assets/genAITools/langchain.webp" },
    { name: "CrewAI", img: "/assets/genAITools/crewai.webp" },
    { name: "AutoGen", img: "/assets/genAITools/autogen.webp" },
    { name: "RAG", img: "/assets/genAITools/rag.webp" },
    { name: "Hugging Face", img: "/assets/genAITools/huggingface.webp" },
    { name: "Zapier", img: "/assets/genAITools/zapier.webp" },
  ];

  return (
    <div className="bg-[#050A14] py-12 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 space-y-6">
            {/* About Card */}
            <div className="bg-[#0A1020] rounded-lg shadow-md border border-green-900/20 overflow-hidden">
              <div className="p-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-md px-3 py-1 mb-4">
                  <span className="text-green-400 text-sm font-medium">Live Webinar – Highlights</span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Webinar Highlights */}
                  <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-blue-500/10 rounded-md">
                        <Brain className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">Webinar Highlights</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "How AI is transforming jobs across every industry and role.",
                        "AI use cases in tech, marketing, product, data, operations, and more.",
                        "How top professionals are already using AI at work.",
                        "AI‑powered interview preparation strategies.",
                        "Resume optimization, mock interviews, and skill gap analysis using AI.",
                        "Practical frameworks to stay relevant in an AI‑first job market.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-xs bg-blue-500/20 p-1 rounded-sm">{index + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You'll Learn */}
                  <div className="bg-[#111827] p-4 rounded-md border border-green-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-green-500/10 rounded-md">
                        <Target className="w-4 h-4 text-green-400" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">What You'll Learn</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "How AI is reshaping hiring, roles, and career paths.",
                        "Role‑specific AI use cases you can apply immediately.",
                        "How to use AI for resume building and LinkedIn optimization.",
                        "Interview prep using AI: mock interviews, Q&A, and feedback.",
                        "How to position yourself as an AI‑ready professional.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-xs bg-green-500/20 p-1 rounded-sm">{index + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional Benefits Section */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">AI = Career Accelerator</h3>
                  <p className="text-gray-300">
                    Fully practical — learn how to use AI as a personal career assistant by the end of the session.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10">
                      <p className="text-green-400 font-semibold">88% of previous learners</p>
                      <p className="text-gray-300 text-sm">felt more confident about their career direction after the session.</p>
                    </div>
                    <div className="bg-[#111827] p-4 rounded-md border border-green-500/10">
                      <p className="text-green-400 font-semibold">91% reported improved interview readiness</p>
                      <p className="text-gray-300 text-sm">using AI‑based preparation techniques.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#111827] p-4 rounded-md border border-purple-500/10">
                      <h4 className="text-purple-400 font-semibold mb-2">Zero Tech Barrier</h4>
                      <p className="text-gray-300 text-sm">No technical background required.</p>
                    </div>
                    <div className="bg-[#111827] p-4 rounded-md border border-purple-500/10">
                      <h4 className="text-purple-400 font-semibold mb-2">Career Growth Made Simple</h4>
                      <p className="text-gray-300 text-sm">Clear concepts, real examples, actionable steps.</p>
                    </div>
                    <div className="bg-[#111827] p-4 rounded-md border border-purple-500/10">
                      <h4 className="text-purple-400 font-semibold mb-2">Live & Interactive</h4>
                      <p className="text-gray-300 text-sm">Ask questions, see demos, and get clarity in real time.</p>
                    </div>
                    <div className="bg-[#111827] p-4 rounded-md border border-purple-500/10">
                      <h4 className="text-purple-400 font-semibold mb-2">Practical Career Frameworks</h4>
                      <p className="text-gray-300 text-sm">Apply what you learn immediately to your job search.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full mt-5 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Tools Section - Simplified */}
            <div ref={toolsRef} className="bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20">
              <p className="text-xl font-bold text-white mb-4">AI Tools You'll Explore</p>
              <div className="relative overflow-hidden">
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-3 px-2"
                    animate={{
                      x: [0, -80 * allTools.length],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: allTools.length * 2,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...allTools, ...allTools].map((tool, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-16 h-16 bg-[#111827] rounded-md p-2 flex flex-col items-center justify-center gap-1 border border-gray-800/30"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-md">
                          <img src={tool.img} alt={tool.name} className="w-6 h-6 object-contain" />
                        </div>
                        <p className="text-[9px] font-medium text-gray-300 text-center line-clamp-1">{tool.name}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certificate Only */}
          <div className="w-full lg:w-2/5 space-y-6">
            {/* Certification Card */}
            <div className="bg-gradient-to-r from-blue-900/60 to-green-900/60 rounded-lg overflow-hidden shadow-md">
              <div className="p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <FaCertificate className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Certification Included</h3>
                </div>
                <p className="text-gray-200 mb-3 text-sm">
                  Upon completion of the webinar, you'll receive a professional certificate confirming your understanding of how to use Generative AI for career growth and interview preparation.
                </p>
                <p className="text-gray-200 mb-3 text-sm">
                  Earn an industry‑recognized certificate showcasing your AI‑powered career readiness!
                </p>
                <div className="bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10">
                  ⚠️ Only attendees of the complete live webinar will receive the official certification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSAboutGENE;
