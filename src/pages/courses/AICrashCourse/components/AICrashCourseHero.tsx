
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

                    {/* Main Title */}
                    <h1 className="text-center font-['Plus_Jakarta_Sans'] font-bold text-[36px] md:text-[54px] leading-[1.2] md:leading-[76px] tracking-normal mb-6">
                        <span className="text-white">Advanced </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500">
                            AI Crash Course
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 text-amber-500 font-semibold mb-8 text-sm md:text-base">
                        <span>⭐</span> Master  Sessions <span>⭐</span>
                    </div>



                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        <button
                            onClick={onEnroll}
                            className="relative w-[166px] h-[48px] rounded-[50px] shadow-[0px_0px_16px_0px_#AC0AE7] flex items-center justify-center group"
                            style={{
                                background: 'linear-gradient(#000, #000) padding-box, linear-gradient(86.48deg, #AC0AE7 32.08%, #48A2EB 74.28%) border-box',
                                border: '2px solid transparent',
                            }}
                        >
                            <span className="text-white font-bold text-base flex items-center">
                                Enroll Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>

                        <button
                            onClick={onEnroll}
                            className="relative w-[240px] h-[48px] rounded-[50px] shadow-[0px_0px_16px_0px_#AC0AE7] flex items-center justify-center group"
                            style={{
                                border: '2px solid transparent',
                            }}
                        >
                            <span className="text-white font-bold text-base flex items-center">
                                Download Brochure <span className="ml-2 group-hover:translate-x-1 transition-transform">»</span>
                            </span>
                        </button>
                    </div>

                    {/* Price Box */}
                    {/* Price Box */}
                    <div className="mt-4  bg-black/80 backdrop-blur-md rounded-xl p-4 md:p-6 inline-block shadow-2xl relative overflow-hidden group border border-red-500/50">
                        <div className="absolute top-0 right-0 bg-red-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-20 shadow-[0_0_10px_rgba(220,38,38,0.5)] uppercase tracking-wider">
                            Price Hike
                        </div>
                        <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <p className="text-gray-500 text-lg line-through decoration-red-500/70 decoration-2 mb-1">₹4,999 + GST</p>
                            <p className="text-3xl md:text-4xl font-bold text-white">₹14,999 + GST</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// interface FeaturePillProps {
//     text: string;
//     icon?: string;
//     isGreen?: boolean;
//     isBlue?: boolean;
// }

// const FeaturePill = ({ text, icon, isGreen, isBlue }: FeaturePillProps) => {
//     let iconColor = "text-gray-400";
//     if (isGreen) iconColor = "text-green-500";
//     if (isBlue) iconColor = "text-blue-500";

//     return (
//         <div className="flex items-center justify-center gap-[14px] w-[258px] h-[57px] bg-black border border-[#252525] px-5 py-4 rounded-lg text-gray-200 text-sm font-medium hover:border-gray-700 transition-colors">
//             {icon && <span className={iconColor}>{icon}</span>}
//             <span>{text}</span>
//         </div>
//     );
// };

export default AICrashCourseHero;
