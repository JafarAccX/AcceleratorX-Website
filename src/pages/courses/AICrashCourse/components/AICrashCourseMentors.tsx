
import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Mentor {
    name: string;
    image: string;
    role?: string;
}

const mentors: Mentor[] = [
    {
        name: "Nitish M L Setty",
        image: "/advance-crashcourse/builders/nitish.png",
        role: "AI Lead"
    },
    {
        name: "Anjali Sharma",
        image: "/advance-crashcourse/builders/anjali.png",
        role: "AI Engineer"
    },
    {
        name: "Ashu",
        image: "/advance-crashcourse/builders/ashu.png",
        role: "Full Stack Engineer"
    },
    {
        name: "Dr. P", // Placeholder based on image if needed, or just reusing existing
        image: "/advance-crashcourse/builders/nitish.png", // Reusing for now as implied by 'crousle'
        role: "AI Researcher"
    },
];

const AICrashCourseMentors = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                {/* Title: Plus Jakarta Sans, 48px, lowercase */}
                <h2 className="lowercase font-['Plus_Jakarta_Sans'] font-bold text-[40px] md:text-[48px] leading-[100%] mb-4 text-white">
                    learn from <span className="text-[#D358FF]">builders</span>, not just trainers
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
                    This crash course is led by AI practitioners who actively build real systems, not just teach theory
                </p>

                <p className="text-white text-center font-medium mb-6">You'll learn from mentors who:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-4xl mx-auto text-left text-gray-300 text-sm md:text-base">
                    <BenefitItem text="Build & deploy AI agents in real-world scenarios" />
                    <BenefitItem text="Understand production challenges (latency, cost, failures)" />
                    <BenefitItem text="Explain why a system works, not just how" />
                    <BenefitItem text="Have mentored working professionals across roles" />
                </div>
            </div>


            <div className="relative max-w-6xl mx-auto">
                {/* Scroll Buttons with gradient border and shadow */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-[56px] h-[56px] rounded-[50px] shadow-[0px_0px_16px_0px_#AC0AE7] flex items-center justify-center bg-black transition-transform hover:scale-105 hidden md:flex"
                    style={{
                        background: 'linear-gradient(#000, #000) padding-box, linear-gradient(86.48deg, #AC0AE7 32.08%, #48A2EB 74.28%) border-box',
                        border: '2px solid transparent',
                    }}
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-[56px] h-[56px] rounded-[50px] shadow-[0px_0px_16px_0px_#AC0AE7] flex items-center justify-center bg-black transition-transform hover:scale-105 hidden md:flex"
                    style={{
                        background: 'linear-gradient(#000, #000) padding-box, linear-gradient(86.48deg, #AC0AE7 32.08%, #48A2EB 74.28%) border-box',
                        border: '2px solid transparent',
                    }}
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </button>


                {/* Mentors Row */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide justify-center md:justify-start lg:justify-center"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mentors.map((mentor, index) => (
                        <div key={index} className="flex-shrink-0 w-[280px] md:w-[300px] bg-white rounded-2xl overflow-hidden snap-center group">
                            <div className="relative h-[340px] bg-gray-200">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-4 bg-white text-center">
                                <h3 className="text-black font-bold text-xl">{mentor.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="text-[#D358FF] hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-widest text-sm font-bold border-b border-purple-500/30 pb-1">
                        <span className="text-2xl">«</span> Builder to builder learning <span className="text-2xl">»</span>
                    </button>
                    <p className="text-gray-400 mt-4 text-sm">
                        You're not learning about AI, you're learning from people who build it.
                    </p>
                    <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium">
                        <span className="text-gray-300">to Know More About Mentors</span>
                        <a href="#" className="text-white border-b border-white pb-0.5 hover:opacity-80 flex items-center gap-1">
                            Download Brochure <span className="text-lg">»</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

const BenefitItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
        <span className="w-3 h-3 rounded-full bg-[#D358FF] mt-1.5 flex-shrink-0"></span>
        <span>{text}</span>
    </div>
);

export default AICrashCourseMentors;
