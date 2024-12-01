import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { FileText, Users, LogOut } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const role = authService.getRole();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Welcome, {role === 'admin' ? 'Administrator' : 'Sales Team Member'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {role === 'admin' && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/admin/blogs')}
              className="cursor-pointer bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Blog Management</h2>
                  <p className="text-gray-500 mt-1">Manage and create blog posts</p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/admin/enrollments')}
            className="cursor-pointer bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Enrollment Data</h2>
                <p className="text-gray-500 mt-1">View and manage enrollment submissions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
