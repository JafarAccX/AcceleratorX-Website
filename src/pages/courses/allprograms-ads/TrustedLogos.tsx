import { motion } from "framer-motion";

const logos = [

    { name: "Google", src: "/all-programs-amit-camp/google.png" },
    { name: "Microsoft", src: "/all-programs-amit-camp/microsoft.png" },
    { name: "Juniper", src: "/all-programs-amit-camp/juniper.png" },
    { name: "Peakmind", src: "/all-programs-amit-camp/peakmind.png" },
    { name: "Aruba", src: "/all-programs-amit-camp/aruba.png" },
    { name: "Cisco", src: "/all-programs-amit-camp/cisco.png" },
    { name: "Deloitte", src: "/all-programs-amit-camp/deloitte.png" },
    { name: "Growsharp", src: "/all-programs-amit-camp/growsharp.png" },
    { name: "Mesha", src: "/all-programs-amit-camp/mesha.png" },
    { name: "PayU", src: "/all-programs-amit-camp/payU.png" },
    { name: "SonicWall", src: "/all-programs-amit-camp/sonicwall.png" },
    { name: "Tata", src: "/all-programs-amit-camp/tata.png" }
];

export default function TrustedLogos() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-8"
                >
                    Mentor-led AI programs
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-4"
                >
                    Trusted by 1700+ Organisations
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-400 text-lg md:text-xl mb-16"
                >
                    Mentor-led AI Upskilling Programs

                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-7xl mx-auto leading-relaxed"
                >
                    AcceleratorX AI courses are trusted by over 1700+ companies hiring for AI product
                    management, generative AI, AI data analytics and AI digital marketing roles. Our
                    programs help you understand how companies use AI in real-world workflows, making
                    you prepared for today’s job market. From structured courses in AI product
                    management training and generative AI courses with automation, to AI-led data
                    analytics training and AI digital marketing programs, each course focuses on
                    practical outcomes rather than theory. Learners gain hands-on experience with AI
                    tools, AI workflow automation and applied AI strategies used by modern teams. This
                    industry-backed approach makes AcceleratorX ideal for Professionals seeking AI
                    certification programs, career transition into AI roles, or advanced AI skills that
                    employers hire for.

                </motion.p>

                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-2 max-w-7xl space-y-8 mx-auto">
                    {logos.map((logo, idx) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            className="w-44 h-16 flex items-center justify-center transition-all duration-300"
                        >
                            <img
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                className="max-w-full max-h-full  object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
                <p className="my-12 text-gray-400 text-lg">and many more</p>
            </div>
        </section>
    );
}
