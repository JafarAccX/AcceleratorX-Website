import { motion } from "framer-motion";
import { TrendingUp, Award, Zap } from "lucide-react";

export default function GenAIGrowthChart() {
    return (
        <section className="py-24 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Accelerate Your <br />
                            <span className="text-[#FC6401]">Career Growth</span>
                        </h2>
                        
                        <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                            Traditional learning paths are slow. In the age of AI, you need a high-impact curriculum that delivers real financial outcomes.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold text-white mb-1">42.8% Average CAGR</h4>
                                    <p className="font-sans text-gray-500 text-sm">Experience faster salary increments by mastering the latest AI tools and workflows.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold text-white mb-1">Total Gain of ₹21L+</h4>
                                    <p className="font-sans text-gray-500 text-sm">Our alumni report significant career jumps within 12 months of completion.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Growth Comparison */}
                    <div className="relative">
                        <div className="bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-12 relative z-10 overflow-hidden group">
                            {/* Growth Indicators */}
                            <div className="space-y-12 relative z-10">
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <h5 className="font-heading text-white font-bold opacity-40">Traditional Learning</h5>
                                        <span className="text-gray-600 font-bold">10% Growth</span>
                                    </div>
                                    <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "20%" }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-gray-700 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <h5 className="font-heading text-orange-500 font-bold">AI-Powered Learning</h5>
                                        <span className="text-orange-500 font-bold">42.8% CAGR</span>
                                    </div>
                                    <div className="w-full h-8 bg-orange-500/10 rounded-full overflow-hidden border border-orange-500/20">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full relative group-hover:from-orange-400 group-hover:to-orange-500 transition-all shadow-[0_0_20px_rgba(252,100,1,0.3)]"
                                        >
                                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] bg-[length:200%_100%] animate-shimmer" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Badge */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-gray-100"
                            >
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Alumni Impact</p>
                                    <p className="text-black font-heading text-2xl font-bold italic tracking-tighter">₹21L+ Total Gain</p>
                                </div>
                            </motion.div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-orange-500/5 blur-[100px] rounded-full -z-0 pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
