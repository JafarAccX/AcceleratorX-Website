import { Suspense, useEffect, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const DataAnalyticsPageV2 = lazy(() => import("./v2/DataAnalyticsPageV2"));

const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();

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

export default DataAnalyticsPage;
