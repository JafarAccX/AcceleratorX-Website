/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";
const DataSciencePageV2 = lazy(() => import("../pages/courses/datascience/v2/DataSciencePageV2"));
import AdvanceGenAIEntry from "../pages/courses/EntryPoint/AdvanceGenAIEntry";
import DataScienceFBPage from "../pages/courses/datascience-fb/DataScienceFBPage";

const ProductManagementEntry = lazy(() => import("../pages/courses/EntryPoint/ProductManagementEntry"));
const DataAnalyticsEntry = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsEntry"));
const DataAnalyticsAd = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsAd"));

// Course Pages
const GenAICourse = lazy(
  () => import("../pages/courses/EntryPoint/GenAIEntry")
);
const GenAICourseAD = lazy(() => import("../pages/courses/EntryPoint/GenAIAd"));

const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

const ProductManagementPageEIE = lazy(
  () => import("../pages/courses/EntryPoint/ProductManagementEIE")
);

const AIDMEntry = lazy(() => import("../pages/courses/EntryPoint/AIDMEntry"));
const AIDMFBPage = lazy(() => import("../pages/courses/ai-carsh-course-fb/ai-carsh-courseFBPage"));
const GenAIPage = lazy(() => import("../pages/courses/GenAI/GenAIPage"));
const AllProgramsPage = lazy(() => import("../pages/courses/allprograms-ads/AllProgramsPage"));
const AdvanceAICrashCoursePageEIE = lazy(() => import("../pages/courses/EntryPoint/AdvanceAICrashCourseEntry"));

export const courseRoutes = [
  // Main Course Routes
  <Route
    key="course-data-science"
    path="/courses/data-science"
    element={<DataSciencePageV2 />}
  />,
  <Route
    key="course-advance-genai"
    path="/courses/advance-generative-ai"
    element={<AdvanceGenAIEntry />}
  />,
  <Route
    key="course-all"
    path="/courses/all-programs"
    element={<AllProgramsPage />}
  />,
  <Route
    key="course-pm"
    path="/courses/product-management"
    element={<ProductManagementEntry />}
  />,
  <Route key="course-da-entry" path="/courses/data-analytics" element={<DataAnalyticsEntry />} />,
  <Route key="course-genai-entry" path="/courses/generative-ai" element={<GenAICourse />} />,
  <Route key="course-genai-new" path="/courses/gen-ai" element={<GenAIPage />} />,
  <Route key="course-aidm" path="/courses/ai-digital-marketing" element={<AIDMEntry />} />,

  <Route
    key="course-pm-fb"
    path="/courses/product-management-program-fb"
    element={<ProductManagementPageEIE />}
  />,
  <Route
    key="course-da-fb"
    path="/courses/data-analytics-program-fb"
    element={<DataAnalyticsPage />}
  />,
  <Route
    key="course-da-fb-b"
    path="/courses/data-analytics-program-fb-b"
    element={<DataAnalyticsPage />}
  />,
  <Route
    key="course-pm-eie"
    path="/courses/product-management-program-eie"
    element={<ProductManagementPageEIE />}
  />,
  <Route
    key="course-da-eie"
    path="/courses/data-analytics-program-eie"
    element={<DataAnalyticsAd />}
  />,
  <Route
    key="course-ds-fb"
    path="/courses/datascience-program-fb"
    element={<DataScienceFBPage />}
  />,
  <Route key="course-genai-fb" path="/courses/generative-ai-fb" element={<GenAICourseAD />} />,
  <Route key="course-genai-fb-b" path="/courses/generative-ai-fb-b" element={<GenAICourseAD />} />,
  <Route
    key="course-aidm-fb"
    path="/courses/ai-digital-marketing-fb"
    element={<AIDMFBPage />}
  />,
  <Route
    key="course-advance-ai-crash-course"
    path="/courses/advance-ai-crash-course"
    element={<AdvanceAICrashCoursePageEIE />}
  />,

];
