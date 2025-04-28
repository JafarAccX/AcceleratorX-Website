import { lazy } from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

// Profile Components
const ProfileOverview = lazy(() => import("../pages/profile/profileOverview"));

export const profileRoutes = [
  // <ProtectedRoute></ProtectedRoute>
  // <Route   />

  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <ProfileOverview />
      </ProtectedRoute>
    }
  >
    <Route index element={<ProfileOverview />} />
  </Route>,
];
