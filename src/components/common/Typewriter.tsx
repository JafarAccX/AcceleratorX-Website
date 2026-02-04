import { motion } from "framer-motion";
import { useState } from "react";

interface TypewriterProps {
    text: string;
    onComplete?: () => void;
    className?: string; // Wrapper class
    textClassName?: string; // Text specific class
}

export const Typewriter = ({ text, onComplete, className = "", textClassName = "" }: TypewriterProps) => {
    const [isTypingDone, setIsTypingDone] = useState(false);
    const characters = text.split("");

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <motion.div
                className={`font-dogica text-white/50 text-2xl uppercase ${textClassName}`}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.08 } }
                }}
                onAnimationComplete={() => {
                    if (onComplete) {
                        setTimeout(onComplete, 500);
                    }
                    setIsTypingDone(true);
                }}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
                {!isTypingDone && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-1.5 h-3.5 bg-blue-500 ml-1 align-middle"
                    />
                )}
            </motion.div>
        </div>
    );
};
