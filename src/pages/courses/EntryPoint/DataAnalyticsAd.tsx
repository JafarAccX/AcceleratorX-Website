import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const DataHeroEIE = lazy(() => import("../dataanalytics/EIE/DataHeroEIE"));
const DataProgramEIE = lazy(() => import("../dataanalytics/EIE/DataProgramEIE"));
const WhoIsThisContentForEIE = lazy(() => import("../dataanalytics/EIE/WhoIsThisContentForEIE"));

const DataAnalyticsAd = () => {
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
        <WhoIsThisContentForEIE />
        <DataProgramEIE />
      </Suspense>
    </>
  );
};

export default DataAnalyticsAd;
