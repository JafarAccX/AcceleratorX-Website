import { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
// import AppDownloadPOP from "../components/modals/AppDownloadPOP";
import { getRouteLayout } from "../utils/layoutUtils";
import Navbar from "../components/landing-page/Navbar";

import Footer from "../components/layout/Footer";
import EnrollmentModal from "../components/modals/EnrollmentModal";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isEnrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const location = useLocation();

  // const handleEnrollClick = () => {
  //   setEnrollmentModalOpen(true);
  // };

  const handleCloseModal = () => {
    setEnrollmentModalOpen(false);
  };

  // Single source of truth for opening/closing EnrollmentModal via window events
  useEffect(() => {
    const openHandler = () => setEnrollmentModalOpen(true);
    const closeHandler = () => setEnrollmentModalOpen(false);
    window.addEventListener("open-enrollment-modal", openHandler as EventListener);
    window.addEventListener("close-enrollment-modal", closeHandler as EventListener);
    return () => {
      window.removeEventListener("open-enrollment-modal", openHandler as EventListener);
      window.removeEventListener("close-enrollment-modal", closeHandler as EventListener);
    };
  }, []);

  const { showNavbar, showFooter } = getRouteLayout(location.pathname);

  return (
    <div className="relative min-h-screen flex flex-col">
      {showNavbar && <Navbar />}

      {/* Google Translate Widget */}
      {/* <GoogleTranslate /> */}

      <EnrollmentModal isOpen={isEnrollmentModalOpen} onClose={handleCloseModal} />

      <main className="flex-grow">{children}</main>

      {showFooter && (
        <>
          <Footer />
        </>
      )}
      {/* App download popup (global) */}
      {/* <AppDownloadPOP /> */}
    </div>
  );
};
