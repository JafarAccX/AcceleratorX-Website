import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ShieldCheck, Zap, Award } from "lucide-react";
import { useCourseContext } from "../../../../context/courseContext";
import EnrollmentModal from "../../../../components/modals/EnrollmentModal";

const PRICING_PLANS = [
    {
        id: "regular",
        name: "Regular Program",
        price: 34999,
        originalPrice: 49999,
        description: "Master the core fundamentals of AI-powered product building.",
        features: [
            "14-Week Live Training",
            "Core Gen AI Curriculum",
            "BYDP Framework Project",
            "Lifetime Community Access",
            "AcceleratorX Certification",
            "Weekly Q&A Sessions"
        ],
        icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
        id: "ibm-premium",
        name: "AcceleratorX + IBM",
        price: 49999,
        originalPrice: 69999,
        description: "Elite co-certified track with advanced enterprise career support.",
        features: [
            "Everything in Regular",
            "IBM Industry Certification",
            "Advanced Career Track",
            "1:1 Personal Mentorship",
            "Enterprise AI Case Studies",
            "Mock Interviews with Experts"
        ],
        isPopular: true,
        icon: <Award className="w-6 h-6 text-orange-500" />
    }
];

export default function GenAIPricing() {
    const { setSelectedCourse } = useCourseContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEnrollClick = (planName: string) => {
        setSelectedCourse(`Gen AI - ${planName}`);
        setIsModalOpen(true);
    };

    return (
        <section id="pricing" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                        Invest in Your <span className="text-orange-500 italic">Future</span>
                    </h2>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        Choose the path that best fits your career goals. Join 2000+ learners building the future of AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PRICING_PLANS.map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative p-8 md:p-12 rounded-[48px] border transition-all duration-500 group ${
                                plan.isPopular 
                                    ? 'bg-[#111] border-orange-500/30 shadow-[0_0_40px_rgba(252,100,1,0.1)]' 
                                    : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#FC6401] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                                    <Star size={12} fill="white" />
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.isPopular ? 'bg-orange-500/10' : 'bg-white/5'}`}>
                                    {plan.icon}
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                                </div>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-gray-600 text-xl font-bold line-through">₹{plan.originalPrice.toLocaleString()}</span>
                                    <span className={`text-5xl md:text-6xl font-bold font-heading italic tracking-tighter ${plan.isPopular ? 'text-orange-500' : 'text-white'}`}>
                                        ₹{plan.price.toLocaleString()}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-4 flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-green-500" />
                                    100% Secure Transaction
                                </p>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className={`mt-1.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-orange-500 text-white' : 'bg-green-500/20 text-green-500'}`}>
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className="text-gray-400 text-sm md:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleEnrollClick(plan.name)}
                                className={`w-full py-5 rounded-[24px] font-heading font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                                    plan.isPopular 
                                        ? 'bg-[#FC6401] hover:bg-[#E55A00] text-white shadow-[0_0_20px_rgba(252,100,1,0.3)]' 
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                }`}
                            >
                                Get Started Now
                                <Zap size={20} className={plan.isPopular ? "fill-white" : ""} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={() => setIsModalOpen(false)} />
        </section>
    );
}
