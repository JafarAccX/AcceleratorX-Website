import { useEffect, Suspense } from "react";
import LottieLoader from "../../../components/LottieLoader";
// import BecomeAMentorFeatures from "../../../components/BecomeAMentorFeatures";
// import CTA from "../../../components/CTA";
import Features from "../../../components/Features";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import LogoSlider from "../../../components/LogoSlider";
import { useCourseContext } from "../../../context/courseContext";
import Hero from "../../../components/Hero";
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
        <LogoSlider />
        <Features />
        <HeroWithAbouv />
        {/* <BecomeAMentorFeatures /> */}
        {/* <CTA /> */}
      </Suspense>
    </>
  );
};

export default HomePage;
