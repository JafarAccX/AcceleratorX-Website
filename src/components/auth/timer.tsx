import { useEffect, useState } from "react";

const Timer = ({ showOTP }: { showOTP: boolean }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (showOTP && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [showOTP, timer]);
  return <p className="text-sm text-blue-200/80 text-center mt-2">Resend OTP in {timer}s</p>;
};

export default Timer;
