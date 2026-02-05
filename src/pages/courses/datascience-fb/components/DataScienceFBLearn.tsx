import { motion } from "framer-motion";




const DataScienceFBLearn = () => {
    return (
        <section className="bg-black py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-gray-400 text-sm md:text-base mb-3 font-medium">
                        AI is no longer optional.
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">
                        What you’ll actually <span className="text-[#0077FF]">learn</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Not notebooks. Not dashboards. Production ML.
                    </p>
                </motion.div>

                {/* Central Image Illustration */}
                <div className="relative w-full max-w-5xl flex flex-col items-center mt-10">
                    <p className="text-white text-lg font-medium mb-8">
                        Master how to:
                    </p>
                    <img
                        src="/redesign/datascience-fb/learn.webp"
                        alt="What you will learn - Frame business problems, Handle uncertainty, Agentic AI, Evaluate models"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default DataScienceFBLearn;
