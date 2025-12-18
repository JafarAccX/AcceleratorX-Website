import { motion } from 'framer-motion';
import AnimatedOfferButton from './AnimatedOfferButton';

interface ProgramCardProps {
    category: string;
    title: string;
    description: string;
    image: string;
    isReversed?: boolean;
    onEnroll: (courseName: string) => void;
    decorativeIcons?: string[];
}

const ProgramCard = ({
    category,
    title,
    description,
    image,
    isReversed = false,
    onEnroll,
    decorativeIcons = []
}: ProgramCardProps) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo-like curve for premium feel
            }}
            className={`flex flex-col-reverse ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center justify-between gap-12 md:gap-24 py-12`}
        >
            {/* Content Side */}
            <div className="flex-1 w-full max-w-xl">
                <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-3 block">
                    {category}
                </span>
                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                    {title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {description}
                </p>
                <div className={`flex flex-row items-center justify-center w-full gap-4`}>
                    <div className="py-3.5 w-[180px] md:w-[200px] relative">
                        <div className={`absolute -top-[60px] md:-top-[85px] md:${isReversed ? '-left-16' : '-left-16'} -top-16`}>
                            <AnimatedOfferButton
                                onClick={() => onEnroll(title)}
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => onEnroll(title)}
                        className=" text-xs p-4 py-3 md:px-8 md:py-3.5 bg-transparent border border-white-600 hover:bg-white hover:text-black text-white rounded-lg font-medium transition-all duration-200 min-w-[120px] md:min-w-[160px]"
                    >
                        Get Brochure
                    </button>
                </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group bg-[#1a1c21]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full rounded-2xl h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Decorative Icons */}
                {decorativeIcons.length >= 2 && (
                    <>
                        {/* First Icon - Top Corner facing text */}
                        <motion.img
                            src={decorativeIcons[0]}
                            alt=""
                            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                            className={`absolute w-16 h-16 md:w-24 md:h-24 z-20 pointer-events-none drop-shadow-2xl
                                ${isReversed ? '-top-10 -right-4 md:-top-16 md:-right-8' : '-top-10 -left-4 md:-top-16 md:-left-8'}`}
                        />
                        {/* Second Icon - Bottom Opposite Corner */}
                        <motion.img
                            src={decorativeIcons[1]}
                            alt=""
                            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                            className={`absolute w-14 h-14 md:w-20 md:h-20 z-20 pointer-events-none drop-shadow-2xl
                                ${isReversed ? '-bottom-8 -left-4 md:-bottom-12 md:-left-6' : '-bottom-8 -right-4 md:-bottom-12 md:-right-6'}`}
                        />
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default ProgramCard;
