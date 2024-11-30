import React from "react";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer: React.FC<TimerProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">
          {days.toString().padStart(2, "0")}d
        </span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">
          {hours.toString().padStart(2, "0")}h
        </span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">
          {minutes.toString().padStart(2, "0")}m
        </span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">
          {seconds.toString().padStart(2, "0")}s
        </span>
      </div>
    </div>
  );
};
