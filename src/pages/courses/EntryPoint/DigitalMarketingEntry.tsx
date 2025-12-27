import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const DMCourseBenefits = lazy(() => import("../dmAI/DMCourseBenefits"));
const DMCourseOverview = lazy(() => import("../dmAI/DMCourseOverview"));
const DMCourseSyllabus = lazy(() => import("../dmAI/DMCourseSyllabus"));
const DMFAQs = lazy(() => import("../dmAI/DMFAQs"));
const DMHandsOnProjects = lazy(() => import("../dmAI/DMHandsOnProjects"));
const DMHero = lazy(() => import("../dmAI/DMHero").then(m => ({ default: m.DMHero })));
const DMMarketingTools = lazy(() => import("../dmAI/DMMarketingTools"));
const DMMarketInsights = lazy(() => import("../dmAI/DMMarketInsights"));
const DMPricing = lazy(() => import("../dmAI/DMPricing"));
const DMWhoShouldEnroll = lazy(() => import("../dmAI/DMWhoShouldEnroll"));

const DMAICourse = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Advance Performance Marketing With AI");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <DMHero />
        <DMMarketInsights />
        <DMWhoShouldEnroll />
        <DMCourseOverview />
        <DMHandsOnProjects />
        <DMMarketingTools />
        <DMCourseSyllabus />
        <DMCourseBenefits />
        <DMPricing />
        <DMFAQs />
      </Suspense>
    </>
  );
};

export default DMAICourse;
