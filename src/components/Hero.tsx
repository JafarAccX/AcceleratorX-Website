import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-center bg-black min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/grain1.png')",
        backgroundSize: "240%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Second Layer Background */}
      <div
        className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/grain2.png')",
          backgroundSize: "98%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Meteor Shower Effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`meteor meteor-${i + 1}`} />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center Beam */}
        <div className="center-beam"></div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
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
            className="text-6xl sm:text-8xl mb-5 font-bold text-white text-transparent bg-clip-text"
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre",
              display: "inline-block",
              minWidth: "300px",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-sm sm:text-xl font-semibold text-center mb-8 max-w-lg mx-auto leading-relaxed"
          >
            Transform your ideas into action. <br /> Accelerating ideas into
            impactful solution that shapes the future.
          </motion.p>

          <div className="button-sparkle">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="enroll-button bg-blue-600 flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg text-sm sm:text-base font-medium"
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
  );
}
