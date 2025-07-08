import { lazy } from "react";
import { Route } from "react-router-dom";
import GENCTAB from "../pages/landingpage/workshopGENB/GENCTAB";
import WSAboutGENB from "../pages/landingpage/workshopGENB/WSAboutGENB";
import WSGENIntroductionB from "../pages/landingpage/workshopGENB/WSGENIntroductionB";
import WSGENWhoShouldEnrollB from "../pages/landingpage/workshopGENB/WSGENWhoShouldEnrollB";
import WSHeroGENB from "../pages/landingpage/workshopGENB/WSHeroGENB";
import WSRegistrationSuccess from "../pages/landingpage/workshopGENC/WSRegistrationSuccess";
import WSMentor from "../pages/landingpage/workshopGEN/WSGENMentor";
import WSGENMentor from "../pages/landingpage/workshopGEN/WSGENMentor";
import WSHeroDASecond from "../pages/landingpage/WorkshopDASecond/WSHeroDASecond";
import WSAboutDASecond from "../pages/landingpage/WorkshopDASecond/WSAboutDASecond";
import WSFIOSection from "../pages/landingpage/WorkshopDASecond/WSIOSection";
import WSTestimonialDASecond from "../pages/landingpage/WorkshopDASecond/WSTestimonialDASecond";
import AIEcosystem from "../pages/landingpage/WorkshopDASecond/AIEcosystem";
import HeroSection from "../pages/landingpage/workshopDM/hero-section";
import WorkshopHighlights from "../pages/landingpage/workshopDM/workshop-highlights";
import BuiltForYou from "../pages/landingpage/workshopDM/built-for-you";
import AutomationFeatures from "../pages/landingpage/workshopDM/automation-features";
import LeadEngineCTA from "../pages/landingpage/workshopDM/lead-engine-cta";
import TechStackSection from "../pages/landingpage/workshopDM/tech-stack-section";

// Workshop Components
const WSHeroDA = lazy(() => import("../pages/landingpage/workshop/WSHero"));
const WSAboutDA = lazy(() => import("../pages/landingpage/workshop/WSAbout"));
const WSTestimonialDA = lazy(() => import("../pages/landingpage/workshop/WSTestimonial"));
const WSCommunityDA = lazy(() => import("../pages/landingpage/workshop/WSCommunity"));

const WSHeroPM = lazy(() => import("../pages/landingpage/workshopPM/WSHeroPM"));
const WSAboutPM = lazy(() => import("../pages/landingpage/workshopPM/WSAboutPM"));
const WSTestimonialPM = lazy(() => import("../pages/landingpage/workshopPM/WSTestimonialPM"));

const WSHeroGEN = lazy(() => import("../pages/landingpage/workshopGEN/WSHeroGEN"));
const WSAboutGEN = lazy(() => import("../pages/landingpage/workshopGEN/WSAboutGEN"));
const WSGENWhoShouldEnroll = lazy(() => import("../pages/landingpage/workshopGEN/WSGENWhoShouldEnroll"));
const WSGENIntroduction = lazy(() => import("../pages/landingpage/workshopGEN/WSGENIntroduction"));
const GENCTA = lazy(() => import("../pages/landingpage/workshopGEN/GENCTA"));

const WSHeroDM = lazy(() => import("../pages/landingpage/workshopDM/WSHeroDM"));
const WSAboutDM = lazy(() => import("../pages/landingpage/workshopDM/WSAboutDM"));

const WSHeroGENC = lazy(() => import("../pages/landingpage/workshopGENC/WSHeroGENC"));
const WSAboutGENC = lazy(() => import("../pages/landingpage/workshopGENC/WSAboutGENC"));
const WSGENWhoShouldEnrollC = lazy(() => import("../pages/landingpage/workshopGENC/WSGENWhoShouldEnrollC"));
const WSGENIntroductionC = lazy(() => import("../pages/landingpage/workshopGENC/WSGENIntroductionC"));
const GENCTAC = lazy(() => import("../pages/landingpage/workshopGENC/GENCTAC"));

// Workshop Pages
const WorkshopPageDA = () => (
  <>
    <WSHeroDA />
    <WSAboutDA />
    <WSTestimonialDA />
  </>
);

const WorkshopPageDASecond = () => (
  <>
    <WSHeroDASecond />
    <WSAboutDASecond />
    <AIEcosystem />
    <WSFIOSection />
    <WSTestimonialDASecond />
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
    <WSGENIntroduction />
    <WSGENWhoShouldEnroll />
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

const WorkshopPageGENC = () => (
  <>
    <WSHeroGENC />
    <WSAboutGENC />
    <WSGENIntroductionC />
    <WSGENWhoShouldEnrollC />
    <WSGENMentor />
    <GENCTAC />
  </>
);

const WorkshopPageDM = () => (
  <>

    <HeroSection />
    <WSHeroDM />
    <WorkshopHighlights />
    <TechStackSection />
    <AutomationFeatures />
    <BuiltForYou />
    <LeadEngineCTA />

    {/* <WSAboutDM /> */}
  </>
);

export const workshopRoutes = [
  <Route path="/workshop/pm-masterclass" element={<WorkshopPagePM />} />,
  <Route path="/workshop/pm-masterclass" element={<WorkshopPagePM />} />,
  <Route path="/workshop/dm-masterclass" element={<WorkshopPageDM />} />,
  <Route path="/workshop/da-masterclass" element={<WorkshopPageDA />} />,
  <Route path="/workshop/da-masterclass-bxwxy" element={<WorkshopPageDASecond />} />,
  <Route path="/workshop/gen-ai-masterclass" element={<WorkshopPageGEN />} />,
  <Route path="/workshop/gen-ai-masterclass-bxwcy" element={<WorkshopPageGENBTest />} />,
  <Route path="/workshop/gen-ai-masterclass-thidtx" element={<WorkshopPageGENC />} />,
  <Route path="/workshop-registration/success" element={<WSRegistrationSuccess />} />,
];
