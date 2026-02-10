import { useEffect, Suspense } from "react";
import Loader from "../../../components/Loader";
// import BecomeAMentorFeatures from "../../../components/BecomeAMentorFeatures";
// import CTA from "../../../components/CTA";

import { useCourseContext } from "../../../context/courseContext";
import Hero from "../../../components/landing-page/Hero";
import PartnerLogos from "../../../components/landing-page/PartnerLogos";
import ProgramsOffered from "../../../components/landing-page/ProgramsOffered";
import ToolsCovered from "../../../components/landing-page/ToolsCovered";
import BuildrXSection from "../../../components/landing-page/BuildrXSection";
import OfflineExperience from "../../../components/landing-page/OfflineExperience";
import { SEO } from "../../../components/SEO";

const HomePage = () => {

  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse(null);
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <Suspense fallback={<Loader />}>
        <Hero />
        <PartnerLogos />
        <ProgramsOffered />
        <ToolsCovered />
        <BuildrXSection />
        <OfflineExperience />
      </Suspense>
    </>
  );
};

export default HomePage;
