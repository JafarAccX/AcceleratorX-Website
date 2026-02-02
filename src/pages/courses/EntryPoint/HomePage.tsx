import { useEffect, Suspense } from "react";
import LottieLoader from "../../../components/LottieLoader";
// import BecomeAMentorFeatures from "../../../components/BecomeAMentorFeatures";
// import CTA from "../../../components/CTA";

import { useCourseContext } from "../../../context/courseContext";
import Hero from "../../../components/landing-page/Hero";
import PartnerLogos from "../../../components/landing-page/PartnerLogos";
import ProgramsOffered from "../../../components/landing-page/ProgramsOffered";
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
      <Suspense fallback={<LottieLoader />}>
        <Hero />
        <PartnerLogos />
        <ProgramsOffered />
        <OfflineExperience />
      </Suspense>
    </>
  );
};

export default HomePage;
