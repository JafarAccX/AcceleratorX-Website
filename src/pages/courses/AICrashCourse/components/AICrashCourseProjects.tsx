
import React from "react";
import { SiLangchain, SiNvidia } from "react-icons/si";
import { Bot, Terminal, Mic, AppWindow } from 'lucide-react';

interface AICrashCourseProjectsProps {
    onEnroll: () => void;
}

const AICrashCourseProjects: React.FC<AICrashCourseProjectsProps> = ({ onEnroll }) => {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                {/* Title: Plus Jakarta Sans, 48px, lowercase, gradient */}
                <h2 className="lowercase p-2 font-['Plus_Jakarta_Sans'] font-bold text-[48px] leading-[100%] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 tracking-normal">
                    what you’ll build
                </h2>
                <p className="text-gray-400 text-lg">You'll build things like:</p>
            </div>

            {/* Pill Grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-16">
                <ProjectPill text="AI Agents using CrewAI" icon={<Bot />} />
                <ProjectPill text="Multi-Agent Systems" icon={<Bot />} />
                <ProjectPill text="MCP Servers & Apps" icon={<Terminal />} />
                <ProjectPill text="Browser & Coding Agents" icon={<AppWindow />} />
                <ProjectPill text="LangChain & LangGraph Apps" icon={<SiLangchain />} />
                <ProjectPill text="AutoGen Agent Systems" icon={<Bot />} />
                <ProjectPill text="Voice AI Agents" icon={<Mic />} />
                <ProjectPill text="End-to-End AI Applications" icon={<SiNvidia />} />
            </div>

            <div className="text-center flex flex-col items-center">
                {/* Mentors Text: Poppins, 18px, gradient */}
                <div className="flex items-center justify-center gap-2 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500">
                    <span className="text-2xl ">«</span>
                    <p className="font-['Poppins'] font-medium text-[18px] leading-[100%]">
                        Everything is built LIVE with mentors
                    </p>
                    <span className="text-2xl ">»</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Enroll Button: Gradient border, 166x48, rounded-50px */}
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

                    <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors text-sm md:text-base">
                        Download Detailed Brochure <span className="ml-1">»</span>
                    </a>
                </div>

                <div className="mt-8 border border-purple-500/30 bg-black/50 backdrop-blur-md rounded-xl p-4 md:p-6 inline-block">
                    <p className="text-gray-400 text-sm mb-1">in just</p>
                    <p className="text-3xl md:text-4xl font-bold text-white">₹4,999 + GST</p>
                </div>
            </div>
        </section>
    );
};

const ProjectPill = ({ text, icon }: { text: string, icon?: React.ReactNode }) => (
    <div className="w-[242px] h-[56px] rounded-[10px] bg-black border border-[#84848480] flex items-center justify-center gap-[14px] px-[18px] py-[16px] hover:border-[#D358FF] transition-all cursor-default">
        {icon && <span className="text-gray-400">{icon}</span>}
        <span className="text-gray-200 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">{text}</span>
    </div>
);

export default AICrashCourseProjects;
