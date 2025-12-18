import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const DigitSpinner = ({ value }: { value: string }) => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numValue = parseInt(value, 10);

    return (
        <div
            className="w-12 h-20 md:w-16 md:h-28 bg-white border border-gray-200 rounded-lg shadow-sm relative overflow-hidden flex flex-col items-center justify-start"
            style={{
                '--digit-h': '64px', // Standard height for digit boxes on mobile
                '--container-h': '80px',
            } as any}
        >
            {/* Responsiveness overrides via hidden divs to set variables */}
            <div className="md:hidden contents [--digit-h:64px] [--container-h:80px]" />
            <div className="hidden md:contents [--digit-h:80px] [--container-h:112px]" />

            {/* Overlay gradients for the "mechanical spinner" depth effect */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-100/90 via-gray-50/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-100/90 via-gray-50/40 to-transparent z-10 pointer-events-none" />

            {/* Center line decoration */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/5 z-0" />

            <motion.div
                className="flex flex-col items-center"
                animate={{ y: `calc(-${numValue} * var(--digit-h) + (var(--container-h) - var(--digit-h)) / 2)` }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
                {digits.map((digit) => (
                    <div
                        key={digit}
                        className="h-16 w-12 md:h-20 md:w-16 flex items-center justify-center text-4xl md:text-6xl font-light text-[#1A1A1A]"
                    >
                        {digit}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const ProjectCountdown = () => {
    const [timeLeft, setTimeLeft] = useState("000");

    useEffect(() => {
        const calculateRemaining = () => {
            const targetDate = new Date('2025-12-23T00:00:00'); // Target date for 5 days from Dec 18
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                // Use Math.ceil to ensure we show "5" days left until it's less than 4 full days
                const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
                return String(Math.max(0, days)).padStart(3, '0');
            }
            return "000";
        };

        setTimeLeft(calculateRemaining());
        const timer = setInterval(() => {
            setTimeLeft(calculateRemaining());
        }, 1000 * 60); // Update every minute

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
        >
            <span className="text-blue-500 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">
                DAY'S LEFT
            </span>
            <div className="flex justify-center gap-2">
                {timeLeft.split('').map((char, index) => (
                    <DigitSpinner key={index} value={char} />
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCountdown;
