import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const AIDMPageV2 = lazy(() => import("../AIDM/v2/AIDMPageV2"));

const AIDMEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("AI Digital Marketing");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO
        title="AI-Powered Digital Marketing Nano-Degree | AcceleratorX"
        description="Become the marketer every company wants in 2025. Master AI tools, automation, and growth strategies in our 16-week program with job assistance."
        ogTitle="AI-Powered Digital Marketing Nano-Degree | AcceleratorX"
        ogDescription="16-week AI marketing program with live training, automation tools, and career support. Join 2500+ alumni network."
      />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <AIDMPageV2 />
      </Suspense>
    </>
  );
};

export default AIDMEntry;
