import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import {BarLoader} from  "react-spinner"
import { useNavigate } from 'react-router-dom'
import {Button} from "../components/ui/button.jsx"
const OnBoarding = () => {

  const Navigate =useNavigate();
  const navigateUser=(currRole)=>{
    navigate
  }

  const handleRoleSelection=async (role) => {
    await user.update({unsafeMetadata:{role},
    }).then(()=>{
      Navigate(role==="recrutier" ? "/post-job": "/jobs");

    })
    .catch((err)=>{
      console.error ("Error updating role:",err);
    })
    
  }

  const {user,isLoaded}=useUser();
  console.log("user data" ,user)



  useEffect(()=>{

   if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  },[user]);

  if(!isLoaded){

    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>;
  }





  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <h2 className='gradient-title fornt-extrabold text-7xl sm:text-8xl tracking-tighter'>I am a ...</h2>


<div className='mt-16 gird grid-cols-2 gap-4 w-full md:px-40 '>
  <Button variant="blue" className="h-36 text-2xl" onClick={
    ()=>handleRoleSelection("candidate")
  }>
    Candidate
  </Button>
   <Button variant="destructive" className="h-36 text-2xl" onClick={
    ()=>handleRoleSelection("recrutiter")
  }>
    Recruiter
  </Button>
</div>
    </div>
  )
}

export default OnBoarding
