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
// const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const Login = lazy(() => import("../pages/auth/Login"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const Refund = lazy(() => import("../pages/refund/Refund"));

// Course Routes
const GenAICourse = lazy(() => import("../pages/courses/EntryPoint/GenAIEntry"));
const GenAICourseAD = lazy(() => import("../pages/courses/EntryPoint/GenAIAd"));
const DMAICourse = lazy(() => import("../pages/courses/EntryPoint/DigitalMarketingEntry"));
const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

// Blog Admin Routes
const BlogDashboard = lazy(() => import("../pages/blogs/BlogDashboard"));
// const BlogForm = lazy(() => import("../pages/blogs/BlogForm"));
const Events = lazy(() => import("../pages/events/Events"));

export const mainRoutes = [
  <Route path="/" element={<HomePage />} />,
  <Route path="/about-us" element={<AboutPage />} />, 
  // <Route path="/blogs" element={<Blogs />} />,
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
 

  // Blog Admin Routes
  <Route
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
  <Route path="/thank-you" element={<ThankYouPageWrapper />} />,
  <Route path="/registration-sucessfull" element={<RegistrationSuccess />} />,

  // Workshop Payment Success
  <Route path="/workshop-payment/success/:orderId" element={<WorkshopPaymentSuccess />} />,
];
