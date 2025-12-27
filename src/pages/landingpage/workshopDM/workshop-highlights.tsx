import { Check, Zap, Users } from "lucide-react"

export default function WorkshopHighlights() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/5 to-slate-900 py-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{
          backgroundImage: `url('/backgrounds/1_s.webp')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm rounded-full mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Workshop
          </div>
          <h2 className="text-4xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Workshop Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our automation workshop
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First Section - What You'll Do */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">What You'll Do</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Learn how modern growth teams automate lead workflows</p>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Build your first working automation using n8n, live</p>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Connect data sources, enrich lead info, and push it into your CRM</p>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Walk away with a ready-to-use automation template</p>
              </div>
            </div>
          </div>

          {/* Second Section - What You'll Learn */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">What You'll Learn</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-0.5 flex-shrink-0">🔹</span>
                <p className="text-gray-300">What is n8n and why it's loved by growth teams</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-0.5 flex-shrink-0">🔹</span>
                <p className="text-gray-300">How to connect Google Sheets, LinkedIn, Typeform, etc.</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-0.5 flex-shrink-0">🔹</span>
                <p className="text-gray-300">How to enrich lead data using public APIs or enrichment tools</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-0.5 flex-shrink-0">🔹</span>
                <p className="text-gray-300">How to trigger emails, CRM actions, or Slack alerts</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-0.5 flex-shrink-0">🔹</span>
                <p className="text-gray-300">Free templates, tools, and workflows to scale your outreach</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button onClick={scrollToForm}  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
            Join Workshop
            <Zap className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  )
}
