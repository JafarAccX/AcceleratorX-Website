/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";
import { SEO } from "../components/SEO";

// Lazily loaded Workshop B (GENB) sections
const GENCTAB = lazy(() => import("../pages/landingpage/workshopGENB/GENCTAB"));
const WSAboutGENB = lazy(() => import("../pages/landingpage/workshopGENB/WSAboutGENB"));
const WSGENIntroductionB = lazy(() => import("../pages/landingpage/workshopGENB/WSGENIntroductionB"));
const WSGENWhoShouldEnrollB = lazy(() => import("../pages/landingpage/workshopGENB/WSGENWhoShouldEnrollB"));
const WSHeroGENB = lazy(() => import("../pages/landingpage/workshopGENB/WSHeroGENB"));

// Lazily loaded Registration Success
const WSRegistrationSuccess = lazy(() => import("../pages/landingpage/workshopGENC/WSRegistrationSuccess"));

// Lazily loaded Workshop GEN shared components
const WSGENMentor = lazy(() => import("../pages/landingpage/workshopGEN/WSGENMentor"));

// Lazily loaded DA Second workshop sections
const WSHeroDASecond = lazy(() => import("../pages/landingpage/WorkshopDASecond/WSHeroDASecond"));
// const WSAboutDASecond = lazy(() => import("../pages/landingpage/WorkshopDASecond/WSAboutDASecond"));
const WSFIOSection = lazy(() => import("../pages/landingpage/WorkshopDASecond/WSIOSection"));
const WSTestimonialDASecond = lazy(() => import("../pages/landingpage/WorkshopDASecond/WSTestimonialDASecond"));
const AIEcosystem = lazy(() => import("../pages/landingpage/WorkshopDASecond/AIEcosystem"));
const ProductsSection = lazy(() => import("../pages/landingpage/WorkshopDASecond/ProductsSection"));
const TradingPlatformSection = lazy(() => import("../pages/landingpage/WorkshopDASecond/TradingPlatformSection"));

// Lazily loaded DM workshop sections
const HeroSection = lazy(() => import("../pages/landingpage/workshopDM/hero-section"));
const WorkshopHighlights = lazy(() => import("../pages/landingpage/workshopDM/workshop-highlights"));
const BuiltForYou = lazy(() => import("../pages/landingpage/workshopDM/built-for-you"));
const AutomationFeatures = lazy(() => import("../pages/landingpage/workshopDM/automation-features"));
const LeadEngineCTA = lazy(() => import("../pages/landingpage/workshopDM/lead-engine-cta"));
const TechStackSection = lazy(() => import("../pages/landingpage/workshopDM/tech-stack-section"));

// Lazily loaded Workshop C (GENC) sections
const WSGENCMentor = lazy(() => import("../pages/landingpage/workshopGENC/WSGENMentor"));

// Workshop Components (already lazy)
const WSHeroDA = lazy(() => import("../pages/landingpage/workshop/WSHero"));
const WSAboutDA = lazy(() => import("../pages/landingpage/workshop/WSAbout"));
const WSTestimonialDA = lazy(() => import("../pages/landingpage/workshop/WSTestimonial"));
// const WSCommunityDA = lazy(() => import("../pages/landingpage/workshop/WSCommunity"));

const WSHeroPM = lazy(() => import("../pages/landingpage/workshopPM/WSHeroPM"));
const WSAboutPM = lazy(() => import("../pages/landingpage/workshopPM/WSAboutPM"));
const WSTestimonialPM = lazy(() => import("../pages/landingpage/workshopPM/WSTestimonialPM"));

const WSHeroGEN = lazy(() => import("../pages/landingpage/workshopGEN/WSHeroGEN"));
const WSAboutGEN = lazy(() => import("../pages/landingpage/workshopGEN/WSAboutGEN"));
const WSGENWhoShouldEnroll = lazy(() => import("../pages/landingpage/workshopGEN/WSGENWhoShouldEnroll"));
const WSGENIntroduction = lazy(() => import("../pages/landingpage/workshopGEN/WSGENIntroduction"));
const GENCTA = lazy(() => import("../pages/landingpage/workshopGEN/GENCTA"));

const WSHeroDM = lazy(() => import("../pages/landingpage/workshopDM/WSHeroDM"));
// const WSAboutDM = lazy(() => import("../pages/landingpage/workshopDM/WSAboutDM"));

const WSHeroGENC = lazy(() => import("../pages/landingpage/workshopGENC/WSHeroGENC"));
const WSAboutGENC = lazy(() => import("../pages/landingpage/workshopGENC/WSAboutGENC"));
const WSGENWhoShouldEnrollC = lazy(() => import("../pages/landingpage/workshopGENC/WSGENWhoShouldEnrollC"));
const WSGENIntroductionC = lazy(() => import("../pages/landingpage/workshopGENC/WSGENIntroductionC"));
const GENCTAC = lazy(() => import("../pages/landingpage/workshopGENC/GENCTAC"));

// Workshop Pages
const WorkshopPageDA = () => (
  <>
  <SEO />
    <WSHeroDA />
    <WSAboutDA />
    <WSTestimonialDA />
  </>
);

const WorkshopPageDASecond = () => (
  <>
  <SEO />
    <WSHeroDASecond />
    <ProductsSection /> 
    <TradingPlatformSection />
    <AIEcosystem />
    <WSFIOSection />
    <WSTestimonialDASecond />
  </>
);

const WorkshopPagePM = () => (
  <>
  <SEO />
    <WSHeroPM />
    <WSAboutPM />
    <WSTestimonialPM />
  </>
);

const WorkshopPageGEN = () => (
  <>
    <SEO />
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
    <SEO />
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
    <SEO />
    <WSHeroGENC />
    <WSAboutGENC />
    <WSGENIntroductionC />
    <WSGENWhoShouldEnrollC />
    <WSGENCMentor />
    <GENCTAC />
  </>
);

const WorkshopPageDM = () => (
  <>

    <SEO />
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
  <Route key="workshop-pm" path="/workshop/pm-masterclass" element={<WorkshopPagePM />} />,
  // <Route path="/workshop/pm-masterclass" element={<WorkshopPagePM />} />,
  <Route key="workshop-dm" path="/workshop/dm-masterclass" element={<WorkshopPageDM />} />,
  <Route key="workshop-da" path="/workshop/da-masterclass" element={<WorkshopPageDA />} />,
  <Route key="workshop-da-second" path="/workshop/da-masterclass-bxwxy" element={<WorkshopPageDASecond />} />,
  <Route key="workshop-gen" path="/workshop/gen-ai-masterclass" element={<WorkshopPageGEN />} />,
  <Route key="workshop-genb" path="/workshop/gen-ai-masterclass-bxwcy" element={<WorkshopPageGENBTest />} />,
  <Route key="workshop-genc" path="/workshop/gen-ai-masterclass-thidtx" element={<WorkshopPageGENC />} />,
  <Route key="workshop-success" path="/workshop-registration/success" element={<WSRegistrationSuccess />} />,
];
