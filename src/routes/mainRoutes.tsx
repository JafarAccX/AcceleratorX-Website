/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";
import RoleProtectedRoute from "../components/RoleProtectedRoute";
import { ThankYouPageWrapper } from "./utils/routeUtils";
// // Lazy-load heavy pages that were previously imported eagerly
const WorkshopPaymentSuccess = lazy(() => import("../pages/workshop-payment/Success"));
const XSATEntry = lazy(() => import("../pages/courses/EntryPoint/XSATEntry"));
const EventManagementPage = lazy(() => import("../pages/events/event"));
const RegistrationSuccess = lazy(() => import("../pages/events/registration-successful"));

// Lazy imports for main routes
const HomePage = lazy(() => import("../pages/courses/EntryPoint/HomePage"));
const AboutPage = lazy(() => import("../pages/courses/EntryPoint/AboutPage"));
const BlogList = lazy(() => import("../pages/blogs/BlogList"));
const BlogDetail = lazy(() => import("../pages/blogs/BlogDetail"));
const Login = lazy(() => import("../pages/auth/Login"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const Refund = lazy(() => import("../pages/refund/Refund"));
const MentorPage = lazy(() => import("../pages/MentorPage"));

// Course Routes
const GenAICourse = lazy(() => import("../pages/courses/EntryPoint/GenAIEntry"));
const GenAICourseAD = lazy(() => import("../pages/courses/EntryPoint/GenAIAd"));
// const DMAICourse = lazy(() => import("../pages/courses/EntryPoint/DigitalMarketingEntry"));
const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

// Blog Admin Routes
const BlogDashboard = lazy(() => import("../pages/blogs/BlogDashboard"));
// const BlogForm = lazy(() => import("../pages/blogs/BlogForm"));
const Events = lazy(() => import("../pages/events/Events"));
const YearEnd = lazy(() => import("../pages/year-end/YearEnd"));

export const mainRoutes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about-us" element={<AboutPage />} />,
  <Route key="blogs" path="/blogs" element={<BlogList />} />,
  <Route key="blog-detail" path="/blogs/:slug" element={<BlogDetail />} />,
  <Route key="login" path="/login" element={<Login />} />,
  <Route key="privacy" path="/privacy-policy" element={<Privacy />} />,
  <Route key="terms" path="/terms-and-conditions" element={<Terms />} />,
  <Route key="refund" path="/refund-policy" element={<Refund />} />,
  <Route key="xsat" path="/xsat" element={<XSATEntry />} />,
  <Route key="events" path="/events" element={<Events />} />,
  <Route key="event-pm" path="/event/PMtakedown/view" element={<EventManagementPage />} />,

  // Course Routes
  <Route key="gen-ai" path="/courses/generative-ai" element={<GenAICourse />} />,
  <Route key="gen-ai-fb" path="/courses/generative-ai-fb" element={<GenAICourseAD />} />,
  // <Route key="digital-marketing" path="/courses/advance-performance-marketing-with-ai" element={<DMAICourse />} />,
  <Route key="data-analytics" path="/courses/data-analytics" element={<DataAnalyticsPage />} />,


  // Blog Admin Routes
  <Route
    key="blog-admin"
    path="/admin/blogs"
    element={
      <RoleProtectedRoute requiredRole="blog_user">
        <BlogDashboard />
      </RoleProtectedRoute>
    }
  />,
  // <Route
  //   path="/admin/blogs/new"
  //   element={
  //     <RoleProtectedRoute requiredRole="blog_user">
  //       <BlogForm onClose={() => {}} onSuccess={() => {}} />
  //     </RoleProtectedRoute>
  //   }
  // />,
  // <Route
  //   path="/admin/blogs/edit/:id"
  //   element={
  //     <RoleProtectedRoute requiredRole="blog_user">
  //       <BlogForm onClose={() => {}} onSuccess={() => {}} />
  //     </RoleProtectedRoute>
  //   }
  // />,

  // Thank You Page
  <Route key="thank-you" path="/thank-you" element={<ThankYouPageWrapper />} />,
  <Route key="registration-success" path="/registration-sucessfull" element={<RegistrationSuccess />} />,

  // Workshop Payment Success
  <Route key="workshop-payment-success" path="/workshop-payment/success/:orderId" element={<WorkshopPaymentSuccess />} />,

  // Mentor Page
  <Route key="mentor" path="/mentor/:id" element={<MentorPage />} />,

  //year end route
  <Route key="year-end" path="/year-end" element={<YearEnd />} />,
];
