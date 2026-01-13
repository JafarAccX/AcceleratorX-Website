import { useEffect, Suspense } from "react";
import LottieLoader from "../../../components/LottieLoader";
// import BecomeAMentorFeatures from "../../../components/BecomeAMentorFeatures";
// import CTA from "../../../components/CTA";
import Features from "../../../components/Features";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import { useCourseContext } from "../../../context/courseContext";
import Hero from "../../../components/landing-page/Hero";
import PartnerLogos from "../../../components/landing-page/PartnerLogos";
import ProgramsOffered from "../../../components/landing-page/ProgramsOffered";
import { SEO } from "../../../components/SEO";

const HomePage = () => {
  console.log('HomePage imports:', {
    Hero: typeof Hero,
    Features: typeof Features,
    HeroWithAbouv: typeof HeroWithAbouv,
  });
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
        <Features />
        {/* // <HeroWithAbouv /> */}
        {/* <BecomeAMentorFeatures /> */}
        {/* <CTA /> */}
      </Suspense>
    </>
  );
};

export default HomePage;
