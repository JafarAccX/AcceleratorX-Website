
import { useRef, useState } from "react";
import { ChevronRight, ChevronLeft, Linkedin } from "lucide-react";
import { cn } from "../../../../lib/utils";

interface Mentor {
    name: string;
    image: string;
    role: string;
    company: string;
    linkedin?: string;
}

const mentors: Mentor[] = [
    // {
    //     name: "Himangi Sharma",
    //     image: "/advance-crashcourse/builders/nitya.png", // Placeholder
    //     role: "Data Scientist 2",
    //     company: "",
    //     linkedin: "https://www.linkedin.com/in/himangi-sharma/"
    // },
    {
        name: "Ashu Mishra",
        image: "/advance-crashcourse/builders/ashu.png",
        role: "Technical Product Manager - Zigram",
        company: "Zigram"
    },
    {
        name: "Nitya Sagar",
        image: "/advance-crashcourse/builders/nitya.png", // Placeholder
        role: "Cofounder - Stealth Startup",
        company: "Stealth Startup",
        linkedin: "https://in.linkedin.com/in/nitya-sagar"
    },
    {
        name: "Anjali Sharma",
        image: "/advance-crashcourse/builders/anjali.png",
        role: "AI Product Manager - FPL Technologies",
        company: "FPL Technologies",
        linkedin: "https://www.linkedin.com/in/anjalisharmaaa/"
    },
    {
        name: "Prashant Vijaybhai Sahatiya",
        image: "/advance-crashcourse/builders/dr-prashant.png",
        role: "Program Coordinator & Assistant Professor - Parul University",
        company: "Parul University"
    },
];

import { PremiumButton } from "../../../../components/common/PremiumButton";

const AICrashCourseMentors = ({ onEnroll }: { onEnroll?: () => void }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 320; // Card width + gap
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
                <h2 className="lowercase font-heading font-bold text-[40px] md:text-[48px] leading-[100%] mb-4 text-white">
                    learn from <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#CC3FFF_27.88%,#48A2EB_59.13%)]">builders</span>, not just trainers
                </h2>
                <p className="font-sans text-gray-400 text-lg max-w-3xl mx-auto mb-8">
                    Built & deployed AI agents, Resolved production issues, Explained system functionality, Guided professionals in various fields
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Scroll Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-[56px] h-[56px] rounded-[50px] shadow-[0px_0px_16px_0px_#AC0AE7] flex items-center justify-center bg-black transition-transform hover:scale-105 md:flex"
                    style={{
                        background: 'linear-gradient(#000, #000) padding-box, linear-gradient(86.48deg, #AC0AE7 32.08%, #48A2EB 74.28%) border-box',
                        border: '2px solid transparent',
                    }}
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-[56px] h-[56px] rounded-[50px] shadow-[0px_0px_16px_0px_#AC0AE7] flex items-center justify-center bg-black transition-transform hover:scale-105 md:flex"
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
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mentors.map((mentor, index) => (
                        <MentorCard key={index} mentor={mentor} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-widest text-sm font-bold border-b border-purple-500/30 pb-1">
                        <span className="text-2xl">«</span> Builder to builder learning <span className="text-2xl">»</span>
                    </button>
                    <p className="font-sans text-gray-400 mt-4 text-sm">
                        You're not learning about AI, you're learning from people who build it.
                    </p>
                    <div className="font-sans mt-8 flex flex-col items-center justify-center gap-4">
                        <span className="text-gray-300">to Know More About Mentors</span>
                        <PremiumButton
                            onClick={onEnroll}
                            className="w-[240px]"
                            icon={<span className="text-lg">»</span>}
                        >
                            Download Brochure
                        </PremiumButton>
                    </div>
                </div>

            </div>
        </section>
    );
};

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group w-[280px] md:w-[300px] h-[380px] perspective-1000 flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={cn(
                    "relative w-full h-full transition-all duration-500",
                    isFlipped ? "" : ""
                )}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="h-full w-full relative">
                        <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-contain object-top"
                        />
                        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                            <h3 className="text-white font-bold text-xl text-center">{mentor.name}</h3>
                            <p className="text-gray-300 text-sm text-center font-medium">{mentor.company}</p>
                        </div> */}
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden flex flex-col shadow-xl"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        transformStyle: 'preserve-3d',
                        background: 'linear-gradient(to top, white 0%, #C5E2FF 50%, #C5E2FF 0%)'
                    }}
                >
                    {/* Image Section */}
                    <div className="w-full h-[55%] relative overflow-hidden">
                        <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 px-6 py-4 flex flex-col justify-center text-left">
                        <h3 className="font-heading text-black font-bold text-2xl leading-tight mb-2">
                            {mentor.name}
                        </h3>

                        <div className="space-y-0.5 mb-6">
                            <p className="font-sans text-gray-800 text-sm font-medium leading-snug">
                                {mentor.role}
                            </p>
                            <p className="font-sans text-gray-800 text-sm font-medium leading-snug">
                                {mentor.company}
                            </p>
                        </div>

                        {mentor.linkedin && (
                            <a
                                href={mentor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:opacity-80 transition-opacity"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="bg-[#0077b5] text-white p-1 rounded-sm">
                                    <Linkedin className="w-4 h-4 fill-white" />
                                </div>
                                <span className="font-bold">{mentor.name}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AICrashCourseMentors;
