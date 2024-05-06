import React, { useState, Suspense } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { LazyLoading } from "./components/LazyLoading/Lazyloading";
import { Login } from "./components/Login/Login";
import { NotFound } from "./NotFound";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Loader } from "./Loader";

// const SignIn = React.lazy(() => import("./components/Login/Login.tsx"));
// const SignUp = React.lazy(() => import("./components/SignUp"));
// const Dashboard = React.lazy(() => import("./components/Dashboard"));

export const RoutePagesComponent = () => {
  const isAuthenticated = false; // Check if the user is authenticated
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  //   const DashboardData = LazyLoading("./components/dashboard/Dashboard");

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/protected-page"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <PrivateRoute isAuthenticated={isAuthenticated} element={<Dashboard />} /> */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// PrivateRoute component to handle protected routes
const PrivateRoute: React.FC<{ isAuthenticated: boolean; element: JSX.Element }> = ({
  isAuthenticated,
  element,
}) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};
