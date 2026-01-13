import { Suspense, useEffect, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
// import StickyBookNav from "../../../components/StickyBookNav";
import { SEO } from "../../../components/SEO";

// Import EIE components lazily
const DataHeroEIE = lazy(() => import("./EIE/DataHeroEIE"));
const DataProgramEIE = lazy(() => import("./EIE/DataProgramEIE"));
const WhoIsThisContentForEIE = lazy(() => import("./EIE/WhoIsThisContentForEIE"));
const DataFAQEIE = lazy(() => import("./EIE/DataFAQEIE"));


const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <div className="relative pt-28">



      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <SEO />
        <DataHeroEIE />
        {/* // <HeroWithAbouv /> */}
        <WhoIsThisContentForEIE />

        <DataProgramEIE />
        <DataFAQEIE />
        {/* FAQs below */}

        {/* <CAPEEIE /> */}
        {/* <DataCertificateEIE />
        <DataMentorsEIE />
        <DataSkillsToolsEIE />
        <DataPricingEIE />
        <DataAnalyticsFAQFB />
        <StickyBookNav /> */}
      </Suspense>
    </div>

    // <div className="relative pt-28 ">
    //   <div className="sticky top-0">
    //     <DataProgramEIE />
    //   </div>
    // </div>


    // <div className="relative">
    //   <div className="bg-blue-400 relative">
    //     <div className=" pt-28">
    //       <div className="sticky top-48 bg-red-300">A</div>
    //       <div>
    //         <div className="h-screen">
    //           <img src="..." />
    //           <p>Abigail Davis</p>
    //         </div>

    //         <div className="h-screen">
    //           <img src="..." />
    //           <p>Andrew Carter</p>
    //         </div>
    //         <div className="h-screen">
    //           <img src="..." />
    //           <p>Andrew Carter</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="sticky top-0 bg-red-300">B</div>
    //       <div>
    //         <div className="h-screen">
    //           <img src="..." />
    //           <p>Benjamin Hughes</p>
    //         </div>

    //       </div>
    //     </div>

    //   </div>
    // </div>

  );
};

export default DataAnalyticsPage;
