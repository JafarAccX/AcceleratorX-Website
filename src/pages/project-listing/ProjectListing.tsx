import { motion } from 'framer-motion';
import { useState } from 'react';

import ProjectCountdown from './components/ProjectCountdown';

const ProjectListing = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="relative min-h-screen  flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Background Image / Blur Effect */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                {/* <div className="relative w-[150%] md:w-full max-w-none md:max-w-[720px] aspect-square"> */}
                <div className="relative w-[150%] md:w-full max-w-[720px] aspect-square">
                    <img
                        src="/redesign/project listing/Frame 48754.webp"
                        alt=""
                        className="w-full h-full  object-contain opacity-80"
                    />
                    {/* The blue circular blur effect from the image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent rounded-full blur-[60px] md:blur-[100px]" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
                <ProjectCountdown />

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-serif mb-8 md:mb-12 font-extralight leading-tight"
                >
                    Let the world see,<br />
                    <span className="text-blue-600 italic">what you can </span>
                    <span className="font-bold tracking-tight">BUILD.</span>
                </motion.h1>

                {/* Email Subscription Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl mx-auto"
                >
                    <div className="relative flex flex-col rounded-full p-2 md:flex-row items-stretch md:items-center  bg-transparent md:bg-white  shadow-none md:shadow-lg border-none md:border md:border-gray-100 gap-3 md:gap-0">
                        <div className="relative flex-1">
                            <input
                                type="email"
                                placeholder="Enter your mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-6 py-4 md:py-3 md:bg-transparent text-gray-800 focus:outline-none text-base md:text-lg rounded-full  "
                            />
                        </div>
                        <button className="px-8 py-4 md:py-3.5 bg-blue-600 hover:bg-blue-700 rounded-full text-white  font-semibold transition-all duration-200 shadow-md whitespace-nowrap">
                            Get Early Access
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Footer or Decorative element */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-gray-400 text-sm">
                © 2025 AcceleratorX. All rights reserved.
            </div>
        </div>
    );
};

export default ProjectListing;
