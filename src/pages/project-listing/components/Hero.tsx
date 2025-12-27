import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const scrollToProjects = () => {
        const element = document.getElementById('projects-listing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50/50 to-white min-h-[800px] flex items-center justify-center">

            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    src="/redesign/project listing/project-listing-hero.webp"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 py-20">
                <div className="max-w-4xl font-extralight relative">
                    <h1 className="text-5xl md:text-7xl text-[#1A1A1A] leading-tight mb-2 tracking-tight font-['Cormorant_Infant']">
                        Let the world see,
                    </h1>
                    <h1 className="text-5xl md:text-7xl text-[#2B7FFF] leading-tight mb-8 tracking-tight font-['Cormorant_Infant'] font-bold">
                        what you can BUILD.
                    </h1>
                </div>

                <div className="w-full h-px bg-black my-8" />

                <div className="flex justify-end">
                    <div className="max-w-xl flex flex-col items-end gap-6 text-right">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Join the community of top developers. Share your projects, get feedback, and climb the leaderboard to get noticed by recruiters.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/profile')}
                                className="bg-[#2B7FFF] hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-sm"
                            >
                                Showcase your projects
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={scrollToProjects}
                                className="bg-[#FFD100] hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-sm"
                            >
                                Explore Projects
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
