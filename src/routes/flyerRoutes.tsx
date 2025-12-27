/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";

const GENAIFlyers = lazy(() => import("../components/GENAIFlyers"));
const DMFlyers = lazy(() => import("../components/DMFlyers"));
const PMFlyers = lazy(() => import("../components/PMFlyers"));
const DAFlyers = lazy(() => import("../components/DAFlyers"));

export const flyerRoutes = [
  <Route key="flyer-genai" path="/fa-register/gen-ai" element={<GENAIFlyers />} />,
  <Route key="flyer-pm" path="/fa-register/pm" element={<PMFlyers />} />,
  <Route key="flyer-dm" path="/fa-register/dm" element={<DMFlyers />} />,
  <Route key="flyer-da" path="/fa-register/da" element={<DAFlyers />} />,
];
