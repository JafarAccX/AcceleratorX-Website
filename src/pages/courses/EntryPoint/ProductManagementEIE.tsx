import { useEffect, Suspense, lazy } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import StickyBookNav from "../../../components/StickyBookNav";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const BenefitsGridEIE = lazy(() => import("../productmanagement/EIE/BenefitsGridEIE"));
const FAQEIE = lazy(() => import("../productmanagement/EIE/FAQEIE"));
const LearningJourneyEIE = lazy(() => import("../productmanagement/EIE/LearningJourneyEIE"));
const MentorsEIE = lazy(() => import("../productmanagement/EIE/MentorsEIE"));
const PricingEIE = lazy(() => import("../productmanagement/EIE/PricingEIE"));
const ProgramHeroEIE = lazy(() => import("../productmanagement/EIE/ProgamHeroEIE"));
const ProgramCertificateEIE = lazy(() => import("../productmanagement/EIE/ProgramCertificateEIE"));
const ProgramHighlightsEIE = lazy(() => import("../productmanagement/EIE/ProgramHighlightsEIE"));
const SkillsAndToolsEIE = lazy(() => import("../productmanagement/EIE/SkillsAndToolsEIE"));
// const SkillsAssessmentEIE = lazy(() => import("../productmanagement/EIE/SkillsAssessmentEIE"));

const ProductManagementEIE = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <>
    <SEO />
      <HeaderEIE />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <ProgramHeroEIE />
        <HeroWithAbouv />
        <ProgramHighlightsEIE />
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

export default ProductManagementEIE;
