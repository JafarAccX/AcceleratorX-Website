import React, { Suspense, useEffect } from "react";
import ProgramHeroFB from "../programFB/ProgamHeroFB";
import WhoIsThisContentForFB from "../programFB/WhoIsThisContentForFB";
import ProgramHighlightsFB from "../programFB/ProgramHighlightsFB";
import BYDPFB from "../programFB/BYDPFB";
import LearningJourneyFB from "../programFB/LearningJourneyFB";
import BenefitsGridFB from "../programFB/BenefitsGridFB";
import ProgramCertificateFB from "../programFB/ProgramCertificateFB";
import MentorsFB from "../programFB/MentorsFB";
import SkillsAndToolsFB from "../programFB/SkillsAndToolsFB";
import SkillsAssessmentFB from "../programFB/SkillAssessmentFB";
import PricingFB from "../programFB/PricingFB";
import TestimonialsFB from "../programFB/TestimonialsFB";
import FAQFB from "../programFB/FAQFB";
import StickyBookNavFB from "../programFB/StickyBookNavFB";
import Loader from "../../../components/Loader";
import { useCourseContext } from "../../../context/courseContext";

const ProductManagementAd = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <ProgramHeroFB />
      <WhoIsThisContentForFB />
      <ProgramHighlightsFB />
      <BYDPFB />
      <LearningJourneyFB />
      <BenefitsGridFB />
      <ProgramCertificateFB />
      <MentorsFB />
      <SkillsAndToolsFB />
      <SkillsAssessmentFB />
      <PricingFB />
      <TestimonialsFB />
      <FAQFB />
      <StickyBookNavFB />
    </Suspense>
  );
};

export default ProductManagementAd;
