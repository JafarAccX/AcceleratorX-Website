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
    <section 
      className={`
        w-full bg-black py-8 relative overflow-hidden
        before:content-[''] before:absolute before:left-0 before:right-0 before:h-[2px] before:top-0
        after:content-[''] after:absolute after:left-0 after:right-0 after:h-[2px] after:bottom-0
        ${isHovered 
          ? 'before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-borderFlow ' +
            'after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-blue-500 after:animate-borderFlowReverse'
          : 'before:bg-white/10 after:bg-white/10'
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"
        style={{
          opacity: isHovered ? 0.15 : 0.08,
          transition: 'opacity 0.5s ease'
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
        style={{
          opacity: isHovered ? 0.2 : 0.1,
          transition: 'opacity 0.5s ease'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div 
          className="text-center transform transition-all duration-300 ease-out"
        >
          <h1 className="text-xl md:text-3xl font-semibold text-white/90 flex items-center justify-center gap-3 animate-fadeIn">
            <span className="transform transition-all duration-300 hover:text-neon-blue">
              Accelerate your career with
            </span>
            <a 
              href={abouv_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center 
                transition-all duration-500
                hover:scale-110
                bg-white rounded-lg p-2
                ${isHovered ? 'translate-y-[-2px] filter brightness-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : ''}
              `}
            >
              <img
                src={abouv_logo}
                alt="Abouv"
                className={`
                  h-8 md:h-10 
                  transition-all duration-300
                  filter
                  ${isHovered ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : ''}
                `}
              />
            </a>
          </h1>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes borderFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes borderFlowReverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-borderFlow {
          animation: borderFlow 3s linear infinite;
        }
        .animate-borderFlowReverse {
          animation: borderFlowReverse 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroWithAbouv;
