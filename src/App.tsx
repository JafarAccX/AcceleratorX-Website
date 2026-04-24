import { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/ui/Loader";
import { CourseProvider } from "./context/courseContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/layout/ScrollToTop";
import { MetaTrackingDebugger } from "./components/seo/MetaTrackingDebugger";
import { AppRoutes } from "./components/layout/AppRoutes";
import { UserProvider, useUser } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MetaPixel } from "./components/seo/MetaPixel";

// Create a client outside of the component to prevent re-creation on re-renders
const queryClient = new QueryClient();

function AppContent() {
  const { isLoading } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // We no longer block the entire app with a global loader.
  // Public routes will render immediately, and protected routes
  // handle their own loading state.

  return (
    <Router basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <MetaPixel />
      {/* Toaster renders DOM elements — only mount after hydration to avoid SSR mismatch */}
      {isMounted && (
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              zIndex: 9999,
            },
          }}
        />
      )}
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
              <Suspense fallback={<Loader />}>
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
