import React, { useEffect, useState } from 'react';

export interface Tool {
    name: string;
    logo: string;
    color?: string;
}

interface InfiniteScrollToolsProps {
    tools: Tool[];
    accentColor?: string;
    speed?: number; // Duration in seconds
}

const InfiniteScrollTools: React.FC<InfiniteScrollToolsProps> = ({ 
    tools, 
    accentColor = '#FC6401',
    speed = 40 
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Ensure animation starts only after hydration
        setMounted(true);
    }, []);

    // We use 4 sets of data to ensure the list is wide enough for large screens 
    // and the -50% translateX transition is seamless.
    const displayTools = [...tools, ...tools, ...tools, ...tools];

    if (!tools || tools.length === 0) return null;

    return (
        <div className="w-full relative mt-12 mb-16 overflow-hidden" style={{ minHeight: "140px" }}>
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-60 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 sm:w-60 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <div 
                className={`flex w-max gap-12 sm:gap-24 items-center py-4 z-20 relative ${mounted ? 'animate-infinite-scroll-left' : ''}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {displayTools.map((tool, i) => (
                    <div 
                        key={`${tool.name}-${i}`} 
                        className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0"
                        style={{ width: "100px" }} // Reserved width to prevent layout shifts
                    >
                        <div className="relative h-8 sm:h-12 flex items-center justify-center">
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10"
                                loading={i < tools.length ? "eager" : "lazy"} // Prioritize loading the first visible set
                            />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest duration-500">
                                {tool.name}
                            </span>
                            <div 
                                className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"
                                style={{ backgroundColor: tool.color || accentColor }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollTools;
