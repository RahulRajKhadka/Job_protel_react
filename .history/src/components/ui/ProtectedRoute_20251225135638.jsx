
import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isSignedIn, user, isLoaded}=userUser()
    const {Pathname}=useLocation();
  
if(isLoaded)

  
}

export default ProtectedRoute
