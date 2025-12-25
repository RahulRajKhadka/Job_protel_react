import React from 'react'
import { useUser } from '@clerk/clerk-react'

const OnBoarding = () => {

  const {user,isLoaded}=useUser();
  console.log("user data" ,user)
  if(!isLoaded){

    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>;
  }
  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default OnBoarding
