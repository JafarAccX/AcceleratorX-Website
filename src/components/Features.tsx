import { motion } from "framer-motion";
import { Maximize2, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Maximize2 className="w-8 h-8" />,
    title: "Product Management",
    description:
      "Our program empowers you to lead with data-driven insights and real-world strategies, making complex product management accessible. Gain hands-on experience in crafting products that resonate with users and drive measurable growth.",
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
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main diamond container */}
          <motion.path
            d="M100 50L150 100L100 150L50 100Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
            }}
          />

          {/* Four circles in corners */}
          {[
            { cx: 70, cy: 70, delay: 0 },
            { cx: 130, cy: 70, delay: 0.5 },
            { cx: 130, cy: 130, delay: 1 },
            { cx: 70, cy: 130, delay: 1.5 },
          ].map((circle, index) => (
            <motion.circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r="20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: circle.delay,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            />
          ))}

          {/* Animated dots */}
          {[
            { cx: 70, cy: 70, delay: 0 },
            { cx: 130, cy: 70, delay: 0.5 },
            { cx: 130, cy: 130, delay: 1 },
            { cx: 70, cy: 130, delay: 1.5 },
          ].map((dot, index) => (
            <motion.circle
              key={`dot-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r="3"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: dot.delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
    ),
    path: "/courses/product-management",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Data Analytics",
    description:
      "Unlock the power of data to drive product success. This program equips you with essential analytics skills and deep insights into product metrics, user behavior, and retention strategies, preparing you to make impactful product decisions.",
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
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Concentric circles */}
          {[60, 45, 30].map((radius, index) => (
            <motion.circle
              key={`circle-${index}`}
              cx="100"
              cy="100"
              r={radius}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              }}
            />
          ))}

          {/* Orbiting points */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => {
            const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.g key={`orbit-${index}`}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
                <motion.line
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.2, 0] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              </motion.g>
            );
          })}

          {/* Center point */}
          <motion.circle
            cx="100"
            cy="100"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.g>
      </motion.svg>
    ),
    path: "/courses/data-analytics",
  },
];

export default function Features() {
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="relative bg-black py-16 px-4 sm:px-8 lg:px-16"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Simplifying </span>
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
              Futuristic Skills
            </span>{" "}
            <span className="text-white">For Everyone</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              className="flex flex-col bg-gray-900/20 backdrop-blur-sm rounded-2xl p-2 border border-gray-800 hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="bg-gray-900/50 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                <div className="h-60 w-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <div className="w-auto h-60 text-indigo-400">
                      {feature.image}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-xl" />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-medium w-full transition-colors duration-300"
                  onClick={() => navigate(feature.path)}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
