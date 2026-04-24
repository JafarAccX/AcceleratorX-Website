/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";
import { ThankYouPageWrapper } from "./utils/routeUtils";
import BlogDetail from "../pages/blogs/BlogDetail";
// Lightweight pages - kept as eager imports
import WorkshopPaymentSuccess from "../pages/workshop-payment/Success";
import CoursePaymentSuccess from "../pages/course-payment/Success";
import EventManagementPage from "../pages/events/event";
import RegistrationSuccess from "../pages/events/registration-successful";
import BlogList from "../pages/blogs/BlogList";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Refund from "../pages/refund/Refund";
import MentorPage from "../pages/MentorPage";
import Events from "../pages/events/Events";

// Heavy pages - lazy loaded for performance
const HomePage = lazy(() => import("../pages/courses/EntryPoint/HomePage"));
const AboutPage = lazy(() => import("../pages/courses/EntryPoint/AboutPage"));
const AICrashCoursePage = lazy(() => import("../pages/courses/AICrashCourse/AICrashCoursePage"));

export const mainRoutes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about-us" element={<AboutPage />} />,
  <Route key="blogs" path="/blogs" element={<BlogList />} />,
  <Route key="blog-detail" path="/blogs/:slug" element={<BlogDetail />} />,
  <Route key="privacy" path="/privacy-policy" element={<Privacy />} />,
  <Route key="terms" path="/terms-and-conditions" element={<Terms />} />,
  <Route key="refund" path="/refund-policy" element={<Refund />} />,
  <Route key="events" path="/events" element={<Events />} />,
  <Route key="event-pm" path="/event/PMtakedown/view" element={<EventManagementPage />} />,


  // Thank You Page
  <Route key="thank-you" path="/thank-you" element={<ThankYouPageWrapper />} />,
  <Route key="registration-success" path="/registration-sucessfull" element={<RegistrationSuccess />} />,

  // Workshop Payment Success
  <Route key="workshop-payment-success" path="/workshop-payment/success/:orderId" element={<WorkshopPaymentSuccess />} />,

  // Course Payment Success
  <Route key="course-payment-success" path="/course-payment/success/:orderId" element={<CoursePaymentSuccess />} />,

  // Mentor Page
  <Route key="mentor" path="/mentor/:id" element={<MentorPage />} />,

  // Season 2
  <Route key="ai-crash-course" path="/advance-ai-crash-course" element={<AICrashCoursePage />} />,
];
