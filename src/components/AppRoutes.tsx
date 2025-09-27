import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import { MainLayout } from "../layouts/MainLayout";
import { RouteLogic } from "../routes/utils/routeUtils";
import { mainRoutes } from "../routes/mainRoutes";
import { workshopRoutes } from "../routes/workshopRoutes";
import { flyerRoutes } from "../routes/flyerRoutes";
import { courseRoutes } from "../routes/courseRoutes";
import { useCourseContext } from "../context/courseContext";

// Lazy-loaded routes and pages
const ProfileRoutes = lazy(() => import("../routes/profileRoutes").then(m => ({ default: m.ProfileRoutes })));
const SignUpForm = lazy(() => import("./auth/SignUpForm"));
const SignInForm = lazy(() => import("./auth/SignInForm").then(m => ({ default: m.SignInForm })));
const JobApplication = lazy(() => import("../pages/jobs/JobApplication"));
const JobDetails = lazy(() => import("../pages/jobs/JobDetails"));
const JobList = lazy(() => import("../pages/jobs/JobList"));
const MyApplications = lazy(() => import("../pages/jobs/MyApplications"));
const CertificateDisplayPage = lazy(() => import("../pages/CertificateDisplayPage"));
import { ProtectedRoute } from "./auth/ProtectedRoute";

export const AppRoutes = () => {
  const { setSelectedCourse } = useCourseContext();

  return (
    <>
      <RouteLogic setSelectedCourse={setSelectedCourse} />
      <MainLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {mainRoutes}
            {workshopRoutes}
            {flyerRoutes}
            {courseRoutes}
            <Route key="sign-up" path="/sign-up" element={<SignUpForm />} />
            <Route key="sign-in" path="/sign-in" element={<SignInForm />} />

            {/* Public Job Routes */}
            <Route key="jobs" path="/jobs" element={<JobList />} />
            <Route key="job-details" path="/jobs/:id" element={<JobDetails />} />

            {/* Public Certificate Route */}
            <Route key="certificate" path="/certificate/:certificateId" element={<CertificateDisplayPage />} />

            {/* Protected Routes */}
            <Route key="protected" element={<ProtectedRoute />}>
              <Route key="profile" path="/profile/*" element={<ProfileRoutes />} />
              <Route key="job-apply" path="/jobs/:id/apply" element={<JobApplication />} /> 
              <Route key="my-applications" path="/my-applications" element={<MyApplications />} />
            </Route>
          </Routes>
        </Suspense>
      </MainLayout>
    </>
  );
};
