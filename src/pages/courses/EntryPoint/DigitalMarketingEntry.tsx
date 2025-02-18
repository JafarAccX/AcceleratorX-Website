import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import { useCourseContext } from "../../../context/courseContext";
import DMCourseBenefits from "../dmAI/DMCourseBenefits";
import DMCourseOverview from "../dmAI/DMCourseOverview";
import DMCourseSyllabus from "../dmAI/DMCourseSyllabus";
import DMFAQs from "../dmAI/DMFAQs";
import DMHandsOnProjects from "../dmAI/DMHandsOnProjects";
import { DMHero } from "../dmAI/DMHero";
import DMMarketingTools from "../dmAI/DMMarketingTools";
import DMMarketInsights from "../dmAI/DMMarketInsights";
import DMPricing from "../dmAI/DMPricing";
import DMWhoShouldEnroll from "../dmAI/DMWhoShouldEnroll";

const DMAICourse = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Advance Performance Marketing With AI");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
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
  );
};

export default DMAICourse;
