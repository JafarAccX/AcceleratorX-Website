import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import BankingFeatures from "./components/BankingFeatures";
import BenefitsGrid from "./components/BenefitsGrid";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import SkillsAssessment from "./components/SkillAssessment";
import BecomeAMentor from "./pages/becomeamentor/BecomeAMentor";
import Blogs from "./pages/blogs/Blogs";
import HireWithUs from "./pages/hirewithus/HireWithUs";
import ProgramHero from "./pages/program/ProgamHero";
import BYDP from "./pages/program/BYDP";
import Mentors from "./pages/program/Mentors";
import Pricing from "./pages/program/Pricing";
import SkillsAndTools from "./pages/program/SkillsAndTools";
import ProgramHighlights from "./pages/program/ProgramHighlights";
import HeroAbout from "./pages/aboutus/HeroAbout";
import Team from "./pages/aboutus/Team";
import Values from "./pages/aboutus/Values";
import LearningJourney from "./components/LearningJourney";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <BankingFeatures />
      <BenefitsGrid />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
}

function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <ProgramHighlights />
      <BYDP />
      <LearningJourney />
      <Mentors />
      <SkillsAndTools />
      <SkillsAssessment />
      <Pricing />
      <FAQ />
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="bg-black min-h-screen">
        {isLoading ? (
          <div className="flex space-x-2 justify-center items-center bg-red-100 h-screen dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/hirewithus" element={<HireWithUs />} />
            <Route path="/becomeamentor" element={<BecomeAMentor />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        )}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
