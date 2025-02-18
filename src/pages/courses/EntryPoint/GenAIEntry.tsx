import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import { useCourseContext } from "../../../context/courseContext";
import GENBYOA from "../genAI/GENBYOA";
import GENFAQ from "../genAI/GENFAQ";
import GENHero from "../genAI/GENHero";
import GENIntroduction from "../genAI/GENIntroduction";
import GENLearningJourney from "../genAI/GENLearningJourney";
import GENMarketScope from "../genAI/GENMarketScope";
import GENPricing from "../genAI/GENPricing";
import GENProjectsAndOutcomes from "../genAI/GENProjectsAndOutcomes";
import GENToolsYouWillLearn from "../genAI/GENToolsYouWillLearn";
import GENWhoShouldEnroll from "../genAI/GENWhoShouldEnroll";
import GENWhyLearnAI from "../genAI/GENWhyLearnAI";

const GenAICourse = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Generative AI");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <GENHero />
      <GENIntroduction />
      <GENWhoShouldEnroll />
      <GENBYOA />
      <GENMarketScope />
      <GENWhyLearnAI />
      <GENLearningJourney />
      <GENToolsYouWillLearn />
      <GENProjectsAndOutcomes />
      <GENPricing />
      <GENFAQ />
    </Suspense>
  );
};

export default GenAICourse;
