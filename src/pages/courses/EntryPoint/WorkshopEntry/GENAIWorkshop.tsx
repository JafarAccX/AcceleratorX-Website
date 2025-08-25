import GENCTA from "../../../landingpage/workshopGEN/GENCTA";
import WSAboutGEN from "../../../landingpage/workshopGEN/WSAboutGEN";
import WSGENIntroduction from "../../../landingpage/workshopGEN/WSGENIntroduction";
import WSGENWhoShouldEnroll from "../../../landingpage/workshopGEN/WSGENWhoShouldEnroll";
import WSHeroGEN from "../../../landingpage/workshopGEN/WSHeroGEN";
import { SEO } from "../../../../components/SEO";

const GENAIWorkshop = () => {
  return (
    <>
      <SEO />
      <WSHeroGEN />
      <WSAboutGEN />
      <WSGENIntroduction />
      <WSGENWhoShouldEnroll />
      <GENCTA />
    </>
  );
};

export default GENAIWorkshop;
