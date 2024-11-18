import React from "react";
import { Shield, Boxes, Wallet, LineChart } from "lucide-react";
import { motion, useInView } from "framer-motion";

const IdentityCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative w-full h-48 bg-black rounded-lg overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
        }
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 bg-gray-700/50 backdrop-blur-sm rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="w-12 h-12 bg-blue-500/30 rounded-full"
            animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 0.8],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 2,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${50 + 35 * Math.cos((2 * Math.PI * i) / 8)}%`,
                top: `${50 + 35 * Math.sin((2 * Math.PI * i) / 8)}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const BlockchainCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative w-full h-48 bg-black rounded-lg overflow-hidden group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-900/30 backdrop-blur-sm rounded-lg"
          animate={
            isInView
              ? {
                  rotate: 45,
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0px rgba(59, 130, 246, 0.2)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500/50 rounded-sm"
                animate={
                  isInView
                    ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AssetCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      ref={ref}
      className="relative w-full h-48 bg-black rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-12 border-2 border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm"
              animate={{
                borderColor: isInView
                  ? ["rgb(55, 65, 81)", "rgb(59, 130, 246)", "rgb(55, 65, 81)"]
                  : "rgb(55, 65, 81)",
                scale: i === 2 && isInView ? (isHovered ? 1.2 : 1) : 1,
              }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                scale: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={
            isInView
              ? {
                  y: [-4, 4, -4],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
            animate={
              isInView
                ? {
                    boxShadow: [
                      "0 0 0 0px rgba(59, 130, 246, 0.2)",
                      "0 0 0 8px rgba(59, 130, 246, 0)",
                    ],
                  }
                : {}
            }
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="w-8 h-8 bg-blue-500 rounded-lg"
              animate={isInView ? { rotate: 360 } : {}}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ScalabilityCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative w-full h-48 bg-black rounded-lg overflow-hidden group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 border-r border-gray-700"
              style={{
                left: `${(100 * i) / 12}%`,
                height: "100%",
              }}
            >
              <motion.div
                className="absolute w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"
                animate={
                  isInView
                    ? {
                        y: ["0%", "100%", "0%"],
                        opacity: [0, 1, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const features = [
  {
    title: "Build Your Dream Product",
    description:
      "Empower yourself to ideate, design, and launch a product from scratch, mastering every stage of the product lifecycle with real-world tools and insights.",
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    className: "md:col-span-1",
    image: <IdentityCard />,
  },
  {
    title: "BYDP: Transforming Ideas into Market-Ready Products",
    description:
      "From user research to go-to-market strategy, BYDP guides you through a structured journey to build, test, and present a product that solves real problems.",
    icon: <Boxes className="w-12 h-12 text-blue-500" />,
    className: "md:col-span-2",
    image: <BlockchainCard />,
  },
  {
    title: "Hands-On Product Building Experience",
    description:
      "Gain real-time skills in product management by building and managing your own product idea from concept to execution, with full guidance and resources.",
    icon: <Wallet className="w-12 h-12 text-blue-500" />,
    className: "md:col-span-2",
    image: <AssetCard />,
  },
  {
    title: "Scalable Product Management Skills",
    description:
      "Learn scalable strategies and frameworks that equip you to handle products of any size and complexity, preparing you for real-world industry demands.",
    icon: <LineChart className="w-12 h-12 text-blue-500" />,
    className: "md:col-span-1",
    image: <ScalabilityCard />,
  },
];
