import React from 'react'
import { useUser } from '@clerk/clerk-react'
import {BarLoader} from  "react-spinner"
const OnBoarding = () => {

  const {user,isLoaded}=useUser();
  console.log("user data" ,user)

  if(!isLoaded){

    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>;
  }
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <h2 className='gradient-title fornt-extrabold text-7xl sm:text-8xl tracking-tighter'>I am a ...</h2>


<div className='mt-16 gird grid-cols-2 gap-4 w-full md:px-40 '></div>
    </div>
  )
}

export default OnBoarding
