/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";

const GENAIFlyers = lazy(() => import("../components/GENAIFlyers"));
const DMFlyers = lazy(() => import("../components/DMFlyers"));
const PMFlyers = lazy(() => import("../components/PMFlyers"));
const DAFlyers = lazy(() => import("../components/DAFlyers"));

export const flyerRoutes = [
  <Route path="/fa-register/gen-ai" element={<GENAIFlyers />} />,
  <Route path="/fa-register/pm" element={<PMFlyers />} />,
  <Route path="/fa-register/dm" element={<DMFlyers />} />,
  <Route path="/fa-register/da" element={<DAFlyers />} />,
];
