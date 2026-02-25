import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const HeroAICC = lazy(() => import("../advance-ai-crash-course/HeroAICC"));
const WhoIsThisForAICC = lazy(() => import("../advance-ai-crash-course/WhoIsThisForAICC"));
const ProgramAICC = lazy(() => import("../advance-ai-crash-course/ProgramAICC"));
const FAQAICC = lazy(() => import("../advance-ai-crash-course/FAQAICC"));

const AdvanceAICrashCourseEntry = () => {
    const {
        setSelectedCourse,
    }: { setSelectedCourse: (course: string | null) => void } =
        useCourseContext();

    useEffect(() => {
        setSelectedCourse("Advance AI Crash Course");
    }, [setSelectedCourse]);

    return (
        <>
            <SEO />
            <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
                <HeroAICC />
                <WhoIsThisForAICC />
                <ProgramAICC />
                <FAQAICC />
            </Suspense>
        </>
    );
};

export default AdvanceAICrashCourseEntry;
