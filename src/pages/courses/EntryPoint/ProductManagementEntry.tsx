import { Suspense, useEffect, lazy } from "react";
import ProgramHeroEIE from "../productmanagement/EIE/ProgamHeroEIE";
import ProgramHighlightsEIE from "../productmanagement/EIE/ProgramHighlightsEIE";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import StickyBookNav from "../../../components/StickyBookNav";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const ProgramCertificateEIE = lazy(() => import("../productmanagement/EIE/ProgramCertificateEIE"));
const LearningJourneyEIE = lazy(() => import("../productmanagement/EIE/LearningJourneyEIE"));
const BenefitsGridEIE = lazy(() => import("../productmanagement/EIE/BenefitsGridEIE"));
const MentorsEIE = lazy(() => import("../productmanagement/EIE/MentorsEIE"));
const SkillsAndToolsEIE = lazy(() => import("../productmanagement/EIE/SkillsAndToolsEIE"));
// const SkillsAssessmentEIE = lazy(() => import("../productmanagement/EIE/SkillsAssessmentEIE"));
const PricingEIE = lazy(() => import("../productmanagement/EIE/PricingEIE"));
const FAQEIE = lazy(() => import("../productmanagement/EIE/FAQEIE"));

const ProductManagementEntry = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <ProgramHeroEIE />
      <ProgramHighlightsEIE />
      <HeroWithAbouv courseName="Product Management" />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <LearningJourneyEIE />
        <BenefitsGridEIE />
        <ProgramCertificateEIE />
        <MentorsEIE />
        <SkillsAndToolsEIE />
        {/* <SkillsAssessmentEIE /> */}
        <PricingEIE />
        <FAQEIE />
        <StickyBookNav />
      </Suspense>
    </>
  );
};

export default ProductManagementEntry;
