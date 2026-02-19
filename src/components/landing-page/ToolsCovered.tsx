import { motion } from "framer-motion";

const LOGOS = [
    "/redesign/advance-gen-ai/tools/BGEm3.png",
    "/redesign/advance-gen-ai/tools/Bitsandbytes.png",
    "/redesign/advance-gen-ai/tools/Blip.png",
    "/redesign/advance-gen-ai/tools/Chroma.png",
    "/redesign/advance-gen-ai/tools/Clipsai.png",
    "/redesign/advance-gen-ai/tools/Crewai.png",
    "/redesign/advance-gen-ai/tools/Cuda.png",
    "/redesign/advance-gen-ai/tools/Datasets.png",
    "/redesign/advance-gen-ai/tools/Docker.png",
    "/redesign/advance-gen-ai/tools/Fastapi.png",
    "/redesign/advance-gen-ai/tools/Gemma.png",
    "/redesign/advance-gen-ai/tools/Gradio.png",
    "/redesign/advance-gen-ai/tools/Instructorxl.png",
    "/redesign/advance-gen-ai/tools/Langchain.png",
    "/redesign/advance-gen-ai/tools/Langfuse.png",
    "/redesign/advance-gen-ai/tools/LangGraph.png",
    "/redesign/advance-gen-ai/tools/Llama3.png",
    "/redesign/advance-gen-ai/tools/Llm.png",
    "/redesign/advance-gen-ai/tools/lora.png",
    "/redesign/advance-gen-ai/tools/Mistralai.png",
    "/redesign/advance-gen-ai/tools/Ollama.png",
    "/redesign/advance-gen-ai/tools/Peft.png",
    "/redesign/advance-gen-ai/tools/Python.png",
    "/redesign/advance-gen-ai/tools/pytorch.png",
    "/redesign/advance-gen-ai/tools/Transformers.png",
    "/redesign/advance-gen-ai/tools/Weights&Biases.png"
];

const ToolsCovered = () => {
    return (
        <section className=" py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Left Content */}
                <div className="lg:w-1/3 text-center lg:text-left space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans text-[#3b82f6] font-bold text-xs tracking-[0.2em] uppercase"
                    >
                        AI TOOLS COVERED
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl font-light text-white leading-tight"
                    >
                        Master the AI Stack <br />
                        <span className="font-medium">Professionals Actually Use</span>
                    </motion.h2>
                </div>

                {/* Right Content - Logo Grid */}
                <div className="lg:w-2/3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
                    {LOGOS.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className=" p-4  flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
                        >
                            <img
                                src={logo}
                                alt={`Partner tool ${index + 1}`}
                                className="w-full h-full object-contain transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsCovered;
