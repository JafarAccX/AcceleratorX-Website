import React, { useEffect, useRef } from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Security() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const gridSize = 30; // Distance between dots
    const dotSize = 2; // Size of each dot

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / gridSize);
      const rows = Math.floor(canvas.height / gridSize);

      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          // Create a radial gradient effect
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / (2 * window.devicePixelRatio), 2) +
              Math.pow(canvas.height / (2 * window.devicePixelRatio), 2)
          );

          // Calculate opacity based on distance
          let opacity = 0.5 - (distance / maxDistance) * 0.5;
          opacity = Math.max(0, opacity); // Prevent negative opacity

          ctx.fillStyle = `rgba(100, 150, 255, ${opacity})`; // Blue color with gradient effect
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sec<span className="text-blue-500">urity</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Protect your assets and transactions with our advanced encryption
            technology and decentralized infrastructure.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-xl" />
        </div>
      </div>
    </section>
  );
}
