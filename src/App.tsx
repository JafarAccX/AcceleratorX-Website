import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { CourseProvider, useCourseContext } from "./context/courseContext";
import { Toaster } from "react-hot-toast";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import ThankYouPage from "./components/ThankYouPage";
import { MetaPixel } from "./components/MetaPixel";
import { trackViewContent } from "./utils/metaPixel";
import HeaderEIE from "./components/HeaderEIE";
import ProgramHeroEIE from "./pages/courses/productmanagement/EIE/ProgamHeroEIE";
import ProgramHighlightsEIE from "./pages/courses/productmanagement/EIE/ProgramHighlightsEIE";
import LearningJourneyEIE from "./pages/courses/productmanagement/EIE/LearningJourneyEIE";
import BenefitsGridEIE from "./pages/courses/productmanagement/EIE/BenefitsGridEIE";
import ProgramCertificateEIE from "./pages/courses/productmanagement/EIE/ProgramCertificateEIE";
import MentorsEIE from "./pages/courses/productmanagement/EIE/MentorsEIE";
import SkillsAndToolsEIE from "./pages/courses/productmanagement/EIE/SkillsAndToolsEIE";
import SkillsAssessmentEIE from "./pages/courses/productmanagement/EIE/SkillsAssessmentEIE";
import PricingEIE from "./pages/courses/productmanagement/EIE/PricingEIE";
import FAQEIE from "./pages/courses/productmanagement/EIE/FAQEIE";
import DataHeroEIE from "./pages/courses/dataanalytics/EIE/DataHeroEIE";
import DataProgramEIE from "./pages/courses/dataanalytics/EIE/DataProgramEIE";
import CAPEEIE from "./pages/courses/dataanalytics/EIE/CAPEEIE";
import DataCertificateEIE from "./pages/courses/dataanalytics/EIE/DataCertificateEIE";
import DataMentorsEIE from "./pages/courses/dataanalytics/EIE/DataMentorsEIE";
import DataSkillsToolsEIE from "./pages/courses/dataanalytics/EIE/DataSkillsToolsEIE";
import DataPricingEIE from "./pages/courses/dataanalytics/EIE/DataPricingEIE";
import WhoIsThisContentForEIE from "./pages/courses/dataanalytics/EIE/WhoIsThisContentForEIE";
import DataJourneyEIE from "./pages/courses/dataanalytics/EIE/DataJourneyEIE";
import WSHero from "./pages/landingpage/workshop/WSHero";
import WSAbout from "./pages/landingpage/workshop/WSAbout";
import WSTestimonial from "./pages/landingpage/workshop/WSTestimonial";
import WSCommunity from "./pages/landingpage/workshop/WSCommunity";
import WSHeroPM from "./pages/landingpage/workshopPM/WSHeroPM";
import WSAboutPM from "./pages/landingpage/workshopPM/WSAboutPM";
import WSTestimonialPM from "./pages/landingpage/workshopPM/WSTestimonialPM";
import WSCommunityPM from "./pages/landingpage/workshopPM/WSCommunityPM";

// Lazy imports
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const BecomeAMentor = lazy(() => import("./pages/becomeamentor/BecomeAMentor"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const BlogDashboard = lazy(() => import("./pages/blogs/BlogDashboard"));
const Login = lazy(() => import("./pages/auth/Login"));
const BlogForm = lazy(() => import("./pages/blogs/BlogForm"));
const HeroAbout = lazy(() => import("./pages/aboutus/HeroAbout"));
const Team = lazy(() => import("./pages/aboutus/Team"));
const Values = lazy(() => import("./pages/aboutus/Values"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const LogoSlider = lazy(() => import("./components/LogoSlider"));
const HireHero = lazy(() => import("./pages/hirewithus/HireHero"));
const DataHero = lazy(() => import("./pages/courses/dataanalytics/DataHero"));
const DataProgram = lazy(
  () => import("./pages/courses/dataanalytics/DataProgram")
);
const CAPE = lazy(() => import("./pages/courses/dataanalytics/CAPE"));
const DataPricing = lazy(
  () => import("./pages/courses/dataanalytics/dataPricing")
);
const DataMentors = lazy(
  () => import("./pages/courses/dataanalytics/DataMentors")
);
const DataSkillsTools = lazy(
  () => import("./pages/courses/dataanalytics/DataSkillsTools")
);
const ProgramHighlights = lazy(
  () => import("./pages/courses/productmanagement/ProgramHighlights")
);
const ProgramHero = lazy(
  () => import("./pages/courses/productmanagement/ProgamHero")
);
const BYDP = lazy(() => import("./pages/courses/productmanagement/BYDP"));
const BenefitsGrid = lazy(
  () => import("./pages/courses/productmanagement/BenefitsGrid")
);
const Mentors = lazy(() => import("./pages/courses/productmanagement/Mentors"));
const SkillsAndTools = lazy(
  () => import("./pages/courses/productmanagement/SkillsAndTools")
);
const Pricing = lazy(() => import("./pages/courses/productmanagement/Pricing"));
const EnrollmentModal = lazy(() => import("./components/EnrollmentModal"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const SkillsAssessment = lazy(
  () => import("./pages/courses/productmanagement/SkillAssessment")
);
const LearningJourney = lazy(
  () => import("./pages/courses/productmanagement/LearningJourney")
);
const BecomeAMentorFeatures = lazy(
  () => import("./components/BecomeAMentorFeatures")
);
const ChatWidget = lazy(() => import("./components/ChatWidget"));
const StickyBookNav = lazy(() => import("./components/StickyBookNav"));
const Refund = lazy(() => import("./pages/refund/Refund"));
const NoCodeHero = lazy(() => import("./pages/courses/nocodeTool/NoCodeHero"));
const NoCodeBenefitsGrid = lazy(
  () => import("./pages/courses/nocodeTool/NoCodeBenefitsGrid")
);
const NoCodeLearningJourney = lazy(
  () => import("./pages/courses/nocodeTool/NoCodeLearningJourney")
);
const TargetAudience = lazy(
  () => import("./pages/courses/nocodeTool/TargetAudience")
);
const Timeline = lazy(() => import("./pages/courses/nocodeTool/Timeline"));
const NoCodeTool = lazy(() => import("./pages/courses/nocodeTool/NoCodeTool"));
const ProjectsSection = lazy(
  () => import("./pages/courses/nocodeTool/ProjectSection")
);
const PricingSection = lazy(
  () => import("./pages/courses/nocodeTool/PricingSection")
);
const NoCodeFAQ = lazy(() => import("./pages/courses/nocodeTool/NoCodeFAQ"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const EnrollmentDashboard = lazy(() => import("./pages/admin/AdminPage"));

// FB Components
const ProgramHeroFB = lazy(
  () => import("./pages/courses/programFB/ProgamHeroFB")
);
const ProgramHighlightsFB = lazy(
  () => import("./pages/courses/programFB/ProgramHighlightsFB")
);
const BYDPFB = lazy(() => import("./pages/courses/programFB/BYDPFB"));
const LearningJourneyFB = lazy(
  () => import("./pages/courses/programFB/LearningJourneyFB")
);
const BenefitsGridFB = lazy(
  () => import("./pages/courses/programFB/BenefitsGridFB")
);
const ProgramCertificateFB = lazy(
  () => import("./pages/courses/programFB/ProgramCertificateFB")
);
const MentorsFB = lazy(() => import("./pages/courses/programFB/MentorsFB"));
const SkillsAndToolsFB = lazy(
  () => import("./pages/courses/programFB/SkillsAndToolsFB")
);
const SkillsAssessmentFB = lazy(
  () => import("./pages/courses/programFB/SkillAssessmentFB")
);
const PricingFB = lazy(() => import("./pages/courses/programFB/PricingFB"));
const FAQFB = lazy(() => import("./pages/courses/programFB/FAQFB"));
const StickyBookNavFB = lazy(
  () => import("./pages/courses/programFB/StickyBookNavFB")
);
const WhoIsThisContentForFB = lazy(
  () => import("./pages/courses/programFB/WhoIsThisContentForFB")
);
const TestimonialsFB = lazy(
  () => import("./pages/courses/programFB/TestimonialsFB")
);

// Data Analytics FB Components
const DataHeroFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataHeroFB")
);
const DataProgramFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataProgramFB")
);
const DataSkillsToolsFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataSkillsToolsFB")
);
const CAPEFB = lazy(() => import("./pages/courses/dataAnalyticsFB/CAPEFB"));
const DataCertificateFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataCertificateFB")
);
const DataMentorsFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataMentorsFB")
);
const DataPricingFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataPricingFB")
);
const DataAnalyticsFAQFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataAnalyticsFAQFB")
);
const DataJourneyFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DataJourneyFB")
);
const DAWhoIsThisContentForFB = lazy(
  () => import("./pages/courses/dataAnalyticsFB/DAWhoIsThisContentForFB")
);

// No Code Tool FB Components
const NoCodeHeroFB = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeHeroFB")
);
const NoCodeBenefitsGridFB = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeBenefitsGridFB")
);
const NoCodeLearningJourneyFB = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeLearningJourneyFB")
);
const TargetAudienceFB = lazy(
  () => import("./pages/courses/noCodeToolFB/TargetAudienceFB")
);
const NoCodeToolFB = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeToolFB")
);
const ProjectsSectionFB = lazy(
  () => import("./pages/courses/noCodeToolFB/ProjectSectionFB")
);
const PricingSectionFB = lazy(
  () => import("./pages/courses/noCodeToolFB/PricingSectionFB")
);
const NoCodeFAQFB = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeFAQFB")
);
const TimelineFB = lazy(
  () => import("./pages/courses/noCodeToolFB/TimelineFB")
);
const NoCodeDidYouKnow = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeDidYouKnow")
);
const NoCodeCertificateFB = lazy(
  () => import("./pages/courses/noCodeToolFB/NoCodeCertificateFB")
);

// XSAT Components
const XSATInfo = lazy(() =>
  import("./pages/XSAT/LandingPage/XSATInfo").then((module) => ({
    default: module.XSATInfo,
  }))
);
const OtherEnquiries = lazy(() => import("./pages/admin/OtherEnquiries"));
const XSATHero = lazy(() =>
  import("./pages/XSAT/LandingPage/XSATHero").then((module) => ({
    default: module.XSATHero,
  }))
);
const XSATAbout = lazy(() =>
  import("./pages/XSAT/LandingPage/XSATAbout").then((module) => ({
    default: module.XSATAbout,
  }))
);
const XSATKeyDates = lazy(() =>
  import("./pages/XSAT/LandingPage/XSATKeyDates").then((module) => ({
    default: module.XSATKeyDates,
  }))
);
const XSATExamInfo = lazy(() =>
  import("./pages/XSAT/LandingPage/XSATExamInfo").then((module) => ({
    default: module.XSATExamInfo,
  }))
);
const XSATFAQ = lazy(() =>
  import("./pages/XSAT/LandingPage/XSATFAQ").then((module) => ({
    default: module.XSATFAQ,
  }))
);

const WorkshopDetails = lazy(() => import("./pages/admin/WorkshopDetails"));

// Meta Pixel

function isDummyRoute(pathname: string): boolean {
  const adRoutes = [
    "/courses/product-management-program-fb",
    "/courses/data-analytics-program-fb",
    "/courses/no-code-tool-program-fb",
    "/courses/product-management-program-eie",
    "/courses/data-analytics-program-eie",
    "/xsat",
    "/thank-you",
    "/workshop/da-masterclass",
    "/workshop/pm-masterclass",
  ];
  return adRoutes.includes(pathname);
}

function HomePage() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse(null); // Reset course selection on homepage
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <LogoSlider />
      <Features />
      <BecomeAMentorFeatures />
      <CTA />
    </Suspense>
  );
}

function WorkshopPageDA() {
  return (
    <Suspense fallback={<Loader />}>
      <WSHero />
      <WSAbout />
      <WSTestimonial />
      <WSCommunity />
    </Suspense>
  );
}

function WorkshopPagePM() {
  return (
    <Suspense fallback={<Loader />}>
      <WSHeroPM />
      <WSAboutPM />
      <WSTestimonialPM />
      <WSCommunityPM />
    </Suspense>
  );
}

function ProgramAnalyticsPage() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <ProgramHeroEIE />
      <ProgramHighlightsEIE />
      <LearningJourneyEIE />
      <BenefitsGridEIE />
      <ProgramCertificateEIE />
      <MentorsEIE />
      <SkillsAndToolsEIE />
      <SkillsAssessmentEIE />
      <PricingEIE />
      <FAQEIE />
      <StickyBookNav />
    </Suspense>
  );
}

// Program Analytics Dummy Page With the Same Content
function ProgramAnalyticsPageFB() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <ProgramHeroFB />
      <WhoIsThisContentForFB />
      <ProgramHighlightsFB />
      <BYDPFB />
      <LearningJourneyFB />
      <BenefitsGridFB />
      <ProgramCertificateFB />
      <MentorsFB />
      <SkillsAndToolsFB />
      <SkillsAssessmentFB />
      <PricingFB />
      <TestimonialsFB />
      <FAQFB />
      <StickyBookNavFB />
    </Suspense>
  );
}

function ProgramAnalyticsPageEIE() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <HeaderEIE />
      <ProgramHeroEIE />
      <ProgramHighlightsEIE />
      <LearningJourneyEIE />
      <BenefitsGridEIE />
      <ProgramCertificateEIE />
      <MentorsEIE />
      <SkillsAndToolsEIE />
      <SkillsAssessmentEIE />
      <PricingEIE />
      <FAQEIE />
      <StickyBookNav />
    </Suspense>
  );
}

function DataAnalyticsPage() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <DataHeroEIE />
      <WhoIsThisContentForEIE />
      <DataProgramEIE />
      <CAPEEIE />
      <DataJourneyEIE />
      <DataCertificateEIE />
      <DataMentorsEIE />
      <DataSkillsToolsEIE />
      <DataPricingEIE />
      <DataAnalyticsFAQFB />
      <StickyBookNav />
    </Suspense>
  );
}

function DataAnalyticsPageEIE() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <HeaderEIE />
      <DataHeroEIE />
      <WhoIsThisContentForEIE />
      <DataProgramEIE />
      <CAPEEIE />
      <DataJourneyEIE />
      <DataCertificateEIE />
      <DataMentorsEIE />
      <DataSkillsToolsEIE />
      <DataPricingEIE />
      <DataAnalyticsFAQFB />
      <StickyBookNav />
    </Suspense>
  );
}

// Data Analytics Dummy Page With the Same Content

function DataAnalyticsPageFB() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <DataHeroFB />
      <WhoIsThisContentForFB />
      <DataProgramFB />
      <CAPEFB />
      <DataJourneyFB />
      <DataCertificateFB />
      <DataMentorsFB />
      <DataSkillsToolsFB />
      <DataPricingFB />
      <TestimonialsFB />
      <DataAnalyticsFAQFB />
      <StickyBookNavFB />
    </Suspense>
  );
}

function NoCodeToolPage() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("No-Code Development");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <NoCodeHero />
      <NoCodeDidYouKnow />
      <TargetAudienceFB />
      <NoCodeBenefitsGrid />
      <NoCodeLearningJourney />
      <TargetAudience />
      <Timeline />
      <NoCodeTool />
      <NoCodeCertificateFB />
      <ProjectsSection />
      <PricingSection />
      <NoCodeFAQ />
    </Suspense>
  );
}

function NoCodeToolPageFB() {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("No-Code Development");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <NoCodeHeroFB />
      <NoCodeDidYouKnow />
      <TargetAudienceFB />
      <NoCodeBenefitsGridFB />
      <NoCodeLearningJourneyFB />
      <TimelineFB />
      <NoCodeToolFB />
      <NoCodeCertificateFB />
      <ProjectsSectionFB />
      <PricingSectionFB />
      <NoCodeFAQFB />
      <StickyBookNavFB />
    </Suspense>
  );
}

function AboutPage() {
  return (
    <Suspense fallback={<Loader />}>
      <HeroAbout />
      <Values />
      <Team />
    </Suspense>
  );
}

function XSAT() {
  return (
    <Suspense fallback={<Loader />}>
      <XSATHero />
      <XSATInfo />
      <XSATAbout />
      <XSATKeyDates />
      <XSATExamInfo />
      <XSATFAQ />
    </Suspense>
  );
}

function App() {
  const [isEnrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  const handleEnrollClick = () => {
    setEnrollmentModalOpen(true);
  };

  const handleCloseModal = () => {
    setEnrollmentModalOpen(false);
  };

  useEffect(() => {
    trackViewContent();

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <CourseProvider>
        <Router basename="/">
          <MetaPixel />
          <div className="relative">
            <Toaster position="top-center" />
            <ScrollToTop />
            <RouteLogic setSelectedCourse={setSelectedCourse} />
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!isDummyRoute(location.pathname) &&
                  location.pathname !== "/xsat" && (
                    <Navbar onEnrollClick={handleEnrollClick} />
                  )}

                <EnrollmentModal
                  isOpen={isEnrollmentModalOpen}
                  onClose={handleCloseModal}
                />
                {/* bg-black, py-10 */}
                <main className="min-h-screen">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<Loader />}>
                          <HomePage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/hire-with-us"
                      element={
                        <Suspense fallback={<Loader />}>
                          <HireHero />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/become-a-mentor"
                      element={
                        <Suspense fallback={<Loader />}>
                          <BecomeAMentor />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/about-us"
                      element={
                        <Suspense fallback={<Loader />}>
                          <AboutPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/blogs"
                      element={
                        <Suspense fallback={<Loader />}>
                          <Blogs />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/login"
                      element={
                        <Suspense fallback={<Loader />}>
                          <Login />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/blogs"
                      element={
                        <Suspense fallback={<Loader />}>
                          <RoleProtectedRoute requiredRole="blog_user">
                            <BlogDashboard />
                          </RoleProtectedRoute>
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/blogs/new"
                      element={
                        <Suspense fallback={<Loader />}>
                          <RoleProtectedRoute requiredRole="blog_user">
                            <BlogForm onClose={() => {}} onSuccess={() => {}} />
                          </RoleProtectedRoute>
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/blogs/edit/:id"
                      element={
                        <Suspense fallback={<Loader />}>
                          <RoleProtectedRoute requiredRole="blog_user">
                            <BlogForm onClose={() => {}} onSuccess={() => {}} />
                          </RoleProtectedRoute>
                        </Suspense>
                      }
                    />
                    <Route
                      path="/privacy-policy"
                      element={
                        <Suspense fallback={<Loader />}>
                          <Privacy />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/terms-and-conditions"
                      element={
                        <Suspense fallback={<Loader />}>
                          <Terms />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/refund-policy"
                      element={
                        <Suspense fallback={<Loader />}>
                          <Refund />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/courses/product-management"
                      element={
                        <Suspense fallback={<Loader />}>
                          <ProgramAnalyticsPage />
                        </Suspense>
                      }
                    />

                    <Route
                      path="/courses/data-analytics"
                      element={
                        <Suspense fallback={<Loader />}>
                          <DataAnalyticsPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/courses/no-code-tool-program"
                      element={
                        <Suspense fallback={<Loader />}>
                          <NoCodeToolPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/workshop/da-masterclass"
                      element={
                        <Suspense fallback={<Loader />}>
                          <WorkshopPageDA />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/workshop/pm-masterclass"
                      element={
                        <Suspense fallback={<Loader />}>
                          <WorkshopPagePM />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/xsat"
                      element={
                        <Suspense fallback={<Loader />}>
                          <XSAT />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin"
                      element={
                        <Suspense fallback={<Loader />}>
                          <RoleProtectedRoute>
                            <AdminDashboard />
                          </RoleProtectedRoute>
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/enrollments"
                      element={
                        <Suspense fallback={<Loader />}>
                          <RoleProtectedRoute>
                            <EnrollmentDashboard />
                          </RoleProtectedRoute>
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/other-enquiries"
                      element={<OtherEnquiries />}
                    />

                    <Route
                      path="/admin/workshop-details"
                      element={
                        <Suspense fallback={<Loader />}>
                          <RoleProtectedRoute requiredRole="workshop_viewer">
                            <WorkshopDetails />
                          </RoleProtectedRoute>
                        </Suspense>
                      }
                    />

                    {/* Dummy Page FOR ADS */}
                    <Route
                      path="/courses/product-management-program-fb"
                      element={
                        <Suspense fallback={<Loader />}>
                          <ProgramAnalyticsPageFB />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/courses/product-management-program-eie"
                      element={
                        <Suspense fallback={<Loader />}>
                          <ProgramAnalyticsPageEIE />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/courses/data-analytics-program-fb"
                      element={
                        <Suspense fallback={<Loader />}>
                          <DataAnalyticsPageFB />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/courses/data-analytics-program-eie"
                      element={
                        <Suspense fallback={<Loader />}>
                          <DataAnalyticsPageEIE />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/courses/no-code-tool-program-fb"
                      element={
                        <Suspense fallback={<Loader />}>
                          <NoCodeToolPageFB />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/thank-you"
                      element={<ThankYouPageWrapper />}
                    />
                  </Routes>
                  {!isDummyRoute(window.location.pathname) && (
                    <>
                      <Navbar onEnrollClick={handleEnrollClick} />
                      <ChatWidget />
                    </>
                  )}
                </main>
              </>
            )}

            {!isLoading && !isDummyRoute(window.location.pathname) && (
              <Footer />
            )}
          </div>
        </Router>
      </CourseProvider>
    </HelmetProvider>
  );
}

function RouteLogic({
  setSelectedCourse,
}: {
  setSelectedCourse: (course: string | null) => void;
}) {
  const location = useLocation();

  useEffect(() => {
    // Set default course context based on route
    if (
      location.pathname === "/courses/product-management" ||
      location.pathname === "/courses/product-management-program-fb" ||
      location.pathname === "/courses/product-management-program-eie"
    ) {
      setSelectedCourse("Product Management");
    } else if (
      location.pathname === "/courses/data-analytics" ||
      location.pathname === "/courses/data-analytics-program-fb"
    ) {
      setSelectedCourse("Data Analytics");
    } else if (
      location.pathname === "/courses/no-code-tool-program" ||
      location.pathname === "/courses/no-code-tool-program-fb"
    ) {
      setSelectedCourse("No-Code Development");
    } else {
      setSelectedCourse(null); // Reset for non-course pages
    }
  }, [location, setSelectedCourse]);

  return null;
}

function ThankYouPageWrapper() {
  const location = useLocation();
  return (
    <ThankYouPage courseName={location.state?.courseName || "our course"} />
  );
}

export default App;
