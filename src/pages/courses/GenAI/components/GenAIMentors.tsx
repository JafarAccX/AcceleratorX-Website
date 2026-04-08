import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const MENTORS = [
    {
        name: "Arshiya",
        role: "AI Product Manager",
        company: "Google",
        image: "/redesign/gen-ai/gen-ai-mentors/Anjali Sharma.png", // Placeholder
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Hrituraj",
        role: "Senior AI Engineer",
        company: "AcceleratorX",
        image: "/redesign/gen-ai/gen-ai-mentors/Pranali Bose.png", // Placeholder
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Mentor 3",
        role: "GenAI Expert",
        company: "Top AI Lab",
        image: "/redesign/gen-ai/gen-ai-mentors/Anjali Sharma.png", // Placeholder
        linkedin: "https://www.linkedin.com/",
    },
];

export default function GenAIMentors() {
    return (
        <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 italic">
                            Our mentors
                        </h2>
                        <p className="font-sans text-gray-500 max-w-md">
                            Learn directly from industry experts who are building the future of AI at top companies.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MENTORS.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                                {/* Mentor Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-sans text-xs uppercase tracking-tighter opacity-10">
                                    Mentor Image
                                </div>
                                
                                {/* Placeholder for actual image */}
                                <div className="relative z-10 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                                    <div className="w-full h-full bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent absolute inset-0 z-20" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h3 className="font-heading text-2xl font-bold text-white">
                                            {mentor.name}
                                        </h3>
                                        <a
                                            href={mentor.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg"
                                        >
                                            <Linkedin size={18} fill="currentColor" />
                                        </a>
                                    </div>
                                    <p className="font-sans text-blue-400 font-medium text-sm mb-1 uppercase tracking-widest">
                                        {mentor.role}
                                    </p>
                                    <p className="font-sans text-gray-500 text-sm">
                                        {mentor.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
