
import { useState, useEffect } from "react";
import AICrashCourseEnrollmentModal from "./AICrashCourseEnrollmentModal";
import FreeBuildPassModal from "./components/FreeBuildPassModal";
import FreeBuildPassBanner from "./components/FreeBuildPassBanner";
import AICrashCourseHero from "./components/AICrashCourseHero";
import AICrashCourseCurriculum from "./components/AICrashCourseCurriculum";
import AICrashCourseProjects from "./components/AICrashCourseProjects";
import AICrashCourseMentors from "./components/AICrashCourseMentors";
import AICrashCourseTools from "./components/AICrashCourseTools";
import AICrashCoursePricing from "./components/AICrashCoursePricing";
import AICrashCourseFAQ from "./components/AICrashCourseFAQ";
import AICrashCourseSchedule from "./components/AICrashCourseSchedule";

const AICrashCoursePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPassModalOpen, setIsPassModalOpen] = useState(false);
    const [isBannerOpen, setIsBannerOpen] = useState(false);

    const handleEnroll = () => {
        setIsModalOpen(true);
    };

    // Auto-open "Free Build Pass" BANNER after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            // Only open if the main enrollment modal isn't already open and pass modal isn't open
            if (!isModalOpen && !isPassModalOpen) {
                setIsBannerOpen(true);
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [isModalOpen, isPassModalOpen]);

    const handleClaimPass = () => {
        setIsBannerOpen(false);
        setIsPassModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
            <AICrashCourseEnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <FreeBuildPassModal
                isOpen={isPassModalOpen}
                onClose={() => setIsPassModalOpen(false)}
            />

            <FreeBuildPassBanner
                isOpen={isBannerOpen}
                onClose={() => setIsBannerOpen(false)}
                onClaim={handleClaimPass}
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
                <AICrashCourseMentors onEnroll={handleEnroll} />
                <AICrashCourseTools />
                <AICrashCourseSchedule />
                <AICrashCoursePricing onEnroll={handleEnroll} />
                <AICrashCourseFAQ />

            </div>
        </div>
    );
};

export default AICrashCoursePage;
