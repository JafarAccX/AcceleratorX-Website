const KuppamTopics = () => {
  return (
    <div className="py-16 bg-[#0A0F1D]/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center">
          {/* Image Section with Glass Effect */}
          <div className="relative group   rounded-2xl   backdrop-blur-sm">
            <div className=" p-6 ">
              <h3 className="text-2xl font-bold text-white mb-4">Learn to Build Agents</h3>
            </div>
            <div className="absolute -inset-1  opacity-30 group-hover:opacity-50 transition duration-300 blur"></div>
            <div className="relative   backdrop-blur-lg rounded-2xl p-1 h-full">
              <div className="bg-[#0A0F1D]/80 rounded-xl overflow-hidden h-full">
                <img
                  src="/workflownew.webp"
                  alt="Program Workflow"
                  className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="relative group  rounded-2xl   backdrop-blur-sm">
              <div className=" p-6 ">
                <h3 className="text-2xl font-bold text-white mb-4">Vibe Coding</h3>
              </div>
              <div className="absolute -inset-1  opacity-30 group-hover:opacity-50 transition duration-300 blur"></div>
              <div className="relative   backdrop-blur-lg rounded-2xl p-1 h-full">
                <div className="bg-[#0A0F1D]/90 rounded-xl overflow-hidden h-full relative">
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-xl"></div>
                  <img
                    src="/vibe_code.webp"
                    alt="Program Workflow"
                    className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center   text-center">
                    <div className="bg-gradient-to-br  h-full w-full from-black/60 to-indigo-900/30 p-8 rounded-2xl flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Build Full Stack Applications without even coding a single line of code
                      </h3>
                      {/* <p className="text-xl text-indigo-200 drop-shadow-lg">Agent Development Environment</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuppamTopics;
