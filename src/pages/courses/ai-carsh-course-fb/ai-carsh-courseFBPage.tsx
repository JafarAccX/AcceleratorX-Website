import { useState, useEffect, Suspense } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/seo/SEO";
import AICrashCourseEnrollmentModal from "../AICrashCourse/AICrashCourseEnrollmentModal";

// Use newly created components
import AICrashCourseHero from "./ai-carsh-courseHero";
import AICrashCourseCurriculum from "./ai-carsh-courseCurriculum";
import AICrashCourseMentors from "./ai-carsh-courseMentors";

// Use pre-existing components (renamed or not, imports must match file names)
import AICrashCoursePricing from "./ai-carsh-coursePricing";
import AICrashCourseTargetAudience from "./ai-carsh-courseTargetAudience";
import AICrashCourseTestimonial from "./ai-carsh-courseTestimonial";

const AICrashCoursePage = () => {
    const { setSelectedCourse } = useCourseContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Setting course context if necessary for global state
        setSelectedCourse("Advanced AI Crash Course");
    }, [setSelectedCourse]);

    const handleEnroll = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <SEO
                title="Advanced Agentic AI Crash Course | AcceleratorX"
                description="Build Real AI Agents. Not Just Prompts. The only program you need."
                ogTitle="Advanced Agentic AI Crash Course | AcceleratorX"
                ogDescription="16-week AI marketing program with live training, automation tools, and career support."
            />

            <AICrashCourseEnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
                <AICrashCourseHero onEnroll={handleEnroll} />
                <AICrashCourseTargetAudience />
                <AICrashCourseMentors />
                <AICrashCourseTestimonial />
                <AICrashCourseCurriculum />
                <AICrashCoursePricing onEnroll={handleEnroll} />
            </Suspense>
        </>
    );
};

export default AICrashCoursePage;
