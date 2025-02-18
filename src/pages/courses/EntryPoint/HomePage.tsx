import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import BecomeAMentorFeatures from "../../../components/BecomeAMentorFeatures";
import CTA from "../../../components/CTA";
import Features from "../../../components/Features";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import LogoSlider from "../../../components/LogoSlider";
import { useCourseContext } from "../../../context/courseContext";
import Hero from "../../../components/Hero";

const HomePage = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse(null);
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <LogoSlider />
      <Features />
      <HeroWithAbouv />
      <BecomeAMentorFeatures />
      <CTA />
    </Suspense>
  );
};

export default HomePage;
