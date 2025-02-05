import React, { useState, useEffect } from "react";

interface TimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  className?: string;
  targetDate?: string; // New prop for target date
}

const DMTimer: React.FC<TimerProps> = ({
  initialHours = 120,
  initialMinutes = 0,
  initialSeconds = 0,
  className = "",
  targetDate = "", // Default empty string
}) => {
  // Get or set the target end time
  const getEndTime = () => {
    const stored = localStorage.getItem('dmTimer_endTime');
    if (stored) {
      const storedTime = parseInt(stored);
      const now = Date.now();
      
      // If timer has expired, extend by 5 days
      if (storedTime <= now) {
        const newEndTime = now + (5 * 24 * 60 * 60 * 1000); // 5 days in milliseconds
        localStorage.setItem('dmTimer_endTime', newEndTime.toString());
        return newEndTime;
      }
      return storedTime;
    }

    // If target date is provided, use it
    if (targetDate) {
      const targetTime = new Date(targetDate).getTime();
      localStorage.setItem('dmTimer_endTime', targetTime.toString());
      return targetTime;
    }

    // Fallback to default behavior (initialHours from now)
    const end = Date.now() + (initialHours * 3600000 + initialMinutes * 60000 + initialSeconds * 1000);
    localStorage.setItem('dmTimer_endTime', end.toString());
    return end;
  };

  const calculateTimeLeft = () => {
    const difference = getEndTime() - Date.now();
    
    // If time is up, trigger a refresh to extend the timer
    if (difference <= 0) {
      localStorage.removeItem('dmTimer_endTime'); // Clear stored time to force recalculation
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);

      // If timer reaches zero, it will automatically extend on next calculation
      if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
        localStorage.removeItem('dmTimer_endTime');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={`inline-flex gap-2 items-center ${className}`}>
      <div className="flex items-center gap-1">
        <span className="bg-blue-500/20 px-2 py-1 rounded-md">{formatNumber(timeLeft.days)}d</span>
        <span className="bg-blue-500/20 px-2 py-1 rounded-md">{formatNumber(timeLeft.hours)}h</span>
        <span className="bg-blue-500/20 px-2 py-1 rounded-md">{formatNumber(timeLeft.minutes)}m</span>
        <span className="bg-blue-500/20 px-2 py-1 rounded-md">{formatNumber(timeLeft.seconds)}s</span>
      </div>
    </div>
  );
};

export default DMTimer;
