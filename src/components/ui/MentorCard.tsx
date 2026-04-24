import React from 'react';

export interface Mentor {
    name: string;
    designation: string;
    company: string;
    image: string;
    companyLogo?: string;
}

interface MentorCardProps {
    mentor: Mentor;
    accentColor?: string; // Hex color for the border and accent line (e.g., "#9EFF1F")
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, accentColor = "#9EFF1F" }) => {
    return (
        <div className="relative w-[180px] xs:w-[210px] sm:w-[260px] h-[210px] xs:h-[230px] sm:h-[310px] flex-shrink-0 group">
            {/* Main Card with Left-Fade */}
            <div
                className="absolute inset-x-0 top-0 bottom-12 rounded-[28px] overflow-hidden border-t border-r border-b border-white/[0.08] backdrop-blur-md z-10"
                style={{ background: "linear-gradient(90deg, transparent 0%, #1a1a1e 40%, #1a1a1e 100%)" }}
            >
                <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Floating Logo Top-Right */}
            {mentor.companyLogo && (
                <div className="absolute top-[-15px] -right-7 z-[100] transform translate-z-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-black border-[2.5px] border-[#1a1a1e] shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                        <img src={mentor.companyLogo} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}

            {/* Info Pill — bottom */}
            <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] z-50 
                rounded-full px-5 py-3 text-center 
                border-l border-r border-b border-t-0
                bg-black/5 backdrop-blur-md
                transition-all duration-300 flex flex-col justify-center h-[75px] sm:h-[80px]"
                style={{ borderLeftColor: accentColor, borderRightColor: accentColor, borderBottomColor: accentColor }}
            >
                {/* Name */}
                <div className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight mb-0.5 line-clamp-1
                drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
                    {mentor.name}
                </div>

                {/* designation */}
                <div className="text-white/60 text-[10px] sm:text-[11px] font-medium leading-tight line-clamp-2">
                    {mentor.designation} - {mentor.company}
                </div>

                {/* Accent line */}
                <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[2px] rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
                />
            </div>
        </div>
    );
};

export default MentorCard;
