import { Loader } from "lucide-react";
import React, { Suspense } from "react";
import { XSATAbout } from "../../XSAT/LandingPage/XSATAbout";
import { XSATFAQ } from "../../XSAT/LandingPage/XSATFAQ";
import { XSATHero } from "../../XSAT/LandingPage/XSATHero";
import { XSATInfo } from "../../XSAT/LandingPage/XSATInfo";

const XSATEntry = () => {
  return (
    <>
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
