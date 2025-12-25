import React from 'react'
import {getJobs} from "../api/apiJobs.js"
import { useSession } from '@clerk/clerk-react'
import { useEffect } from 'react'


const JobListing = () => {

  const {session}=useSession()

  const fetchJobs=async()=>{
    const supbaseAcessToken =await session.getToken({
      template:"supabase",
    })
    const data=await getJobs(supbaseAcessToken);
  }


  useEffect(()=>
  {
fetchJobs();
  },[]);
  return (
    <div>
      <h1>JobListing</h1>
    </div>
  )
}

export default JobListing
