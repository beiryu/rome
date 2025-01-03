import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../stores/useAuthStore';

const ProtectedRoute = ({ children, allowedRoles = ['user', 'staff'] }) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user?.role)) {
    // Redirect to appropriate dashboard based on role
    const redirectPath =
      user?.role === 'staff' ? '/staff/dashboard' : '/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
