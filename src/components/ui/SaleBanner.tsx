import React from "react";
import { Zap, Sparkles } from "lucide-react";
import { Timer } from "../widgets/Timer";

interface SaleBannerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const SaleBanner: React.FC<SaleBannerProps> = ({ timeLeft }) => {
  return (
    <div className="relative z-20">
      <div className="w-full bg-gradient-to-r from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] border-b border-white/10 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <Zap className="w-5 h-5 text-yellow-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse-fast" />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-100">
                BLACK FRIDAY SALE IS LIVE
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="text-xs sm:text-sm text-blue-400">Up to 70% off on Premium Courses</span>
            </div>

            <span className="hidden sm:inline text-white/20">|</span>

            <Timer {...timeLeft} />

            <Sparkles className="hidden sm:block w-5 h-5 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
