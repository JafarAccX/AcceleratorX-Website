import { useEffect, Suspense } from "react";
import LottieLoader from "../../../components/LottieLoader";
import { useCourseContext } from "../../../context/courseContext";
import GENHero from "../GenAiForPM/GENAIFORPMHero";
import GENIntroduction from "../GenAiForPM/GENAIFORPMIntroduction";
import GENWhoShouldEnroll from "../GenAiForPM/GENAIFORPMWhoShouldEnroll";
import GENBYOA from "../GenAiForPM/GENAIFORPMBYOA";
import GENWhyLearnAI from "../GenAiForPM/GENAIFORPMWhyLearnAI";
import GENMentors from "../GenAiForPM/GENAIFORPMMentors";
import GENToolsYouWillLearn from "../GenAiForPM/GENAIFORPMToolsYouWillLearn";
import GENProjectsAndOutcomes from "../GenAiForPM/GENAIFORPMProjectsAndOutcomes";
import GENPricing from "../GenAiForPM/GENAIFORPMPricing";
import GENFAQ from "../GenAiForPM/GENAIFORPMFAQ";
import GENMarketScope from "../GenAiForPM/GENAIFORPMMarketScope";
import GENLearningJourney from "../GenAiForPM/GENAIFORPMLearningJourney";
import { SEO } from "../../../components/SEO";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
const GenAiForPMEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("GenAI for PM");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<LottieLoader />}>
      <SEO />
      <GENHero />
      <GENIntroduction />
      <GENWhoShouldEnroll />
      <GENBYOA />
      <GENMarketScope />
      <GENWhyLearnAI />
      {/* // <HeroWithAbouv courseName="Gen AI for PMs" /> */}
      <GENLearningJourney />
      <GENMentors />
      <GENToolsYouWillLearn />
      <GENProjectsAndOutcomes />
      <GENPricing />
      <GENFAQ />
    </Suspense>
  );
};

export default GenAiForPMEntry; 