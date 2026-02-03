import { Suspense, useEffect, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext"
import StickyBookNav from "../../../components/StickyBookNav";
import { SEO } from "../../../components/SEO";

// Import EIE components lazily
const DataHeroEIE = lazy(() => import("./EIE/DataHeroEIE"));
const DataProgramEIE = lazy(() => import("./EIE/DataProgramEIE"));
const DataSkillsToolsEIE = lazy(() => import("./EIE/DataSkillsToolsEIE"));
const DataMentorsEIE = lazy(() => import("./EIE/DataMentorsEIE"));
const DataPricingEIE = lazy(() => import("./EIE/DataPricingEIE"));
const CAPEEIE = lazy(() => import("./EIE/CAPEEIE"));
const DataCertificateEIE = lazy(() => import("./EIE/DataCertificateEIE"));
const WhoIsThisContentForEIE = lazy(() => import("./EIE/WhoIsThisContentForEIE"));
const DataAnalyticsFAQFB = lazy(() => import("../dataAnalyticsFB/DataAnalyticsFAQFB"));

const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <>
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <SEO />
        <DataHeroEIE />
        {/* // <HeroWithAbouv /> */}
        <WhoIsThisContentForEIE />
        <DataProgramEIE />
        <CAPEEIE />
        <DataCertificateEIE />
        <DataMentorsEIE />
        <DataSkillsToolsEIE />
        <DataPricingEIE />
        <DataAnalyticsFAQFB />
        <StickyBookNav />
      </Suspense>
    </>
  );
};

export default DataAnalyticsPage;
