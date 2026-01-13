import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const GENHeroPMEIE = lazy(() => import("../GenAiForPM/GENHeroPMEIE"));
const GENWhoIsThisContentForPMEIE = lazy(() => import("../GenAiForPM/GENWhoIsThisContentForPMEIE"));
const GENProgramPMEIE = lazy(() => import("../GenAiForPM/GENProgramPMEIE"));

const GenAiForPMEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("GenAI for PM");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <GENHeroPMEIE />
        <GENWhoIsThisContentForPMEIE />
        <GENProgramPMEIE />
      </Suspense>
    </>
  );
};

export default GenAiForPMEntry;