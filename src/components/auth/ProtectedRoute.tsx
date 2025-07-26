import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    // Render a loading spinner while checking auth status
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

  // If authenticated, render the nested child routes
  return <Outlet />;
};
