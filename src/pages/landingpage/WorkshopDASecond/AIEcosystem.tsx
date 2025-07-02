"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const aiTools = [
  {
    name: "LangChain",
    logo: "/assets/genAITools/langchain-seeklogo.png",
    description:
      "Framework for building LLM-powered apps using chains, memory, and agents.",
  },
  {
    name: "OpenAI",
    logo: "/assets/genAITools/openai-logomark.svg",
    description:
      "Access GPT-4 and other cutting-edge models to power your AI logic.",
  },
  {
    name: "Pinecone",
    logo: "/assets/genAITools/pinecone.webp",
    description: "High-speed vector database for storing and querying embeddings.",
  },
  {
    name: "Weaviate",
    logo: "/assets/genAITools/weaviate.webp",
    description:
      "AI-native vector database enabling semantic search and hybrid queries.",
  },
  {
    name: "Supabase",
    logo: "/assets/genAITools/supabase.webp",
    description:
      "Postgres-based backend with auth, storage, and real-time support.",
  },
  {
    name: "Vercel",
    logo: "/assets/genAITools/vercel.webp",
    description:
      "Fast, scalable deployment platform ideal for fullstack AI apps.",
  },
];

export default function AIEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-[#0a0f1c] to-[#0b0a12] text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl z-0" />

      {/* Title */}
      <div className="relative z-10 text-center px-4 mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Your Own AI Agent
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Master the ecosystem of tools to create intelligent, autonomous, and real-world AI agents.
        </motion.p>
      </div>

      {/* Tool Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-4 max-w-6xl mx-auto">
        {aiTools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="group relative flex flex-col items-center text-center transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHovered(tool.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-lg transition-all hover:border-white/20 w-full max-w-[120px] h-[120px] flex flex-col items-center justify-center">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="text-white text-sm font-medium">{tool.name}</p>
            </div>

            {/* Tooltip on hover */}
            {hovered === tool.name && (
              <div className="absolute -top-20 w-56 bg-white text-black p-3 rounded-lg shadow-xl text-sm z-20 transition-all">
                {tool.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
