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
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={className}>
      {formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
    </div>
  );
};

export default DMTimer;
