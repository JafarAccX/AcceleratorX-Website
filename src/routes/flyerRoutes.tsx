import { Route } from "react-router-dom";
import GENAIFlyers from "../components/GENAIFlyers";
import DMFlyers from "../components/DMFlyers";
import PMFlyers from "../components/PMFlyers";
import DAFlyers from "../components/DAFlyers";

export const flyerRoutes = [
  <Route path="/fa-register/gen-ai" element={<GENAIFlyers />} />,
  <Route path="/fa-register/pm" element={<PMFlyers />} />,
  <Route path="/fa-register/dm" element={<DMFlyers />} />,
  <Route path="/fa-register/da" element={<DAFlyers />} />,
];
