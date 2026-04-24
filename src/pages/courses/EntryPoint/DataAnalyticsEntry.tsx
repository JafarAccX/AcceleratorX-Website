import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/seo/SEO";

const DataAnalyticsPageV2 = lazy(() => import("../dataanalytics/v2/DataAnalyticsPageV2"));

const DataAnalyticsEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<div className="py-8 text-center bg-[#0A0A0A] text-white min-h-screen">Loading…</div>}>
      <SEO />
      <DataAnalyticsPageV2 />
    </Suspense>
  );
};

export default DataAnalyticsEntry;
