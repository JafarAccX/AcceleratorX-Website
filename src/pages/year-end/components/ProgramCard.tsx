// import { motion } from 'framer-motion';

// interface ProgramCardProps {
//     category: string;
//     title: string;
//     description: string;
//     image: string;
//     isReversed?: boolean;
//     onEnroll: (courseName: string) => void;
// }

// const ProgramCard = ({ category, title, description, image, isReversed = false, onEnroll }: ProgramCardProps) => {
//     return (
//         <div className={`flex flex-col-reverse ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-12 py-12`}>

//             {/* Content Side */}
//             <div className="flex-1 w-full max-w-xl">
//                 <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-3 block">
//                     {category}
//                 </span>
//                 <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//                     {title}
//                 </h3>
//                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
//                     {description}
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                     <button
//                         onClick={() => onEnroll(title)}
//                         className="px-8 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-lg font-semibold transition-all duration-200"
//                     >
//                         Claim the Offer
//                     </button>
//                     <button
//                         onClick={() => onEnroll(title)}
//                         className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-300 text-white rounded-lg transition-all duration-300"
//                     >
//                         Get Brochure
//                     </button>
//                 </div>
//             </div>

//             {/* Image Side */}
//             <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 className="flex-1 w-full"
//             >
//                 <div className="relative rounded-2xl overflow-hidden bg-[#1a1d24] border border-white/5 aspect-[4/3] group">
//                     <img
//                         src={image}
//                         alt={title}
//                         className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
//                     />
//                     {/* Glow effect */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent opacity-60 pointer-events-none" />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default ProgramCard;



import { motion } from 'framer-motion';
import { useRef } from 'react';

interface ProgramCardProps {
    category: string;
    title: string;
    description: string;
    image: string;
    isReversed?: boolean;
    onEnroll: (courseName: string) => void;
}

const ProgramCard = ({
    category,
    title,
    description,
    image,
    isReversed = false,
    onEnroll
}: ProgramCardProps) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    // const isInView = useInView(cardRef, {
    //     once: true,
    //     margin: "-100px"
    // });

    return (
        <div
            ref={cardRef}
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
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => onEnroll(title)}
                        className="px-8 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-lg font-semibold transition-all duration-200"
                    >
                        Claim the Offer
                    </button>
                    <button
                        onClick={() => onEnroll(title)}
                        className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-300 text-white rounded-lg transition-all duration-300"
                    >
                        Get Brochure
                    </button>
                </div>
            </div>

            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                // animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                className="flex-1 w-full"
            >
                <div className="relative p-2 rounded-2xl overflow-hidden bg-[#1a1d24] border border-white/5 aspect-[4/3] group">
                    <img
                        src={image}
                        alt={title}
                        className="w-full rounded-2xl h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent opacity-60 pointer-events-none" />
                </div>
            </motion.div>
        </div>
    );
};

export default ProgramCard;
