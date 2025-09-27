import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext"; 
import { SEO } from "../../../components/SEO"; 
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import AIDMHero from "../AIDM/AIDMHero";

const AIDMChallenges = lazy(() => import("../AIDM/AIDMChallenges"));
const AIDMSolution = lazy(() => import("../AIDM/AIDMSolution"));
const AIDMRoadmap = lazy(() => import("../AIDM/AIDMRoadmap"));
const AIDMTools = lazy(() => import("../AIDM/AIDMTools"));
const AIDMCareerOutcomes = lazy(() => import("../AIDM/AIDMCareerOutcomes"));
const AIDMMentors = lazy(() => import("../AIDM/AIDMMentors"));
const AIDMCertification = lazy(() => import("../AIDM/AIDMCertification"));
const AIDMPricing = lazy(() => import("../AIDM/AIDMPricing"));
const AIDMFAQ = lazy(() => import("../AIDM/AIDMFAQ"));
const AIDMFinalCTA = lazy(() => import("../AIDM/AIDMFinalCTA"));

const AIDMEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("AI Digital Marketing");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO 
        title="AI-Powered Digital Marketing Nano-Degree | AcceleratorX"
        description="Become the marketer every company wants in 2025. Master AI tools, automation, and growth strategies in our 16-week program with job assistance."
        ogTitle="AI-Powered Digital Marketing Nano-Degree | AcceleratorX"
        ogDescription="16-week AI marketing program with live training, automation tools, and career support. Join 2500+ alumni network."
      /> 
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <AIDMHero />
        <HeroWithAbouv />
        <AIDMChallenges />
        <AIDMSolution />
        <AIDMRoadmap />
        <AIDMTools />
        <AIDMCareerOutcomes />
        <AIDMMentors />
        <AIDMCertification />
        <AIDMPricing />
        <AIDMFAQ />
        <AIDMFinalCTA /> 
      </Suspense>
    </>
  );
};

export default AIDMEntry;
