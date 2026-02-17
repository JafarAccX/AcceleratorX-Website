
import { Check, Download, Hourglass, Calendar } from "lucide-react";

interface AICrashCoursePricingProps {
    onEnroll: () => void;
}

const AICrashCoursePricing: React.FC<AICrashCoursePricingProps> = ({ onEnroll }) => {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">

            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-white font-['Plus_Jakarta_Sans'] font-bold text-3xl md:text-5xl mb-4">
                    Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AC0AE7] to-[#48A2EB]">Pricing</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    No tiers. No confusion. One complete program.
                </p>
            </div>

            {/* Main Card */}
            <div className="w-full max-w-[500px] border border-red-500/50 rounded-3xl bg-[#0a0a0a] p-8 md:p-10 flex flex-col relative shadow-[0_0_60px_rgba(172,10,231,0.15)] overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600/90 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-20 shadow-[0_0_10px_rgba(220,38,38,0.5)] uppercase tracking-wider">
                    Price Hike
                </div>

                {/* Top purple glow inside card */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#AC0AE7] to-[#48A2EB]"></div>
                <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-[#AC0AE7]/20 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Price Section */}
                <div className="text-center mb-10">
                    <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">Total Investment</p>
                    <div className="flex flex-col items-center justify-center gap-0 mb-6">
                        <span className="text-gray-500 text-2xl line-through decoration-red-500/70 decoration-2 font-bold font-['Plus_Jakarta_Sans']">₹4,999 + GST</span>
                        <div className="flex items-end gap-2">
                            <span className="text-white text-5xl md:text-6xl font-bold font-['Plus_Jakarta_Sans']">₹14,999</span>
                            <span className="text-gray-400 text-xl font-medium mb-1.5">+ GST</span>
                        </div>
                    </div>
                    <div className="inline-block bg-[#1A1A1A] border border-[#333] rounded-full px-4 py-1.5">
                        <span className="text-gray-300 text-sm font-medium">Full Program Access</span>
                    </div>
                </div>

                {/* Features List */}
                <div className="space-y-5 mb-10 pl-2">
                    <PricingFeature text="20 Live Sessions" />
                    <PricingFeature text="100% Practical Learning" />
                    <PricingFeature text="Session Recordings Included" />
                    <PricingFeature text="Real AI Systems & Agents" />
                    <PricingFeature text="Mentor Guidance" />
                </div>

                {/* Actions */}
                <div className="space-y-6">
                    <button
                        onClick={onEnroll}
                        className="w-full h-[56px] rounded-xl flex items-center justify-center group relative overflow-hidden transition-transform hover:scale-[1.02]"
                        style={{
                            background: 'linear-gradient(90deg, #8B5CF6 0%, #AC0AE7 100%)',
                        }}
                    >
                        <span className="text-white font-bold text-lg relative z-10">Enroll Now</span>
                        {/* Button Glow on Hover */}
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    <button
                        onClick={onEnroll}
                        className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium border border-[#333] hover:border-[#555] rounded-xl h-[48px]"
                    >
                        <Download className="w-4 h-4" />
                        Download Detailed Brochure
                    </button>
                </div>

                {/* Footer Icons */}
                <div className="mt-10 pt-8 border-t border-[#222] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-[#AC0AE7]">
                    <div className="flex items-center gap-2">
                        <Hourglass className="w-3.5 h-3.5" />
                        <span>Limited Seats Available</span>
                    </div>
                    <div className="hidden sm:block text-[#333]">|</div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Next Batch Starting Soon</span>
                    </div>
                </div>

            </div>

            <p className="text-gray-500 text-sm mt-8">
                One-time payment. No hidden costs.
            </p>

        </section>
    );
};

const PricingFeature = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
        <Check className="w-5 h-5 text-[#AC0AE7] shrink-0" />
        <span className="text-gray-300 font-medium">{text}</span>
    </div>
);

export default AICrashCoursePricing;
