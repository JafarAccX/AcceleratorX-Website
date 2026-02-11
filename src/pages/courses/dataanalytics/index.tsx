import { Suspense, useEffect, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

// Import EIE components lazily
const DataHeroEIE = lazy(() => import("./EIE/DataHeroEIE"));
const DataProgramEIE = lazy(() => import("./EIE/DataProgramEIE"));
const DataFAQEIE = lazy(() => import("./EIE/DataFAQEIE"));


const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <div className="relative pt-28 font-sans">



      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <SEO />
        <DataHeroEIE />
        {/* // <HeroWithAbouv /> */}
        {/* <WhoIsThisContentForEIE /> */}
        <DataProgramEIE />
        <DataFAQEIE />
      </Suspense>
    </div>


  );
};

export default DataAnalyticsPage;
