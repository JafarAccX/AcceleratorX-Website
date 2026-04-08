import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const AICrashCoursePageV2 = lazy(() => import("../advance-ai-crash-course/v2/AICrashCoursePageV2"));

const AdvanceAICrashCourseEntry = () => {
    const {
        setSelectedCourse,
    }: { setSelectedCourse: (course: string | null) => void } =
        useCourseContext();

    useEffect(() => {
        setSelectedCourse("Advance AI Crash Course");
    }, [setSelectedCourse]);

    return (
        <div className="bg-[#0A0A0A] min-h-screen">
            <SEO 
                title="Agentic AI Crash Course | AcceleratorX"
                description="Intensive 4-week sprint to master LangChain, CrewAI, and real-world agentic AI development."
            />
            <Suspense fallback={<div className="py-8 text-center text-white">Loading…</div>}>
                <AICrashCoursePageV2 />
            </Suspense>
        </div>
    );
};

export default AdvanceAICrashCourseEntry;
