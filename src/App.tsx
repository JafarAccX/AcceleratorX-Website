import { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { CourseProvider, useCourseContext } from "./context/courseContext";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/XSAT/LandingPage/LandingPage";
import RoleProtectedRoute from "./components/RoleProtectedRoute";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const BecomeAMentor = lazy(() => import("./pages/becomeamentor/BecomeAMentor"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const BlogDashboard = lazy(() => import("./pages/blogs/BlogDashboard"));
const Login = lazy(() => import("./pages/auth/Login"));
const BlogForm = lazy(() => import("./pages/blogs/BlogForm"));
// const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
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
// const AdminPage = lazy(() => import("./pages/admin/AdminPage"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const EnrollmentDashboard = lazy(() => import("./pages/admin/AdminPage"));

// Context for managing course selection

import { trackViewContent } from './utils/metaPixel';

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
      <ProgramHero />
      <ProgramHighlights />
      <BYDP />
      <LearningJourney />
      <BenefitsGrid />
      <Mentors />
      <SkillsAndTools />
      <SkillsAssessment />
      <Pricing />
      <FAQ />
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
      <DataHero />
      <DataProgram />
      <CAPE />
      <DataMentors />
      <DataSkillsTools />
      <DataPricing />
      {/* <StickyBookNav /> */}
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
      <NoCodeBenefitsGrid />
      <NoCodeLearningJourney />
      <TargetAudience />
      <Timeline />
      <NoCodeTool />
      <ProjectsSection />
      <PricingSection />
      <NoCodeFAQ />
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
    <CourseProvider>
      <Router basename="/">
        <div className="relative">
          <Toaster position="top-center" />
          <ScrollToTop />
          <RouteLogic setSelectedCourse={setSelectedCourse} />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Navbar onEnrollClick={handleEnrollClick} />
              <EnrollmentModal
                isOpen={isEnrollmentModalOpen}
                onClose={handleCloseModal}
              />
              <main className="bg-black min-h-screen py-10">
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
                        <RoleProtectedRoute requiredRole="admin">
                          <BlogDashboard />
                        </RoleProtectedRoute>
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/blogs/new"
                    element={
                      <Suspense fallback={<Loader />}>
                        <RoleProtectedRoute requiredRole="admin">
                          <BlogForm onClose={() => {}} onSuccess={() => {}} />
                        </RoleProtectedRoute>
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/blogs/edit/:id"
                    element={
                      <Suspense fallback={<Loader />}>
                        <RoleProtectedRoute requiredRole="admin">
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
                    path="/xsat"
                    element={
                      <Suspense fallback={<Loader />}>
                        <LandingPage />
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
                </Routes>
                <ChatWidget />
              </main>
            </>
          )}

          {!isLoading && <Footer />}
        </div>
      </Router>
    </CourseProvider>
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
    if (location.pathname === "/courses/product-management") {
      setSelectedCourse("Product Management");
    } else if (location.pathname === "/courses/data-analytics") {
      setSelectedCourse("Data Analytics");
    } else if (location.pathname === "/courses/no-code-tool-program") {
      setSelectedCourse("No-Code Development");
    } else {
      setSelectedCourse(null); // Reset for non-course pages
    }
  }, [location, setSelectedCourse]);

  return null;
}

export default App;
