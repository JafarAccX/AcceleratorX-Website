import { Suspense, lazy } from "react";
import { SEO } from "../../../components/seo/SEO";

const HeroAbout = lazy(() => import("../../aboutus/HeroAbout"));
const Team = lazy(() => import("../../aboutus/Team"));
const Values = lazy(() => import("../../aboutus/Values"));

const AboutPage = () => {
  return (
    <>
      <SEO />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <HeroAbout />
        <Values />
        <Team />
      </Suspense>
    </>
  );
};

export default AboutPage;
