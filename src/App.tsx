import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import BecomeAMentor from "./pages/becomeamentor/BecomeAMentor";

//Blogs Section
import Blogs from "./pages/blogs/Blogs";
import BlogDashboard from "./pages/blogs/BlogDashboard";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogForm from "./pages/blogs/BlogForm";

import HeroAbout from "./pages/aboutus/HeroAbout";
import Team from "./pages/aboutus/Team";
import Values from "./pages/aboutus/Values";
import ScrollToTop from "./components/ScrollToTop";
import LogoSlider from "./components/LogoSlider";
import HireHero from "./pages/hirewithus/HireHero";

// Data Analytics Course Pages
import DataHero from "./pages/courses/dataanalytics/DataHero";
import DataProgram from "./pages/courses/dataanalytics/DataProgram";
import CAPE from "./pages/courses/dataanalytics/CAPE";
import DataPricing from "./pages/courses/dataanalytics/dataPricing";
import DataMentors from "./pages/courses/dataanalytics/DataMentors";
import DataSkillsTools from "./pages/courses/dataanalytics/DataSkillsTools";

// Program Management Course
import ProgramHighlights from "./pages/courses/productmanagement/ProgramHighlights";
import ProgramHero from "./pages/courses/productmanagement/ProgamHero";
import BYDP from "./pages/courses/productmanagement/BYDP";
import BenefitsGrid from "./pages/courses/productmanagement/BenefitsGrid";
import Mentors from "./pages/courses/productmanagement/Mentors";
import SkillsAndTools from "./pages/courses/productmanagement/SkillsAndTools";
import Pricing from "./pages/courses/productmanagement/Pricing";
import EnrollmentModal from "./components/EnrollmentModal";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import SkillsAssessment from "./pages/courses/productmanagement/SkillAssessment";
import LearningJourney from "./pages/courses/productmanagement/LearningJourney";
import Loader from "./components/Loader";
import BecomeAMentorFeatures from "./components/BecomeAMentorFeatures";
import ChatWidget from "./components/ChatWidget";
import { CourseProvider, useCourseContext } from "./context/courseContext";
import StickyBookNav from "./components/StickyBookNav";
import Refund from "./pages/refund/Refund";
import { Toaster } from "react-hot-toast";

// Context for managing course selection

function HomePage() {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse(null); // Reset course selection on homepage
  }, [setSelectedCourse]);

  return (
    <>
      <Hero />
      <LogoSlider />
      <Features />
      <BecomeAMentorFeatures />
      <CTA />
    </>
  );
}

function ProgramAnalyticsPage() {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <>
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
    </>
  );
}

function DataAnalyticsPage() {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <>
      <DataHero />
      <DataProgram />
      <CAPE />
      <DataMentors />
      <DataSkillsTools />
      <DataPricing />
      {/* <StickyBookNav /> */}
    </>
  );
}

function AboutPage() {
  return (
    <>
      <HeroAbout />
      <Values />
      <Team />
    </>
  );
}

function App() {
  const [isEnrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { setSelectedCourse } = useCourseContext();

  const handleEnrollClick = () => {
    setEnrollmentModalOpen(true);
  };

  const handleCloseModal = () => {
    setEnrollmentModalOpen(false);
  };

  useEffect(() => {
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
                  <Route path="/" element={<HomePage />} />
                  <Route path="/hire-with-us" element={<HireHero />} />
                  <Route path="/become-a-mentor" element={<BecomeAMentor />} />
                  <Route path="/about-us" element={<AboutPage />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/blogs/dashboard"
                    element={
                      <ProtectedRoute>
                        <BlogDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/blogs/manage"
                    element={
                      <ProtectedRoute>
                        <BlogForm onClose={() => {}} onSuccess={() => {}} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route path="/terms-and-conditions" element={<Terms />} />
                  <Route path="/refund-policy" element={<Refund />} />
                  <Route
                    path="/courses/product-management"
                    element={<ProgramAnalyticsPage />}
                  />
                  <Route
                    path="/courses/data-analytics"
                    element={<DataAnalyticsPage />}
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

function RouteLogic({ setSelectedCourse }) {
  const location = useLocation();

  useEffect(() => {
    // Set default course context based on route
    if (location.pathname === "/courses/product-management") {
      setSelectedCourse("Product Management");
    } else if (location.pathname === "/courses/data-analytics") {
      setSelectedCourse("Data Analytics");
    } else {
      setSelectedCourse(null); // Reset for non-course pages
    }
  }, [location, setSelectedCourse]);

  return null;
}

export default App;
