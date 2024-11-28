import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import { X, Sparkles, Zap } from "lucide-react";

// Timer component
const Timer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">{days.toString().padStart(2, '0')}d</span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">{hours.toString().padStart(2, '0')}h</span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">{minutes.toString().padStart(2, '0')}m</span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-bold text-white">{seconds.toString().padStart(2, '0')}s</span>
      </div>
    </div>
  );
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
        this.color = '#1E90FF'; // Changed to blue
        this.glowColor = '#4169E1'; // Changed to royal blue for glow
        
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
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
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
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
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

    // Create objects
    const stars = Array(200).fill(null).map(() => new Star());
    const planets = Array(5).fill(null).map((_, index) => {
      const planet = new Planet();
      // Set fixed orbit radiuses for each planet
      planet.orbitRadius = 80 + (index * 60); // Increasing radius for each planet
      planet.speed = 0.002 / (index + 1); // Outer planets move slower
      planet.size = 8 + (index * 2); // Size increases slightly for outer planets
      planet.color = '#1E90FF';
      planet.glowColor = '#4169E1';
      
      // Adjust satellite properties based on planet index
      planet.satellites = Array(Math.min(2, index + 1)).fill(null).map(() => ({
        radius: planet.size * 2 + Math.random() * planet.size,
        angle: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.01,
        size: 2 + Math.random() * 2
      }));
      
      return planet;
    });

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
      
      // Draw orbit lines first (behind planets)
      planets.forEach(planet => {
        const centerX = rightHalf + (canvas.width / 4);
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.arc(centerX, planet.centerY, planet.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      // Then draw planets
      planets.forEach(planet => {
        planet.centerX = rightHalf + (canvas.width / 4); // Center of right half
        planet.update();
        planet.draw(ctx);
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

  // Timer logic
  useEffect(() => {
    const targetDate = new Date("2024-11-30"); // Set your target date here

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Update immediately and then every second
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Space Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.9 }}
      />

      {/* Black Friday Banner */}
      <AnimatePresence>
      
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-20"
          >
            <div className="w-full bg-gradient-to-r from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] border-b border-white/10 mt-6">
              <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="flex items-center justify-center space-x-4">
                  

                  {/* Sale Icon */}
                  <div className="relative">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>

                  {/* Sale Text */}
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-100">
                      BLACK FRIDAY SALE IS LIVE
                    </span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <span className="text-xs sm:text-sm text-blue-400">
                      Up to 70% off on Premium Courses
                    </span>
                  </div>

                  <span className="hidden sm:inline text-white/20">|</span>
                  
                  {/* Timer */}
                  <Timer {...timeLeft} />

                  <Sparkles className="hidden sm:block w-5 h-5 text-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        
      </AnimatePresence>

      {/* Main content container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center lg:items-stretch lg:justify-start">
        {/* Content Wrapper */}
        <div className="flex w-full flex-1">
          {/* Left side - Text content */}
          <div className="relative z-20 w-full px-6 py-10 lg:w-1/2 lg:px-16 xl:px-24">
            <div className="flex h-full w-full items-center justify-center lg:justify-start">
              <div className="w-full max-w-xl text-center lg:text-left">
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
                  className="mb-5 bg-clip-text text-4xl font-bold text-blue-600 md:text-6xl lg:text-7xl xl:text-8xl"
                  repeat={Infinity}
                  cursor={true}
                  style={{
                    whiteSpace: "pre",
                    display: "inline-block",
                    minWidth: "200px",
                    textShadow: "0 0 10px rgba(255, 255, 255, 0)"
                  }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mx-auto mb-8 max-w-lg text-sm font-semibold leading-relaxed text-gray-300 md:text-lg lg:mx-0 lg:text-xl"
                >
                  Transform your ideas into action. <br /> Accelerating ideas into
                  impactful solution that shapes the future.
                </motion.p>

                <div className="button-sparkle">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="enroll-button flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-600 md:text-base"
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
      </div>

      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}
