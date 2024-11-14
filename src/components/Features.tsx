import { motion } from "framer-motion";
import { Maximize2, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Maximize2 className="w-8 h-8" />,
    title: "Future-Forward Solutions",
    description:
      "Our Web3 fintech simplifies complex finance for everyone. With innovative technology, we make navigating the financial future easier.",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="grid"
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
        <rect width="200" height="200" fill="url(#grid)" />

        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main diamond container */}
          <motion.path
            d="M100 50L150 100L100 150L50 100Z"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Four circles in corners */}
          <motion.circle
            cx="70"
            cy="70"
            r="20"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx="130"
            cy="70"
            r="20"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7, repeat: Infinity }}
          />
          <motion.circle
            cx="130"
            cy="130"
            r="20"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
          />
          <motion.circle
            cx="70"
            cy="130"
            r="20"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.1, repeat: Infinity }}
          />

          {/* Center dots */}
          <motion.circle
            cx="70"
            cy="70"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="130"
            cy="70"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx="130"
            cy="130"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
          <motion.circle
            cx="70"
            cy="130"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          />
        </motion.g>
      </motion.svg>
    ),
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Efficient Smart Contract Execution",
    description:
      "Our platform ensures your smart contracts are executed seamlessly, optimizing both speed and accuracy.",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="grid2"
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
        <rect width="200" height="200" fill="url(#grid2)" />

        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main circle */}
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Inner circles */}
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

          {/* Small circles on the main circle */}
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
    icon: <Shield className="w-8 h-8" />,
    title: "Unleash the Potential of Finance",
    description:
      "Experience the power of decentralized finance right at your fingertips, transforming the way you manage your assets and engage with the financial world.",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="grid3"
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
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#grid3)" />

        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Central star */}
          <motion.path
            d="M100 40L108 82L150 82L116 108L126 150L100 126L74 150L84 108L50 82L92 82L100 40Z"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{
              pathLength: { duration: 3, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          />

          {/* Orbital rings */}
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting stars */}
          {[0, 72, 144, 216, 288].map((angle, index) => {
            const radius = 70;
            const x = 100 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 100 + radius * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.g key={angle}>
                <motion.path
                  d={`M${x} ${y - 8}L${x + 3} ${y - 3}L${x + 8} ${y - 2}L${
                    x + 4
                  } ${y + 2}L${x + 5} ${y + 8}L${x} ${y + 4}L${x - 5} ${
                    y + 8
                  }L${x - 4} ${y + 2}L${x - 8} ${y - 2}L${x - 3} ${y - 3}Z`}
                  fill="currentColor"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: 360,
                  }}
                  transition={{
                    scale: {
                      duration: 2,
                      delay: index * 0.4,
                      repeat: Infinity,
                    },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  }}
                />
              </motion.g>
            );
          })}

          {/* Pulsing center */}
          <motion.circle
            cx="100"
            cy="100"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>
      </motion.svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-8 lg:px-16">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="bg-gray-900/30 backdrop-blur-sm px-6 py-2 rounded-full text-gray-400 text-sm">
            Flexibility and efficiency
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Simplifying </span>
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
              Product Manager
            </span>{" "}
            <span className="text-white">For Everyone</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 sm:gap-12`}
            >
              <div className="flex-1 space-y-4 md:space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center text-indigo-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium"
                >
                  Learn More
                </motion.button>
              </div>
              <div className="flex-1">
                <div className="relative aspect-square bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700 shadow-lg">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="w-full h-full text-indigo-400"
                  >
                    {feature.image}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
