import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  if(user!==undefined && !user?)

  return children;
};

export default ProtectedRoute;
