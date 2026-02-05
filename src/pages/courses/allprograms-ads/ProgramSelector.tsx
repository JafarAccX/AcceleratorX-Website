import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const programs = [
    {
        label: "AI PM",
        title: "Nano Degree in AI Product Management",
        description: "Build real AI products in 4 months with hands-on tools, case studies, and an 18-week AI PM roadmap...",
        color: "text-purple-500",
        hoverBorder: "hover:border-purple-500/30",
        link: "/courses/product-management"
    },
    {
        label: "Gen AI",
        title: "Generative AI & AI Automation Program",
        description: "Master Generative AI and automation in 4 months by building real AI agents and business workflows with 20+ tool...",
        color: "text-orange-500",
        hoverBorder: "hover:border-orange-500/30",
        link: "/courses/generative-ai"
    },
    {
        label: "AI DA",
        title: "AI Data Analytics Program",
        description: "Become a job-ready AI Data Analyst in 6 months by building real dashboards and business-driven analytics with 20...",
        color: "text-blue-500",
        hoverBorder: "hover:border-blue-500/30",
        link: "/courses/data-analytics"
    },
    {
        label: "AI DM",
        title: "Nano Degree in AI Digital Marketing",
        description: "Launch your AI marketing career in 4 months by building real marketing automations with 20+ AI tools...",
        color: "text-emerald-500",
        hoverBorder: "hover:border-emerald-500/30",
        link: "/courses/ai-digital-marketing"
    },
    {
        label: "Crash Course",
        title: "Advanced AI Crash Course",
        description: "Fast-track your AI skills in 6 weeks by building real AI systems and automations across business use cas...",
        color: "text-yellow-500",
        hoverBorder: "hover:border-yellow-500/30",
        link: "/courses/all-programs"
    }
];

interface ProgramSelectorProps {
    onSelectProgram: (program: typeof programs[0]) => void;
}

export default function ProgramSelector({ onSelectProgram }: ProgramSelectorProps) {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-300 text-sm font-medium mb-8"
                    >
                        Choose Your AI Career Path
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-4xl md:text-5xl font-bold mb-4"
                    >
                        Pick the AI Program That Fits Your Career Goals
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Gain skills and get hired

                    </motion.p>
                </div>




                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-7xl my-8 mx-auto leading-relaxed text-center"
                >
                    Choosing the right path starts with selecting an AI course that aligns with your
                    long-term career goals. AccelratorX offers structured AI upskilling programs across AI
                    product management, generative AI and AI automation, AI data analytics, and AI
                    digital marketing, designed for real industry roles. Each AI certification program
                    focuses on practical learning. Whether you enroll in an AI product management
                    course, a project-driven generative AI course, an AI data analytics course or an IA
                    digital marketing course, you gain job-ready skills that employers value. These
                    programs are ideal for professionals and freshers looking to build AI skills and get
                    hired or switch into AI roles.

                </motion.p>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`p-8 rounded-[32px] bg-[#111] border border-white/5 transition-all duration-300 flex flex-col h-full ${program.hoverBorder}`}
                        >
                            <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${program.color}`}>
                                {program.label}
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-6 leading-tight">
                                {program.title}
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                                {program.description}
                            </p>
                            <button
                                onClick={() => {
                                    onSelectProgram(program);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`inline-flex items-center gap-2 font-semibold transition-colors group ${program.color} hover:opacity-80 text-left w-fit`}
                            >
                                Read more
                                <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
