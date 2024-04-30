import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, isAuthenticated }:any) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login
  }
  console.log(children, isAuthenticated, "???")
  return children; // Render the wrapped component
};

