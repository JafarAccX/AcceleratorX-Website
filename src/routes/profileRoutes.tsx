import { lazy } from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

// Profile Components
const ProfileOverview = lazy(() => import("../pages/profile/profileOverview"));

// Profile Pages
const ProfilePageOverview = () => (
  <>
    <ProfileOverview />
  </>
);

export const profileRoutes = [
  // <ProtectedRoute></ProtectedRoute>
  // <Route   />

  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <ProfilePageOverview />
      </ProtectedRoute>
    }
  >
    <Route index element={<ProfilePageOverview />} />
  </Route>,
];
