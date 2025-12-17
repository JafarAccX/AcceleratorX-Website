import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";
import HeroWithAbouv from "../../../components/HeroWithAbouv";

const GENBYOA = lazy(() => import("../genAI/GENBYOA"));
const GENFAQ = lazy(() => import("../genAI/GENFAQ"));
const GENHero = lazy(() => import("../genAI/GENHero"));
const GENIntroduction = lazy(() => import("../genAI/GENIntroduction"));
const GENLearningJourney = lazy(() => import("../genAI/GENLearningJourney"));
const GENMarketScope = lazy(() => import("../genAI/GENMarketScope"));
const GENPricing = lazy(() => import("../genAI/GENPricing"));
const GENProjectsAndOutcomes = lazy(() => import("../genAI/GENProjectsAndOutcomes"));
const GENToolsYouWillLearn = lazy(() => import("../genAI/GENToolsYouWillLearn"));
const GENWhoShouldEnroll = lazy(() => import("../genAI/GENWhoShouldEnroll"));
const GENWhyLearnAI = lazy(() => import("../genAI/GENWhyLearnAI"));
const GENMentors = lazy(() => import("../genAI/GENMentors"));

const GenAICourse = () => {
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
        <GENHero />
        <GENIntroduction />
        <GENWhoShouldEnroll />
        <GENBYOA />
        <GENMarketScope />
        <GENWhyLearnAI />
        <HeroWithAbouv />
        <GENLearningJourney />
        <GENMentors />
        <GENToolsYouWillLearn />
        <GENProjectsAndOutcomes />
        <GENPricing />
        <GENFAQ />
      </Suspense>
    </>
  );
};

export default GenAICourse;
