import { useEffect, Suspense, lazy } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";
import HeroWithAbouv from "../../../components/HeroWithAbouv";

const GENBYOAAd = lazy(() => import("../genAIAD/GENBYOAAd"));
const GENFAQAd = lazy(() => import("../genAIAD/GENFAQAd"));
const GENHeroAd = lazy(() => import("../genAIAD/GENHeroAd"));
const GENIntroductionAd = lazy(() => import("../genAIAD/GENIntroductionAd"));
const GENLearningJourneyAd = lazy(() => import("../genAIAD/GENLearningJourneyAd"));
const GENMarketScopeAd = lazy(() => import("../genAIAD/GENMarketScopeAd"));
const GENToolsYouWillLearnAd = lazy(() => import("../genAIAD/GENToolsYouWillLearnAd"));
const GENWhoShouldEnrollAd = lazy(() => import("../genAIAD/GENWhoShouldEnrollAd"));

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
      <HeaderEIE />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <GENHeroAd />
        <GENIntroductionAd />
        <GENWhoShouldEnrollAd />
        <GENBYOAAd />
        <GENMarketScopeAd />
        <GENToolsYouWillLearnAd />
        {/* // <HeroWithAbouv /> */}
        <GENLearningJourneyAd />
        <GENFAQAd />
      </Suspense>
    </>
  );
};

export default GenAICourseAD;
