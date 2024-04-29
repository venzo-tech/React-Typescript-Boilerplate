import React from 'react';

export const LazyLoading = (path:any) => {
  return React.lazy(() => import(`${path}.tsx`)); // Import component based on path
};
