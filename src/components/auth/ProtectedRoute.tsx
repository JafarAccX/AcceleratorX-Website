import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setIsAuthenticated(userData ? JSON.parse(userData).isAuthenticated : false);
  }, []);

  // Show loading spinner while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if user is not authenticated
  if (!isAuthenticated) {
    // Redirect to register page if not authenticated
    return <Navigate to="/sign-in" replace />;
  }

  // If authenticated, render the protected component
  return <>{children}</>;
};
