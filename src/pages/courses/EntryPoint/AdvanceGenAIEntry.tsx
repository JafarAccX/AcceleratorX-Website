import AdvanceGenAIHeroEIE from "../advanceGenAI/AdvanceGenAIHeroEIE";
import AdvanceGenAIIndustryShiftEIE from "../advanceGenAI/AdvanceGenAIIndustryShiftEIE";
import AdvanceGenAIProgramEIE from "../advanceGenAI/AdvanceGenAIProgramEIE";
import AdvanceGenAIFAQEIE from "../advanceGenAI/AdvanceGenAIFAQEIE";
import { SEO } from "../../../components/SEO";
import { useEffect } from "react";
import { useCourseContext } from "../../../context/courseContext";

export default function AdvanceGenAIEntry() {
    const { setSelectedCourse } = useCourseContext();
    useEffect(() => {
        setSelectedCourse("Advance Generative AI");
    }, [setSelectedCourse]);

    return (
        <div className="pt-10">
            <SEO
                title="Advance Generative AI & AI Agent Building | AcceleratorX"
                description="Master the art of building autonomous AI agents, multi-agent systems, and production-ready intelligent workflows in our 10-week specialized program."
            />
            <div className="bg-black text-white">
                <AdvanceGenAIHeroEIE />
                <AdvanceGenAIIndustryShiftEIE />
                <AdvanceGenAIProgramEIE />
                <AdvanceGenAIFAQEIE />
            </div>
        </div>
    );
}
