import { SEO } from "../../../components/SEO";
import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";

const AdvanceGenAIPageV2 = lazy(() => import("../advanceGenAI/v2/AdvanceGenAIPageV2"));

export default function AdvanceGenAIEntry() {
    const { setSelectedCourse } = useCourseContext();
    useEffect(() => {
        setSelectedCourse("Advance Generative AI");
    }, [setSelectedCourse]);

    return (
        <div className="bg-[#0A0A0A] min-h-screen">
            <SEO
                title="Advance Generative AI & AI Agent Building | AcceleratorX"
                description="Master the art of building autonomous AI agents, multi-agent systems, and production-ready intelligent workflows in our 10-week specialized program."
            />
            <Suspense fallback={<div className="py-8 text-center text-white">Loading…</div>}>
                <AdvanceGenAIPageV2 />
            </Suspense>
        </div>
    );
}
