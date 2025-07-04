"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const aiTools = [
  {
    name: "Airtable",
    logo: "/assets/n8n/airtable.webp",
    description: "Flexible database and spreadsheet for teams and automation workflows.",
  },
  {
    name: "ClickUp",
    logo: "/assets/n8n/clickup.webp",
    description: "All-in-one productivity platform for project and task management.",
  },
  {
    name: "Cursor",
    logo: "/assets/n8n/Cursor.webp",
    description: "AI-powered code editor built for pair programming with GPT.",
  },
  {
    name: "Gmail",
    logo: "/assets/n8n/gmail.webp",
    description: "Widely-used email platform, great for integrating notification systems.",
  },
  {
    name: "HubSpot",
    logo: "/assets/n8n/hubspot.webp",
    description: "Powerful CRM for marketing, sales, and customer service automation.",
  },
  {
    name: "Lovable",
    logo: "/assets/n8n/Lovable.webp",
    description: "Tool unknown — please update description accordingly.",
  },
  {
    name: "Notion",
    logo: "/assets/n8n/notion.webp",
    description: "Workspace for notes, docs, wikis, and collaboration with AI support.",
  },
  {
    name: "OpenAI",
    logo: "/assets/n8n/openai.webp",
    description: "AI research lab powering GPT models for language and reasoning tasks.",
  },
  {
    name: "Replit",
    logo: "/assets/n8n/replit.webp",
    description: "Collaborative browser-based coding platform with AI coding tools.",
  },
  {
    name: "Google Sheets",
    logo: "/assets/n8n/sheets.webp",
    description: "Online spreadsheet tool for data manipulation and reporting.",
  },
  {
    name: "Slack",
    logo: "/assets/n8n/slack.webp",
    description: "Team messaging platform with bots and integrations for workflows.",
  },
  {
    name: "Stripe",
    logo: "/assets/n8n/stripe.webp",
    description: "Payment platform for processing online transactions securely.",
  },
  {
    name: "Trello",
    logo: "/assets/n8n/trello.webp",
    description: "Visual task and project management using boards and cards.",
  },
  {
    name: "Windsurf",
    logo: "/assets/n8n/windsurf.webp",
    description: "Tool unknown — please update description accordingly.",
  },
];

export default function WSTools() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-[#0a0f1c] to-[#0b0a12] text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96   rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem]   rounded-full blur-3xl z-0" />

      {/* Title */}
      <div className="relative z-10 text-center px-4 mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tools & Frameworks Covered
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get hands-on with tools like
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
            <div className="rounded-2xl p-2 backdrop-blur-md shadow-lg transition-all hover:border-white/20 w-full max-w-[60px] h-[60px] flex flex-col items-center justify-center">
              <img src={tool.logo} alt={tool.name} className=" object-fill mb-2" />
            </div>
            <p className="text-white text-sm font-medium">{tool.name}</p>

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
