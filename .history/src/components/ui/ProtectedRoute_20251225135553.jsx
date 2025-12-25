
import React from 'react'
import { useUser } from '@clerk/clerk-react';


const ProtectedRoute = ({children}) => {
    const {isSignedIn, user, isLoaded}=userUser()
    const {Pathname}=useLocation();
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
