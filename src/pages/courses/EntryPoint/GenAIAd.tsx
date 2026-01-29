import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const GENHeroEIE = lazy(() => import("../genAIAD/GENHeroEIE"));
const GENWhoIsThisContentForEIE = lazy(() => import("../genAIAD/GENWhoIsThisContentForEIE"));
const GENProgramEIE = lazy(() => import("../genAIAD/GENProgramEIE"));
const GENFAQEIE = lazy(() => import("../genAIAD/GENFAQEIE"));

const GenAICourseAD = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Generative AI");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <GENHeroEIE />
        <GENWhoIsThisContentForEIE />
        <GENProgramEIE />
        <GENFAQEIE />
      </Suspense>
    </>
  );
};

export default GenAICourseAD;
