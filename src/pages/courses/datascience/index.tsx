import { Suspense, useEffect, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

// Import EIE components lazily
const DataScienceHeroEIE = lazy(() => import("./EIE/DataScienceHeroEIE"));
const DataScienceProgramEIE = lazy(() => import("./EIE/DataScienceProgramEIE"));
const DataScienceFAQEIE = lazy(() => import("./EIE/DataScienceFAQEIE"));
const WhoIsThisContentForEIE = lazy(() => import("./EIE/WhoIsThisContentForEIE"));

const DataSciencePage = () => {
    const { setSelectedCourse } = useCourseContext();

    useEffect(() => {
        setSelectedCourse("Data Science");
    }, [setSelectedCourse]);

    return (
        <div className="relative pt-28">
            <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
                <SEO
                    title="Data Science Career Accelerator | AcceleratorX"
                    description="Become a Production-Ready Data Scientist. Build real ML systems, not just notebooks. 25 Live Sessions • Build-First • 2025 Ready."
                />
                <DataScienceHeroEIE />
                <WhoIsThisContentForEIE />
                <DataScienceProgramEIE />
                <DataScienceFAQEIE />
            </Suspense>
        </div>
    );
};

export default DataSciencePage;
