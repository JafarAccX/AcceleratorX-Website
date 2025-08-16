import { useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
// import ChatWidget from "../components/ChatWidget";
// import Loader from "../components/Loader";
import { getRouteLayout } from "../utils/layoutUtils";

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

  const { showNavbar, showFooter } = getRouteLayout(location.pathname);

  return (
    <div className="relative">
      {showNavbar && <Navbar />}

      {/* Google Translate Widget */}
      {/* <GoogleTranslate /> */}

      {isEnrollmentModalOpen && (
        <Suspense fallback={null}>
          <EnrollmentModal isOpen={isEnrollmentModalOpen} onClose={handleCloseModal} />
        </Suspense>
      )}

      <main className="min-h-screen">{children}</main>

      {showFooter && (
        <>
          {/* <ChatWidget /> */}
          <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
};
