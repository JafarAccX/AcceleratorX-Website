import { lazy } from "react";
import { Route } from "react-router-dom";
import RoleProtectedRoute from "../components/RoleProtectedRoute";
import { ThankYouPageWrapper } from "./utils/routeUtils";
import WorkshopPaymentSuccess from "../pages/workshop-payment/Success";
import XSATEntry from "../pages/courses/EntryPoint/XSATEntry";
import PerformanceAnalytics from "../pages/admin/PerformanceAnalytics";
import EventManagementPage from "../pages/events/event";
import RegistrationSuccess from "../pages/events/registration-successful";

// Lazy imports for main routes
const HomePage = lazy(() => import("../pages/courses/EntryPoint/HomePage"));
const AboutPage = lazy(() => import("../pages/courses/EntryPoint/AboutPage"));
const HireHero = lazy(() => import("../pages/hirewithus/HireHero"));
const CareersHero = lazy(() => import("../components/CareersHero"));
const BecomeAMentor = lazy(() => import("../pages/becomeamentor/BecomeAMentor"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const Login = lazy(() => import("../pages/auth/Login"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const Refund = lazy(() => import("../pages/refund/Refund"));

// Course Routes
const GenAICourse = lazy(() => import("../pages/courses/EntryPoint/GenAIEntry"));
const GenAICourseAD = lazy(() => import("../pages/courses/EntryPoint/GenAIAd"));
const DMAICourse = lazy(() => import("../pages/courses/EntryPoint/DigitalMarketingEntry"));
const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

// Admin Routes
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const EnrollmentDashboard = lazy(() => import("../pages/admin/AdminPage"));
const OtherEnquiries = lazy(() => import("../pages/admin/OtherEnquiries"));
const AdAnalysis = lazy(() => import("../pages/admin/AdAnalysis"));
const ScholarshipDetails = lazy(() => import("../pages/admin/ScholarshipDetails"));
const WorkshopDetails = lazy(() => import("../pages/admin/WorkshopDetails"));

// Blog Admin Routes
const BlogDashboard = lazy(() => import("../pages/blogs/BlogDashboard"));
const BlogForm = lazy(() => import("../pages/blogs/BlogForm"));
const Events = lazy(() => import("../pages/events/Events"));

export const mainRoutes = [
  <Route path="/" element={<HomePage />} />,
  <Route path="/about-us" element={<AboutPage />} />,
  <Route path="/hire-with-us" element={<HireHero />} />,
  <Route path="/careers" element={<CareersHero />} />,
  <Route path="/become-a-mentor" element={<BecomeAMentor />} />,
  <Route path="/blogs" element={<Blogs />} />,
  <Route path="/login" element={<Login />} />,
  <Route path="/privacy-policy" element={<Privacy />} />,
  <Route path="/terms-and-conditions" element={<Terms />} />,
  <Route path="/refund-policy" element={<Refund />} />,
  <Route path="/xsat" element={<XSATEntry />} />,
  <Route path="/events" element={<Events />} />,
  <Route path="/event/PMtakedown/view" element={<EventManagementPage />} />,

  // Course Routes
  <Route path="/courses/generative-ai" element={<GenAICourse />} />,
  <Route path="/courses/generative-ai-fb" element={<GenAICourseAD />} />,
  <Route path="/courses/advance-performance-marketing-with-ai" element={<DMAICourse />} />,
  <Route path="/courses/data-analytics" element={<DataAnalyticsPage />} />,

  // Admin Routes
  <Route
    path="/admin"
    element={
      <RoleProtectedRoute>
        <AdminDashboard />
      </RoleProtectedRoute>
    }
  />,
  <Route
    path="/admin/enrollments"
    element={
      <RoleProtectedRoute>
        <EnrollmentDashboard />
      </RoleProtectedRoute>
    }
  />,
  <Route path="/admin/other-enquiries" element={<OtherEnquiries />} />,
  <Route
    path="/admin/analytics"
    element={
      <RoleProtectedRoute requiredRole={["admin", "sales"]}>
        <PerformanceAnalytics />
      </RoleProtectedRoute>
    }
  />,
  <Route
    path="/admin/analytics/adanalysis"
    element={
      <RoleProtectedRoute>
        <AdAnalysis />
      </RoleProtectedRoute>
    }
  />,
  <Route
    path="/admin/scholarships"
    element={
      <RoleProtectedRoute>
        <ScholarshipDetails />
      </RoleProtectedRoute>
    }
  />,
  <Route
    path="/admin/workshop-details"
    element={
      <RoleProtectedRoute requiredRole={["sales", "performance_marketer"]}>
        <WorkshopDetails />
      </RoleProtectedRoute>
    }
  />,

  // Blog Admin Routes
  <Route
    path="/admin/blogs"
    element={
      <RoleProtectedRoute requiredRole="blog_user">
        <BlogDashboard />
      </RoleProtectedRoute>
    }
  />,
  <Route
    path="/admin/blogs/new"
    element={
      <RoleProtectedRoute requiredRole="blog_user">
        <BlogForm onClose={() => {}} onSuccess={() => {}} />
      </RoleProtectedRoute>
    }
  />,
  <Route
    path="/admin/blogs/edit/:id"
    element={
      <RoleProtectedRoute requiredRole="blog_user">
        <BlogForm onClose={() => {}} onSuccess={() => {}} />
      </RoleProtectedRoute>
    }
  />,

  // Thank You Page
  <Route path="/thank-you" element={<ThankYouPageWrapper />} />,
  <Route path="/registration-sucessfull" element={<RegistrationSuccess />} />,

  // Workshop Payment Success
  <Route path="/workshop-payment/success/:orderId" element={<WorkshopPaymentSuccess />} />,
];
