import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        '3xl': '1600px',
      },
      fontSize: {
        'fluid-sm': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(0.875rem, 0.8rem + 0.35vw, 1rem)', { lineHeight: '1.6' }],
        'fluid-lg': ['clamp(1rem, 0.9rem + 0.5vw, 1.25rem)', { lineHeight: '1.5' }],
        'fluid-xl': ['clamp(1.25rem, 1rem + 1vw, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-2xl': ['clamp(1.5rem, 1.2rem + 1.5vw, 2rem)', { lineHeight: '1.3' }],
        'fluid-3xl': ['clamp(1.75rem, 1.3rem + 2vw, 2.5rem)', { lineHeight: '1.2' }],
        'fluid-hero': ['clamp(1.75rem, 1rem + 3vw, 3rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        'fluid-4': 'clamp(0.75rem, 0.5rem + 1vw, 1rem)',
        'fluid-6': 'clamp(1rem, 0.75rem + 1.25vw, 1.5rem)',
        'fluid-8': 'clamp(1.5rem, 1rem + 2vw, 2rem)',
        'fluid-16': 'clamp(2.5rem, 2rem + 3vw, 4rem)',
        'fluid-24': 'clamp(3rem, 2rem + 5vw, 6rem)',
      },
      colors: {
        navy: {
          800: "#1a1f36",
          900: "#0f172a",
          950: "#0a0f1d",
        },
        neon: {
          yellow: '#E2FF32',
          blue: '#32C5FF',
          teal: '#32FFE2',
        },
        neutral: {
          900: '#151515',
          800: '#1F1F1F',
          700: '#2E2E2E',
          200: '#E5E5E5',
          100: '#F5F5F5',
          50: '#FAFAFA',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Space Grotesk', 'system-ui', 'sans-serif'],
        heading: ['Epilogue', 'system-ui', 'sans-serif'], // For h1, h2, h3, etc.
        sans: ['Open Sans', 'system-ui', 'sans-serif'], // For body text
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        slide: "slide 15s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll": "scroll 30s linear infinite",
        "scroll-reverse": "scroll-reverse 30s linear infinite",
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "infinite-scroll-left": "infinite-scroll-left 120s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 120s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "infinite-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "infinite-scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(226, 255, 50, 0.5)',
        'neon-blue': '0 0 20px rgba(50, 197, 255, 0.5)',
      }
    },
  },
  plugins: [typography],
};
