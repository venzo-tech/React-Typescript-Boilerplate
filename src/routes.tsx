import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LazyLoading } from "./components/LazyLoading/Lazyloading";
import { Login } from "./components/Login/Login";
import { NotFound } from "./NotFound";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Loader } from "./Loader";
import { ProtectedPage } from "./components/ProtectedPage/ProtectedPage";
import { ProtectedRoute } from "./components/ProtectedPage/ProtectedRoute";

export const RoutePagesComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const DashboardData = LazyLoading("./components/dashboard/Dashboard");

  return (
    <div>
      <Routes>
        {/* {!isAuthenticated ? ( */}
          <Route path="/" element={<Login />} />
        {/* // ) : (
        //   <> */}
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
          {/* </>
        )} */}
      </Routes>
    </div>
  );
};
