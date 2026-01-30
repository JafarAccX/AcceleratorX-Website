import AdvanceGenAIHeroEIE from "../advanceGenAI/AdvanceGenAIHeroEIE";
import AdvanceGenAIIndustryShiftEIE from "../advanceGenAI/AdvanceGenAIIndustryShiftEIE";
import AdvanceGenAIProgramEIE from "../advanceGenAI/AdvanceGenAIProgramEIE";
import AdvanceGenAIFAQEIE from "../advanceGenAI/AdvanceGenAIFAQEIE";
import { SEO } from "../../../components/SEO";

export default function AdvanceGenAIEntry() {
    return (
        <>
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
        </>
    );
}
