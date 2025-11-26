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

// Lazily loaded Workshop E (GENE) sections
const GENCTAE = lazy(() => import("../pages/landingpage/workshopGENE/GENCTAE"));
const WSAboutGENE = lazy(() => import("../pages/landingpage/workshopGENE/WSAboutGENE"));
const WSGENIntroductionE = lazy(() => import("../pages/landingpage/workshopGENE/WSGENIntroductionE"));
const WSGENWhoShouldEnrollE = lazy(() => import("../pages/landingpage/workshopGENE/WSGENWhoShouldEnrollE"));
const WSHeroGENE = lazy(() => import("../pages/landingpage/workshopGENE/WSHeroGENE"));

// Lazily loaded Workshop AIDM sections
const GENCTAAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/GENCTAAIDM"));
const WSAboutAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/WSAboutAIDM"));
const WSGENIntroductionAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/WSGENIntroductionAIDM"));
const WSGENWhoShouldEnrollAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/WSGENWhoShouldEnrollAIDM"));
const WSHeroAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/WSHeroAIDM"));
const WSGENMentorAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/WSGENMentorAIDM"));
// const WSRegistrationSuccessAIDM = lazy(() => import("../pages/landingpage/workshopAIDM/WSRegistrationSuccessAIDM"));

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

// Lazily loaded Workshop D (GEND) sections
const WSHeroGEND = lazy(() => import("../pages/landingpage/workshopGEND/WSHeroGEND"));
const WSAboutGEND = lazy(() => import("../pages/landingpage/workshopGEND/WSAboutGEND"));
const WSGENWhoShouldEnrollD = lazy(() => import("../pages/landingpage/workshopGEND/WSGENWhoShouldEnrollD"));
const WSGENIntroductionD = lazy(() => import("../pages/landingpage/workshopGEND/WSGENIntroductionD"));
const GENCTAD = lazy(() => import("../pages/landingpage/workshopGEND/GENCTAD"));
const WSGENDMentor = lazy(() => import("../pages/landingpage/workshopGEND/WSGENDMentor"));
const WSRegistrationSuccessD = lazy(() => import("../pages/landingpage/workshopGEND/WSRegistrationSuccessD"));

// Workshop Components (already lazy)
const WSHeroDA = lazy(() => import("../pages/landingpage/workshop/WSHero"));
const WSAboutDA = lazy(() => import("../pages/landingpage/workshop/WSAbout"));
const WSTestimonialDA = lazy(() => import("../pages/landingpage/workshop/WSTestimonial"));
// const WSCommunityDA = lazy(() => import("../pages/landingpage/workshop/WSCommunity"));

const WSHeroPM = lazy(() => import("../pages/landingpage/workshopPM/WSHeroPM"));
const WSAboutPM = lazy(() => import("../pages/landingpage/workshopPM/WSAboutPM"));
const WSTestimonialPM = lazy(() => import("../pages/landingpage/workshopPM/WSTestimonialPM"));

const WSHeroPMB = lazy(() => import("../pages/landingpage/workshopPMB/WSHeroPMB"));
const WSAboutPMB = lazy(() => import("../pages/landingpage/workshopPMB/WSAboutPMB"));
const WSGENWhoShouldEnrollPMB = lazy(() => import("../pages/landingpage/workshopPMB/WSGENWhoShouldEnrollPMB"));
const WSGENIntroductionPMB = lazy(() => import("../pages/landingpage/workshopPMB/WSGENIntroductionPMB"));
const GENCTAPMB = lazy(() => import("../pages/landingpage/workshopPMB/GENCTAPMB"));

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

const WorkshopPagePMB = () => (
  <>
    <SEO />
    <WSHeroPMB />
    <WSAboutPMB />
    <WSGENWhoShouldEnrollPMB />
    <WSGENMentor />
    <WSGENIntroductionPMB />
    <GENCTAPMB />
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

const WorkshopPageGEND = () => (
  <>
    <SEO />
    <WSHeroGEND />
    <WSAboutGEND />
    <WSGENWhoShouldEnrollD />
    <WSGENDMentor />
    <WSGENIntroductionD />
    <GENCTAD />
  </>
);

const WorkshopPageGENETest = () => (
  <>
    <SEO />
    <WSHeroGENE />
    <WSAboutGENE />
    <WSGENWhoShouldEnrollE />
    <WSGENMentor />
    <WSGENIntroductionE />
    <GENCTAE />
  </>
);

const WorkshopPageAIDMTest = () => (
  <>
    <SEO />
    <WSHeroAIDM />
    <WSAboutAIDM />
    <WSGENWhoShouldEnrollAIDM />
    <WSGENMentorAIDM />
    <WSGENIntroductionAIDM />
    <GENCTAAIDM />
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
  </>
);

export const workshopRoutes = [
  <Route key="workshop-pm" path="/workshop/pm-masterclass" element={<WorkshopPagePM />} />, 
  <Route key="workshop-pmb" path="/workshop/pm-masterclass-bxwxy" element={<WorkshopPagePMB />} />, 
  <Route key="workshop-dm" path="/workshop/dm-masterclass" element={<WorkshopPageDM />} />,
  <Route key="workshop-da" path="/workshop/da-masterclass" element={<WorkshopPageDA />} />,
  <Route key="workshop-da-second" path="/workshop/da-masterclass-bxwxy" element={<WorkshopPageDASecond />} />,
  <Route key="workshop-gen" path="/workshop/gen-ai-masterclass" element={<WorkshopPageGEN />} />,
  <Route key="workshop-genb" path="/workshop/gen-ai-masterclass-bxwcy" element={<WorkshopPageGENBTest />} />,
  <Route key="workshop-genc" path="/workshop/gen-ai-masterclass-thidtx" element={<WorkshopPageGENC />} />,
  <Route key="workshop-gend" path="/workshop/gen-ai-masterclass-four" element={<WorkshopPageGEND />} />,
  <Route key="workshop-gene" path="/workshop/gen-ai-masterclass-fioth" element={<WorkshopPageGENETest />} />,
  <Route key="workshop-aidm" path="/workshop/ai-dm-fitm" element={<WorkshopPageAIDMTest />} />,
  <Route key="workshop-success" path="/workshop-registration/success" element={<WSRegistrationSuccess />} />,
  <Route key="workshop-success-d" path="/workshop-registration/success-d" element={<WSRegistrationSuccessD />} />,
];
