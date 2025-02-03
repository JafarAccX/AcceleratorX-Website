import { motion } from "framer-motion";
import { Maximize2, Zap, Wand2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animation variants for better reusability
const containerAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Feature Card Component for better organization
const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      key={feature.title}
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-none w-full md:w-[300px] snap-center"
    >
      <div className="relative h-[400px] p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 border-r-2 border-b-2 border-r-blue-500/20 border-b-blue-500/20 transition-colors group">
        {/* Icon and Title Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
        </div>

        {/* Description Section */}
        <p className="text-sm text-gray-400 mb-6 line-clamp-4">
          {feature.description}
        </p>

        {/* SVG Animation Container */}
        <div className="absolute inset-x-0 bottom-16 h-48 p-6">
          <div className="w-full h-full text-blue-500/50 group-hover:text-blue-400/50 transition-colors">
            {feature.image}
          </div>
        </div>

        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(feature.path)}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
};

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
  // {
  //   icon: <Code2 className="w-8 h-8" />,
  //   title: "No Code Tools",
  //   description:
  //     "Master the art of building powerful applications without writing code. Learn to leverage modern no-code platforms to create scalable solutions, automate workflows, and bring your ideas to life faster than ever before.",
  //   image: (
  //     <motion.svg className="w-full h-full" viewBox="0 0 200 200">
  //       <defs>
  //         <pattern
  //           id="grid3"
  //           width="20"
  //           height="20"
  //           patternUnits="userSpaceOnUse"
  //         >
  //           <path
  //             d="M 20 0 L 0 0 0 20"
  //             fill="none"
  //             stroke="currentColor"
  //             strokeWidth="0.5"
  //             strokeOpacity="0.1"
  //           />
  //         </pattern>
  //       </defs>
  //       <rect width="200" height="200" fill="url(#grid3)" />

  //       <motion.g
  //         stroke="currentColor"
  //         fill="none"
  //         strokeWidth="1.5"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 1 }}
  //       >
  //         {/* Puzzle pieces animation */}
  //         {[
  //           "M50,50 h40 v40 h-40 Z",
  //           "M110,50 h40 v40 h-40 Z",
  //           "M50,110 h40 v40 h-40 Z",
  //           "M110,110 h40 v40 h-40 Z",
  //         ].map((path, index) => (
  //           <motion.path
  //             key={`puzzle-${index}`}
  //             d={path}
  //             initial={{ pathLength: 0, opacity: 0 }}
  //             animate={{ pathLength: 1, opacity: 1 }}
  //             transition={{
  //               duration: 1.5,
  //               delay: index * 0.3,
  //               repeat: Infinity,
  //               repeatType: "reverse",
  //               repeatDelay: 0.5,
  //             }}
  //           />
  //         ))}

  //         {/* Connecting lines */}
  //         {[
  //           "M90,70 h20",
  //           "M70,90 v20",
  //           "M130,90 v20",
  //           "M90,130 h20",
  //         ].map((path, index) => (
  //           <motion.path
  //             key={`connection-${index}`}
  //             d={path}
  //             initial={{ pathLength: 0, opacity: 0 }}
  //             animate={{ pathLength: 1, opacity: [0, 1, 0] }}
  //             transition={{
  //               duration: 2,
  //               delay: index * 0.2,
  //               repeat: Infinity,
  //               repeatDelay: 0.5,
  //             }}
  //           />
  //         ))}

  //         {/* Animated dots at intersections */}
  //         {[
  //           { cx: 90, cy: 70 },
  //           { cx: 70, cy: 90 },
  //           { cx: 130, cy: 90 },
  //           { cx: 90, cy: 130 },
  //         ].map((pos, index) => (
  //           <motion.circle
  //             key={`dot-${index}`}
  //             cx={pos.cx}
  //             cy={pos.cy}
  //             r="3"
  //             fill="currentColor"
  //             initial={{ scale: 0 }}
  //             animate={{ scale: [0, 1, 0] }}
  //             transition={{
  //               duration: 1.5,
  //               delay: index * 0.2,
  //               repeat: Infinity,
  //               repeatDelay: 0.5,
  //             }}
  //           />
  //         ))}
  //       </motion.g>
  //     </motion.svg>
  //   ),
  //   path: "/courses/no-code-tool-program",
  // },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Generative AI",
    description:
      "Dive into the revolutionary world of Generative AI. Learn to harness the power of large language models, create AI-powered applications, and understand the principles behind neural networks that are reshaping the future of technology.",
    image: (
      <motion.svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="grid4"
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
        <rect width="200" height="200" fill="url(#grid4)" />

        <motion.g
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Neural network nodes */}
          {[
            [50, 60],
            [50, 100],
            [50, 140],
            [100, 80],
            [100, 120],
            [150, 100],
          ].map(([cx, cy], index) => (
            <motion.circle
              key={`node-${index}`}
              cx={cx}
              cy={cy}
              r="8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              }}
            />
          ))}

          {/* Neural network connections */}
          {[
            [50, 60, 100, 80],
            [50, 60, 100, 120],
            [50, 100, 100, 80],
            [50, 100, 100, 120],
            [50, 140, 100, 80],
            [50, 140, 100, 120],
            [100, 80, 150, 100],
            [100, 120, 150, 100],
          ].map(([x1, y1, x2, y2], index) => (
            <motion.line
              key={`connection-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          ))}

          {/* Pulse effect */}
          {[
            [50, 60],
            [50, 100],
            [50, 140],
            [100, 80],
            [100, 120],
            [150, 100],
          ].map(([cx, cy], index) => (
            <motion.circle
              key={`pulse-${index}`}
              cx={cx}
              cy={cy}
              r="4"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
    ),
    path: "/courses/generative-ai",
  },
];

export default function Features() {
  return (
    <section className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-7xl mx-auto py-12">
        {/* Section Header */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-blue-600 text-transparent bg-clip-text pb-2">
            Explore Our Courses
          </h2>
          <p className="text-gray-400 text-lg">
            Master the skills that shape tomorrow's technology landscape
          </p>
        </motion.div>

        {/* Feature Cards Container */}
        <div className="flex flex-col md:flex-row flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
