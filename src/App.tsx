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
import ThankYouPage from "./components/ThankYouPage";
import AdminPage from "./pages/admin/AdminPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdAnalysis from "./pages/admin/AdAnalysis";
import { profileRoutes } from "./routes/profileRoutes";
import SignUpForm from "./components/auth/SignUpForm";
import SignInForm from "./components/auth/SignInForm";
import { UserProvider } from "./context/UserContext";
import { AppliedJobs, JobApplication, JobDetails, JobList } from "./pages/jobs";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

function App() {
  const { setSelectedCourse } = useCourseContext();

  // Track view content on mount
  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <HelmetProvider>
      <CourseProvider>
        <UserProvider>
          <Router basename="/">
            <ScrollToTop />
            <MetaPixel />
            <Toaster position="top-center" />
            <RouteLogic setSelectedCourse={setSelectedCourse} />

            <MainLayout>
              <Suspense fallback={<Loader />}>
                <Routes>
                  {mainRoutes}
                  {workshopRoutes}
                  {flyerRoutes}
                  {courseRoutes}
                  {profileRoutes}
                  <Route path="/sign-up" element={<SignUpForm />} />
                  <Route path="/sign-in" element={<SignInForm />} />
                  {/* Admin Routes */}
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/enrollments" element={<AdminPage />} />
                  <Route path="/admin/ads" element={<AdAnalysis />} />
                  <Route path="/jobs" element={<JobList />} />,
                  <Route path="/jobs/:id" element={<JobDetails />} />,
                  <Route
                    path="/jobs/:id/apply"
                    element={
                      <ProtectedRoute>
                        <JobApplication />
                      </ProtectedRoute>
                    }
                  />
                  ,
                  <Route
                    path="/jobs/applied-jobs"
                    element={
                      <ProtectedRoute>
                        <AppliedJobs />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </MainLayout>
          </Router>
        </UserProvider>
      </CourseProvider>
    </HelmetProvider>
  );
}

export default App;
