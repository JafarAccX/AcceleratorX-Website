import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";
import DataFAQEIE from "../dataanalytics/EIE/DataFAQEIE";

const DataHeroEIE = lazy(() => import("../dataanalytics/EIE/DataHeroEIE"));
const WhoIsThisContentForEIE = lazy(() => import("../dataanalytics/EIE/WhoIsThisContentForEIE"));
const DataProgramEIE = lazy(() => import("../dataanalytics/EIE/DataProgramEIE"));

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
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <DataHeroEIE />
        {/* // <HeroWithAbouv courseName="Data Analytics" /> */}
        <WhoIsThisContentForEIE />
        <DataProgramEIE />
        <DataFAQEIE />
      </Suspense>
    </>
  );
};

export default DataAnalyticsEntry;
