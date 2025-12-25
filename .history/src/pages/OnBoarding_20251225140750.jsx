import React from 'react'
import { useUser } from '@clerk/clerk-react'

const OnBoarding = () => {

  const {user}=useUser
  return (
    <div>
      <h1>Onboarding</h1>
    </div>
  )
}

export default OnBoarding
