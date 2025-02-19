import { lazy } from "react";
import { Route } from "react-router-dom";
import GENCTAB from "../pages/landingpage/workshopGENB/GENCTAB";
import WSAboutGENB from "../pages/landingpage/workshopGENB/WSAboutGENB";
import WSGENIntroductionB from "../pages/landingpage/workshopGENB/WSGENIntroductionB";
import WSGENWhoShouldEnrollB from "../pages/landingpage/workshopGENB/WSGENWhoShouldEnrollB";
import WSHeroGENB from "../pages/landingpage/workshopGENB/WSHeroGENB";
import WSRegistrationSuccess from "../pages/landingpage/workshopGENB/WSRegistrationSuccess";
import WSMentor from "../pages/landingpage/workshopGEN/WSGENMentor";
import WSGENMentor from "../pages/landingpage/workshopGEN/WSGENMentor";

// Workshop Components
const WSHeroDA = lazy(() => import("../pages/landingpage/workshop/WSHero"));
const WSAboutDA = lazy(() => import("../pages/landingpage/workshop/WSAbout"));
const WSTestimonialDA = lazy(
  () => import("../pages/landingpage/workshop/WSTestimonial")
);
const WSCommunityDA = lazy(
  () => import("../pages/landingpage/workshop/WSCommunity")
);

const WSHeroPM = lazy(() => import("../pages/landingpage/workshopPM/WSHeroPM"));
const WSAboutPM = lazy(
  () => import("../pages/landingpage/workshopPM/WSAboutPM")
);
const WSTestimonialPM = lazy(
  () => import("../pages/landingpage/workshopPM/WSTestimonialPM")
);

const WSHeroGEN = lazy(
  () => import("../pages/landingpage/workshopGEN/WSHeroGEN")
);
const WSAboutGEN = lazy(
  () => import("../pages/landingpage/workshopGEN/WSAboutGEN")
);
const WSGENWhoShouldEnroll = lazy(
  () => import("../pages/landingpage/workshopGEN/WSGENWhoShouldEnroll")
);
const WSGENIntroduction = lazy(
  () => import("../pages/landingpage/workshopGEN/WSGENIntroduction")
);
const GENCTA = lazy(() => import("../pages/landingpage/workshopGEN/GENCTA"));

const WSHeroDM = lazy(() => import("../pages/landingpage/workshopDM/WSHeroDM"));
const WSAboutDM = lazy(
  () => import("../pages/landingpage/workshopDM/WSAboutDM")
);

// Workshop Pages
const WorkshopPageDA = () => (
  <>
    <WSHeroDA />
    <WSAboutDA />
    <WSTestimonialDA />
    <WSCommunityDA />
  </>
);

const WorkshopPagePM = () => (
  <>
    <WSHeroPM />
    <WSAboutPM />
    <WSTestimonialPM />
  </>
);

const WorkshopPageGEN = () => (
  <>
    <WSHeroGEN />
    <WSAboutGEN />
    <WSGENWhoShouldEnroll />
    <WSGENIntroduction />
    <WSGENMentor />
    <GENCTA />
  </>
);

const WorkshopPageGENBTest = () => (
  <>
    <WSHeroGENB />
    <WSAboutGENB />
    <WSGENWhoShouldEnrollB />
    <WSGENMentor />
    <WSGENIntroductionB />

    <GENCTAB />
  </>
);

const WorkshopPageDM = () => (
  <>
    <WSHeroDM />
    <WSAboutDM />
  </>
);

export const workshopRoutes = [
  <Route path="/workshop/da-masterclass" element={<WorkshopPageDA />} />,
  <Route path="/workshop/pm-masterclass" element={<WorkshopPagePM />} />,
  <Route path="/workshop/gen-ai-masterclass" element={<WorkshopPageGEN />} />,
  <Route path="/workshop/dm-masterclass" element={<WorkshopPageDM />} />,
  <Route
    path="/workshop/gen-ai-masterclass-bxwcy"
    element={<WorkshopPageGENBTest />}
  />,
  <Route
    path="/workshop-registration/success"
    element={<WSRegistrationSuccess />}
  />,
];
