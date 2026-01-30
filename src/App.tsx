import { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LottieLoader from "./components/LottieLoader";
import { CourseProvider } from "./context/courseContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { MetaTrackingDebugger } from "./components/MetaTrackingDebugger";
import { AppRoutes } from "./components/AppRoutes";
import { UserProvider, useUser } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MetaPixel } from "./components/MetaPixel";

// Create a client outside of the component to prevent re-creation on re-renders
const queryClient = new QueryClient();

function AppContent() {
  const { isLoading } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // On initial load, isLoading is true. 
  // On server, we render the app content.
  // On client, we must also render app content for the first pass to avoid hydration mismatch.
  // After hydration (isMounted = true), if we are still loading, then we can show the loader.
  if (isMounted && isLoading) {
    return <LottieLoader />;
  }

  return (
    <Router basename="/">
      <ScrollToTop />
      <MetaPixel />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <AppRoutes />
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <HelmetProvider>
          <CourseProvider>
            <UserProvider>
              <Suspense fallback={<LottieLoader />}>
                <AppContent />
              </Suspense>
              <MetaTrackingDebugger />
            </UserProvider>
          </CourseProvider>
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
