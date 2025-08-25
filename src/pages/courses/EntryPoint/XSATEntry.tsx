import { Loader } from "lucide-react";
import { Suspense } from "react";
import { XSATAbout } from "../../XSAT/LandingPage/XSATAbout";
import { XSATFAQ } from "../../XSAT/LandingPage/XSATFAQ";
import { XSATHero } from "../../XSAT/LandingPage/XSATHero";
import { XSATInfo } from "../../XSAT/LandingPage/XSATInfo";
import { SEO } from "../../../components/SEO";

const XSATEntry = () => {
  return (
    <>
      <SEO />
      <Suspense fallback={<Loader />}>
        {/* <XSATHomePage /> */}
        <XSATHero />
        <XSATInfo />
        <XSATAbout />
        <XSATFAQ />
      </Suspense>
    </>
  );
};

export default XSATEntry;
