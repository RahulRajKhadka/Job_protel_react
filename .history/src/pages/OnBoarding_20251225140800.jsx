import React from 'react'
import { useUser } from '@clerk/clerk-react'

const OnBoarding = () => {

  const {user}=useUser();
  console.log(user)
  return (
    <div>
      <h1>Onboarding</h1>
    </div>
  )
}

export default OnBoarding
