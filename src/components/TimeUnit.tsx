import React from "react";
import { motion } from "framer-motion";

interface TimeUnitProps {
  value: number;
  unit: string;
}

export const TimeUnit = ({ value, unit }: TimeUnitProps) => {
  return (
    <div className="text-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-sm rounded-xl px-2 md:px-4 py-2 md:py-3 min-w-[60px] md:min-w-[80px] border border-white/10 shadow-lg overflow-hidden"
      >
        {/* Metallic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />

        {/* Inner shadow */}
        <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" />

        {/* Number display */}
        <div className="relative">
          <span className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </motion.div>
      <span className="text-[10px] md:text-sm text-gray-300 mt-1 md:mt-2 capitalize block font-medium">
        {unit}
      </span>
    </div>
  );
};
