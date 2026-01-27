
const AICrashCourseTools = () => {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Tools & technologies <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">you’ll use</span>
                </h2>
                <p className="text-gray-400 mb-2">Real Stack. Real Skills.</p>
                <p className="text-gray-300">You won't just "hear about" tools. You'll build with them live</p>
                <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">Hands-on experience with:</p>
            </div>

            <div className="relative max-w-4xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
                {/* Center Core */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-black border border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col items-center justify-center text-center z-10 p-4">
                    <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-ping-slow"></div>
                    <span className="text-purple-500 text-xs font-bold tracking-widest uppercase mb-1">Central</span>
                    <span className="text-white font-bold text-lg md:text-xl leading-tight">AI SYSTEM<br />CORE</span>
                </div>

                {/* Orbital Icons */}
                {/* Top */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/chatgpt.png"
                    label="OpenAI"
                    className="absolute top-[10%] left-1/2 -translate-x-1/2"
                />

                {/* Top Right */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/langchain.png"
                    label="LangChain"
                    className="absolute top-[25%] right-[15%]"
                />

                {/* Right */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/github.png"
                    label="GitHub"
                    className="absolute top-[50%] right-[5%] -translate-y-1/2"
                />

                {/* Bottom Right */}
                <ToolIcon
                    // Placeholder for "Ollama" (using one of the p-images or just a generic one if not found precisely)
                    // Based on request, user provided specific paths. I will use 'lama-p.png' for Ollama likely.
                    img="/advance-crashcourse/tools and tech/lama-p.png"
                    label="Ollama"
                    className="absolute bottom-[25%] right-[15%]"
                />

                {/* Bottom */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/gmaini-p.png"
                    label="Gemini AI"
                    className="absolute bottom-[10%] left-1/2 -translate-x-1/2"
                />

                {/* Bottom Left */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/automation.png"
                    label="Automation"
                    className="absolute bottom-[25%] left-[15%]"
                />

                {/* Left */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/claude.png"
                    label="Claude"
                    className="absolute top-[50%] left-[5%] -translate-y-1/2"
                />

                {/* Top Left */}
                <ToolIcon
                    img="/advance-crashcourse/tools and tech/deepdeek.png"
                    label="Deepseek"
                    className="absolute top-[25%] left-[15%]"
                />

            </div>

            <div className="text-center mt-12">
                <p className="text-purple-400 text-sm md:text-base flex items-center justify-center gap-2">
                    <span className="text-xl">«</span> These are tools used by modern AI teams, startups, and builders. <span className="text-xl">»</span>
                </p>
            </div>
        </section>
    );
};

const ToolIcon = ({ img, label, className }: { img: string, label: string, className?: string }) => (
    <div className={`flex flex-col items-center  w-20 md:w-24 ${className}`}>
        <div className="w-18 h-18 md:w-28 md:h-28  flex items-center justify-center hover:border-purple-500 transition-colors shadow-lg backdrop-blur-sm group">
            <img src={img} alt={label} className="w-full h-full object-contain filter group-hover:brightness-125 transition-all" />
        </div>
        <span className="text-gray-300 text-xs md:text-sm font-medium">{label}</span>
    </div>
);


export default AICrashCourseTools;
