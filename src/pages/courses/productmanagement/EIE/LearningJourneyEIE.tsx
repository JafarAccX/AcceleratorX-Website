 
import WeeklyContent from "./WeeklyContent";

export default function LearningJourneyEIE() {
  return (
    <section id="learning-journey" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Program Structure
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-5xl font-bold">
              Your Learning{" "}
              <span className="text-[#5CB338]">Journey</span>
            </h3>
          </div>
        </div>

        {/* Timeline sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module blocks */}
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0F0F0F] rounded-xl border border-white/10 hover:border-[#5CB338]/50 transition-all"
              
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-[#5CB338]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#5CB338] transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly content */}
          <div className="bg-[#0F0F0F] rounded-xl border border-white/10 p-8">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5CB338]"></span>
              Weekly Breakdown
            </h4>
            <WeeklyContent />
          </div>
        </div>
      </div>
    </section>
  );
}

const modules = [
  {
    title: "Foundation Phase",
    description: "Master the core concepts of product management and understand the product lifecycle.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Skill Development",
    description: "Develop practical skills through hands-on projects and real-world case studies.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Industry Integration",
    description: "Learn from industry experts and apply knowledge to real products.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Career Launch",
    description: "Prepare for your product management career with mentorship and placement support.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  }
];
