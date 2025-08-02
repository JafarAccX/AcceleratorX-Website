const KuppamTopics = () => {
  return (
    <div className="py-16 bg-[#0A0F1D] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section with Glass Effect */}
          <div className="relative group bg-gradient-to-r rounded-2xl border border-indigo-500/20 from-indigo-500/10 to-violet-500/10 backdrop-blur-sm">
            <div className=" p-6 ">
              <h3 className="text-2xl font-bold text-white mb-4">Learn to Build Agents</h3>
            </div>
            <div className="absolute -inset-1  opacity-30 group-hover:opacity-50 transition duration-300 blur"></div>
            <div className="relative   backdrop-blur-lg rounded-2xl p-1 h-full">
              <div className="bg-[#0A0F1D]/80 rounded-xl overflow-hidden h-full">
                <img 
                  src="/workflownew.png" 
                  alt="Program Workflow" 
                  className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-4">
                {[
                  'Hands-on practical sessions',
                  'Industry-relevant curriculum',
                  'Expert-led training',
                  'Real-world projects',
                  'Personalized mentorship',
                  'Career guidance'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">What You'll Learn</h3>
              <p className="text-gray-300">
                Our comprehensive program covers everything from the fundamentals to advanced concepts, ensuring you gain practical, job-ready skills in your chosen field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KuppamTopics