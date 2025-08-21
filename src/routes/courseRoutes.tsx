/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";

const ProductManagementEntry = lazy(() => import("../pages/courses/EntryPoint/ProductManagementEntry"));
const DataAnalyticsEntry = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsEntry"));
const DataAnalyticsAd = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsAd"));
const GenAiForPMEntry = lazy(() => import("../pages/courses/EntryPoint/GenAiForPMEntry"));
const KuppamCourses = lazy(() => import("../pages/courses/EntryPoint/KuppamCourses"));

// Course Pages
const GenAICourse = lazy(
  () => import("../pages/courses/EntryPoint/GenAIEntry")
);
const GenAICourseAD = lazy(() => import("../pages/courses/EntryPoint/GenAIAd"));
const DMAICourse = lazy(
  () => import("../pages/courses/EntryPoint/DigitalMarketingEntry")
);
const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

const ProductManagementPageEIE = lazy(
  () => import("../pages/courses/EntryPoint/ProductManagementEIE")
);

const N8nAutomationEntry = lazy(() => import("../pages/courses/EntryPoint/n8nAutomationEntry"));

export const courseRoutes = [
  // Main Course Routes
  <Route
    path="/courses/product-management"
    element={<ProductManagementEntry />}
  />,
  <Route path="/courses/data-analytics" element={<DataAnalyticsEntry />} />,
  <Route path="/courses/generative-ai" element={<GenAICourse />} />,
  <Route path="/courses/gen-ai-for-pms" element={<GenAiForPMEntry />} />,
  <Route
    path="/courses/advance-performance-marketing-with-ai"
    element={<DMAICourse />}
  />,

  // Ad Course Routes
  <Route
    path="/courses/product-management-program-fb"
    element={<ProductManagementPageEIE />}
  />,
  <Route
    path="/courses/data-analytics-program-fb"
    element={<DataAnalyticsPage />}
  />,
  <Route
    path="/courses/data-analytics-program-fb-b"
    element={<DataAnalyticsPage />}
  />,
  <Route
    path="/courses/product-management-program-eie"
    element={<ProductManagementPageEIE />}
  />,
  <Route
    path="/courses/data-analytics-program-eie"
    element={<DataAnalyticsAd />}
  />,
  <Route path="/courses/generative-ai-fb" element={<GenAICourseAD />} />,
  <Route path="/courses/generative-ai-fb-b" element={<GenAICourseAD />} />,
  <Route
    path="/courses/n8n-automation"
    element={<N8nAutomationEntry />}
  />,
  <Route
    path="/courses/onsite-workshopz"
    element={<KuppamCourses />}
  />,
];
