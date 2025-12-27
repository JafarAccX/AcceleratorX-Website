import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Profile Components
const ProfileOverview = lazy(() => import("../pages/profile/profileOverview"));

export function ProfileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfileOverview />} />
      {/* Add other profile sub-routes here */}
      {/* e.g., <Route path="settings" element={<Settings />} /> */}
    </Routes>
  );
}
