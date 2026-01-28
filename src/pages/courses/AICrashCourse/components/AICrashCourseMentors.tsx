
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
    {
        name: "Himangi Sharma",
        image: "/advance-crashcourse/builders/nitya.png", // Placeholder
        role: "Data Scientist",
        company: "Mastercard",
        linkedin: "https://www.linkedin.com/in/himangi-sharma"
    },
    {
        name: "Ashu Mishra",
        image: "/advance-crashcourse/builders/ashu.png",
        role: "Senior Product Manager",
        company: "Zigram"
    },
    {
        name: "Pranali Bose",
        image: "/advance-crashcourse/builders/nitya.png", // Placeholder
        role: "Software Engineer (Data Science)",
        company: "Apple",
        linkedin: "https://www.linkedin.com/in/pranalibose"
    },
    {
        name: "Anjali Sharma",
        image: "/advance-crashcourse/builders/anjali.png",
        role: "AI Product Manager",
        company: "Mesha",
        linkedin: "https://www.linkedin.com/in/anjalisharmaaa/"
    },
    {
        name: "Dr. Prashant",
        image: "/advance-crashcourse/builders/dr-prashant.png",
        role: "Professor",
        company: "Unknown University"
    },
];

const AICrashCourseMentors = () => {
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
                <h2 className="lowercase font-['Plus_Jakarta_Sans'] font-bold text-[40px] md:text-[48px] leading-[100%] mb-4 text-white">
                    learn from <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#CC3FFF_27.88%,#48A2EB_59.13%)]">builders</span>, not just trainers
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
                    Built & deployed AI agents, Resolved production issues, Explained system functionality, Guided professionals in various fields
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Scroll Buttons */}
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
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mentors.map((mentor, index) => (
                        <MentorCard key={index} mentor={mentor} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-widest text-sm font-bold border-b border-purple-500/30 pb-1">
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
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#111] border border-purple-500/50 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(172,10,231,0.2)]">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 mb-4">
                        <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover object-top" />
                    </div>

                    <h3 className="text-white font-bold text-2xl mb-1">{mentor.name}</h3>
                    <p className="text-purple-400 font-medium mb-1">{mentor.company}</p>
                    <p className="text-gray-400 text-sm mb-6">{mentor.role}</p>

                    {mentor.linkedin && (
                        <a
                            href={mentor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006097] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Linkedin className="w-4 h-4" />
                            Connect
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AICrashCourseMentors;
