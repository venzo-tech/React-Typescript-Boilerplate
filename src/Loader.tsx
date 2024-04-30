import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClimbingBoxLoader color="#36d7b7" />
    </div>
  )
}
