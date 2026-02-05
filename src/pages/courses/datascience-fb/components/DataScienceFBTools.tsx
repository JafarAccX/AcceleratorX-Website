import { motion } from "framer-motion";

const DataScienceFBTools = () => {
    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
                        <span className="text-[#0077FF]">Tools & technologies</span> you’ll use
                    </h2>
                    <p className="text-gray-400 text-lg mb-2">
                        Real Stack. Real Skills.
                    </p>
                    <p className="text-gray-500 text-base mb-8">
                        You won’t just “hear about” tools. You’ll build with them live
                    </p>
                    <p className="text-white font-medium text-lg">
                        Hands-on experience with:
                    </p>
                </motion.div>

                {/* Central Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl"
                >
                    <img
                        src="/redesign/datascience-fb/tools.webp"
                        alt="Tools and Technologies: Python, SQL, Pandas, Scikit-Learn, Tableau, Github, Snowflake, Apache Spark"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default DataScienceFBTools;
