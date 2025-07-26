import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/Loader";
import { CourseProvider, useCourseContext } from "./context/courseContext";
import { Toaster } from "react-hot-toast";
import { MetaPixel } from "./components/MetaPixel";
import { trackViewContent } from "./utils/metaPixel";
import ScrollToTop from "./components/ScrollToTop";

import { MainLayout } from "./layouts/MainLayout";
import { RouteLogic } from "./routes/utils/routeUtils";
import { mainRoutes } from "./routes/mainRoutes";
import { workshopRoutes } from "./routes/workshopRoutes";
import { flyerRoutes } from "./routes/flyerRoutes";
import { courseRoutes } from "./routes/courseRoutes";
import AdminPage from "./pages/admin/AdminPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdAnalysis from "./pages/admin/AdAnalysis";
import { ProfileRoutes } from "./routes/profileRoutes";
import SignUpForm from "./components/auth/SignUpForm";
import { SignInForm } from "./components/auth/SignInForm";
import { UserProvider, useUser } from "./context/UserContext";
import {  JobApplication, JobDetails, JobList } from "./pages/jobs";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyApplications from "./pages/jobs/MyApplications";

// Create a client outside of the component to prevent re-creation on re-renders
const queryClient = new QueryClient();

function AppContent() {
  const { setSelectedCourse } = useCourseContext();
  const { isLoading } = useUser();

  useEffect(() => {
    trackViewContent();
  }, []);

  if (isLoading) {
    return <Loader />;
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

      <RouteLogic setSelectedCourse={setSelectedCourse} />

      <MainLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {mainRoutes}
            {workshopRoutes}
            {flyerRoutes}
            {courseRoutes}
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />

            {/* Public Job Routes */}
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetails />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile/*" element={<ProfileRoutes />} />
              <Route path="/jobs/:id/apply" element={<JobApplication />} /> 
              <Route path="/my-applications" element={<MyApplications />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/enrollments" element={<AdminPage />} />
            <Route path="/admin/ads" element={<AdAnalysis />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <CourseProvider>
          <UserProvider>
            <AppContent />
          </UserProvider>
        </CourseProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
