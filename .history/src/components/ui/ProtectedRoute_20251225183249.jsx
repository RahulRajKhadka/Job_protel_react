import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  // Wait for Clerk to load
  if (!isLoaded) return null;

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // Redirect to onboarding if user doesn't have a role (except if already on onboarding page)
  if (user !== undefined && !user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  return children;
};

export default ProtectedRoute;