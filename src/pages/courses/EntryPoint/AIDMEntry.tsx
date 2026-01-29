import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const AIDMHeroEIE = lazy(() => import("../AIDM/AIDMHeroEIE"));
const AIDMWhoIsThisContentForEIE = lazy(() => import("../AIDM/AIDMWhoIsThisContentForEIE"));
const AIDMProgramEIE = lazy(() => import("../AIDM/AIDMProgramEIE"));
const AIDMFAQEIE = lazy(() => import("../AIDM/AIDMFAQEIE"));

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
        <AIDMHeroEIE />
        <AIDMWhoIsThisContentForEIE />
        <AIDMProgramEIE />
        <AIDMFAQEIE />
      </Suspense>
    </>
  );
};

export default AIDMEntry;
