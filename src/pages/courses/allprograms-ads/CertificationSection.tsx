import { motion } from "framer-motion";
import { programContent } from "./programsData";

export default function CertificationSection({ program }: { program: any }) {
    const content = programContent[program.label]?.certification;

    if (!content) return null;

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-400 text-sm font-medium mb-8"
                >
                    The Certification
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-6"
                >
                    {content.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-16"
                >
                    {content.description}
                </motion.p>

                {/* Certificate Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-3xl mx-auto"
                >
                    {/* Shadow/Glow effect behind the certificate */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

                    <img
                        src={content.image}
                        alt={`${content.title} Certificate`}
                        className="w-full h-auto rounded-lg shadow-2xl border border-white/5"
                    />
                </motion.div>
            </div>
        </section>
    );
}
