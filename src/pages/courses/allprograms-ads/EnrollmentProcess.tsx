import { motion } from "framer-motion";

export default function EnrollmentProcess() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header section */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-400 text-sm font-medium mb-8"
                    >
                        Enrollment Process
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-4xl md:text-5xl font-bold mb-6"
                    >
                        How to Enroll?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-500 text-lg"
                    >
                        Apply for Screening <span className="mx-2">→</span> Get Shortlisted <span className="mx-2">→</span> Block Your Seat
                    </motion.p>
                </div>

                {/* Steps Diagram Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <img
                        src="/all-programs-amit-camp/enroll.webp"
                        alt="AcceleratorX Enrollment Process - Apply for Screening, Get Shortlisted, Block Your Seat"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
