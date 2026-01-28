
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FreeBuildPassBannerProps {
    isOpen: boolean;
    onClose: () => void;
    onClaim: () => void;
}

export default function FreeBuildPassBanner({ isOpen, onClose, onClaim }: FreeBuildPassBannerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose} // Close when clicking background
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative max-w-2xl w-full cursor-pointer group"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent background close
                            onClaim();
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Content Container */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Image Banner */}
                            <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.3)] border border-orange-500/30 relative">
                                <img
                                    src="/offer-banners/buildpass.jpeg"
                                    alt="Free Build Pass"
                                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
                                />
                            </div>

                            {/* Always Visible Claim Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClaim();
                                }}
                                className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transform hover:scale-105 transition-all duration-300"
                            >
                                Claim Now Free
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
