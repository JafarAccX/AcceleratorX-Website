
import React, { useState } from "react";
import AICrashCourseEnrollmentModal from "./AICrashCourseEnrollmentModal";
import AICrashCourseHero from "./components/AICrashCourseHero";
import AICrashCourseCurriculum from "./components/AICrashCourseCurriculum";
import AICrashCourseProjects from "./components/AICrashCourseProjects";
import AICrashCourseMentors from "./components/AICrashCourseMentors";
import AICrashCourseTools from "./components/AICrashCourseTools";
import AICrashCoursePricing from "./components/AICrashCoursePricing";
import AICrashCourseFAQ from "./components/AICrashCourseFAQ";

const AICrashCoursePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEnroll = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
            <AICrashCourseEnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Global Background (Noise) */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="relative z-10">
                {/* Navbar Placeholder - if needed */}

                <AICrashCourseHero onEnroll={handleEnroll} />
                <AICrashCourseCurriculum />
                <AICrashCourseProjects onEnroll={handleEnroll} />
                <AICrashCourseMentors />
                <AICrashCourseTools />
                <AICrashCoursePricing onEnroll={handleEnroll} />
                <AICrashCourseFAQ />

            </div>
        </div>
    );
};

export default AICrashCoursePage;
