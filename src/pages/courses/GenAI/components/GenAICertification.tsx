import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function GenAICertification() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-widest text-[10px] font-bold">
                        <span className="text-orange-500">OFFICIAL</span>
                        <span className="text-gray-500">CERTIFICATION</span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                        Earn Your <span className="text-orange-500 italic text-5xl md:text-7xl">Industry Badge</span>
                    </h2>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        Get recognized by the world's leading tech organizations. Our certification is recognized globally for its rigorous standards and practical focus.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Certificate Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Glow effect behind the certificate */}
                        <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full -z-10" />
                        
                        <div className="p-4 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-3xl overflow-hidden shadow-2xl">
                            <img 
                                src="/all-programs-amit-camp/Nano Degree in AI Product Management" // Using existing image if possible
                                alt="Gen AI Certificate" 
                                className="w-full h-auto rounded-2xl shadow-lg brightness-90 group-hover:brightness-100 transition-all"
                            />
                        </div>

                        {/* Floating elements */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 lg:-right-10 bg-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-gray-100"
                        >
                            <Award className="text-orange-500" size={20} />
                            <span className="text-black font-bold text-sm">IBM Co-Certified</span>
                        </motion.div>
                    </motion.div>

                    {/* Right: Benefits/Details */}
                    <div className="text-left space-y-10">
                        <div className="space-y-4">
                            <h3 className="font-heading text-3xl font-bold text-white">AcceleratorX + IBM Honors</h3>
                            <p className="font-sans text-gray-500 leading-relaxed">
                                Upon successful completion of the course and capstone project, you will receive a dual certification that highlights your mastery of both foundational and enterprise-level AI.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="font-sans font-medium text-lg">Globally Recognized Credential</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="font-sans font-medium text-lg">Verified Skills Badge (LinkedIn Ready)</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="font-sans font-medium text-lg">IBM Professional Network Access</span>
                            </div>
                        </div>

                        <div className="p-6 bg-[#111] border border-white/5 rounded-3xl flex items-center gap-6">
                            <ShieldCheck className="text-orange-500 flex-shrink-0" size={32} />
                            <div>
                                <h4 className="font-heading text-white font-bold">100% Verified</h4>
                                <p className="font-sans text-gray-500 text-sm">Each certificate comes with a unique ID for employer verification via AcceX Verify.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global background decoration */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
