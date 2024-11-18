import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class for background stars
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

    // Planet class for orbiting objects
    class Planet {
      centerX: number;
      centerY: number;
      orbitRadius: number;
      angle: number;
      speed: number;
      size: number;
      color: string;
      glowColor: string;
      satellites: { radius: number; angle: number; speed: number; size: number; }[];

      constructor() {
        this.reset();
      }

      reset() {
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
        this.orbitRadius = 100 + Math.random() * 200;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.001 + Math.random() * 0.002;
        this.size = 5 + Math.random() * 15;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        this.glowColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        
        // Add satellites
        this.satellites = Array(Math.floor(1 + Math.random() * 3)).fill(null).map(() => ({
          radius: this.size * 2 + Math.random() * this.size * 3,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.03,
          size: 2 + Math.random() * 4
        }));
      }

      update() {
        this.angle += this.speed;
        this.satellites.forEach(sat => {
          sat.angle += sat.speed;
        });
      }

      draw(ctx: CanvasRenderingContext2D) {
        const x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
        const y = this.centerY + Math.sin(this.angle) * this.orbitRadius;

        // Draw orbit
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.arc(this.centerX, this.centerY, this.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw planet glow
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw satellites
        this.satellites.forEach(sat => {
          const satX = x + Math.cos(sat.angle) * sat.radius;
          const satY = y + Math.sin(sat.angle) * sat.radius;
          
          // Satellite orbit
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.arc(x, y, sat.radius, 0, Math.PI * 2);
          ctx.stroke();

          // Satellite
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.arc(satX, satY, sat.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.shadowBlur = 0;
      }
    }

    // Lightning class for electric effects
    class Lightning {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      segments: { x: number; y: number; }[];
      life: number;
      maxLife: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = this.startX + (Math.random() - 0.5) * 200;
        this.endY = this.startY + (Math.random() - 0.5) * 200;
        this.segments = this.generateSegments();
        this.life = 0;
        this.maxLife = 10 + Math.random() * 10;
      }

      generateSegments() {
        const segments = [{ x: this.startX, y: this.startY }];
        let currentX = this.startX;
        let currentY = this.startY;
        const steps = 8 + Math.floor(Math.random() * 4);
        
        for (let i = 0; i < steps; i++) {
          currentX += (this.endX - this.startX) / steps + (Math.random() - 0.5) * 30;
          currentY += (this.endY - this.startY) / steps + (Math.random() - 0.5) * 30;
          segments.push({ x: currentX, y: currentY });
        }
        
        segments.push({ x: this.endX, y: this.endY });
        return segments;
      }

      update() {
        this.life++;
        if (this.life > this.maxLife) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = 1 - (this.life / this.maxLife);
        
        ctx.strokeStyle = `rgba(120, 180, 255, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(120, 180, 255, 0.8)';
        ctx.shadowBlur = 20;
        
        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        
        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    // Create objects
    const stars = Array(200).fill(null).map(() => new Star());
    const planets = Array(5).fill(null).map(() => new Planet());
    const lightnings = Array(3).fill(null).map(() => new Lightning());

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Enable global composite operation for brighter effects
      ctx.globalCompositeOperation = 'lighter';
      
      // Draw stars everywhere
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      // Calculate the right half of the screen for solar system
      const rightHalf = canvas.width / 2;
      
      // Adjust planet positions to be only on the right side
      planets.forEach(planet => {
        planet.centerX = rightHalf + (canvas.width / 4); // Center of right half
        planet.update();
        planet.draw(ctx);
      });

      // Draw lightning only on the right side
      lightnings.forEach(lightning => {
        lightning.startX = rightHalf + (Math.random() * (canvas.width / 2));
        lightning.update();
        lightning.draw(ctx);
      });
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Space Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.9 }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row">
        {/* Left side - Text content */}
        <div className="relative z-20 flex w-full items-center px-6 py-10 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="w-full">
            <div className="max-w-xl">
              <TypeAnimation
                sequence={[
                  "Build",
                  1000,
                  "",
                  500,
                  "Lead",
                  1000,
                  "",
                  500,
                  "Succeed",
                  1000,
                  "",
                  500,
                ]}
                wrapper="h1"
                speed={50}
                className="mb-5 bg-clip-text text-4xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl"
                repeat={Infinity}
                cursor={true}
                style={{
                  whiteSpace: "pre",
                  display: "inline-block",
                  minWidth: "200px",
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8 max-w-lg text-left text-sm font-semibold leading-relaxed text-gray-300 md:text-lg lg:text-xl"
              >
                Transform your ideas into action. <br /> Accelerating ideas into
                impactful solution that shapes the future.
              </motion.p>

              <div className="button-sparkle">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mb-8 flex flex-col items-start gap-4 sm:flex-row"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="enroll-button flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white md:text-base"
                    onClick={() => {
                      const featuresSection = document.getElementById("features");
                      if (featuresSection) {
                        featuresSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Explore Courses
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Solar System */}
        <div className="absolute right-0 top-0 z-10 hidden h-full w-1/2 lg:block">
          {/* This div is intentionally empty as it serves as the container for the right-side solar system */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}
