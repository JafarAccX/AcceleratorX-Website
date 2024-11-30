import React, { useEffect, useRef } from "react";

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Star {
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number;
      phase: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 0.5 + Math.random() * 2;
        this.twinkleSpeed = 0.02 + Math.random() * 0.05;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += this.twinkleSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const brightness = 0.3 + Math.sin(this.phase) * 0.7;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = Array(200)
      .fill(null)
      .map(() => new Star());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.9 }}
    />
  );
};
