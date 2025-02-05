import React, { useState, useEffect } from "react";

interface TimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  className?: string;
}

const DMTimer: React.FC<TimerProps> = ({
  initialHours = 48,
  initialMinutes = 0,
  initialSeconds = 0,
  className = "",
}) => {
  // Set a fixed end date (48 hours from first visit)
  const getEndTime = () => {
    const stored = localStorage.getItem('dmTimer_endTime');
    if (stored) {
      return parseInt(stored);
    }
    const end = Date.now() + (initialHours * 3600000 + initialMinutes * 60000 + initialSeconds * 1000);
    localStorage.setItem('dmTimer_endTime', end.toString());
    return end;
  };

  const calculateTimeLeft = () => {
    const difference = getEndTime() - Date.now();
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);

      // Clear interval and localStorage if timer reaches zero
      if (newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
        clearInterval(timer);
        localStorage.removeItem('dmTimer_endTime');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={className}>
      {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
    </div>
  );
};

export default DMTimer;
