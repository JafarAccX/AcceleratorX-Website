import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import { useCourseContext } from "../../../context/courseContext"; 
import { SEO } from "../../../components/SEO";
import AIDMHero from "../AIDM/AIDMHero";
import AIDMChallenges from "../AIDM/AIDMChallenges";
import AIDMSolution from "../AIDM/AIDMSolution";
import AIDMRoadmap from "../AIDM/AIDMRoadmap";
import AIDMTools from "../AIDM/AIDMTools";
import AIDMCareerOutcomes from "../AIDM/AIDMCareerOutcomes";
import AIDMMentors from "../AIDM/AIDMMentors";
import AIDMCertification from "../AIDM/AIDMCertification";
import AIDMPricing from "../AIDM/AIDMPricing";
import AIDMFAQ from "../AIDM/AIDMFAQ";
import AIDMFinalCTA from "../AIDM/AIDMFinalCTA";

const AIDMEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("AI Digital Marketing");
  }, [setSelectedCourse]);

  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={<Loader />} >
        <SEO 
          title="AI-Powered Digital Marketing Nano-Degree | AcceleratorX"
          description="Become the marketer every company wants in 2025. Master AI tools, automation, and growth strategies in our 16-week program with job assistance."
          ogTitle="AI-Powered Digital Marketing Nano-Degree | AcceleratorX"
          ogDescription="16-week AI marketing program with live training, automation tools, and career support. Join 2500+ alumni network."
        />
        <AIDMHero />
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
    </div>
  );
};

export default AIDMEntry;
