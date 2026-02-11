
import { TrendingUp } from "lucide-react";

const AICrashCourseCurriculum = () => {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">

            {/* Header Section */}
            <div className="text-center mb-12 relative z-10">
                <p className="font-sans text-gray-400 text-sm md:text-base font-medium mb-2 tracking-wide">
                    AI is no longer optional.
                </p>
                <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                    what you’ll actually <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500">learn</span>
                </h2>

                <div className="flex flex-col items-center gap-2">
                    <p className="font-sans text-gray-400 text-sm md:text-lg">
                        This is not about: Just prompts, Just APIs, Just theory
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="font-heading text-white font-semibold text-lg">
                            This is about:
                        </p>
                        {/* Vertical line start */}
                        <div className="h-8 w-px border-l border-dashed border-gray-600 mt-2"></div>
                    </div>
                </div>
            </div>

            {/* Grid Section with Connecting Lines */}
            <div className="relative w-full max-w-5xl">

                {/* Central Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l border-dashed border-gray-700 hidden md:block"></div>

                {/* Horizontal connection line - Top Row */}
                <div className="absolute top-[25%] left-[25%] right-[25%] h-px border-t border-dashed border-gray-700 hidden md:block"></div>
                {/* Horizontal connection line - Bottom Row */}
                <div className="absolute top-[75%] left-[25%] right-[25%] h-px border-t border-dashed border-gray-700 hidden md:block"></div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 relative z-10">

                    {/* Card 1 - Top Left */}
                    <div className="flex justify-center md:justify-end">
                        <CurriculumCard title="Building AI agents" widthClass="md:w-[460px]" />
                    </div>

                    {/* Card 2 - Top Right */}
                    <div className="flex justify-center md:justify-start">
                        <CurriculumCard title="Modern AI frameworks" widthClass="md:w-[460px]" />
                    </div>

                    {/* Card 3 - Bottom Left */}
                    <div className="flex justify-center md:justify-end">
                        <CurriculumCard title="Real-world AI workflows" widthClass="md:w-[350px]" />
                    </div>

                    {/* Card 4 - Bottom Right */}
                    <div className="flex justify-center md:justify-start">
                        <CurriculumCard title="Multi-agent systems" widthClass="md:w-[350px]" />
                    </div>

                </div>
            </div>

            <div className="text-center mt-16">
                <p className="font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 text-lg md:text-xl font-medium flex items-center justify-center gap-3">
                    <span className="text-2xl opacity-80">«</span> You will build, not just watch <span className="text-2xl opacity-80">»</span>
                </p>
            </div>
        </section>
    );
};

const CurriculumCard = ({ title, widthClass = "max-w-sm" }: { title: string, widthClass?: string }) => (
    <div className={`bg-black border border-[#252525] rounded-xl p-5 flex items-center gap-4 hover:border-purple-500/50 transition-all w-full ${widthClass} h-20 shadow-lg relative group`}>
        {/* Green Icon Box */}
        <div className="w-10 h-10 rounded-lg bg-[#0F1C15] border border-green-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="text-[#22C55E] w-5 h-5" />
        </div>
        <span className="font-sans text-lg font-medium text-gray-200">{title}</span>
    </div>
);

export default AICrashCourseCurriculum;
