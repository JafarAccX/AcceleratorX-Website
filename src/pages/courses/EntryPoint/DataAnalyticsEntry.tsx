import { useEffect, Suspense, lazy } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

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
      <HeaderEIE />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <DataHeroEIE />
        {/* // <HeroWithAbouv courseName="Data Analytics" /> */}
        <WhoIsThisContentForEIE />

        {/* component with the sticky functionality below  DataProgramEIE */}
        <DataProgramEIE />
      </Suspense>
    </>
  );
};

export default DataAnalyticsEntry;
