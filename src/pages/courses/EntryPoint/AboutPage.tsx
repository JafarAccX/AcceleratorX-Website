import { Loader } from "lucide-react";
import { Suspense } from "react";
import HeroAbout from "../../aboutus/HeroAbout";
import Team from "../../aboutus/Team";
import Values from "../../aboutus/Values";

const AboutPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroAbout />
        <Values />
        <Team />
      </Suspense>
    </>
  );
};

export default AboutPage;
