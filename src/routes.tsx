import React, { useState, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LazyLoading } from "./components/LazyLoading/Lazyloading";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { NotFound } from "./NotFound";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Loader } from "./Loader";
import { ResetPassword } from "./components/Login/ResetPassword";

// const SignIn = React.lazy(() => import("./components/Login/Login.tsx"));
// const SignUp = React.lazy(() => import("./components/SignUp"));
// const Dashboard = React.lazy(() => import("./components/Dashboard"));

export const RoutePagesComponent = () => {
  let isAuthenticated = true; // Check if the user is authenticated
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const DashboardData = LazyLoading("./components/dashboard/Dashboard");

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          {/* Conditional Route with Navigate wrapped in Fragment */}
          <Route
            path="/dashboard"
            element={
              !isAuthenticated ? <Navigate to="/login" /> : <Dashboard /> // Only render Navigate if not authenticated
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};