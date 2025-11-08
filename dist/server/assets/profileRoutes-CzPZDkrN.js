import { jsx } from "react/jsx-runtime";
import { lazy } from "react";
import { Routes, Route } from "react-router";
const ProfileOverview = lazy(() => import("./profileOverview-BcMGHg9k.js"));
function ProfileRoutes() {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(ProfileOverview, {}) }) });
}
export {
  ProfileRoutes
};
