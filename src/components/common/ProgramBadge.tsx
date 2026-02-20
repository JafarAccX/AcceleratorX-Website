import React from "react";

interface ProgramBadgeProps {
    text: string;
    className?: string;
}

export const ProgramBadge: React.FC<ProgramBadgeProps> = ({ text, className = "" }) => {
    return (
        <div className={`relative inline-flex items-center ${className}`}>
            {/* Pulse Layer */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/70 blur-md animate-pulse"></div>

            {/* Main Badge */}
            <div className="relative flex items-center gap-2 rounded-full px-5 py-2
                  bg-black dark:bg-black/80
                  border border-white/30
                  ring-1 ring-white/5
                  shadow-xl">

                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />

                <span className="font-sans text-[10px] md:text-xs tracking-[0.25em]
                     font-medium text-white uppercase opacity-90 leading-none">
                    {text}
                </span>
            </div>
        </div>
    );
};
