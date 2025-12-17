import { Maximize2, Zap, Wand2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// const cardAnimation = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// Feature Card Component for better organization
const FeatureCard = ({
  feature,
  // index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={feature.title}

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
        <button
          onClick={() => navigate(feature.path)}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
};

const features = [
  {
    icon: <Maximize2 className="w-8 h-8" />,
    title: "AI Product Management",
    description:
      "Drive with data, develop with clarity, and innovate with impact. This program combines AI product frameworks, analytics, and growth strategy to help you design scalable products from scratch that users love.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 200 200">
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

        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"

        >
          {/* Main diamond container */}
          <path
            d="M100 50L150 100L100 150L50 100Z"
          />

          {/* Four circles in corners */}
          {[
            { cx: 70, cy: 70, delay: 0 },
            { cx: 130, cy: 70, delay: 0.5 },
            { cx: 130, cy: 130, delay: 1 },
            { cx: 70, cy: 130, delay: 1.5 },
          ].map((circle, index) => (
            <circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r="20"

            />
          ))}

          {/* Animated dots */}
          {[
            { cx: 70, cy: 70, delay: 0 },
            { cx: 130, cy: 70, delay: 0.5 },
            { cx: 130, cy: 130, delay: 1 },
            { cx: 70, cy: 130, delay: 1.5 },
          ].map((dot, index) => (
            <circle
              key={`dot-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r="3"
              fill="currentColor"

            />
          ))}
        </g>
      </svg>
    ),
    path: "/courses/product-management",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Data Analytics",
    description:
      "Modify data into insights. Develop thoughtful expertise in AI analytics and storytelling, encouraging you to make AI Analytical decisions that drive growth.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 200 200">
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

        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"

        >
          {/* Concentric circles */}
          {[60, 45, 30].map((radius, index) => (
            <circle
              key={`circle-${index}`}
              cx="100"
              cy="100"
              r={radius}
            />
          ))}

          {/* Orbiting points */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => {
            const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
            return (
              <g key={`orbit-${index}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill="currentColor"
                />
                <line
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}

                />
              </g>
            );
          })}

          {/* Center point */}
          <circle
            cx="100"
            cy="100"
            r="4"
            fill="currentColor"

          />
        </g>
      </svg>
    ),
    path: "/courses/data-analytics",
  },
  // {
  //   icon: <Code2 className="w-8 h-8" />,
  //   title: "No Code Tools",
  //   description:
  //     "Master the art of building powerful applications without writing code. Learn to leverage modern no-code platforms to create scalable solutions, automate workflows, and bring your ideas to life faster than ever before.",
  //   image: (
  //     <svg className="w-full h-full" viewBox="0 0 200 200">
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

  //       <g
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
  //           <path
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
  //           <path
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
  //           <circle
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
  //       </g>
  //     </svg>
  //   ),
  //   path: "/courses/no-code-tool-program",
  // },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Generative AI",
    description:
      "Scale in your future with Generative AI. Learn how to use language models, prompt engineering, and AI automation to create solutions without writing a single line of code.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 200 200">
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

        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"

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
            <circle
              key={`node-${index}`}
              cx={cx}
              cy={cy}
              r="8"

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
            <line
              key={`connection-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}

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
            <circle
              key={`pulse-${index}`}
              cx={cx}
              cy={cy}
              r="4"
              fill="currentColor"

            />
          ))}
        </g>
      </svg>
    ),
    path: "/courses/generative-ai",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "AI Digital Marketing",
    description:
      "Reshape your Creativity with AI Digital Marketing Learn the art of AI-powered automation, personalisation, and performance optimisation to craft that truly converts.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 200 200">
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

        <g

        >
          {/* Animated Bar Chart Representing Digital Marketing Metrics */}
          {[
            { x: 20, initialHeight: 20, targetHeight: 60, delay: 0 },
            { x: 50, initialHeight: 30, targetHeight: 70, delay: 0.1 },
            { x: 80, initialHeight: 25, targetHeight: 55, delay: 0.2 },
            { x: 110, initialHeight: 35, targetHeight: 65, delay: 0.3 },
            { x: 140, initialHeight: 20, targetHeight: 50, delay: 0.4 },
          ].map(({ x }, index) => (
            <rect
              key={`bar-${index}`}
              x={x}
              width="10"

              fill="currentColor"
            />
          ))}

          {/* Animated Polyline Connecting the Top Centers of the Bars */}
          <polyline
            points="25,110 55,100 85,115 115,105 145,120"

            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
    path: "/courses/ai-digital-marketing",
  },
  // {
  //   icon: <Wand2 className="w-8 h-8" />,
  //   title: "GenAI for Product Managers",
  //   description:
  //     "Understand how to use GenAI for Product Managers and become an AI-Powered Product Manager that builds and ships AI products end-to-end. Build your own real project, Automate workflows, and make smarter product decisions, no coding required.",
  //   image: (
  //     <svg className="w-full h-full" viewBox="0 0 200 200">
  //       <defs>
  //         <pattern
  //           id="grid5"
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
  //       <rect width="200" height="200" fill="url(#grid5)" />

  //       <g
  //         stroke="currentColor"
  //         fill="none"
  //         strokeWidth="1.5"

  //       >
  //         {/* Neural network nodes */}
  //         {[
  //           [50, 60],
  //           [50, 100],
  //           [50, 140],
  //           [100, 80],
  //           [100, 120],
  //           [150, 100],
  //         ].map(([cx, cy], index) => (
  //           <circle
  //             key={`node-${index}`}
  //             cx={cx}
  //             cy={cy}
  //             r="8"

  //           />
  //         ))}

  //         {/* Neural network connections */}
  //         {[
  //           [50, 60, 100, 80],
  //           [50, 60, 100, 120],
  //           [50, 100, 100, 80],
  //           [50, 100, 100, 120],
  //           [50, 140, 100, 80],
  //           [50, 140, 100, 120],
  //           [100, 80, 150, 100],
  //           [100, 120, 150, 100],
  //         ].map(([x1, y1, x2, y2], index) => (
  //           <line
  //             key={`connection-${index}`}
  //             x1={x1}
  //             y1={y1}
  //             x2={x2}
  //             y2={y2}

  //           />
  //         ))}

  //         {/* Pulse effect */}
  //         {[
  //           [50, 60],
  //           [50, 100],
  //           [50, 140],
  //           [100, 80],
  //           [100, 120],
  //           [150, 100],
  //         ].map(([cx, cy], index) => (
  //           <circle
  //             key={`pulse-${index}`}
  //             cx={cx}
  //             cy={cy}
  //             r="4"
  //             fill="currentColor"

  //           />
  //         ))}
  //       </g>
  //     </svg>
  //   ),
  //   path: "/courses/genai-for-product-managers",
  // },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative   py-20 overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute  inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] over" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div

          className="text-center mb-12"
        >
          <p className="text-3xl md:text-4xl font-bold text-white pb-2">
            Browse Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">AI Career Programs</span>
          </p>
          <p className="text-gray-400 text-lg">
            Learn the Skills that will shape your career
          </p>
        </div>

        {/* Feature Cards Container */}
        <div className="flex flex-col md:flex-row flex-nowrap gap-6 overflow-x-auto -4 snap-x snap-mandatory">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
