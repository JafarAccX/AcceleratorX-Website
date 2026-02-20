import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: ReactNode;
    type?: "button" | "submit" | "reset";
}

export const PremiumButton = ({
    children,
    onClick,
    className = "",
    icon,
    type = "button",
}: PremiumButtonProps) => {
    return (
        <div
            onClick={onClick}
            className={`relative group p-[1.5px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] ${className}`}
        >
            {/* High-Fidelity Rotating Gradient Border */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-[-250%] bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0%,#ffffff_10%,#6366f1_20%,transparent_40%,transparent_60%,#6366f1_80%,#ffffff_90%,#3b82f6_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Button Body with Glassmorphism */}
            <button
                type={type}
                className="relative font-sans flex items-center justify-center gap-3 bg-black/95 text-white px-10 py-4 rounded-2xl text-lg font-medium backdrop-blur-md z-10 w-full border border-white/10 group-hover:border-transparent transition-all duration-300"
            >
                {children}
                {icon}
            </button>
        </div>
    );
};
