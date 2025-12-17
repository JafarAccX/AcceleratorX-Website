import { useEffect, Suspense, lazy } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import StickyBookNav from "../../../components/StickyBookNav";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const CAPEEIE = lazy(() => import("../dataanalytics/EIE/CAPEEIE"));
const DataCertificateEIE = lazy(() => import("../dataanalytics/EIE/DataCertificateEIE"));
const DataHeroEIE = lazy(() => import("../dataanalytics/EIE/DataHeroEIE"));
const DataJourneyEIE = lazy(() => import("../dataanalytics/EIE/DataJourneyEIE"));
const DataMentorsEIE = lazy(() => import("../dataanalytics/EIE/DataMentorsEIE"));
const DataPricingEIE = lazy(() => import("../dataanalytics/EIE/DataPricingEIE"));
const DataProgramEIE = lazy(() => import("../dataanalytics/EIE/DataProgramEIE"));
const DataSkillsToolsEIE = lazy(() => import("../dataanalytics/EIE/DataSkillsToolsEIE"));
const WhoIsThisContentForEIE = lazy(() => import("../dataanalytics/EIE/WhoIsThisContentForEIE"));
const DataAnalyticsFAQFB = lazy(() => import("../dataAnalyticsFB/DataAnalyticsFAQFB"));

const DataAnalyticsEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <HeaderEIE />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <DataHeroEIE />
        <HeroWithAbouv courseName="Data Analytics" />
        <WhoIsThisContentForEIE />
        <DataProgramEIE />
        <CAPEEIE />
        <DataJourneyEIE />
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

export default DataAnalyticsEntry;
