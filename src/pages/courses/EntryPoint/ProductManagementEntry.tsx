import React, { Suspense, useEffect } from "react";
import ProgramHeroEIE from "../productmanagement/EIE/ProgamHeroEIE";
import ProgramHighlightsEIE from "../productmanagement/EIE/ProgramHighlightsEIE";
import Loader from "../../../components/Loader";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import ProgramCertificateEIE from "../productmanagement/EIE/ProgramCertificateEIE";
import LearningJourneyEIE from "../productmanagement/EIE/LearningJourneyEIE";
import BenefitsGridEIE from "../productmanagement/EIE/BenefitsGridEIE";
import MentorsEIE from "../productmanagement/EIE/MentorsEIE";
import SkillsAndToolsEIE from "../productmanagement/EIE/SkillsAndToolsEIE";
import SkillsAssessmentEIE from "../productmanagement/EIE/SkillsAssessmentEIE";
import PricingEIE from "../productmanagement/EIE/PricingEIE";
import FAQEIE from "../productmanagement/EIE/FAQEIE";
import StickyBookNav from "../../../components/StickyBookNav";
import { useCourseContext } from "../../../context/courseContext";

const ProductManagementEntry = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <ProgramHeroEIE />
      <ProgramHighlightsEIE />
      <HeroWithAbouv />
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

export default ProductManagementEntry;
