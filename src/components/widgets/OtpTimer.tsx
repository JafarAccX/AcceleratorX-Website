import React, { useState, useEffect } from 'react';

interface OtpTimerProps {
  initialTime: number;
  onResend: () => void;
}

export const OtpTimer: React.FC<OtpTimerProps> = ({ initialTime, onResend }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (!isTimerRunning) return;

    if (timeLeft === 0) {
      setIsTimerRunning(false);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isTimerRunning]);

  const handleResendClick = () => {
    setTimeLeft(initialTime);
    setIsTimerRunning(true);
    onResend();
  };

  return (
    <div className="text-center mt-4">
      {isTimerRunning ? (
        <p className="text-sm text-gray-400">
          Resend OTP in <span className="font-semibold text-white">{timeLeft}s</span>
        </p>
      ) : (
        <button
          type="button"
          onClick={handleResendClick}
          className="text-blue-400 hover:underline text-sm"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};
