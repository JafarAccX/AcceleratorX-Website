import { motion } from "framer-motion";

interface TimerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const Timer = ({ timeLeft }: TimerProps) => {
  const timeSegments = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <div className="flex space-x-4 md:space-x-6">
      {timeSegments.map((item) => (
        <motion.div
          key={item.label}
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 shadow-xl"
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.15)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-white text-center tabular-nums"
              animate={{
                scale: item.value === 0 ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {String(item.value).padStart(2, "0")}
            </motion.div>
            <div className="absolute -bottom-5 left-0 right-0">
              <div className="text-[11px] text-blue-100/90 font-semibold tracking-widest">
                {item.label}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
