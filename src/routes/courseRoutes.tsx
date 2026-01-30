/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";

const ProductManagementEntry = lazy(() => import("../pages/courses/EntryPoint/ProductManagementEntry"));
const DataAnalyticsEntry = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsEntry"));
const DataAnalyticsAd = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsAd"));
const GenAiForPMEntry = lazy(() => import("../pages/courses/EntryPoint/GenAiForPMEntry"));

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
const AdvanceGenAIEntry = lazy(() => import("../pages/courses/EntryPoint/AdvanceGenAIEntry"));
const DataScienceEntry = lazy(() => import("../pages/courses/EntryPoint/DataScienceEntry"));

export const courseRoutes = [
  // Main Course Routes
  <Route
    key="course-data-science"
    path="/courses/data-science"
    element={<DataScienceEntry />}
  />,
  <Route
    key="course-advance-genai"
    path="/courses/advance-generative-ai"
    element={<AdvanceGenAIEntry />}
  />,
  <Route
    key="course-pm"
    path="/courses/product-management"
    element={<ProductManagementEntry />}
  />,
  <Route key="course-da-entry" path="/courses/data-analytics" element={<DataAnalyticsEntry />} />,
  <Route key="course-genai-entry" path="/courses/generative-ai" element={<GenAICourse />} />,
  <Route key="course-genai-pm" path="/courses/gen-ai-for-pms" element={<GenAiForPMEntry />} />,
  <Route key="course-aidm" path="/courses/ai-digital-marketing" element={<AIDMEntry />} />,

  // Ad Course Routes
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
  <Route key="course-genai-fb" path="/courses/generative-ai-fb" element={<GenAICourseAD />} />,
  <Route key="course-genai-fb-b" path="/courses/generative-ai-fb-b" element={<GenAICourseAD />} />,

];
