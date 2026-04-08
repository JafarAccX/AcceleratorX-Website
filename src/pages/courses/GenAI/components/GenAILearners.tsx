import { motion } from "framer-motion";

const LOGOS = [
    { name: "Microsoft", src: "/redesign/corporate/logos/microsoft.png", width: "w-24 md:w-32" },
    { name: "Deloitte", src: "/redesign/corporate/logos/deloitte.png", width: "w-24 md:w-32" },
    { name: "Paisabazaar", src: "/redesign/corporate/logos/paissabazaar.png", width: "w-32 md:w-40" },
    { name: "Bajaj Finserv", src: "/redesign/corporate/logos/bajaj.png", width: "w-24 md:w-32" },
    { name: "Indian Government", src: "/redesign/corporate/logos/indiangov.png", width: "w-24 md:w-32" },
    { name: "Razorpay", src: "/redesign/corporate/logos/razorpay.png", width: "w-24 md:w-32" }
];

export default function GenAILearners() {
    return (
        <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="font-sans text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        2,000+ learners across India — from Bengaluru to Bhilai — are already building real AI skills and getting hired at top companies.
                        <br className="hidden md:block" /> Mastering the tools and workflows used by leading tech organizations globally.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-40 hover:opacity-60 transition-opacity duration-500 grayscale">
                    {LOGOS.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${logo.width} flex items-center justify-center`}
                        >
                            <img 
                                src={logo.src} 
                                alt={logo.name} 
                                className="w-full h-auto object-contain" 
                                onError={(e) => {
                                    // Fallback for missing logos in local dev
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${logo.name}&background=111&color=fff&size=128&bold=true`;
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
