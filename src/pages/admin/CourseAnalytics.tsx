import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../../services/authService";
import { LogOut, BarChart } from "lucide-react";
import BackButton from "../../components/common/BackButton";

const CourseAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const userRole = authService.getRole();

  React.useEffect(() => {
    if (userRole !== "admin") {
      navigate("/admin");
      return;
    }
  }, [navigate, userRole]);

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 mt-16 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Course Analytics
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              View detailed analytics for enrollments and workshops
            </p>
            <BackButton />
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Enrollment Analytics Card */}
          <Link
            to="/admin/enrollment-analytics"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Enrollment Analytics
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Track and analyze course enrollment metrics
                </p>
              </div>
            </div>
          </Link>

          {/* Workshop Analytics Card */}
          <Link
            to="/admin/workshop-analytics"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Workshop Analytics
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Monitor workshop registrations and performance
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseAnalytics;
