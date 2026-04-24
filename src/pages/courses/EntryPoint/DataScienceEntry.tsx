import DataScienceHeroEIE from "../datascience/EIE/DataScienceHeroEIE";
import WhoIsThisContentForEIE from "../datascience/EIE/WhoIsThisContentForEIE";
import DataScienceProgramEIE from "../datascience/EIE/DataScienceProgramEIE";
import DataScienceFAQEIE from "../datascience/EIE/DataScienceFAQEIE";
import { SEO } from "../../../components/seo/SEO";

export default function DataScienceEntry() {
    return (
        <div className="relative">
            <SEO
                title="Data Science Career Accelerator | AcceleratorX"
                description="Become a Production-Ready Data Scientist. Build real ML systems, not just notebooks. 25 Live Sessions • Build-First • 2025 Ready."
            />
            <DataScienceHeroEIE />
            <WhoIsThisContentForEIE />
            <DataScienceProgramEIE />
            <DataScienceFAQEIE />
        </div>
    );
}
