
import React from "react";

interface AICrashCoursePricingProps {
    onEnroll: () => void;
}

const AICrashCoursePricing: React.FC<AICrashCoursePricingProps> = ({ onEnroll }) => {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">

            {/* Title */}
            <h2 className="text-white font-['Plus_Jakarta_Sans'] font-bold text-[36px] leading-[100%] text-center mb-12">
                The <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CC3FFF] to-[#48A2EB]">pricing</span> solution
            </h2>

            {/* Main Card */}
            <div className="w-full max-w-4xl border border-[#252525] rounded-xl bg-black p-8 md:p-16 flex flex-col items-center relative">

                {/* Price Box */}
                <div className="  rounded-xl p-8 mb-8 text-center w-full max-w-sm">
                    <p className="text-gray-400 text-lg mb-2">in just</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-[#48A2EB] text-4xl md:text-5xl font-bold">₹4,999</span>
                        <span className="text-white text-4xl md:text-5xl font-bold">+ GST</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        That's <span className="text-[#D358FF]">₹250</span> per session
                    </p>
                </div>

                {/* NO Section */}
                <div className="text-center mb-8">
                    <p className="text-white uppercase tracking-widest font-bold mb-6">NO</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <NoItem text="Fake discounts" />
                        <NoItem text="Upsells" />
                        <NoItem text="Hidden costs" />
                    </div>
                </div>

                {/* Limited Seats */}
                <div className="flex items-center gap-2 mb-10">
                    <span className="text-amber-500 text-xl">★</span>
                    <span className="text-white font-medium italic">Limited seats</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Enroll Button */}
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

                    <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors border-b border-gray-600 pb-0.5 text-sm md:text-base flex items-center gap-1">
                        Download Detailed Brochure <span className="text-lg">»</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

const NoItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D358FF] to-[#48A2EB]"></div>
        <span className="text-gray-300">{text}</span>
    </div>
);

export default AICrashCoursePricing;
