import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import StickyBookNav from "../../../components/StickyBookNav";
import { useCourseContext } from "../../../context/courseContext";
import BenefitsGridEIE from "../productmanagement/EIE/BenefitsGridEIE";
import FAQEIE from "../productmanagement/EIE/FAQEIE";
import LearningJourneyEIE from "../productmanagement/EIE/LearningJourneyEIE";
import MentorsEIE from "../productmanagement/EIE/MentorsEIE";
import PricingEIE from "../productmanagement/EIE/PricingEIE";
import ProgramHeroEIE from "../productmanagement/EIE/ProgamHeroEIE";
import ProgramCertificateEIE from "../productmanagement/EIE/ProgramCertificateEIE";
import ProgramHighlightsEIE from "../productmanagement/EIE/ProgramHighlightsEIE";
import SkillsAndToolsEIE from "../productmanagement/EIE/SkillsAndToolsEIE";
import SkillsAssessmentEIE from "../productmanagement/EIE/SkillsAssessmentEIE";

const ProductManagementEIE = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <HeaderEIE />
      <ProgramHeroEIE />
      <HeroWithAbouv />
      <ProgramHighlightsEIE />
      <LearningJourneyEIE />
      <BenefitsGridEIE />
      <ProgramCertificateEIE />
      <MentorsEIE />
      <SkillsAndToolsEIE />
      <SkillsAssessmentEIE />
      <PricingEIE />
      <FAQEIE />
      <StickyBookNav />
    </Suspense>
  );
};

export default ProductManagementEIE;
