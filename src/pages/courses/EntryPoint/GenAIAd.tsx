import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import { useCourseContext } from "../../../context/courseContext";
import GENBYOAAd from "../genAIAD/GENBYOAAd";
import GENFAQAd from "../genAIAD/GENFAQAd";
import GENHeroAd from "../genAIAD/GENHeroAd";
import GENIntroductionAd from "../genAIAD/GENIntroductionAd";
import GENLearningJourneyAd from "../genAIAD/GENLearningJourneyAd";
import GENMarketScopeAd from "../genAIAD/GENMarketScopeAd";
import GENToolsYouWillLearnAd from "../genAIAD/GENToolsYouWillLearnAd";
import GENWhoShouldEnrollAd from "../genAIAD/GENWhoShouldEnrollAd";

const GenAICourseAD = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Generative AI");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <HeaderEIE />
      <GENHeroAd />
      <GENIntroductionAd />
      <GENWhoShouldEnrollAd />
      <GENBYOAAd />
      <GENMarketScopeAd />
      <GENToolsYouWillLearnAd />
      <GENLearningJourneyAd />
      <GENFAQAd />
    </Suspense>
  );
};

export default GenAICourseAD;
