import React from 'react';
import { Navigate } from 'react-router-dom';
import { authService, UserRole } from '../services/authService';

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const isAuthenticated = authService.isAuthenticated();
  const hasAccess = requiredRole ? authService.hasAccess(requiredRole) : true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!hasAccess) {
    return <Navigate to="/admin" />;
  }

  return <>{children}</>;
};

export default RoleProtectedRoute;
