import { motion } from "framer-motion";

const LOGOS = [
    "/redesign/main-page/logos/0_8MnQXRlwlM7phGBp.png",
    "/redesign/main-page/logos/1b3a2eaf-81bc-4bc5-b4fd-7bf4270f0a82 (1).png",
    "/redesign/main-page/logos/LangChain-logo.png",
    "/redesign/main-page/logos/Mistral-AI-Icon-Logo-Vector.svg-.png",
    "/redesign/main-page/logos/4282cc12-2bfd-40e5-a638-9eaab14d9464.png",
    "/redesign/main-page/logos/cropped-cropped-brush.png",
    "/redesign/main-page/logos/OIP.jpg",
    "/redesign/main-page/logos/OIP (1).jpg",
    "/redesign/main-page/logos/OIP (2).jpg",
    "/redesign/main-page/logos/OIP (3).jpg",
    "/redesign/main-page/logos/OIP (4).jpg",
    "/redesign/main-page/logos/OIP (5).jpg",
    "/redesign/main-page/logos/OIP (6).jpg",
    "/redesign/main-page/logos/OIP (7).jpg",
    "/redesign/main-page/logos/OIP (8).jpg",
    "/redesign/main-page/logos/OIP (9).jpg",
    "/redesign/main-page/logos/OIP (10).jpg",
    "/redesign/main-page/logos/OIP (11).jpg",
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
                        className="text-[#3b82f6] font-bold text-xs tracking-[0.2em] uppercase"
                    >
                        AI TOOLS COVERED
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-light text-white leading-tight"
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
                            className=" p-4 aspect-square flex items-center justify-center hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm"
                        >
                            <img
                                src={logo}
                                alt={`Partner tool ${index + 1}`}
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsCovered;
