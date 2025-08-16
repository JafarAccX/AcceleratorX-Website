import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ChatWidget from "../components/ChatWidget";
import EnrollmentModal from "../components/EnrollmentModal";
import Loader from "../components/Loader";
import GoogleTranslate from "../components/GoogleTranslate";
import { getRouteLayout } from "../utils/layoutUtils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isEnrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // const handleEnrollClick = () => {
  //   setEnrollmentModalOpen(true);
  // };

  const handleCloseModal = () => {
    setEnrollmentModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const { showNavbar, showFooter } = getRouteLayout(location.pathname);

  return (
    <div className="relative">
      {showNavbar && <Navbar />}

      {/* Google Translate Widget */}
      {/* <GoogleTranslate /> */}

      <EnrollmentModal isOpen={isEnrollmentModalOpen} onClose={handleCloseModal} />

      <main className="min-h-screen">{children}</main>

      {showFooter && (
        <>
          {/* <ChatWidget /> */}
          <Footer />
        </>
      )}
    </div>
  );
};
