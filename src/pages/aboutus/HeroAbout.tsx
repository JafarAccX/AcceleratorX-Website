import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-blue-600">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap');
      `}</style>

      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="About Background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* About Us Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/80 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide mb-8 inline-flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          ABOUT US
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Cormorant Infant, serif' }}
        >
          Innovations Dedicated to Shaping <br /> Your Future Forward
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-blue-100 text-lg md:text-xl font-medium tracking-wide"
        >
          We Make Learning AI Accessible For All
        </motion.p>
      </div>

      {/* Dotted Line Decoration */}
      <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white/20 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
