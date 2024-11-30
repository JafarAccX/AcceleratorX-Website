import { motion } from "framer-motion";
import { User, Database, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Learn By Doing",
    description:
      "Gain practical, hands-on experience that empowers you to turn knowledge into real-world skills.",
    size: "small",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="gridPattern1"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#gridPattern1)" />
        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.circle
            cx="100"
            cy="100"
            r="40"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          {[0, 60, 120, 180, 240, 300].map((angle, index) => {
            const x = 100 + Math.cos((angle * Math.PI) / 180) * 80;
            const y = 100 + Math.sin((angle * Math.PI) / 180) * 80;
            return (
              <motion.circle
                key={angle}
                cx={x}
                cy={y}
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
              />
            );
          })}
        </motion.g>
      </motion.svg>
    ),
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Curated Curriculum",
    description:
      "Expert-designed courses tailored to build essential skills step-by-step for real-world success.",
    size: "large",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="gridPattern2"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#gridPattern2)" />
        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="45"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="30"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          />
          {[0, 60, 120, 180, 240, 300].map((angle, index) => {
            const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.circle
                key={angle}
                cx={x}
                cy={y}
                r="2"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
              />
            );
          })}
        </motion.g>
      </motion.svg>
    ),
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Industry Mentors",
    description: "Learn from experts with real-world experience.",
    size: "large",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="gridPattern3"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#gridPattern3)" />
        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.circle
            cx="100"
            cy="100"
            r="40"
            strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="100"
            y1="100"
            x2="100"
            y2="70"
            strokeWidth="2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.line
            x1="100"
            y1="100"
            x2="120"
            y2="100"
            strokeWidth="2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
        </motion.g>
      </motion.svg>
    ),
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Placement Support",
    description:
      "Comprehensive career assistance to land your dream job confidently.",
    size: "small",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="gridPattern4"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#gridPattern4)" />
        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            d="M40 160 L160 40"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx={60 + i * 25}
              cy={140 - i * 25}
              r="3"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </motion.g>
      </motion.svg>
    ),
  },
];

export default function BecomeAMentorFeatures() {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Revolutionizing the Way </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              You Learn
            </span>
          </motion.h2>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[180px]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-800 overflow-hidden
                  ${
                    feature.size === "large"
                      ? "col-span-2 md:col-span-4"
                      : "col-span-2"
                  }
                  hover:border-blue-500/50 transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]
                `}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-500/20 p-1.5 rounded-lg text-blue-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white line-clamp-1">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {feature.description}
                  </p>
                  {/* <div className="mt-auto pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:text-indigo-300 transition-colors"
                    >
                      Learn more
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div> */}
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full text-indigo-400"
                  >
                    {feature.image}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
