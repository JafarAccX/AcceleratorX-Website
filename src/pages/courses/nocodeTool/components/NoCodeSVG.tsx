import { motion } from "framer-motion";

export function NoCodeSVG() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Window Frame */}
        <motion.rect
          x="50"
          y="50"
          width="300"
          height="300"
          rx="10"
          fill="#111111"
          stroke="#0066FF"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Window Header */}
        <motion.rect
          x="50"
          y="50"
          width="300"
          height="30"
          rx="10"
          fill="#0066FF"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Window Buttons */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={75 + i * 20}
            cy={65}
            r="5"
            fill="#FFFFFF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          />
        ))}

        {/* Code Lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.g key={i}>
            <motion.rect
              x="70"
              y={100 + i * 40}
              width={120 + Math.random() * 100}
              height="8"
              rx="4"
              fill="#0066FF"
              opacity="0.3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
            />
            <motion.rect
              x="70"
              y={115 + i * 40}
              width={80 + Math.random() * 120}
              height="8"
              rx="4"
              fill="#FFFFFF"
              opacity="0.1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
            />
          </motion.g>
        ))}

        {/* Floating Elements */}
        {[
          { x: 280, y: 120, size: 30 },
          { x: 300, y: 180, size: 20 },
          { x: 270, y: 240, size: 25 },
        ].map((el, i) => (
          <motion.g key={i}>
            <motion.rect
              x={el.x}
              y={el.y}
              width={el.size}
              height={el.size}
              rx="5"
              fill="#0066FF"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [el.y - 10, el.y, el.y - 10],
              }}
              transition={{
                duration: 2,
                delay: 1.5 + i * 0.2,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.rect
              x={el.x + 5}
              y={el.y + 5}
              width={el.size - 10}
              height={el.size - 10}
              rx="3"
              fill="#FFFFFF"
              opacity="0.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.7 + i * 0.2 }}
            />
          </motion.g>
        ))}

        {/* Connecting Lines */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M${240 + i * 20},120 C${280 + i * 10},160 ${260 + i * 10},200 ${
              290 + i * 5
            },240`}
            stroke="#0066FF"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2 + i * 0.2 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
