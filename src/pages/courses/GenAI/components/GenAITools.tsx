import { motion } from "framer-motion";

const TOOLS = [
    { name: "Microsoft Copilot", src: "/redesign/gen-ai/tools/gemini.png" }, // Placeholder
    { name: "ChatGPT", src: "/redesign/gen-ai/tools/gpt.png" },
    { name: "Claude", src: "/redesign/gen-ai/tools/claude.png" },
    { name: "Gemini", src: "/redesign/gen-ai/tools/gemini.png" },
    { name: "Midjourney", src: "/redesign/gen-ai/tools/midjournry.png" },
    { name: "Runway", src: "/redesign/gen-ai/tools/runway.png" },
    { name: "ElevenLabs", src: "/redesign/gen-ai/tools/eleven-labs.png" },
    { name: "Vapi", src: "/redesign/gen-ai/tools/vapi.png" }, // Using vapi if available
    { name: "Cursor AI", src: "/redesign/gen-ai/tools/cursor.png" },
    { name: "Bolt", src: "/redesign/gen-ai/tools/bolt.png" },
    { name: "Replit", src: "/redesign/gen-ai/tools/replit.png" },
    { name: "LangChain", src: "/redesign/gen-ai/tools/langchain.png" },
    { name: "CrewAI", src: "/redesign/gen-ai/tools/crew-ai.png" },
    { name: "Flowise", src: "/redesign/gen-ai/tools/flowwise.png" },
    { name: "Zapier", src: "/redesign/gen-ai/tools/zapier.png" },
    { name: "Hugging Face", src: "/redesign/gen-ai/tools/huggingface.png" }
];

export default function GenAITools() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                        Mastering <span className="text-orange-500">20+ AI Tools</span>
                    </h2>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        Don't just learn theory. Gain practical experience with the tools used by industry leaders.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                    {TOOLS.map((tool, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-orange-500/30 transition-all group flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-orange-500/10"
                        >
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img 
                                    src={tool.src} 
                                    alt={tool.name} 
                                    className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all" 
                                />
                            </div>
                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center group-hover:text-white transition-colors">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                    
                    {/* Placeholder for '+ more' */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex flex-col items-center justify-center gap-4"
                    >
                        <span className="text-orange-500 font-bold text-2xl">+ 10</span>
                        <span className="text-orange-500/60 text-[10px] font-bold uppercase tracking-widest text-center">
                            Other Tools
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
