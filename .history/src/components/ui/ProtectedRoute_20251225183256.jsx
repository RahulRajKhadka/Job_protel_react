import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  // Wait for Clerk to load
  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }


  if (user !== undefined && !user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  return children;
};

export default ProtectedRoute;