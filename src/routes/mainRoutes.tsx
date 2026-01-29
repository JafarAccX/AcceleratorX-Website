/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";
import { ThankYouPageWrapper } from "./utils/routeUtils";
import BlogDetail from "../pages/blogs/BlogDetail";
// // Lazy-load heavy pages that were previously imported eagerly
const WorkshopPaymentSuccess = lazy(() => import("../pages/workshop-payment/Success"));
const CoursePaymentSuccess = lazy(() => import("../pages/course-payment/Success"));
const XSATEntry = lazy(() => import("../pages/courses/EntryPoint/XSATEntry"));
const EventManagementPage = lazy(() => import("../pages/events/event"));
const RegistrationSuccess = lazy(() => import("../pages/events/registration-successful"));

// Lazy imports for main routes
const HomePage = lazy(() => import("../pages/courses/EntryPoint/HomePage"));
const AboutPage = lazy(() => import("../pages/courses/EntryPoint/AboutPage"));
const BlogList = lazy(() => import("../pages/blogs/BlogList"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const Refund = lazy(() => import("../pages/refund/Refund"));
const MentorPage = lazy(() => import("../pages/MentorPage"));


const Events = lazy(() => import("../pages/events/Events"));
const ProjectListing = lazy(() => import("../pages/project-listing/ProjectListing"));
const Season2Page = lazy(() => import("../pages/Season2/Season2Page"));
const AICrashCoursePage = lazy(() => import("../pages/courses/AICrashCourse/AICrashCoursePage"));

export const mainRoutes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about-us" element={<AboutPage />} />,
  <Route key="blogs" path="/blogs" element={<BlogList />} />,
  <Route key="blog-detail" path="/blogs/:slug" element={<BlogDetail />} />,
  <Route key="privacy" path="/privacy-policy" element={<Privacy />} />,
  <Route key="terms" path="/terms-and-conditions" element={<Terms />} />,
  <Route key="refund" path="/refund-policy" element={<Refund />} />,
  <Route key="xsat" path="/xsat" element={<XSATEntry />} />,
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

  // project-listing
  <Route key="project-listing" path="/project-listing" element={<ProjectListing />} />,

  // Season 2
  <Route key="season-2" path="/ai-crash-course" element={<Season2Page />} />,
  <Route key="ai-crash-course" path="/advance-ai-crash-course" element={<AICrashCoursePage />} />,
];
