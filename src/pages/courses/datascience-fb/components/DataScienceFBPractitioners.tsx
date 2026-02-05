
import { motion } from "framer-motion";

const practitioners = [
    {
        id: 1,
        image: "/redesign/datascience-fb/prashant.webp",
        alt: "Dr. Prashant"
    },
    {
        id: 2,
        image: "/redesign/datascience-fb/pranali.webp",
        alt: "Pranali Bose"
    },
    {
        id: 3,
        image: "/redesign/datascience-fb/himangi.webp",
        alt: "Himangi"
    },
    {
        id: 4,
        image: "/redesign/datascience-fb/akash.webp",
        alt: "Akash Maurya"
    }
];

const DataScienceFBPractitioners = () => {
    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
                        Learn from <span className="text-[#0077FF]">Practitioner</span>, Not Just Trainers
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        Learn from industry experts who have framed real problems, built production models, shipped live systems, and handled data drift
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {practitioners.map((practitioner, index) => (
                        <motion.div
                            key={practitioner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group w-full"
                        >
                            <img
                                src={practitioner.image}
                                alt={practitioner.alt}
                                className="w-full h-auto object-contain rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DataScienceFBPractitioners;
