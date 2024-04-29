import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyLoading } from './components/LazyLoading/Lazyloading';
import { Login } from './components/Login/Login';
import { NotFound } from './NotFound';

export const RoutePagesComponent = () => {
    const Component = LazyLoading('/pages/[id]');
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}> {/* Fallback UI while components load */}
              <Component /> {/* Dynamically import route component */}
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
