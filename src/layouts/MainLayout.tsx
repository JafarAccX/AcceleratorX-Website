import { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import AppDownloadPOP from "../components/AppDownloadPOP";
// import ChatWidget from "../components/ChatWidget";
// import Loader from "../components/Loader";
import { getRouteLayout } from "../utils/layoutUtils";
import Navbar from "../components/landing-page/Navbar";

const Footer = lazy(() => import("../components/Footer"));
const EnrollmentModal = lazy(() => import("../components/EnrollmentModal"));

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
    <div className="relative">
      {showNavbar && <Navbar />}

      {/* Google Translate Widget */}
      {/* <GoogleTranslate /> */}

      <Suspense fallback={null}>
        <EnrollmentModal isOpen={isEnrollmentModalOpen} onClose={handleCloseModal} />
      </Suspense>

      <main className="min-h-screen">{children}</main>

      {showFooter && (
        <>
          {/* <ChatWidget /> */}
          <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
            <Footer />
          </Suspense>
        </>
      )}
      {/* App download popup (global) */}
      <AppDownloadPOP />
    </div>
  );
};
