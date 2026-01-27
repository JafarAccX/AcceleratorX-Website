
import React from "react";

interface AICrashCourseHeroProps {
    onEnroll: () => void;
}

const AICrashCourseHero: React.FC<AICrashCourseHeroProps> = ({ onEnroll }) => {
    return (
        <section className="relative min-h-screen pt-20 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden">

            {/* Top Center Glow (Purple Gradient) */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[400px] bg-purple-600/20 md:bg-purple-600/30 blur-[100px] rounded-full pointer-events-none z-0"></div>

            {/* Side Images (The dashed lines and icons) */}
            {/* Left Image */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block z-0 w-[300px] h-[80%]">
                <img
                    src="/advance-crashcourse/hero-tools/hero-l.png"
                    alt="AI Tools Left"
                    className="w-full h-full object-contain object-left"
                />
            </div>

            {/* Right Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block z-0 w-[300px] h-[80%]">
                <img
                    src="/advance-crashcourse/hero-tools/hero-r-g.png"
                    alt="AI Tools Right"
                    className="w-full h-full object-contain object-right"
                />
            </div>


            <div className="relative z-10 w-full max-w-4xl mx-auto mt-10">

                {/* Logo Area (Optional, based on design it might be expected) */}
                <div className="flex justify-center mb-8">
                    {/* If there's a specific logo needed at top, add here. For now keeping it clean as per screenshot provided which had logos at very top, possibly nav */}
                </div>

                <div className="animate-fade-in-up flex flex-col items-center">
                    <p className="text-gray-300 font-medium tracking-wide mb-4 text-sm md:text-base">
                        Build Real AI Agents. Not Just Prompts.
                    </p>

                    {/* Main Title - Reduced Size */}
                    <div className="mb-6">
                        <span className="block text-3xl md:text-5xl font-bold text-white mb-1">
                            Advanced
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500">
                            AI Crash Course
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 text-amber-500 font-semibold mb-8 text-sm md:text-base">
                        <span>⭐</span> Limited seats
                    </div>

                    {/* Features Pills - Darker Style */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <FeaturePill text="20 Live Sessions" icon="↗" isGreen={true} />
                        <FeaturePill text="100% Practical" icon="💼" isBlue={true} />
                        <FeaturePill text="For Working Professional" icon="⏱️" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        <button
                            onClick={onEnroll}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-base md:text-lg flex items-center transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] ring-1 ring-purple-400/50"
                        >
                            Enroll Now <span className="ml-2">→</span>
                        </button>

                        <a href="#" className="text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors flex items-center text-sm md:text-base">
                            Download Detailed Brochure <span className="ml-1">»</span>
                        </a>
                    </div>

                    {/* Price Box */}
                    <div className="mt-4  bg-black/80 backdrop-blur-md rounded-xl p-4 md:p-6 inline-block shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors"></div>
                        <p className="text-gray-400 text-sm mb-1 relative z-10">in just</p>
                        <p className="text-3xl md:text-4xl font-bold text-white relative z-10">₹4,999 + GST</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

interface FeaturePillProps {
    text: string;
    icon?: string;
    isGreen?: boolean;
    isBlue?: boolean;
}

const FeaturePill = ({ text, icon, isGreen, isBlue }: FeaturePillProps) => {
    let iconColor = "text-gray-400";
    if (isGreen) iconColor = "text-green-500";
    if (isBlue) iconColor = "text-blue-500";

    return (
        <div className="flex items-center justify-center gap-[14px] w-[258px] h-[57px] bg-black border border-[#252525] px-5 py-4 rounded-lg text-gray-200 text-sm font-medium hover:border-gray-700 transition-colors">
            {icon && <span className={iconColor}>{icon}</span>}
            <span>{text}</span>
        </div>
    );
};

export default AICrashCourseHero;
