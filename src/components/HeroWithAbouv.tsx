import React, { useState } from 'react';

interface HeroProps {
  abouv_logo?: string;
  abouv_link?: string;
}

const HeroWithAbouv = ({
  abouv_logo = "/abouv.svg",
  abouv_link = "https://abouv.com",
}: HeroProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-4 flex justify-center items-center relative">
      {/* Background glow effect */}
      <div className="absolute inset-0" />
      
      <div className="card-container relative w-full max-w-5xl mx-4 h-[90px] rounded-[12px] overflow-hidden shadow-[0_0_30px_rgba(0,183,255,0.3)]">
        {/* Animated gradient border - enhanced */}
        <div className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotBGimg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b7ff] via-[#ff30ff] to-[#00b7ff] blur-[15px] opacity-70" />
        </div>

        {/* Inner content */}
        <div className="card-content relative bg-[#07182E] m-[3px] h-[calc(100%-6px)] rounded-[10px] z-10 px-6 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-6 animate-fadeIn">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <img
                src="/assets/companylogo.png"
                alt="AcceleratorX"
                className="h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
              <span className="text-white text-xl font-light animate-pulse">×</span>
              <a 
                href={abouv_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <img
                  src={abouv_logo}
                  alt="Abouv"
                  className="h-6"
                />
              </a>
            </div>

            {/* Text content */}
            <div className="flex items-center gap-3 md:gap-4">
              <p className="text-sm md:text-base font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                Accelerate your career with us
              </p>
              <span className="text-white/50 animate-pulse">|</span>
              <p className="text-sm font-semibold md:text-base text-white/90 font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                We take care of your <span className="text-yellow-400 text-xl">Placements</span> 
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }

        .animate-rotBGimg {
          animation: rotBGimg 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `}</style>
    </section>
  );
};

export default HeroWithAbouv;
