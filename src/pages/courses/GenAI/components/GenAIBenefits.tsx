import { motion } from "framer-motion";
import { Users, Presentation, Video } from "lucide-react";

const BENEFITS = [
    {
        title: "1:1 Mentorship",
        description: "Get personalized guidance from industry experts to refine your skills and career strategy.",
        icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
        title: "Practical Implementation",
        description: "Learn by doing with hands-on projects that mirror real-world business challenges.",
        icon: <Presentation className="w-8 h-8 text-orange-500" />
    },
    {
        title: "Live Interactive Classes",
        description: "Engage in real-time with mentors and peers to solve problems and share insights.",
        icon: <Video className="w-8 h-8 text-orange-500" />
    }
];

export default function GenAIBenefits() {
    return (
        <section className="py-24 bg-[#0A0A0A] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                        Program Benefits
                    </h2>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        Our program is designed to provide you with the support and tools necessary for a successful career transition into AI.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {BENEFITS.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-orange-500/20 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-white mb-4">
                                {benefit.title}
                            </h3>
                            <p className="font-sans text-gray-500 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
