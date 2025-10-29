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
// const DMAICourse = lazy(
//   () => import("../pages/courses/EntryPoint/DigitalMarketingEntry")
// );
const DataAnalyticsPage = lazy(() => import("../pages/courses/dataanalytics"));

const ProductManagementPageEIE = lazy(
  () => import("../pages/courses/EntryPoint/ProductManagementEIE")
);
 
const AIDMEntry = lazy(() => import("../pages/courses/EntryPoint/AIDMEntry"));

export const courseRoutes = [
  // Main Course Routes
  <Route
    key="course-pm"
    path="/courses/product-management"
    element={<ProductManagementEntry />}
  />,
  <Route key="course-da-entry" path="/courses/data-analytics" element={<DataAnalyticsEntry />} />,
  <Route key="course-genai-entry" path="/courses/generative-ai" element={<GenAICourse />} />,
  <Route key="course-genai-pm" path="/courses/gen-ai-for-pms" element={<GenAiForPMEntry />} />,
  <Route key="course-aidm" path="/courses/ai-digital-marketing" element={<AIDMEntry />} />,
  // <Route
  //   key="course-dmai"
  //   path="/courses/advance-performance-marketing-with-ai"
  //   element={<DMAICourse />}
  // />,

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

  <Route
    key="course-kuppam"
    path="/courses/onsite-workshopz"
    element={<KuppamCourses />}
  />,
];
