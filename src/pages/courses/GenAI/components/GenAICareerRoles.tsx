import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";

const ROLES = [
    {
        title: "AI Content Systems Builder",
        salary: "₹8L - ₹22L",
        demand: "Very High",
        icon: <Briefcase className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Conversational AI Designer",
        salary: "₹10L - ₹25L",
        demand: "GrowingFast",
        icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
        title: "GenAI Solutions Architect",
        salary: "₹15L - ₹40L",
        demand: "High",
        icon: <Briefcase className="w-6 h-6 text-purple-500" />
    },
    {
        title: "AI Product Manager",
        salary: "₹12L - ₹35L",
        demand: "Niche",
        icon: <Briefcase className="w-6 h-6 text-green-500" />
    },
    {
        title: "AI Workflow Automation Engineer",
        salary: "₹9L - ₹20L",
        demand: "High",
        icon: <TrendingUp className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "AI Strategy Consultant",
        salary: "₹18L - ₹45L",
        demand: "Critical",
        icon: <Briefcase className="w-6 h-6 text-pink-500" />
    }
];

export default function GenAICareerRoles() {
    return (
        <section className="py-24 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
             {/* Background Grid Pattern */}
             <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #FC6401 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-20">
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                        Unlock <span className="text-orange-500">New Career Paths</span>
                    </h2>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        The AI landscape is creating entirely new roles. Prepare yourself for the most in-demand and highest-paying positions globally.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ROLES.map((role, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[40px] bg-[#111] border border-white/5 hover:border-orange-500/20 transition-all text-center group relative overflow-hidden h-full flex flex-col justify-between"
                        >
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[40px] rounded-full group-hover:bg-orange-500/10 transition-colors" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                                    {role.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-white mb-2 leading-tight">
                                    {role.title}
                                </h3>
                                <p className="font-sans text-gray-400 text-xs uppercase tracking-widest mb-6">
                                    Salary Range
                                </p>
                                <div className="font-heading text-3xl font-bold text-orange-500 mb-2">
                                    {role.salary}
                                </div>
                                <p className="font-sans text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-auto">
                                    Demand: <span className="text-gray-400">{role.demand}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
