/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";
import DataScienceFBPage from "../pages/courses/datascience-fb/DataScienceFBPage";

const ProductManagementEntry = lazy(() => import("../pages/courses/EntryPoint/ProductManagementEntry"));
const DataAnalyticsEntry = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsEntry"));
const DataAnalyticsAd = lazy(() => import("../pages/courses/EntryPoint/DataAnalyticsAd"));
const GenAiForPMEntry = lazy(() => import("../pages/courses/EntryPoint/GenAiForPMEntry"));

// Course Pages
const GenAICourse = lazy(
  () => import("../pages/courses/EntryPoint/GenAIEntry")
);
const GenAICourseAD = lazy(() => import("../pages/courses/EntryPoint/GenAIAd"));
// const DMAICourse = lazy(
//   () => import("../pages/courses/EntryPoint/DigitalMarketingEntry")
// );
const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

const ProductManagementPageEIE = lazy(
  () => import("../pages/courses/EntryPoint/ProductManagementEIE")
);

const AIDMEntry = lazy(() => import("../pages/courses/EntryPoint/AIDMEntry"));
const AllProgramsPage = lazy(() => import("../pages/courses/allprograms-ads/AllProgramsPage"));

export const courseRoutes = [
  // Main Course Routes
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
  <Route key="course-genai-pm" path="/courses/gen-ai-for-pms" element={<GenAiForPMEntry />} />,
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

];
