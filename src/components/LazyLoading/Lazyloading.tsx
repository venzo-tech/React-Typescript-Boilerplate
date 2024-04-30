import React from 'react';

export const LazyLoading = (path:string) => {
  return React.lazy(() => import(`${path}.tsx`)); // Import component based on path
};


// import React, { lazy, Suspense } from 'react';

// interface Component {
//   default: React.ComponentType; // Generic component type
// }

// type RoutePath = string; // Type for route path strings

// const componentsMap: Record<RoutePath, Component> = {
//   '/home': lazy(() => import('../pages/HomePage')), // Lazy import HomePage
//   '/about': lazy(() => import('../pages/AboutPage')), // Lazy import AboutPage
//   // Add more mappings for other routes (lazy imports)
// };

// export const LazyLoading = (path: RoutePath) => {
//   const Component = componentsMap[path];
//   if (!Component) {
//     throw new Error(`Invalid path for lazy loading: ${path}`);
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component.default /> {/* Access the default export */}
//     </Suspense>
//   );
// };

